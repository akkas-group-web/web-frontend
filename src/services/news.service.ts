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
    excerptText: string;
    kategori: string;
    haberIcerigi: string;
  };
}

function mapNewsFromWP(data: WPNewsResponse): NewsItem[] {
  return data.newsItems.nodes.map((node) => {
  
    return {
      id: node.id,
      title: node.title,
      excerpt: node.newsItemFields.excerptText,
      date: node.date,
      slug: node.slug,
      category: node.newsItemFields.kategori,
      image: {
        url: node.featuredImage?.node.sourceUrl ?? "",
        alt: node.featuredImage?.node.altText || node.title,
      },
      imageRatio: "landscape",
      content: (node.newsItemFields.haberIcerigi ?? "")
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
