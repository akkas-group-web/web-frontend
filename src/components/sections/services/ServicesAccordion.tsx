"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Minus, Plus } from "lucide-react";
import type { ServiceCategory } from "@/types/service";

interface ServicesAccordionProps {
  categories: ServiceCategory[];
}

export function ServicesAccordion({ categories }: ServicesAccordionProps) {
  const [openService, setOpenService] = useState<string | null>(null);

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-10 md:px-8 md:py-14">
        <div className="border-t border-[#0d4d5c]/15">
          {categories.map((service) => {
            const isOpen = openService === service.href;
            return (
              <section
                key={service.href}
                className="border-b border-[#0d4d5c]/15"
              >
                <button
                  type="button"
                  onClick={() => setOpenService(isOpen ? null : service.href)}
                  aria-expanded={isOpen}
                  className="group flex w-full items-center justify-between gap-5 px-2 py-3.5 text-left md:px-3 md:py-4"
                >
                  <h2
                    className={`text-lg font-semibold transition-colors md:text-xl ${isOpen ? "text-[#16859a]" : "text-[#26383d] group-hover:text-[#16859a]"}`}
                  >
                    {service.label}
                  </h2>
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-colors ${isOpen ? "border-[#16859a] bg-[#16859a] text-white" : "border-[#0d4d5c]/20 text-[#0d4d5c] group-hover:border-[#16859a] group-hover:text-[#16859a]"}`}
                  >
                    {isOpen ? (
                      <Minus className="h-3.5 w-3.5" />
                    ) : (
                      <Plus className="h-3.5 w-3.5" />
                    )}
                  </span>
                </button>

                {isOpen && service.children?.length ? (
                  <div className="border-t border-[#0d4d5c]/10 bg-[#f8fbfb] px-4 py-3 md:px-6 md:py-4">
                    <div className="grid gap-x-8 md:grid-cols-2">
                      {service.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="group flex items-center justify-between gap-4 border-b border-[#0d4d5c]/10 py-2.5 text-[13px] leading-5 text-[#53666b] transition-colors hover:text-[#16859a]"
                        >
                          <span>{child.label}</span>
                          <ArrowRight className="h-3.5 w-3.5 shrink-0 text-[#a1afb2] transition-all group-hover:translate-x-1 group-hover:text-[#16859a]" />
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : null}
              </section>
            );
          })}
        </div>
      </div>
    </section>
  );
}
