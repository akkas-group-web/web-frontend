import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export function CareerHero() {
  return (
    <section className="relative overflow-hidden border-b border-[#118B99]/10 bg-white pt-16 lg:pt-20">
      <div className="grid min-h-[500px] lg:grid-cols-[1.05fr_0.95fr]">
        {/* SOL */}
        <div className="relative flex items-center overflow-hidden px-8 py-16 sm:px-12 lg:px-20">
          {/* Hafif turkuaz arka plan */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-40 bottom-[-210px] h-[520px] w-[520px] rounded-full bg-[#DDF3F5]" />
            <div className="absolute -left-20 bottom-[-220px] h-[500px] w-[500px] rounded-full border-[34px] border-white/75" />
            <div className="absolute left-16 bottom-[-250px] h-[500px] w-[500px] rounded-full border-[22px] border-[#CDEBED]/70" />
          </div>

          {/* Yazı */}
          <div className="relative z-10 max-w-[560px]">
            <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.22em] text-[#118B99]">
              Akkaş Group Kariyer
            </p>

            <h1 className="text-[52px] font-semibold leading-[0.98] tracking-[-0.045em] text-[#155B6B] sm:text-[62px]">
              Kariyer
            </h1>

            <h2 className="mt-5 max-w-[500px] text-[28px] font-semibold leading-[1.2] tracking-[-0.03em] text-[#214F5A] sm:text-[32px]">
              Geleceği birlikte şekillendirelim.
            </h2>

            <p className="mt-5 max-w-[430px] text-[16px] leading-8 text-[#6A858A]">
              Tutku duyduğunuz bir işte, güçlü bir ekibin parçası olarak
              yeteneklerinizi geliştirin ve birlikte değer üretelim.
            </p>

            <a
              href="#basvuru"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#118B99] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_10px_30px_-12px_rgba(17,139,153,0.55)] transition hover:bg-[#0D747E]"
            >
              Başvuru Formuna Git
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* SAĞ FOTO */}
        <div className="relative flex items-center justify-center bg-[#F4FAFA] px-8 py-10 lg:px-10">
          <div className="relative aspect-[4/3] w-full max-w-[620px] overflow-hidden rounded-[24px] shadow-[0_24px_60px_-28px_rgba(17,139,153,0.45)]">
            <Image
              src="/career/career-hero.png"
              alt="Akkaş Group kariyer"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 620px"
              className="object-cover"
            />
          </div>

          {/* dekor */}
          <div className="pointer-events-none absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-[#118B99]/10 blur-2xl" />
        </div>
      </div>
    </section>
  );
}