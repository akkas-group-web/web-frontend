"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import type { TimelineMilestone } from "@/types/about";

interface TimelineSectionProps {
  milestones: TimelineMilestone[];
}

export function TimelineSection({ milestones }: TimelineSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.4"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="bg-[#f5f2ec] py-24">
      <div className="mx-auto max-w-7xl px-8 md:px-12">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-[#1a7d8f]">
            Yolculuğumuz
          </span>
          <h2 className="font-heading mt-3 text-3xl font-bold text-[#0d4d5c] md:text-4xl">
            1999&apos;dan bugüne büyüyen bir hikaye
          </h2>
        </div>

        <div ref={containerRef} className="relative mx-auto mt-20 max-w-3xl">
          {/* sabit arka çizgi */}
          <div className="absolute left-[15px] top-0 h-full w-px bg-[#0d4d5c]/10 md:left-1/2 md:-translate-x-1/2" />
          {/* scroll ile dolan aktif çizgi */}
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-[15px] top-0 w-px bg-[#1a7d8f] md:left-1/2 md:-translate-x-1/2"
          />

          <div className="space-y-16">
            {milestones.map((milestone, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={milestone.id}
                  className={`relative flex items-start gap-6 md:gap-0 ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, amount: 0.8 }}
                    transition={{ duration: 0.4 }}
                    className="absolute left-0 top-1 z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#1a7d8f] shadow-md shadow-[#1a7d8f]/30 md:left-1/2 md:-translate-x-1/2"
                  >
                    <span className="h-2.5 w-2.5 rounded-full bg-white" />
                  </motion.div>

                  <div className="w-full pl-14 md:w-1/2 md:pl-0">
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? 20 : -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ duration: 0.5 }}
                      className={`rounded-2xl bg-white p-6 shadow-sm ring-1 ring-[#0d4d5c]/5 ${
                        isEven ? "md:mr-14" : "md:ml-14"
                      }`}
                    >
                      <span className="font-heading text-2xl font-bold text-[#1a7d8f]">
                        {milestone.year}
                      </span>
                      <h3 className="mt-1 text-base font-semibold text-[#0d4d5c]">
                        {milestone.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-[#333333]/65">
                        {milestone.description}
                      </p>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
