// proxy.ts (proje kökünde, app/ klasörüyle aynı seviyede — src/ kullanıyorsan src/proxy.ts)
//
// Next.js 16'da "middleware.ts" adı "proxy.ts" olarak değişti (export edilen
// fonksiyon adı da middleware -> proxy oldu). Her istekte çalışır. Gelen
// path'i redirects tablosundan (kısa süreli cache üzerinden) kontrol eder;
// eşleşme varsa 301 ile yeni adrese yönlendirir, yoksa normal akışa bırakır.
//
// Not: proxy.ts varsayılan olarak Node.js runtime'ında çalışıyor (eski
// middleware.ts Edge runtime'daydı), bu yüzden mysql2 gibi Node API'lerine
// ihtiyaç duyan paketler ekstra ayar gerekmeden çalışır.

import { NextRequest, NextResponse } from "next/server";
import mysql from "mysql2/promise";

export const config = {
  // Next.js'in kendi sistem path'lerini (_next, api, statik dosyalar)
  // proxy'nin dışında tutuyoruz — hem performans hem gereksiz DB
  // sorgusu olmasın diye.
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|api/|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|css|js|woff|woff2)$).*)",
  ],
};

interface RedirectMap {
  [oldPath: string]: string;
}

let cache: RedirectMap = {};
let cacheLoadedAt = 0;
let cacheLoadingPromise: Promise<void> | null = null;

const CACHE_TTL_MS = 60_000; // 60 saniye

const pool = mysql.createPool({
  host: process.env.REDIRECTS_DB_HOST || "cms-akkasgroup-mysql",
  port: Number(process.env.REDIRECTS_DB_PORT || 3306),
  user: process.env.REDIRECTS_DB_USER,
  password: process.env.REDIRECTS_DB_PASSWORD,
  database: process.env.REDIRECTS_DB_NAME || "akkasgroup_redirects",
  waitForConnections: true,
  connectionLimit: 3,
});

async function loadCache(): Promise<void> {
  try {
    const [rows] = await pool.query<mysql.RowDataPacket[]>(
      "SELECT old_uri, new_uri FROM redirects",
    );

    const next: RedirectMap = {};
    for (const row of rows) {
      next[row.old_uri as string] = row.new_uri as string;
    }

    cache = next;
    cacheLoadedAt = Date.now();
  } catch (err) {
    // DB erişilemezse eski cache'i koru, siteyi düşürme.
    console.error("[proxy] redirects cache yüklenemedi:", err);
  }
}

async function ensureFreshCache(): Promise<void> {
  const isStale = Date.now() - cacheLoadedAt > CACHE_TTL_MS;
  if (!isStale) return;

  // Aynı anda birden fazla isteğin DB'yi paralel bombalamasını önle.
  if (!cacheLoadingPromise) {
    cacheLoadingPromise = loadCache().finally(() => {
      cacheLoadingPromise = null;
    });
  }
  await cacheLoadingPromise;
}

export async function proxy(req: NextRequest) {
  await ensureFreshCache();

  const { pathname } = req.nextUrl;
  const target = cache[pathname];

  if (target && target !== pathname) {
    const url = req.nextUrl.clone();
    // Hedef relative bir path olduğu için mevcut origin'i koruyoruz.
    const targetUrl = new URL(target, url.origin);
    return NextResponse.redirect(targetUrl, 301);
  }

  return NextResponse.next();
}
