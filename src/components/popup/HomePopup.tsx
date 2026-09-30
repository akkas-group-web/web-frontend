"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function HomePopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 px-4 py-6">
      <div className="relative w-full max-w-4xl">
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          aria-label="Popup'ı kapat"
          className="absolute -right-3 -top-3 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white text-2xl font-medium text-black shadow-xl transition hover:scale-105"
        >
          ×
        </button>

        <Link
          href="/haberler"
          className="block overflow-hidden rounded-2xl shadow-2xl"
        >
          <Image
            src="/popup/haber-popup.jpg"
            alt="Güncel haberler"
            width={1400}
            height={850}
            priority
            className="h-auto max-h-[85vh] w-full object-contain"
          />
        </Link>
      </div>
    </div>
  );
}