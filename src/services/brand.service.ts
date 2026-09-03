import type { BrandItem } from "@/types";

import { AppError } from "@/lib/errors/AppError";
import { logger } from "@/lib/logger/logger";
import { wpClient } from "../../wp/client";
import { WPBrandNode, WPBrandsResponse } from "@/types/brand";
import { BRANDS_QUERY } from "../../wp/queries/brand";

export function mapWPBrandToBrandItem(node: WPBrandNode): BrandItem {
  return {
    id: node.id,
    name: node.title,
    description: node.brandFields.description,
    href: node.brandFields.href.url,
    linkTarget: node.brandFields.href.target,
    logo: {
      url: node.brandFields.logo.node.sourceUrl,
      alt: node.brandFields.logo.node.altText || node.title,
    },
  };
}

export async function getBrands(): Promise<BrandItem[]> {
  try {
    const data = await wpClient.request<WPBrandsResponse>(BRANDS_QUERY);
    return data.brands.nodes.map(mapWPBrandToBrandItem);
  } catch (error) {
    logger.error("Markalar (brands) alınamadı", { error });
    throw new AppError("Markalar yüklenemedi", "BRANDS_FETCH_FAILED", error);
  }
}
