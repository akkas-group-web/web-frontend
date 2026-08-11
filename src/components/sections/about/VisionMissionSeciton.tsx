"use client";

import { motion } from "framer-motion";
import { Compass, Target } from "lucide-react";
import type { VisionMissionContent } from "@/types/about";

interface VisionMissionSectionProps {
  content: VisionMissionContent;
}

export function VisionMissionSection({ content }: VisionMissionSectionProps) {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto grid max-w-7xl gap-6 px-8 md:grid-cols-2 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl bg-[#0d4d5c] p-10 text-white md:p-12"
        >
          <Compass className="h-8 w-8 text-[#7fc7d4]" />
          <h3 className="font-heading mt-5 text-2xl font-bold">Vizyonumuz</h3>
          <p className="mt-4 text-sm leading-relaxed text-white/75 md:text-base">
            {content.vision}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-3xl bg-[#e6f2f4] p-10 md:p-12"
        >
          <Target className="h-8 w-8 text-[#1a7d8f]" />
          <h3 className="font-heading mt-5 text-2xl font-bold text-[#0d4d5c]">
            Misyonumuz
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-[#333333]/70 md:text-base">
            {content.mission}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
