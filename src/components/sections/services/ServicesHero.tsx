
import { Briefcase } from "lucide-react";

interface ServicesHeroProps {
  content: {
    heroEyebrow: string;
    heroBaslik: string;
    heroAciklama: string;
  };
}

export function ServicesHero({ content }: ServicesHeroProps) {
  const [titleFirst, ...titleRest] = content.heroBaslik.split(",");
  const titleSecond = titleRest.join(",").trim();

  return (
    <section className="relative isolate overflow-hidden border-b border-[#e6eef0] bg-gradient-to-r from-white via-[#f4f8f9] to-[#e8f5f6]">
      {/* Diğer sayfalarla aynı arka plan */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute -right-24 -top-28 h-80 w-80 rounded-full border-[55px] border-[#168a9b]/[0.05]" />
        <div className="absolute right-24 top-12 h-44 w-44 rounded-full bg-[#168a9b]/[0.035]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pb-7 pt-20 md:px-10 md:pb-8 md:pt-24">
        {/* Ortak ikonlu kapsül */}
        <div className="inline-flex items-center gap-2.5 rounded-full border border-[#d8eaed] bg-white/90 px-4 py-2 shadow-sm">
          <Briefcase
            className="h-4 w-4 text-[#078fa0]"
            strokeWidth={1.8}
          />
          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#078fa0]">
            AKKAŞ GROUP HİZMETLERİMİZ
          </span>
        </div>

        {/* Mevcut başlık */}
        <h1 className="mt-3 max-w-3xl font-heading text-2xl font-semibold leading-tight tracking-tight text-[#164d5b] md:text-3xl">
          {titleFirst}
          {titleSecond && (
            <>
              ,
              <br />
              <span className="text-[#168a9b]">{titleSecond}</span>
            </>
          )}
        </h1>

        {/* WordPress'ten gelen açıklama */}
        <p className="mt-3 max-w-2xl text-sm leading-6 text-[#657981] md:text-base">
          {content.heroAciklama}
        </p>
      </div>
    </section>
  );
}
