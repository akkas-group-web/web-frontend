import { AppError } from "@/lib/errors/AppError";
import { logger } from "@/lib/logger/logger";
import type { SectorContent } from "@/types/sector";

const MOCK_SECTOR_CONTENT: SectorContent[] = [
  {
    id: "saglik-hastane-klinik",
    title: "Sağlık, Hastane ve Klinik",
    shortTitle: "Sağlık",
    description:
      "Hastane, klinik, tıp merkezi ve sağlık kuruluşlarının operasyonel, mevzuatsal ve kurumsal ihtiyaçlarına yönelik danışmanlık çözümleri.",
    heroDescription:
      "Sağlık kuruluşlarının iş sağlığı ve güvenliği, kişisel verilerin korunması, kalite yönetimi ve mevzuata uyum süreçlerini birlikte ele alıyor; kurumların sürdürülebilir ve güvenli bir yapıyla faaliyet göstermelerine destek oluyoruz.",
    image: "/sectors/saglik.png",
    services: [
      {
        id: "osgb",
        title: "OSGB & İş Sağlığı ve Güvenliği",
        description:
          "Sağlık kuruluşlarının iş sağlığı ve güvenliği yükümlülüklerini mevzuata uygun şekilde yönetmelerine yönelik profesyonel OSGB hizmetleri.",
        href: "/hizmetlerimiz/osgb-is-sagligi-guvenligi",
        icon: "osgb",
      },
      {
        id: "kvkk",
        title: "KVKK Danışmanlığı",
        description:
          "Hasta, çalışan ve ziyaretçi verilerinin korunmasına yönelik KVKK uyum süreçlerinin oluşturulması ve geliştirilmesi.",
        href: "/hizmetlerimiz/kvkk-danismanligi",
        icon: "kvkk",
      },
      {
        id: "kalite",
        title: "Kalite Sistemleri",
        description:
          "Sağlık kuruluşlarında kalite yönetim sistemlerinin kurulması, geliştirilmesi ve belgelendirme süreçlerine yönelik danışmanlık.",
        href: "/hizmetlerimiz/kalite-sistemleri",
        icon: "quality",
      },
      {
        id: "mevzuat-uyum",
        title: "Mevzuat ve Uyum Danışmanlığı",
        description:
          "Sağlık sektöründeki güncel mevzuat ve kurumsal yükümlülüklerin takip edilmesi ve süreçlerin uyumlu şekilde yönetilmesi.",
        href: "/hizmetlerimiz/mevzuat-uyum-danismanligi",
        icon: "compliance",
      },
    ],
    benefits: [
      "İş sağlığı ve güvenliği süreçlerinin mevzuata uygun şekilde yönetilmesi",
      "Hasta ve çalışan verilerinin korunmasına yönelik KVKK süreçlerinin oluşturulması",
      "Kalite yönetim sistemlerinin geliştirilmesi",
      "Mevzuat değişikliklerinin takip edilmesi",
      "Kurumsal risklerin ve uyum ihtiyaçlarının belirlenmesi",
      "Sağlık kuruluşlarının sürdürülebilir bir yönetim yapısına kavuşması",
    ],
    stats: [
      { value: "25+", label: "Yıllık danışmanlık tecrübesi" },
      { value: "200+", label: "Uzman danışman" },
      { value: "18.000+", label: "Hizmet verilen firma" },
    ],
  },
];

export async function getSectors(): Promise<SectorContent[]> {
  try {
    // İleride: await wpClient.query(SECTORS_QUERY) burada olacak.
    return MOCK_SECTOR_CONTENT;
  } catch (error) {
    logger.error("Sektör içerikleri alınamadı", { error });
    throw new AppError(
      "Sektör içerikleri yüklenemedi",
      "CONTENT_FETCH_FAILED",
      error,
    );
  }
}

export async function getSectorBySlug(
  slug: string,
): Promise<SectorContent | null> {
  try {
    const sector = MOCK_SECTOR_CONTENT.find((item) => item.id === slug);
    return sector ?? null;
  } catch (error) {
    logger.error("Sektör içeriği alınamadı", { error, slug });
    throw new AppError(
      "Sektör içeriği yüklenemedi",
      "CONTENT_FETCH_FAILED",
      error,
    );
  }
}
