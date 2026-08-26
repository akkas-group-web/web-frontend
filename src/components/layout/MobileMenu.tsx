"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";

import { NAV_LINKS } from "@/constants/site";

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const [openSub, setOpenSub] = useState<string | null>(null);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const closeMenu = () => {
    setOpen(false);
    setOpenSub(null);
  };

  return (
    <div className="lg:hidden">
      {/* HAMBURGER */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-[#0d4d5c] shadow-sm"
        aria-label="Menüyü aç"
      >
        <Menu className="h-6 w-6" />
      </button>

      {open && (
        <div className="fixed inset-0 z-[9999] flex min-h-[100dvh] flex-col bg-white">
          {/* ÜST */}
          <div className="flex h-[72px] shrink-0 items-center justify-between border-b border-[#118B99]/10 px-5">
            <Link href="/" onClick={closeMenu}>
              <Image
                src="/akkasgrouplogo.png"
                alt="Akkaş Group"
                width={160}
                height={56}
                className="h-9 w-auto"
              />
            </Link>

            <button
              type="button"
              onClick={closeMenu}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#EFF7F8] text-[#0d4d5c]"
              aria-label="Menüyü kapat"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* MENÜ */}
          <nav className="flex-1 overflow-y-auto px-5 py-5">
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#118B99]">
              Menü
            </p>

            <ul className="divide-y divide-[#118B99]/10">
              {NAV_LINKS.map((link) => {
                const hasChildren =
                  Array.isArray(link.children) && link.children.length > 0;

                const isOpen = openSub === link.label;

                return (
                  <li key={link.href}>
                    <div className="flex min-h-[54px] items-center gap-2">
                      <Link
                        href={link.href}
                        onClick={closeMenu}
                        className="flex flex-1 items-center py-4 text-[16px] font-semibold text-[#173D43]"
                      >
                        {link.label}
                      </Link>

                      {hasChildren && (
                        <button
                          type="button"
                          onClick={() =>
                            setOpenSub(isOpen ? null : link.label)
                          }
                          className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F3F9F9] text-[#118B99]"
                          aria-label={`${link.label} alt menü`}
                        >
                          <ChevronDown
                            className={`h-4 w-4 transition-transform ${
                              isOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                      )}
                    </div>

                    {hasChildren && isOpen && (
                      <div className="mb-3 rounded-xl bg-[#F5FAFA] px-4 py-1">
                        {link.children?.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={closeMenu}
                            className="block border-b border-[#118B99]/10 py-3 text-sm text-[#526F74] last:border-b-0"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* ALT BUTON */}
          <div className="shrink-0 border-t border-[#118B99]/10 bg-white px-5 pb-[calc(env(safe-area-inset-bottom)+20px)] pt-4">
            <Link
              href="/iletisim"
              onClick={closeMenu}
              className="flex h-12 w-full items-center justify-center rounded-xl bg-[#118B99] text-sm font-semibold text-white"
            >
              Bize Ulaşın
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}