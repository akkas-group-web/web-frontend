import { AppError } from "@/lib/errors/AppError";
import { logger } from "@/lib/logger/logger";
import type { HomeContent } from "@/types";

import { getBlogPosts } from "./blog.service";
import { getHeroSlides } from "./hero.service";
import { getNews } from "./news.service";

import { getServiceCategories } from "./service.service";
import { getClientReferences } from "./reference.service";

import { getAboutContent, getHomeSummaryContent } from "./about.service";

import { getSectors } from "./sector.service";
import { getBrands } from "./brand.service";

const MOCK_HOME_CONTENT: Omit<
  HomeContent,
  | "services"
  | "clients"
  | "heroSlides"
  | "stats"
  | "homeSummary"
  | "sectors"
  | "announcements"
  | "articles"
  | "brands"
> = {};

export async function getHomeContent(): Promise<HomeContent> {
  try {
    const [
      services,
      clients,
      heroSlides,
      aboutContent,
      homeSummary,
      sectors,
      announcements,
      articles,
      brands,
    ] = await Promise.all([
      getServiceCategories(),
      getClientReferences(),
      getHeroSlides(),
      getAboutContent(),
      getHomeSummaryContent(),
      getSectors(),
      getNews(),
      getBlogPosts(),
      getBrands(),
    ]);

    return {
      ...MOCK_HOME_CONTENT,

      services: services.map((category) => ({
        id: category.id,
        title: category.label,
        description: category.description,
        href: category.href,
        icon: category.icon,
      })),

      clients,
      heroSlides,
      stats: aboutContent.stats,
      homeSummary,
      sectors,
      announcements,
      articles,
      brands,
    };
  } catch (error) {
    logger.error("Ana sayfa içeriği alınamadı", { error });

    throw new AppError(
      "Ana sayfa içeriği yüklenemedi",
      "CONTENT_FETCH_FAILED",
      error,
    );
  }
}
