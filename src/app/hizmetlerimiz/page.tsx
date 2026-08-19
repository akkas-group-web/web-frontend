import type { Metadata } from "next";

import { ServicesHero } from "@/components/sections/services/ServicesHero";
import { ServicesAccordion } from "@/components/sections/services/ServicesAccordion";

export const metadata: Metadata = {
  title: "Hizmetlerimiz | Akkaş Group",
  description:
    "Akkaş Group kalite belgelendirme, yatırım danışmanlığı, devlet destekleri ve diğer kurumsal danışmanlık hizmetlerini inceleyin.",
};

export default function ServicesPage() {
  return (
    <main className="pt-16">
      <ServicesHero />
      <ServicesAccordion />
    </main>
  );
}