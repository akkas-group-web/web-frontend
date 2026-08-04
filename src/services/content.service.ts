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
      name: "Aker Patent",
      description: "Marka & Patent Vekillik Hizmetleri",
      href: "/markalarimiz/aker-patent",
    },
    {
      id: "akkas-osgb",
      name: "Akkaş OSGB",
      description: "İş Sağlığı ve Güvenliği Hizmetleri",
      href: "/markalarimiz/akkas-osgb",
    },
    {
      id: "aya",
      name: "Avrupa Yatırım Ajansı",
      description: "Teşvik ve Proje Danışmanlığı",
      href: "/markalarimiz/avrupa-yatirim-ajansi",
    },
    {
      id: "akkas-sts",
      name: "Akkaş STS",
      description: "Sigorta Teşvik Sistemleri",
      href: "/markalarimiz/akkas-sts",
    },
    {
      id: "akkas-kvk",
      name: "Akkaş KVK",
      description: "Kişisel Verilerin Korunması",
      href: "/markalarimiz/akkas-kvk",
    },
    {
      id: "akkas-karbon-brand",
      name: "Akkaş Karbon",
      description: "Karbon Ayak İzi ve Sürdürülebilirlik",
      href: "/markalarimiz/akkas-karbon",
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
