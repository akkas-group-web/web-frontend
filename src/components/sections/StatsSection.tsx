"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

import type { HomeSummaryContent, StatItem } from "@/types";

interface StatsSectionProps {
  stats: StatItem[];
  imageSrc?: string;
  homeSummary: HomeSummaryContent;
}

function parseStatValue(raw: string): {
  number: number;
  suffix: string;
  locale: boolean;
} {
  const match = raw.match(/^([\d.,]+)(.*)$/);

  if (!match) {
    return {
      number: 0,
      suffix: raw,
      locale: false,
    };
  }

  const numericPart = match[1];
  const suffix = match[2];

  const normalized = numericPart.replace(/[.,]/g, "");

  return {
    number: Number(normalized),
    suffix,
    locale: numericPart.includes(".") || numericPart.includes(","),
  };
}

interface AnimatedNumberProps {
  value: string;
  duration?: number;
}

function AnimatedNumber({ value, duration = 1.6 }: AnimatedNumberProps) {
  const ref = useRef<HTMLSpanElement>(null);

  const isInView = useInView(ref, {
    once: true,
    amount: 0.6,
  });

  const { number, suffix, locale } = parseStatValue(value);

  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const isInteger = Number.isInteger(number);
    const start = performance.now();

    let frame: number;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / (duration * 1000), 1);

      const eased = 1 - Math.pow(1 - progress, 3);
      const current = number * eased;

      setDisplay(isInteger ? Math.round(current) : Number(current.toFixed(1)));

      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(frame);
  }, [isInView, number, duration]);

return (
  <span ref={ref}>
    {locale ? display.toLocaleString("tr-TR") : display}
    {suffix}
  </span>
);
}

function WaveOverlay() {
  return (
    <motion.svg
      viewBox="0 0 450 500"
      preserveAspectRatio="none"
      className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.18]"
    >
      {Array.from({ length: 7 }).map((_, idx) => (
        <motion.path
          key={idx}
          d={`M -50 ${80 + idx * 60} C 100 ${
            20 + idx * 60
          }, 250 ${140 + idx * 60}, 500 ${60 + idx * 60}`}
          fill="none"
          stroke="white"
          strokeWidth="1"
          strokeLinecap="round"
          animate={{
            x: [-12, 12, -12],
          }}
          transition={{
            duration: 8 + idx,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </motion.svg>
  );
}

export function StatsSection({
  stats,
  imageSrc = "/office/AkkaşPlaza.png",
  homeSummary,
}: StatsSectionProps) {
  const [primaryStat, ...restStats] = stats;

  return (
    <section className="relative overflow-hidden py-14 sm:py-16 lg:py-20">
      {/* ARKA PLAN DEKORLARI */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-brand-teal/10 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-brand-sky/15 blur-3xl" />

      {/* ANA GRID */}
      <div className="relative mx-auto grid max-w-7xl items-start gap-10 px-5 sm:px-6 md:grid-cols-[1.15fr_0.85fr] md:gap-14 md:px-10 lg:px-12">
        {/* SOL TARAF */}
        <motion.div
          initial={{
            opacity: 0,
            x: -20,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 0.6,
          }}
          className="flex flex-col justify-start"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-brand-teal">
            {homeSummary.eyebrow}
          </span>

          <h2 className="font-heading mt-3 max-w-xl text-2xl font-bold leading-tight text-brand-navy sm:text-3xl">
            {homeSummary.title}
          </h2>

          <p className="mt-4 max-w-md text-sm leading-relaxed text-[#333333]/65 sm:text-base">
            {homeSummary.description}
          </p>

          <Link
            href="/hakkimizda"
            className="group mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-brand-teal px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white transition-all hover:bg-brand-navy"
          >
            Devamını Oku
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </Link>

          {/* İSTATİSTİKLER */}
          <div className="relative mt-8 grid gap-4 sm:mt-10 sm:grid-cols-[0.8fr_1.2fr] sm:items-end">
            {/* ANA İSTATİSTİK */}
            {primaryStat && (
              <motion.div
                initial={{
                  opacity: 0,
                  y: 16,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.4,
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.15,
                }}
                whileHover={{
                  y: -3,
                }}
                className="group relative overflow-hidden rounded-3xl bg-white p-6 shadow-[0_20px_60px_rgba(13,77,92,0.12)] ring-1 ring-brand-navy/5 transition-shadow duration-500 hover:shadow-[0_25px_70px_rgba(13,77,92,0.18)] sm:p-7 lg:p-8"
              >
                <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-brand-teal/10 blur-2xl transition-transform duration-700 group-hover:scale-150" />

                <span className="relative text-[10px] font-bold uppercase tracking-widest text-[#333333]/50">
                </span>

                <div className="font-heading relative mt-2 text-4xl font-bold text-brand-teal">
                  <AnimatedNumber value={primaryStat.value} />
                </div>

                <div className="relative mt-1 text-sm font-medium leading-5 text-brand-navy">
                  {primaryStat.label}
                </div>
              </motion.div>
            )}

            {/* DİĞER İSTATİSTİKLER */}
            {restStats.length > 0 && (
              <motion.div
                initial={{
                  opacity: 0,
                  y: 16,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.4,
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.25,
                }}
                whileHover={{
                  y: -3,
                }}
                className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-teal to-brand-teal-dark p-6 text-white shadow-[0_25px_60px_rgba(17,139,153,0.22)] transition-all duration-500 hover:shadow-[0_30px_75px_rgba(17,139,153,0.3)] sm:p-7"
              >
                <ul className="grid gap-4 sm:block sm:space-y-4">
                  {restStats.slice(0, 3).map((stat) => (
                    <li key={stat.id}>
                      <div className="font-heading text-2xl font-bold text-white">
  <AnimatedNumber value={stat.value} />
</div>

                      <div className="mt-0.5 text-xs font-medium leading-5 text-white/70">
                        {stat.label}
                      </div>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* SAĞ TARAF - FOTOĞRAF */}
        <motion.div
          initial={{
            opacity: 0,
            y: 24,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.7,
          }}
          className="relative mx-auto w-full max-w-[420px] md:self-end md:max-w-sm"
        >
          <motion.div
            whileHover={{
              scale: 1.012,
            }}
            transition={{
              duration: 0.5,
            }}
            className="relative overflow-hidden rounded-[28px] shadow-2xl shadow-brand-teal/15 sm:rounded-[32px] md:rounded-[2.5rem]"
          >
            <Image
              src={homeSummary.image.url}
              alt={homeSummary.image.alt}
              width={900}
              height={1035}
              sizes="(max-width: 767px) 92vw, (max-width: 1024px) 42vw, 380px"
              className="h-auto w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/35 via-transparent to-transparent" />

            <WaveOverlay />
          </motion.div>

          {/* FOTO ALT DEKOR */}
          <div className="pointer-events-none absolute -bottom-8 -right-8 h-28 w-28 rounded-full bg-brand-teal/10 blur-2xl" />
        </motion.div>
      </div>
    </section>
  );
}
