import { AppError } from "@/lib/errors/AppError";
import { logger } from "@/lib/logger/logger";
import type { ContactOffice, HomeContent } from "@/types";
import { AboutContent } from "@/types/about";
import { ArticleItem } from "@/types/article";
import { ClientReference } from "@/types/reference";

const articles: ArticleItem[] = [
  {
    id: "1",
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
];

const MOCK_HOME_CONTENT: HomeContent = {
  services: [
    {
      id: "yatirim-danismanligi",
      title: "Yatırım Danışmanlığı",
      description:
        "Yatırım teşvik belgesi, fizibilite raporları ve gümrük vergi muafiyetleri süreçlerinde uçtan uca danışmanlık.",
      href: "/hizmetlerimiz/yatirim-danismanligi",
      icon: "invest",
    },
    {
      id: "tesvik-hibe",
      title: "Teşvik ve Hibe Danışmanlığı",
      description:
        "KOSGEB, TÜBİTAK, Kalkınma Ajansları ve Ticaret Bakanlığı destekleriyle işletmenizi büyütün.",
      href: "/hizmetlerimiz/tesvik-ve-hibe-danismanligi",
      icon: "grant",
    },
    {
      id: "sigorta-tesvik",
      title: "Sigorta Teşvik Sistemi (STS)",
      description:
        "5510 sayılı kanun kapsamındaki SGK prim teşviklerinin tespiti, geriye dönük hesaplama ve cari takip.",
      href: "/hizmetlerimiz/sigorta-tesvik-danismanligi",
      icon: "insurance",
    },
    {
      id: "marka-patent",
      title: "Marka, Patent ve Fikri Mülkiyet",
      description:
        "Marka tescili, patent, endüstriyel tasarım ve coğrafi işaret süreçlerinde vekillik hizmeti.",
      href: "/hizmetlerimiz/marka-patent-fikri-mulkiyet",
      icon: "ip",
    },
    {
      id: "kalite-belgelendirme",
      title: "Kalite Belgelendirme",
      description:
        "ISO 9001, ISO 14001, ISO 27001 ve CE markalama süreçlerinde uçtan uca danışmanlık.",
      href: "/hizmetlerimiz/kalite-sistemleri",
      icon: "quality",
    },
    {
      id: "osgb",
      title: "OSGB — İş Sağlığı ve Güvenliği",
      description:
        "6331 sayılı kanun gereği iş güvenliği uzmanı, işyeri hekimi ve risk değerlendirme hizmetleri.",
      href: "/hizmetlerimiz/osgb-is-sagligi-guvenligi",
      icon: "osgb",
    },
    {
      id: "kvkk",
      title: "KVKK Danışmanlığı",
      description:
        "VERBİS kaydı, veri envanteri, aydınlatma metinleri ve uyumluluk denetimleri.",
      href: "/hizmetlerimiz/kvkk-danismanligi",
      icon: "kvkk",
    },
    {
      id: "akkas-karbon",
      title: "Akkaş Karbon",
      description:
        "Kurumsal karbon ayak izi hesaplama, SKDM raporlaması ve sürdürülebilirlik danışmanlığı.",
      href: "/hizmetlerimiz/akkas-karbon",
      icon: "carbon",
    },
  ],

  articles,
  brands: [
    {
      id: "aker-patent",
      name: "Marka & Patent Vekillik Hizmetleri",
      description:
        "Şirketlerin 21.yy daki ihtiyaçları doğrultusunda kurulmuş sınai mülkiyet alanında hizmet veren bir vekillik şirketidir. Şirketin çalışma alanlarında başta markalar, patentler, endüstriyel tasarımlar olmak üzere coğrafi işaretler, ve entegre devrelerin topografyaları da bulunmaktadır.",
      href: "/markalarimiz/aker-patent",
      logo: "/brands/akerpatent.png",
    },
    {
      id: "akkas-osgb",
      name: "İş Sağlığı ve Güvenliği Hizmetleri",
      description:
        "İş Sağlığı ve Güvenliği konusuna verilen önemin giderek arttığı ülkemizde en son 2013 yılında yürürlüğe giren 6331 sayılı İş Kanunu ile bu konu daha büyük önem arz etmiş durumdadır. Bizlerde bu noktada AKKAŞ ORTAK SAĞLIK GÜVENLİK BİRİMİ olarak Türkiye'de yeni oluşmaya...",
      href: "/markalarimiz/akkas-osgb",
      logo: "/brands/akkasosgb.png",
    },
    {
      id: "aya",
      name: "Teşvik ve Proje Danışmanlığı",
      description:
        "Devlet desteklerinden yararlanabilmek için ilk adımı beraber atalım. Ve beraber koşalım. Kosgeb, Tübitak, Kalkınma Ajansları, Ticaret Bakanlığı, Hazine Müsteşarlığı, Sanayi ve Teknoloji Bakanlığı, Hamle, Kırsal Kalkınma, IPARD, Avrupa Birliği Fonları, Teknoloji Odaklı Hamle Programı, Dünya Bankası Destekleri ile sektörünüzün lideri olun.",
      href: "/markalarimiz/avrupa-yatirim-ajansi",
      logo: "/brands/aya.png",
    },
    {
      id: "erkan-akkas",
      name: "Eğitim ve Danışmanlık",
      description:
        "ISO 9001 - 10002 - 14001 - 18001 - 27001 - TSE HYB (Hizmet Yeterlilik Belgesi) belgelerine sahip firmamız global ekonomik gelişmeler ışığında kaliteli hizmet sunmayı amaçlar. 'Kalite asla bir tesadüf değil, daima akıllı bir gayretin sonucudur.' sözünü Erkan Akkaş Danışmanlık ve Eğitim olarak ilke edinmiş bulunmaktayız.",
      href: "/markalarimiz/erkan-akkas-danismanlik",
      logo: "/brands/erkanakkas.png",
    },
    {
      id: "akkas-kvk",
      name: "Akkaş KVK",
      description: "Kişisel Verilerin Korunması",
      href: "/markalarimiz/akkas-kvk",
      logo: "/brands/akkaskvk.png",
    },
    {
      id: "akkas-stst",
      name: "Akkaş STST",
      description: "Sigorta Teşvik Sistemleri",
      href: "/markalarimiz/akkas-stst",
      logo: "/brands/akkassts.jpg",
    },
    {
      id: "akkas-akademi",
      name: "Akkaş Akademi",
      description: "Eğitim ve Akademi Hizmetleri",
      href: "/markalarimiz/akkas-akademi",
      logo: "/brands/akerakademi.png",
    },
  ],
  sectors: [
    {
      id: "kobiler",
      title: "KOBİ'ler",
      href: "/sektorler/kobiler",
      image: "/sectors/kobi.png",
    },
    {
      id: "holdingler",
      title: "Holdingler",
      href: "/sektorler/holdingler",
      image: "/sectors/holding.png",
    },
    {
      id: "bankalar",
      title: "Bankalar",
      href: "/sektorler/bankalar",
      image: "/sectors/bank.png",
    },
    {
      id: "insaat-enerji",
      title: "İnşaat ve Enerji",
      href: "/sektorler/insaat-ve-enerji",
      image: "/sectors/insaat.png",
    },
    {
      id: "avm-perakende",
      title: "AVM ve Perakende",
      href: "/sektorler/avm-ve-perakende",
      image: "/sectors/perakende.jpg",
    },
    {
      id: "sanayi",
      title: "Sanayi Tesisleri",
      href: "/sektorler/sanayi-tesisleri",
      image: "/sectors/justin.png",
    },
    {
      id: "Gıda",
      title: "Gıda",
      href: "/sektorler/Gıda-sektoru",
      image: "/sectors/gida.png",
    },
    {
      id: "saglik",
      title: "Sağlık, Hastane ve Klinik",
      href: "/sektorler/saglik-hastane-klinik",
      image: "/sectors/saglik.png",
    },
    {
      id: "turizm",
      title: "Turizm",
      href: "/sektorler/turizm",
      image: "/sectors/turizm.png",
    },
  ],
  stats: [
    { id: "years", value: "25+", label: "Yıllık tecrübe (1999'dan beri)" },
    { id: "consultants", value: "200+", label: "Uzman danışman kadrosu" },
    { id: "companies", value: "18.000+", label: "Hizmet verilen firma" },
    { id: "brands", value: "7", label: "Grup şirketi" },
  ],
  announcements: [
    {
      id: "milli-teknoloji-atolyesi",
      title: "Konya'da İki Yeni Milli Teknoloji Atölyesi Faaliyete Girdi",
      excerpt:
        "Sanayi ve Teknoloji Bakanımız Mehmet Fatih Kacır'ın teşrifleriyle Selçuk Üniversitesi ve Necmettin Erbakan Üniversitesi Milli Teknoloji Atölyelerinin açılışı gerçekleştirildi.",
      date: "2026-07-31",
      href: "/blog/milli-teknoloji-atolyesi-konya",
      category: "Teşvikler & Hibeler",
      image: "/announcements/milli-teknoloji-atolyesi.jpeg",
      imageRatio: "landscape",
    },
    {
      id: "tubitak-arge-merkezi",
      title:
        "Çanakkale'de TÜBİTAK Desteğiyle Seramik Teknolojileri Öncül Ar-Ge Merkezi Açıldı",
      excerpt:
        "TÜBİTAK 1515 Öncül Ar-Ge Laboratuvarları Destekleme Programı kapsamında destek verdiğimiz Seramik Teknolojileri Öncül Ar-Ge Merkezi'nin açılışı, TÜBİTAK Başkanımız Prof. Dr. Orhan Aydın'ın katılımıyla gerçekleşti.",
      date: "2026-07-28",
      href: "/blog/tubitak-seramik-arge-merkezi",
      category: "Teşvikler & Hibeler",
      image: "/announcements/tubitak-arge-merkezi.jpeg",
      imageRatio: "landscape",
    },
    {
      id: "cbam",
      title: "CBAM 2. Çeyrek Fiyatı Yayımlandı",
      excerpt:
        "Sınırda Karbon Düzenleme Mekanizması (SKDM) kapsamında 2026 yılı 2. çeyrek referans fiyatları açıklandı. Firmaların raporlama süreçlerini bu doğrultuda güncellemesi gerekiyor.",
      date: "2026-07-20",
      href: "/blog/cbam-2-ceyrek-fiyati-yayimlandi",
      category: "Akkaş Karbon",
      image: "/announcements/cbam.jpeg",
      imageRatio: "square",
    },
    {
      id: "yz-kredi",
      title: "Yapay Zeka Kredi Programı",
      excerpt:
        "KOBİ'lerin yapay zeka dönüşümünü desteklemek amacıyla uygun faizli yeni bir kredi programı yürürlüğe girdi. Başvuru koşulları ve destek üst limitleri açıklandı.",
      date: "2026-07-20",
      href: "/blog/yapay-zeka-kredi-programi",
      category: "Teşvikler & Hibeler",
      image: "/announcements/yz-kredi.jpeg",
      imageRatio: "landscape",
    },
    {
      id: "kapasite",
      title: "Kapasite Geliştirme Destek Programı — 2. Başvuru Dönemi Başladı",
      excerpt:
        "Sanayi işletmelerinin üretim kapasitesini artırmasına yönelik destek programının ikinci başvuru dönemi resmen açıldı. Son başvuru tarihi yakında duyurulacak.",
      date: "2026-06-08",
      href: "/blog/kapasite-gelistirme-destek-programi-2-basvuru-donemi-basladi",
      category: "Teşvikler & Hibeler",
      image: "/announcements/kapasite-gelistirme.jpeg",
      imageRatio: "square",
    },
    {
      id: "verbis",
      title: "VERBİS Kayıt Süresi Uzadı",
      excerpt:
        "Veri Sorumluları Sicili'ne (VERBİS) kayıt yükümlülüğü olan firmalar için son başvuru süresi Kişisel Verileri Koruma Kurulu kararıyla ertelendi.",
      date: "2026-06-01",
      href: "/blog/verbis-kayit-suresi-uzadi",
      category: "KVKK & Mevzuat",
      image: "/announcements/verbis.jpeg",
      imageRatio: "landscape",
    },
  ],
};

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

const MOCK_CLIENT_REFERENCES: ClientReference[] = [
  { id: "1", name: "Solana", logo: "/references/solana.png" },
  { id: "2", name: "Samsung", logo: "/references/samsung.png" },
  { id: "3", name: "Discord", logo: "/references/discord.png" },
  { id: "4", name: "Adobe", logo: "/references/adobe.png" },
  { id: "5", name: "GoodRx", logo: "/references/goodrx.png" },
  { id: "6", name: "Okta", logo: "/references/okta.png" },
  { id: "7", name: "Blizzard", logo: "/references/blizzard.png" },
  { id: "8", name: "Stellar", logo: "/references/stellar.png" },
  { id: "9", name: "Treecard", logo: "/references/treecard.png" },
  { id: "10", name: "PayJunction", logo: "/references/payjunction.png" },
  { id: "11", name: "Chapter", logo: "/references/chapter.png" },
  { id: "12", name: "Berkshire Hathaway", logo: "/references/berkshire.png" },
];

export async function getClientReferences(): Promise<ClientReference[]> {
  try {
    // İleride: await wpClient.query(REFERENCES_QUERY) burada olacak.
    return MOCK_CLIENT_REFERENCES;
  } catch (error) {
    logger.error("Referanslar içeriği alınamadı", { error });
    throw new AppError(
      "Referanslar içeriği yüklenemedi",
      "CONTENT_FETCH_FAILED",
      error,
    );
  }
}

const MOCK_CONTACT_SERVICES = [
  "Kalite Belgelendirme",
  "Eğitimler",
  "Yatırım Danışmanlığı",
  "Fikri ve Sınai Mülkiyet Hakları",
  "Ortak Sağlık ve Güvenlik Birimi Hizmetleri",
  "Devlet Destekleri",
  "Sigorta Teşvik Danışmanlığı",
  "Kişisel Verileri Koruma Danışmanlığı",
  "Akkaş Karbon",
  "ProKVK",
  "Diğer Hizmetlerimiz",
];

const MOCK_CONTACT_OFFICES: ContactOffice[] = [
  {
    id: "istanbul-anadolu",
    city: "İstanbul Asya",
    title: "Merkez Ofis",
    address: "Uzunçayır Cad. Akkaş Plaza No:51 Hasanpaşa-Kadıköy-İSTANBUL",
    phone: "+90 216 450 60 07 (Pbx)",
    email: "info@akkasgroup.com",
  },
  {
    id: "istanbul-avrupa",
    city: "İstanbul Avrupa",
    title: "İstanbul Avrupa",
  },
  {
    id: "tekirdag",
    city: "Tekirdağ",
    title: "Tekirdağ",
  },
  {
    id: "canakkale",
    city: "Çanakkale",
    title: "Çanakkale",
  },
  {
    id: "denizli",
    city: "Denizli",
    title: "Denizli",
  },
  {
    id: "antalya",
    city: "Antalya",
    title: "Antalya",
  },
  {
    id: "kayseri",
    city: "Kayseri",
    title: "Kayseri",
  },
  {
    id: "ankara",
    city: "Ankara",
    title: "Ankara",
  },
  {
    id: "gaziantep",
    city: "Gaziantep",
    title: "Gaziantep",
  },
];

export async function getHomeContent(): Promise<HomeContent> {
  try {
    // İleride: await wpClient.query(HOME_QUERY) burada olacak.
    return MOCK_HOME_CONTENT;
  } catch (error) {
    logger.error("Ana sayfa içeriği alınamadı", { error });
    throw new AppError(
      "Ana sayfa içeriği yüklenemedi",
      "CONTENT_FETCH_FAILED",
      error,
    );
  }
}
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

export async function getContactContent() {
  try {
    // İleride: await wpClient.query(CONTACT_QUERY) burada olacak.
    return {
      services: MOCK_CONTACT_SERVICES,
      offices: MOCK_CONTACT_OFFICES,
    };
  } catch (error) {
    logger.error("İletişim içeriği alınamadı", { error });

    throw new AppError(
      "İletişim içeriği yüklenemedi",
      "CONTENT_FETCH_FAILED",
      error,
    );
  }
}
