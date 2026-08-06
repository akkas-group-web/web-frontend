import { AppError } from "@/lib/errors/AppError";
import { logger } from "@/lib/logger/logger";
import type { HomeContent } from "@/types";

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
    { id: "kobiler", title: "KOBİ'ler", href: "/sektorler/kobiler" },
    { id: "holdingler", title: "Holdingler", href: "/sektorler/holdingler" },
    { id: "bankalar", title: "Bankalar", href: "/sektorler/bankalar" },
    {
      id: "insaat-enerji",
      title: "İnşaat ve Enerji",
      href: "/sektorler/insaat-ve-enerji",
    },
    {
      id: "avm-perakende",
      title: "AVM ve Perakende",
      href: "/sektorler/avm-ve-perakende",
    },
    {
      id: "sanayi",
      title: "Sanayi Tesisleri",
      href: "/sektorler/sanayi-tesisleri",
    },
    {
      id: "egitim",
      title: "Eğitim Kurumları",
      href: "/sektorler/egitim-kurumlari",
    },
    {
      id: "saglik",
      title: "Sağlık, Hastane ve Klinik",
      href: "/sektorler/saglik-hastane-klinik",
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
      id: "cbam",
      title: "CBAM 2. Çeyrek Fiyatı Yayımlandı",
      date: "2026-07-20",
      href: "/blog/cbam-2-ceyrek-fiyati-yayimlandi",
      category: "Akkaş Karbon",
    },
    {
      id: "yz-kredi",
      title: "Yapay Zeka Kredi Programı",
      date: "2026-07-20",
      href: "/blog/yapay-zeka-kredi-programi",
      category: "Teşvikler & Hibeler",
    },
    {
      id: "kapasite",
      title: "Kapasite Geliştirme Destek Programı — 2. Başvuru Dönemi Başladı",
      date: "2026-06-08",
      href: "/blog/kapasite-gelistirme-destek-programi-2-basvuru-donemi-basladi",
      category: "Teşvikler & Hibeler",
    },
    {
      id: "verbis",
      title: "VERBİS Kayıt Süresi Uzadı",
      date: "2026-06-01",
      href: "/blog/verbis-kayit-suresi-uzadi",
      category: "KVKK & Mevzuat",
    },
  ],
};

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
