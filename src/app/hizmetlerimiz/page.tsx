import type { Metadata } from "next";

import { ServicesAccordion } from "@/components/sections/services/ServicesAccordion";

export const metadata: Metadata = {
  title: "Hizmetlerimiz | Akkaş Group",
  description:
    "Akkaş Group kalite belgelendirme, yatırım danışmanlığı, devlet destekleri ve diğer kurumsal danışmanlık hizmetlerini inceleyin.",
};

export default function ServicesPage() {
  return (
    <main className="pt-16">
      {/* HERO */}
      <section className="border-b border-[#0d4d5c]/10 bg-[#f7faf9]">
        <div className="mx-auto max-w-7xl px-6 py-12 md:px-8 md:py-14">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#16859a]">
            Akkaş Group
          </p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight text-[#0d4d5c] md:text-5xl">
            Hizmetlerimiz
          </h1>

          <p className="mt-4 max-w-2xl text-base leading-7 text-[#607176]">
            İşletmenizin ihtiyaçlarına yönelik uzmanlık alanlarımızı ve
            sunduğumuz danışmanlık hizmetlerini keşfedin.
          </p>
        </div>
      </section>

      {/* HİZMETLER */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-10 md:px-8 md:py-14">
          <ServicesAccordion />
        </div>
      </section>
    </main>
  );
}