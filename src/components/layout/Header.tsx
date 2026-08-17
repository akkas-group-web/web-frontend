
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ChevronDown,
  ChevronRight,
  Phone,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import { NAV_LINKS, SITE_CONFIG } from "@/constants/site";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  function closeMenus() {
    setOpenMenu(null);
  }

  return (
    <header
      className="fixed left-0 right-0 top-0 z-50 border-b border-white/20 shadow-xs backdrop-blur-md backdrop-saturate-150"
      onMouseLeave={closeMenus}
    >
      {/* Arka plan */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white/90 via-white/40 to-white/10" />

      {/* HEADER */}
      <div className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-8 py-3">
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
            {NAV_LINKS.map((link) => {
              const hasChildren = Boolean(link.children?.length);
              const isOpen = openMenu === link.label;

              return (
                <li
                  key={link.href}
                  onMouseEnter={() => {
                    setOpenMenu(hasChildren ? link.label : null);
                  }}
                >
                  {hasChildren ? (
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      className="flex items-center gap-1 rounded-full px-4 py-2 text-sm font-semibold text-[#0d4d5c] transition-colors hover:bg-[#1a7d8f]/10 hover:text-[#1a7d8f]"
                      onClick={() =>
                        setOpenMenu(isOpen ? null : link.label)
                      }
                    >
                      {link.label}

                      <ChevronDown
                        className={`h-3.5 w-3.5 transition-transform duration-200 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  ) : (
                    <Link
                      href={link.href}
                      className="flex items-center rounded-full px-4 py-2 text-sm font-semibold text-[#0d4d5c] transition-colors hover:bg-[#1a7d8f]/10 hover:text-[#1a7d8f]"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        {/* CONTACT */}
        <a
          href={`tel:${SITE_CONFIG.phone.replace(/\D/g, "")}`}
          className="group hidden items-center gap-2.5 rounded-full bg-[#0d4d5c] px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white shadow-md transition-all hover:bg-[#1a7d8f] hover:shadow-lg md:inline-flex"
        >
          <Phone className="h-3.5 w-3.5" />

          <span>İletişime Geç</span>

          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
        </a>

        <MobileMenu />
      </div>

{/* MEGA MENU */}
<AnimatePresence>
  {openMenu && (
    <motion.div
      initial={{ opacity: 0, y: -4 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -4 }}
      transition={{
        duration: 0.16,
        ease: "easeOut",
      }}
      className="navbar-glass relative z-10 border-t border-[#0d4d5c]/10 shadow-md"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-4 gap-x-4 gap-y-0.5 px-8 py-3.5 md:px-12">
        {NAV_LINKS.find(
          (link) => link.label === openMenu,
        )?.children?.map((child, index) => {
          const hasSubmenu = Boolean(child.children?.length);
          const isInsuranceMenu =
  child.label === "Sigorta Teşvik Danışmanlığı";

          return (
            <motion.div
              key={child.href}
              initial={{ opacity: 0, y: 3 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.14,
                delay: index * 0.01,
              }}
              className="group relative"
            >
              {/* ANA HİZMET */}
              {hasSubmenu ? (
                <button
                  type="button"
                  className="flex min-h-8 w-full items-center justify-between gap-2 rounded-md px-2.5 py-1.5 text-left text-[12.5px] font-medium leading-4 text-[#26383d] transition-colors hover:bg-[#e8f3f4] hover:text-[#0d4d5c]"
                >
                  <span>{child.label}</span>

                  <ChevronRight className="h-3.5 w-3.5 shrink-0 text-[#16859a]" />
                </button>
              ) : (
                <Link
                  href={child.href}
                  onClick={closeMenus}
                  className="flex min-h-8 items-center rounded-md px-2.5 py-1.5 text-[12.5px] font-medium leading-4 text-[#26383d] transition-colors hover:bg-[#e8f3f4] hover:text-[#0d4d5c]"
                >
                  {child.label}
                </Link>
              )}

       {/* ALT HİZMETLER */}
{hasSubmenu && (
  <div
    className={`invisible absolute top-0 z-[60] rounded-lg border border-[#0d4d5c]/10 bg-white p-1.5 opacity-0 shadow-[0_8px_22px_rgba(15,50,60,0.10)] transition-all duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100 ${
      isInsuranceMenu ? "w-[620px]" : "w-[350px]"
    } ${
      index % 4 >= 2
        ? "right-[calc(100%+8px)]"
        : "left-[calc(100%+8px)]"
    }`}
  >
    <div
      className={`grid gap-x-1 gap-y-0 ${
        isInsuranceMenu ? "grid-cols-3" : "grid-cols-2"
      }`}
    >
      {child.children?.map((subChild) => (
        <Link
          key={subChild.href}
          href={subChild.href}
          onClick={closeMenus}
          className={`rounded-md px-2 py-1.5 font-normal text-[#4d5e63] transition-colors hover:bg-[#e8f3f4] hover:text-[#0d4d5c] ${
            isInsuranceMenu
              ? "text-[11px] leading-[15px]"
              : "text-[11.5px] leading-4"
          }`}
        >
          {subChild.label}
        </Link>
      ))}
    </div>
  </div>
)}
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  )}
</AnimatePresence>
    </header>
  );
}