"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { StatItem } from "@/types";

interface StatsSectionProps {
  stats: StatItem[];
  imageSrc?: string;
}

/** "17+", "25 yıl", "1.500+" gibi değerleri sayı + son ek olarak ayırır */
function parseStatValue(raw: string): { number: number; suffix: string } {
  const match = raw.match(/^(\d+(?:[.,]\d+)?)(.*)$/);
  if (!match) return { number: 0, suffix: raw };
  return { number: parseFloat(match[1].replace(",", ".")), suffix: match[2] };
}

interface AnimatedNumberProps {
  value: string;
  duration?: number;
}

function AnimatedNumber({ value, duration = 1.6 }: AnimatedNumberProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });
  const { number, suffix } = parseStatValue(value);
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
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [isInView, number, duration]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

/** Fotoğrafın üzerine binen ince dalga çizgileri — referanstaki desenin teal versiyonu */
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
          d={`M -50 ${80 + idx * 60} C 100 ${20 + idx * 60}, 250 ${
            140 + idx * 60
          }, 500 ${60 + idx * 60}`}
          fill="none"
          stroke="white"
          strokeWidth="1"
          strokeLinecap="round"
          animate={{ x: [-12, 12, -12] }}
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
}: StatsSectionProps) {
  const [primaryStat, ...restStats] = stats;

  return (
    <section className="relative overflow-hidden bg-[#f5f2ec] py-20">
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#7fc7d4]/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-[#e9e3d7]/60 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-start gap-14 px-8 md:grid-cols-[1.15fr_0.85fr] md:px-12">
        {/* Sol: metin */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-start"
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

          {/* Mobilde: fotoğraf gizli, statlar sade grid halinde metnin altında */}
          <div className="relative mt-12 flex items-end gap-4">
            {primaryStat && (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.03, y: -4 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="group relative w-[35%] overflow-hidden rounded-3xl bg-white p-10 shadow-[0_20px_60px_rgba(13,77,92,0.15)] ring-1 ring-[#0d4d5c]/5 transition-shadow duration-500 hover:shadow-[0_25px_70px_rgba(13,77,92,0.22)]"
              >
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#333333]/50">
                  <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#1a7d8f]/10 blur-2xl transition-transform duration-700 group-hover:scale-150" />
                  {primaryStat.sub ?? "Öne Çıkan"}
                </span>
                <div className="font-heading mt-1 text-4xl font-bold text-[#1a7d8f]">
                  <AnimatedNumber value={primaryStat.value} />
                </div>
                <div className="text-sm font-medium text-[#0d4d5c]">
                  {primaryStat.label}
                </div>
              </motion.div>
            )}

            {restStats.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.5, delay: 0.35 }}
                className="group relative z-40 -mt-66 w-[54%] translate-x-12 overflow-hidden rounded-3xl bg-[#0d4d5c] p-6 text-white shadow-[0_25px_60px_rgba(13,77,92,0.25)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_75px_rgba(13,77,92,0.32)] md:translate-x-1 md:-mr-20"
              >
                <ul className="space-y-4">
                  {restStats.slice(0, 3).map((stat) => (
                    <li key={stat.id}>
                      <div className="font-heading text-2xl font-bold text-white">
                        <AnimatedNumber value={stat.value} />
                      </div>
                      <div className="text-xs font-medium text-white/70">
                        {stat.label}
                      </div>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Sağ: fotoğraf + yüzen istatistik kartları (yalnızca md ve üzeri) */}
        {/* Sonra: tek grup, fotoğrafın alt kenarına oturan yan yana kartlar */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto hidden w-full max-w-sm md:block"
        >
          <motion.div
            whileHover={{ scale: 1.015 }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-[2.5rem] shadow-2xl shadow-[#0d4d5c]/15"
          >
            <Image
              src={imageSrc}
              alt="Akkaş Group ofis ve danışmanlık ekibi"
              width={900}
              height={1035}
              sizes="(min-width: 768px) 45vw, 100vw"
              className="h-auto w-full"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#0d4d5c]/55 via-[#0d4d5c]/0 to-transparent" />

            <WaveOverlay />
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-2 text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur-md"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#58c4d4]" />
              25+ Yıllık Deneyim
            </motion.div>
          </motion.div>
          {/* Fotoğrafın alt kenarına oturan kart grubu */}
          <div className="absolute inset-x-4 -bottom-8 flex items-end gap-3">
            {/* Kart 1: kısa, sol — tek büyük rakam vurgusu */}
            {/* {primaryStat && (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="w-2/5 rounded-2xl bg-white p-5 shadow-xl"
              >
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#333333]/50">
                  {primaryStat.sub ?? "Öne Çıkan"}
                </span>
                <div className="font-heading mt-1 text-3xl font-bold text-[#1a7d8f]">
                  <AnimatedNumber value={primaryStat.value} />
                </div>
                <div className="text-xs font-medium text-[#0d4d5c]">
                  {primaryStat.label}
                </div>
              </motion.div>
            )} */}

            {/* Kart 2: uzun, sağ — fotoğrafın içine daha çok taşıyor */}
            {/* {restStats.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.5, delay: 0.35 }}
                className="-mt-16 w-3/5 rounded-2xl bg-[#0d4d5c] p-5 text-white shadow-xl"
              >
                <ul className="space-y-4">
                  {restStats.slice(0, 3).map((stat) => (
                    <li key={stat.id}>
                      <div className="font-heading text-xl font-bold text-white">
                        <AnimatedNumber value={stat.value} />
                      </div>
                      <div className="text-[11px] font-medium text-white/70">
                        {stat.label}
                      </div>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )} */}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
