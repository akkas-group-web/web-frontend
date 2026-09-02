import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CalendarDays, Clock3 } from "lucide-react";

import type { ArticleItem } from "@/types/article";
import { CardMedia } from "@/components/shared/CardMedia";

interface BlogDetailProps {
  article: ArticleItem;
}

export function BlogDetail({ article }: BlogDetailProps) {
  const formattedDate = new Date(article.date).toLocaleDateString("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <main className="overflow-x-hidden bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#F1FAFA] via-[#F8FCFC] to-white">
        <div className="pointer-events-none absolute -left-40 top-0 h-[430px] w-[430px] rounded-full bg-[#118B99]/10 blur-3xl" />

        <div className="pointer-events-none absolute -right-40 top-10 h-[500px] w-[500px] rounded-full bg-[#64CDD4]/10 blur-3xl" />

        <div
          className="pointer-events-none absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: "radial-gradient(#118B99 1px, transparent 1px)",
            backgroundSize: "25px 25px",
          }}
        />

        <div className="relative mx-auto max-w-6xl px-6 pb-12 pt-28 lg:px-8 lg:pb-14 lg:pt-32">
          <Link
            href="/blog"
            className="group mb-8 inline-flex items-center gap-2 text-sm font-semibold text-[#118B99] transition-all duration-300 hover:gap-3 hover:text-[#0C747E]"
          >
            <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
            Bloga Dön
          </Link>

          <div className="mb-5 flex items-center gap-3">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#E1F5F6]">
              <span className="h-2 w-2 rounded-full bg-[#118B99]" />
            </span>

            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#118B99]">
              Akkaş Group Blog
            </span>
          </div>

          <h1 className="max-w-[900px] text-[38px] font-semibold leading-[1.12] tracking-[-0.035em] text-[#16383D] sm:text-[46px] lg:text-[54px]">
            {article.title}
          </h1>

          <p className="mt-5 max-w-[780px] text-base leading-7 text-[#668085] sm:text-[17px] sm:leading-8">
            {article.excerpt}
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3">
            <div className="flex items-center gap-2 text-sm text-[#789095]">
              <CalendarDays className="h-4 w-4 text-[#118B99]" />
              <time>{formattedDate}</time>
            </div>

            <span className="hidden h-4 w-px bg-[#118B99]/20 sm:block" />

            <div className="flex items-center gap-2 text-sm text-[#789095]">
              <Clock3 className="h-4 w-4 text-[#118B99]" />4 dk okuma
            </div>

            {article.author && (
              <>
                <span className="hidden h-4 w-px bg-[#118B99]/20 sm:block" />
                <div className="relative h-8 w-8 overflow-hidden rounded-full ring-2 ring-[#DCF1F2]">
                  <CardMedia
                    src={article.author.photo?.url}
                    alt={article.author.photo?.alt ?? article.author.name}
                    ratio="square"
                    fit="cover"
                  />
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* KAPAK */}
      <section className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="relative aspect-[16/9] overflow-hidden rounded-[24px] bg-[#EAF6F7]">
          <CardMedia
            src={article.image?.url}
            alt={article.image?.alt ?? article.title}
            ratio="wide"
            fit="cover"
          />
        </div>
      </section>

      {/* MAKALE */}
      <section className="mx-auto max-w-6xl px-6 py-14 lg:px-8 lg:py-16">
        <div className="grid gap-12 lg:grid-cols-[210px_minmax(0,720px)] lg:justify-center lg:gap-16">
          {/* SOL YAZAR */}
          <aside className="hidden lg:block">
            <div className="sticky top-28">
              <div className="border-l-2 border-[#118B99]/30 pl-5">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#118B99]">
                  Yazar
                </p>

                {article.author && (
                  <>
                    {article.author.photo?.url && (
                      <div className="relative mt-5 h-14 w-14 overflow-hidden rounded-full bg-[#EAF6F7] ring-4 ring-[#F1FAFA]">
                        <CardMedia
                          src={article.author.photo.url}
                          alt={article.author.photo.alt ?? article.author.name}
                          ratio="square"
                          fit="cover"
                        />
                      </div>
                    )}

                    <p className="mt-4 text-sm font-semibold leading-5 text-[#294F55]">
                      {article.author.name}
                    </p>

                    <p className="mt-1 text-xs leading-5 text-[#789095]">
                      {article.author.role}
                    </p>
                  </>
                )}

                <div className="my-5 h-px w-10 bg-[#118B99]/15" />

                <p className="text-xs leading-5 text-[#82999D]">
                  Uzman görüşleri ve güncel sektörel değerlendirmeler.
                </p>
              </div>
            </div>
          </aside>

          {/* YAZI */}
          <article className="min-w-0">
            <div className="mb-8 flex items-center gap-3">
              <span className="h-[3px] w-10 rounded-full bg-[#118B99]" />

              <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#118B99]">
                Makale
              </span>
            </div>

            <p className="text-[19px] font-medium leading-[1.9] text-[#34565C]">
              {article.excerpt}
            </p>

            <div className="mt-8 text-[16px] leading-[1.95] text-[#526D72] sm:text-[17px]">
              <p>
                İş dünyasında yaşanan gelişmeler, şirketlerin yatırım, büyüme ve
                stratejik planlama süreçlerini doğrudan etkileyebiliyor.
              </p>

              <p className="mt-6">
                Güncel gelişmelerin, mevzuatın ve sektörel değişimlerin doğru
                şekilde takip edilmesi işletmeler açısından önemli avantajlar
                sağlayabilir.
              </p>

              <h2 className="mt-11 text-[25px] font-semibold leading-tight tracking-[-0.025em] text-[#173F45]">
                Firmalar açısından neden önemli?
              </h2>

              <p className="mt-5">
                Doğru zamanda yapılan planlama, işletmelerin fırsatları daha
                etkin değerlendirmesine ve süreçlerini daha sağlıklı yönetmesine
                katkı sağlar.
              </p>

              <p className="mt-6">
                Özellikle teşvik, destek ve mevzuat değişikliklerinde güncel
                bilgilerin doğru yorumlanması büyük önem taşır.
              </p>

              <h2 className="mt-11 text-[25px] font-semibold leading-tight tracking-[-0.025em] text-[#173F45]">
                Süreç nasıl yönetilmeli?
              </h2>

              <p className="mt-5">
                İşletmenin mevcut durumu, yatırım planları ve ihtiyaçları
                değerlendirilerek uygun süreçlerin belirlenmesi gerekir.
              </p>

              <p className="mt-6">
                Akkaş Group olarak işletmelerin ihtiyaç duyduğu güncel bilgileri
                ve uzman görüşlerini paylaşmaya devam ediyoruz.
              </p>
            </div>

            <div className="mt-12 border-t border-[#118B99]/10 pt-8">
              <Link
                href="/blog"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-[#118B99] transition-all hover:gap-3 hover:text-[#0D747E]"
              >
                <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                Tüm Blog Yazılarına Dön
              </Link>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
