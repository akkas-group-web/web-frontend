"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { NAV_LINKS, SITE_CONFIG } from "@/constants/site";
import { MobileMenu } from "./MobileMenu";
import { AnimatePresence, motion } from "framer-motion";

export function Header() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/20 shadow-xs backdrop-blur-md backdrop-saturate-150 transition-all duration-300"
      onMouseLeave={() => setOpenMenu(null)}
    >
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
          <ul className="flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <li
                key={link.href}
                className="relative"
                onMouseEnter={() =>
                  setOpenMenu(link.children ? link.label : null)
                }
              >
                <Link
                  href={link.href}
                  className="flex items-center gap-1 rounded-full px-4 py-2 text-sm font-semibold text-[#0d4d5c] transition-colors hover:bg-[#1a7d8f]/10 hover:text-[#1a7d8f]"
                >
                  {link.label}
                  {link.children && (
                    <ChevronDown
                      className={`h-3.5 w-3.5 transition-transform duration-300 ${
                        openMenu === link.label ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <MobileMenu />
      </div>

      {/* Mega Menu Panel */}
      <AnimatePresence>
        {openMenu && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="navbar-glass relative z-10 border-t border-[#0d4d5c]/10 shadow-lg"
          >
            <div className="mx-auto grid max-w-7xl grid-cols-2 gap-2 px-8 py-6 md:grid-cols-4 md:px-12">
              {NAV_LINKS.find((l) => l.label === openMenu)?.children?.map(
                (child, i) => (
                  <motion.div
                    key={child.href}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2, delay: i * 0.02 }}
                  >
                    <Link
                      href={child.href}
                      className="block rounded-lg px-3 py-2 text-sm font-medium text-[#333333] transition-colors hover:bg-[#e6f2f4] hover:text-[#0d4d5c]"
                      onClick={() => setOpenMenu(null)}
                    >
                      {child.label}
                    </Link>
                  </motion.div>
                ),
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
