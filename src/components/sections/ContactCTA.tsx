import Link from "next/link";
import { SITE_CONFIG } from "@/constants/site";

export function ContactCTA() {
  return (
    <section className="bg-verify px-6 py-20 text-paper">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
        <div>
          <h2 className="font-display max-w-lg text-3xl md:text-4xl">
            SGK teşviklerinden ne kadar yararlanabileceğinizi 10 dakikada
            öğrenin
          </h2>
          <p className="mt-3 text-paper/70">
            {SITE_CONFIG.phone} · {SITE_CONFIG.email}
          </p>
        </div>
        <Link
          href="/iletisim"
          className="whitespace-nowrap rounded-full bg-paper px-8 py-4 font-mono-tag text-xs uppercase text-ink hover:bg-bronze"
        >
          Ücretsiz Analiz Talep Et
        </Link>
      </div>
    </section>
  );
}
