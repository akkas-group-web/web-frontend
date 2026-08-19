import { AppError } from "@/lib/errors/AppError";
import { logger } from "@/lib/logger/logger";
import type { ArticleItem } from "@/types/article";

export const articles: ArticleItem[] = [
  {
    id: "1",
    title: "2025 Yatırım Teşviklerinde Yeni Dönem",
    excerpt:
      "Yeni teşvik paketiyle birlikte hangi sektörler öne çıkıyor, detayları derledik.",
    date: "2025-03-14T00:00:00.000Z",
    href: "/blog/2025-yatirim-tesvikleri",
    image: "/articles/tesvik.png",
    author: {
      name: "Erkan Akkaş",
      role: "Yönetim Kurulu Başkanı",
      photo: "/authors/erkan-akkas.jpg",
    },
  },
  {
    id: "2",
    title: "KVKK Uyumunda Sık Yapılan 5 Hata",
    excerpt:
      "Denetimlerde en çok karşılaştığımız eksiklikleri ve nasıl önlem alınacağını anlatıyoruz.",
    date: "2025-02-27T00:00:00.000Z",
    href: "/blog/kvkk-sik-hatalar",
    image: "/articles/kvkk-hatalar.jpg",
    author: {
      name: "Ayşe Yılmaz",
      role: "KVKK Danışmanı",
      photo: "/authors/ayse-yilmaz.png",
    },
  },
  {
    id: "3",
    title: "ISO 9001 Belgelendirme Süreci Nasıl İşler?",
    excerpt:
      "Başvurudan sertifikaya kadar adım adım süreç ve firmaların dikkat etmesi gerekenler.",
    date: "2025-02-10T00:00:00.000Z",
    href: "/blog/iso-9001-sureci",
    image: "/articles/iso-9001.png",
    author: {
      name: "Mehmet Kaya",
      role: "Kalite Sistemleri Uzmanı",
      photo: "/images/authors/mehmet-kaya.jpg",
    },
  },
  {
    id: "4",
    title: "İhracatçılar İçin Yeni Dış Ticaret Teşvikleri",
    excerpt:
      "2025 yılında yürürlüğe giren teşviklerden hangi sektörlerin yararlanabileceğini inceledik.",
    date: "2025-01-22T00:00:00.000Z",
    href: "/blog/dis-ticaret-tesvikleri-2025",
    image: "/articles/dis-ticaret.png",
    author: {
      name: "Erkan Akkaş",
      role: "Yönetim Kurulu Başkanı",
      photo: "/authors/erkan-akkas.jpg",
    },
  },
  {
    id: "5",
    title: "2025 Yatırım Teşviklerinde Yeni Dönem",
    excerpt:
      "Yeni teşvik paketiyle birlikte hangi sektörler öne çıkıyor, detayları derledik.",
    date: "2025-03-14T00:00:00.000Z",
    href: "/blog/2025-yatirim-tesvikleri",
    image: "/articles/tesvik.jpg",
    author: {
      name: "Erkan Akkaş",
      role: "Yönetim Kurulu Başkanı",
      photo: "/authors/erkan-akkas.jpg",
    },
  },
];

export async function getBlogPosts(): Promise<ArticleItem[]> {
  try {
    // İleride: await wpClient.query(BLOG_QUERY) burada olacak.
    return articles;
  } catch (error) {
    logger.error("Blog içerikleri alınamadı", { error });
    throw new AppError(
      "Blog içerikleri yüklenemedi",
      "CONTENT_FETCH_FAILED",
      error,
    );
  }
}

export async function getBlogPostBySlug(
  slug: string,
): Promise<ArticleItem | null> {
  try {
    const article = articles.find((item) => item.href === `/blog/${slug}`);
    return article ?? null;
  } catch (error) {
    logger.error("Blog yazısı alınamadı", { error, slug });
    throw new AppError(
      "Blog yazısı yüklenemedi",
      "CONTENT_FETCH_FAILED",
      error,
    );
  }
}
