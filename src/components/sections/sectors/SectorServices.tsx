import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import type { SectorService } from "@/types/sector";
import { getSectorIcon } from "./sector-icons";
import { routes } from "@/lib/routes";

interface SectorServicesProps {
  services: SectorService[];
}

export function SectorServices({ services }: SectorServicesProps) {
  return (
    <section id="hizmetler" className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Başlık */}
        <div className="max-w-3xl">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-[3px] w-10 rounded-full bg-brand-teal" />

            <span className="text-xs font-bold uppercase tracking-[0.18em] text-brand-teal">
              Sağlık Sektörüne Özel
            </span>
          </div>

          <h2 className="text-3xl font-semibold leading-tight tracking-[-0.035em] text-brand-navy sm:text-4xl lg:text-[48px]">
            İhtiyacınıza uygun
            <span className="block text-brand-teal">uzmanlık alanları</span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-[17px] sm:leading-8">
            Sağlık kuruluşlarının karşılaştığı farklı operasyonel, mevzuatsal ve
            kurumsal ihtiyaçlara yönelik uzmanlık alanlarımızı bir arada
            sunuyoruz.
          </p>
        </div>

        {/* Kartlar */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = getSectorIcon(service.icon);
            return (
              <Link
                key={service.id}
                href={routes.serviceCategory(service.categoryId)}
                className="group relative overflow-hidden rounded-[22px] border border-brand-dark/8 bg-white p-6 shadow-[0_12px_35px_-25px_rgba(13,77,92,0.35)] transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-teal/20 hover:shadow-[0_22px_45px_-25px_rgba(17,139,153,0.3)]"
              >
                {/* Hover dekorasyonu */}
                <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-brand-teal/5 transition-transform duration-500 group-hover:scale-150" />

                <div className="relative">
                  <div className="flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-soft transition-colors group-hover:bg-brand-teal">
                      <Icon
                        size={24}
                        strokeWidth={1.8}
                        className="transition-colors duration-300 group-hover:text-white"
                      />
                    </div>
                    <ArrowUpRight className="h-5 w-5 text-brand-dark/25 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand-teal" />
                  </div>

                  <div className="mt-7">
                    <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-brand-teal/60">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <h3 className="mt-2 text-[20px] font-semibold leading-[1.25] tracking-[-0.02em] text-brand-navy">
                      {service.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-muted-foreground">
                      {service.description}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-brand-teal">
                    Detayları İncele
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
