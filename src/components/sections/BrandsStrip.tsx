import Link from "next/link";
import { SectionEyebrow } from "@/components/shared/SectionEyebrow";
import type { BrandItem } from "@/types";

interface BrandsStripProps {
  brands: BrandItem[];
}

export function BrandsStrip({ brands }: BrandsStripProps) {
  return (
    <section className="bg-gradient-to-br from-[#0d4d5c] to-[#1a7d8f] px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-[#7fc7d4]" />
          <span className="text-xs font-semibold uppercase tracking-wide text-white">
            İştiraklerimiz
          </span>
        </div>
        <h2 className="font-heading mt-4 max-w-xl text-3xl font-semibold text-white md:text-4xl">
          Akkaş Şirketler Grubu
        </h2>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {brands.map((brand) => (
            <Link
              key={brand.id}
              href={brand.href}
              className="rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur-md transition-all hover:-translate-y-1 hover:bg-white/15"
            >
              <p className="font-heading text-xl font-semibold text-white">
                {brand.name}
              </p>
              <p className="mt-2 text-sm text-white/70">{brand.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
