export function ContactHero() {
  return (
    <section className="relative overflow-hidden border-b border-brand-dark/10 bg-white pt-16 md:pt-20">
      {/* Hafif arka plan geçişi */}
      <div className="pointer-events-none absolute inset-y-0 right-0 w-[38%] bg-gradient-to-l from-brand-soft/40 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 pb-6 pt-4 sm:px-6 md:px-12 md:pb-8 md:pt-5">
        <div className="max-w-3xl">
          {/* Label */}
          <div className="flex items-center gap-3">
            <span className="h-px w-9 bg-brand-primary" />

            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-primary">
              İletişim
            </span>
          </div>

          {/* Heading */}
          <h1 className="mt-3 font-heading text-2xl font-semibold leading-[1.15] tracking-[-0.035em] text-brand-dark sm:text-3xl md:text-4xl lg:text-[40px]">
            Akkaş Group ile iletişime geçin.
          </h1>

          {/* Description */}
          <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground md:text-[15px] md:leading-7">
            Sorularınız, projeleriniz ve danışmanlık ihtiyaçlarınız için uzman
            ekibimizle iletişime geçebilir, ihtiyaçlarınıza özel çözümler
            hakkında bilgi alabilirsiniz.
          </p>
        </div>
      </div>
    </section>
  );
}