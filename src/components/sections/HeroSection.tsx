"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

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
    image: "/hero/yatirim.jpg",
    href: "/hizmetlerimiz/yatirim-danismanligi",
  },
  {
    id: "tesvik",
    eyebrow: "Teşvik ve Hibe Danışmanlığı",
    title: "Devlet desteklerinden tam kapasite yararlanın",
    description:
      "KOSGEB, TÜBİTAK ve Kalkınma Ajansları destekleriyle işletmenizi ileri taşıyoruz.",
    image: "/hero/tesvik.jpg",
    href: "/hizmetlerimiz/tesvik-ve-hibe-danismanligi",
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

export function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSlide = HERO_SLIDES[activeIndex];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, AUTO_ADVANCE_MS);
    return () => clearInterval(timer);
  }, [activeIndex]);

  return (
    <section className="bg-[#f4f6f8]">
      {/* Ana görsel alanı */}
      <div className="relative h-[70vh] min-h-[480px] w-full overflow-hidden md:h-[80vh]">
        <AnimatePresence mode="sync">
          <motion.div
            key={activeSlide.id}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <Image
              src={activeSlide.image}
              alt={activeSlide.title}
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0d1418]/70 via-transparent to-[#0d1418]/90" />
          </motion.div>
        </AnimatePresence>

        <div className="relative z-10 flex h-full max-w-7xl flex-col justify-end px-6 pb-14 mx-auto md:pb-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSlide.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.5 }}
              className="max-w-xl"
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-white backdrop-blur-sm">
                {activeSlide.eyebrow}
              </span>
              <h1 className="font-heading mt-4 text-3xl font-semibold leading-tight text-white md:text-5xl">
                {activeSlide.title}
              </h1>
              <p className="mt-4 text-base text-white/80 md:text-lg">
                {activeSlide.description}
              </p>
              <Link
                href={activeSlide.href}
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#1a7d8f] to-[#0d4d5c] px-6 py-3 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-[1.03]"
              >
                Detaylı Bilgi Al
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Alt önizleme şeridi */}
      <div className="mx-auto max-w-7xl px-6">
        <div className="-mt-10 grid grid-cols-2 gap-3 md:-mt-14 md:grid-cols-4 md:gap-4">
          {HERO_SLIDES.map((slide, index) => {
            const isActive = index === activeIndex;
            return (
              <button
                key={slide.id}
                onClick={() => setActiveIndex(index)}
                className={`card-surface group relative h-24 overflow-hidden rounded-xl text-left shadow-md transition-all md:h-28 ${
                  isActive
                    ? "ring-2 ring-[#1a7d8f]"
                    : "opacity-80 hover:opacity-100"
                }`}
              >
                <Image
                  src={slide.image}
                  alt={slide.eyebrow}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1418]/80 to-transparent" />
                <span className="absolute bottom-2 left-3 right-3 text-xs font-semibold text-white md:text-sm">
                  {slide.eyebrow}
                </span>
                {isActive && (
                  <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-[#7fc7d4]" />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
