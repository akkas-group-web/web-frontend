"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { BrandItem } from "@/types";
import { SectionEyebrow } from "@/components/shared/SectionEyebrow";

interface BrandsStripProps {
  brands: BrandItem[];
}

export function BrandsStrip({ brands }: BrandsStripProps) {
  return (
    <section className="relative overflow-hidden bg-[#f5f2ec] py-20">
      <div className="pointer-events-none absolute -left-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-[#7fc7d4]/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 top-0 h-72 w-72 rounded-full bg-[#e6f2f4] blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-12">
        <div className="text-center">
          <SectionEyebrow label="Akkaş Group Çatısı Altında" />
          <h2 className="font-heading mx-auto max-w-xl text-2xl font-semibold text-[#0d4d5c] md:text-3xl">
            Markalarımız
          </h2>
        </div>

        {/* Kartlar Arası Taşma Alanı (Badge için) */}
        <div className="mt-12 flex flex-wrap justify-center gap-x-5 gap-y-10">
          {brands.map((brand, i) => (
            <motion.div
              key={brand.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
                delay: i * 0.06,
              }}
              className="w-[calc(50%-10px)] sm:w-[calc(33.333%-14px)] lg:w-[calc(25%-15px)]"
            >
              <Link
                href={brand.href}
                className="group relative flex aspect-[4/3] flex-col rounded-2xl bg-white shadow-sm transition-all duration-300 hover:shadow-xl"
              >
                {/* Logo Konteynırı */}
                {/* Logo Konteynırı */}
                <div className="relative flex-1 p-6 pb-10">
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    fill
                    className="object-contain p-6 transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Varsayılan Durum: Uzun Metinlerde Aşağıya Doğru Taşan Beyaz Badge */}
                {/* Varsayılan Durum: Aşağı Doğru Genişleyen ve Logoyu Kapatmayan Badge */}
                <div className="absolute bottom-0 right-4 z-10 max-w-[85%] translate-y-1/2 rounded-xl bg-white px-4 py-2.5 shadow-md transition-opacity duration-300 group-hover:opacity-0">
                  <span className="block text-xs font-bold leading-snug text-[#0d4d5c] md:text-sm">
                    {brand.name}
                  </span>
                </div>

                {/* Hover Durumu: Zengin Lacivert/Mavi Overlay ve Metin Sonu Ok İşareti */}
                <div className="absolute inset-0 z-20 flex flex-col justify-end overflow-hidden rounded-2xl bg-gradient-to-t from-[#0b2b38]/95 via-[#0d4d5c]/90 to-[#0d4d5c]/75 p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="text-sm font-bold leading-tight text-white md:text-base">
                    {brand.name}
                  </span>

                  <p className="mt-2 text-xs leading-relaxed text-white/90 line-clamp-4">
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
