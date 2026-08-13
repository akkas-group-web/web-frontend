"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Maximize2, X } from "lucide-react";

import { ContactMap } from "./ContactMap";

export function LocationsSection() {
  const [isOpen, setIsOpen] = useState(false);

  // Escape + scroll lock
  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  return (
    <>
      <section className="bg-brand-gray-light py-8 md:py-11">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-12">
          {/* SECTION HEADER */}
          <div className="mb-5 grid gap-3 md:grid-cols-[1fr_360px] md:items-end md:gap-10">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-primary sm:text-xs">
                Konumumuz
              </p>

              <h2 className="mt-2 font-heading text-xl font-semibold tracking-[-0.025em] text-brand-dark sm:text-2xl md:text-3xl">
                Akkaş Group Merkez Ofis
              </h2>
            </div>

            <p className="max-w-[360px] text-sm leading-6 text-muted-foreground md:justify-self-end md:pb-1 md:text-right">
              Türkiye genelindeki 9 farklı hizmet noktamızla müşterilerimize
              daha yakınız.
            </p>
          </div>

          {/* MAP */}
          <div className="relative overflow-hidden rounded-2xl border border-brand-dark/10 bg-white shadow-sm sm:rounded-[24px]">
            <div className="relative h-[320px] sm:h-[390px] md:h-[430px] lg:h-[460px]">
              <ContactMap />

              {/* Türkiye Lokasyonları thumbnail */}
              <button
                type="button"
                onClick={() => setIsOpen(true)}
                aria-label="Türkiye lokasyonlarını büyüt"
                className="group absolute right-2 top-2 z-10 w-[140px] overflow-hidden rounded-lg border border-white/60 bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:right-5 sm:top-5 sm:w-[230px] sm:rounded-xl md:right-7 md:top-7 md:w-[320px]"
              >
                <div className="relative aspect-[16/10] w-full">
                  <Image
                    src="/office/locations-map.png"
                    alt="Akkaş Group 9 farklı lokasyon"
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 140px, (max-width: 768px) 230px, 320px"
                  />

                  <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/5" />

                  <div className="absolute right-2 top-2 flex h-7 w-7 items-center justify-center rounded-full bg-white/90 text-brand-dark shadow sm:right-3 sm:top-3 sm:h-9 sm:w-9">
                    <Maximize2 className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* MODAL */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Türkiye lokasyonları"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-3 backdrop-blur-sm sm:p-5"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl overflow-hidden rounded-2xl bg-white shadow-2xl sm:rounded-[24px]"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Kapat"
              className="absolute right-3 top-3 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-brand-dark text-white shadow-lg transition-colors hover:bg-brand-primary sm:right-4 sm:top-4 sm:h-11 sm:w-11"
            >
              <X className="h-4 w-4 sm:h-5 sm:w-5" />
            </button>

            <div className="relative aspect-[4/3] w-full sm:aspect-[16/10]">
              <Image
                src="/office/locations-map.png"
                alt="Akkaş Group Türkiye lokasyonları"
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 95vw, 896px"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}