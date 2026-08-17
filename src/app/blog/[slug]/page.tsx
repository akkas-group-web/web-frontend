import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  CalendarDays,
  Clock3,
} from "lucide-react";

import { getBlogPostBySlug } from "@/services/content.service";

interface BlogDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({
  params,
}: BlogDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = await getBlogPostBySlug(slug);

  if (!article) {
    return {
      title: "Blog Yazısı Bulunamadı | Akkaş Group",
    };
  }

  return {
    title: `${article.title} | Akkaş Group`,
    description: article.excerpt,
  };
}

export default async function BlogDetailPage({
  params,
}: BlogDetailPageProps) {
  const { slug } = await params;
  const article = await getBlogPostBySlug(slug);

  if (!article) {
    notFound();
  }

  const formattedDate = new Date(article.date).toLocaleDateString("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <main className="overflow-x-hidden bg-white">
      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#F1FAFA] via-[#F8FCFC] to-white">
        {/* Dekoratif turkuaz alanlar */}
        <div className="pointer-events-none absolute -left-40 top-0 h-[430px] w-[430px] rounded-full bg-[#118B99]/8 blur-3xl" />

        <div className="pointer-events-none absolute -right-40 top-10 h-[500px] w-[500px] rounded-full bg-[#64CDD4]/10 blur-3xl" />

        <div
          className="pointer-events-none absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "radial-gradient(#118B99 1px, transparent 1px)",
            backgroundSize: "25px 25px",
          }}
        />

        {/* Header fixed/sticky olduğu için üst boşluk artırıldı */}
        <div className="relative mx-auto max-w-6xl px-6 pb-12 pt-28 lg:px-8 lg:pb-14 lg:pt-32">
          {/* Bloga dön */}
          <Link
            href="/blog"
            className="group mb-8 inline-flex items-center gap-2 text-sm font-semibold text-[#118B99] transition-all duration-300 hover:gap-3 hover:text-[#0C747E]"
          >
            <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
            Bloga Dön
          </Link>

          {/* Label */}
          <div className="mb-5 flex items-center gap-3">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#E1F5F6]">
              <span className="h-2 w-2 rounded-full bg-[#118B99]" />
            </span>

            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#118B99]">
              Akkaş Group Blog
            </span>
          </div>

          {/* Başlık */}
          <h1 className="max-w-[900px] text-[38px] font-semibold leading-[1.12] tracking-[-0.035em] text-[#16383D] sm:text-[46px] lg:text-[54px]">
            {article.title}
          </h1>

          {/* Açıklama */}
          <p className="mt-5 max-w-[780px] text-base leading-7 text-[#668085] sm:text-[17px] sm:leading-8">
            {article.excerpt}
          </p>

          {/* Meta */}
          <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3">
            <div className="flex items-center gap-2 text-sm text-[#789095]">
              <CalendarDays className="h-4 w-4 text-[#118B99]" />
              <time>{formattedDate}</time>
            </div>

            <span className="hidden h-4 w-px bg-[#118B99]/20 sm:block" />

            <div className="flex items-center gap-2 text-sm text-[#789095]">
              <Clock3 className="h-4 w-4 text-[#118B99]" />
              4 dk okuma
            </div>

            {article.author && (
              <>
                <span className="hidden h-4 w-px bg-[#118B99]/20 sm:block" />

                <div className="flex items-center gap-2">
                  {article.author.photo && (
                    <div className="relative h-8 w-8 overflow-hidden rounded-full ring-2 ring-[#DCF1F2]">
                      <Image
                        src={article.author.photo}
                        alt={article.author.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}

                  <span className="text-sm font-semibold text-[#45666B]">
                    {article.author.name}
                  </span>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* =====================================================
          KAPAK GÖRSELİ
      ===================================================== */}
      <section className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="relative aspect-[16/7] overflow-hidden rounded-[22px] bg-[#EAF6F7] shadow-[0_20px_50px_-40px_rgba(17,139,153,0.45)]">
          <Image
            src={article.image}
            alt={article.title}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 960px"
            className="object-cover"
          />
        </div>
      </section>

      {/* =====================================================
          MAKALE
      ===================================================== */}
      <section className="mx-auto max-w-6xl px-6 py-14 lg:px-8 lg:py-16">
        <div className="grid gap-12 lg:grid-cols-[210px_minmax(0,720px)] lg:justify-center lg:gap-16">
          {/* =================================================
              SOL YAZAR KARTI
          ================================================= */}
          <aside className="hidden lg:block">
            <div className="sticky top-28">
              <div className="border-l-2 border-[#118B99]/30 pl-5">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#118B99]">
                  Yazar
                </p>

                {article.author && (
                  <>
                    {article.author.photo && (
                      <div className="relative mt-5 h-14 w-14 overflow-hidden rounded-full bg-[#EAF6F7] ring-4 ring-[#F1FAFA]">
                        <Image
                          src={article.author.photo}
                          alt={article.author.name}
                          fill
                          className="object-cover"
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

          {/* =================================================
              DÜZ MAKALE İÇERİĞİ
          ================================================= */}
          <article className="min-w-0">
            <div className="mb-8 flex items-center gap-3">
              <span className="h-[3px] w-10 rounded-full bg-[#118B99]" />

              <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#118B99]">
                Makale
              </span>
            </div>

            {/* Giriş */}
            <p className="text-[19px] font-medium leading-[1.9] text-[#34565C]">
              {article.excerpt}
            </p>

            {/* Düz metin */}
            <div className="mt-8 text-[16px] leading-[1.95] text-[#526D72] sm:text-[17px]">
              <p>
                İş dünyasında yaşanan gelişmeler, şirketlerin yatırım, büyüme ve
                stratejik planlama süreçlerini doğrudan etkileyebiliyor. Bu
                nedenle güncel mevzuatın, teşvik mekanizmalarının ve sektörel
                değişimlerin düzenli olarak takip edilmesi büyük önem taşıyor.
              </p>

              <p className="mt-6">
                Şirketlerin yalnızca güncel gelişmeleri takip etmesi yeterli
                olmayabilir. Bu gelişmelerin işletmenin mevcut yapısı, yatırım
                planları ve uzun vadeli hedefleri açısından doğru şekilde
                değerlendirilmesi gerekir.
              </p>

              <h2 className="mt-11 text-[25px] font-semibold leading-tight tracking-[-0.025em] text-[#173F45]">
                Firmalar açısından neden önemli?
              </h2>

              <p className="mt-5">
                Doğru zamanda yapılan planlama, işletmelere hem maliyet avantajı
                sağlayabilir hem de yatırım süreçlerinin daha sağlıklı
                ilerlemesine katkıda bulunabilir. Özellikle teşvik, destek ve
                mevzuat değişikliklerinin erken aşamada değerlendirilmesi
                firmaların fırsatlardan daha etkin yararlanmasını sağlar.
              </p>

              <p className="mt-6">
                Bunun yanında şirketlerin kendi faaliyet alanlarına uygun destek
                mekanizmalarını belirlemesi ve başvuru süreçlerini doğru şekilde
                yönetmesi önemlidir. Her destek programının kapsamı, şartları ve
                uygulama süreci farklılık gösterebilir.
              </p>

              <h2 className="mt-11 text-[25px] font-semibold leading-tight tracking-[-0.025em] text-[#173F45]">
                Süreç nasıl yönetilmeli?
              </h2>

              <p className="mt-5">
                İlk aşamada işletmenin mevcut durumu ve yatırım planı detaylı
                şekilde değerlendirilmelidir. Ardından işletmeye uygun
                olabilecek teşvik ve destek mekanizmaları belirlenmeli ve
                gerekli başvuru süreçleri planlanmalıdır.
              </p>

              <p className="mt-6">
                Sürecin yalnızca başvuru aşamasında değil, uygulama ve takip
                aşamalarında da düzenli şekilde yönetilmesi gerekir. Böylece
                firmalar hem mevcut haklarını daha etkin kullanabilir hem de
                olası risklerin önüne geçebilir.
              </p>

              <h2 className="mt-11 text-[25px] font-semibold leading-tight tracking-[-0.025em] text-[#173F45]">
                Güncel gelişmelerin takibi
              </h2>

              <p className="mt-5">
                Mevzuat, destek programları ve başvuru şartları zaman içerisinde
                değişebilir. Bu nedenle şirketlerin güncel düzenlemeleri
                yakından takip etmesi ve gerektiğinde mevcut planlarını bu
                değişikliklere göre güncellemesi önemlidir.
              </p>

              <p className="mt-6">
                Akkaş Group olarak yatırım, teşvik ve kurumsal danışmanlık
                süreçlerinde güncel gelişmeleri takip ederek işletmelerin
                ihtiyaç duyduğu konularda doğru ve uygulanabilir bilgi sunmayı
                amaçlıyoruz.
              </p>
            </div>

            {/* MOBİLDE YAZAR */}
            {article.author && (
              <div className="mt-12 border-t border-[#118B99]/10 pt-7 lg:hidden">
                <div className="flex items-center gap-4">
                  {article.author.photo && (
                    <div className="relative h-12 w-12 overflow-hidden rounded-full bg-[#EAF6F7]">
                      <Image
                        src={article.author.photo}
                        alt={article.author.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}

                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#118B99]">
                      Yazar
                    </p>

                    <p className="mt-1 text-sm font-semibold text-[#31565C]">
                      {article.author.name}
                    </p>

                    <p className="text-xs text-[#789095]">
                      {article.author.role}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Alt dönüş */}
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