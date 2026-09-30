import type { Metadata } from "next";
import { NewsletterStatusSection } from "@/components/sections/newsletter/NewsletterStatusSection";
import { getNewsletterStatusContent } from "@/services";

export const metadata: Metadata = {
  title: "E-Bülten",
  robots: { index: false, follow: false },
};

export default async function NewsletterStatusPage({
  searchParams,
}: {
  searchParams: Promise<{ durum?: string }>;
}) {
  const { durum } = await searchParams;
  const content = await getNewsletterStatusContent(durum);

  return <NewsletterStatusSection content={content} />;
}
