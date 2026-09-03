import { STATS } from "@/constants/site";
import { AboutStatItem } from "@/types/about";

interface ReferencesHeroProps {
  stats: AboutStatItem[];
}

export function ReferencesHero({ stats }: ReferencesHeroProps) {
  return (
    <section className="relative overflow-hidden bg-[#f4f6f8] pb-16 pt-32 md:pt-40">
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#7fc7d4]/15 blur-3xl" />
      <div className="pointer-events-none absolute -left-32 top-40 h-72 w-72 rounded-full bg-[#1a7d8f]/10 blur-3xl" />

      <div className="relative mx-auto max-w-5xl px-6 text-center md:px-12">
        <span className="inline-block rounded-full bg-[#e6f2f4] px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#0d4d5c]">
          Başarı Hikayelerimiz
        </span>
        <h1 className="font-heading mt-5 text-4xl font-bold text-[#333333] md:text-5xl">
          Referanslarımız
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[#6b7280] md:text-lg">
          1999&apos;dan bu yana kobilerden holdinglere, bankalardan sanayi
          tesislerine kadar 18.000&apos;den fazla firmaya danışmanlık verdik.
          Sektörünüze göre gerçek başarı hikayelerimizi keşfedin.
        </p>

        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-2 gap-6 sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.id}>
              <p className="font-heading text-2xl font-bold text-[#1a7d8f] md:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 text-xs text-[#6b7280]">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
