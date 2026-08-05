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
    <section className="mx-auto max-w-7xl px-6 py-20">
      <SectionEyebrow label="Güncel Duyurular" />
      <h2 className="font-display max-w-xl text-3xl text-ink md:text-4xl">
        Teşvik ve mevzuat gündemi
      </h2>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {announcements.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            className="flex items-start justify-between gap-4 rounded-xl border border-ink/10 p-5 hover:border-bronze"
          >
            <div>
              <span className="font-mono-tag text-xs uppercase text-bronze">
                {item.category}
              </span>
              <p className="font-display mt-1 text-base text-ink">
                {item.title}
              </p>
            </div>
            <time className="font-mono-tag whitespace-nowrap text-xs text-ink/40">
              {formatDate(item.date)}
            </time>
          </Link>
        ))}
      </div>
    </section>
  );
}
