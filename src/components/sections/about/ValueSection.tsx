"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Clock3, Target, FileCheck2  } from "lucide-react";
import type { ValueItem } from "@/types/about";

interface ValuesSectionProps {
  values: ValueItem[];
}

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

        <div className="mx-auto mt-10 grid max-w-7xl grid-cols-1 items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {" "}
          {values.map((value, idx) => {
            const titleKey = value.title.toLocaleLowerCase("tr-TR");

            const Icon =
              titleKey.includes("zamanında") || titleKey.includes("etkin")
                ? Clock3
                : titleKey.includes("çözüm")
                  ? Target
                  : titleKey.includes("iletişim")
                      ? FileCheck2
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
                className="group h-full rounded-2xl bg-white p-7 shadow-sm ring-1 ring-[#0d4d5c]/5 transition-shadow hover:shadow-lg"
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
