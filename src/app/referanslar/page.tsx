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

interface ReferanslarPageProps {
  searchParams: Promise<{
    page?: string;
  }>;
}

export default async function ReferanslarPage({
  searchParams,
}: ReferanslarPageProps) {
  const params = await searchParams;

  const currentPage = Math.max(1, Number(params.page) || 1);
  const pageSize = 60;

  const clients = await getClientReferences();
  const stats = await getHomeContent();

  const totalPages = Math.ceil(clients.length / pageSize);

  const startIndex = (currentPage - 1) * pageSize;
  const paginatedClients = clients.slice(startIndex, startIndex + pageSize);

  return (
    <>
      <ReferencesHero stats={stats.stats} />

      <ReferencesLogoGrid
        clients={paginatedClients}
        currentPage={currentPage}
        totalPages={totalPages}
      />

      <ReferencesCTASection />
    </>
  );
}