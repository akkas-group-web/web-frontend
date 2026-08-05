"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface HeroSlide {
  id: string;
  eyebrow: string;
  title: string;
  shortTitle: string;
  description: string;
  image: string;
  href: string;
}

const HERO_SLIDES: HeroSlide[] = [
  {
    id: "yatirim",
    eyebrow: "Yatırım Danışmanlığı değil",
    title: "Yatırımınızı doğru adımlarla büyütün",
    shortTitle: "Yatırım Danışmanlığı",
    description:
      "Teşvik belgesi, fizibilite ve gümrük muafiyeti süreçlerinde uçtan uca yanınızdayız.",
    image: "/hero/yatirim.jpg",
    href: "/hizmetlerimiz/yatirim-danismanligi",
  },
  {
    id: "tesvik",
    eyebrow: "OSGB Hizmetleri",
    title: "İş sağlığı ve güvenliğinde profesyonel çözümler",
    shortTitle: "OSGB",
    description:
      "KOSGEB, TÜBİTAK ve Kalkınma Ajansları destekleriyle işletmenizi ileri taşıyoruz.",
    image: "/hero/osgb.png",
    href: "/hizmetlerimiz/osgb",
  },
  {
    id: "kvkk",
    eyebrow: "KVKK Danışmanlığı",
    title: "Veri uyumluluğunda güvende kalın",
    shortTitle: "KVKK Uyum",
    description:
      "VERBİS kaydından aydınlatma metinlerine, uçtan uca KVKK uyum süreci.",
    image: "/hero/kvkk.jpg",
    href: "/hizmetlerimiz/kvkk-danismanligi",
  },
  {
    id: "kalite",
    eyebrow: "Kalite Belgelendirme",
    title: "ISO belgelendirmede güvenilir çözüm ortağınız",
    shortTitle: "ISO Belgelendirme",
    description:
      "ISO 9001, ISO 14001, ISO 27001 ve CE markalama süreçlerini birlikte yönetelim.",
    image: "/hero/kalite.jpg",
    href: "/hizmetlerimiz/kalite-sistemleri",
  },
];

const AUTO_ADVANCE_MS = 6000;

export function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const activeSlide = HERO_SLIDES[activeIndex];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, AUTO_ADVANCE_MS);
    return () => clearInterval(timer);
  }, [activeIndex]);

  return (
    <section className="relative -mt-[73px]">
      {/* Yükseklik dengelendi (Ekranı kaplamayacak şekilde h-[62vh] yapıldı) */}
      <div className="relative h-screen min-h-[600px] w-full overflow-hidden">
        {/* Slayt Görselleri */}
        <AnimatePresence mode="sync">
          <motion.div
            key={activeSlide.id}
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <Image
              src={activeSlide.image}
              alt={activeSlide.title}
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
          </motion.div>
        </AnimatePresence>

        {/* Hero İçerik Metinleri - Yükseklik dengelendi (pb-24 -> pb-32 yapıldı) */}
        {/* Hero İçerik Metinleri - Yukarı çekildi */}
        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-8 pb-20 pt-16 md:px-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSlide.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35 }}
              className="max-w-xl"
            >
              <h1 className="font-heading text-2xl font-bold leading-tight text-white md:text-3xl lg:text-4xl">
                {activeSlide.title}
              </h1>
              <p className="mt-2.5 max-w-md text-sm text-white/85 md:text-base">
                {activeSlide.description}
              </p>
              <Link
                href={activeSlide.href}
                className="group mt-4 inline-flex items-center gap-2.5 rounded-full bg-white/95 px-5 py-2 text-xs font-semibold text-[#0d4d5c] shadow-md backdrop-blur-md transition-all duration-300 hover:bg-white hover:shadow-lg"
              >
                <span>İnceleyin</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>
        {/* Alt Önizleme & Çizgi Alanı */}
        <div
          className="absolute bottom-10 left-0 right-0 z-20 mx-auto max-w-7xl px-8 md:px-12"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Aktif Slayt Başlığı */}
          <div className="relative mb-2 h-5">
            <AnimatePresence mode="wait">
              <motion.span
                key={activeSlide.id}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.2 }}
                className="absolute left-0 text-xs font-bold uppercase tracking-wider text-white drop-shadow-sm"
                style={{
                  left: `calc(${(activeIndex / HERO_SLIDES.length) * 100}% + 2px)`,
                }}
              >
                {activeSlide.shortTitle}
              </motion.span>
            </AnimatePresence>
          </div>

          {/* Hover Edildiğinde Açılan Önizleme Kartları (Kompakt Boyut) */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, y: 16, height: 0 }}
                animate={{ opacity: 1, y: 0, height: "auto" }}
                exit={{ opacity: 0, y: 16, height: 0 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="mb-3.5 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4 overflow-hidden"
              >
                {HERO_SLIDES.map((slide, index) => {
                  const isActive = index === activeIndex;
                  return (
                    <button
                      key={slide.id}
                      onClick={() => setActiveIndex(index)}
                      className={`group relative h-20 w-full overflow-hidden rounded-md text-left transition-all md:h-24 ${
                        isActive
                          ? "ring-2 ring-white"
                          : "opacity-70 hover:opacity-100"
                      }`}
                    >
                      <Image
                        src={slide.image}
                        alt={slide.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />
                    </button>
                  );
                })}
              </motion.div>
            )}
          </AnimatePresence>

          {/* İnce Çizgili İlerleme Çubuğu */}
          <div className="grid grid-cols-4 gap-2.5 md:gap-3">
            {HERO_SLIDES.map((_, index) => {
              const isActive = index === activeIndex;
              return (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className="group relative h-1 w-full overflow-hidden rounded-full bg-white/30 transition-all hover:bg-white/60"
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeBar"
                      className="h-full w-full bg-white shadow-sm"
                      transition={{
                        type: "spring",
                        stiffness: 350,
                        damping: 30,
                      }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
