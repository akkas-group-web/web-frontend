import { AppError } from "@/lib/errors/AppError";
import { logger } from "@/lib/logger/logger";
import type { ContactOffice } from "@/types";

const MOCK_CONTACT_SERVICES = [
  "Kalite Belgelendirme",
  "Eğitimler",
  "Yatırım Danışmanlığı",
  "Fikri ve Sınai Mülkiyet Hakları",
  "Ortak Sağlık ve Güvenlik Birimi Hizmetleri",
  "Devlet Destekleri",
  "Sigorta Teşvik Danışmanlığı",
  "Kişisel Verileri Koruma Danışmanlığı",
  "Akkaş Karbon",
  "ProKVK",
  "Diğer Hizmetlerimiz",
];

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

export async function getContactContent() {
  try {
    // İleride: await wpClient.query(CONTACT_QUERY) burada olacak.
    return {
      services: MOCK_CONTACT_SERVICES,
      offices: MOCK_CONTACT_OFFICES,
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
