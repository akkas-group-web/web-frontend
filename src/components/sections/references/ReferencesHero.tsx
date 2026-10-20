import { Building2 } from "lucide-react";
import { AboutStatItem } from "@/types/about";

interface ReferencesHeroProps {
  stats: AboutStatItem[];
}

export function ReferencesHero({ stats }: ReferencesHeroProps) {
  return (
    <section className="relative isolate overflow-hidden border-b border-[#e6eef0] bg-gradient-to-r from-white via-[#f4f8f9] to-[#e8f5f6]">
      {/* Arka plan dekorasyonu */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute -right-24 -top-28 h-80 w-80 rounded-full border-[55px] border-[#168a9b]/[0.05]" />
        <div className="absolute right-24 top-12 h-44 w-44 rounded-full bg-[#168a9b]/[0.035]" />
      </div>

      <h1 className="sr-only">Referanslarımız</h1>
      <div className="relative mx-auto max-w-7xl px-6 pb-7 pt-20 text-center md:px-10 md:pb-8 md:pt-24">
        {/* İkonlu kapsül */}
        <div className="inline-flex items-center gap-2.5 rounded-full border border-[#d8eaed] bg-white/90 px-4 py-2 shadow-sm">
          <Building2 className="h-4 w-4 text-[#078fa0]" strokeWidth={1.8} />
          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#078fa0]">
            AKKAŞ GROUP REFERANSLAR
          </span>
        </div>

        {/* Mevcut açıklama */}
        <p className="mx-auto mt-4 max-w-3xl text-sm leading-6 text-[#657981] md:text-base">
          1999&apos;dan bu yana kobilerden holdinglere, bankalardan sanayi
          tesislerine kadar 18.000&apos;den fazla firmaya danışmanlık verdik.
          Sektörünüze göre gerçek başarı hikayelerimizi keşfedin.
        </p>

        {/* İstatistikler */}
        {stats.length > 0 && (
          <dl className="mt-5 grid grid-cols-3 gap-2 md:flex md:flex-wrap md:justify-center md:gap-x-14">
            {stats.map((stat) => (
              <div key={stat.id} className="min-w-0 text-center">
                <dt className="font-heading text-xl font-bold text-[#168a9b] md:text-2xl">
                  {stat.value}
                </dt>
                <dd className="mt-1 text-xs text-[#657981]">{stat.label}</dd>
              </div>
            ))}
          </dl>
        )}
      </div>
    </section>
  );
}
