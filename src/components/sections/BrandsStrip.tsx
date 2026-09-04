"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { SectionEyebrow } from "@/components/shared/SectionEyebrow";
import type { BrandItem } from "@/types";

interface BrandsStripProps {
  brands: BrandItem[];
}

export function BrandsStrip({ brands }: BrandsStripProps) {
  const [activeId, setActiveId] = useState<string | null>(null);

  const handleCardClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    brandId: string,
  ) => {
    // Masaüstünde link normal şekilde çalışır.
    if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
      return;
    }

    // Mobilde ilk dokunuşta açıklama alanını açar.
    if (activeId !== brandId) {
      event.preventDefault();
      setActiveId(brandId);
    }

    // İkinci dokunuşta preventDefault çalışmaz ve bağlantı açılır.
  };

  return (
    <section className="relative overflow-hidden bg-[#f5f2ec] py-20">
      <div className="pointer-events-none absolute -left-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-[#7fc7d4]/15 blur-3xl" />

      <div className="pointer-events-none absolute -right-24 top-0 h-72 w-72 rounded-full bg-[#e6f2f4] blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-12">
        <div className="text-center">
          <SectionEyebrow label="Akkaş Group Çatısı Altında" />

          <h2 className="font-heading mx-auto max-w-xl text-2xl font-semibold text-[#0d4d5c] md:text-3xl">
            Grup Şirketlerimiz
          </h2>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-x-5 gap-y-10">
          {brands.map((brand, index) => (
            <motion.div
              key={brand.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
                delay: index * 0.06,
              }}
              className="w-full sm:w-[calc(50%-10px)] lg:w-[calc(25%-15px)]"
            >
              <Link
                href={brand.href}
                target={brand.linkTarget === "_blank" ? "_blank" : undefined}
                rel={
                  brand.linkTarget === "_blank"
                    ? "noopener noreferrer"
                    : undefined
                }
                onClick={(event) => handleCardClick(event, brand.id)}
                className="group relative flex min-h-[280px] flex-col rounded-2xl bg-white shadow-sm transition-all duration-300 hover:shadow-xl [@media(hover:hover)_and_(pointer:fine)]:aspect-[4/3] [@media(hover:hover)_and_(pointer:fine)]:min-h-0"
              >
              {/* Logo alanı */}
<div className="relative h-48 p-6 pb-10 [@media(hover:hover)_and_(pointer:fine)]:h-auto [@media(hover:hover)_and_(pointer:fine)]:flex-1">
  {brand.logo?.url ? (
    <Image
      src={brand.logo.url}
      alt={brand.logo.alt || brand.name || "Grup şirketi logosu"}
      fill
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
      className="pointer-events-none object-contain p-6 transition-transform duration-500 group-hover:scale-105"
    />
  ) : null}
</div>

                {/* Normal başlık */}
                <div
                  className={`pointer-events-none absolute bottom-0 right-4 z-10 max-w-[85%] translate-y-1/2 rounded-xl bg-white px-4 py-2.5 shadow-md transition-opacity duration-300 ${
                    activeId === brand.id
                      ? "opacity-0"
                      : "opacity-100 group-hover:opacity-0"
                  }`}
                >
                  <span className="block text-xs font-bold leading-snug text-[#0d4d5c] md:text-sm">
                    {brand.name}
                  </span>
                </div>

                {/* Açıklama alanı */}
                <div
                  className={`pointer-events-none absolute inset-0 z-20 flex flex-col justify-end overflow-hidden rounded-2xl bg-gradient-to-t from-[#0b2b38]/95 via-[#0d4d5c]/90 to-[#0d4d5c]/75 p-5 transition-opacity duration-300 ${
                    activeId === brand.id
                      ? "opacity-100"
                      : "opacity-0 group-hover:opacity-100"
                  }`}
                >
                  <span className="text-sm font-bold leading-tight text-white md:text-base">
                    {brand.name}
                  </span>

                  <p className="mt-2 text-xs leading-relaxed text-white/90">
                    {brand.description}

                    <span className="ml-1 inline-block text-white transition-transform duration-300 group-hover:translate-x-1">
                      &rarr;
                    </span>
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
