import Link from "next/link";
import { ArrowUpRight, Layers } from "lucide-react";
import { SectionEyebrow } from "@/components/shared/SectionEyebrow";
import type { SectorItem } from "@/types";

interface SectorsSectionProps {
  sectors: SectorItem[];
}

export function SectorsSection({ sectors }: SectorsSectionProps) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      {/* Başlık ve Kısa Açıklama */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 border-b border-slate-100 pb-6">
        <div>
          <SectionEyebrow label="Sektör Çözümleri" />
          <h2 className="font-heading mt-1 text-2xl font-bold text-[#0d4d5c] md:text-3xl">
            Hangi sektörde olursanız olun, çözümümüz var
          </h2>
        </div>
        <p className="max-w-xs text-xs text-[#333333]/70">
          Akkaş Group uzmanlığıyla sektörünüze özel geliştirilmiş çözümleri
          keşfedin.
        </p>
      </div>

      {/* Kompakt Kartlar Grid Yapısı */}
      <div className="mt-6 grid grid-cols-2 gap-3.5 sm:grid-cols-3 lg:grid-cols-4">
        {sectors.map((sector) => (
          <Link
            key={sector.id}
            href={sector.href}
            className="group relative flex flex-col justify-between rounded-xl border border-slate-200/70 bg-white p-4 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-[#1a7d8f]/40 hover:shadow-md"
          >
            <div>
              {/* İkon ve Ok Alanı */}
              <div className="flex items-center justify-between">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#0d4d5c]/5 text-[#0d4d5c] transition-colors group-hover:bg-[#0d4d5c] group-hover:text-white">
                  <Layers className="h-4 w-4" />
                </div>
                <ArrowUpRight className="h-4 w-4 text-slate-300 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#1a7d8f]" />
              </div>

              {/* Sektör Başlığı */}
              <h3 className="font-heading mt-3 text-sm font-semibold text-[#0d4d5c] group-hover:text-[#1a7d8f]">
                {sector.title}
              </h3>

              {/* İsteğe Bağlı Çok Kısa Açıklama */}
              {sector.description && (
                <p className="mt-1 line-clamp-2 text-xs text-[#333333]/60">
                  {sector.description}
                </p>
              )}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
