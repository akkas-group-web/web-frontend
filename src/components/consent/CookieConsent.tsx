"use client";

import {
  COOKIE_OPEN_EVENT,
  DEFAULT_CHOICES,
  saveConsent,
  useCookieConsent,
  type ConsentCategory,
  type ConsentChoices,
} from "@/lib/cookie-consent";
import { useEffect, useRef, useState } from "react";

interface CookieInfo {
  name: string;
  provider: string;
  purpose: string;
  duration: string;
}

interface CategoryDef {
  id: ConsentCategory;
  title: string;
  description: string;
  locked?: boolean;
  cookies: CookieInfo[];
}

const CATEGORIES: CategoryDef[] = [
  {
    id: "necessary",
    title: "Zorunlu Çerezler",
    description:
      "Sitenin çalışması ve çerez tercihinizin hatırlanması için gereklidir. Bu çerezler kapatılamaz.",
    locked: true,
    cookies: [
      {
        name: "akkas_cookie_consent",
        provider: "akkasgroup.com",
        purpose: "Çerez tercihinizi saklar (tarayıcı yerel depolaması).",
        duration: "Siz silene kadar",
      },
    ],
  },
  {
    id: "analytics",
    title: "Analitik / Performans Çerezleri",
    description:
      "Ziyaretçi sayısı ve sayfaların nasıl kullanıldığı gibi istatistikleri toplayarak sitemizi geliştirmemize yardımcı olur.",
    cookies: [
      // Google Analytics eklendiğinde şunları ekle:
      // { name: "_ga", provider: "akkasgroup.com", purpose: "Ziyaretçileri ayırt eder.", duration: "2 yıl" },
      // { name: "_ga_<ID>", provider: "akkasgroup.com", purpose: "Oturum durumunu saklar.", duration: "2 yıl" },
      {
        name: "_ga",
        provider: "akkasgroup.com (Google Analytics)",
        purpose: "Ziyaretçileri birbirinden ayırarak istatistik üretir.",
        duration: "2 yıl",
      },
      {
        name: "_ga_2HH0KMZQS7",
        provider: "akkasgroup.com (Google Analytics)",
        purpose: "Oturum durumunu saklar.",
        duration: "2 yıl",
      },
    ],
  },
  {
    id: "functional",
    title: "İşlevsel Çerezler",
    description:
      "Google Haritalar gibi harici içeriklerin sayfamızda görüntülenmesini sağlar. Bu çerezleri Google yerleştirir. Kapalıyken harita yüklenmez.",
    cookies: [
      // {
      //   name: "__Secure-STRP",
      //   provider: "google.com",
      //   purpose: "Google hizmetinin güvenli ve doğru çalışması.",
      //   duration: "Kısa süreli",
      // },
      // {
      //   name: "SEARCH_SAMESITE",
      //   provider: "google.com",
      //   purpose: "Google'ın çapraz site isteklerini güvenli yönetmesi.",
      //   duration: "Yaklaşık 6 ay",
      // },
    ],
  },
  {
    id: "marketing",
    title: "Reklam / Pazarlama Çerezleri",
    description:
      "İlgi alanlarınıza göre reklam ve içerik göstermek için kullanılır. Sitemizde şu an bu amaçla çerez kullanılmamaktadır.",
    cookies: [
      {
        name: "NID",
        provider: "google.com",
        purpose:
          "Google Haritalar'ın tercihlerinizi hatırlaması ve hizmetin kişiselleştirilmesi.",
        duration: "Yaklaşık 6 ay",
      },
    ],
  },
];

function Switch({
  checked,
  disabled,
  onChange,
  label,
}: {
  checked: boolean;
  disabled?: boolean;
  onChange: (v: boolean) => void;
  label: string;
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      disabled={disabled}
      onClick={() => onChange(!checked)}
      className={`relative h-7 w-12 shrink-0 rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60 ${
        checked ? "bg-emerald-600" : "bg-neutral-300"
      }`}
    >
      <span
        className={`absolute left-0.5 top-0.5 h-6 w-6 rounded-full bg-white shadow transition-transform ${
          checked ? "translate-x-5" : "translate-x-0"
        }`}
      />
    </button>
  );
}

export function CookieConsent() {
  const { ready, consent } = useCookieConsent();
  const [open, setOpen] = useState(false);
  const [draft, setDraft] = useState<ConsentChoices>(DEFAULT_CHOICES);

  // İlk ziyarette (kayıt yoksa) paneli otomatik aç

  // Footer vb. yerlerden openCookieSettings() ile açılabilsin
  useEffect(() => {
    const onOpen = () => setOpen(true);
    window.addEventListener(COOKIE_OPEN_EVENT, onOpen);
    return () => window.removeEventListener(COOKIE_OPEN_EVENT, onOpen);
  }, []);

  // Panel açılırken mevcut tercihi göster
  useEffect(() => {
    if (open) setDraft(consent?.choices ?? DEFAULT_CHOICES);
  }, [open, consent]);

  // Açıkken arka plan kaymasın
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  // Esc ile kapat (yalnızca daha önce karar verilmişse)
  // Esc ile kapat
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const showBar = ready && !consent && !open;
  const barRef = useRef<HTMLDivElement>(null);

  // Çubuğun yüksekliğini CSS değişkenine yaz, diğer yüzen butonlar bunu kullansın
  useEffect(() => {
    const root = document.documentElement;
    const el = barRef.current;
    if (!showBar || !el) {
      root.style.removeProperty("--cookie-bar-h");
      return;
    }
    const update = () =>
      root.style.setProperty("--cookie-bar-h", `${el.offsetHeight}px`);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => {
      ro.disconnect();
      root.style.removeProperty("--cookie-bar-h");
    };
  }, [showBar]);

  if (!ready) return null;

  const commit = (choices: ConsentChoices) => {
    saveConsent(choices);
    setOpen(false);
  };

  return (
    <>
      {/* Sol alttaki yuvarlak buton */}
      <div
        className={`group fixed bottom-24 left-8 z-[70] ${showBar ? "hidden" : ""}`}
      >
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Çerez ayarları"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0d4d5c] text-white shadow-lg transition-all duration-200 hover:scale-105 hover:bg-[#1a7d8f] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1a7d8f] focus-visible:ring-offset-2"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M12 3a9 9 0 1 0 9 9 4 4 0 0 1-4-4 4 4 0 0 1-4-4 1 1 0 0 0-1-1Z" />
            <circle cx="8.5" cy="11" r="1" fill="currentColor" />
            <circle cx="12" cy="16" r="1" fill="currentColor" />
            <circle cx="15.5" cy="13" r="1" fill="currentColor" />
          </svg>
        </button>
        {!open && (
          <span className="pointer-events-none absolute left-14 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-md bg-[#0d4d5c] px-3 py-1.5 text-sm text-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100">
            Çerez ayarları
          </span>
        )}
      </div>

      {/* Alt çerez çubuğu (ilk ziyaret) */}
      {showBar && (
        <div
          ref={barRef}
          role="region"
          aria-label="Çerez bildirimi"
          className="fixed inset-x-0 bottom-0 z-[75] border-t border-neutral-200 bg-white/95 shadow-[0_-8px_30px_rgba(0,0,0,0.12)] backdrop-blur"
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6 md:flex-row md:items-center md:justify-between md:gap-8 lg:px-8">
            <div className="max-w-3xl">
              <p className="font-[family-name:var(--font-heading)] text-base font-bold text-[#0d4d5c]">
                Çerezleri kullanıyoruz
              </p>
              <p className="mt-1 text-sm leading-relaxed text-neutral-600">
                Size daha iyi bir deneyim sunabilmek için sitemizde çerezler
                kullanıyoruz. Zorunlu olmayan çerezler yalnızca onayınızla
                etkinleştirilir. Ayrıntılar için{" "}
                <a
                  href="/cerez-politikasi"
                  className="font-medium text-[#1a7d8f] underline"
                >
                  Çerez Politikası&apos;nı
                </a>{" "}
                inceleyebilirsiniz.
              </p>
            </div>

            <div className="grid shrink-0 grid-cols-1 gap-2 sm:grid-cols-3 md:flex md:items-center">
              <button
                type="button"
                onClick={() =>
                  commit({
                    necessary: true,
                    functional: true,
                    analytics: true,
                    marketing: true,
                  })
                }
                className="whitespace-nowrap rounded-lg bg-[#1a7d8f] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#1a7d8f] active:bg-[#1a7d8f]"
              >
                Tümünü Kabul Et
              </button>

              <button
                type="button"
                onClick={() => commit(DEFAULT_CHOICES)}
                className="whitespace-nowrap rounded-lg bg-neutral-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-neutral-500 active:bg-neutral-500"
              >
                Tümünü Reddet
              </button>

              <button
                type="button"
                onClick={() => setOpen(true)}
                className="whitespace-nowrap rounded-lg border border-neutral-300 bg-white px-5 py-2.5 text-sm font-semibold text-neutral-800 transition hover:bg-neutral-100"
              >
                Yönet
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal */}
      {open && (
        <div
          className="fixed inset-0 z-[80] flex items-end justify-center bg-black/60 p-3 backdrop-blur-sm sm:items-center sm:p-6"
          onClick={() => setOpen(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="cookie-title"
            onClick={(e) => e.stopPropagation()}
            className="flex max-h-[90vh] w-full max-w-2xl flex-col overflow-hidden rounded-2xl bg-white text-neutral-900 shadow-2xl"
          >
            {/* Üst kısım */}
            <div className="flex items-start justify-between gap-4 border-b border-neutral-200 px-6 py-5">
              <div>
                <h2
                  id="cookie-title"
                  className="font-[family-name:var(--font-heading)] text-xl font-bold"
                >
                  Çerez Tercihleri
                </h2>
                <p className="mt-1 text-sm leading-relaxed text-neutral-600">
                  Zorunlu olmayan çerezler yalnızca onayınızla etkinleştirilir.
                  Tercihlerinizi aşağıdan yönetebilir, sol alttaki butondan
                  istediğiniz zaman değiştirebilirsiniz. Ayrıntılar için{" "}
                  <a
                    href="/cerez-politikasi"
                    className="font-medium text-emerald-700 underline"
                  >
                    Çerez Politikası
                  </a>
                  'nı inceleyin.
                </p>
              </div>
              {consent && (
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Kapat"
                  className="rounded-full p-2 text-neutral-500 transition hover:bg-neutral-100 hover:text-neutral-900"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    aria-hidden="true"
                  >
                    <path d="M6 6l12 12M18 6L6 18" />
                  </svg>
                </button>
              )}
            </div>

            {/* Kategoriler */}
            <div className="flex-1 space-y-4 overflow-y-auto px-6 py-5">
              {CATEGORIES.map((c) => (
                <section
                  key={c.id}
                  className="rounded-xl border border-neutral-200 p-4"
                >
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-base font-semibold">{c.title}</h3>
                    <div className="flex items-center gap-3">
                      {c.locked && (
                        <span className="text-xs font-medium text-emerald-700">
                          Her zaman aktif
                        </span>
                      )}
                      <Switch
                        label={c.title}
                        checked={c.locked ? true : draft[c.id]}
                        disabled={c.locked}
                        onChange={(v) => setDraft((d) => ({ ...d, [c.id]: v }))}
                      />
                    </div>
                  </div>

                  <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                    {c.description}
                  </p>

                  <details className="group mt-3 rounded-lg bg-neutral-50">
                    <summary className="flex cursor-pointer list-none items-center justify-between px-4 py-3 text-sm font-medium [&::-webkit-details-marker]:hidden">
                      Kullanılan çerezleri görmek için tıklayın
                      <svg
                        viewBox="0 0 24 24"
                        className="h-4 w-4 transition-transform group-open:rotate-180"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </summary>

                    <div className="space-y-2 px-4 pb-4">
                      {c.cookies.length === 0 ? (
                        <p className="text-sm text-neutral-500">
                          Şu an bu kategoride kullanılan çerez bulunmamaktadır.
                        </p>
                      ) : (
                        c.cookies.map((ck) => (
                          <dl
                            key={ck.name}
                            className="grid grid-cols-[6rem_1fr] gap-x-3 gap-y-1 rounded-lg border border-neutral-200 bg-white p-3 text-xs"
                          >
                            <dt className="text-neutral-500">Ad</dt>
                            <dd className="break-all font-mono font-medium">
                              {ck.name}
                            </dd>
                            <dt className="text-neutral-500">Sağlayıcı</dt>
                            <dd>{ck.provider}</dd>
                            <dt className="text-neutral-500">Amaç</dt>
                            <dd>{ck.purpose}</dd>
                            <dt className="text-neutral-500">Süre</dt>
                            <dd>{ck.duration}</dd>
                          </dl>
                        ))
                      )}
                    </div>
                  </details>
                </section>
              ))}
            </div>

            {/* Butonlar */}
            <div className="flex flex-col gap-3 border-t border-neutral-200 bg-neutral-50 px-6 py-4 sm:flex-row">
              <button
                type="button"
                onClick={() =>
                  commit({
                    necessary: true,
                    functional: true,
                    analytics: true,
                    marketing: true,
                  })
                }
                className="flex-1 rounded-lg bg-green-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-green-600 active:bg-green-600"
              >
                Tümünü Kabul Et
              </button>

              <button
                type="button"
                onClick={() => commit(DEFAULT_CHOICES)}
                className="flex-1 rounded-lg bg-neutral-800 px-4 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800 active:bg-neutral-800"
              >
                Tümünü Reddet
              </button>

              <button
                type="button"
                onClick={() => commit(draft)}
                className="flex-1 rounded-lg bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-600 active:bg-blue-600"
              >
                Ayarları Kaydet
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
