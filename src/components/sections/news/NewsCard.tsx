import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";

import type { HomeContent } from "@/types";
import { routes } from "@/lib/routes";
import { CardMedia } from "@/components/shared/CardMedia";

type NewsItem = HomeContent["announcements"][number];

interface NewsCardProps {
  news: NewsItem;
}

export function NewsCard({ news }: NewsCardProps) {
  const formattedDate = new Date(news.date).toLocaleDateString("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const isSquare = news.imageRatio === "square";

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[18px] border border-slate-200/80 bg-white shadow-[0_8px_30px_-22px_rgba(15,23,42,0.2)] transition-all duration-300 hover:-translate-y-1 hover:border-[#118B99]/20 hover:shadow-[0_18px_45px_-22px_rgba(17,139,153,0.25)]">
      <Link
        href={routes.news(news.slug)}
        className="relative block overflow-hidden bg-[#EAF6F7]"
      >
        <CardMedia
          src={news.image.url}
          alt={news.image.alt || news.title}
          ratio={isSquare ? "square" : "video"}
          fit="contain"
          className="transition-transform duration-500 group-hover:scale-[1.02]"
        />

        {news.category && (
          <span className="absolute left-4 top-4 z-20 rounded-full border border-white/20 bg-[#0B727D]/85 px-3 py-1.5 text-[10px] font-semibold text-white backdrop-blur">
            {news.category}
          </span>
        )}
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center gap-2 text-xs text-[#799095]">
          <CalendarDays className="h-3.5 w-3.5 text-[#118B99]" />
          <time dateTime={news.date}>{formattedDate}</time>
        </div>

        <Link href={routes.news(news.slug)}>
          <h3 className="mt-3 text-[18px] font-semibold leading-[1.4] tracking-[-0.02em] text-[#173D43] transition-colors group-hover:text-[#118B99]">
            {news.title}
          </h3>
        </Link>

        <p className="mt-3 line-clamp-3 text-sm leading-6 text-[#657E83]">
          {news.excerpt}
        </p>

        <div className="mt-auto pt-5">
          <Link
            href={routes.news(news.slug)}
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#118B99] transition-all hover:gap-3 hover:text-[#0D747E]"
          >
            Haberi Oku
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </article>
  );
}
