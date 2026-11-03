import { AppError } from "@/lib/errors/AppError";
import { logger } from "@/lib/logger/logger";
import { wpPopupClient } from "../../wp/client";;
import { GET_HOME_POPUP_QUERY } from "../../wp/queries/popup";
export interface HomePopupData {
  id: string;
  title: string;
  active: boolean;
  href: string;
  newTab: boolean;
  image: {
    url: string;
    alt: string;
  };
}

interface WPHomePopupResponse {
  homePopups: {
    nodes: {
      id: string;
      title: string;
      popupFields: {
        homePopupActive: boolean;
        homePopupLink: {
          url: string;
          title: string;
          target: string;
        } | null;
        homePopupNewTab: boolean;
        homePopupImage: {
          node: {
            sourceUrl: string;
            altText: string;
          };
        } | null;
      };
    }[];
  };
}

function mapHomePopupFromWP(
  data: WPHomePopupResponse,
): HomePopupData | null {
  const node = data.homePopups.nodes[0];

  if (!node) {
    return null;
  }

  const imageUrl = node.popupFields.homePopupImage?.node?.sourceUrl;

  if (!imageUrl) {
    return null;
  }

  return {
    id: node.id,
    title: node.title,
    active: node.popupFields.homePopupActive,
    href: node.popupFields.homePopupLink?.url || "#",
    newTab: node.popupFields.homePopupNewTab,
    image: {
      url: imageUrl,
      alt:
        node.popupFields.homePopupImage?.node?.altText ||
        node.title ||
        "Popup",
    },
  };
}

export async function getHomePopup(): Promise<HomePopupData | null> {
  try {
    const data = await wpPopupClient.request<WPHomePopupResponse>(
      GET_HOME_POPUP_QUERY,
    );

    console.log(
      "RAW POPUP GRAPHQL:",
      JSON.stringify(data, null, 2),
    );

    return mapHomePopupFromWP(data);
  } catch (error) {
    logger.error("Ana sayfa popup verisi alınamadı", {
      error,
    });

    throw new AppError(
      "Ana sayfa popup içeriği yüklenemedi",
      "CONTENT_FETCH_FAILED",
      error,
    );
  }
}