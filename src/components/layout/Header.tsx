"use client";

import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS, SITE_CONFIG } from "@/constants/site";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/20 shadow-xs backdrop-blur-md backdrop-saturate-150">
      {/* Arka plan */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white/90 via-white/40 to-white/10" />

      {/* HEADER */}
      <div className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-8 py-3">
        {/* LOGO */}
        <Link href="/" className="flex items-center">
          <Image
            src="/akkasgrouplogo.png"
            alt="Akkaş Group"
            width={180}
            height={64}
            priority
            className="h-10 w-auto"
          />
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="flex items-center rounded-full px-4 py-2 text-sm font-semibold text-[#0d4d5c] transition-colors hover:bg-[#1a7d8f]/10 hover:text-[#1a7d8f]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <MobileMenu />
      </div>
    </header>
  );
}