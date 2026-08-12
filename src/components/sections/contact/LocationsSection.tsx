"use client";

import { useState } from "react";
import Image from "next/image";
import { Maximize2, X } from "lucide-react";

import { ContactMap } from "./ContactMap";

export function LocationsSection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <section className="bg-brand-gray-light py-10 md:py-14">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="mb-6 flex flex-col justify-between gap-3 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-primary">
                Konumumuz
              </p>

              <h2 className="mt-2 font-heading text-2xl font-semibold text-brand-dark md:text-3xl">
                Akkaş Group Merkez Ofis
              </h2>
            </div>

            <p className="max-w-md text-sm leading-6 text-muted-foreground md:text-right">
              Türkiye genelindeki 9 farklı hizmet noktamızla müşterilerimize
              daha yakınız.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-[28px] border border-brand-dark/10 bg-white shadow-lg shadow-brand-dark/5">
            <div className="relative h-[360px] sm:h-[390px] md:h-[430px] lg:h-[460px]">
              <ContactMap />

              {/* 9 Lokasyon Görseli - SAĞ ÜST */}
              <button
                type="button"
                onClick={() => setIsOpen(true)}
                className="group absolute right-5 top-5 z-10 w-[260px] overflow-hidden rounded-2xl border border-white/60 bg-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl md:right-7 md:top-7 md:w-[320px]"
              >
                <div className="relative aspect-[16/10] w-full">
                  <Image
                    src="/office/locations-map.png"
                    alt="Akkaş Group 9 farklı lokasyon"
                    fill
                    className="object-cover"
                    sizes="320px"
                  />

                  <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/5" />

                  <div className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-brand-dark shadow">
                    <Maximize2 className="h-4 w-4" />
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-5 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl overflow-hidden rounded-[24px] bg-white shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            {/* Kapatma Butonu */}
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Kapat"
              className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-brand-dark text-white shadow-lg transition-colors hover:bg-brand-primary"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="relative aspect-[16/10] w-full">
              <Image
                src="/office/locations-map.png"
                alt="Akkaş Group Türkiye lokasyonları"
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 95vw, 896px"
                priority
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}