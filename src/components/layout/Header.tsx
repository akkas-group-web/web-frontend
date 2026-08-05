"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import { NAV_LINKS, SITE_CONFIG } from "@/constants/site";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/20 shadow-xs backdrop-blur-md backdrop-saturate-150 transition-all duration-300">
      {/* Sol tarafta logoyu belirginleştiren, sağa doğru hero görselini tamamen geçiren yumuşak geçiş katmanı */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/40 to-white/10 pointer-events-none" />

      <div className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-8 py-3.5">
        <Link href="/" className="flex items-center">
          <Image
            src="/akkasgrouplogo.png"
            alt="Akkaş Group"
            width={180}
            height={64}
            priority
            className="h-10 w-auto drop-shadow-xs"
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

        {/* İletişim Butonu */}
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
