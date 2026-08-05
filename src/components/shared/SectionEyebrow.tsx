interface SectionEyebrowProps {
  label: string;
}

export function SectionEyebrow({ label }: SectionEyebrowProps) {
  return (
    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#1a7d8f]/15 bg-[#e6f2f4] px-4 py-1.5">
      <span className="h-1.5 w-1.5 rounded-full bg-[#1a7d8f]" />
      <span className="text-xs font-semibold uppercase tracking-wide text-[#0d4d5c]">
        {label}
      </span>
    </div>
  );
}
