import Link from "next/link";
import { SealBadge } from "@/components/shared/SealBadge";

export function HeroSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
      <div className="flex flex-col-reverse items-start gap-10 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl">
          <span className="font-mono-tag text-xs uppercase text-bronze">
            Kurulan: 1999 — İstanbul, Kadıköy
          </span>
          <h1 className="font-display mt-4 text-4xl leading-[1.1] text-ink md:text-6xl">
            Türkiye&apos;nin entegre danışmanlık gruplarından biri
          </h1>
          <p className="mt-6 max-w-xl text-base text-ink/70 md:text-lg">
            Yatırım danışmanlığından KVKK&apos;ya, teşvik ve hibelerden
            marka-patent vekilliğine kadar; 18.000&apos;i aşkın firmaya
            A&apos;dan Z&apos;ye tek çatı altında danışmanlık sunuyoruz.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/iletisim"
              className="rounded-full bg-ink px-6 py-3 font-mono-tag text-xs uppercase text-paper hover:bg-verify"
            >
              Ücretsiz Ön Görüşme
            </Link>
            <Link
              href="/hizmetlerimiz"
              className="rounded-full border border-ink/20 px-6 py-3 font-mono-tag text-xs uppercase text-ink hover:border-bronze hover:text-bronze"
            >
              Hizmetleri İncele
            </Link>
          </div>
        </div>

        <SealBadge />
      </div>
    </section>
  );
}
