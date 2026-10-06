"use client";

import { useEffect, useState } from "react";

interface HomePopupProps {
  popup: {
    id: string;
    title: string;
    active: boolean;
    href: string;
    newTab: boolean;
    image: {
      url: string;
      alt: string;
    };
  } | null;
}

export default function HomePopup({ popup }: HomePopupProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (popup?.active) {
      setIsOpen(true);
    }
  }, [popup]);

  if (!popup || !popup.active || !isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 px-4 py-6">
      <div className="relative w-full max-w-lg">
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          aria-label="Popup'ı kapat"
          className="absolute -right-3 -top-3 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-white text-xl font-medium text-black shadow-xl transition hover:scale-105"
        >
          ×
        </button>

        <a
          href={popup.href}
          target={popup.newTab ? "_blank" : "_self"}
          rel={popup.newTab ? "noopener noreferrer" : undefined}
          className="block overflow-hidden rounded-2xl shadow-2xl"
        >
          <img
            src={popup.image.url}
            alt={popup.image.alt || popup.title}
            className="h-auto max-h-[60vh] w-full object-contain"
          />
        </a>
      </div>
    </div>
  );
}