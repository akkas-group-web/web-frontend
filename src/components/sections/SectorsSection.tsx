"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
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
  const [activeId, setActiveId] = useState<string | null>(null);

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

      {/* Fotoğraflı panel şeridi — kenar kenara, köşesiz, tam genişlik */}
      {/* Fotoğraflı panel şeridi */}
      <div
        ref={scrollRef}
        className={`mt-10 flex h-[440px] w-full overflow-x-auto overflow-y-hidden scrollbar-hide md:h-[560px] ${
          isDragging ? "cursor-grabbing" : "cursor-grab"
        }`}
        onMouseDown={(e) => {
          if (!scrollRef.current) return;

          setIsDragging(true);
          setStartX(e.pageX - scrollRef.current.offsetLeft);
          setScrollLeft(scrollRef.current.scrollLeft);
        }}
        onMouseLeave={() => {
          setIsDragging(false);
          setActiveId(null);
        }}
        onMouseUp={() => {
          setIsDragging(false);
        }}
        onMouseMove={(e) => {
          if (!isDragging || !scrollRef.current) return;

          e.preventDefault();

          const x = e.pageX - scrollRef.current.offsetLeft;
          const walk = (x - startX) * 1.2;

          scrollRef.current.scrollLeft = scrollLeft - walk;
        }}
      >
        {sectors.map((sector, idx) => {
          const isActive = activeId === sector.id;

          return (
            <Link
              key={sector.id}
              href={sector.href}
              onMouseEnter={() => setActiveId(sector.id)}
              className={`
  group relative block h-full
  min-w-[50%]
  md:min-w-[25%]
  lg:min-w-[12.5%]
  flex-none
  overflow-hidden
  transition-[width,min-width] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
  ${isActive ? "lg:min-w-[20%]" : ""}
`}
            >
              {/* Görsel — sector.image doldurulunca otomatik devreye girer */}
              {sector.image ? (
                <Image
                  src={sector.image}
                  alt={sector.title}
                  fill
                  quality={90}
                  sizes="(min-width: 768px) 40vw, 100vw"
                  className={`object-cover transition-transform duration-700 ${
                    isActive ? "scale-[1.03]" : "scale-100"
                  }`}
                />
              ) : (
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${
                    FALLBACK_GRADIENTS[idx % FALLBACK_GRADIENTS.length]
                  }`}
                />
              )}

              {/* Karartma — hover'da yumuşuyor, metin her zaman okunur kalır */}
              <div
                className={`absolute inset-0 bg-black transition-opacity duration-500 ${
                  isActive ? "opacity-20" : "opacity-45"
                }`}
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

              {/* Metin bloğu */}
              <div className="absolute inset-x-0 bottom-0 flex flex-col gap-3 p-5 md:p-7">
                <div>
                  <h3 className="font-light text-xl tracking-wide text-white md:text-[26px]">
                    {sector.title}
                  </h3>
                  <span
                    className={`mt-2.5 block h-px bg-white transition-all duration-500 ${
                      isActive ? "w-10" : "w-0"
                    }`}
                  />
                </div>

                <AnimatePresence>
                  {isActive && sector.description && (
                    <motion.p
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.3 }}
                      className="max-w-[240px] text-xs leading-relaxed text-white/80"
                    >
                      {sector.description}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
