"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { SectionEyebrow } from "@/components/shared/SectionEyebrow";
import type { SectorItem } from "@/types";

interface SectorsSectionProps {
  sectors: SectorItem[];
}

// Fotoğraf eklenene kadar her sektöre ayrı bir ton veren geçici gradyanlar
const FALLBACK_GRADIENTS = [
  "from-[#0d4d5c] to-[#1a7d8f]",
  "from-[#123b46] to-[#0d4d5c]",
  "from-[#1a7d8f] to-[#58c4d4]",
  "from-[#0d4d5c] to-[#123b46]",
  "from-[#1a7d8f] to-[#0d4d5c]",
  "from-[#58c4d4] to-[#1a7d8f]",
];

export function SectorsSection({ sectors }: SectorsSectionProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  return (
    <section className="py-16">
      {/* Başlık */}
      <div className="mx-auto flex max-w-7xl flex-col gap-4 border-b border-slate-100 px-6 pb-6 md:flex-row md:items-end md:justify-between">
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

      {/* Kart şeridi — sabit boyutlu kartlar, sadece drag ile kayar */}
      <div
        ref={scrollRef}
        className={`mx-auto mt-10 flex max-w-7xl gap-5 overflow-x-hidden overflow-y-hidden px-6 select-none ${
          isDragging ? "cursor-grabbing" : "cursor-grab"
        }`}
        onMouseDown={(e) => {
          if (!scrollRef.current) return;
          setIsDragging(true);
          setStartX(e.pageX - scrollRef.current.offsetLeft);
          setScrollLeft(scrollRef.current.scrollLeft);
        }}
        onMouseLeave={() => setIsDragging(false)}
        onMouseUp={() => setIsDragging(false)}
        onMouseMove={(e) => {
          if (!isDragging || !scrollRef.current) return;
          e.preventDefault();
          const x = e.pageX - scrollRef.current.offsetLeft;
          const walk = (x - startX) * 1.2;
          scrollRef.current.scrollLeft = scrollLeft - walk;
        }}
      >
        {sectors.map((sector, idx) => (
          // <Link
          //   key={sector.id}
          //   href={sector.href}
          //   draggable={false}
          //   className="group block w-[260px] flex-none md:w-[300px]"
          // >
          <div
            key={sector.id}
            draggable={false}
            className="group block w-[260px] flex-none md:w-[300px]"
          >
            {/* Görsel */}
            <div className="relative h-[220px] w-full overflow-hidden rounded-2xl md:h-[260px]">
              {sector.image ? (
                <Image
                  src={sector.image}
                  alt={sector.title}
                  fill
                  quality={90}
                  sizes="(min-width: 768px) 300px, 260px"
                  draggable={false}
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${
                    FALLBACK_GRADIENTS[idx % FALLBACK_GRADIENTS.length]
                  }`}
                />
              )}
            </div>

            {/* Metin bloğu — görselin altında, sabit */}
            <div className="mt-4">
              <h3 className="font-heading text-lg font-semibold text-[#0d4d5c]">
                {sector.title}
              </h3>
              {sector.description && (
                <p className="mt-1.5 text-sm leading-relaxed text-[#333333]/70">
                  {sector.description}
                </p>
              )}
            </div>
          </div>
          //   </Link>
        ))}
      </div>
    </section>
  );
}
