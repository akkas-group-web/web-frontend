import { AppError } from "@/lib/errors/AppError";
import { logger } from "@/lib/logger/logger";
import type { ClientReference } from "@/types/reference";

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

export async function getClientReferences(): Promise<ClientReference[]> {
  try {
    // İleride: await wpClient.query(REFERENCES_QUERY) burada olacak.
    return MOCK_CLIENT_REFERENCES;
  } catch (error) {
    logger.error("Referanslar içeriği alınamadı", { error });
    throw new AppError(
      "Referanslar içeriği yüklenemedi",
      "CONTENT_FETCH_FAILED",
      error,
    );
  }
}
