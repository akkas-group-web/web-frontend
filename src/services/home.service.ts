import { AppError } from "@/lib/errors/AppError";
import { logger } from "@/lib/logger/logger";
import type { HomeContent } from "@/types";
import { getHomePopup } from "./popup.service";


import { getBlogPosts } from "./blog.service";
import { getHeroSlides } from "./hero.service";
import { getNews } from "./news.service";

import { getServiceCategories } from "./service.service";
import { getClientReferences } from "./reference.service";

import { getAboutContent, getHomeSummaryContent } from "./about.service";

import { getSectors } from "./sector.service";
import { getBrands } from "./brand.service";


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
      popup,
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
      getHomePopup(),
    ]);

    console.log("HOME POPUP:", popup);

    return {
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
      popup,
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