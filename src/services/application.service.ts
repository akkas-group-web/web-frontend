import { AppError } from "@/lib/errors/AppError";
import { logger } from "@/lib/logger/logger";

import type { MediaImage } from "@/types/media";
import { wpClient } from "../../wp/client";
import { APPLICATIONS_QUERY } from "../../wp/queries/applications";

export interface Application {
  id: string;
  title: string;
  logo: MediaImage;
  link?: {
    url: string;
    title?: string;
    target?: string;
  } | null;
  displayorder?: number | null;
}

interface WPApplicationsResponse {
  uygulamalar: {
    nodes: {
      id: string;
      title: string;
      uygulamaBilgileri: {
        logo: {
          node: {
            sourceUrl: string;
            altText: string;
          };
        };
        link?: {
          url: string;
          title?: string;
          target?: string;
        } | null;
        displayorder?: number | null;
      };
    }[];
  };
}

function mapApplicationsFromWP(
  data: WPApplicationsResponse,
): Application[] {
  return data.uygulamalar.nodes.map((node) => ({
    id: node.id,
    title: node.title,
    logo: {
      url: node.uygulamaBilgileri.logo.node.sourceUrl,
      alt: node.uygulamaBilgileri.logo.node.altText || node.title,
    },
    link: node.uygulamaBilgileri.link ?? null,
    displayorder: node.uygulamaBilgileri.displayorder ?? null,
  }));
}

export async function getApplications(): Promise<Application[]> {
  try {
    const data = await wpClient.request<WPApplicationsResponse>(
      APPLICATIONS_QUERY,
    );

    return mapApplicationsFromWP(data).sort((a, b) => {
      const aOrder = Number(a.displayorder);
      const bOrder = Number(b.displayorder);

      const aHasOrder = Number.isFinite(aOrder) && aOrder > 0;
      const bHasOrder = Number.isFinite(bOrder) && bOrder > 0;

      if (aHasOrder && bHasOrder) {
        return aOrder - bOrder;
      }

      if (aHasOrder) return -1;
      if (bHasOrder) return 1;

      return 0;
    });
  } catch (error) {
    logger.error("Uygulamalar alınamadı", { error });

    throw new AppError(
      "Uygulamalar yüklenemedi",
      "CONTENT_FETCH_FAILED",
      error,
    );
  }
}