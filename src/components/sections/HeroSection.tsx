"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Award,
  Phone,
  Users,
  X,
  type LucideIcon,
} from "lucide-react";
import { STATS } from "@/constants/site";
import type { HeroSlide } from "@/services/hero.service";
import type { Application } from "@/services/application.service";

interface HeroSectionProps {
  slides: HeroSlide[];
  applications: Application[];
}

const AUTO_ADVANCE_MS = 6000;

// Sol taraftaki bilgi satırında gösterilecek 2 istatistik ve ikonları.
// STATS, constants/site.ts içindeki tek doğruluk kaynağından geliyor.
const INFO_ROW_ICONS: LucideIcon[] = [Award, Users];
const INFO_ROW_STATS = [STATS[0], STATS[2]];

// Poster çerçevesinin sol altına taşan vurgu kartı için ayrı istatistik.
const FLOATING_STAT = STATS[1];

/**
 * WordPress'teki ACF "Link" alanından link özelliklerini hazırlar.
 * - Link girilmemişse tıklanınca hiçbir yere gitmez (#).
 * - WordPress'te "Yeni sekmede aç" işaretliyse yeni sekmede açılır.
 */
function getApplicationLinkProps(
  link?: {
    url: string;
    title?: string;
    target?: string;
  } | null,
) {
  const href = link?.url?.trim();

  if (!href) return { href: "#" };

  return {
    href,
    target: link?.target || undefined,
    rel: link?.target === "_blank" ? "noopener noreferrer" : undefined,
  };
}

interface HeroApplicationsProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  applications: Application[];
}

/**
 * Sol kenarda dikey "UYGULAMALARIMIZ" sekmesi (tablet ve masaüstü).
 * Mobilde ise hero'daki butonla alttan açılan bir panel (bottom sheet) çıkar.
 * Tıklayınca aynı hizada küçük bir kart açılır.
 *
 * - Hero'nun ÜSTÜNDE (absolute) durur, düzeni itmez.
 * - Sayfanın geri kalanını kapatmaz: arkada katman yok, hero'daki
 *   butonlar kart açıkken de tıklanabilir.
 * - Kart her ekranda logo + isimle açılır. Kenarda yer olmayan ekranlarda
 *   açık kaldığı sürece yazının bir kısmının üstünde durur (açılır menü gibi);
 *   kapalı sekme ise ince olduğu için hiçbir ekranda yazıya binmez.
 * - Kapatma: X butonu, kartın dışına tıklama veya Esc tuşu.
 */
function HeroApplications({
  open,
  onOpenChange,
  applications,
}: HeroApplicationsProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const sheetRef = useRef<HTMLDivElement>(null);

  // Esc ile veya kartın dışına tıklayınca kapat (tıklamayı engellemeden)
  useEffect(() => {
    if (!open) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onOpenChange(false);
    }

    function handlePointerDown(event: PointerEvent) {
      const target = event.target as Node;
      const insideCard = cardRef.current?.contains(target);
      const insideSheet = sheetRef.current?.contains(target);

      if (!insideCard && !insideSheet) {
        onOpenChange(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    document.addEventListener("pointerdown", handlePointerDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [open, onOpenChange]);

  // MOBİL: panel açıkken
  // - sayfanın arkada kaymasını engelle,
  // - sağ alttaki Akkaş Robot'u (.cw-root) gizle ki panelin üstüne binmesin.
  // Panel kapanınca ikisi de eski haline döner.
  useEffect(() => {
    if (!open) return;
    if (!window.matchMedia("(max-width: 767px)").matches) return;

    const { body } = document;
    const robot = document.querySelector<HTMLElement>(".cw-root");

    const previousOverflow = body.style.overflow;
    const previousRobotDisplay = robot?.style.display ?? "";

    body.style.overflow = "hidden";
    robot?.style.setProperty("display", "none", "important");

    return () => {
      body.style.overflow = previousOverflow;
      if (robot) robot.style.display = previousRobotDisplay;
    };
  }, [open]);

  return (
    <>
    {/* MASAÜSTÜ / TABLET: sol kenardaki sekme ve kart */}
    {/* Menünün altından (73px) slider alt çubuğunun üstüne (77px) kadar uzanan
        görünmez kap; sekme ve kart bu alanın TAM ORTASINA hizalanır. */}
    <div className="pointer-events-none absolute bottom-[40px] left-0 top-[110px] z-[7] hidden items-center md:flex">
      {/* Kapalıyken: sol kenardaki dikey sekme */}
      <button
        type="button"
        onClick={() => onOpenChange(true)}
        aria-expanded={open}
        aria-controls="hero-applications-card"
        className={`pointer-events-auto flex-col items-center gap-3 rounded-r-2xl bg-white px-2.5 py-5 text-brand-turquoise-700 shadow-[8px_12px_32px_rgba(4,45,52,0.25)] transition-all hover:pl-3.5 ${
          open ? "hidden" : "flex"
        }`}
      >
        <span className="whitespace-nowrap text-[11px] font-extrabold uppercase tracking-[0.2em] [writing-mode:vertical-rl] rotate-180">
          Uygulamalarımız
        </span>

        {/* Renkli noktalar – yazının ALTINDA, üst üste binmez.
            Uygulama sayısı artsa da sekme uzamasın diye en fazla 6 nokta. */}
        <span className="flex flex-col gap-1.5" aria-hidden={true}>
          {applications.slice(0, 6).map((application) => (
            <span
              key={application.id}
              className="h-2 w-2 rounded-full bg-brand-turquoise-400"
            />
          ))}
        </span>
      </button>

      {/* Açıkken: sekmenin yerinde açılan kart */}
      <AnimatePresence>
        {open && (
          <div ref={cardRef} className="pointer-events-auto ml-2">
            <motion.nav
              key="hero-apps-card"
              id="hero-applications-card"
              aria-label="Uygulamalarımız"
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="w-[176px] overflow-hidden rounded-2xl bg-white text-brand-turquoise-950 shadow-[0_24px_60px_rgba(4,45,52,0.35)] ring-1 ring-black/[0.04]"
            >
              {/* Başlık: ortada, altında ince çizgi; X sağ köşede */}
              <div className="relative flex min-h-11 items-center justify-center border-b border-brand-turquoise-900/[0.08] px-7">
                <span className="text-center text-[9px] font-extrabold uppercase tracking-[0.12em] text-brand-turquoise-700">
                  Uygulamalarımız
                </span>

                <button
                  type="button"
                  onClick={() => onOpenChange(false)}
                  aria-label="Kapat"
                  className="absolute right-1 top-1/2 grid h-7 w-7 -translate-y-1/2 place-items-center rounded-full text-brand-turquoise-950/45 transition-colors hover:bg-brand-turquoise-50 hover:text-brand-turquoise-950"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              </div>

              {/* Uygulamalar: satırlar ince çizgilerle ayrılır */}
              <ul className="divide-y divide-brand-turquoise-900/[0.06]">
                {applications.map((application, index) => {
                  return (
                    <motion.li
                      key={application.id}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.08 + index * 0.04 }}
                    >
                      <Link
                        {...getApplicationLinkProps(application.link)}
                        onClick={() => onOpenChange(false)}
                        className="group relative flex min-h-[54px] items-center gap-2 px-2.5 py-2 transition-colors hover:bg-brand-turquoise-50/70 focus-visible:bg-brand-turquoise-50 focus-visible:outline-none"
                      >
                        {/* Logo kutusu: logo içine tam sığar, kesilmez */}
                        <span className="relative h-10 w-10 shrink-0 overflow-hidden rounded-lg border border-brand-turquoise-900/[0.08] bg-white p-0.5 shadow-[0_1px_2px_rgba(4,45,52,0.06)] transition-shadow group-hover:shadow-[0_4px_12px_rgba(4,45,52,0.12)]">
                          <span className="relative block h-full w-full">
                            <Image
                              src={application.logo.url}
                              alt={application.logo.alt || application.title}
                              fill
                              sizes="40px"
                              className="object-contain"
                            />
                          </span>
                        </span>

                        {/* Uygulama adı */}
                        <span className="min-w-0 flex-1 truncate text-[12px] font-bold leading-tight">
                          {application.title}
                        </span>
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>
            </motion.nav>
          </div>
        )}
      </AnimatePresence>
    </div>

      {/* MOBİL: alttan açılan panel (bottom sheet). Masaüstünde gizli. */}
      <AnimatePresence>
        {open && (
          <div key="hero-apps-sheet" className="md:hidden">
            {/* Karartma: dokununca kapanır */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="pointer-events-auto fixed inset-0 z-[1000] bg-brand-turquoise-950/45"
              aria-hidden={true}
            />

            <motion.div
              ref={sheetRef}
              role="dialog"
              aria-modal="true"
              aria-label="Uygulamalarımız"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="pointer-events-auto fixed inset-x-0 bottom-0 z-[1001] rounded-t-3xl bg-white px-5 pb-[max(20px,env(safe-area-inset-bottom))] pt-2.5 text-brand-turquoise-950 shadow-[0_-18px_50px_rgba(4,45,52,0.25)]"
            >
              {/* Tutamaç */}
              <span className="mx-auto mb-2 block h-1 w-10 rounded-full bg-brand-turquoise-900/15" />

              {/* Başlık ortada, X sağda */}
              <div className="relative mb-4 flex min-h-11 items-center justify-center border-b border-brand-turquoise-900/[0.08]">
                <span className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-brand-turquoise-700">
                  Uygulamalarımız
                </span>

                <button
                  type="button"
                  onClick={() => onOpenChange(false)}
                  aria-label="Kapat"
                  className="absolute right-0 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full text-brand-turquoise-950/50 transition-colors hover:bg-brand-turquoise-50"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* 2 sütunlu uygulama kutuları */}
              <ul className="grid grid-cols-2 gap-3">
                {applications.map((application, index) => (
                  <motion.li
                    key={application.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.12 + index * 0.05 }}
                    // Uygulama sayısı tekse son kutu solda yalnız kalmasın, ortalansın
                    className="[&:last-child:nth-child(odd)]:col-span-2 [&:last-child:nth-child(odd)]:mx-auto [&:last-child:nth-child(odd)]:w-[calc(50%-6px)]"
                  >
                    <Link
                      {...getApplicationLinkProps(application.link)}
                      onClick={() => onOpenChange(false)}
                      className="flex h-full flex-col items-center gap-2.5 rounded-2xl border border-brand-turquoise-900/[0.08] px-3 py-4 text-center transition-colors active:bg-brand-turquoise-50"
                    >
                      <span className="relative h-14 w-14 overflow-hidden rounded-xl border border-brand-turquoise-900/[0.08] bg-white p-1 shadow-[0_2px_6px_rgba(4,45,52,0.08)]">
                        <span className="relative block h-full w-full">
                          <Image
                            src={application.logo.url}
                            alt={application.logo.alt || application.title}
                            fill
                            sizes="56px"
                            className="object-contain"
                          />
                        </span>
                      </span>

                      <span className="text-[13px] font-bold leading-tight">
                        {application.title}
                      </span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

export function HeroSection({ slides, applications }: HeroSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [applicationsOpen, setApplicationsOpen] = useState(false);
  //const activeSlide = HERO_SLIDES[activeIndex];
  const activeSlide = slides[activeIndex];

  useEffect(() => {
    // Uygulamalar çekmecesi açıkken slider otomatik ilerlemesin
    if (applicationsOpen) return;

    const timer = setInterval(() => {
      setActiveIndex((previousIndex) => {
        // return (previousIndex + 1) % HERO_SLIDES.length;
        return (previousIndex + 1) % slides.length;
      });
    }, AUTO_ADVANCE_MS);

    return () => clearInterval(timer);
    //}, [activeIndex]);
  }, [activeIndex, slides.length, applicationsOpen]);

  function goTo(index: number) {
    setActiveIndex(index);
  }

  function goPrev() {
    setActiveIndex((previousIndex) => {
      return (
        // (previousIndex - 1 + HERO_SLIDES.length) % HERO_SLIDES.length
        (previousIndex - 1 + slides.length) % slides.length
      );
    });
  }

  function goNext() {
    setActiveIndex((previousIndex) => {
      //return (previousIndex + 1) % HERO_SLIDES.length;
      return (previousIndex + 1) % slides.length;
    });
  }

  return (
    <section className="relative -mt-[73px] overflow-hidden bg-gradient-to-br from-brand-turquoise-700 via-brand-turquoise-500 to-brand-turquoise-300 text-white">
      {/* Dekoratif ızgara deseni */}
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

      {/* Uygulamalarımız */}
      <HeroApplications
        open={applicationsOpen}
        onOpenChange={setApplicationsOpen}
        applications={applications}
      />

      <div className="relative z-[2] mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-6 pb-10 pt-28 md:px-12 md:pt-32 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:pt-47 lg:min-h-[600px]">
        {/* Sol: Metin içeriği */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeSlide.id}-copy`}
            initial={{ opacity: 0, x: -18 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
           className={`text-center transition-transform duration-300 lg:text-left ${
  applicationsOpen ? "lg:translate-x-[150px]" : "lg:translate-x-0"
}`}
          >
            <span className="mb-5 inline-flex items-center gap-2.5 text-[11px] font-extrabold uppercase tracking-widest text-brand-turquoise-100">
              <span className="h-0.5 w-7 bg-brand-turquoise-400" />
              {activeSlide.eyebrow}
            </span>

            <h1 className="mx-auto max-w-[580px] min-h-[70px] text-[32px] font-bold leading-[1.08] tracking-[-1.2px] md:min-h-[88px] md:text-[40px] lg:mx-0 lg:min-h-[96px] lg:text-[44px] line-clamp-2">
              {activeSlide.title}
            </h1>

            <p className="mx-auto mt-4 max-w-[500px] min-h-[64px] text-[13px] leading-relaxed text-white/75 lg:mx-0 line-clamp-3">
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

                      <small className="whitespace-nowrap text-[9px] tracking-wide text-white/50">
                        {stat.label}
                      </small>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* MOBİL: uygulamalar butonu (dokununca alttan panel açılır) */}
            <div className="mt-7 flex justify-center md:hidden">
              <button
                type="button"
                onClick={() => setApplicationsOpen(true)}
                aria-haspopup="dialog"
                aria-expanded={applicationsOpen}
                className="inline-flex min-h-[44px] items-center gap-3 rounded-full border border-white/20 bg-white/[0.1] py-1.5 pl-1.5 pr-4 text-[12px] font-bold text-white backdrop-blur-sm transition-colors active:bg-white/[0.18]"
              >
                <span className="flex -space-x-2" aria-hidden={true}>
                  {applications.slice(0, 4).map((application) => (
                    <span
                      key={application.id}
                      className="relative h-7 w-7 overflow-hidden rounded-full border-2 border-white bg-white"
                    >
                      <Image
                        src={application.logo.url}
                        alt=""
                        fill
                        sizes="28px"
                        className="object-contain p-0.5"
                      />
                    </span>
                  ))}
                </span>
                Uygulamalarımız
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Sağ: Poster çerçevesi ve bilgi kartı */}
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

              <div className="relative aspect-[16/10] overflow-hidden rounded-[15px] bg-brand-turquoise-50 lg:h-[300px] lg:aspect-auto">
                {" "}
                {activeSlide.image?.url ? (
                  <Image
                    src={activeSlide.image.url}
                    alt={
                      activeSlide.image.alt ||
                      activeSlide.title ||
                      "Hero görseli"
                    }
                    fill
                    priority={activeIndex === 0}
                    sizes="(max-width: 1024px) 100vw, 480px"
                    className="object-cover object-right"
                  />
                ) : null}
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

      {/* İlerleme çubuğu */}
      <div className="relative z-[3] h-px w-full bg-white/[0.13]">
        <motion.span
          key={`${activeSlide.id}-progress`}
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{
            duration: AUTO_ADVANCE_MS / 1000,
            ease: "linear",
          }}
          className="block h-full bg-brand-turquoise-400"
        />
      </div>

      {/* Nokta navigasyon, sayaç ve ok butonları */}
      <div className="relative z-[3] mx-auto grid max-w-7xl grid-cols-[1fr_auto] items-center gap-3 px-6 py-4 md:grid-cols-[1fr_auto_1fr] md:gap-4 md:px-12 md:py-5">
        {" "}
        <div className="flex gap-2">
          {/* {HERO_SLIDES.map((slide, index) => ( */}
          {slides.map((slide, index) => (
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
        <div className="hidden items-center gap-2.5 text-[11px] text-white md:flex">
          <span>{String(activeIndex + 1).padStart(2, "0")}</span>
          <span className="h-px w-9 bg-white/25" />

          <small className="text-white/45">
            {/* {String(HERO_SLIDES.length).padStart(2, "0")} */}
            {String(slides.length).padStart(2, "0")}
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
