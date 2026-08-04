import Link from "next/link";
import { SectionEyebrow } from "@/components/shared/SectionEyebrow";
import type { BrandItem } from "@/types";

interface BrandsStripProps {
  brands: BrandItem[];
}

export function BrandsStrip({ brands }: BrandsStripProps) {
  return (
    <section className="bg-ink px-6 py-20 text-paper">
      <div className="mx-auto max-w-7xl">
        <SectionEyebrow fileNumber="02" label="İştiraklerimiz" />
        <h2 className="font-display max-w-xl text-3xl text-paper md:text-4xl">
          Akkaş Şirketler Grubu
        </h2>

        <div className="mt-10 grid gap-px overflow-hidden rounded-2xl bg-paper/10 sm:grid-cols-2 lg:grid-cols-3">
          {brands.map((brand) => (
            <Link
              key={brand.id}
              href={brand.href}
              className="bg-ink p-8 transition-colors hover:bg-ink/60"
            >
              <p className="font-display text-xl text-paper">{brand.name}</p>
              <p className="mt-2 text-sm text-paper/60">{brand.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
