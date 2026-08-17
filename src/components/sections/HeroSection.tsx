"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Award,
  Phone,
  Users,
  type LucideIcon,
} from "lucide-react";
import { STATS } from "@/constants/site";

interface HeroSlide {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  href: string;
}

const HERO_SLIDES: HeroSlide[] = [
  {
    id: "yatirim",
    eyebrow: "Yatırım Danışmanlığı",
    title: "Yatırımınızı doğru adımlarla büyütün",
    description:
      "Teşvik belgesi, fizibilite ve gümrük muafiyeti süreçlerinde uçtan uca yanınızdayız.",
    image: "/hero/yatirim.png",
    href: "/hizmetlerimiz/yatirim-danismanligi",
  },
  {
    id: "osgb",
    eyebrow: "OSGB Hizmetleri",
    title: "İş sağlığı ve güvenliğinde profesyonel çözümler",
    description:
      "KOSGEB, TÜBİTAK ve Kalkınma Ajansları destekleriyle işletmenizi ileri taşıyoruz.",
    image: "/hero/osgb.png",
    href: "/hizmetlerimiz/osgb",
  },
  {
    id: "kvkk",
    eyebrow: "KVKK Danışmanlığı",
    title: "Veri uyumluluğunda güvende kalın",
    description:
      "VERBİS kaydından aydınlatma metinlerine, uçtan uca KVKK uyum süreci.",
    image: "/hero/kvkk.jpg",
    href: "/hizmetlerimiz/kvkk-danismanligi",
  },
  {
    id: "kalite",
    eyebrow: "Kalite Belgelendirme",
    title: "ISO belgelendirmede güvenilir çözüm ortağınız",
    description:
      "ISO 9001, ISO 14001, ISO 27001 ve CE markalama süreçlerini birlikte yönetelim.",
    image: "/hero/kalite.jpg",
    href: "/hizmetlerimiz/kalite-sistemleri",
  },
];

const AUTO_ADVANCE_MS = 6000;

// Sol taraftaki bilgi satırında gösterilecek 2 istatistik + ikonları.
// STATS, constants/site.ts içindeki tek doğruluk kaynağından geliyor.
const INFO_ROW_ICONS: LucideIcon[] = [Award, Users];
const INFO_ROW_STATS = [STATS[0], STATS[2]];

// Poster çerçevesinin sol altına taşan vurgu kartı için ayrı bir istatistik.
const FLOATING_STAT = STATS[1];

export function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSlide = HERO_SLIDES[activeIndex];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, AUTO_ADVANCE_MS);
    return () => clearInterval(timer);
  }, [activeIndex]);

  function goTo(index: number) {
    setActiveIndex(index);
  }

  function goPrev() {
    setActiveIndex(
      (prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length,
    );
  }

  function goNext() {
    setActiveIndex((prev) => (prev + 1) % HERO_SLIDES.length);
  }

  return (
    <section className="relative -mt-[73px] overflow-hidden bg-gradient-to-br from-brand-turquoise-700 via-brand-turquoise-500 to-brand-turquoise-300 text-white">
      {/* Dekoratif ızgara deseni (nötr beyaz overlay, marka rengi değil) */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.055]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)",
          backgroundSize: "90px 90px",
        }}
      />
      {/* Glow lekeleri */}
      <div className="pointer-events-none absolute right-[15%] top-20 h-[380px] w-[380px] rounded-full bg-white/25 blur-[100px]" />
      <div className="pointer-events-none absolute -bottom-40 -left-24 h-[390px] w-[390px] rounded-full bg-brand-turquoise-300/30 blur-[100px]" />

      <div className="relative z-[2] mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-6 pb-10 pt-28 md:px-12 md:pt-32 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:pt-47">
        {/* Sol: Metin İçeriği */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeSlide.id}-copy`}
            initial={{ opacity: 0, x: -18 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <span className="mb-5 inline-flex items-center gap-2.5 text-[11px] font-extrabold uppercase tracking-widest text-brand-turquoise-100">
              <span className="h-0.5 w-7 bg-brand-turquoise-400" />
              {activeSlide.eyebrow}
            </span>

            <h1 className="mx-auto max-w-[580px] text-[32px] font-bold leading-[1.08] tracking-[-1.2px] md:text-[40px] lg:mx-0 lg:text-[44px]">
              {activeSlide.title}
            </h1>

            <p className="mx-auto mt-4 max-w-[500px] text-[13px] leading-relaxed text-white/75 lg:mx-0">
              {activeSlide.description}
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
              <Link
                href={activeSlide.href}
                className="group inline-flex min-h-[50px] items-center gap-2.5 rounded-lg bg-white px-6 text-sm font-bold text-brand-turquoise-950 transition-transform hover:-translate-y-0.5"
              >
                İncele
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/iletisim"
                className="inline-flex min-h-[50px] items-center gap-2.5 rounded-lg border border-white/20 bg-white/[0.08] px-6 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-white/[0.14]"
              >
                <Phone className="h-4 w-4" />
                Bize Ulaşın
              </Link>
            </div>

            <div className="mt-9 flex flex-wrap items-center justify-center gap-6 lg:justify-start">
              {INFO_ROW_STATS.map((stat, index) => {
                const Icon = INFO_ROW_ICONS[index];
                return (
                  <div key={stat.label} className="flex items-center gap-3">
                    {index > 0 && (
                      <span className="hidden h-9 w-px bg-white/15 sm:block" />
                    )}
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-[8px] border border-white/15 bg-white/[0.08] text-brand-turquoise-100">
                      <Icon className="h-3.5 w-3.5" />
                    </span>
                    <div className="flex flex-col items-start gap-1">
                      <strong className="text-sm text-white">
                        {stat.value}
                      </strong>
                      <small className="text-[9px] tracking-wide text-white/50">
                        {stat.label}
                      </small>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Sağ: Poster Çerçevesi + Taşan Bilgi Kartı */}
        <div className="relative mx-auto w-full max-w-[480px] lg:mx-0 lg:ml-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeSlide.id}-visual`}
              initial={{ opacity: 0, x: 24, scale: 0.98 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="rounded-[22px] border border-black/[0.06] bg-brand-turquoise-50 p-2.5 shadow-[0_30px_75px_rgba(0,50,60,0.28)]"
            >
              <div className="flex h-[39px] items-center justify-between px-2 text-[10px] text-brand-turquoise-900/70">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-2.5 py-1.5 text-brand-turquoise-700">
                  <span className="h-1.5 w-1.5 rounded-full bg-status-live" />
                  {activeSlide.eyebrow}
                </span>
              </div>
              <div className="relative h-[300px] overflow-hidden rounded-[15px] bg-brand-turquoise-50">
                <Image
                  src={activeSlide.image}
                  alt={activeSlide.title}
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="absolute -left-4 bottom-4 flex min-w-[165px] items-center gap-2 rounded-[10px] border border-white/15 bg-brand-turquoise-700/95 p-2.5 shadow-[0_14px_30px_rgba(0,50,60,0.24)] backdrop-blur-md">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-[10px] bg-white text-brand-turquoise-700">
              <Award className="h-5 w-5" />
            </span>
            <div className="flex flex-col gap-1">
              <small className="text-[10px] text-white/55">
                {FLOATING_STAT.label}
              </small>
              <strong className="text-xs text-white">
                {FLOATING_STAT.value}
              </strong>
            </div>
          </div>
        </div>
      </div>

      {/* İlerleme Çubuğu */}
      <div className="relative z-[3] h-px w-full bg-white/[0.13]">
        <motion.span
          key={`${activeSlide.id}-progress`}
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: AUTO_ADVANCE_MS / 1000, ease: "linear" }}
          className="block h-full bg-brand-turquoise-400"
        />
      </div>

      {/* Nokta Navigasyon / Sayaç / Ok Butonları */}
      <div className="relative z-[3] mx-auto grid max-w-7xl grid-cols-[1fr_auto_1fr] items-center gap-4 px-6 py-5 md:px-12">
        <div className="flex gap-2">
          {HERO_SLIDES.map((slide, index) => (
            <button
              key={slide.id}
              type="button"
              onClick={() => goTo(index)}
              aria-label={`${slide.eyebrow} slaytına git`}
              className="relative h-6 w-6 border-0 bg-transparent p-0"
            >
              <span
                className={`absolute left-1/2 top-1/2 h-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-200 ${
                  index === activeIndex
                    ? "w-6 bg-brand-turquoise-400"
                    : "w-1.5 bg-white/40"
                }`}
              />
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2.5 text-[11px] text-white">
          <span>{String(activeIndex + 1).padStart(2, "0")}</span>
          <span className="h-px w-9 bg-white/25" />
          <small className="text-white/45">
            {String(HERO_SLIDES.length).padStart(2, "0")}
          </small>
        </div>

        <div className="flex justify-end gap-2">
          <button
            type="button"
            onClick={goPrev}
            aria-label="Önceki slayt"
            className="grid h-[39px] w-[39px] place-items-center rounded-full border border-white/15 bg-white/[0.07] text-white transition-all hover:-translate-y-0.5 hover:bg-white hover:text-brand-turquoise-950"
          >
            <ArrowLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={goNext}
            aria-label="Sonraki slayt"
            className="grid h-[39px] w-[39px] place-items-center rounded-full border border-white/15 bg-white/[0.07] text-white transition-all hover:-translate-y-0.5 hover:bg-white hover:text-brand-turquoise-950"
          >
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
