import { AppError } from "@/lib/errors/AppError";
import { logger } from "@/lib/logger/logger";

import type { MediaImage } from "@/types/media";
import { wpClient } from "../../wp/client";
import { APPLICATIONS_QUERY } from "../../wp/queries/applications";

export interface Application {
  id: string;
  title: string;
  logo: MediaImage;
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
  }));
}

export async function getApplications(): Promise<Application[]> {
  try {
    const data = await wpClient.request<WPApplicationsResponse>(
      APPLICATIONS_QUERY,
    );

    return mapApplicationsFromWP(data);
  } catch (error) {
    logger.error("Uygulamalar alınamadı", { error });

    throw new AppError(
      "Uygulamalar yüklenemedi",
      "CONTENT_FETCH_FAILED",
      error,
    );
  }
}