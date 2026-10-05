import { ServicesAccordion } from "@/components/sections/services/ServicesAccordion";
import { ServicesHero } from "@/components/sections/services/ServicesHero";
import {
  getServiceCategories,
  getServicesPageContent,
} from "@/services/service.service";

export default async function ServicesPage() {
  const [categories, pageContent] = await Promise.all([
    getServiceCategories(),
    getServicesPageContent(),
  ]);

  return (
    <>
      <ServicesHero content={pageContent} />
      <ServicesAccordion categories={categories} />
    </>
  );
}