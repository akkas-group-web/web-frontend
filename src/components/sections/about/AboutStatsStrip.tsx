"use client";

import { motion } from "framer-motion";
import { AnimatedNumber } from "@/components/shared/AnimatedNumber";
import type { AboutStatItem } from "@/types/about";

interface AboutStatsStripProps {
  stats: AboutStatItem[];
}

export function AboutStatsStrip({ stats }: AboutStatsStripProps) {
  return (
    <section className="bg-[#242629] py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-8 md:grid-cols-4 md:px-12">
        {stats.map((stat, idx) => (
          <motion.div
            key={stat.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="text-center md:text-left"
          >
            <div className="font-heading text-3xl font-bold text-[#7fc7d4] md:text-4xl">
              <AnimatedNumber value={stat.value} />
            </div>
            <div className="mt-1 text-xs font-medium uppercase tracking-wide text-white/50">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
