import Link from "next/link";
import { ArrowRight } from "lucide-react";

import type { ServiceCategory } from "@/types/service";

interface ServiceCategoryOverviewProps {
  category: ServiceCategory;
}

export function ServiceCategoryOverview({
  category,
}: ServiceCategoryOverviewProps) {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16 md:py-20">
      <Link
        href="/hizmetlerimiz"
        className="text-sm font-semibold text-[#118B99]"
      >
        ← Tüm Hizmetler
      </Link>

      <h1 className="mt-6 text-3xl font-semibold text-[#173D43] md:text-4xl">
        {category.label}
      </h1>

      <p className="mt-4 max-w-2xl text-base leading-7 text-[#516D72]">
        {category.description}
      </p>

      {category.children?.length ? (
        <div className="mt-10 grid gap-3 md:grid-cols-2">
          {category.children.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              className="group flex items-center justify-between gap-4 rounded-xl border border-[#0d4d5c]/10 bg-white px-5 py-4 text-sm font-medium text-[#26383d] transition-colors hover:border-[#16859a]/40 hover:text-[#16859a]"
            >
              {child.label}
              <ArrowRight className="h-4 w-4 shrink-0 text-[#a1afb2] transition-transform group-hover:translate-x-1 group-hover:text-[#16859a]" />
            </Link>
          ))}
        </div>
      ) : null}
    </main>
  );
}
