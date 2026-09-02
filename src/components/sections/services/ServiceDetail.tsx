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

function renderInlineBold(text: string) {
  const parts = text.split(/(\*\*.*?\*\*)/g);

  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={index} className="font-semibold text-[#0d4d5c]">
          {part.slice(2, -2)}
        </strong>
      );
    }

    return part;
  });
}

function renderLink(text: string) {
  const cleanText = text.trim();

  const markdownLinkRegex =
    /^\[([^\]]+)\]\((https?:\/\/[^)]+)\)$/;

  const markdownMatch = cleanText.match(markdownLinkRegex);

  if (markdownMatch) {
    const [, label, href] = markdownMatch;

    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="font-medium text-[#0d4d5c] hover:text-[#1596a8]"
      >
        {label}
      </a>
    );
  }

  if (
    cleanText.startsWith("http://") ||
    cleanText.startsWith("https://") ||
    cleanText.startsWith("www.")
  ) {
    const href = cleanText.startsWith("www.")
      ? `https://${cleanText}`
      : cleanText;

    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="font-medium text-[#0d4d5c] hover:text-[#1596a8]"
      >
        {cleanText}
      </a>
    );
  }

  return null;
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

          <div className="space-y-3">
            {service.content.map((paragraph, index) => {
              const isSubHeading = paragraph.startsWith("### ");
              const isHeading = paragraph.startsWith("## ");

              if (isSubHeading) {
  const title = paragraph.replace("### ", "");
  const link = renderLink(title);

  return (
    <h3
      key={index}
      className="pt-2 text-base font-semibold text-[#0d4d5c]"
    >
      {link ?? title}
    </h3>
  );
}

              if (isHeading) {
                return (
                  <h2
                    key={index}
                    className="pt-3 text-base font-semibold text-[#0d4d5c] md:text-lg"
                  >
                    {paragraph.replace("## ", "")}
                  </h2>
                );
              }

            const link = renderLink(paragraph);

return (
  <ServiceText key={index}>
    {link ?? renderInlineBold(paragraph)}
  </ServiceText>
);
            })}
          </div>
        </div>
      </ServiceSection>
    </ServiceDetailLayout>
  );
}