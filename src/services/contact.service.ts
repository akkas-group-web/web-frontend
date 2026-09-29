import { AppError } from "@/lib/errors/AppError";
import { logger } from "@/lib/logger/logger";
import type { ContactOffice, ContactPhone } from "@/types";
import { getServiceCategories } from "./service.service";
import { wpClient } from "../../wp/client";
import {
  GET_CONTACT_OFFICES_QUERY,
  GET_CONTACT_PAGE_QUERY,
  GET_WHATSAPP_SETTINGS_QUERY,
} from "../../wp/queries/contact";
import {
  WHATSAPP_FALLBACK,
  normalizeWhatsAppNumber,
} from "@/constants/whatsapp";

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
        phoneType: string | string[] | null;
        phone2: string | null;
        phone2Type: string | string[] | null;
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

function pickSelect(value: string | string[] | null | undefined) {
  return Array.isArray(value) ? value[0] : value;
}

function mapContactOfficesFromWP(
  data: WPContactOfficesResponse,
): ContactOffice[] {
  return data.contactOffices.nodes.map((node) => {
    const f = node.contactOfficeFieldss;

    const phones: ContactPhone[] = [
      { number: f.phone, type: pickSelect(f.phoneType) },
      { number: f.phone2, type: pickSelect(f.phone2Type) },
    ]
      .filter((p) => p.number?.trim())
      .map((p) => ({
        number: p.number!.trim(),
        type: p.type === "fax" ? "fax" : "phone",
      }));

    return {
      id: node.id,
      city: f.city,
      title: node.title,
      address: f.address ?? undefined,
      phone: phones[0]?.number,
      phones,
      email: f.email ?? undefined,
      latitude: f.latitude ?? undefined,
      longitude: f.longitude ?? undefined,
      isMainOffice: f.isMainOffice ?? false,
    };
  });
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

export interface WhatsAppSettings {
  number: string;
  displayNumber: string;
  label: string;
  hint: string;
  message: string;
}

interface WPWhatsAppResponse {
  contactPage: {
    contactPageFields: {
      whatsappEnabled: boolean | null;
      whatsappNumber: string | null;
      whatsappLabel: string | null;
      whatsappHint: string | null;
      whatsappMessage: string | null;
    } | null;
  } | null;
}

const WHATSAPP_DEFAULTS: WhatsAppSettings = { ...WHATSAPP_FALLBACK };

export async function getWhatsAppSettings(): Promise<WhatsAppSettings | null> {
  try {
    const data = await wpClient.request<WPWhatsAppResponse>(
      GET_WHATSAPP_SETTINGS_QUERY,
    );
    const f = data.contactPage?.contactPageFields;

    if (f?.whatsappEnabled === false) return null;

    const displayNumber =
      f?.whatsappNumber?.trim() || WHATSAPP_FALLBACK.displayNumber;

    return {
      number: normalizeWhatsAppNumber(displayNumber),
      displayNumber,
      label: f?.whatsappLabel?.trim() || WHATSAPP_FALLBACK.label,
      hint: f?.whatsappHint?.trim() || WHATSAPP_FALLBACK.hint,
      message: f?.whatsappMessage?.trim() || WHATSAPP_FALLBACK.message,
    };
  } catch (error) {
    logger.error("WhatsApp ayarları alınamadı", { error });
    return WHATSAPP_DEFAULTS;
  }
}
