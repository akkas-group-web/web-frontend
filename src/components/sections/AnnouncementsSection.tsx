import Link from "next/link";
import { SectionEyebrow } from "@/components/shared/SectionEyebrow";
import type { AnnouncementItem } from "@/types";

interface AnnouncementsSectionProps {
  announcements: AnnouncementItem[];
}

function formatDate(isoDate: string) {
  return new Date(isoDate).toLocaleDateString("tr-TR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

export function AnnouncementsSection({
  announcements,
}: AnnouncementsSectionProps) {
  return (
    <section className="bg-[#f5f2ec] px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <SectionEyebrow label="Güncel Duyurular" />
        <h2 className="font-heading max-w-xl text-3xl font-semibold text-[#0d4d5c] md:text-4xl">
          Teşvik ve mevzuat gündemi
        </h2>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {announcements.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="card-surface flex items-start justify-between gap-4 rounded-xl p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
            >
              <div>
                <span className="text-xs font-semibold uppercase tracking-wide text-[#1a7d8f]">
                  {item.category}
                </span>
                <p className="font-heading mt-1 text-base text-[#0d4d5c]">
                  {item.title}
                </p>
              </div>
              <time className="whitespace-nowrap text-xs text-[#333333]/40">
                {formatDate(item.date)}
              </time>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
