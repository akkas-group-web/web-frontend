import { ContactHero } from "@/components/sections/contact/ContactHero";
import { LocationsSection } from "@/components/sections/contact/LocationsSection";
import { ContactSection } from "@/components/sections/contact/ContactSection";
import { getContactContent } from "@/services";

export default async function ContactPage() {
  const content = await getContactContent();

  return (
    <>
      <ContactHero content={content.hero} />
      <LocationsSection content={content.locations} />

      <ContactSection
        offices={content.offices}
        services={content.services}
        formTitle={content.formTitle}
        formDescription={content.formDescription}
        formFields={content.formFields}
        officeLabels={content.officeLabels}
      />
    </>
  );
}