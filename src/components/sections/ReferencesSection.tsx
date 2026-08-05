import { SectionEyebrow } from "@/components/shared/SectionEyebrow";

const PLACEHOLDER_COUNT = 8;

export function ReferencesSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <SectionEyebrow label="Referanslar" />
      <h2 className="font-heading max-w-xl text-3xl font-semibold text-[#0d4d5c] md:text-4xl">
        18.000&apos;i aşkın firmanın tercihi
      </h2>

      <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
        {Array.from({ length: PLACEHOLDER_COUNT }).map((_, index) => (
          <div
            key={index}
            className="card-surface flex h-16 items-center justify-center rounded-lg text-xs font-medium text-[#333333]/30"
          >
            LOGO
          </div>
        ))}
      </div>
      <p className="mt-4 text-xs text-[#333333]/30">
        * Gerçek referans logoları CMS entegrasyonunda buraya bağlanacak.
      </p>
    </section>
  );
}
