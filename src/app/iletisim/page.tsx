import type { Metadata } from "next";

import { ContactHero } from "@/components/sections/contact/ContactHero";
import { LocationsSection } from "@/components/sections/contact/LocationsSection";
import { ContactSection } from "@/components/sections/contact/ContactSection";
import { getContactContent } from "@/services";

export const metadata: Metadata = {
  title: "İletişim",
  description:
    "Akkaş Group ile iletişime geçin. Türkiye genelindeki lokasyonlarımız ve uzman ekibimizle danışmanlık ihtiyaçlarınıza çözüm sunuyoruz.",
};

export default async function ContactPage() {
  const content = await getContactContent();

  return (
    <>
      <ContactHero
        title={content.page.heroTitle}
        description={content.page.heroDescription}
      />

      <LocationsSection
        title={content.page.locationsTitle}
        description={content.page.locationsDescription}
        thumbnailUrl={content.page.locationsThumbnail.url}
        thumbnailAlt={content.page.locationsThumbnail.alt}
        mainOfficeAddress={content.offices[0]?.address ?? ""}
      />

      <ContactSection offices={content.offices} services={content.services} />
    </>
  );
}
