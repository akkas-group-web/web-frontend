import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { NewsDetail } from "@/components/sections/news/NewsDetail";
import { getNewsBySlug } from "@/services/content.service";

interface NewsDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({
  params,
}: NewsDetailPageProps): Promise<Metadata> {
  const { slug } = await params;

  const news = await getNewsBySlug(slug);

  if (!news) {
    return {
      title: "Haber Bulunamadı | Akkaş Group",
    };
  }

  return {
    title: `${news.title} | Akkaş Group`,
    description: news.excerpt,
  };
}

export default async function NewsDetailPage({
  params,
}: NewsDetailPageProps) {
  const { slug } = await params;

  const news = await getNewsBySlug(slug);

  if (!news) {
    notFound();
  }

  return <NewsDetail news={news} />;
}