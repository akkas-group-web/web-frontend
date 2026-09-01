import type { Metadata } from "next";

import { BlogHero } from "@/components/sections/blog/BlogHero";
import { BlogGrid } from "@/components/sections/blog/BlogGrid";
import { getBlogPosts } from "@/services/blog.service";

export const metadata: Metadata = {
  title: "Blog | Akkaş Group",
  description:
    "Akkaş Group blog yazıları, güncel gelişmeler, uzman görüşleri ve sektörel içerikler.",
};

interface BlogPageProps {
  searchParams: Promise<{
    page?: string;
  }>;
}

const ITEMS_PER_PAGE = 6;

export default async function BlogPage({
  searchParams,
}: BlogPageProps) {
  const params = await searchParams;

  const articles = await getBlogPosts();

  const currentPage = Math.max(
    1,
    Number(params.page) || 1,
  );

  const totalPages = Math.ceil(
    articles.length / ITEMS_PER_PAGE,
  );

  const startIndex =
    (currentPage - 1) * ITEMS_PER_PAGE;

  const paginatedArticles = articles.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE,
  );

  return (
    <>
      <BlogHero />

      <BlogGrid
        articles={paginatedArticles}
        currentPage={currentPage}
        totalPages={totalPages}
      />
    </>
  );
}