export function ContactHero() {
  return (
    <section className="relative overflow-hidden border-b border-brand-dark/10 bg-white pt-20">
      {/* Çok hafif arka plan geçişi */}
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-brand-soft/50 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 pb-9 pt-7 md:px-12 md:pb-10 md:pt-8">
        <div className="max-w-3xl">
          {/* Label */}
          <div className="flex items-center gap-3">
            <span className="h-px w-9 bg-brand-primary" />

            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-primary">
              İletişim
            </span>
          </div>

          {/* Heading */}
          <h1 className="mt-5 font-heading text-3xl font-semibold leading-tight tracking-[-0.035em] text-brand-dark md:text-4xl lg:text-[44px]">
            Akkaş Group ile iletişime geçin.
          </h1>

          {/* Description */}
          <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground md:text-base">
            Sorularınız, projeleriniz ve danışmanlık ihtiyaçlarınız için uzman
            ekibimizle iletişime geçebilir, ihtiyaçlarınıza özel çözümler
            hakkında bilgi alabilirsiniz.
          </p>
        </div>
      </div>
    </section>
  );
}