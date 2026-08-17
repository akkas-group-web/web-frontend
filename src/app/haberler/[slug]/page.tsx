import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  CalendarDays,
  Clock3,
  Newspaper,
} from "lucide-react";

import { getNewsBySlug } from "@/services/content.service";

interface NewsDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({
  params,
}: NewsDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const news = await getNewsBySlug(slug);

  if (!news) {
    return {
      title: "Haber Bulunamadı | Akkaş Group",
    };
  }

  return {
    title: `${news.title} | Akkaş Group`,
    description: news.excerpt,
  };
}

export default async function NewsDetailPage({
  params,
}: NewsDetailPageProps) {
  const { slug } = await params;
  const news = await getNewsBySlug(slug);

  if (!news) {
    notFound();
  }

  const formattedDate = new Date(news.date).toLocaleDateString("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <main className="overflow-hidden bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-[#118B99]/10 bg-gradient-to-b from-[#F2FAFA] via-[#F8FCFC] to-white">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-44 -top-44 h-[520px] w-[520px] rounded-full bg-[#118B99]/10 blur-3xl" />

          <div
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage:
                "radial-gradient(#118B99 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />
        </div>

        <div className="relative mx-auto max-w-6xl px-6 pb-12 pt-28 lg:px-8 lg:pb-14 lg:pt-32">
          <Link
            href="/haberler"
            className="group mb-8 inline-flex items-center gap-2 text-sm font-semibold text-[#118B99] transition-all hover:gap-3 hover:text-[#0D747E]"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Haberlere Dön
          </Link>

          <div className="grid gap-10 lg:grid-cols-[1fr_270px] lg:items-end">
            {/* SOL */}
            <div>
              <div className="mb-5 flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-2 rounded-full bg-[#E1F4F5] px-3.5 py-2 text-xs font-semibold text-[#118B99]">
                  <Newspaper className="h-3.5 w-3.5" />
                  {news.category}
                </span>

                <div className="flex items-center gap-2 text-sm text-[#789095]">
                  <CalendarDays className="h-4 w-4 text-[#118B99]" />
                  <time>{formattedDate}</time>
                </div>
              </div>

              <h1 className="max-w-[850px] text-[38px] font-semibold leading-[1.12] tracking-[-0.035em] text-[#173D43] sm:text-[46px] lg:text-[54px]">
                {news.title}
              </h1>

              <p className="mt-5 max-w-3xl text-base leading-8 text-[#637E83] sm:text-[17px]">
                {news.excerpt}
              </p>
            </div>

            {/* SAĞ INFO */}
            <div className="hidden lg:block">
              <div className="border-l-2 border-[#118B99]/25 pl-5">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#118B99]">
                  Haber Bilgisi
                </p>

                <div className="mt-4 space-y-3 text-sm text-[#70898D]">
                  <div className="flex items-center gap-2">
                    <CalendarDays className="h-4 w-4 text-[#118B99]" />
                    {formattedDate}
                  </div>

                  <div className="flex items-center gap-2">
                    <Clock3 className="h-4 w-4 text-[#118B99]" />
                    3 dk okuma
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GÖRSEL */}
      <section className="mx-auto max-w-5xl px-6 pt-10 lg:px-8">
        <div className="relative aspect-[16/7] overflow-hidden rounded-[24px] bg-[#EAF6F7] shadow-[0_20px_55px_-40px_rgba(17,139,153,0.4)]">
          <Image
            src={news.image}
            alt={news.title}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 960px"
            className="object-cover"
          />
        </div>
      </section>

      {/* HABER İÇERİĞİ */}
      <section className="mx-auto max-w-6xl px-6 py-14 lg:px-8 lg:py-16">
        <div className="grid gap-12 lg:grid-cols-[190px_minmax(0,720px)] lg:justify-center lg:gap-16">
          {/* SOL KATEGORİ BİLGİSİ */}
          <aside className="hidden lg:block">
            <div className="sticky top-28 border-l-2 border-[#118B99]/25 pl-5">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#118B99]">
                Kategori
              </p>

              <p className="mt-3 text-sm font-semibold leading-6 text-[#31565C]">
                {news.category}
              </p>

              <div className="my-5 h-px w-10 bg-[#118B99]/15" />

              <p className="text-xs leading-5 text-[#82999D]">
                Akkaş Group Haber Merkezi
              </p>
            </div>
          </aside>

          {/* DÜZ HABER METNİ */}
          <article className="min-w-0">
            <div className="mb-8 flex items-center gap-3">
              <span className="h-[3px] w-10 rounded-full bg-[#118B99]" />

              <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#118B99]">
                Haber Detayı
              </span>
            </div>

            <p className="text-[19px] font-medium leading-[1.9] text-[#34575C]">
              {news.excerpt}
            </p>

            <div className="mt-8 space-y-6 text-[17px] leading-[1.95] text-[#516D72]">
              <p>
                İş dünyasını yakından ilgilendiren bu gelişme, ilgili sektörlerde
                faaliyet gösteren firmalar açısından önemli sonuçlar doğurabilir.
                Açıklanan düzenleme ve gelişmelerin kapsamının doğru şekilde
                değerlendirilmesi, şirketlerin planlama süreçlerinde daha
                sağlıklı kararlar almasına katkı sağlayabilir.
              </p>

              <p>
                Özellikle teşvik programları, mevzuat değişiklikleri ve kamu
                desteklerinde uygulama şartlarının, başvuru tarihlerinin ve
                kapsamın yakından takip edilmesi önem taşıyor.
              </p>

              <h2 className="pt-4 text-2xl font-semibold tracking-[-0.025em] text-[#173F45]">
                Gelişmenin firmalara etkisi
              </h2>

              <p>
                Firmaların kendi faaliyet alanları ve mevcut yatırım planları
                doğrultusunda söz konusu gelişmeyi değerlendirmeleri gerekiyor.
                Her işletmenin ihtiyaçları ve yararlanabileceği imkanlar farklı
                olduğundan, süreçlerin şirket özelinde ele alınması daha doğru
                sonuçlar sağlayabilir.
              </p>

              <p>
                Güncel gelişmelerin zamanında takip edilmesi, işletmelerin
                fırsatlardan daha etkin yararlanmasına ve olası riskleri erken
                aşamada görmesine yardımcı olabilir.
              </p>

              <h2 className="pt-4 text-2xl font-semibold tracking-[-0.025em] text-[#173F45]">
                Süreç nasıl takip edilmeli?
              </h2>

              <p>
                Yeni düzenlemeler ve destek mekanizmalarıyla ilgili resmi
                duyuruların düzenli olarak incelenmesi, gerekli şartların
                değerlendirilmesi ve başvuru süreçlerinin zamanında
                planlanması önemlidir.
              </p>

              <p>
                Akkaş Group olarak iş dünyasını ilgilendiren güncel gelişmeleri,
                destek programlarını ve mevzuat değişikliklerini takip ederek
                firmaların ihtiyaç duyduğu bilgileri aktarmaya devam ediyoruz.
              </p>
            </div>

            <div className="mt-12 border-t border-[#118B99]/10 pt-8">
              <Link
                href="/haberler"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-[#118B99] transition-all hover:gap-3 hover:text-[#0D747E]"
              >
                <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                Tüm Haberlere Dön
              </Link>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}