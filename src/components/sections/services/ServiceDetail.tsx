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
      <ServiceSection title={service.contentTitle}>
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
                src={service.image.url || ""}
                alt={service.image.alt || service.title}
                width={service.image.width ?? 600}
                height={service.image.height ?? 400}
                sizes="(max-width: 767px) 100vw, 280px"
                className="h-auto w-full object-cover"
              />
            </div>
          )}

          <div className="space-y-5">
            {/* WYSIWYG veya HTML/Düz Metin olarak gelen metni güvenle basar */}
            {typeof service.content === "string" ? (
              <div
                className="prose prose-sm max-w-none text-[13.5px] leading-6 text-[#58696e]"
                dangerouslySetInnerHTML={{ __html: service.content }}
              />
            ) : (
              // Dizi (array) olarak gelirse geriye dönük uyumluluk sağlar
              (service.content as string[])?.map((paragraph, index) => (
                <ServiceText key={index}>{paragraph}</ServiceText>
              ))
            )}
          </div>
        </div>
      </ServiceSection>
    </ServiceDetailLayout>
  );
}
