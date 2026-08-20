import { ServicesAccordion } from "@/components/sections/services/ServicesAccordion";
import { ServicesHero } from "@/components/sections/services/ServicesHero";
import { getServiceCategories } from "@/services/service.service";

export default async function ServicesPage() {
  const categories = await getServiceCategories();
  return (
    <>
      <ServicesHero />
      <ServicesAccordion categories={categories} />
    </>
  );
}
