import { AppError } from "@/lib/errors/AppError";
import { logger } from "@/lib/logger/logger";
import type { ServiceCategory, ServiceDetail } from "@/types/service";
import { wpClient } from "../../wp/client";
import { GET_SERVICES_QUERY } from "../../wp/queries/services";
import { ServiceIconKey } from "@/types";

interface WPServicesResponse {
  serviceCategories: {
    nodes: {
      id: string;
      title: string;
      serviceCategoryFields: {
        categorySlug: string;
        description: string;
        icon: string;
        featured: boolean;
        displayorder?: number | string | null;
      };
    }[];
  };

  serviceChildren: {
    nodes: {
      id: string;
      serviceChildId: {
        childLabel: string;
        childSlug: string;
        childDescription: string;
        childContent: string;
        contentTitle?: string;
        displayorder?: number | string | null;

        contentImage?: {
          node: {
            sourceUrl: string;
            altText?: string;
          };
        };

        relatedCategory?: {
          nodes: { id: string }[];
        } | null;
      };
    }[];
  };
}

function getDisplayOrder(value: number | string | null | undefined) {
  const order = Number(value);

  return Number.isFinite(order) ? order : 9999;
}

function mapServiceCategoriesFromWP(
  data: WPServicesResponse,
): ServiceCategory[] {
  return [...data.serviceCategories.nodes]
    .sort(
      (a, b) =>
        getDisplayOrder(a.serviceCategoryFields.displayorder) -
        getDisplayOrder(b.serviceCategoryFields.displayorder),
    )
    .map((categoryNode) => {
      const fields = categoryNode.serviceCategoryFields;

      const children = data.serviceChildren.nodes
        .filter(
          (childNode) =>
            childNode.serviceChildId?.relatedCategory?.nodes?.[0]?.id ===
            categoryNode.id,
        )
        .sort(
          (a, b) =>
            getDisplayOrder(a.serviceChildId.displayorder) -
            getDisplayOrder(b.serviceChildId.displayorder),
        )
        .map((childNode) => ({
          label: childNode.serviceChildId.childLabel,
          href: `/hizmetlerimiz/${fields.categorySlug}/${childNode.serviceChildId.childSlug}`,
        }));

      return {
        id: fields.categorySlug,
        label: categoryNode.title,
        href: `/hizmetlerimiz/${fields.categorySlug}`,
        description: fields.description,
        icon: fields.icon as ServiceIconKey,
        featured: fields.featured,
        children,
      };
    });
}

function mapServiceDetailsFromWP(data: WPServicesResponse): ServiceDetail[] {
  return [...data.serviceChildren.nodes]
    .sort(
      (a, b) =>
        getDisplayOrder(a.serviceChildId.displayorder) -
        getDisplayOrder(b.serviceChildId.displayorder),
    )
    .map((childNode) => {
      const relatedCategoryId =
        childNode.serviceChildId?.relatedCategory?.nodes?.[0]?.id;

      const categoryNode = data.serviceCategories.nodes.find(
        (c) => c.id === relatedCategoryId,
      );

      const rawImage = childNode.serviceChildId.contentImage?.node;

      return {
        id: childNode.serviceChildId.childSlug,
        category: categoryNode?.serviceCategoryFields.categorySlug ?? "",
        categoryTitle: categoryNode?.title ?? "",
        slug: childNode.serviceChildId.childSlug,
        title: childNode.serviceChildId.childLabel,
        description: childNode.serviceChildId.childDescription,
        contentTitle: childNode.serviceChildId.contentTitle ?? "",
        content: childNode.serviceChildId.childContent
          .split("\n")
          .filter(Boolean),
        image: rawImage
          ? {
              url: rawImage.sourceUrl,
              alt: rawImage.altText || childNode.serviceChildId.childLabel,
            }
          : undefined,
      };
    });
}

export async function getServices(): Promise<ServiceDetail[]> {
  try {
    const data = await wpClient.request<WPServicesResponse>(
      GET_SERVICES_QUERY,
    );

    return mapServiceDetailsFromWP(data);
  } catch (error) {
    logger.error("Hizmetler içeriği alınamadı", { error });

    throw new AppError(
      "Hizmetler içeriği yüklenemedi",
      "CONTENT_FETCH_FAILED",
      error,
    );
  }
}

export async function getServiceCategories(): Promise<ServiceCategory[]> {
  try {
    const data = await wpClient.request<WPServicesResponse>(
      GET_SERVICES_QUERY,
    );

    return mapServiceCategoriesFromWP(data);
  } catch (error) {
    logger.error("Hizmet kategorileri alınamadı", { error });

    throw new AppError(
      "Hizmet kategorileri yüklenemedi",
      "CONTENT_FETCH_FAILED",
      error,
    );
  }
}

export async function getServiceByCategoryAndSlug(
  category: string,
  slug: string,
): Promise<ServiceDetail | null> {
  try {
    const services = await getServices();

    return (
      services.find(
        (service) => service.category === category && service.slug === slug,
      ) ?? null
    );
  } catch (error) {
    logger.error("Hizmet detayı alınamadı", { error, category, slug });

    throw new AppError(
      "Hizmet detayı yüklenemedi",
      "CONTENT_FETCH_FAILED",
      error,
    );
  }
}

export async function getServicesAndCategories(): Promise<{
  categories: ServiceCategory[];
  services: ServiceDetail[];
}> {
  try {
    const data = await wpClient.request<WPServicesResponse>(
      GET_SERVICES_QUERY,
    );

    return {
      categories: mapServiceCategoriesFromWP(data),
      services: mapServiceDetailsFromWP(data),
    };
  } catch (error) {
    logger.error("Hizmetler ve kategoriler alınamadı", { error });

    throw new AppError(
      "Hizmetler yüklenemedi",
      "CONTENT_FETCH_FAILED",
      error,
    );
  }
}