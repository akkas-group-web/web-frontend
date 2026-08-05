"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import { NAV_LINKS, SITE_CONFIG } from "@/constants/site";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  return (
    <header className="navbar-glass fixed top-0 left-0 right-0 z-50 border-b border-[#0d4d5c]/10 shadow-sm transition-all duration-300">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-3.5">
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
          <ul className="flex items-center gap-8">
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

        {/* Modernized Contact Action */}
        <a
          href={`tel:${SITE_CONFIG.phone}`}
          className="group hidden items-center gap-2.5 rounded-full bg-[#0d4d5c] px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white shadow-md transition-all duration-300 hover:bg-[#1a7d8f] hover:shadow-lg md:inline-flex"
        >
          <Phone className="h-3.5 w-3.5 transition-transform group-hover:scale-110" />
          <span>İletişime Geç</span>
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
        </a>

        <MobileMenu />
      </div>
    </header>
  );
}
