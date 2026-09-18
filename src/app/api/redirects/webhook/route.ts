// app/api/redirects/webhook/route.ts
//
// WordPress mu-plugin'inden gelen slug değişikliği bildirimlerini alır,
// HMAC ile doğrular, redirects tablosuna upsert eder.
//
// Beklenen payload:
// {
//   "wp_post_id": 123,
//   "old_uri": "/hizmetlerimiz/akkas-karbon/eski-slug",
//   "new_uri": "/hizmetlerimiz/akkas-karbon/yeni-slug"
// }
//
// Header: x-redirect-signature = HMAC-SHA256(body, REDIRECT_WEBHOOK_SECRET) hex

import { NextRequest, NextResponse } from "next/server";
import crypto from "node:crypto";
import mysql, { type ResultSetHeader } from "mysql2/promise";

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
  if (bufA.length !== bufB.length) return false;
  return crypto.timingSafeEqual(bufA, bufB);
}

// Sadece kendi domain/path'lerimiz altındaki relative path'leri kabul et.
// Dışarıya (başka bir domaine) yönlendirme kaydı asla yazılamaz.
function isSafeInternalPath(path: unknown): path is string {
  if (typeof path !== "string" || path.length === 0) return false;
  if (!path.startsWith("/")) return false;
  if (path.startsWith("//")) return false; // protocol-relative URL koruması
  if (path.includes("://")) return false;
  return true;
}

interface WebhookPayload {
  wp_post_id?: number | null;
  old_uri?: string;
  new_uri?: string;
}

export async function POST(req: NextRequest): Promise<NextResponse> {
  // Env değişkenini fonksiyon içinde okuyoruz ki TypeScript kontrolden
  // sonra tipini "string" olarak daraltabilsin (module-level const'larda
  // bu daraltma bazı TS ayarlarında kaybolabiliyor).
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
    return NextResponse.json({ ok: true, skipped: "no_change" });
  }

  const params: [number | null, string, string] = [
    typeof wp_post_id === "number" ? wp_post_id : null,
    old_uri,
    new_uri,
  ];

  try {
    await pool.execute<ResultSetHeader>(
      `INSERT INTO redirects (wp_post_id, old_uri, new_uri, status_code, source)
       VALUES (?, ?, ?, 301, 'wp_webhook')
       ON DUPLICATE KEY UPDATE new_uri = VALUES(new_uri), wp_post_id = VALUES(wp_post_id), updated_at = CURRENT_TIMESTAMP`,
      params,
    );

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[redirects/webhook] DB hatası:", err);
    return NextResponse.json({ error: "db_error" }, { status: 500 });
  }
}
