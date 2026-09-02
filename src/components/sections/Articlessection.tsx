"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

import { AuthorAvatar } from "@/components/shared/AuthorAvatar";
import { SectionEyebrow } from "@/components/shared/SectionEyebrow";
import { formatDate } from "@/lib/format-date";
import type { ArticleItem } from "@/types/article";
import { CardMedia } from "../shared/CardMedia";
import { routes } from "@/lib/routes";

interface ArticlesSectionProps {
  articles: ArticleItem[];
}

const ITEMS_PER_PAGE = 4;

export function ArticlesSection({ articles }: ArticlesSectionProps) {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(articles.length / ITEMS_PER_PAGE);

  const currentItems = articles.slice(
    page * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE + ITEMS_PER_PAGE,
  );

  const goTo = (index: number) => {
    setPage((index + totalPages) % totalPages);
  };

  return (
    <section className="bg-white px-6 py-14 md:py-16">
      <div className="mx-auto max-w-7xl">
        {/* Üst satır: Başlık solda, Tüm Makaleler butonu sağda */}
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <SectionEyebrow label="Uzman Görüşleri" />

            <h2 className="font-heading text-3xl font-semibold text-[#0d4d5c] md:text-4xl">
              Makaleler
            </h2>
          </div>

          <Link
            href="/blog"
            className="group inline-flex items-center gap-2 rounded-full border border-[#0d4d5c]/15 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#0d4d5c] transition-all hover:border-[#1a7d8f] hover:bg-[#e6f2f4] hover:text-[#1a7d8f]"
          >
            Tüm Makaleler
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Kart grid'i */}
        <div className="relative mt-8 min-h-[420px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={page}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 }}
              transition={{
                duration: 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
            >
              {currentItems.map((item) => (
                <Link
                  key={item.id}
                  href={routes.article(item.slug)}
                  className="card-surface group flex flex-col overflow-hidden rounded-2xl shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  {/* Makale kapak görseli */}
                  <CardMedia
                    src={item.image?.url}
                    alt={item.image?.alt ?? item.title}
                    ratio="video"
                    fit="contain"
                    className="transition-transform duration-500 group-hover:scale-[1.02]"
                  />

                  <div className="flex flex-1 flex-col p-4">
                    <time className="text-[11px] font-medium text-[#333333]/40">
                      {formatDate(item.date)}
                    </time>

                    <h3 className="font-heading mt-1.5 line-clamp-2 text-sm font-semibold leading-snug text-[#0d4d5c] transition-colors group-hover:text-[#1a7d8f]">
                      {item.title}
                    </h3>

                    <p className="mt-1.5 line-clamp-3 flex-1 text-xs leading-relaxed text-[#333333]/60">
                      {item.excerpt}
                    </p>

                    {/* Yazar bilgileri */}
                    <div className="mt-4 flex items-center gap-2.5 border-t border-[#0d4d5c]/8 pt-3">
                      <AuthorAvatar
                        src={item.author.photo?.url}
                        alt={item.author.photo?.alt ?? item.author.name}
                        size={32}
                      />

                      <div className="min-w-0">
                        <p className="truncate text-xs font-semibold text-[#0d4d5c]">
                          {item.author.name}
                        </p>

                        {item.author.role && (
                          <p className="truncate text-[10px] text-[#333333]/50">
                            {item.author.role}
                          </p>
                        )}
                      </div>
                    </div>

                    <span className="group/link mt-3 inline-flex w-fit items-center gap-1 text-xs font-semibold text-[#1a7d8f]">
                      Devamını oku
                      <ChevronRight className="h-3.5 w-3.5 transition-transform group-hover/link:translate-x-1" />
                    </span>
                  </div>
                </Link>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Sayfalama kontrolleri */}
        {totalPages > 1 && (
          <div className="mt-10 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => goTo(page - 1)}
              aria-label="Önceki makaleler"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[#0d4d5c]/15 text-[#0d4d5c] transition-all hover:border-[#1a7d8f] hover:bg-[#e6f2f4]"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>

            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => goTo(index)}
                  aria-label={`${index + 1}. sayfa`}
                  aria-current={index === page ? "page" : undefined}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === page ? "w-6 bg-[#1a7d8f]" : "w-2 bg-[#0d4d5c]/20"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() => goTo(page + 1)}
              aria-label="Sonraki makaleler"
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
