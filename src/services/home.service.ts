import { AppError } from "@/lib/errors/AppError";
import { logger } from "@/lib/logger/logger";
import type { HomeContent } from "@/types";
import { articles } from "./blog.service";
import { news } from "./news.service";
import { getServiceCategories } from "./service.service";
import { getClientReferences } from "./reference.service";
import { getHeroSlides } from "./hero.service";
import { getAboutContent } from "./about.service";
import { getHomeSummaryContent } from "./about.service";
import { getSectors } from "./sector.service";

const MOCK_HOME_CONTENT: Omit<
  HomeContent,
  "services" | "clients" | "heroSlides" | "stats" | "homeSummary" | "sectors"
> = {
  articles,

  brands: [
    {
      id: "aker-patent",
      name: "Marka & Patent Vekillik Hizmetleri",
      description:
        "Şirketlerin sınai mülkiyet alanındaki ihtiyaçlarına yönelik profesyonel vekillik hizmetleri sunmaktadır. Çalışma alanları arasında markalar, patentler ve endüstriyel tasarımlar bulunmaktadır.",
      href: "/markalarimiz/aker-patent",
      logo: {
        url: "/brands/akerpatent.png",
        alt: "Aker Patent logosu",
      },
    },
    {
      id: "akkas-osgb",
      name: "İş Sağlığı ve Güvenliği Hizmetleri",
      description:
        "İş sağlığı ve güvenliği alanında işletmelerin ihtiyaçlarına yönelik profesyonel hizmetler sunmaktadır. 6331 sayılı İş Sağlığı ve Güvenliği Kanunu kapsamında işverenlerin yasal yükümlülüklerini yerine getirmelerine destek olmaktadır.",
      href: "http://www.akkasosgb.com/",
      logo: {
        url: "/brands/akkasosgb.png",
        alt: "Akkaş OSGB logosu",
      },
    },
    {
      id: "aya",
      name: "Teşvik ve Proje Danışmanlığı",
      description:
        "Firmaların devlet desteklerinden ve teşviklerden etkin şekilde yararlanmasına yönelik danışmanlık hizmetleri sunmaktadır. KOSGEB, TÜBİTAK, Kalkınma Ajansları ve Ticaret Bakanlığı destekleri başta olmak üzere birçok program kapsamında hizmet vermektedir.",
      href: "/markalarimiz/avrupa-yatirim-ajansi",
      logo: {
        url: "/brands/aya.png",
        alt: "Avrupa Yatırım Ajansı logosu",
      },
    },
    {
      id: "erkan-akkas",
      name: "Eğitim ve Danışmanlık",
      description:
        "Kalite, yönetim sistemleri ve danışmanlık alanlarında profesyonel hizmetler sunmaktadır. ISO 9001, ISO 10002, ISO 14001, ISO 18001 ve ISO 27001 gibi yönetim sistemi standartlarında danışmanlık sağlamaktadır.",
      href: "/markalarimiz/erkan-akkas-danismanlik",
      logo: {
        url: "/brands/erkanakkas.png",
        alt: "Erkan Akkaş Eğitim ve Danışmanlık logosu",
      },
    },
    {
      id: "akkas-kvk",
      name: "Akkaş KVK",
      description:
        "Kişisel verilerin korunması alanında danışmanlık hizmetleri sunmaktadır. Kurumların kişisel veri işleme süreçlerini mevzuata uygun şekilde yönetmelerine destek olmaktadır. KVKK kapsamında uyum süreçlerinin oluşturulmasına ve geliştirilmesine katkı sağlamaktadır.",
      href: "/markalarimiz/akkas-kvk",
      logo: {
        url: "/brands/akkaskvk.png",
        alt: "Akkaş KVK logosu",
      },
    },
    {
      id: "akkas-stst",
      name: "Akkaş STST",
      description:
        "Sigorta teşvik sistemleri alanında işletmelere danışmanlık hizmetleri sunmaktadır. İşletmelerin yararlanabileceği sigorta teşviklerinin belirlenmesine destek olmaktadır. Teşvik süreçlerinin doğru ve etkin şekilde yönetilmesine katkı sağlamaktadır.",
      href: "/markalarimiz/akkas-stst",
      logo: {
        url: "/brands/akkassts.jpg",
        alt: "Akkaş STS logosu",
      },
    },
    {
      id: "akkas-akademi",
      name: "Akkaş Akademi",
      description:
        "Eğitim ve akademi alanında kurumların gelişim ihtiyaçlarına yönelik hizmetler sunmaktadır. Mesleki gelişim, kurumsal eğitim ve uzmanlık alanlarında eğitim çözümleri geliştirmektedir. Katılımcıların bilgi ve yetkinliklerini geliştirmeye yönelik programlar hazırlamaktadır.",
      href: "/markalarimiz/akkas-akademi",
      logo: {
        url: "/brands/akerakademi.png",
        alt: "Akkaş Akademi logosu",
      },
    },
    {
  id: "akkas-teknoloji",
  name: "Akkaş Teknoloji",
  description:
    "Yazılım, bilişim ve dijital dönüşüm alanlarında kurumların ihtiyaçlarına yönelik yenilikçi teknoloji çözümleri sunmaktadır. İş süreçlerinin dijitalleştirilmesine ve daha verimli yönetilmesine destek olmaktadır.",
  href: "/markalarimiz/akkas-teknoloji",
  logo: {
    url: "/brands/akkasteknoloji.png",
    alt: "Akkaş Teknoloji logosu",
  },
},
  ],

  // sectors: [
  //   {
  //     id: "kobiler",
  //     title: "KOBİ'ler",
  //     slug: "kobiler",
  //     image: {
  //       url: "/sectors/kobi.png",
  //       alt: "KOBİ işletmeleri",
  //     },
  //   },
  //   {
  //     id: "holdingler",
  //     title: "Holdingler",
  //     slug: "holdingler",
  //     image: {
  //       url: "/sectors/holding.png",
  //       alt: "Holdingler",
  //     },
  //   },
  //   {
  //     id: "bankalar",
  //     title: "Bankalar",
  //     slug: "bankalar",
  //     image: {
  //       url: "/sectors/bank.png",
  //       alt: "Bankacılık sektörü",
  //     },
  //   },
  //   {
  //     id: "insaat-enerji",
  //     title: "İnşaat ve Enerji",
  //     slug: "insaat-ve-enerji",
  //     image: {
  //       url: "/sectors/insaat.png",
  //       alt: "İnşaat ve enerji sektörü",
  //     },
  //   },
  //   {
  //     id: "avm-perakende",
  //     title: "AVM ve Perakende",
  //     slug: "avm-ve-perakende",
  //     image: {
  //       url: "/sectors/perakende.jpg",
  //       alt: "AVM ve perakende sektörü",
  //     },
  //   },
  //   {
  //     id: "sanayi",
  //     title: "Sanayi Tesisleri",
  //     slug: "sanayi-tesisleri",
  //     image: {
  //       url: "/sectors/justin.png",
  //       alt: "Sanayi tesisleri",
  //     },
  //   },
  //   {
  //     id: "Gıda",
  //     title: "Gıda",
  //     slug: "Gıda-sektoru",
  //     image: {
  //       url: "/sectors/gida.png",
  //       alt: "Gıda sektörü",
  //     },
  //   },
  //   {
  //     id: "saglik",
  //     title: "Sağlık, Hastane ve Klinik",
  //     slug: "saglik-hastane-klinik",
  //     image: {
  //       url: "/sectors/saglik.png",
  //       alt: "Sağlık, hastane ve klinik sektörü",
  //     },
  //   },
  //   {
  //     id: "turizm",
  //     title: "Turizm",
  //     slug: "turizm",
  //     image: {
  //       url: "/sectors/turizm.png",
  //       alt: "Turizm sektörü",
  //     },
  //   },
  // ],

  // stats: [
  //   {
  //     id: "years",
  //     value: "25+",
  //     label: "Yıllık tecrübe (1999'dan beri)",
  //   },
  //   {
  //     id: "consultants",
  //     value: "200+",
  //     label: "Uzman danışman kadrosu",
  //   },
  //   {
  //     id: "companies",
  //     value: "18.000+",
  //     label: "Hizmet verilen firma",
  //   },
  //   {
  //     id: "brands",
  //     value: "7",
  //     label: "Grup şirketi",
  //   },
  // ],

  announcements: news,
};

export async function getHomeContent(): Promise<HomeContent> {
  try {
    const [
      categories,
      clients,
      heroSlides,
      aboutContent,
      homeSummary,
      sectors,
    ] = await Promise.all([
      getServiceCategories(),
      getClientReferences(),
      getHeroSlides(),
      getAboutContent(),
      getHomeSummaryContent(),
      getSectors(),
    ]);

    return {
      ...MOCK_HOME_CONTENT,
      clients,
      heroSlides,
      stats: aboutContent.stats,
      homeSummary,
      sectors: sectors.map((s) => ({
        id: s.id,
        title: s.title,
        slug: s.slug,
        description: s.description,
        image: s.image,
      })),
      services: categories
        .filter((c) => c.featured)
        .map((c) => ({
          id: c.id,
          title: c.label,
          description: c.description,
          href: c.href,
          icon: c.icon,
        })),
    };
  } catch (error) {
    logger.error("Ana sayfa içeriği alınamadı", { error });

    throw new AppError(
      "Ana sayfa içeriği yüklenemedi",
      "CONTENT_FETCH_FAILED",
      error,
    );
  }
}
