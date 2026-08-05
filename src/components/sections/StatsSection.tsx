import type { StatItem } from "@/types";

interface StatsSectionProps {
  stats: StatItem[];
}

export function StatsSection({ stats }: StatsSectionProps) {
  return (
    <section className="border-y border-ink/10 bg-paper-muted px-6 py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 md:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.id} className="text-center md:text-left">
            <p className="font-mono-tag text-4xl text-verify md:text-5xl">
              {stat.value}
            </p>
            <p className="mt-2 text-sm text-ink/60">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
