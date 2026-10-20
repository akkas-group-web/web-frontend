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
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 top-1/2 h-[320px] w-[320px] -translate-y-1/2 rounded-full border border-[#16859a]/[0.10]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-1/2 h-[440px] w-[440px] -translate-y-1/2 rounded-full border border-[#16859a]/[0.07]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-48 top-1/2 h-[560px] w-[560px] -translate-y-1/2 rounded-full border border-[#16859a]/[0.05]"
      />

      <div className="relative mx-auto max-w-7xl px-8 pb-8 pt-24 md:px-10 md:pb-10">
        <div className="px-2 md:px-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#0d4d5c]/10 bg-white px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#16859a] shadow-sm">
            <Briefcase aria-hidden="true" className="h-3 w-3" />
            {content.heroEyebrow}
          </span>

          <div className="mt-4 grid grid-cols-1 items-center gap-4 lg:grid-cols-2 lg:gap-12">
            <h1 className="text-[26px] font-bold leading-[1.2] tracking-tight text-[#0d4d5c] md:text-[34px]">
              {titleFirst}
              {titleSecond && (
                <>
                  ,
                  <br />
                  <span className="text-[#16859a]">{titleSecond}</span>
                </>
              )}
            </h1>

            <p className="max-w-[520px] text-sm leading-6 text-[#607176]">
              {content.heroAciklama}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}