"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SectionEyebrow } from "@/components/shared/SectionEyebrow";
import type { ServiceItem } from "@/types";
import { ArrowUpRight } from "lucide-react";

interface ServicesSectionProps {
  services: ServiceItem[];
}

export function ServicesSection({ services }: ServicesSectionProps) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="text-center"
      >
        <SectionEyebrow label="Hizmetlerimiz" />
        <h2 className="font-heading mx-auto max-w-xl text-3xl font-semibold text-[#0d4d5c] md:text-4xl">
          A&apos;dan Z&apos;ye kurumsal danışmanlık çözümleri
        </h2>
      </motion.div>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service, i) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
              delay: i * 0.08,
            }}
          >
            <Link
              href={service.href}
              className="group relative flex min-h-[320px] h-full flex-col overflow-hidden rounded-[22px] border border-brand-dark/8 bg-white p-6 shadow-[0_12px_35px_-25px_rgba(13,77,92,0.35)] transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-teal/20 hover:shadow-[0_22px_45px_-25px_rgba(17,139,153,0.3)]"
            >
              {/* Hover dekorasyonu */}
              <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-brand-teal/5 transition-transform duration-500 group-hover:scale-150" />

              <div className="relative flex h-full flex-col">
                {/* Üst alan */}
                <div className="flex items-start justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-brand-teal/60">
                    0{i + 1}
                  </span>

                  <ArrowUpRight className="h-5 w-5 text-brand-dark/25 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand-teal" />
                </div>

                {/* İçerik */}
                <div className="mt-7">
                  <h3 className="font-heading text-[20px] font-semibold leading-[1.25] tracking-[-0.02em] text-brand-navy">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {service.description}
                  </p>
                </div>

                {/* Alt link */}
                <div className="mt-auto pt-6 flex items-center gap-2 text-sm font-semibold text-brand-teal">
                  Detayları İncele
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
