import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

import type { ArticleItem } from "@/types/article";

import { BlogCard } from "./BlogCard";

interface BlogGridProps {
  articles: ArticleItem[];
  currentPage: number;
  totalPages: number;
}

export function BlogGrid({
  articles,
  currentPage,
  totalPages,
}: BlogGridProps) {
  return (
    <section className="bg-white py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* BAŞLIK */}
        <div className="mb-8 sm:mb-10">
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#118B99]">
            Makaleler
          </p>

          <h2 className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-[#173D43] sm:text-3xl">
            Güncel Yazılar
          </h2>
        </div>

        {/* MAKALELER */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <BlogCard
              key={article.id}
              article={article}
            />
          ))}
        </div>

        {/* SAYFALAMA */}
        {totalPages > 1 && (
          <div className="mt-12 flex flex-wrap items-center justify-center gap-2">
            {/* ÖNCEKİ */}
            {currentPage > 1 ? (
              <Link
                href={`/blog?page=${currentPage - 1}`}
                className="flex h-10 items-center gap-2 rounded-full border border-[#118B99]/15 bg-white px-4 text-sm font-semibold text-[#31565C] transition hover:border-[#118B99] hover:text-[#118B99]"
              >
                <ArrowLeft className="h-4 w-4" />
                Önceki
              </Link>
            ) : (
              <span className="flex h-10 cursor-not-allowed items-center gap-2 rounded-full border border-gray-100 bg-gray-50 px-4 text-sm font-semibold text-gray-300">
                <ArrowLeft className="h-4 w-4" />
                Önceki
              </span>
            )}

            {/* SAYFA NUMARALARI */}
            {Array.from(
              { length: totalPages },
              (_, index) => {
                const page = index + 1;

                return (
                  <Link
                    key={page}
                    href={`/blog?page=${page}`}
                    className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold transition ${
                      currentPage === page
                        ? "bg-[#118B99] text-white"
                        : "border border-[#118B99]/15 bg-white text-[#526F74] hover:border-[#118B99] hover:text-[#118B99]"
                    }`}
                  >
                    {page}
                  </Link>
                );
              },
            )}

            {/* SONRAKİ */}
            {currentPage < totalPages ? (
              <Link
                href={`/blog?page=${currentPage + 1}`}
                className="flex h-10 items-center gap-2 rounded-full border border-[#118B99]/15 bg-white px-4 text-sm font-semibold text-[#31565C] transition hover:border-[#118B99] hover:text-[#118B99]"
              >
                Sonraki
                <ArrowRight className="h-4 w-4" />
              </Link>
            ) : (
              <span className="flex h-10 cursor-not-allowed items-center gap-2 rounded-full border border-gray-100 bg-gray-50 px-4 text-sm font-semibold text-gray-300">
                Sonraki
                <ArrowRight className="h-4 w-4" />
              </span>
            )}
          </div>
        )}
      </div>
    </section>
  );
}