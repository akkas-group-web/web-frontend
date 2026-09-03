"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Building2,
  Landmark,
  Globe2,
  BriefcaseBusiness,
  TrendingUp,
} from "lucide-react";
import type { TimelineMilestone } from "@/types/about";

interface TimelineSectionProps {
  milestones: TimelineMilestone[];
}

const milestoneIcons = [
  Building2,
  Landmark,
  TrendingUp,
  Globe2,
  BriefcaseBusiness,
];

export function TimelineSection({ milestones }: TimelineSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.4"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="relative overflow-hidden bg-[#f5f2ec] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#1a7d8f]">
            Yolculuğumuz
          </span>

          <h2 className="font-heading mt-3 text-3xl font-bold tracking-tight text-[#0d4d5c] md:text-4xl">
            1999&apos;dan bugüne büyüyen bir hikaye
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#333333]/55 md:text-base">
            Geçmişten aldığımız güçle geleceğe değer katmaya devam ediyoruz.
          </p>
        </motion.div>

        {/* TIMELINE */}
        <div
          ref={containerRef}
          className="relative mx-auto mt-20 max-w-6xl md:mt-24"
        >
          {/* BASE LINE */}
          <div
            className="
              absolute
              left-[15px]
              top-0
              h-full
              w-px
              bg-[#0d4d5c]/10
              md:left-1/2
              md:-translate-x-1/2
            "
          />

          {/* ACTIVE LINE */}
          <motion.div
            style={{ height: lineHeight }}
            className="
              absolute
              left-[15px]
              top-0
              w-px
              bg-[#1a7d8f]
              md:left-1/2
              md:-translate-x-1/2
            "
          />

          <div className="space-y-16 md:space-y-28">
            {milestones.map((milestone, idx) => {
              const isEven = idx % 2 === 0;
              const Icon = milestoneIcons[idx % milestoneIcons.length];

              return (
                <div
                  key={milestone.id}
                  className={`
    relative
    flex
    min-h-[230px]
    items-start
    pl-12
    md:items-center
    md:pl-0
    ${isEven ? "md:flex-row" : "md:flex-row-reverse"}
  `}
                >
                  {/* =========================================
                      CENTER DOT
                  ========================================== */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{
                      scale: 1,
                      opacity: 1,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.7,
                    }}
                    transition={{
                      duration: 0.45,
                      type: "spring",
                      stiffness: 180,
                    }}
                    className="
  absolute
  left-0
  top-8
  z-30
  flex
  h-8
  w-8
  items-center
  justify-center
  rounded-full
  bg-[#1a7d8f]
  shadow-[0_0_0_5px_rgba(26,125,143,0.08)]
  md:left-1/2
  md:top-1/2
  md:-translate-x-1/2
  md:-translate-y-1/2
"
                  >
                    <span className="h-2.5 w-2.5 rounded-full bg-white" />
                  </motion.div>

                  {/* =================================================
                      DATE + FAINT IMAGE SIDE
                  ================================================= */}
                  <div className="hidden w-1/2 md:block">
                    <motion.div
                      initial={{
                        opacity: 0,
                        x: isEven ? -20 : 20,
                      }}
                      whileInView={{
                        opacity: 1,
                        x: 0,
                      }}
                      viewport={{
                        once: true,
                        amount: 0.5,
                      }}
                      transition={{
                        duration: 0.6,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="relative h-[230px] w-full"
                    >
                      {/* =========================================
                          FAINT DECORATIVE SHAPE
                          Daha içerde ve tarihin arkasında
                      ========================================== */}
                      <div
                        className={`
    absolute
    top-3/5
    h-[210px]
    w-[210px]
    -translate-y-1/2

    ${isEven ? "right-22" : "left-22"}
  `}
                      >
                        <div className="absolute inset-0 rounded-full border-2 border-[#1a7d8f]/20" />
                        <Icon
                          strokeWidth={1}
                          className="absolute inset-0 m-auto h-[125px] w-[125px] text-[#1a7d8f]/20"
                        />
                      </div>

                      {/* =========================================
                          YEAR BADGE
                          Şeklin önünde ve çizgiye yakın
                      ========================================== */}
                      <div
                        className={`
                          absolute
                          top-1/6
                          z-20
                          -translate-y-1/2
                          rounded-full
                          bg-[#1a7d8f]
                          px-10
                          py-2.5
                          shadow-[0_8px_20px_rgba(26,125,143,0.20)]

                          ${isEven ? "right-[40px]" : "left-[40px]"}
                        `}
                      >
                        <span className="font-heading whitespace-nowrap text-sm font-bold tracking-wide text-white">
                          {milestone.year}
                        </span>
                      </div>
                      {/* <motion.div
  initial={{ opacity: 0, y: 6 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.8 }}
  transition={{ duration: 0.4, delay: 0.15 }}
  className="
    absolute
    left-0
    top-1/2
    z-40
    -mt-14
    -translate-y-1/2
    md:left-1/2
    md:-translate-x-1/2
  "
>
  <span className="font-heading whitespace-nowrap rounded-full bg-[#0d4d5c] px-4 py-1.5 text-xs font-bold text-white shadow-md shadow-[#0d4d5c]/25">
    {milestone.year}
  </span>
</motion.div> */}
                    </motion.div>
                  </div>

                  {/* =================================================
                      CARD SIDE
                  ================================================= */}
                  <div className="w-full md:w-1/2">
                    <motion.div
                      initial={{
                        opacity: 0,
                        x: isEven ? 35 : -35,
                      }}
                      whileInView={{
                        opacity: 1,
                        x: 0,
                      }}
                      viewport={{
                        once: true,
                        amount: 0.35,
                      }}
                      transition={{
                        duration: 0.65,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      {/* =========================================
                          TITLE
                          Kartın ÜSTÜNDE
                      ========================================== */}
   <div
  className={`
    mb-4 flex items-center gap-2
    md:mb-3
    ${isEven ? "md:ml-12" : "md:mr-12"}
  `}
>
  <h3 className="font-heading text-lg font-bold text-[#0d4d5c] md:text-xl">
    {milestone.title}
  </h3>

  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#1a7d8f]" />
</div>

                      {/* =========================================
                          WHITE CONTENT CARD
                          Çizgiden UZAK
                      ========================================== */}
                      <motion.div
                        whileHover={{
                          y: -4,
                        }}
                        className={`
                          group
                          relative
                          overflow-hidden
                          rounded-2xl
                          bg-white
                          p-6
                          shadow-[0_12px_35px_rgba(13,77,92,0.06)]
                          ring-1
                          ring-[#0d4d5c]/[0.04]
                          transition-shadow
                          duration-300
                          hover:shadow-[0_18px_45px_rgba(13,77,92,0.10)]

                          ${isEven ? "md:ml-12 md:mr-6" : "md:mr-12 md:ml-6"}
                        `}
                      >
                        {/* subtle watermark inside card */}
                        <div
                          className={`
                            pointer-events-none
                            absolute
                            top-1/2
                            h-[120px]
                            w-[120px]
                            -translate-y-1/2
                            rounded-full
                            border
                            border-[#1a7d8f]/[0.025]

                            ${isEven ? "right-8" : "left-8"}
                          `}
                        />

                        {/* MOBILE YEAR */}
                        <div className="mb-4 flex items-center gap-3 md:hidden">
                          <span className="rounded-full bg-[#1a7d8f] px-4 py-1.5 text-xs font-bold text-white">
                            {milestone.year}
                          </span>

                          <div className="h-px flex-1 bg-[#0d4d5c]/10" />
                        </div>

                        {/* DESCRIPTION */}
                        <p className="relative max-w-[90%] text-sm leading-7 text-[#333333]/60">
                          {milestone.description}
                        </p>

                    
                      </motion.div>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* END DOT */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.5,
            }}
            className="relative z-20 mt-20 flex justify-start pl-[2px] md:justify-center md:pl-0"
          >
            <div className="flex h-7 w-7 items-center justify-center rounded-full border-4 border-[#f5f2ec] bg-[#1a7d8f] shadow-[0_0_0_4px_rgba(26,125,143,0.08)]">
              <span className="h-1.5 w-1.5 rounded-full bg-white" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
