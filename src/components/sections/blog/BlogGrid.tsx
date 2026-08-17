import type { ArticleItem } from "@/types/article";

import { BlogCard } from "./BlogCard";

interface BlogGridProps {
  articles: ArticleItem[];
}

export function BlogGrid({ articles }: BlogGridProps) {
  return (
    <section className="bg-white py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {articles.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <BlogCard key={article.id} article={article} />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl bg-[#F4FAFA] py-14 text-center">
            <p className="text-sm text-[#71898D]">
              Henüz blog yazısı bulunmuyor.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}