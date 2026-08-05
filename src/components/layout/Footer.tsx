import Link from "next/link";
import { NAV_LINKS, SITE_CONFIG } from "@/constants/site";

export function Footer() {
  return (
    <footer className="border-t border-[#0d4d5c]/10 bg-white text-[#333333]/70">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-3">
        <div>
          <p className="font-heading text-2xl font-semibold text-[#0d4d5c]">
            AKKAŞ GROUP
          </p>
          <p className="mt-3 max-w-xs text-sm text-[#333333]/50">
            {SITE_CONFIG.description}
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-[#1a7d8f]">
            Kurumsal
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-[#1a7d8f]">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-[#1a7d8f]">
            İletişim
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>{SITE_CONFIG.phone}</li>
            <li>{SITE_CONFIG.email}</li>
            <li className="max-w-xs">{SITE_CONFIG.address}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-[#0d4d5c]/10 py-6 text-center text-xs text-[#333333]/30">
        © {new Date().getFullYear()} Akkaş Group — Tüm hakları saklıdır.
      </div>
    </footer>
  );
}
