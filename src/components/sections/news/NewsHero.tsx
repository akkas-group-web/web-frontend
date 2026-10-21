
import { Newspaper, Radio, Scale, Landmark, Leaf } from "lucide-react";

export function NewsHero() {
  const categories = [
    {
      label: "Teşvikler & Hibeler",
      icon: Landmark,
    },
    {
      label: "Mevzuat",
      icon: Scale,
    },
    {
      label: "Sürdürülebilirlik",
      icon: Leaf,
    },
  ];

  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden border-b border-[#e6eef0] bg-gradient-to-r from-white via-[#f4f8f9] to-[#e8f5f6]">
        {/* Ortak arka plan dekorasyonu */}
        <div
          className="pointer-events-none absolute inset-0 overflow-hidden"
          aria-hidden="true"
        >
          <div className="absolute -right-24 -top-28 h-80 w-80 rounded-full border-[55px] border-[#168a9b]/[0.05]" />
          <div className="absolute right-24 top-12 h-44 w-44 rounded-full bg-[#168a9b]/[0.035]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 pb-7 pt-20 md:px-10 md:pb-8 md:pt-24">
          <div className="grid gap-6 lg:grid-cols-[1fr_420px] lg:items-center">
            {/* Sol: kapsül, başlık ve açıklama */}
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2.5 rounded-full border border-[#d8eaed] bg-white/90 px-4 py-2 shadow-sm">
                <Newspaper
                  className="h-4 w-4 text-[#078fa0]"
                  strokeWidth={1.8}
                />

                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#078fa0]">
                  AKKAŞ GROUP HABERLER
                </span>
              </div>

              <h1 className="mt-3 font-heading text-2xl font-semibold leading-tight tracking-tight text-[#164d5b] md:text-3xl">
                İş dünyasının{" "}
                <span className="text-[#168a9b]">
                  nabzını tutuyoruz.
                </span>
              </h1>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-[#657981] md:text-base">
                Teşvikler, mevzuat değişiklikleri, destek programları ve sektörel
                gelişmeleri güncel olarak takip edin.
              </p>
            </div>

            {/* Sağ: Gündem Başlıkları */}
            <div>
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.17em] text-[#789095]">
                Gündem Başlıkları
              </p>

              <div className="space-y-2">
                {categories.map(({ label, icon: Icon }) => (
                  <div
                    key={label}
                    className="flex items-center justify-between rounded-xl border border-[#118B99]/10 bg-white/80 px-3 py-2 backdrop-blur-sm"
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#E6F5F6]">
                        <Icon className="h-3.5 w-3.5 text-[#118B99]" />
                      </span>

                      <span className="text-sm font-medium text-[#45666B]">
                        {label}
                      </span>
                    </div>

                    <span className="h-1.5 w-1.5 rounded-full bg-[#118B99]" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GÜNCEL HABER AKIŞI - HERO DIŞINDA */}
      <div className="border-b border-[#e6eef0] bg-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-x-5 gap-y-2 px-6 py-3 md:px-10">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#118B99]">
            <Radio className="h-3.5 w-3.5" />
            Güncel Haber Akışı
          </div>

          <span className="hidden h-3 w-px bg-[#118B99]/20 sm:block" />

          <p className="text-xs text-[#7C9296]">
            Akkaş Group Haber Merkezi düzenli olarak güncellenir.
          </p>
        </div>
      </div>
    </>
  );
}
