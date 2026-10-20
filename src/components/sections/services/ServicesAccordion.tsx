"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";

import type { ServiceCategory } from "@/types/service";

interface ServicesAccordionProps {
  categories: ServiceCategory[];
}

export function ServicesAccordion({ categories }: ServicesAccordionProps) {
  const [openService, setOpenService] = useState<string | null>(null);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-8 py-7 md:px-10 md:py-8">
        <div className="border-t border-[#0d4d5c]/15">
          {categories.map((service, serviceIndex) => {
            const serviceKey = `${service.label}-${serviceIndex}`;
            const isOpen = openService === serviceKey;
            const contentId = `service-content-${serviceIndex}`;

            return (
              <section
                key={serviceKey}
                ref={(el) => {
                  sectionRefs.current[serviceKey] = el;
                }}
                className="scroll-mt-28 border-b border-[#0d4d5c]/15"
              >
                <button
                  type="button"
                  onClick={() => {
                    const nextOpenService = isOpen ? null : serviceKey;

                    setOpenService(nextOpenService);

                    if (nextOpenService) {
                      setTimeout(() => {
                        sectionRefs.current[serviceKey]?.scrollIntoView({
                          behavior: "smooth",
                          block: "start",
                        });
                      }, 100);
                    }
                  }}
                  aria-expanded={isOpen}
                  aria-controls={contentId}
                  className="group flex min-h-[52px] w-full items-center gap-4 px-2 py-2 text-left md:min-h-[56px] md:w-1/2 md:px-3"
                >
                  <h2
                    className={`min-w-0 text-sm font-semibold transition-colors md:text-base ${
                      isOpen
                        ? "text-[#16859a]"
                        : "text-[#26383d] group-hover:text-[#16859a]"
                    }`}
                  >
                    {service.label}
                  </h2>

                  <span
                    aria-hidden="true"
                    className="ml-auto flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#e8f5f6] text-[#16859a] transition-colors group-hover:bg-[#d9eef0]"
                  >
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </span>
                </button>

                <div id={contentId} hidden={!isOpen}>
                  {service.children?.length ? (
                    <div className="border-t border-[#0d4d5c]/10 bg-[#f8fbfb] px-4 py-3 md:px-6">
                      <div className="grid grid-cols-1 gap-x-6 md:grid-cols-2">
                        {service.children.map((child, childIndex) => {
                          const childKey = `${child.label}-${childIndex}`;

                          const childHref =
                            child.href &&
                            child.href !== "/hizmetlerimiz/null" &&
                            !child.href.endsWith("/null")
                              ? child.href
                              : "/hizmetlerimiz";

                          return (
                            <Link
                              key={childKey}
                              href={childHref}
                              className="group flex min-w-0 items-center justify-between gap-3 border-b border-[#0d4d5c]/10 py-2 text-[13px] leading-5 text-[#53666b] transition-colors hover:text-[#16859a]"
                            >
                              <span className="min-w-0 flex-1 break-words">
                                {child.label}
                              </span>

                              <ArrowRight
                                aria-hidden="true"
                                className="h-3.5 w-3.5 shrink-0 text-[#a1afb2] transition-all group-hover:translate-x-1 group-hover:text-[#16859a]"
                              />
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  ) : null}
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </section>
  );
}