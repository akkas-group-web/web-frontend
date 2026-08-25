import { AppError } from "@/lib/errors/AppError";
import { logger } from "@/lib/logger/logger";

import type { MediaImage } from "@/types/media";
import { wpClient } from "../../wp/client";
import { GET_HERO_SLIDES_QUERY } from "../../wp/queries/hero";

export interface HeroSlide {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  image: MediaImage;
  href: string;
}

interface WPHeroSlidesResponse {
  heroSlides: {
    nodes: {
      id: string;
      heroSlideFields: {
        eyebrow: string;
        title_text: string;
        description: string;
        link: string;
        image: {
          node: {
            sourceUrl: string;
            altText: string;
          };
        };
      };
    }[];
  };
}

function mapHeroSlidesFromWP(data: WPHeroSlidesResponse): HeroSlide[] {
  return data.heroSlides.nodes.map((node) => ({
    id: node.id,
    eyebrow: node.heroSlideFields.eyebrow,
    title: node.heroSlideFields.title_text,
    description: node.heroSlideFields.description,
    href: node.heroSlideFields.link,
    image: {
      url: node.heroSlideFields.image.node.sourceUrl,
      alt:
        node.heroSlideFields.image.node.altText ||
        node.heroSlideFields.title_text,
    },
  }));
}

export async function getHeroSlides(): Promise<HeroSlide[]> {
  try {
    const data = await wpClient.request<WPHeroSlidesResponse>(
      GET_HERO_SLIDES_QUERY,
    );
    return mapHeroSlidesFromWP(data);
  } catch (error) {
    logger.error("Hero slaytları alınamadı", { error });
    throw new AppError(
      "Hero slaytları yüklenemedi",
      "CONTENT_FETCH_FAILED",
      error,
    );
  }
}
