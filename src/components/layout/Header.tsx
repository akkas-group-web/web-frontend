"use client";

import Image from "next/image";
import Link from "next/link";

import { NAV_LINKS, SITE_CONFIG } from "@/constants/site";
import { MobileMenu } from "./MobileMenu";
import { Phone } from "lucide-react";

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
            width={280}
            height={100}
            priority
            className="h-14 w-auto sm:h-16"
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
        {/* TELEFON */}{" "}
        <a
          href="tel:+902164506007"
          aria-label={`Akkaş Group'u arayın: ${SITE_CONFIG.phone}`}
          className="group hidden items-center gap-3 border-l border-[#0d4d5c]/15 pl-5 lg:flex"
        >
          {" "}
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0d4d5c] transition-all duration-200 group-hover:bg-[#1a7d8f] group-hover:shadow-md">
            {" "}
            <Phone className="h-4 w-4 text-white" strokeWidth={1.8} />{" "}
          </span>{" "}
          <span className="flex flex-col leading-none">
            {" "}
            <span className="mb-1 text-[9px] font-semibold uppercase tracking-[0.16em] text-[#1a7d8f]">
              {" "}
              Bizi Arayın{" "}
            </span>{" "}
            <span className="whitespace-nowrap text-[13px] font-semibold tracking-wide text-[#0d4d5c] transition-colors group-hover:text-[#1a7d8f]">
              {" "}
              +90 216 450 60 07{" "}
            </span>{" "}
          </span>{" "}
        </a>
        {/* MOBILE MENU */}
        <MobileMenu />
      </div>
    </header>
  );
}
