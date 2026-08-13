import type { Metadata } from "next";

import { ContactHero } from "@/components/sections/contact/ContactHero";
import { LocationsSection } from "@/components/sections/contact/LocationsSection";
import { ContactSection } from "@/components/sections/contact/ContactSection";
import { getContactContent } from "@/services/content.service";

export const metadata: Metadata = {
  title: "İletişim",
  description:
    "Akkaş Group ile iletişime geçin. Türkiye genelindeki lokasyonlarımız ve uzman ekibimizle danışmanlık ihtiyaçlarınıza çözüm sunuyoruz.",
};

export default async function ContactPage() {
  const content = await getContactContent();

  return (
    <>
      <ContactHero />
      <LocationsSection />

      <ContactSection
        offices={content.offices}
        services={content.services}
      />
    </>
  );
}