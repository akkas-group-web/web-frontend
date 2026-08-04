interface SectionEyebrowProps {
  fileNumber: string;
  label: string;
}

export function SectionEyebrow({ fileNumber, label }: SectionEyebrowProps) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="font-mono-tag text-xs text-bronze border border-bronze/40 rounded-full px-3 py-1">
        DOSYA {fileNumber}
      </span>
      <span className="h-px flex-1 max-w-16 bg-ink/20" />
      <span className="font-mono-tag text-xs text-ink-70 uppercase">
        {label}
      </span>
    </div>
  );
}
