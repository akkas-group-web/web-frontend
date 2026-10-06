"use client";

import { SITE_CONFIG } from "@/constants/site";
import {
  DEFAULT_CHOICES,
  saveConsent,
  useCookieConsent,
} from "@/lib/cookie-consent";

export function ContactMap() {
  const { consent } = useCookieConsent();
  const mapAllowed = consent?.choices.functional === true;

  const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(
    SITE_CONFIG.address,
  )}&z=15&output=embed`;

  if (mapAllowed) {
    return (
      <iframe
        title="Akkaş Group Merkez Ofis"
        src={mapUrl}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="absolute inset-0 h-full w-full border-0"
      />
    );
  }

  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-neutral-100 p-6 text-center">
      <p className="max-w-sm text-sm text-neutral-700">
        Harita Google tarafından sağlanır ve yüklendiğinde Google çerezleri
        oluşabilir.
      </p>
      <button
        type="button"
        onClick={() =>
          saveConsent({
            ...(consent?.choices ?? DEFAULT_CHOICES),
            functional: true,
          })
        }
        className="rounded-full bg-[#1a7d8f] px-5 py-2 text-sm font-semibold text-white transition hover:bg-[#0d4d5c]"
      >
        Haritayı yükle
      </button>
      <a
        href={`https://www.google.com/maps?q=${encodeURIComponent(SITE_CONFIG.address)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-[#0d4d5c] underline"
      >
        Google Haritalar&apos;da aç
      </a>
    </div>
  );
}
