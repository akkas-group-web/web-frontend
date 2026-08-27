import { AppError } from "@/lib/errors/AppError";
import { logger } from "@/lib/logger/logger";
import type { ClientReference } from "@/types/reference";
import { wpClient } from "../../wp/client";
import { GET_REFERENCES_QUERY } from "../../wp/queries/references";

const MOCK_CLIENT_REFERENCES: ClientReference[] = [
  {
    id: "1",
    name: "Solana",
    logo: { url: "/references/solana.png", alt: "Solana logosu" },
  },
  {
    id: "2",
    name: "Samsung",
    logo: { url: "/references/samsung.png", alt: "Samsung logosu" },
  },
  {
    id: "3",
    name: "Discord",
    logo: { url: "/references/discord.png", alt: "Discord logosu" },
  },
  {
    id: "4",
    name: "Adobe",
    logo: { url: "/references/adobe.png", alt: "Adobe logosu" },
  },
  {
    id: "5",
    name: "GoodRx",
    logo: { url: "/references/goodrx.png", alt: "GoodRx logosu" },
  },
  {
    id: "6",
    name: "Okta",
    logo: { url: "/references/okta.png", alt: "Okta logosu" },
  },
  {
    id: "7",
    name: "Blizzard",
    logo: { url: "/references/blizzard.png", alt: "Blizzard logosu" },
  },
  {
    id: "8",
    name: "Stellar",
    logo: { url: "/references/stellar.png", alt: "Stellar logosu" },
  },
  {
    id: "9",
    name: "Treecard",
    logo: { url: "/references/treecard.png", alt: "Treecard logosu" },
  },
  {
    id: "10",
    name: "PayJunction",
    logo: { url: "/references/payjunction.png", alt: "PayJunction logosu" },
  },
  {
    id: "11",
    name: "Chapter",
    logo: { url: "/references/chapter.png", alt: "Chapter logosu" },
  },
  {
    id: "12",
    name: "Berkshire Hathaway",
    logo: {
      url: "/references/berkshire.png",
      alt: "Berkshire Hathaway logosu",
    },
  },
];

interface WPReferencesResponse {
  references: {
    nodes: {
      id: string;
      referenceFields: {
        name: string;
        sektor?: string;
        website?: string;
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

function mapReferencesFromWP(data: WPReferencesResponse): ClientReference[] {
  return data.references.nodes.map((node) => ({
    id: node.id,
    name: node.referenceFields.name,
    logo: {
      url: node.referenceFields.logo.node.sourceUrl,
      alt: node.referenceFields.logo.node.altText || node.referenceFields.name,
    },
    sector: node.referenceFields.sektor,
    website: node.referenceFields.website,
  }));
}

export async function getClientReferences(): Promise<ClientReference[]> {
  try {
    // İleride: await wpClient.query(REFERENCES_QUERY) burada olacak.
    //return MOCK_CLIENT_REFERENCES;
    const data =
      await wpClient.request<WPReferencesResponse>(GET_REFERENCES_QUERY);
    return mapReferencesFromWP(data);
  } catch (error) {
    logger.error("Referanslar içeriği alınamadı", { error });
    throw new AppError(
      "Referanslar içeriği yüklenemedi",
      "CONTENT_FETCH_FAILED",
      error,
    );
  }
}
