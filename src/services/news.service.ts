import { AppError } from "@/lib/errors/AppError";
import { logger } from "@/lib/logger/logger";
import type { NewsItem } from "@/types/news";

export const news: NewsItem[] = [
  {
    id: "milli-teknoloji-atolyesi",
    title: "Konya'da İki Yeni Milli Teknoloji Atölyesi Faaliyete Girdi",
    excerpt:
      "Sanayi ve Teknoloji Bakanımız Mehmet Fatih Kacır'ın teşrifleriyle Selçuk Üniversitesi ve Necmettin Erbakan Üniversitesi Milli Teknoloji Atölyelerinin açılışı gerçekleştirildi.",
    date: "2026-07-31",
    href: "/haberler/milli-teknoloji-atolyesi-konya",
    category: "Teşvikler & Hibeler",
    image: {
      url: "/announcements/milli-teknoloji-atolyesi.jpeg",
      alt: "Konya'da açılan Milli Teknoloji Atölyesi",
    },
    imageRatio: "landscape",
    content: [
      "Konya'da teknoloji ve yenilik ekosistemini güçlendirecek iki yeni Milli Teknoloji Atölyesi faaliyete geçti.",
      "Selçuk Üniversitesi ve Necmettin Erbakan Üniversitesi bünyesinde hayata geçirilen atölyelerin, öğrencilerin teknoloji geliştirme ve proje üretme süreçlerine katkı sağlaması hedefleniyor.",
      "Yeni merkezlerin gençlerin yenilikçi teknolojilerle buluşmasına ve üniversite-sanayi iş birliklerinin geliştirilmesine katkı sağlaması bekleniyor.",
    ],
  },
  {
    id: "tubitak-arge-merkezi",
    title:
      "Çanakkale'de TÜBİTAK Desteğiyle Seramik Teknolojileri Öncül Ar-Ge Merkezi Açıldı",
    excerpt:
      "TÜBİTAK 1515 Öncül Ar-Ge Laboratuvarları Destekleme Programı kapsamında destek verdiğimiz Seramik Teknolojileri Öncül Ar-Ge Merkezi'nin açılışı gerçekleştirildi.",
    date: "2026-07-28",
    href: "/haberler/tubitak-seramik-arge-merkezi",
    category: "Teşvikler & Hibeler",
    image: {
      url: "/announcements/tubitak-arge-merkezi.jpeg",
      alt: "TÜBİTAK destekli Seramik Teknolojileri Öncül Ar-Ge Merkezi",
    },
    imageRatio: "landscape",
    content: [
      "TÜBİTAK 1515 Öncül Ar-Ge Laboratuvarları Destekleme Programı kapsamında desteklenen Seramik Teknolojileri Öncül Ar-Ge Merkezi Çanakkale'de faaliyete başladı.",
      "Merkezde seramik teknolojileri alanında yenilikçi ürünlerin ve üretim yöntemlerinin geliştirilmesine yönelik araştırma ve geliştirme çalışmalarının yürütülmesi planlanıyor.",
      "Program kapsamında özel sektör, üniversiteler ve araştırma kuruluşları arasındaki Ar-Ge iş birliklerinin geliştirilmesi hedefleniyor.",
    ],
  },
  {
    id: "cbam",
    title: "CBAM 2. Çeyrek Fiyatı Yayımlandı",
    excerpt:
      "Sınırda Karbon Düzenleme Mekanizması (SKDM) kapsamında 2026 yılı 2. çeyrek referans fiyatları açıklandı. Firmaların raporlama süreçlerini bu doğrultuda güncellemesi gerekiyor.",
    date: "2026-07-20",
    href: "/haberler/cbam-2-ceyrek-fiyati-yayimlandi",
    category: "Akkaş Karbon",
    image: {
      url: "/announcements/cbam.jpeg",
      alt: "CBAM 2. çeyrek referans fiyatı görseli",
    },
    imageRatio: "square",
    content: [
      "Sınırda Karbon Düzenleme Mekanizması kapsamında 2026 yılının ikinci çeyreğine ilişkin referans fiyatları yayımlandı.",
      "Yeni fiyatların özellikle Avrupa Birliği'ne ihracat gerçekleştiren ve CBAM kapsamındaki ürün gruplarında faaliyet gösteren firmaların raporlama süreçlerinde dikkate alınması gerekiyor.",
      "Firmaların emisyon verilerini, raporlama yükümlülüklerini ve maliyet hesaplamalarını güncel referans değerleri doğrultusunda değerlendirmeleri önem taşıyor.",
    ],
  },
  {
    id: "yz-kredi",
    title: "Yapay Zeka Kredi Programı",
    excerpt:
      "KOBİ'lerin yapay zeka dönüşümünü desteklemek amacıyla uygun faizli yeni bir kredi programı yürürlüğe girdi. Başvuru koşulları ve destek üst limitleri açıklandı.",
    date: "2026-07-20",
    href: "/haberler/yapay-zeka-kredi-programi",
    category: "Teşvikler & Hibeler",
    image: {
      url: "/announcements/yz-kredi.jpeg",
      alt: "Yapay Zeka Kredi Programı görseli",
    },
    imageRatio: "landscape",
    content: [
      "KOBİ'lerin dijital dönüşümünü ve yapay zeka teknolojilerinden yararlanmasını desteklemek amacıyla yeni bir kredi programı devreye alındı.",
      "Program kapsamında işletmelerin yapay zeka tabanlı yazılım, otomasyon, veri analitiği ve dijital dönüşüm yatırımlarının finansmanına yönelik imkanlar sunulması hedefleniyor.",
      "Programa başvurmayı planlayan firmaların başvuru şartlarını, kredi limitlerini ve uygun yatırım harcamalarını dikkatle incelemesi gerekiyor.",
    ],
  },
  {
    id: "kapasite",
    title: "Kapasite Geliştirme Destek Programı — 2. Başvuru Dönemi Başladı",
    excerpt:
      "Sanayi işletmelerinin üretim kapasitesini artırmasına yönelik destek programının ikinci başvuru dönemi resmen açıldı. Son başvuru tarihi yakında duyurulacak.",
    date: "2026-06-08",
    href: "/haberler/kapasite-gelistirme-destek-programi-2-basvuru-donemi-basladi",
    category: "Teşvikler & Hibeler",
    image: {
      url: "/announcements/kapasite-gelistirme.jpeg",
      alt: "Kapasite Geliştirme Destek Programı görseli",
    },
    imageRatio: "square",
    content: [
      "Kapasite Geliştirme Destek Programı'nın ikinci başvuru dönemi başladı.",
      "Program ile işletmelerin üretim kapasitesinin artırılması, verimliliğin geliştirilmesi ve büyüme yatırımlarının desteklenmesi amaçlanıyor.",
      "Destekten yararlanmak isteyen firmaların program kriterlerini ve başvuru için talep edilen belgeleri başvuru süresi içerisinde hazırlaması gerekiyor.",
    ],
  },
  {
    id: "verbis",
    title: "VERBİS Kayıt Süresi Uzadı",
    excerpt:
      "Veri Sorumluları Sicili'ne (VERBİS) kayıt yükümlülüğü olan firmalar için son başvuru süresi Kişisel Verileri Koruma Kurulu kararıyla ertelendi.",
    date: "2026-06-01",
    href: "/haberler/verbis-kayit-suresi-uzadi",
    category: "KVKK & Mevzuat",
    image: {
      url: "/announcements/verbis.jpeg",
      alt: "VERBİS kayıt süresi uzatma duyurusu görseli",
    },
    imageRatio: "landscape",
    content: [
      "VERBİS kayıt yükümlülüğü bulunan veri sorumluları için kayıt süresine ilişkin yeni bir düzenleme duyuruldu.",
      "Kayıt yükümlülüğü kapsamında bulunan işletmelerin mevcut durumlarını kontrol ederek gerekli bildirim ve kayıt işlemlerini yeni süre içerisinde tamamlamaları gerekiyor.",
      "Firmaların yalnızca VERBİS kaydını değil, kişisel veri işleme envanteri, aydınlatma yükümlülükleri ve diğer KVKK uyum süreçlerini de birlikte değerlendirmesi önem taşıyor.",
    ],
  },
];

export async function getNews(): Promise<NewsItem[]> {
  try {
    // İleride: await wpClient.query(NEWS_QUERY) burada olacak.
    return news;
  } catch (error) {
    logger.error("Haberler alınamadı", { error });
    throw new AppError("Haberler yüklenemedi", "CONTENT_FETCH_FAILED", error);
  }
}

export async function getNewsBySlug(slug: string): Promise<NewsItem | null> {
  try {
    const newsItem = news.find((item) => item.href === `/haberler/${slug}`);
    return newsItem ?? null;
  } catch (error) {
    logger.error("Haber detayı alınamadı", { error, slug });
    throw new AppError(
      "Haber detayı yüklenemedi",
      "CONTENT_FETCH_FAILED",
      error,
    );
  }
}
