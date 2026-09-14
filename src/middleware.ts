import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { LEGACY_REDIRECTS } from "@/config/legacy-redirects";

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const target = LEGACY_REDIRECTS[pathname];

  if (target) {
    const url = request.nextUrl.clone();
    url.pathname = target;
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

export const config = {
  // Statik dosyalar ve Next.js internal path'lerinde middleware çalışmasın (performans)
  matcher: ["/((?!_next/static|_next/image|favicon.ico|logo.png|hero/).*)"],
};
