import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function SectorCTA() {
  return (
    <section className="bg-white px-6 py-16 sm:py-20 lg:px-8 lg:py-24">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[28px] bg-gradient-to-br from-brand-teal to-brand-teal-dark px-6 py-12 text-center shadow-[0_25px_60px_-35px_rgba(17,139,153,0.6)] sm:px-10 sm:py-16 lg:px-16">
        <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-white/10 blur-2xl" />

        <div className="pointer-events-none absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-brand-sky/15 blur-3xl" />

        <div className="relative">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/65">
            Sağlık sektörüne özel danışmanlık
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-semibold tracking-[-0.035em] text-white sm:text-4xl lg:text-[46px]">
            Kurumunuzun ihtiyaçlarını birlikte değerlendirelim.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
            Sağlık kuruluşunuzun mevcut süreçlerini ve ihtiyaçlarını
            değerlendirerek size uygun danışmanlık çözümünü birlikte
            belirleyebiliriz.
          </p>

          <Link
            href="/iletisim"
            className="group mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-brand-dark transition-all hover:gap-3 hover:bg-brand-beige-light"
          >
            İletişime Geçin
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
