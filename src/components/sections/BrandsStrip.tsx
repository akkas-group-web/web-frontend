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

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
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
            >
              <Link
                href={brand.href}
                title={brand.description}
                className="group relative flex aspect-square flex-col items-center justify-center gap-3 rounded-2xl border border-[#0d4d5c]/8 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-[#1a7d8f]/25 hover:shadow-lg"
              >
                {/* Hover'da beliren yumuşak parlama */}
                <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-[#e6f2f4] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="relative h-12 w-full">
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    fill
                    className="object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                <span className="relative text-center text-[11px] font-semibold leading-tight text-[#333333]/55 transition-colors duration-300 group-hover:text-[#0d4d5c]">
                  {brand.name}
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
