import Image from "next/image";
import Link from "next/link";

import { ArrowUpRight, CalendarDays, Newspaper } from "lucide-react";

import type { HomeContent } from "@/types";

type NewsItem = HomeContent["announcements"][number];

interface NewsGridProps {
  news: NewsItem[];
}

export function NewsGrid({ news }: NewsGridProps) {
  return (
    <section className="bg-[#FCFEFE] py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_260px]">
          {/* SOL - HABER AKIŞI */}
          <div>
            <div className="mb-8 flex items-end justify-between border-b border-[#118B99]/10 pb-5">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.19em] text-[#118B99]">
                  Haber Akışı
                </p>

                <h2 className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-[#173D43] sm:text-3xl">
                  Son Haberler
                </h2>
              </div>

              <span className="text-xs text-[#84989C]">
                {news.length} haber
              </span>
            </div>

            <div className="divide-y divide-[#118B99]/10">
              {news.map((item) => {
                const date = new Date(item.date);

                const day = date.toLocaleDateString("tr-TR", {
                  day: "2-digit",
                });

                const month = date
                  .toLocaleDateString("tr-TR", {
                    month: "short",
                  })
                  .toUpperCase();

                const year = date.getFullYear();

                return (
                  <article
                    key={item.id}
                    className="group grid gap-5 py-8 first:pt-0 sm:grid-cols-[62px_210px_1fr] sm:gap-6"
                  >
                    {/* TARİH */}
                    <div className="hidden sm:block">
                      <div className="text-center">
                        <p className="text-2xl font-semibold tracking-[-0.04em] text-[#173D43]">
                          {day}
                        </p>

                        <p className="mt-0.5 text-[10px] font-bold uppercase tracking-[0.12em] text-[#118B99]">
                          {month}
                        </p>

                        <p className="mt-1 text-[10px] text-[#91A3A6]">
                          {year}
                        </p>
                      </div>
                    </div>

                    {/* GÖRSEL */}
                    <Link
                      href={item.href}
                      className="relative block aspect-[16/10] overflow-hidden rounded-[16px] bg-[#EAF6F7]"
                    >
                      <Image
                        src={item.image.url}
                        alt={item.title}
                        fill
                        sizes="210px"
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.045]"
                      />
                    </Link>

                    {/* İÇERİK */}
                    <div className="flex flex-col justify-center">
                      <div className="mb-3 flex flex-wrap items-center gap-3">
                        {item.category && (
                          <span className="rounded-full bg-[#E4F5F6] px-3 py-1.5 text-[10px] font-semibold text-[#118B99]">
                            {item.category}
                          </span>
                        )}

                        {/* MOBİL TARİH */}
                        <span className="flex items-center gap-1.5 text-[11px] text-[#819699] sm:hidden">
                          <CalendarDays className="h-3.5 w-3.5 text-[#118B99]" />

                          {date.toLocaleDateString("tr-TR", {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                          })}
                        </span>
                      </div>

                      <Link href={item.href}>
                        <h3 className="max-w-2xl text-[20px] font-semibold leading-[1.35] tracking-[-0.02em] text-[#173D43] transition-colors duration-300 group-hover:text-[#118B99]">
                          {item.title}
                        </h3>
                      </Link>

                      <p className="mt-3 line-clamp-2 max-w-2xl text-sm leading-6 text-[#667F84]">
                        {item.excerpt}
                      </p>

                      <Link
                        href={item.href}
                        className="mt-4 inline-flex w-fit items-center gap-2 text-xs font-semibold text-[#118B99] transition-all duration-300 hover:gap-3"
                      >
                        Haberi görüntüle
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          {/* SAĞ - HIZLI GÜNDEM */}
          <aside className="hidden lg:block">
            <div>
              <div className="mb-5 flex items-center gap-2">
                <Newspaper className="h-4 w-4 text-[#118B99]" />

                <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#31565C]">
                  Hızlı Gündem
                </p>
              </div>

              <div className="border-l border-[#118B99]/15">
                {news.slice(0, 5).map((item, index) => (
                  <Link
                    key={item.id}
                    href={item.href}
                    className="group relative block py-4 pl-5 first:pt-0"
                  >
                    <span className="absolute -left-[4.5px] top-[22px] h-2 w-2 rounded-full border-2 border-white bg-[#118B99] first:top-[6px]" />

                    <p className="text-[10px] font-semibold text-[#118B99]">
                      {String(index + 1).padStart(2, "0")}
                    </p>

                    <p className="mt-1 text-sm font-medium leading-5 text-[#526F74] transition-colors group-hover:text-[#118B99]">
                      {item.title}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
