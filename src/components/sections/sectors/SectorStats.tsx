interface SectorStatsProps {
  stats?: {
    value: string;
    label: string;
  }[];
}

export function SectorStats({ stats }: SectorStatsProps) {
  if (!stats?.length) {
    return null;
  }

  return (
    <section className="bg-brand-surface-start py-14 sm:py-16">
      <div className="mx-auto grid max-w-7xl gap-px overflow-hidden rounded-[24px] border border-brand-teal/10 bg-brand-teal/10 sm:grid-cols-3">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-white px-6 py-8 text-center sm:px-8"
          >
            <p className="text-3xl font-semibold tracking-[-0.04em] text-brand-teal sm:text-4xl">
              {stat.value}
            </p>

            <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
