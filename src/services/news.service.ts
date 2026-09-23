import { AppError } from "@/lib/errors/AppError";
import { logger } from "@/lib/logger/logger";
import type { NewsItem } from "@/types/news";
import { wpClient } from "../../wp/client";
import { GET_NEWS_QUERY } from "../../wp/queries/news";

interface WPNewsResponse {
  newsItems: {
    nodes: WPNewsNode[];
  };
}

interface WPNewsNode {
  id: string;
  title: string;
  slug: string;
  date: string;
  featuredImage: {
    node: {
      sourceUrl: string;
      altText: string;
    };
  } | null;
  newsItemFields: {
    excerptText: string | null;
    kategori: string | null;
    haberIcerigi: string | null;
    displayorder: number | string | null;
  } | null;
}

function getDisplayOrder(
  value: number | string | null | undefined,
): number | null {
  if (value === null || value === undefined || value === "") {
    return null;
  }

  const order = Number(value);

  return Number.isFinite(order) ? order : null;
}

function mapNewsFromWP(data: WPNewsResponse): NewsItem[] {
  return [...data.newsItems.nodes]
    .sort((a, b) => {
      const orderA = getDisplayOrder(a.newsItemFields?.displayorder);
      const orderB = getDisplayOrder(b.newsItemFields?.displayorder);

      // İkisinde de sıra varsa büyük sayı üstte
      if (orderA !== null && orderB !== null) {
        return orderB - orderA;
      }

      // Sıra yoksa en yeni haber üstte
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    })
    .map((node) => {
      const fields = node.newsItemFields;

      return {
        id: node.id,
        title: node.title,
        excerpt: fields?.excerptText ?? "",
        date: node.date,
        slug: node.slug,
        category: fields?.kategori ?? "",
        image: {
          url: node.featuredImage?.node.sourceUrl ?? "",
          alt: node.featuredImage?.node.altText || node.title,
        },
        imageRatio: "landscape",
        content: (fields?.haberIcerigi ?? "")
          .split(/\r?\n\s*\r?\n/)
          .map((paragraph) => paragraph.trim())
          .filter(Boolean),
      };
    });
}

export async function getNews(): Promise<NewsItem[]> {
  try {
    const data = await wpClient.request<WPNewsResponse>(GET_NEWS_QUERY);

    return mapNewsFromWP(data);
  } catch (error) {
    logger.error("Haberler alınamadı", { error });

    throw new AppError("Haberler yüklenemedi", "CONTENT_FETCH_FAILED", error);
  }
}

export async function getNewsBySlug(slug: string): Promise<NewsItem | null> {
  try {
    const items = await getNews();

    return items.find((item) => item.slug === slug) ?? null;
  } catch (error) {
    logger.error("Haber detayı alınamadı", { error, slug });

    throw new AppError(
      "Haber detayı yüklenemedi",
      "CONTENT_FETCH_FAILED",
      error,
    );
  }
}
