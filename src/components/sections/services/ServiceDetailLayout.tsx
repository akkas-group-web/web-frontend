import type { ReactNode } from "react";
import Link from "next/link";

interface ServiceDetailLayoutProps {
  category: string;
  title: string;
  description: string;
  children: ReactNode;
}

export function ServiceDetailLayout({
  category,
  title,
  description,
  children,
}: ServiceDetailLayoutProps) {
  return (
    <main className="pt-16">
      {/* HERO */}
      <section className="border-b border-[#0d4d5c]/10 bg-[#f7faf9]">
        <div className="mx-auto max-w-6xl px-6 py-10 md:px-8 md:py-12">
          {/* BREADCRUMB */}
          <div className="mb-6 flex flex-wrap items-center gap-2 text-xs font-medium text-[#6c7c80]">
            <Link
              href="/"
              className="transition-colors hover:text-[#16859a]"
            >
              Ana Sayfa
            </Link>

            <span className="text-[#a5b0b3]">/</span>

            <Link
              href="/hizmetlerimiz"
              className="transition-colors hover:text-[#16859a]"
            >
              Hizmetlerimiz
            </Link>

            <span className="text-[#a5b0b3]">/</span>

            <span>{category}</span>
          </div>

          {/* BAŞLIK */}
          <div className="max-w-4xl">
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.2em] text-[#16859a]">
              {category}
            </p>

            <h1 className="text-3xl font-bold leading-tight tracking-tight text-[#0d4d5c] md:text-4xl">
              {title}
            </h1>

            <p className="mt-4 max-w-3xl text-[15px] leading-7 text-[#5d6e72]">
              {description}
            </p>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-10 md:px-8 md:py-12">
          <article className="w-full max-w-none">
            {children}
          </article>
        </div>
      </section>
    </main>
  );
}