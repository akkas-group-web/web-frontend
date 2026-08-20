import { AppError } from "@/lib/errors/AppError";
import { logger } from "@/lib/logger/logger";
import type { ServiceCategory, ServiceDetail } from "@/types/service";

const MOCK_SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: "kalite-belgelendirme",
    label: "Kalite Belgelendirme",
    href: "/hizmetlerimiz/kalite-belgelendirme",
    description:
      "ISO 9001, ISO 14001, ISO 27001 ve CE markalama süreçlerinde uçtan uca danışmanlık.",
    icon: "quality",
    featured: true,
    children: [
      {
        label: "Helal Gıda Belgesi",
        href: "/hizmetlerimiz/kalite-belgelendirme/helal-gida-belgesi",
      },
      {
        label: "ISO 14001 Çevre Yönetim Sistemi",
        href: "/hizmetlerimiz/kalite-belgelendirme/iso-14001",
      },
      {
        label: "ISO 9001:2015 Kalite Yönetim Sistemi",
        href: "/hizmetlerimiz/kalite-belgelendirme/iso-9001",
      },
      {
        label: "ISO 22000 HACCP Gıda Güvenliği",
        href: "/hizmetlerimiz/kalite-belgelendirme/iso-22000",
      },
      {
        label: "OHSAS 18001 İş Sağlığı ve İş Güvenliği",
        href: "/hizmetlerimiz/kalite-belgelendirme/ohsas-18001",
      },
      {
        label: "ISO/TS 16949",
        href: "/hizmetlerimiz/kalite-belgelendirme/iso-ts-16949",
      },
      {
        label: "CE Markalama",
        href: "/hizmetlerimiz/kalite-belgelendirme/ce-markalama",
      },
      {
        label: "ISO 27001 Bilgi Güvenliği Yönetim Sistemi",
        href: "/hizmetlerimiz/kalite-belgelendirme/iso-27001",
      },
      {
        label: "ISO 10002 Müşteri Memnuniyeti Belgesi",
        href: "/hizmetlerimiz/kalite-belgelendirme/iso-10002",
      },
      {
        label: "Hijyen Belgesi",
        href: "/hizmetlerimiz/kalite-belgelendirme/hijyen-belgesi",
      },
      {
        label: "GAP - İyi Tarım Uygulamaları",
        href: "/hizmetlerimiz/kalite-belgelendirme/gap-iyi-tarim",
      },
    ],
  },
  {
    id: "egitimler",
    label: "Eğitimler",
    href: "/hizmetlerimiz/egitimler",
    description:
      "Kalite, satış, liderlik ve KVKK gibi alanlarda kurumsal eğitim programları.",
    icon: "education",
    featured: true,
    children: [
      {
        label: "Kalite Yönetim Sistemi Eğitimleri",
        href: "/hizmetlerimiz/egitimler/kalite-yonetim-sistemi-egitimleri",
      },
      {
        label: "Fikri ve Sınai Mülki Haklar Eğitimleri",
        href: "/hizmetlerimiz/egitimler/fikri-sinai-mulki-haklar-egitimleri",
      },
      {
        label: "Müşteri İlişkileri Yönetimi Eğitimleri",
        href: "/hizmetlerimiz/egitimler/musteri-iliskileri-yonetimi-egitimleri",
      },
      {
        label: "Uygulamalı Psikolojik Satış Teknikleri",
        href: "/hizmetlerimiz/egitimler/uygulamali-psikolojik-satis-teknikleri",
      },
      {
        label: "Müşteri Memnuniyeti Eğitimleri",
        href: "/hizmetlerimiz/egitimler/musteri-memnuniyeti-egitimleri",
      },
      {
        label: "Ar-Ge Teşvikleri Eğitimleri",
        href: "/hizmetlerimiz/egitimler/arge-tesvikleri-egitimleri",
      },
      {
        label: "Devlet Destekleri Eğitimleri",
        href: "/hizmetlerimiz/egitimler/devlet-destekleri-egitimleri",
      },
      {
        label: "NLP Eğitimleri",
        href: "/hizmetlerimiz/egitimler/nlp-egitimleri",
      },
      {
        label: "Kurumsal Pazarlama Eğitimleri",
        href: "/hizmetlerimiz/egitimler/kurumsal-pazarlama-egitimleri",
      },
      {
        label: "Hijyen Belgesi Eğitimleri",
        href: "/hizmetlerimiz/egitimler/hijyen-belgesi-egitimleri",
      },
      {
        label: "Satış Pazarlama Eğitimleri",
        href: "/hizmetlerimiz/egitimler/satis-pazarlama-egitimleri",
      },
      {
        label: "Dış Ticaret Mevzuatı Eğitimleri",
        href: "/hizmetlerimiz/egitimler/dis-ticaret-mevzuati-egitimleri",
      },
    ],
  },
  {
    id: "yatirim-danismanligi",
    label: "Yatırım Danışmanlığı",
    href: "/hizmetlerimiz/yatirim-danismanligi",
    description:
      "Yatırım teşvik belgesi, fizibilite raporları ve gümrük vergi muafiyetleri süreçlerinde uçtan uca danışmanlık.",
    icon: "invest",
    featured: true,
    children: [
      {
        label: "Dahilde İşleme İzin Belgesi",
        href: "/hizmetlerimiz/yatirim-danismanligi/dahilde-isleme-izin-belgesi",
      },
      {
        label: "Hariçte İşleme İzin Belgesi",
        href: "/hizmetlerimiz/yatirim-danismanligi/haricte-isleme-izin-belgesi",
      },
      {
        label: "Turizm İşletme Belgesi",
        href: "/hizmetlerimiz/yatirim-danismanligi/turizm-isletme-belgesi",
      },
      {
        label: "Turizm Yatırım Teşvik Belgesi",
        href: "/hizmetlerimiz/yatirim-danismanligi/turizm-yatirim-tesvik-belgesi",
      },
      {
        label: "Yatırım Fizibilite Raporlarının Hazırlanması",
        href: "/hizmetlerimiz/yatirim-danismanligi/yatirim-fizibilite-raporlari",
      },
      {
        label: "Yatırım Teşvik Belgesi",
        href: "/hizmetlerimiz/yatirim-danismanligi/yatirim-tesvik-belgesi",
      },
      {
        label: "Yatırım Teşvik Belgesi Gümrük Vergi Muafiyetleri",
        href: "/hizmetlerimiz/yatirim-danismanligi/gumruk-vergi-muafiyetleri",
      },
      {
        label: "Dijital Dönüşüm Destek Programı",
        href: "/hizmetlerimiz/yatirim-danismanligi/dijital-donusum-destek-programi",
      },
      {
        label: "Yatırım Taahhütlü Avans Kredisi",
        href: "/hizmetlerimiz/yatirim-danismanligi/yatirim-taahhutlu-avans-kredisi",
      },
      {
        label: "Yeşil Dönüşüm Destek Programı",
        href: "/hizmetlerimiz/yatirim-danismanligi/yesil-donusum-destek-programi",
      },
      {
        label: "Teknoloji Odaklı Sanayi Hamle Programı",
        href: "/hizmetlerimiz/yatirim-danismanligi/teknoloji-odakli-sanayi-hamle-programi",
      },
    ],
  },
  {
    id: "fikri-sinai-mulkiyet",
    label: "Fikri ve Sınai Mülkiyet Hakları",
    href: "/hizmetlerimiz/fikri-sinai-mulkiyet",
    description:
      "Marka tescili, patent, endüstriyel tasarım ve coğrafi işaret süreçlerinde vekillik hizmeti.",
    icon: "ip",
    featured: true,
    children: [
      {
        label: "Marka Tescili",
        href: "/hizmetlerimiz/fikri-sinai-mulkiyet/marka-tescili",
      },
      {
        label: "Yurt Dışı Marka Tescili",
        href: "/hizmetlerimiz/fikri-sinai-mulkiyet/yurt-disi-marka-tescili",
      },
      {
        label: "Patent ve Faydalı Model",
        href: "/hizmetlerimiz/fikri-sinai-mulkiyet/patent-faydali-model",
      },
      {
        label: "Tasarım Tescili",
        href: "/hizmetlerimiz/fikri-sinai-mulkiyet/tasarim-tescili",
      },
      {
        label: "Coğrafi İşaret Tescili",
        href: "/hizmetlerimiz/fikri-sinai-mulkiyet/cografi-isaret-tescili",
      },
      {
        label: "Entegre Devre Topografyaları",
        href: "/hizmetlerimiz/fikri-sinai-mulkiyet/entegre-devre-topografyalari",
      },
      {
        label: "Uluslararası Patent Araştırması",
        href: "/hizmetlerimiz/fikri-sinai-mulkiyet/uluslararasi-patent-arastirmasi",
      },
      {
        label: "Uluslararası Marka Araştırması",
        href: "/hizmetlerimiz/fikri-sinai-mulkiyet/uluslararasi-marka-arastirmasi",
      },
      {
        label: "Telif Hakları",
        href: "/hizmetlerimiz/fikri-sinai-mulkiyet/telif-haklari",
      },
    ],
  },
  {
    id: "osgb",
    label: "Ortak Sağlık ve Güvenlik Birimi Hizmetlerimiz",
    href: "/hizmetlerimiz/osgb",
    description:
      "6331 sayılı kanun gereği iş güvenliği uzmanı, işyeri hekimi ve risk değerlendirme hizmetleri.",
    icon: "osgb",
    featured: true,
    children: [
      {
        label: "İş Güvenliği Uzmanlığı Hizmeti",
        href: "/hizmetlerimiz/osgb/is-guvenligi-uzmanligi",
      },
      {
        label: "İşyeri Hekimliği Hizmeti",
        href: "/hizmetlerimiz/osgb/isyeri-hekimligi",
      },
      {
        label: "Diğer Sağlık Personeli Hizmeti",
        href: "/hizmetlerimiz/osgb/diger-saglik-personeli",
      },
      {
        label: "Risk Değerlendirmesi",
        href: "/hizmetlerimiz/osgb/risk-degerlendirmesi",
      },
      {
        label: "Acil Durum Planı",
        href: "/hizmetlerimiz/osgb/acil-durum-plani",
      },
      {
        label: "Patlamadan Korunma Dokümanı",
        href: "/hizmetlerimiz/osgb/patlamadan-korunma-dokumani",
      },
      {
        label: "İş Sağlığı ve Güvenliği Eğitimleri",
        href: "/hizmetlerimiz/osgb/is-sagligi-ve-guvenligi-egitimleri",
      },
    ],
  },
  {
    id: "devlet-destekleri",
    label: "Devlet Destekleri",
    href: "/hizmetlerimiz/devlet-destekleri",
    description:
      "KOSGEB, TÜBİTAK, Kalkınma Ajansları ve Ticaret Bakanlığı destekleriyle işletmenizi büyütün.",
    icon: "grant",
    featured: true,
    children: [
      {
        label: "Ticaret Bakanlığı Destekleri",
        href: "/hizmetlerimiz/devlet-destekleri/ticaret-bakanligi-destekleri",
      },
      {
        label: "KOSGEB Destekleri",
        href: "/hizmetlerimiz/devlet-destekleri/kosgeb-destekleri",
      },
      {
        label: "TÜBİTAK Destekleri",
        href: "/hizmetlerimiz/devlet-destekleri/tubitak-destekleri",
      },
      {
        label: "Dış Ticaret Destekleri",
        href: "/hizmetlerimiz/devlet-destekleri/dis-ticaret-destekleri",
      },
      {
        label: "Ulaştırma Bakanlığı Destekleri",
        href: "/hizmetlerimiz/devlet-destekleri/ulastirma-bakanligi-destekleri",
      },
      {
        label: "Kalkınma Ajansları Destekleri",
        href: "/hizmetlerimiz/devlet-destekleri/kalkinma-ajanslari-destekleri",
      },
      {
        label: "Kırsal Kalkınma Destekleri",
        href: "/hizmetlerimiz/devlet-destekleri/kirsal-kalkinma-destekleri",
      },
      {
        label: "TKDK Destekleri",
        href: "/hizmetlerimiz/devlet-destekleri/tkdk-destekleri",
      },
      {
        label: "IPARD Destekleri",
        href: "/hizmetlerimiz/devlet-destekleri/ipard-destekleri",
      },
      {
        label: "Avrupa Birliği Fonları",
        href: "/hizmetlerimiz/devlet-destekleri/avrupa-birligi-fonlari",
      },
      {
        label: "Sanayi ve Teknoloji Bakanlığı Destekleri",
        href: "/hizmetlerimiz/devlet-destekleri/sanayi-teknoloji-bakanligi-destekleri",
      },
      {
        label: "Yeşil Sanayi Destekleri",
        href: "/hizmetlerimiz/devlet-destekleri/yesil-sanayi-destekleri",
      },
      {
        label: "Ar-Ge Merkezi Destekleri",
        href: "/hizmetlerimiz/devlet-destekleri/arge-merkezi-destekleri",
      },
      {
        label: "Tasarım Merkezi Destekleri",
        href: "/hizmetlerimiz/devlet-destekleri/tasarim-merkezi-destekleri",
      },
    ],
  },
  {
    id: "sigorta-tesvik-danismanligi",
    label: "Sigorta Teşvik Danışmanlığı",
    href: "/hizmetlerimiz/sigorta-tesvik-danismanligi",
    description:
      "5510 sayılı kanun kapsamındaki SGK prim teşviklerinin tespiti, geriye dönük hesaplama ve cari takip.",
    icon: "insurance",
    featured: true,
    children: [
      {
        label: "STS Hizmetleri",
        href: "/hizmetlerimiz/sigorta-tesvik-danismanligi/sts-hizmetleri",
      },
      {
        label: "Geçmiş Dönem Teşvik Hesaplamaları",
        href: "/hizmetlerimiz/sigorta-tesvik-danismanligi/gecmis-donem-tesvik-hesaplamalari",
      },
      {
        label: "Cari Dönem Takipleri - 6111",
        href: "/hizmetlerimiz/sigorta-tesvik-danismanligi/cari-donem-takipleri-6111",
      },
      {
        label:
          "6645 İşbaşı Eğitim Programını Tamamlayanların İstihdamına Yönelik Teşvik",
        href: "/hizmetlerimiz/sigorta-tesvik-danismanligi/6645-isbasi-egitim-istihdam-tesviki",
      },
      {
        label: "14857 Engelli Sigortalı İstihdamına Yönelik Teşvik",
        href: "/hizmetlerimiz/sigorta-tesvik-danismanligi/14857-engelli-sigortali-istihdam-tesviki",
      },
      {
        label:
          "15746 Araştırma, Geliştirme ve Tasarım Faaliyetlerine İlişkin Teşvik",
        href: "/hizmetlerimiz/sigorta-tesvik-danismanligi/15746-arastirma-gelistirme-tasarim-tesviki",
      },
      {
        label:
          "5225 - 55225 - 25225 Kültür Yatırımları ve Girişimleri Hakkında Uygulanan Sigorta Primi Teşviki",
        href: "/hizmetlerimiz/sigorta-tesvik-danismanligi/kultur-yatirimlari-sigorta-primi-tesviki",
      },
      {
        label:
          "5510 Malullük, Yaşlılık ve Ölüm Sigortası İşveren Hissesinden 5 Puanlık İndirim",
        href: "/hizmetlerimiz/sigorta-tesvik-danismanligi/5510-bes-puanlik-indirim",
      },
      {
        label:
          "5510 - 6486 Yurtdışına Götürülen/Gönderilen Sigortalılara Uygulanan 5 Puanlık Prim İndirimi",
        href: "/hizmetlerimiz/sigorta-tesvik-danismanligi/5510-6486-yurtdisi-bes-puanlik-prim-indirimi",
      },
      {
        label: "5510 - 46486, 56486, 66486 İlave 6 Puanlık Prim İndirimi",
        href: "/hizmetlerimiz/sigorta-tesvik-danismanligi/ilave-alti-puanlik-prim-indirimi",
      },
      {
        label:
          "5510 - 25510, 16322, 26322 Yatırımlarda Devlet Yardımları Hakkında Kararlar Uyarınca Uygulanan Teşvik",
        href: "/hizmetlerimiz/sigorta-tesvik-danismanligi/yatirimlarda-devlet-yardimlari-tesviki",
      },
      {
        label:
          "4447 - 15921 İşsizlik Ödeneği Alanların İstihdamı Halinde Uygulanan Prim Teşviki",
        href: "/hizmetlerimiz/sigorta-tesvik-danismanligi/issizlik-odenegi-istihdam-prim-tesviki",
      },
    ],
  },
  {
    id: "kvkk-danismanligi",
    label: "Kişisel Verileri Koruma Danışmanlığı",
    href: "/hizmetlerimiz/kvkk-danismanligi",
    description:
      "VERBİS kaydı, veri envanteri, aydınlatma metinleri ve uyumluluk denetimleri.",
    icon: "kvkk",
    featured: true,
    children: [
      { label: "GDPR", href: "/hizmetlerimiz/kvkk-danismanligi/gdpr" },
      {
        label: "VERBİS Sistemine Kayıt Yapılması",
        href: "/hizmetlerimiz/kvkk-danismanligi/verbis-sistemine-kayit-yapilmasi",
      },
      {
        label: "Veri Envanteri Hazırlanması",
        href: "/hizmetlerimiz/kvkk-danismanligi/veri-envanteri-hazirlanmasi",
      },
      {
        label: "Farkındalık Eğitimlerinin Yapılması",
        href: "/hizmetlerimiz/kvkk-danismanligi/farkindalik-egitimlerinin-yapilmasi",
      },
      {
        label: "Aydınlatma Metinlerinin Hazırlanması",
        href: "/hizmetlerimiz/kvkk-danismanligi/aydinlatma-metinlerinin-hazirlanmasi",
      },
      {
        label: "Açık Rızaların Hazırlanması",
        href: "/hizmetlerimiz/kvkk-danismanligi/acik-rizalarin-hazirlanmasi",
      },
      {
        label: "Güvenlik Önlemlerinin Belirlenmesi",
        href: "/hizmetlerimiz/kvkk-danismanligi/guvenlik-onlemlerinin-belirlenmesi",
      },
      {
        label: "Politikaların Hazırlanması",
        href: "/hizmetlerimiz/kvkk-danismanligi/politikalarin-hazirlanmasi",
      },
      {
        label: "Denetimlerin Yapılması",
        href: "/hizmetlerimiz/kvkk-danismanligi/denetimlerin-yapilmasi",
      },
    ],
  },
  {
    id: "akkas-karbon",
    label: "Akkaş Karbon",
    href: "/hizmetlerimiz/akkas-karbon",
    description:
      "Kurumsal karbon ayak izi hesaplama, SKDM raporlaması ve sürdürülebilirlik danışmanlığı.",
    icon: "carbon",
    featured: true,
    children: [
      {
        label: "SKDM Başladı",
        href: "/hizmetlerimiz/akkas-karbon/skdm-basladi",
      },
      {
        label: "Akkaş Karbon Nedir?",
        href: "/hizmetlerimiz/akkas-karbon/akkas-karbon-nedir",
      },
      {
        label: "Karbon Ayak İzi Nedir?",
        href: "/hizmetlerimiz/akkas-karbon/karbon-ayak-izi-nedir",
      },
      {
        label: "Kurumsal Karbon Ayak İzi Hesaplama",
        href: "/hizmetlerimiz/akkas-karbon/kurumsal-karbon-ayak-izi-hesaplama",
      },
      {
        label: "Kurumsal Karbon Ayak İzi Raporlama",
        href: "/hizmetlerimiz/akkas-karbon/kurumsal-karbon-ayak-izi-raporlama",
      },
      {
        label: "Kurumsal Su Ayak İzi Hesaplama",
        href: "/hizmetlerimiz/akkas-karbon/kurumsal-su-ayak-izi-hesaplama",
      },
      {
        label: "Kurumsal Su Ayak İzi Raporlama",
        href: "/hizmetlerimiz/akkas-karbon/kurumsal-su-ayak-izi-raporlama",
      },
    ],
  },
  {
    id: "prokvk",
    label: "ProKVK",
    href: "/hizmetlerimiz/prokvk",
    description:
      "KVKK süreçlerini dijitalleştiren yazılım: aydınlatma metni, açık rıza ve taahhütname yönetimi.",
    icon: "prokvk",
    featured: true,
    children: [
      { label: "ProKVK Nedir?", href: "/hizmetlerimiz/prokvk/prokvk-nedir" },
      {
        label: "ProKVK Özellikleri",
        href: "/hizmetlerimiz/prokvk/prokvk-ozellikleri",
      },
      {
        label: "Aydınlatma Metni Yönetimi",
        href: "/hizmetlerimiz/prokvk/aydinlatma-metni-yonetimi",
      },
      {
        label: "Açık Rıza Yönetimi",
        href: "/hizmetlerimiz/prokvk/acik-riza-yonetimi",
      },
      {
        label: "Gizlilik Sözleşmeleri",
        href: "/hizmetlerimiz/prokvk/gizlilik-sozlesmeleri",
      },
      {
        label: "KVKK Taahhütnameleri",
        href: "/hizmetlerimiz/prokvk/kvkk-taahhutnameleri",
      },
    ],
  },
  {
    id: "diger",
    label: "Diğer Hizmetlerimiz",
    href: "/hizmetlerimiz/diger",
    description:
      "Kapasite raporu, ÇED belgesi, çalışma izni ve daha fazla kurumsal danışmanlık hizmeti.",
    icon: "other",
    featured: true,
    children: [
      {
        label: "Uluslararası AR-GE Yardımları ve AB Hibe Fonları Danışmanlığı",
        href: "/hizmetlerimiz/diger/uluslararasi-arge-ve-ab-hibe-fonlari",
      },
      {
        label: "Şirketlere ve Üniversitelere Sertifikalı Eğitimler",
        href: "/hizmetlerimiz/diger/sertifikali-egitimler",
      },
      {
        label: "Kapasite Raporu",
        href: "/hizmetlerimiz/diger/kapasite-raporu",
      },
      {
        label: "Sanayi Sicil Belgesi",
        href: "/hizmetlerimiz/diger/sanayi-sicil-belgesi",
      },
      {
        label: "Garanti Belgesi",
        href: "/hizmetlerimiz/diger/garanti-belgesi",
      },
      { label: "ÇED Belgesi", href: "/hizmetlerimiz/diger/ced-belgesi" },
      { label: "Çalışma İzni", href: "/hizmetlerimiz/diger/calisma-izni" },
      {
        label: "Yabancı Personel İşlemleri",
        href: "/hizmetlerimiz/diger/yabanci-personel-islemleri",
      },
      {
        label: "Yerli Malı Belgesi",
        href: "/hizmetlerimiz/diger/yerli-mali-belgesi",
      },
      {
        label: "TSE Hizmet Yeri Yeterlilik Belgesi",
        href: "/hizmetlerimiz/diger/tse-hizmet-yeri-yeterlilik-belgesi",
      },
      { label: "Hijyen Belgesi", href: "/hizmetlerimiz/diger/hijyen-belgesi" },
      { label: "Barkod Tescili", href: "/hizmetlerimiz/diger/barkod-tescili" },
    ],
  },
];

const MOCK_SERVICE_DETAILS: ServiceDetail[] = [
  {
    id: "dahilde-isleme-izin-belgesi",
    category: "yatirim-danismanligi",
    categoryTitle: "Yatırım Danışmanlığı",
    slug: "dahilde-isleme-izin-belgesi",
    title: "Dahilde İşleme İzin Belgesi",
    description:
      "Dahilde İşleme Rejimi kapsamında firmaların başvuru ve takip süreçlerine yönelik danışmanlık hizmetleri.",
    content: [
      "Dahilde İşleme İzin Belgesi süreçlerinde firmaların başvuru hazırlıkları ve gerekli dokümantasyon çalışmalarına destek sağlıyoruz.",
      "Başvuru, takip ve belge sürecinin yürütülmesinde firmalara danışmanlık sunuyoruz.",
    ],
  },
  {
    id: "kalite-yonetim-sistemi-egitimleri",
    category: "egitimler",
    categoryTitle: "Eğitimler",
    slug: "kalite-yonetim-sistemi-egitimleri",
    title: "Kalite Yönetim Sistemi Eğitimleri",
    description:
      "Kalite yönetim sistemleri, iç denetim, ISO 9001, ISO 45001 ve kurumsal gelişim eğitimlerine yönelik kapsamlı eğitim hizmetleri.",
    content: [
      "Kalite Sistemi, kuruluşların insan ve maddi kaynaklarını kullanarak amaçlarını etkili ve verimli şekilde gerçekleştirmelerini sağlamaktadır. ISO, kuruluşların kendilerine uygun bir kalite güvence sistemine sahip olmaları için bir model sunmaktadır. Bu modele uygunluk birçok ülke tarafından kabul edilmekte ve sistemin entegrasyonu ile kurumsal işleyişin kalite tabanlı olarak yapılandırılması hedeflenmektedir.",
      "Kalite Yönetim Sisteminin amacı; tüm ürün kategorileri, sektörler ve farklı büyüklükteki kuruluşlara uygulanabilen TS EN ISO 9001 Kalite Yönetim Sistemi Standardı'nın temel kavramlarını, prensiplerini ve standart maddelerini kuruluşların faaliyet alanları doğrultusunda yorumlayarak etkin şekilde aktarabilmektir.",
      "ISO 9001 Kalite Yönetim Sistemi İç Denetçi Eğitimi kapsamında; tetkik kavramları, kalite yönetim sistemi tetkikine genel bakış, iç tetkikçi kişisel özellikleri ve davranış kültürü, tetkikçilerin görev ve sorumlulukları, tetkik iletişimi, soru teknikleri, ISO 19011 standardının yapısı, ISO 9001 şartlarının incelenmesi, tetkik kapsamının belirlenmesi ve soru listelerinin hazırlanması gibi konular ele alınmaktadır.",
      "İç Denetçi Eğitimi ayrıca tetkik planlaması, açılış toplantısı, saha araştırma ve gözlem çalışmaları, uygunsuzlukların tespit edilmesi, kapanış toplantısı, kök neden analizi, bulguların raporlanması, takip denetimi, iç tetkik prosedürünün oluşturulması, tetkik verilerinin yönetimin gözden geçirmesine taşınması ve örnek denetim senaryolarının incelenmesini kapsamaktadır.",
      "ISO 9001 Kalite Yönetim Sistemi Eğitimi kapsamında; kalite kavramına giriş, PUKO döngüsü, müşteri ve müşteri memnuniyeti kavramları, kalite yönetim sisteminin faydaları, ISO 9001'in temel ilkeleri, tarafların ihtiyaç ve beklentileri, liderlik ve taahhüt, kalite yönetim sistemi planlaması, destek prosesleri, operasyonel planlama ve kontrol, izleme, ölçme, analiz ve değerlendirme ile sürekli iyileştirme konuları ele alınmaktadır.",
      "ISO 45001 İş Sağlığı ve Güvenliği Yönetim Sistemi Eğitimi kapsamında; iş güvenliği kavramına giriş, İSG PUKO döngüsü, iş sağlığı ve güvenliği yönetim sistemi tanımları, çalışanların ve ilgili tarafların ihtiyaç ve beklentileri, liderlik ve çalışan katılımı, İSG planlaması, destek prosesleri, operasyonel planlama ve kontrol, izleme, ölçme, analiz, değerlendirme ve sürekli iyileştirme konuları işlenmektedir.",
      "Satış Becerileri Geliştirme Eğitimi kapsamında; satış kavramı, müşteri tanımı, satın alma kararının oluşması, reklamların analizi, satış yöneticisinin görevleri, müşteri ihtiyaç ve beklenti analizleri, satış sürecinin oluşturulması, müşteri memnuniyet anketleri, müşteri şikayet yönetimi ve müşteri memnuniyet analizi gibi konular ele alınmaktadır.",
      "Takım Çalışması Eğitimi; takım olmanın faydaları, takım ruhu, takım liderinin özellikleri, takım üyelerinin davranışları, takım organizasyon yapısı, takım vizyonu ve hedefleri, takım performansı, takım içinde iletişim, güven, sinerji oluşturma ve motivasyon konularını kapsamaktadır.",
      "Yöneticilik ve Liderlik Eğitimi kapsamında; yönetmek kavramı, iş proseslerinin kontrolü, yöneticinin liderlik göstermesi, şirket kültürü temsil sorumluluğu, kurumsal vizyonla uyumlu bölüm hedeflerinin oluşturulması, proje yönetimi, hesap verilebilirlik, proses performans yönetimi, ekip yönetimi, motivasyon, yetki ve sorumluluk devri ile toplantı yönetimi konuları ele alınmaktadır.",
      "Kurumsal İletişim Eğitimi kapsamında; iletişimin temel ilkeleri, iletişim mesajının oluşturulması ve yönetilmesi, iletişim kanalının analizi, mesajın doğru aktarılması, telefon ile iletişim, toplantı yönetimi, Zoom ve Teams gibi görüntülü internet platformları üzerinden iletişim ve müşteri ile iletişim konuları işlenmektedir.",
      "Kişisel Verilerin Korunması Eğitimi kapsamında; kişisel veri, özel nitelikli kişisel veriler, aydınlatma metinleri, açık rıza, gizlilik sözleşmeleri, KVK genel ilkeleri, KVKK yasal uyumluluğu ve Kurul kararları ele alınmaktadır.",
      "Eğitimler Zoom ve Webinar platformları üzerinden tam gün olarak gerçekleştirilmektedir. Eğitim türüne göre katılım veya başarı sertifikası verilmektedir.",
      "Eğitimlerden; İnsan Kaynakları, Üretim, Kalite, Müşteri İlişkileri, Satış Pazarlama, Planlama, Ar-Ge, İş Geliştirme, İş Sağlığı Güvenliği, Çevre Sorumluları ve üst yönetim yoğun şekilde faydalanabilir.",
    ],
  },
  {
    id: "verbis-sistemine-kayit-yapilmasi",
    category: "kvkk-danismanligi",
    categoryTitle: "KVKK Danışmanlığı",
    slug: "verbis-sistemine-kayit-yapilmasi",
    title: "VERBİS Sistemine Kayıt Yapılması",
    description:
      "VERBİS kayıt süreci ve veri sorumlularının kayıt yükümlülüklerine yönelik danışmanlık hizmetleri.",
    content: [
      "VERBİS, Veri Sorumluları Sicil Bilgi Sistemi'nin kısaltmasıdır.",
      "Veri sorumlularının kişisel veri işleme faaliyetlerinin analiz edilmesi, gerekli bildirimlerin hazırlanması ve kayıt süreçlerinin yürütülmesi konusunda danışmanlık sağlıyoruz.",
      "Akkaş Group olarak VERBİS kayıt ve KVKK uyum süreçlerinin takibinde firmalara destek sunuyoruz.",
    ],
  },
];

export async function getServices(): Promise<ServiceDetail[]> {
  try {
    // İleride: await wpClient.query(SERVICES_QUERY) burada olacak.
    return MOCK_SERVICE_DETAILS;
  } catch (error) {
    logger.error("Hizmetler içeriği alınamadı", { error });
    throw new AppError(
      "Hizmetler içeriği yüklenemedi",
      "CONTENT_FETCH_FAILED",
      error,
    );
  }
}

// --- mevcut MOCK_SERVICE_DETAILS ve getServices/getServiceByCategoryAndSlug aynen kalıyor ---

export async function getServiceCategories(): Promise<ServiceCategory[]> {
  try {
    // İleride: await wpClient.query(SERVICE_CATEGORIES_QUERY) burada olacak.
    return MOCK_SERVICE_CATEGORIES;
  } catch (error) {
    logger.error("Hizmet kategorileri alınamadı", { error });
    throw new AppError(
      "Hizmet kategorileri yüklenemedi",
      "CONTENT_FETCH_FAILED",
      error,
    );
  }
}

export async function getServiceByCategoryAndSlug(
  category: string,
  slug: string,
): Promise<ServiceDetail | null> {
  try {
    return (
      MOCK_SERVICE_DETAILS.find(
        (service) => service.category === category && service.slug === slug,
      ) ?? null
    );
  } catch (error) {
    logger.error("Hizmet detayı alınamadı", { error, category, slug });
    throw new AppError(
      "Hizmet detayı yüklenemedi",
      "CONTENT_FETCH_FAILED",
      error,
    );
  }
}
