"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { SectionEyebrow } from "@/components/shared/SectionEyebrow";
import type { NewsItem } from "@/types/news";
import { CardMedia } from "../shared/CardMedia";
import { routes } from "@/lib/routes";

interface AnnouncementsSectionProps {
  announcements: NewsItem[];
}

const ITEMS_PER_PAGE = 5;

function formatDate(isoDate: string) {
  return new Date(isoDate).toLocaleDateString("tr-TR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

export function AnnouncementsSection({
  announcements,
}: AnnouncementsSectionProps) {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(announcements.length / ITEMS_PER_PAGE);

  const currentItems = announcements.slice(
    page * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE + ITEMS_PER_PAGE,
  );

  const goTo = (index: number) => {
    setPage((index + totalPages) % totalPages);
  };

  return (
    <section className="bg-white px-6 py-14 md:py-16">
      <div className="mx-auto max-w-7xl">
        {/* Üst satır: Başlık solda, Tüm Haberler butonu sağda */}
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <SectionEyebrow label="Güncel Duyurular" />
            <h2 className="font-heading text-3xl font-semibold text-[#0d4d5c] md:text-4xl">
              Haberler
            </h2>
          </div>

          <Link
            href="/haberler"
            className="group inline-flex items-center gap-2 rounded-full border border-[#0d4d5c]/15 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#0d4d5c] transition-all hover:border-[#1a7d8f] hover:bg-[#e6f2f4] hover:text-[#1a7d8f]"
          >
            Tüm Haberler
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Kart grid'i */}
        <div className="relative mt-8 min-h-[300px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={page}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5"
            >
              {currentItems.map((item) => {
                const isSquare = item.imageRatio === "square";
                return (
                  <Link
                    key={item.id}
                    href={routes.news(item.slug)}
                    className="card-surface group flex flex-col overflow-hidden rounded-2xl shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  >
                    {/* Görsel - dinamik oran: kare veya dikdörtgen */}
                    <CardMedia
                      src={item.image.url}
                      alt={item.title}
                      ratio={isSquare ? "square" : "video"}
                      fit="contain"
                      className="transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                    <div className="flex flex-1 flex-col p-3.5">
                      <time className="text-[11px] font-medium text-[#333333]/40">
                        {formatDate(item.date)}
                      </time>
                      <h3 className="font-heading mt-1.5 text-sm font-semibold leading-snug text-[#0d4d5c] transition-colors group-hover:text-[#1a7d8f] line-clamp-2">
                        {item.title}
                      </h3>
                      <p className="mt-1.5 flex-1 text-xs leading-relaxed text-[#333333]/60 line-clamp-2">
                        {item.excerpt}
                      </p>
                      <span className="group/link mt-2.5 inline-flex w-fit items-center gap-1 text-xs font-semibold text-[#1a7d8f]">
                        Devamını oku
                        <ChevronRight className="h-3.5 w-3.5 transition-transform group-hover/link:translate-x-1" />
                      </span>
                    </div>
                  </Link>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Alt: ortalanmış sayfalama kontrolleri */}
        {totalPages > 1 && (
          <div className="mt-10 flex items-center justify-center gap-4">
            <button
              onClick={() => goTo(page - 1)}
              aria-label="Önceki haberler"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[#0d4d5c]/15 text-[#0d4d5c] transition-all hover:border-[#1a7d8f] hover:bg-[#e6f2f4]"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>

            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  aria-label={`${i + 1}. sayfa`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === page ? "w-6 bg-[#1a7d8f]" : "w-2 bg-[#0d4d5c]/20"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => goTo(page + 1)}
              aria-label="Sonraki haberler"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[#0d4d5c]/15 text-[#0d4d5c] transition-all hover:border-[#1a7d8f] hover:bg-[#e6f2f4]"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
