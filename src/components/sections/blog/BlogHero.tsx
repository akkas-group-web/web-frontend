import { BookOpen, Newspaper } from "lucide-react";

export function BlogHero() {
  return (
    <section className="relative overflow-hidden border-b border-[#118B99]/10 bg-gradient-to-br from-[#EEF9FA] via-[#F8FCFC] to-[#E9F7F8]">
      {/* Arka plan dekorları */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-20 -top-16 h-[420px] w-[420px] rounded-full border-[70px] border-[#118B99]/5" />

        <div className="absolute right-52 top-24 h-[220px] w-[220px] rounded-full border-[40px] border-[#55C4CC]/5" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "radial-gradient(#118B99 1px, transparent 1px)",
            backgroundSize: "22px 22px",
          }}
        />

        {/* Büyük BLOG yazısı */}
        <div className="absolute right-4 top-1/2 hidden -translate-y-1/2 select-none text-[170px] font-black leading-none tracking-[-0.08em] text-[#118B99]/[0.035] lg:block xl:right-20 xl:text-[210px]">
          BLOG
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pb-14 pt-28 lg:px-8 lg:pb-16 lg:pt-32">
        <div className="max-w-3xl">
          {/* Üst etiket */}
          <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-[#118B99]/15 bg-white/75 px-4 py-2 shadow-sm backdrop-blur-sm">
            <Newspaper className="h-3.5 w-3.5 text-[#118B99]" />

            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#118B99]">
              Akkaş Group Blog
            </span>
          </div>

          {/* Başlık */}
          <h1 className="text-[42px] font-semibold leading-[1.07] tracking-[-0.045em] text-[#163B40] sm:text-5xl lg:text-[60px]">
            Bilgi, analiz ve
            <span className="block text-[#118B99]">
              güncel gelişmeler.
            </span>
          </h1>

          {/* Açıklama */}
          <p className="mt-5 max-w-2xl text-base leading-7 text-[#607B80] sm:text-[17px]">
            Yatırım, teşvik, mevzuat, sürdürülebilirlik ve iş dünyasına dair
            uzman görüşlerini, rehberleri ve güncel yazıları keşfedin.
          </p>

          {/* Alt bilgi */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 rounded-full bg-[#118B99] px-4 py-2 text-xs font-semibold text-white shadow-sm">
              <BookOpen className="h-3.5 w-3.5" />
              Güncel Yazılar
            </div>

            <div className="rounded-full border border-[#118B99]/15 bg-white/70 px-4 py-2 text-xs font-medium text-[#527278]">
              Uzman Görüşleri
            </div>

            <div className="rounded-full border border-[#118B99]/15 bg-white/70 px-4 py-2 text-xs font-medium text-[#527278]">
              Rehberler
            </div>

            <div className="rounded-full border border-[#118B99]/15 bg-white/70 px-4 py-2 text-xs font-medium text-[#527278]">
              Sektörel Gelişmeler
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}