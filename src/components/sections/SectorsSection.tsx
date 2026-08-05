import Link from "next/link";
import { SectionEyebrow } from "@/components/shared/SectionEyebrow";
import type { SectorItem } from "@/types";

interface SectorsSectionProps {
  sectors: SectorItem[];
}

export function SectorsSection({ sectors }: SectorsSectionProps) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <SectionEyebrow label="Sektör Çözümleri" />
      <h2 className="font-heading max-w-xl text-3xl font-semibold text-[#0d4d5c] md:text-4xl">
        Hangi sektörde olursanız olun, çözümümüz var
      </h2>

      <div className="mt-10 flex flex-wrap gap-3">
        {sectors.map((sector) => (
          <Link
            key={sector.id}
            href={sector.href}
            className="card-surface rounded-full px-5 py-2.5 text-sm text-[#333333]/80 shadow-sm hover:border-[#1a7d8f]/40 hover:text-[#1a7d8f]"
          >
            {sector.title}
          </Link>
        ))}
      </div>
    </section>
  );
}
