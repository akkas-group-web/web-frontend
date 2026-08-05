"use client";

import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS, SITE_CONFIG } from "@/constants/site";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  return (
    <header className="navbar-glass fixed top-0 left-0 right-0 z-50 border-b border-[#0d4d5c]/10 shadow-sm transition-all duration-300">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
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

        <nav className="hidden md:block">
          <ul className="flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm font-semibold text-[#0d4d5c] transition-colors hover:text-[#1a7d8f]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href={`tel:${SITE_CONFIG.phone}`}
          className="hidden rounded-full bg-gradient-to-r from-[#1a7d8f] to-[#0d4d5c] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-transform hover:scale-[1.03] md:inline-block"
        >
          {SITE_CONFIG.phone}
        </a>

        <MobileMenu />
      </div>
    </header>
  );
}
