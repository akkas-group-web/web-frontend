// components/shared/CardMedia.tsx
"use client";

import Image from "next/image";

import { cn } from "@/lib/utils";

interface CardMediaProps {
  src?: string | null;
  alt: string;
  /** Kart içindeki görsel alanının oranı */
  ratio?: "square" | "video" | "wide";
  /**
   * cover: Görsel alanı tamamen kaplar.
   * contain: Görselin tamamını bulanık arka planla gösterir.
   */
  fit?: "cover" | "contain";
  priority?: boolean;
  className?: string;
}

const RATIO_CLASS: Record<NonNullable<CardMediaProps["ratio"]>, string> = {
  square: "aspect-square",
  video: "aspect-[16/10]",
  wide: "aspect-[21/9]",
};

export function CardMedia({
  src,
  alt,
  ratio = "video",
  fit = "contain",
  priority = false,
  className,
}: CardMediaProps) {
  const hasImage = typeof src === "string" && src.trim().length > 0;

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden bg-[#0d4d5c]/5",
        RATIO_CLASS[ratio],
        className,
      )}
    >
      {hasImage ? (
        <>
          {fit === "contain" && (
            <Image
              src={src}
              alt=""
              aria-hidden
              fill
              priority={priority}
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
              className="scale-110 object-cover opacity-60 blur-2xl"
            />
          )}

          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
            className={cn(
              "relative z-10 transition-transform duration-500",
              fit === "cover"
                ? "object-cover group-hover:scale-105"
                : "object-contain",
            )}
          />
        </>
      ) : (
        <div className="flex h-full w-full items-center justify-center px-5 text-center text-sm font-medium text-[#668085]">
          Görsel bulunamadı
        </div>
      )}
    </div>
  );
}