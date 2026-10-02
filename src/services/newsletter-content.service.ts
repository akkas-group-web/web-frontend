import type {
  NewsletterStatus,
  NewsletterStatusContent,
} from "@/types/newsletter";

const STATUS_CONTENT: Record<NewsletterStatus, NewsletterStatusContent> = {
  onaylandi: {
    title: "Aboneliğiniz onaylandı",
    description: "E-bültenimize kaydolduğunuz için teşekkür ederiz.",
    ctaLabel: "Ana Sayfaya Dön",
    ctaHref: "/",
  },
  iptal: {
    title: "Aboneliğiniz iptal edildi",
    description: "Artık e-bülten göndermeyeceğiz.",
    ctaLabel: "Ana Sayfaya Dön",
    ctaHref: "/",
  },
  gecersiz: {
    title: "Bağlantı geçersiz",
    description:
      "Bağlantının süresi dolmuş veya geçersiz olabilir. Lütfen tekrar kaydolmayı deneyiniz.",
    ctaLabel: "Ana Sayfaya Dön",
    ctaHref: "/",
  },
};

function isNewsletterStatus(value?: string): value is NewsletterStatus {
  return value !== undefined && value in STATUS_CONTENT;
}

export async function getNewsletterStatusContent(
  status?: string,
): Promise<NewsletterStatusContent> {
  return isNewsletterStatus(status)
    ? STATUS_CONTENT[status]
    : STATUS_CONTENT.gecersiz;
}
