import Link from "next/link";
import { SectionEyebrow } from "@/components/shared/SectionEyebrow";
import type { ServiceItem } from "@/types";

interface ServicesSectionProps {
  services: ServiceItem[];
}

export function ServicesSection({ services }: ServicesSectionProps) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <SectionEyebrow fileNumber="01" label="Hizmetlerimiz" />
      <h2 className="font-display max-w-xl text-3xl text-ink md:text-4xl">
        A&apos;dan Z&apos;ye kurumsal danışmanlık çözümleri
      </h2>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service) => (
          <Link
            key={service.id}
            href={service.href}
            className="group flex flex-col justify-between rounded-2xl border border-ink/10 bg-white/40 p-6 transition-colors hover:border-bronze"
          >
            <div>
              <h3 className="font-display text-lg text-ink">{service.title}</h3>
              <p className="mt-2 text-sm text-ink/60">{service.description}</p>
            </div>
            <span className="font-mono-tag mt-6 text-xs uppercase text-bronze opacity-0 transition-opacity group-hover:opacity-100">
              Detay →
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
