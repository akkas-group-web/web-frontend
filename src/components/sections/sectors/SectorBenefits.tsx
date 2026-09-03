import { CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";

interface SectorBenefitsProps {
  benefits: string[];
  eyebrow: string;
  titleLine1: string;
  titleLine2: string;
  description: string;
}

export function SectorBenefits({
  benefits,
  eyebrow,
  titleLine1,
  titleLine2,
  description,
}: SectorBenefitsProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-navy to-brand-dark py-16 text-white sm:py-20 lg:py-24">
      <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-brand-teal/15 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-brand-sky/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-20">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-[3px] w-10 rounded-full bg-brand-sky" />

              <span className="text-xs font-bold uppercase tracking-[0.18em] text-brand-turquoise-100">
                {eyebrow}
              </span>
            </div>

            <h2 className="max-w-xl text-3xl font-semibold leading-tight tracking-[-0.035em] sm:text-4xl lg:text-[48px]">
              {titleLine1}
              <span className="block text-brand-sky">{titleLine2}</span>
            </h2>

            <p className="mt-6 max-w-lg text-base leading-7 text-white/65 sm:text-[17px] sm:leading-8">
              {description}
            </p>

            <div className="mt-8 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10">
                <ShieldCheck className="h-5 w-5 text-brand-sky" />
              </div>

              <div>
                <p className="text-sm font-semibold">Uzman danışmanlık</p>

                <p className="mt-1 text-xs text-white/50">
                  Farklı uzmanlık alanlarında deneyimli ekip
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="rounded-[20px] border border-white/10 bg-white/[0.045] p-5 backdrop-blur-sm transition-colors hover:bg-white/[0.07]"
              >
                <div className="flex gap-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-sky" />

                  <p className="text-sm leading-6 text-white/75">{benefit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 grid gap-3 border-t border-white/10 pt-8 sm:grid-cols-3">
          <div className="flex items-center gap-3">
            <Sparkles className="h-5 w-5 text-brand-sky" />

            <span className="text-sm text-white/60">
              Entegre danışmanlık yaklaşımı
            </span>
          </div>

          <div className="flex items-center gap-3">
            <ShieldCheck className="h-5 w-5 text-brand-sky" />

            <span className="text-sm text-white/60">
              Mevzuat ve uyum odaklı yaklaşım
            </span>
          </div>

          <div className="flex items-center gap-3">
            <CheckCircle2 className="h-5 w-5 text-brand-sky" />

            <span className="text-sm text-white/60">
              Sektörel ihtiyaçlara özel çözümler
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
