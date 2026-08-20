import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";

import type { ArticleItem } from "@/types/article";

interface BlogCardProps {
  article: ArticleItem;
}

export function BlogCard({ article }: BlogCardProps) {
  const formattedDate = new Date(article.date).toLocaleDateString("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <article className="group overflow-hidden rounded-[18px] border border-slate-200/80 bg-white shadow-[0_8px_30px_-20px_rgba(15,23,42,0.25)] transition-all duration-300 hover:-translate-y-1 hover:border-[#118B99]/20 hover:shadow-[0_18px_45px_-20px_rgba(17,139,153,0.25)]">
      <Link
        href={article.href}
        className="relative block aspect-[16/9] overflow-hidden bg-[#EAF6F7]"
      >
<Image
  src={article.image.url}
  alt={article.image.alt}
  fill
  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
/>
      </Link>

      <div className="p-5">
        <div className="flex items-center gap-2 text-xs text-[#759095]">
          <CalendarDays className="h-3.5 w-3.5 text-[#118B99]" />
          <time>{formattedDate}</time>
        </div>

        <Link href={article.href}>
          <h2 className="mt-3 text-[19px] font-semibold leading-[1.35] tracking-[-0.02em] text-[#173D43] transition-colors group-hover:text-[#118B99]">
            {article.title}
          </h2>
        </Link>

        <p className="mt-3 line-clamp-2 text-sm leading-6 text-[#647D82]">
          {article.excerpt}
        </p>

        <Link
          href={article.href}
          className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#118B99] transition-all hover:gap-3 hover:text-[#0D727C]"
        >
          Devamını Oku
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}