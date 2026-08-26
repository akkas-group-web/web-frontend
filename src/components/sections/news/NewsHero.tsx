import {
  Newspaper,
  Radio,
  Scale,
  Landmark,
  Leaf,
} from "lucide-react";

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
    <section className="relative overflow-hidden border-b border-[#118B99]/10 bg-white">
      {/* Sağ arka plan */}
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[42%] bg-gradient-to-l from-[#EAF8F8] via-[#F4FBFB]/80 to-transparent lg:block" />

      <div
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-[42%] opacity-[0.035] lg:block"
        style={{
          backgroundImage: "radial-gradient(#118B99 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 pb-10 pt-28 lg:px-8 lg:pb-12 lg:pt-32">
        <div className="grid gap-10 lg:grid-cols-[1fr_420px] lg:items-end">
          {/* Sol */}
          <div className="max-w-3xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#E4F5F6]">
                <Newspaper className="h-4 w-4 text-[#118B99]" />
              </span>

              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#118B99]">
                  Akkaş Group
                </p>

                <p className="mt-0.5 text-sm font-semibold text-[#31565C]">
                  Haber Merkezi
                </p>
              </div>
            </div>

            <h1 className="max-w-3xl text-[40px] font-semibold leading-[1.08] tracking-[-0.04em] text-[#173D43] sm:text-5xl lg:text-[56px]">
              İş dünyasının
              <span className="text-[#118B99]"> nabzını tutuyoruz.</span>
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-[#657E83]">
              Teşvikler, mevzuat değişiklikleri, destek programları ve sektörel
              gelişmeleri güncel olarak takip edin.
            </p>
          </div>

          {/* Sağ kategori alanı */}
          <div className="mt-2 lg:mt-0">
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.17em] text-[#789095]">
              Gündem Başlıkları
            </p>

            <div className="space-y-2">
              {categories.map(({ label, icon: Icon }) => (
                <div
                  key={label}
                  className="flex items-center justify-between rounded-xl border border-[#118B99]/10 bg-white/75 px-4 py-3 backdrop-blur-sm"
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

        {/* Alt news ticker */}
        <div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-[#118B99]/10 pt-5">
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
    </section>
  );
}