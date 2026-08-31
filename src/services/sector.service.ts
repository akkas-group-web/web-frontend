import { AppError } from "@/lib/errors/AppError";
import { logger } from "@/lib/logger/logger";
import type { SectorContent } from "@/types/sector";
import { wpClient } from "../../wp/client";
import { GET_SECTORS_QUERY } from "../../wp/queries/sectors";

interface WPSectorsResponse {
  sectors: {
    nodes: {
      id: string;
      sectorFields: {
        sectorSlug: string;
        shortTitle: string;
        description: string;
        heroDescription: string;
        sectorImage: { node: { sourceUrl: string; altText: string } };
        benefits: string;
        stat1Value: string;
        stat1Label: string;
        stat2Value: string;
        stat2Label: string;
        stat3Value: string;
        stat3Label: string;
        servicesEyebrow: string | null;
        servicesTitleLine1: string | null;
        servicesTitleLine2: string | null;
        servicesDescription: string | null;
        showBenefitsSection: boolean;
        benefitsEyebrow: string | null;
        benefitsTitleLine1: string | null;
        benefitsTitleLine2: string | null;
        benefitsDescription: string | null;
        showCtaSection: boolean;
        ctaEyebrow: string | null;
        ctaTitle: string | null;
        ctaDescription: string | null;
        relatedServices: {
          nodes: {
            id: string;
            title: string;
            serviceCategoryFields: {
              categorySlug: string;
              description: string;
              icon: string;
            };
          }[];
        };
      };
    }[];
  };
}
function mapSectorsFromWP(data: WPSectorsResponse): SectorContent[] {
  return data.sectors.nodes.map((sectorNode) => {
    const fields = sectorNode.sectorFields;

    const relatedServices = fields.relatedServices.nodes.map((serviceNode) => ({
      id: serviceNode.id,
      title: serviceNode.title,
      description: serviceNode.serviceCategoryFields.description,
      categoryId: serviceNode.serviceCategoryFields.categorySlug,
      icon: serviceNode.serviceCategoryFields
        .icon as SectorContent["services"][number]["icon"],
    }));

    return {
      id: sectorNode.id,
      slug: fields.sectorSlug.replace(/^\/+/, ""),
      title: fields.shortTitle,
      shortTitle: fields.shortTitle,
      description: fields.description,
      heroDescription: fields.heroDescription,
      image: {
        url: fields.sectorImage.node.sourceUrl,
        alt: fields.sectorImage.node.altText || fields.shortTitle,
      },
      services: relatedServices,
      benefits: fields.benefits.split("\n").filter(Boolean),
      stats: [
        { value: fields.stat1Value, label: fields.stat1Label },
        { value: fields.stat2Value, label: fields.stat2Label },
        { value: fields.stat3Value, label: fields.stat3Label },
      ].filter((s) => s.value && s.label),
      servicesEyebrow: fields.servicesEyebrow ?? "",
      servicesTitleLine1: fields.servicesTitleLine1 ?? "",
      servicesTitleLine2: fields.servicesTitleLine2 ?? "",
      servicesDescription: fields.servicesDescription ?? "",
      showBenefitsSection: fields.showBenefitsSection ?? false,
      benefitsEyebrow: fields.benefitsEyebrow ?? "",
      benefitsTitleLine1: fields.benefitsTitleLine1 ?? "",
      benefitsTitleLine2: fields.benefitsTitleLine2 ?? "",
      benefitsDescription: fields.benefitsDescription ?? "",
      showCtaSection: fields.showCtaSection ?? false,
      ctaEyebrow: fields.ctaEyebrow ?? "",
      ctaTitle: fields.ctaTitle ?? "",
      ctaDescription: fields.ctaDescription ?? "",
    };
  });
}

export async function getSectors(): Promise<SectorContent[]> {
  try {
    const data = await wpClient.request<WPSectorsResponse>(GET_SECTORS_QUERY);
    return mapSectorsFromWP(data);
  } catch (error) {
    logger.error("Sektör içerikleri alınamadı", { error });

    throw new AppError(
      "Sektör içerikleri yüklenemedi",
      "CONTENT_FETCH_FAILED",
      error,
    );
  }
}

export async function getSectorBySlug(
  slug: string,
): Promise<SectorContent | null> {
  try {
    const sectors = await getSectors();
    return sectors.find((item) => item.slug === slug) ?? null;
  } catch (error) {
    logger.error("Sektör içeriği alınamadı", { error, slug });

    throw new AppError(
      "Sektör içeriği yüklenemedi",
      "CONTENT_FETCH_FAILED",
      error,
    );
  }
}
