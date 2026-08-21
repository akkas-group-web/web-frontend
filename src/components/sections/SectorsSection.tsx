"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { SectionEyebrow } from "@/components/shared/SectionEyebrow";
import type { SectorItem } from "@/types";
import { routes } from "@/lib/routes";

interface SectorsSectionProps {
  sectors: SectorItem[];
}

// Görsel bulunmadığında her sektöre farklı bir ton veren geçici gradyanlar
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

      {/* Kart şeridi */}
      <div
        ref={scrollRef}
        className={`mx-auto mt-10 flex max-w-7xl snap-x snap-mandatory gap-5 overflow-x-auto overflow-y-hidden scroll-smooth px-6 pb-2 select-none [-webkit-overflow-scrolling:touch] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${
          isDragging ? "cursor-grabbing" : "cursor-grab"
        }`}
        onMouseDown={(event) => {
          if (!scrollRef.current) return;

          setIsDragging(true);
          setStartX(event.pageX - scrollRef.current.offsetLeft);
          setScrollLeft(scrollRef.current.scrollLeft);
        }}
        onMouseLeave={() => setIsDragging(false)}
        onMouseUp={() => setIsDragging(false)}
        onMouseMove={(event) => {
          if (!isDragging || !scrollRef.current) return;

          event.preventDefault();

          const x = event.pageX - scrollRef.current.offsetLeft;
          const walk = (x - startX) * 1.2;

          scrollRef.current.scrollLeft = scrollLeft - walk;
        }}
      >
        {sectors.map((sector, index) => (
          <Link
            key={sector.id}
            href={routes.sector(sector.slug)}
            draggable={false}
            className="group block w-[260px] flex-none snap-center md:w-[300px]"
          >
            {/* Görsel */}
            <div className="relative h-[220px] w-full overflow-hidden rounded-2xl md:h-[260px]">
              {sector.image ? (
                <Image
                  src={sector.image.url}
                  alt={sector.image.alt}
                  fill
                  quality={90}
                  sizes="(min-width: 768px) 300px, 260px"
                  draggable={false}
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${
                    FALLBACK_GRADIENTS[index % FALLBACK_GRADIENTS.length]
                  }`}
                />
              )}
            </div>

            {/* Metin */}
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
          </Link>
        ))}
      </div>
    </section>
  );
}
