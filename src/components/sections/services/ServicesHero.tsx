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
    <section className="relative overflow-hidden border-b border-[#0d4d5c]/10 bg-gradient-to-br from-[#eef7f6] via-[#f4faf9] to-white">
      {/* Dekoratif halkalar */}
      <div aria-hidden="true" className="pointer-events-none absolute -right-16 top-1/2 h-[320px] w-[320px] -translate-y-1/2 rounded-full border border-[#16859a]/[0.10]" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-32 top-1/2 h-[440px] w-[440px] -translate-y-1/2 rounded-full border border-[#16859a]/[0.07]" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-48 top-1/2 h-[560px] w-[560px] -translate-y-1/2 rounded-full border border-[#16859a]/[0.05]" />

      <div className="relative mx-auto max-w-7xl px-6 pb-10 pt-24 md:px-8 md:pb-12 md:pt-24">
        {/* Pill etiket */}
        <span className="inline-flex items-center gap-2 rounded-full border border-[#0d4d5c]/10 bg-white px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#16859a] shadow-sm">
          <Briefcase className="h-3.5 w-3.5" />
          {content.heroEyebrow}
        </span>

        {/* Başlık */}
        <h1 className="mt-4 text-3xl font-bold leading-[1.15] tracking-tight text-[#0d4d5c] md:text-5xl">
          {titleFirst}
          {titleSecond && (
            <>
              ,
              <br />
              <span className="text-[#16859a]">{titleSecond}</span>
            </>
          )}
        </h1>

        {/* Açıklama */}
        <p className="mt-4 max-w-xl text-base leading-7 text-[#607176]">
          {content.heroAciklama}
        </p>
      </div>
    </section>
  );
}