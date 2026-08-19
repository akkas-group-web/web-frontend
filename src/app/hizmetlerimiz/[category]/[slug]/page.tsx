import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ServiceDetail } from "@/components/sections/services/ServiceDetail";
import { getServiceByCategoryAndSlug } from "@/services";

interface ServicePageProps {
  params: Promise<{
    category: string;
    slug: string;
  }>;
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { category, slug } = await params;

  const service = await getServiceByCategoryAndSlug(category, slug);

  if (!service) {
    return {
      title: "Hizmet Bulunamadı | Akkaş Group",
    };
  }

  return {
    title: `${service.title} | Akkaş Group`,
    description: service.description,
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { category, slug } = await params;

  const service = await getServiceByCategoryAndSlug(category, slug);

  if (!service) {
    notFound();
  }

  return <ServiceDetail service={service} />;
}
