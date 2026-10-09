import { GraphQLClient } from "graphql-request";
import { AppError } from "@/lib/errors/AppError";
import { logger } from "@/lib/logger/logger";
import type { UploadedContent } from "@/types/uploaded-content";
import { GET_UPLOADED_CONTENTS_QUERY } from "../../wp/queries/uploaded-content";

const uploadedContentClient = new GraphQLClient(
  process.env.WP_GRAPHQL_ENDPOINT!,
  {
    next: { revalidate: 0 },
  },
);

interface WPUploadedContentsResponse {
  ploadedContents: {
    nodes: {
      id: string;
      title: string;
      slug: string;
      yuklenenlerDetaylari?: {
        baslik?: string | null;
        icerik?: string | null;
        footerdaGoster?: boolean | null;
        goruntulemeSirasi?: number | null;
        baglantiyiYeniSekmedeAc?: boolean | null;
        pdfBaglantisi?: string | null;
      } | null;
    }[];
  };
}

export async function getUploadedContentBySlug(
  slug: string,
): Promise<UploadedContent | null> {
  try {
    const data =
      await uploadedContentClient.request<WPUploadedContentsResponse>(
        GET_UPLOADED_CONTENTS_QUERY,
      );

    const item = data.ploadedContents.nodes.find((node) => node.slug === slug);

    if (!item) {
      return null;
    }

    return {
      id: item.id,
      title: item.title,
      slug: item.slug,
      heading: item.yuklenenlerDetaylari?.baslik?.trim() ?? "",
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

export async function getFooterContents() {
  try {
    const data =
      await uploadedContentClient.request<WPUploadedContentsResponse>(
        GET_UPLOADED_CONTENTS_QUERY,
      );

    return data.ploadedContents.nodes
      .filter((item) => item.yuklenenlerDetaylari?.footerdaGoster === true)

      .map((item) => ({
        id: item.id,
        title: item.title,
        slug: item.slug,
        order: item.yuklenenlerDetaylari?.goruntulemeSirasi ?? 0,
        openInNewTab:
          item.yuklenenlerDetaylari?.baglantiyiYeniSekmedeAc ?? false,
        pdfUrl: item.yuklenenlerDetaylari?.pdfBaglantisi?.trim() ?? "",
      }))

      .sort((a, b) => a.order - b.order);
  } catch (error) {
    logger.error("Footer içerikleri alınamadı", { error });
    return [];
  }
}
