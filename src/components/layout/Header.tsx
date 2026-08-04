import Link from "next/link";
import { NAV_LINKS, SITE_CONFIG } from "@/constants/site";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-ink text-paper">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-display text-xl tracking-tight">
          AKKAŞ <span className="text-bronze">GROUP</span>
        </Link>

        <nav className="hidden md:block">
          <ul className="flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="font-mono-tag text-xs uppercase text-paper/80 transition-colors hover:text-bronze"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href={`tel:${SITE_CONFIG.phone}`}
          className="hidden md:inline-block rounded-full bg-bronze px-5 py-2 font-mono-tag text-xs text-ink hover:brightness-110"
        >
          {SITE_CONFIG.phone}
        </a>

        <MobileMenu />
      </div>
    </header>
  );
}
