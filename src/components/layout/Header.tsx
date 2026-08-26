"use client";

import Image from "next/image";
import Link from "next/link";

import { NAV_LINKS } from "@/constants/site";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/20 shadow-xs backdrop-blur-md backdrop-saturate-150">
      {/* ARKA PLAN */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-white/60" />

      {/* HEADER */}
      <div className="relative z-10 mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* LOGO */}
        <Link href="/" className="flex shrink-0 items-center">
          <Image
            src="/akkasgrouplogo.png"
            alt="Akkaş Group"
            width={180}
            height={64}
            priority
            className="h-9 w-auto sm:h-10"
          />
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden lg:block">
          <ul className="flex items-center gap-0.5">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="flex items-center whitespace-nowrap rounded-full px-3 py-2 text-sm font-semibold text-[#0d4d5c] transition-colors hover:bg-[#1a7d8f]/10 hover:text-[#1a7d8f] xl:px-4"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* MOBILE MENU */}
        <MobileMenu />
      </div>
    </header>
  );
}