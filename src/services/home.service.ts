import { AppError } from "@/lib/errors/AppError";
import { logger } from "@/lib/logger/logger";
import type { HomeContent } from "@/types";
import { articles } from "./blog.service";
import { news } from "./news.service";
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
        "Şirketlerin sınai mülkiyet alanındaki ihtiyaçlarına yönelik profesyonel vekillik hizmetleri sunmaktadır. Çalışma alanları arasında markalar, patentler ve endüstriyel tasarımlar bulunmaktadır.",
      href: "/markalarimiz/aker-patent",
      logo: "/brands/akerpatent.png",
    },
    {
      id: "akkas-osgb",
      name: "İş Sağlığı ve Güvenliği Hizmetleri",
      description:
        "İş sağlığı ve güvenliği alanında işletmelerin ihtiyaçlarına yönelik profesyonel hizmetler sunmaktadır. 6331 sayılı İş Sağlığı ve Güvenliği Kanunu kapsamında işverenlerin yasal yükümlülüklerini yerine getirmelerine destek olmaktadır.",
      href: "http://www.akkasosgb.com/",
      logo: "/brands/akkasosgb.png",
    },
    {
      id: "aya",
      name: "Teşvik ve Proje Danışmanlığı",
      description:
        "Firmaların devlet desteklerinden ve teşviklerden etkin şekilde yararlanmasına yönelik danışmanlık hizmetleri sunmaktadır. KOSGEB, TÜBİTAK, Kalkınma Ajansları ve Ticaret Bakanlığı destekleri başta olmak üzere birçok program kapsamında hizmet vermektedir. ",
      href: "/markalarimiz/avrupa-yatirim-ajansi",
      logo: "/brands/aya.png",
    },
    {
      id: "erkan-akkas",
      name: "Eğitim ve Danışmanlık",
      description:
        "Kalite, yönetim sistemleri ve danışmanlık alanlarında profesyonel hizmetler sunmaktadır. ISO 9001, ISO 10002, ISO 14001, ISO 18001 ve ISO 27001 gibi yönetim sistemi standartlarında danışmanlık sağlamaktadır.",
      href: "/markalarimiz/erkan-akkas-danismanlik",
      logo: "/brands/erkanakkas.png",
    },
    {
      id: "akkas-kvk",
      name: "Akkaş KVK",
      description:
        "Kişisel verilerin korunması alanında danışmanlık hizmetleri sunmaktadır. Kurumların kişisel veri işleme süreçlerini mevzuata uygun şekilde yönetmelerine destek olmaktadır. KVKK kapsamında uyum süreçlerinin oluşturulmasına ve geliştirilmesine katkı sağlamaktadır.",
      href: "/markalarimiz/akkas-kvk",
      logo: "/brands/akkaskvk.png",
    },
    {
      id: "akkas-stst",
      name: "Akkaş STST",
      description:
        "Sigorta teşvik sistemleri alanında işletmelere danışmanlık hizmetleri sunmaktadır. İşletmelerin yararlanabileceği sigorta teşviklerinin belirlenmesine destek olmaktadır. Teşvik süreçlerinin doğru ve etkin şekilde yönetilmesine katkı sağlamaktadır.",
      href: "/markalarimiz/akkas-stst",
      logo: "/brands/akkassts.jpg",
    },
    {
      id: "akkas-akademi",
      name: "Akkaş Akademi",
      description:
        "Eğitim ve akademi alanında kurumların gelişim ihtiyaçlarına yönelik hizmetler sunmaktadır. Mesleki gelişim, kurumsal eğitim ve uzmanlık alanlarında eğitim çözümleri geliştirmektedir. Katılımcıların bilgi ve yetkinliklerini geliştirmeye yönelik programlar hazırlamaktadır.",
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

  announcements: news, // Adım 3'te news.service.ts oluşunca buraya import edilecek
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
