"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { NAV_LINKS } from "@/constants/site";

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const [openSub, setOpenSub] = useState<string | null>(null);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(true)}
        className="rounded-full p-2 text-[#0d4d5c]"
        aria-label="Menüyü aç"
      >
        <Menu className="h-6 w-6" />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-[60] flex flex-col bg-white px-6 py-5"
          >
            <div className="flex items-center justify-end">
              <button onClick={() => setOpen(false)} aria-label="Menüyü kapat">
                <X className="h-6 w-6 text-[#0d4d5c]" />
              </button>
            </div>

            <nav className="mt-6 flex-1 overflow-y-auto">
              <ul className="flex flex-col gap-1">
                {NAV_LINKS.map((link) => (
                  <li key={link.href} className="border-b border-[#0d4d5c]/10">
                    <div className="flex items-center justify-between py-3.5">
                      <Link
                        href={link.href}
                        className="text-base font-semibold text-[#0d4d5c]"
                        onClick={() => setOpen(false)}
                      >
                        {link.label}
                      </Link>
                      {link.children && (
                        <button
                          onClick={() =>
                            setOpenSub(
                              openSub === link.label ? null : link.label,
                            )
                          }
                          className="p-1"
                        >
                          <ChevronDown
                            className={`h-4 w-4 text-[#0d4d5c] transition-transform ${
                              openSub === link.label ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                      )}
                    </div>

                    <AnimatePresence>
                      {link.children && openSub === link.label && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden pb-2"
                        >
                          {link.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="block py-2 pl-3 text-sm text-[#333333]/80"
                              onClick={() => setOpen(false)}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
