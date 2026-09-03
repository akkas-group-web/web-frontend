import type { Metadata } from "next";

import { ReferencesHero } from "@/components/sections/references/ReferencesHero";
import { ReferencesLogoGrid } from "@/components/sections/references/ReferencesLogoGrid";
import { ReferencesCTASection } from "@/components/sections/references/ReferencesCTASection";
import { getClientReferences, getHomeContent } from "@/services";

export const metadata: Metadata = {
  title: "Referanslarımız | Akkaş Group",
  description:
    "1999'dan bu yana 18.000'den fazla firmaya danışmanlık hizmeti verdik. Bize güvenen firmaları keşfedin.",
};

export default async function ReferanslarPage() {
  const clients = await getClientReferences();
  const stats = await getHomeContent();

  return (
    <>
      <ReferencesHero stats={stats.stats} />
      <ReferencesLogoGrid clients={clients} />
      <ReferencesCTASection />
    </>
  );
}
