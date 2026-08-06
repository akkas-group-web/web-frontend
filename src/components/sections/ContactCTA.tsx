import Link from "next/link";
import { SITE_CONFIG } from "@/constants/site";

export function ContactCTA() {
  return (
    <section className="border-t border-[#0d4d5c]/8 bg-white px-6 py-20">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
        <div>
          <h2 className="font-heading max-w-lg text-3xl font-semibold text-[#0d4d5c] md:text-4xl">
            SGK teşviklerinden ne kadar yararlanabileceğinizi 10 dakikada
            öğrenin
          </h2>
          <p className="mt-3 text-[#333333]/60">
            {SITE_CONFIG.phone} · {SITE_CONFIG.email}
          </p>
        </div>
        <Link
          href="/iletisim"
          className="whitespace-nowrap rounded-full bg-[#0d4d5c] px-8 py-4 text-sm font-semibold text-white shadow-lg transition-all hover:scale-[1.03] hover:bg-[#1a7d8f]"
        >
          Ücretsiz Analiz Talep Et
        </Link>
      </div>
    </section>
  );
}
