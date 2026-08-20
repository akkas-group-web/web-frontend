import Image from "next/image";

import {
  ServiceSection,
  ServiceText,
} from "@/components/sections/services/ServiceContent";
import { ServiceDetailLayout } from "@/components/sections/services/ServiceDetailLayout";

import type { ServiceDetail as ServiceDetailType } from "@/types/service";

interface ServiceDetailProps {
  service: ServiceDetailType;
}

export function ServiceDetail({ service }: ServiceDetailProps) {
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
                src={service.image.url}
                alt={service.image.alt}
                width={service.image.width ?? 600}
                height={service.image.height ?? 400}
                sizes="(max-width: 767px) 100vw, 280px"
                className="h-auto w-full object-cover"
              />
            </div>
          )}

          <div className="space-y-5">
            {service.content.map((paragraph, index) => (
              <ServiceText key={index}>{paragraph}</ServiceText>
            ))}
          </div>
        </div>
      </ServiceSection>
    </ServiceDetailLayout>
  );
}