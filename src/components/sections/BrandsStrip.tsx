import Link from "next/link";
import { SectionEyebrow } from "@/components/shared/SectionEyebrow";
import type { BrandItem } from "@/types";

interface BrandsStripProps {
  brands: BrandItem[];
}

export function BrandsStrip({ brands }: BrandsStripProps) {
  return (
    <section className="bg-gradient-to-br from-teal-900 via-teal-700 to-teal-600 px-6 py-20 text-white">
      <div className="mx-auto max-w-7xl">
        <SectionEyebrow label="İştiraklerimiz" />
        <h2 className="font-heading max-w-xl text-3xl font-semibold text-white md:text-4xl">
          Akkaş Şirketler Grubu
        </h2>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {brands.map((brand) => (
            <Link
              key={brand.id}
              href={brand.href}
              className="glass-card rounded-2xl p-6 transition-transform hover:-translate-y-1"
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
