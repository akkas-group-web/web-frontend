import { AppError } from "@/lib/errors/AppError";
import { logger } from "@/lib/logger/logger";
import type { ClientReference } from "@/types/reference";

const MOCK_CLIENT_REFERENCES: ClientReference[] = [
  { id: "1", name: "Solana", logo: "/references/solana.png" },
  { id: "2", name: "Samsung", logo: "/references/samsung.png" },
  { id: "3", name: "Discord", logo: "/references/discord.png" },
  { id: "4", name: "Adobe", logo: "/references/adobe.png" },
  { id: "5", name: "GoodRx", logo: "/references/goodrx.png" },
  { id: "6", name: "Okta", logo: "/references/okta.png" },
  { id: "7", name: "Blizzard", logo: "/references/blizzard.png" },
  { id: "8", name: "Stellar", logo: "/references/stellar.png" },
  { id: "9", name: "Treecard", logo: "/references/treecard.png" },
  { id: "10", name: "PayJunction", logo: "/references/payjunction.png" },
  { id: "11", name: "Chapter", logo: "/references/chapter.png" },
  { id: "12", name: "Berkshire Hathaway", logo: "/references/berkshire.png" },
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
