import { AppError } from "@/lib/errors/AppError";
import { logger } from "@/lib/logger/logger";
import type { ContactOffice } from "@/types";
import { getServiceCategories } from "./service.service";
import { wpClient } from "../../wp/client";
import {
  GET_CONTACT_OFFICES_QUERY,
  GET_CONTACT_PAGE_QUERY,
} from "../../wp/queries/contact";

const MOCK_CONTACT_OFFICES: ContactOffice[] = [
  {
    id: "istanbul-anadolu",
    city: "İstanbul Asya",
    title: "Merkez Ofis",
    address: "Uzunçayır Cad. Akkaş Plaza No:51 Hasanpaşa-Kadıköy-İSTANBUL",
    phone: "+90 216 450 60 07 (Pbx)",
    email: "info@akkasgroup.com",
  },
  { id: "istanbul-avrupa", city: "İstanbul Avrupa", title: "İstanbul Avrupa" },
  { id: "tekirdag", city: "Tekirdağ", title: "Tekirdağ" },
  { id: "canakkale", city: "Çanakkale", title: "Çanakkale" },
  { id: "denizli", city: "Denizli", title: "Denizli" },
  { id: "antalya", city: "Antalya", title: "Antalya" },
  { id: "kayseri", city: "Kayseri", title: "Kayseri" },
  { id: "ankara", city: "Ankara", title: "Ankara" },
  { id: "gaziantep", city: "Gaziantep", title: "Gaziantep" },
];

interface WPContactOfficesResponse {
  contactOffices: {
    nodes: {
      id: string;
      title: string;
      contactOfficeFieldss: {
        city: string;
        address: string | null;
        phone: string | null;
        email: string | null;
        latitude: number | null;
        longitude: number | null;
        isMainOffice: boolean;
      };
    }[];
  };
}

function mapContactOfficesFromWP(
  data: WPContactOfficesResponse,
): ContactOffice[] {
  return data.contactOffices.nodes.map((node) => ({
    id: node.id,
    city: node.contactOfficeFieldss.city,
    title: node.title,
    address: node.contactOfficeFieldss.address ?? undefined,
    phone: node.contactOfficeFieldss.phone ?? undefined,
    email: node.contactOfficeFieldss.email ?? undefined,
    latitude: node.contactOfficeFieldss.latitude ?? undefined,
    longitude: node.contactOfficeFieldss.longitude ?? undefined,
    isMainOffice: node.contactOfficeFieldss.isMainOffice ?? false,
  }));
}

interface WPContactPageResponse {
  contactPages: {
    nodes: {
      contactPageFields: {
        heroTitle: string;
        heroDescription: string;
        locationsTitle: string;
        locationsDescription: string;
        locationsThumbnail: {
          node: { sourceUrl: string; altText: string };
        };
        formTitle: string;
        formDescription: string;
        nameLabel: string;
        namePlaceholder: string;
        companyLabel: string;
        companyPlaceholder: string;
        emailLabel: string;
        emailPlaceholder: string;
        phoneLabel: string;
        phonePlaceholder: string;
        serviceLabel: string;
        serviceDefault: string;
        messageLabel: string;
        messagePlaceholder: string;
        submitButtonText: string;
        kvkkPdf: {
          node: { mediaItemUrl: string };
        };
      };
    }[];
  };
}

function mapContactPageFromWP(data: WPContactPageResponse) {
  const fields = data.contactPages.nodes[0].contactPageFields;

  return {
    heroTitle: fields.heroTitle,
    heroDescription: fields.heroDescription,
    locationsTitle: fields.locationsTitle,
    locationsDescription: fields.locationsDescription,
    locationsThumbnail: {
      url: fields.locationsThumbnail.node.sourceUrl,
      alt: fields.locationsThumbnail.node.altText || fields.locationsTitle,
    },
    formTitle: fields.formTitle,
    formDescription: fields.formDescription,
    nameLabel: fields.nameLabel,
    namePlaceholder: fields.namePlaceholder,
    companyLabel: fields.companyLabel,
    companyPlaceholder: fields.companyPlaceholder,
    emailLabel: fields.emailLabel,
    emailPlaceholder: fields.emailPlaceholder,
    phoneLabel: fields.phoneLabel,
    phonePlaceholder: fields.phonePlaceholder,
    serviceLabel: fields.serviceLabel,
    serviceDefault: fields.serviceDefault,
    messageLabel: fields.messageLabel,
    messagePlaceholder: fields.messagePlaceholder,
    submitButtonText: fields.submitButtonText,
    kvkkPdfUrl: fields.kvkkPdf.node.mediaItemUrl,
  };
}

export async function getContactContent() {
  try {
    const [categories, officesData, pageData] = await Promise.all([
      getServiceCategories(),
      wpClient.request<WPContactOfficesResponse>(GET_CONTACT_OFFICES_QUERY),
      wpClient.request<WPContactPageResponse>(GET_CONTACT_PAGE_QUERY),
    ]);

    const offices = mapContactOfficesFromWP(officesData);
    const mainIndex = offices.findIndex((o) => o.isMainOffice);
    const sortedOffices =
      mainIndex > 0
        ? [
            offices[mainIndex],
            ...offices.slice(0, mainIndex),
            ...offices.slice(mainIndex + 1),
          ]
        : offices;

    const page = mapContactPageFromWP(pageData);
    return {
      services: categories.map((c) => c.label),
      offices: sortedOffices,
      page,
      // offices,
    };
  } catch (error) {
    logger.error("İletişim içeriği alınamadı", { error });
    throw new AppError(
      "İletişim içeriği yüklenemedi",
      "CONTENT_FETCH_FAILED",
      error,
    );
  }
}
