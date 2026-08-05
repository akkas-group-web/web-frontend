"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { StatItem } from "@/types";

interface StatsSectionProps {
  stats: StatItem[];
}

export function StatsSection({ stats }: StatsSectionProps) {
  return (
    <section className="relative overflow-hidden bg-[#f5f2ec] py-20">
      {/* Yumuşak dekoratif lekeler */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#7fc7d4]/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-[#e9e3d7]/60 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-8 md:grid-cols-2 md:px-12">
        {/* Kısa Hakkımızda */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-center"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-[#1a7d8f]">
            Hakkımızda
          </span>
          <h2 className="font-heading mt-3 text-2xl font-bold text-[#0d4d5c] md:text-3xl">
            A&apos;dan Z&apos;ye danışmanlıkta güvenilir çözüm ortağınız
          </h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-[#333333]/65 md:text-base">
            1999&apos;dan bu yana teşvik, yatırım, kalite belgelendirme ve KVKK
            danışmanlığı alanlarında binlerce firmaya uçtan uca destek
            sağlıyoruz. Grup şirketlerimizle sektörünüze özel çözümler
            sunuyoruz.
          </p>
          <Link
            href="/hakkimizda"
            className="group mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-[#0d4d5c] px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white transition-all hover:bg-[#1a7d8f]"
          >
            Devamını Oku
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>

        {/* İstatistikler */}
        <div className="grid grid-cols-2 gap-5">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl border border-[#0d4d5c]/8 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="font-heading text-3xl font-bold text-[#1a7d8f] md:text-4xl">
                {stat.value}
              </div>
              <div className="mt-1 text-sm font-medium text-[#0d4d5c]">
                {stat.label}
              </div>
              {stat.sub && (
                <div className="text-xs text-[#333333]/45">{stat.sub}</div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
