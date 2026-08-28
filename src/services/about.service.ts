import { AppError } from "@/lib/errors/AppError";
import { logger } from "@/lib/logger/logger";
import type { AboutContent, TimelineMilestone, ValueItem } from "@/types/about";
import { wpClient } from "../../wp/client";
import { GET_ABOUT_PAGE_QUERY } from "../../wp/queries/about";
import { GET_TIMELINE_ITEMS_QUERY } from "../../wp/queries/timeline";
import { GET_VALUE_ITEMS_QUERY } from "../../wp/queries/values";
import { HomeSummaryContent } from "@/types";

const MOCK_ABOUT_CONTENT: AboutContent = {
  hero: {
    titleHighlight: "Biz",
    titleRest: "Kimiz?",
    description:
      "1999'dan bu yana yatırım, teşvik, marka-patent ve KVKK danışmanlığı alanlarında; kobilerden holdinglere kadar geniş bir yelpazede kurumsal işletmelerin ihtiyaçlarına yönelik uçtan uca danışmanlık çözümleri sunuyoruz.",
    image: {
      url: "/office/akkasgroup.png",
      alt: "Akkaş Group ofisi",
    },
  },
  story: {
    eyebrow: "Kurumsal Hikayemiz",
    title: "Kobilerin can simidi olmak için yola çıktık",
    paragraphs: [
      "Akkaş Group, Marka & Patent Vekili ve Başdenetçi Erkan Akkaş tarafından 1999 yılında İstanbul'da ticari hayatına başladı. 2004 yılında, şirketlerin 21. yüzyıl ihtiyaçları doğrultusunda yatırım ve teşvik danışmanlığı alanına girerek hizmet sektöründeki yerini genişletti.",
      "Türkiye'de ilk kez entegre danışmanlık modelini kobilere taşıyarak, küreselleşen dünyada rekabet edebilmeleri için uçtan uca destek sunduk. Bugün Aker Patent, Akkaş OSGB, Avrupa Yatırım Ajansı, Akkaş STS, Akkaş KVK, Akkaş Karbon ve Akkaş Teknoloji markalarımızla entegre hizmet veren bir şirketler grubuyuz.",
      "Merkezi İstanbul Kadıköy'de bulunan Akkaş Group, 200 kişilik uzman danışman kadrosuyla; kobilerden holdinglere, bankalardan sanayi tesislerine kadar geniş bir yelpazede 18.000'den fazla firmaya hizmet vermeye devam ediyor.",
    ],
    highlightQuote:
      "Firma paydaşı anlayışıyla, müşterilerimizin haberi olmayan her yeniliği önce biz duyuruyoruz.",
    highlightAuthor: "Erkan Akkaş, Kurucu",
    image: {
      url: "/authors/erkan-akkas.jpg",
      alt: "Akkaş Group kurucusu Erkan Akkaş",
    },
  },
  timeline: [
    {
      id: "1999",
      year: "1999",
      title: "Kuruluş",
      description:
        "Erkan Akkaş tarafından İstanbul'da Marka & Patent vekilliği ile ticari hayata başlangıç.",
    },
    {
      id: "2004",
      year: "2004",
      title: "Yatırım & Teşvik Danışmanlığı",
      description:
        "21. yüzyıl ihtiyaçlarına yönelik yatırım ve teşvik danışmanlığı alanına giriş.",
    },
    {
      id: "today",
      year: "Bugün",
      title: "7 Grup Şirketi, 1 Vizyon",
      description:
        "Kadıköy merkezli, 200 danışman ve 18.000'den fazla firmaya entegre hizmet veren Türkiye'nin en büyük danışmanlık gruplarından biri.",
    },
  ],
  visionMission: {
    vision:
      "Uzman ekibimizle yatırım danışmanlığı konusunda şirketlere doğrudan bilgi vererek; büyüme süreçlerinde ve işletme hayatlarında onların yol göstericileri ve yol arkadaşları olmak.",
    mission:
      "Küreselleşen dünyada şirketlerin, kurum ve kuruluşların, şahısların, genç girişimcilerin ve büyüme hedefli şirketlerin yanında olmak; bu hedeflerinde yol göstericileri olmak.",
  },
  values: [
    {
      id: "guvenilirlik",
      title: "Güvenilirlik",
      description:
        "Ticari ahlak ilkelerine uygun çalışır, müşterilerimizi her zaman doğru bilgiyle yönlendiririz.",
    },
    {
      id: "dogrudan-bilgililik",
      title: "Doğrudan Bilgililik",
      description:
        "Müşterilerimizin haberi olmayan her türlü yenilik ve duyurudan önce bizler haberdar oluruz.",
    },
    {
      id: "cozum-odaklilik",
      title: "Çözüm Odaklılık",
      description:
        "Her sektörün kendine özgü ihtiyaçlarına yönelik özel ve uygulanabilir çözümler geliştiririz.",
    },
    {
      id: "hizlilik",
      title: "Hızlılık",
      description:
        "Devlet destekleri ve mevzuat değişikliklerini takip ederek hızlı aksiyon alma imkanı sunarız.",
    },
  ],
  stats: [
    { id: "kurulus", value: "1999", label: "Kuruluş Yılı" },
    { id: "danisman", value: "200+", label: "Uzman Danışman" },
    { id: "firma", value: "18.000+", label: "Hizmet Verilen Firma" },
    { id: "marka", value: "7", label: "Grup Şirketi" },
  ],
};

interface WPAboutPageResponse {
  aboutPages: {
    nodes: {
      id: string;
      aboutstorycontent: {
        heroTitleHighlight: string;
        heroTitleRest: string;
        heroDescription: string;
        heroImage: { node: { sourceUrl: string; altText: string } };
        storyEyebrow: string;
        storyTitle: string;
        storyParagraphs: string;
        storyHighlightQuote: string;
        storyHighlightAuthor: string;
        storyImage: { node: { sourceUrl: string; altText: string } };
        vision: string;
        mission: string;
        stat1Value: string;
        stat1Label: string;
        stat2Value: string;
        stat2Label: string;
        stat3Value: string;
        stat3Label: string;
        stat4Value: string;
        stat4Label: string;
        homeSummaryEyebrow: string;
        homeSummaryTitle: string;
        homeSummaryDescription: string;
        homeSummaryImage: { node: { sourceUrl: string; altText: string } };
      };
    }[];
  };
}

function mapHomeSummaryFromWP(data: WPAboutPageResponse): HomeSummaryContent {
  const fields = data.aboutPages.nodes[0].aboutstorycontent;

  return {
    eyebrow: fields.homeSummaryEyebrow,
    title: fields.homeSummaryTitle,
    description: fields.homeSummaryDescription,
    image: {
      url: fields.homeSummaryImage.node.sourceUrl,
      alt: fields.homeSummaryImage.node.altText || fields.homeSummaryTitle,
    },
  };
}

interface WPTimelineResponse {
  timelineItems: {
    nodes: {
      id: string;
      timelineItemFields: {
        year: string;
        milestone_title: string;
        description: string;
      };
    }[];
  };
}

interface WPValueItemsResponse {
  valueItems: {
    nodes: {
      id: string;
      valueItemFields: {
        value_title: string;
        description: string;
      };
    }[];
  };
}

function mapValuesFromWP(data: WPValueItemsResponse): ValueItem[] {
  return data.valueItems.nodes.map((node) => ({
    id: node.id,
    title: node.valueItemFields.value_title,
    description: node.valueItemFields.description,
  }));
}

function mapTimelineFromWP(data: WPTimelineResponse): TimelineMilestone[] {
  return data.timelineItems.nodes.map((node) => ({
    id: node.id,
    year: node.timelineItemFields.year,
    title: node.timelineItemFields.milestone_title,
    description: node.timelineItemFields.description,
  }));
}

function mapAboutPageFromWP(
  data: WPAboutPageResponse,
): Pick<AboutContent, "hero" | "story" | "visionMission" | "stats"> {
  const fields = data.aboutPages.nodes[0].aboutstorycontent;

  return {
    hero: {
      titleHighlight: fields.heroTitleHighlight,
      titleRest: fields.heroTitleRest,
      description: fields.heroDescription,
      image: {
        url: fields.heroImage.node.sourceUrl,
        alt: fields.heroImage.node.altText || fields.heroTitleHighlight,
      },
    },
    story: {
      eyebrow: fields.storyEyebrow,
      title: fields.storyTitle,
      paragraphs: fields.storyParagraphs.split("\n").filter(Boolean),
      highlightQuote: fields.storyHighlightQuote,
      highlightAuthor: fields.storyHighlightAuthor,
      image: {
        url: fields.storyImage.node.sourceUrl,
        alt: fields.storyImage.node.altText || fields.storyTitle,
      },
    },
    visionMission: {
      vision: fields.vision,
      mission: fields.mission,
    },
    stats: [
      { id: "stat-1", value: fields.stat1Value, label: fields.stat1Label },
      { id: "stat-2", value: fields.stat2Value, label: fields.stat2Label },
      { id: "stat-3", value: fields.stat3Value, label: fields.stat3Label },
      { id: "stat-4", value: fields.stat4Value, label: fields.stat4Label },
    ],
  };
}

export async function getAboutContent(): Promise<AboutContent> {
  try {
    // İleride: await wpClient.query(ABOUT_QUERY) burada olacak.
    //   return MOCK_ABOUT_CONTENT;

    const [data, timelineData, valuesData] = await Promise.all([
      wpClient.request<WPAboutPageResponse>(GET_ABOUT_PAGE_QUERY),
      wpClient.request<WPTimelineResponse>(GET_TIMELINE_ITEMS_QUERY),
      wpClient.request<WPValueItemsResponse>(GET_VALUE_ITEMS_QUERY),
    ]);

    const wpContent = mapAboutPageFromWP(data);
    const timeline = mapTimelineFromWP(timelineData);
    const values = mapValuesFromWP(valuesData);

    return {
      ...MOCK_ABOUT_CONTENT,
      ...wpContent,
      timeline,
      values,
      // timeline ve values henüz CPT'ye bağlanmadı, mock veride kalıyor
    };
  } catch (error) {
    logger.error("Hakkımızda içeriği alınamadı", { error });

    throw new AppError(
      "Hakkımızda içeriği yüklenemedi",
      "CONTENT_FETCH_FAILED",
      error,
    );
  }
}

export async function getHomeSummaryContent(): Promise<HomeSummaryContent> {
  try {
    const data =
      await wpClient.request<WPAboutPageResponse>(GET_ABOUT_PAGE_QUERY);

    console.log("HOME SUMMARY WP:", data.aboutPages.nodes[0].aboutstorycontent);
    return mapHomeSummaryFromWP(data);
  } catch (error) {
    logger.error("Ana sayfa özet içeriği alınamadı", { error });
    throw new AppError(
      "Ana sayfa özet içeriği yüklenemedi",
      "CONTENT_FETCH_FAILED",
      error,
    );
  }
}
