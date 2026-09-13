import Link from "next/link";
import { ChevronRight } from "lucide-react";

import type { ArticleItem } from "@/types/article";
import { routes } from "@/lib/routes";
import { AuthorAvatar } from "@/components/shared/AuthorAvatar";
import { CardMedia } from "@/components/shared/CardMedia";
import { formatDate } from "@/lib/format-date";

interface BlogCardProps {
  article: ArticleItem;
}

export function BlogCard({ article }: BlogCardProps) {
  return (
    <Link
      href={routes.article(article.slug)}
      className="card-surface group flex h-full flex-col overflow-hidden rounded-2xl shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
    >
      {article.image?.url ? (
        <CardMedia
          src={article.image.url}
          alt={article.image.alt || article.title || "Makale görseli"}
          ratio="video"
          fit="contain"
          className="transition-transform duration-500 group-hover:scale-[1.02]"
        />
      ) : null}

      <div className="flex flex-1 flex-col p-4">
        <time className="text-[11px] font-medium text-[#333333]/40">
          {formatDate(article.date)}
        </time>

        <h2 className="font-heading mt-1.5 line-clamp-2 text-sm font-semibold leading-snug text-[#0d4d5c] transition-colors group-hover:text-[#1a7d8f]">
          {article.title}
        </h2>

        <p className="mt-1.5 line-clamp-3 flex-1 text-xs leading-relaxed text-[#333333]/60">
          {article.excerpt}
        </p>

        <div className="mt-4 flex items-center gap-2.5 border-t border-[#0d4d5c]/8 pt-3">
          {article.author?.photo?.url ? (
            <AuthorAvatar
              src={article.author.photo.url}
              alt={
                article.author.photo.alt ||
                article.author.name ||
                "Yazar profil fotoğrafı"
              }
              size={32}
            />
          ) : null}

          <div className="min-w-0">
            <p className="truncate text-xs font-semibold text-[#0d4d5c]">
              {article.author.name}
            </p>

            {article.author.role && (
              <p className="truncate text-[10px] text-[#333333]/50">
                {article.author.role}
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
  );
}