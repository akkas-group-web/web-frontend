"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SectionEyebrow } from "@/components/shared/SectionEyebrow";
import type { ServiceItem } from "@/types";

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
              className="card-surface group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[#7fc7d4]/20 blur-xl transition-transform group-hover:scale-125" />
              <div className="relative">
                <h3 className="font-heading text-lg font-semibold text-[#0d4d5c]">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-[#333333]/70">
                  {service.description}
                </p>
              </div>
              <span className="relative mt-6 text-xs font-semibold text-[#1a7d8f] opacity-0 transition-opacity group-hover:opacity-100">
                Detay →
              </span>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
