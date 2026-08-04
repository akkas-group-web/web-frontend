interface SectionEyebrowProps {
  label: string;
}

export function SectionEyebrow({ label }: SectionEyebrowProps) {
  return (
    <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-teal-50 px-4 py-1.5">
      <span className="h-1.5 w-1.5 rounded-full bg-teal-500" />
      <span className="text-xs font-semibold uppercase tracking-wide text-teal-700">
        {label}
      </span>
    </div>
  );
}
