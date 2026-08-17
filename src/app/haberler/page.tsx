import type { Metadata } from "next";

import { getNews } from "@/services/content.service";
import { NewsHero } from "@/components/sections/news/NewsHero";
import { NewsGrid } from "@/components/sections/news/NewsGrid";

export const metadata: Metadata = {
  title: "Haberler | Akkaş Group",
  description:
    "Akkaş Group'tan güncel haberleri, sektörel gelişmeleri, destek programlarını ve önemli duyuruları takip edin.",
};

export default async function HaberlerPage() {
  const news = await getNews();

  return (
    <>
      <NewsHero />
      <NewsGrid news={news} />
    </>
  );
}