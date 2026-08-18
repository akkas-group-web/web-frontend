import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

import {
  ServiceSection,
  ServiceText,
} from "@/components/sections/services/ServiceContent";

import { ServiceDetailLayout } from "@/components/sections/services/ServiceDetailLayout";

import { getServiceByCategoryAndSlug } from "@/services/content.service";

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

export default async function ServiceDetailPage({
  params,
}: ServicePageProps) {
  const { category, slug } = await params;

  const service = await getServiceByCategoryAndSlug(category, slug);

  if (!service) {
    notFound();
  }

  return (
    <ServiceDetailLayout
      title={service.title}
      description={service.description}
      category={service.categoryTitle}
    >
      <ServiceSection>
        <div
          className={
            service.image
              ? "grid items-start gap-8 md:grid-cols-[280px_1fr]"
              : "w-full"
          }
        >
          {service.image && (
            <div className="overflow-hidden rounded-xl border border-[#0d4d5c]/10 bg-white">
              <Image
                src={service.image}
                alt={service.title}
                width={600}
                height={400}
                className="h-auto w-full object-cover"
              />
            </div>
          )}

          <div className="space-y-5">
            {service.content.map((paragraph, index) => (
              <ServiceText key={index}>
                {paragraph}
              </ServiceText>
            ))}
          </div>
        </div>
      </ServiceSection>
    </ServiceDetailLayout>
  );
}