import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS, SITE_CONFIG } from "@/constants/site";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <Link href="/" className="flex items-center">
          <Image
            src="/akkasgrouplogo.png"
            alt="Akkaş Group"
            width={180}
            height={64}
            priority
            className="h-11 w-auto"
          />
        </Link>

        <nav className="hidden md:block">
          <ul className="flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm font-medium text-slate-600 transition-colors hover:text-teal-600"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <a
          href={`tel:${SITE_CONFIG.phone}`}
          className="hidden rounded-full bg-gradient-to-r from-teal-500 to-teal-700 px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-teal-500/20 transition-transform hover:scale-[1.03] md:inline-block"
        >
          {SITE_CONFIG.phone}
        </a>

        <MobileMenu />
      </div>
    </header>
  );
}
