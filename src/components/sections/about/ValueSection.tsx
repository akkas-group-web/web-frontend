"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Lightbulb, Crosshair, Zap } from "lucide-react";
import type { ValueItem } from "@/types/about";

interface ValuesSectionProps {
  values: ValueItem[];
}

const VALUE_ICONS: Record<string, typeof ShieldCheck> = {
  guvenilirlik: ShieldCheck,
  "dogrudan-bilgililik": Lightbulb,
  "cozum-odaklilik": Crosshair,
  hizlilik: Zap,
};

export function ValuesSection({ values }: ValuesSectionProps) {
  return (
    <section className="bg-[#f4f6f8] py-24">
      <div className="mx-auto max-w-7xl px-8 md:px-12">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-[#1a7d8f]">
            Bizi Biz Yapan
          </span>
          <h2 className="font-heading mt-3 text-3xl font-bold text-[#0d4d5c] md:text-4xl">
            Değerlerimiz
          </h2>
        </div>

        <div className="mt-14 flex flex-wrap justify-center gap-5">
          {values.map((value, idx) => {
            const titleKey = value.title.toLocaleLowerCase("tr-TR");

const Icon =
  titleKey.includes("hızlı")
    ? Zap
    : titleKey.includes("çözüm")
      ? Crosshair
      : titleKey.includes("bilgi")
        ? Lightbulb
        : titleKey.includes("güven")
          ? ShieldCheck
          : ShieldCheck;

            return (
              <motion.div
                key={value.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="group w-full rounded-2xl bg-white p-7 shadow-sm ring-1 ring-[#0d4d5c]/5 transition-shadow hover:shadow-lg sm:w-[calc(50%-10px)] lg:w-[280px]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#e6f2f4] text-[#1a7d8f] transition-colors group-hover:bg-[#1a7d8f] group-hover:text-white">
                  <Icon className="h-5 w-5" />
                </div>

                <h3 className="mt-5 text-base font-semibold text-[#0d4d5c]">
                  {value.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-[#333333]/65">
                  {value.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
