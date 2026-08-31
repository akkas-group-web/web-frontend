import { AppError } from "@/lib/errors/AppError";
import { logger } from "@/lib/logger/logger";
import type { SectorContent } from "@/types/sector";
import { wpClient } from "../../wp/client";
import { GET_SECTORS_QUERY } from "../../wp/queries/sectors";

const MOCK_SECTOR_CONTENT: SectorContent[] = [
  {
    id: "saglik-hastane-klinik",
    slug: "saglik-hastane-klinik",
    title: "Sağlık, Hastane ve Klinik",
    shortTitle: "Sağlık",
    description:
      "Hastane, klinik, tıp merkezi ve sağlık kuruluşlarının operasyonel, mevzuatsal ve kurumsal ihtiyaçlarına yönelik danışmanlık çözümleri.",
    heroDescription:
      "Sağlık kuruluşlarının iş sağlığı ve güvenliği, kişisel verilerin korunması, kalite yönetimi ve mevzuata uyum süreçlerini birlikte ele alıyor; kurumların sürdürülebilir ve güvenli bir yapıyla faaliyet göstermelerine destek oluyoruz.",
    image: {
      url: "/sectors/saglik.png",
      alt: "Sağlık, hastane ve klinik sektörü",
    },
    services: [
      {
        id: "osgb",
        title: "OSGB & İş Sağlığı ve Güvenliği",
        description:
          "Sağlık kuruluşlarının iş sağlığı ve güvenliği yükümlülüklerini mevzuata uygun şekilde yönetmelerine yönelik profesyonel OSGB hizmetleri.",
        categoryId: "osgb",
        icon: "osgb",
      },
      {
        id: "kvkk",
        title: "KVKK Danışmanlığı",
        description:
          "Hasta, çalışan ve ziyaretçi verilerinin korunmasına yönelik KVKK uyum süreçlerinin oluşturulması ve geliştirilmesi.",
        categoryId: "kvkk-danismanligi",
        icon: "kvkk",
      },
      {
        id: "kalite",
        title: "Kalite Sistemleri",
        description:
          "Sağlık kuruluşlarında kalite yönetim sistemlerinin kurulması, geliştirilmesi ve belgelendirme süreçlerine yönelik danışmanlık.",
        categoryId: "kalite-belgelendirme",
        icon: "quality",
      },
      {
        id: "mevzuat-uyum",
        title: "Mevzuat ve Uyum Danışmanlığı",
        description:
          "Sağlık sektöründeki güncel mevzuat ve kurumsal yükümlülüklerin takip edilmesi ve süreçlerin uyumlu şekilde yönetilmesi.",
        categoryId: "diger",
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
      {
        value: "25+",
        label: "Yıllık danışmanlık tecrübesi",
      },
      {
        value: "200+",
        label: "Uzman danışman",
      },
      {
        value: "18.000+",
        label: "Hizmet verilen firma",
      },
    ],
  },
];

interface WPSectorsResponse {
  sectors: {
    nodes: {
      id: string;
      sectorFields: {
        sectorSlug: string;
        shortTitle: string;
        description: string;
        heroDescription: string;
        sectorImage: { node: { sourceUrl: string; altText: string } };
        benefits: string;
        stat1Value: string;
        stat1Label: string;
        stat2Value: string;
        stat2Label: string;
        stat3Value: string;
        stat3Label: string;
      };
    }[];
  };
  sectorServices: {
    nodes: {
      id: string;
      sectorServiceFields: {
        serviceTitle: string;
        description: string;
        icon: string;
        categoryId: string;
        relatedSector: {
          nodes: { id: string }[];
        };
      };
    }[];
  };
}

function mapSectorsFromWP(data: WPSectorsResponse): SectorContent[] {
  return data.sectors.nodes.map((sectorNode) => {
    const fields = sectorNode.sectorFields;

    const relatedServices = data.sectorServices.nodes
      .filter(
        (serviceNode) =>
          serviceNode.sectorServiceFields.relatedSector.nodes[0]?.id ===
          sectorNode.id,
      )
      .map((serviceNode) => ({
        id: serviceNode.id,
        title: serviceNode.sectorServiceFields.serviceTitle,
        description: serviceNode.sectorServiceFields.description,
        categoryId: serviceNode.sectorServiceFields.categoryId,
        icon: serviceNode.sectorServiceFields
          .icon as SectorContent["services"][number]["icon"],
      }));

    return {
      id: sectorNode.id,
      slug: fields.sectorSlug.replace(/^\/+/, ""),
      title: fields.shortTitle,
      shortTitle: fields.shortTitle,
      description: fields.description,
      heroDescription: fields.heroDescription,
      image: {
        url: fields.sectorImage.node.sourceUrl,
        alt: fields.sectorImage.node.altText || fields.shortTitle,
      },
      services: relatedServices,
      benefits: fields.benefits.split("\n").filter(Boolean),
      stats: [
        { value: fields.stat1Value, label: fields.stat1Label },
        { value: fields.stat2Value, label: fields.stat2Label },
        { value: fields.stat3Value, label: fields.stat3Label },
      ].filter((s) => s.value && s.label),
    };
  });
}

export async function getSectors(): Promise<SectorContent[]> {
  try {
    const data = await wpClient.request<WPSectorsResponse>(GET_SECTORS_QUERY);
    return mapSectorsFromWP(data);
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
    const sectors = await getSectors();
    return sectors.find((item) => item.slug === slug) ?? null;
  } catch (error) {
    logger.error("Sektör içeriği alınamadı", { error, slug });

    throw new AppError(
      "Sektör içeriği yüklenemedi",
      "CONTENT_FETCH_FAILED",
      error,
    );
  }
}
