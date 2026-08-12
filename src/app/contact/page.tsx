import type { Metadata } from "next";

import { ContactHero } from "@/components/sections/contact/ContactHero";
import { LocationsSection } from "@/components/sections/contact/LocationsSection";
import { ContactSection } from "@/components/sections/contact/ContactSection";

export const metadata: Metadata = {
  title: "İletişim",
  description:
    "Akkaş Group ile iletişime geçin. Türkiye genelindeki lokasyonlarımız ve uzman ekibimizle danışmanlık ihtiyaçlarınıza çözüm sunuyoruz.",
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <LocationsSection />
      <ContactSection />
    </>
  );
}