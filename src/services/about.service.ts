import { AppError } from "@/lib/errors/AppError";
import { logger } from "@/lib/logger/logger";
import type { AboutContent } from "@/types/about";

const MOCK_ABOUT_CONTENT: AboutContent = {
  hero: {
    titleHighlight: "Biz",
    titleRest: "Kimiz?",
    description:
      "1999'dan bu yana yatırım, teşvik, marka-patent ve KVKK danışmanlığı alanlarında; kobilerden holdinglere kadar geniş bir yelpazede kurumsal işletmelerin ihtiyaçlarına yönelik uçtan uca danışmanlık çözümleri sunuyoruz.",
    imageSrc: "/office/akkasgroup.png",
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
    imageSrc: "/authors/erkan-akkas.jpg",
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

export async function getAboutContent(): Promise<AboutContent> {
  try {
    // İleride: await wpClient.query(ABOUT_QUERY) burada olacak.
    return MOCK_ABOUT_CONTENT;
  } catch (error) {
    logger.error("Hakkımızda içeriği alınamadı", { error });
    throw new AppError(
      "Hakkımızda içeriği yüklenemedi",
      "CONTENT_FETCH_FAILED",
      error,
    );
  }
}
