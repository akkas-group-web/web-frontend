import Link from "next/link";
import type { NewsletterStatusContent } from "@/types/newsletter";

interface NewsletterStatusSectionProps {
  content: NewsletterStatusContent;
}

export function NewsletterStatusSection({
  content,
}: NewsletterStatusSectionProps) {
  return (
    <section className="relative overflow-hidden bg-white pt-16 md:pt-20">
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand-primary/[0.06] blur-3xl" />

      <div className="relative mx-auto flex min-h-[50vh] max-w-xl flex-col items-center justify-center px-4 py-16 text-center sm:px-6">
        <h1 className="font-heading text-2xl font-semibold leading-[1.15] tracking-[-0.035em] text-brand-dark sm:text-3xl md:text-4xl">
          {content.title}
        </h1>

        <p className="mt-4 text-sm leading-6 text-muted-foreground md:text-[15px] md:leading-7">
          {content.description}
        </p>

        <Link
          href={content.ctaHref}
          className="mt-8 rounded-full bg-brand-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
        >
          {content.ctaLabel}
        </Link>
      </div>
    </section>
  );
}
