"use client";

import { motion } from "framer-motion";
import {
  Calendar,
  Users,
  Building2,
  Layers,
  type LucideIcon,
} from "lucide-react";
import { AnimatedNumber } from "@/components/shared/AnimatedNumber";
import type { AboutStatItem } from "@/types/about";

interface AboutStatsStripProps {
  stats: AboutStatItem[];
}

const STAT_ICONS: Record<string, LucideIcon> = {
  kurulus: Calendar,
  danisman: Users,
  firma: Building2,
  marka: Layers,
};

export function AboutStatsStrip({ stats }: AboutStatsStripProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0d4d5c] via-[#0d4d5c] to-[#1a7d8f] py-20">
      {/* dekoratif arka plan katmanları */}
      <div className="pointer-events-none absolute -left-20 -top-24 h-72 w-72 rounded-full bg-[#7fc7d4]/15 blur-[100px]" />
      <div className="pointer-events-none absolute -right-16 bottom-0 h-80 w-80 rounded-full bg-[#7fc7d4]/10 blur-[110px]" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-8 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-[#7fc7d4]">
            Rakamlarla Akkaş Group
          </span>
        </motion.div>

        <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4 md:gap-x-0">
          {stats.map((stat, idx) => {
            const Icon = STAT_ICONS[stat.id] ?? Layers;
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`group relative flex flex-col items-center px-4 text-center md:items-start md:text-left ${
                  idx > 0 ? "md:border-l md:border-white/10" : ""
                }`}
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-[#7fc7d4] ring-1 ring-white/15 backdrop-blur-sm transition-colors duration-300 group-hover:bg-[#7fc7d4] group-hover:text-[#0d4d5c]">
                  <Icon className="h-5 w-5" strokeWidth={2} />
                </div>

                <div className="font-heading mt-4 text-4xl font-bold text-white md:text-5xl">
                  <AnimatedNumber value={stat.value} />
                </div>
                <div className="mt-1.5 text-xs font-medium uppercase tracking-wide text-white/55">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
