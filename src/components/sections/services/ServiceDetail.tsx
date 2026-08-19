import Image from "next/image";

import {
  ServiceSection,
  ServiceText,
} from "@/components/sections/services/ServiceContent";
import { ServiceDetailLayout } from "@/components/sections/services/ServiceDetailLayout";

import type { ServiceDetail as ServiceDetailType } from "@/services/content.service";

interface ServiceDetailProps {
  service: ServiceDetailType;
}

export function ServiceDetail({
  service,
}: ServiceDetailProps) {
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