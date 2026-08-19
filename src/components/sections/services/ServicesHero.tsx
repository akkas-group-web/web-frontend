import { Briefcase } from "lucide-react";

export function ServicesHero() {
  return (
    <section className="relative overflow-hidden border-b border-[#0d4d5c]/10 bg-gradient-to-br from-[#eef7f6] via-[#f4faf9] to-white">
      {/* Dekoratif halkalar */}
      <div className="pointer-events-none absolute -right-16 top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full border border-[#16859a]/[0.10]" />
      <div className="pointer-events-none absolute -right-32 top-1/2 h-[560px] w-[560px] -translate-y-1/2 rounded-full border border-[#16859a]/[0.07]" />
      <div className="pointer-events-none absolute -right-48 top-1/2 h-[700px] w-[700px] -translate-y-1/2 rounded-full border border-[#16859a]/[0.05]" />

      <div className="relative mx-auto max-w-7xl px-6 py-16 md:px-8 md:py-24">
        {/* Pill etiket */}
        <span className="inline-flex items-center gap-2 rounded-full border border-[#0d4d5c]/10 bg-white px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#16859a] shadow-sm">
          <Briefcase className="h-3.5 w-3.5" />
          Hizmetlerimiz
        </span>

        {/* Başlık */}
        <h1 className="mt-5 text-4xl font-bold leading-[1.1] tracking-tight text-[#0d4d5c] md:text-6xl">
          Uzmanlığımız,
          <br />
          <span className="text-[#16859a]">çözüm ortağınız.</span>
        </h1>

        {/* Açıklama */}
        <p className="mt-5 max-w-xl text-base leading-7 text-[#607176] md:text-lg">
          İşletmenizin ihtiyaçlarına yönelik uzmanlık alanlarımızı ve
          sunduğumuz danışmanlık hizmetlerini keşfedin.
        </p>
      </div>
    </section>
  );
}