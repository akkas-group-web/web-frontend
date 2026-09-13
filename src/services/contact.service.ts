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

interface WPContactPageResponse {
  contactPage: {
    contactPageFields: {
      formTitle: string | null;
      formDescription: string | null;
      heroEyebrow: string | null;
      heroTitle: string | null;
      heroDescription: string | null;
      locationsEyebrow: string | null;
      locationsTitle: string | null;
      locationsDescription: string | null;
      nameLabel: string | null;
      namePlaceholder: string | null;
      companyLabel: string | null;
      companyPlaceholder: string | null;
      emailLabel: string | null;
      emailPlaceholder: string | null;
      phoneLabel: string | null;
      phonePlaceholder: string | null;
      serviceLabel: string | null;
      serviceDefault: string | null;
      messageLabel: string | null;
      messagePlaceholder: string | null;
      submitButtonText: string | null;
      addressLabel: string | null;
      otherOfficesTitle: string | null;
      kvkkPdf: {
  node: {
    mediaItemUrl: string;
  };
} | null;
    };
  } | null;
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

export async function getContactContent() {
  try {
    const [categories, officesData, pageData] = await Promise.all([
      getServiceCategories(),
      wpClient.request<WPContactOfficesResponse>(GET_CONTACT_OFFICES_QUERY),
      wpClient.request<WPContactPageResponse>(GET_CONTACT_PAGE_QUERY),
    ]);

    const pageFields = pageData.contactPage?.contactPageFields;

    if (!pageFields) {
      throw new Error("İletişim sayfası içeriği bulunamadı.");
    }

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

const kvkkPdfUrl =
  pageFields.kvkkPdf?.node.mediaItemUrl ??
  "/documents/iletisimformuaydinlatmametni.pdf";

return {
      hero: {
        eyebrow: pageFields.heroEyebrow ?? "",
        title: pageFields.heroTitle ?? "",
        description: pageFields.heroDescription ?? "",
      },
      locations: {
        eyebrow: pageFields.locationsEyebrow ?? "",
        title: pageFields.locationsTitle ?? "",
        description: pageFields.locationsDescription ?? "",
      },
      formTitle: pageFields.formTitle ?? "",
      formDescription: pageFields.formDescription ?? "",
      formFields: {
        nameLabel: pageFields.nameLabel ?? "",
        namePlaceholder: pageFields.namePlaceholder ?? "",
        companyLabel: pageFields.companyLabel ?? "",
        companyPlaceholder: pageFields.companyPlaceholder ?? "",
        emailLabel: pageFields.emailLabel ?? "",
        emailPlaceholder: pageFields.emailPlaceholder ?? "",
        phoneLabel: pageFields.phoneLabel ?? "",
        phonePlaceholder: pageFields.phonePlaceholder ?? "",
        serviceLabel: pageFields.serviceLabel ?? "",
        serviceDefault: pageFields.serviceDefault ?? "",
        messageLabel: pageFields.messageLabel ?? "",
        messagePlaceholder: pageFields.messagePlaceholder ?? "",
        submitButtonText: pageFields.submitButtonText ?? "",
kvkkPdfUrl,
      },
      officeLabels: {
        addressLabel: pageFields.addressLabel ?? "",
        otherOfficesTitle: pageFields.otherOfficesTitle ?? "",
      },

      services: categories.map((c) => c.label),
      offices: sortedOffices,
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
