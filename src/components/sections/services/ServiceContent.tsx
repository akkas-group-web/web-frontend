import type { ReactNode } from "react";

interface ServiceSectionProps {
  title?: string;
  children: ReactNode;
}

export function ServiceSection({
  title,
  children,
}: ServiceSectionProps) {
  return (
    <section className="border-t border-[#0d4d5c]/10 py-6 first:border-t-0 first:pt-0">
      {title && (
        <h2 className="text-lg font-bold text-[#0d4d5c] md:text-xl">
          {title}
        </h2>
      )}

      <div className={title ? "mt-3" : ""}>{children}</div>
    </section>
  );
}

export function ServiceText({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="space-y-2.5 text-[13px] leading-6 text-[#58696e] md:text-[13.5px]">
      {children}
    </div>
  );
}

export function ServiceList({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <ul className="space-y-1.5 text-[13px] leading-6 text-[#58696e] md:text-[13.5px]">
      {children}
    </ul>
  );
}

export function ServiceOrderedList({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <ol className="list-decimal space-y-2 pl-5 text-[13px] leading-6 text-[#58696e] marker:font-semibold marker:text-[#16859a] md:text-[13.5px]">
      {children}
    </ol>
  );
}