import Link from "next/link";
import sanitizeHtml from "sanitize-html";

import type { AboutActivityContent } from "@/types/about";

interface AboutContentSectionProps {
  content: AboutActivityContent;
}

const cleanHtml = (html: string) =>
  sanitizeHtml(html, {
    allowedTags: ["p", "br", "strong", "b", "em", "i"],
    allowedAttributes: {},
  });

export function AboutContentSection({ content }: AboutContentSectionProps) {
  return (
    <section className="relative isolate overflow-hidden bg-[#f4f7f9] py-10 md:py-12 lg:py-14">
      {" "}
      {/* Yumuşak arka plan dokunuşları (içeriğe binmez) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 -z-10 h-[520px] w-[520px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(26,125,143,0.10) 0%, rgba(26,125,143,0) 70%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-48 -left-40 -z-10 h-[460px] w-[460px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(13,77,92,0.07) 0%, rgba(13,77,92,0) 70%)",
        }}
      />
      <div className="mx-auto max-w-7xl px-5 sm:px-8 md:px-12">
        {/* BAŞLIK */}
        <div className="mb-8 lg:mb-10">
          <div className="flex items-center gap-4">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#1a7d8f]">
              {content.eyebrow}
            </span>
            <span className="h-px w-14 bg-[#1a7d8f]/50" />
          </div>
          <h2 className="font-heading mt-4 text-3xl font-bold leading-tight text-[#0d4d5c] md:text-4xl lg:text-[42px]">
            {content.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-0">
          {" "}
          {/* SOL: GİRİŞ (öne çıkan paragraf) + YÖNLENDİRME */}
          <div className="flex min-w-0 flex-col gap-8 lg:pr-16">
            {" "}
            {content.leftText?.trim() && (
              <div
                className="text-base leading-[1.85] text-[#2f4a51] [&_p]:m-0 [&_p+p]:mt-4 [&_strong]:font-semibold [&_strong]:text-[#0d4d5c] [&_b]:font-semibold [&_b]:text-[#0d4d5c]"
                dangerouslySetInnerHTML={{
                  __html: cleanHtml(content.leftText),
                }}
              />
            )}
            <Link
              href={content.button?.url || "/hizmetlerimiz"}
              target={content.button?.target || "_self"}
              rel={
                content.button?.target === "_blank"
                  ? "noopener noreferrer"
                  : undefined
              }
              className="group inline-flex w-fit items-center gap-3 border-b border-[#0d4d5c]/25 pb-2 text-sm font-semibold uppercase tracking-[0.12em] text-[#0d4d5c] transition-colors hover:border-[#1a7d8f] hover:text-[#1a7d8f]"
            >
              {content.button?.title || "Hizmetlerimizi İnceleyin"}
              <svg
                aria-hidden="true"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform group-hover:translate-x-1"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
          </div>
          {/* SAĞ: HİZMET METNİ */}
          <div className="min-w-0 border-t border-[#1a7d8f]/20 pt-10 lg:border-l lg:border-t-0 lg:pl-16 lg:pt-0">
            {content.rightText?.trim() && (
              <div
                className="text-base leading-[1.85] text-[#4a5b60] [&_p]:m-0 [&_p+p]:mt-4 [&_strong]:font-semibold [&_strong]:text-[#0d4d5c] [&_b]:font-semibold [&_b]:text-[#0d4d5c]"
                dangerouslySetInnerHTML={{
                  __html: cleanHtml(content.rightText),
                }}
              />
            )}

            {/* VURGULU SON CÜMLE */}
            {content.closingText?.trim() && (
              <p className="mt-6 border-l-2 border-[#1a7d8f] pl-4 text-base font-medium leading-relaxed text-[#0d4d5c]">
                {content.closingText}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
