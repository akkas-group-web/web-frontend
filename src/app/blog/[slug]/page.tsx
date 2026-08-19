import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { BlogDetail } from "@/components/sections/blog/BlogDetail";
import { getBlogPostBySlug } from "@/services";

interface BlogDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({
  params,
}: BlogDetailPageProps): Promise<Metadata> {
  const { slug } = await params;

  const article = await getBlogPostBySlug(slug);

  if (!article) {
    return {
      title: "Blog Yazısı Bulunamadı | Akkaş Group",
    };
  }

  return {
    title: `${article.title} | Akkaş Group`,
    description: article.excerpt,
  };
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params;

  const article = await getBlogPostBySlug(slug);

  if (!article) {
    notFound();
  }

  return <BlogDetail article={article} />;
}
