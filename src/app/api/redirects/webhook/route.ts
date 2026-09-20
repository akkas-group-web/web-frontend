// app/api/redirects/webhook/route.ts
//
// WordPress mu-plugin'inden gelen slug değişikliklerini alır,
// HMAC ile doğrular ve redirect geçmişini canonical URL'ye göre
// normalize ederek redirects tablosuna kaydeder.
//
// Temel kural:
// Aynı post için yeni slug canonical kabul edilir.
// Postun geçmiş URL'leri yeni canonical URL'ye yönlendirilir.
// Böylece A -> B -> A gibi redirect cycle'ları oluşmaz.

import { NextRequest, NextResponse } from "next/server";
import crypto from "node:crypto";
import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: process.env.REDIRECTS_DB_HOST || "cms-akkasgroup-mysql",
  port: Number(process.env.REDIRECTS_DB_PORT || 3306),
  user: process.env.REDIRECTS_DB_USER,
  password: process.env.REDIRECTS_DB_PASSWORD,
  database: process.env.REDIRECTS_DB_NAME || "akkasgroup_redirects",
  waitForConnections: true,
  connectionLimit: 5,
});

function timingSafeEqual(a: string, b: string): boolean {
  const bufA = Buffer.from(a, "hex");
  const bufB = Buffer.from(b, "hex");

  if (bufA.length !== bufB.length) {
    return false;
  }

  return crypto.timingSafeEqual(bufA, bufB);
}

function isSafeInternalPath(path: unknown): path is string {
  if (typeof path !== "string" || path.length === 0) {
    return false;
  }

  if (!path.startsWith("/")) {
    return false;
  }

  if (path.startsWith("//")) {
    return false;
  }

  if (path.includes("://")) {
    return false;
  }

  return true;
}

interface WebhookPayload {
  wp_post_id?: number | null;
  old_uri?: string;
  new_uri?: string;
}

export async function POST(req: NextRequest): Promise<NextResponse> {
  const webhookSecret = process.env.REDIRECT_WEBHOOK_SECRET;

  if (!webhookSecret) {
    console.error("REDIRECT_WEBHOOK_SECRET tanımlı değil");

    return NextResponse.json(
      { error: "server_misconfigured" },
      { status: 500 },
    );
  }

  const rawBody = await req.text();
  const signature = req.headers.get("x-redirect-signature");

  if (!signature) {
    return NextResponse.json({ error: "missing_signature" }, { status: 401 });
  }

  const expectedSignature = crypto
    .createHmac("sha256", webhookSecret)
    .update(rawBody)
    .digest("hex");

  if (!timingSafeEqual(signature, expectedSignature)) {
    return NextResponse.json({ error: "invalid_signature" }, { status: 401 });
  }

  let payload: WebhookPayload;

  try {
    payload = JSON.parse(rawBody) as WebhookPayload;
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  const { wp_post_id, old_uri, new_uri } = payload;

  if (!isSafeInternalPath(old_uri) || !isSafeInternalPath(new_uri)) {
    return NextResponse.json({ error: "invalid_path" }, { status: 400 });
  }

  if (old_uri === new_uri) {
    return NextResponse.json({
      ok: true,
      skipped: "no_change",
    });
  }

  const postId = typeof wp_post_id === "number" ? wp_post_id : null;

  if (postId === null) {
    return NextResponse.json({ error: "missing_wp_post_id" }, { status: 400 });
  }

  const connection = await pool.getConnection();

  try {
    await connection.beginTransaction();

    /*
     * Aynı postun redirect geçmişini kilitle.
     *
     * Böylece aynı post için eş zamanlı iki slug değişikliği
     * geldiğinde birbirini bozma ihtimali azalır.
     */
    await connection.query(
      `SELECT id
       FROM redirects
       WHERE wp_post_id = ?
       FOR UPDATE`,
      [postId],
    );

    /*
     * Bu postun geçmişteki bütün URL'lerini yeni canonical URL'ye
     * bağla.
     *
     * Örneğin:
     *
     * A -> B
     * B -> C
     *
     * sonrası yeni canonical C ise:
     *
     * A -> C
     * B -> C
     *
     * olur.
     *
     * DELETE kullanmıyoruz. Böylece redirects_svc kullanıcısının
     * DELETE yetkisine ihtiyaç kalmıyor.
     */
    await connection.execute(
      `UPDATE redirects
       SET new_uri = ?,
           status_code = 301,
           source = 'wp_webhook',
           updated_at = CURRENT_TIMESTAMP
       WHERE wp_post_id = ?
         AND old_uri <> ?`,
      [new_uri, postId, new_uri],
    );

    await connection.execute(
      `UPDATE redirects
   SET new_uri = ?,
       status_code = 301,
       updated_at = CURRENT_TIMESTAMP
   WHERE target_wp_post_id = ?
     AND old_uri <> ?`,
      [new_uri, postId, new_uri],
    );

    /*
     * Eski URL zaten kayıtlıysa mevcut kaydı güncelle.
     * Yoksa yeni redirect oluştur.
     *
     * Eğer new_uri daha önce bu post için old_uri olarak kayıtlıysa,
     * bu upsert mevcut kaydı yeni canonical URL'ye yönlendirir.
     */
    await connection.execute(
      `INSERT INTO redirects
        (wp_post_id, old_uri, new_uri, status_code, source)
       VALUES (?, ?, ?, 301, 'wp_webhook')
       ON DUPLICATE KEY UPDATE
         new_uri = VALUES(new_uri),
         wp_post_id = VALUES(wp_post_id),
         status_code = 301,
         source = 'wp_webhook',
         updated_at = CURRENT_TIMESTAMP`,
      [postId, old_uri, new_uri],
    );

    await connection.commit();

    console.log(
      `[redirects/webhook] normalized post ${postId}: ${old_uri} -> ${new_uri}`,
    );

    return NextResponse.json({
      ok: true,
      normalized: true,
      wp_post_id: postId,
      old_uri,
      new_uri,
    });
  } catch (err) {
    await connection.rollback();

    console.error("[redirects/webhook] DB hatası:", err);

    return NextResponse.json({ error: "db_error" }, { status: 500 });
  } finally {
    connection.release();
  }
}
