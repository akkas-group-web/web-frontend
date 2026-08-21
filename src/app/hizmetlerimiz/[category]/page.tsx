import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ServiceCategoryOverview } from "@/components/sections/services/ServiceCategoryOverview";
import { getServiceCategories } from "@/services";

interface CategoryPageProps {
  params: Promise<{ category: string }>;
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { category } = await params;
  const categories = await getServiceCategories();
  const current = categories.find((c) => c.id === category);

  if (!current) {
    return { title: "Hizmet Kategorisi Bulunamadı | Akkaş Group" };
  }

  return {
    title: `${current.label} | Akkaş Group`,
    description: current.description,
  };
}

export default async function ServiceCategoryPage({
  params,
}: CategoryPageProps) {
  const { category } = await params;
  const categories = await getServiceCategories();
  const current = categories.find((c) => c.id === category);

  if (!current) {
    notFound();
  }

  return <ServiceCategoryOverview category={current} />;
}
