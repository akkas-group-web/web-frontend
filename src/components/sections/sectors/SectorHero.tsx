import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BriefcaseBusiness } from "lucide-react";

import type { SectorContent } from "@/types/sector";

interface SectorHeroProps {
  sector: SectorContent;
}

export function SectorHero({ sector }: SectorHeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-surface-start via-brand-surface-mid to-brand-surface-end">
      {/* Dekoratif arka plan */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full border-[70px] border-brand-teal/5" />

        <div className="absolute -bottom-40 -left-32 h-[380px] w-[380px] rounded-full bg-brand-sky/8 blur-3xl" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: "radial-gradient(#118B99 1px, transparent 1px)",
            backgroundSize: "22px 22px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pb-14 pt-28 sm:pb-16 lg:px-8 lg:pb-20 lg:pt-32">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          {/* Sol */}
          <div>
            <Link
              href="/sektorler"
              className="group mb-8 inline-flex items-center gap-2 text-sm font-semibold text-brand-teal transition-all hover:gap-3 hover:text-brand-teal-dark"
            >
              Sektörler
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-brand-teal/15 bg-white/75 px-4 py-2 shadow-sm backdrop-blur-sm">
              <BriefcaseBusiness className="h-3.5 w-3.5 text-brand-teal" />

              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-teal">
                Sektörel Çözümler
              </span>
            </div>

            <h1 className="max-w-3xl text-[42px] font-semibold leading-[1.06] tracking-[-0.045em] text-brand-navy sm:text-5xl lg:text-[62px]">
              {sector.title}
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-[17px] sm:leading-8">
              {sector.heroDescription}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="#hizmetler"
                className="group inline-flex items-center gap-2 rounded-full bg-brand-teal px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_-16px_rgba(17,139,153,0.7)] transition-all hover:bg-brand-teal-dark"
              >
                Sektörel Hizmetleri İncele
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/iletisim"
                className="inline-flex items-center rounded-full border border-brand-teal/15 bg-white/75 px-5 py-3 text-sm font-semibold text-brand-dark backdrop-blur-sm transition-colors hover:border-brand-teal/30 hover:text-brand-teal"
              >
                Bizimle İletişime Geçin
              </Link>
            </div>
          </div>

          {/* Sağ görsel */}
          <div className="relative">
            <div className="absolute -inset-5 rounded-[32px] bg-brand-sky/10 blur-2xl" />

            <div className="relative overflow-hidden rounded-[28px] border border-white/70 bg-white/60 p-2 shadow-[0_30px_70px_-35px_rgba(13,77,92,0.35)] backdrop-blur-sm">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[22px] bg-brand-soft">
                <Image
                 src={sector.image.url}
                  alt={sector.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 hover:scale-[1.03]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/35 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
