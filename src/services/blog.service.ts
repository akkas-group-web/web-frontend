import { AppError } from "@/lib/errors/AppError";
import { logger } from "@/lib/logger/logger";
import type { ArticleItem } from "@/types/article";
import { wpClient } from "../../wp/client";
import { GET_ARTICLES_QUERY } from "../../wp/queries/articles";

interface WPArticlesResponse {
  articleItems: {
    nodes: WPArticleNode[];
  };
}

interface WPArticleNode {
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

  articleItemFields: {
    kisaAciklama: string;
    authorName: string;
    metin: string | null;
    articleContent: string | null;
    authorPhoto: {
      node: {
        sourceUrl: string;
        altText: string;
      };
    } | null;
  };
}

function mapArticlesFromWP(data: WPArticlesResponse): ArticleItem[] {
  return data.articleItems.nodes.map((node) => {
    const coverImageUrl = node.featuredImage?.node.sourceUrl ?? "";
    const authorName = node.articleItemFields.authorName;

    return {
      id: node.id,
      title: node.title,
      excerpt: node.articleItemFields.kisaAciklama,
      content: node.articleItemFields.articleContent || "",
      date: node.date,
      slug: node.slug,

      image: {
        url: coverImageUrl,
        alt: node.featuredImage?.node.altText || node.title,
      },

      author: {
        name: authorName,
        role: node.articleItemFields.metin || undefined,
        photo: {
          url:
            node.articleItemFields.authorPhoto?.node.sourceUrl ??
            coverImageUrl,
          alt:
            node.articleItemFields.authorPhoto?.node.altText ||
            authorName,
        },
      },
    };
  });
}

export async function getBlogPosts(): Promise<ArticleItem[]> {
  try {
    const data = await wpClient.request<WPArticlesResponse>(
      GET_ARTICLES_QUERY,
    );

    return mapArticlesFromWP(data);
  } catch (error) {
    logger.error("Blog içerikleri alınamadı", { error });

    throw new AppError(
      "Blog içerikleri yüklenemedi",
      "CONTENT_FETCH_FAILED",
      error,
    );
  }
}

export async function getBlogPostBySlug(
  slug: string,
): Promise<ArticleItem | null> {
  try {
    const articles = await getBlogPosts();

    return articles.find((item) => item.slug === slug) ?? null;
  } catch (error) {
    logger.error("Blog yazısı alınamadı", { error, slug });

    throw new AppError(
      "Blog yazısı yüklenemedi",
      "CONTENT_FETCH_FAILED",
      error,
    );
  }
}