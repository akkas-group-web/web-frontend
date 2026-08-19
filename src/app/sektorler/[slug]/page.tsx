import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { SectorHero } from "@/components/sections/sectors/SectorHero";
import { SectorServices } from "@/components/sections/sectors/SectorServices";
import { SectorStats } from "@/components/sections/sectors/SectorStats";
import { SectorBenefits } from "@/components/sections/sectors/SectorBenefits";
import { SectorCTA } from "@/components/sections/sectors/SectorCTA";
import { getSectorBySlug } from "@/services";

interface SectorPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({
  params,
}: SectorPageProps): Promise<Metadata> {
  const { slug } = await params;
  const sector = await getSectorBySlug(slug);

  if (!sector) {
    return {
      title: "Sektör Bulunamadı | Akkaş Group",
    };
  }

  return {
    title: `${sector.title} | Akkaş Group`,
    description: sector.description,
  };
}

export default async function SectorPage({ params }: SectorPageProps) {
  const { slug } = await params;

  const sector = await getSectorBySlug(slug);

  if (!sector) {
    notFound();
  }

  return (
    <main className="overflow-x-hidden bg-white">
      <SectorHero sector={sector} />

      <SectorServices services={sector.services} />

      <SectorBenefits benefits={sector.benefits} />

      <SectorStats stats={sector.stats} />

      <SectorCTA />
    </main>
  );
}
