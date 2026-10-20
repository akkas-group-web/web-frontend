import { BookOpen } from "lucide-react";

export function BlogHero() {
  return (
    <section className="relative isolate overflow-hidden border-b border-[#e6eef0] bg-gradient-to-r from-white via-[#f4f8f9] to-[#e8f5f6]">
      {/* Ortak arka plan dekorasyonu */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute -right-24 -top-28 h-80 w-80 rounded-full border-[55px] border-[#168a9b]/[0.05]" />
        <div className="absolute right-24 top-12 h-44 w-44 rounded-full bg-[#168a9b]/[0.035]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pb-7 pt-20 text-left md:px-10 md:pb-8 md:pt-24">
        {/* İkonlu kapsül */}
        <div className="inline-flex items-center gap-2.5 rounded-full border border-[#d8eaed] bg-white/90 px-4 py-2 shadow-sm">
          <BookOpen className="h-4 w-4 text-[#078fa0]" strokeWidth={1.8} />
          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#078fa0]">
            AKKAŞ GROUP BLOG
          </span>
        </div>
        {/* Mevcut başlık korunuyor */}
        <h1 className="mt-3 font-heading text-2xl font-semibold leading-tight tracking-tight text-[#164d5b] md:text-3xl">
          Bilgi, analiz ve{" "}
          <span className="text-[#168a9b]">güncel gelişmeler.</span>
        </h1>
        {/* Mevcut açıklama korunuyor */}
        <p className="mt-3 max-w-3xl text-sm leading-6 text-[#657981] md:text-base">
          Yatırım, teşvik, mevzuat, sürdürülebilirlik ve iş dünyasına dair uzman
          görüşlerini, rehberleri ve güncel yazıları keşfedin.
        </p>
      </div>
    </section>
  );
}
