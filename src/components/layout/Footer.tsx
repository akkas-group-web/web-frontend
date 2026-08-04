import Link from "next/link";
import { NAV_LINKS, SITE_CONFIG } from "@/constants/site";

export function Footer() {
  return (
    <footer className="bg-ink text-paper/80">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl text-paper">AKKAŞ GROUP</p>
          <p className="mt-3 max-w-xs text-sm text-paper/60">
            {SITE_CONFIG.description}
          </p>
        </div>

        <div>
          <p className="font-mono-tag text-xs uppercase text-bronze">
            Kurumsal
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-bronze">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-mono-tag text-xs uppercase text-bronze">
            İletişim
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>{SITE_CONFIG.phone}</li>
            <li>{SITE_CONFIG.email}</li>
            <li className="max-w-xs">{SITE_CONFIG.address}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-paper/10 py-6 text-center font-mono-tag text-xs text-paper/40">
        © {new Date().getFullYear()} Akkaş Group — Tüm hakları saklıdır.
      </div>
    </footer>
  );
}
