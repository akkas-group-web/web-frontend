export type NewsletterStatus = "onaylandi" | "iptal" | "gecersiz";

export interface NewsletterStatusContent {
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
}
