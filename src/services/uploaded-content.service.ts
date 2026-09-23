import { AppError } from "@/lib/errors/AppError";
import { logger } from "@/lib/logger/logger";
import type { UploadedContent } from "@/types/uploaded-content";
import { wpClient } from "../../wp/client";
import { GET_UPLOADED_CONTENTS_QUERY } from "../../wp/queries/uploaded-content";



interface WPUploadedContentsResponse {
  ploadedContents: {
    nodes: {
      id: string;
      title: string;
      slug: string;
      yuklenenlerDetaylari?: {
        baslik?: string | null;
        icerik?: string | null;
      } | null;
    }[];
  };
}

export async function getUploadedContentBySlug(
  slug: string,
): Promise<UploadedContent | null> {
  try {
    const data = await wpClient.request<WPUploadedContentsResponse>(
      GET_UPLOADED_CONTENTS_QUERY,
    );

    const item = data.ploadedContents.nodes.find(
      (node) => node.slug === slug,
    );

    if (!item) {
      return null;
    }

    return {
      id: item.id,
      title: item.title,
      slug: item.slug,
      heading: item.yuklenenlerDetaylari?.baslik || item.title,
      content: item.yuklenenlerDetaylari?.icerik || "",
    };
  } catch (error) {
    logger.error("Yüklenen içerik alınamadı", { error, slug });

    throw new AppError(
      "Yüklenen içerik yüklenemedi",
      "CONTENT_FETCH_FAILED",
      error,
    );
  }
}