import { AppError } from "@/lib/errors/AppError";
import { logger } from "@/lib/logger/logger";
import type { ContactOffice, HomeContent } from "@/types";
import { AboutContent } from "@/types/about";
import { ArticleItem } from "@/types/article";
import { ClientReference } from "@/types/reference";
import type { NewsItem } from "@/types/news";


/* =========================================================
   HİZMET DETAY TİPİ
========================================================= */

export interface ServiceDetail {
  id: string;
  category: string;
  categoryTitle: string;
  slug: string;
  title: string;
  description: string;
  image?: string;
  content: string[];
}

/* =========================================================
   HİZMET DETAYLARI
   ŞİMDİLİK MOCK
   DAHA SONRA CMS'TEN GELECEK
========================================================= */

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
/* =========================================================
   BLOG / MAKALELER
========================================================= */


import type { SectorContent } from "@/types/sector";

const articles: ArticleItem[] = [
  {
    id: "1",
    title: "2025 Yatırım Teşviklerinde Yeni Dönem",
    excerpt:
      "Yeni teşvik paketiyle birlikte hangi sektörler öne çıkıyor, detayları derledik.",
    date: "2025-03-14T00:00:00.000Z",
    href: "/blog/2025-yatirim-tesvikleri",
    image: "/articles/tesvik.png",
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
  {
    id: "5",
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
];
const news: NewsItem[] = [
  {
    id: "milli-teknoloji-atolyesi",
    title: "Konya'da İki Yeni Milli Teknoloji Atölyesi Faaliyete Girdi",
    excerpt:
      "Sanayi ve Teknoloji Bakanımız Mehmet Fatih Kacır'ın teşrifleriyle Selçuk Üniversitesi ve Necmettin Erbakan Üniversitesi Milli Teknoloji Atölyelerinin açılışı gerçekleştirildi.",
    date: "2026-07-31",
    href: "/haberler/milli-teknoloji-atolyesi-konya",
    category: "Teşvikler & Hibeler",
    image: "/announcements/milli-teknoloji-atolyesi.jpeg",
    imageRatio: "landscape",
    content: [
      "Konya'da teknoloji ve yenilik ekosistemini güçlendirecek iki yeni Milli Teknoloji Atölyesi faaliyete geçti.",
      "Selçuk Üniversitesi ve Necmettin Erbakan Üniversitesi bünyesinde hayata geçirilen atölyelerin, öğrencilerin teknoloji geliştirme ve proje üretme süreçlerine katkı sağlaması hedefleniyor.",
      "Yeni merkezlerin gençlerin yenilikçi teknolojilerle buluşmasına ve üniversite-sanayi iş birliklerinin geliştirilmesine katkı sağlaması bekleniyor.",
    ],
  },
  {
    id: "tubitak-arge-merkezi",
    title:
      "Çanakkale'de TÜBİTAK Desteğiyle Seramik Teknolojileri Öncül Ar-Ge Merkezi Açıldı",
    excerpt:
      "TÜBİTAK 1515 Öncül Ar-Ge Laboratuvarları Destekleme Programı kapsamında destek verdiğimiz Seramik Teknolojileri Öncül Ar-Ge Merkezi'nin açılışı gerçekleştirildi.",
    date: "2026-07-28",
    href: "/haberler/tubitak-seramik-arge-merkezi",
    category: "Teşvikler & Hibeler",
    image: "/announcements/tubitak-arge-merkezi.jpeg",
    imageRatio: "landscape",
    content: [
      "TÜBİTAK 1515 Öncül Ar-Ge Laboratuvarları Destekleme Programı kapsamında desteklenen Seramik Teknolojileri Öncül Ar-Ge Merkezi Çanakkale'de faaliyete başladı.",
      "Merkezde seramik teknolojileri alanında yenilikçi ürünlerin ve üretim yöntemlerinin geliştirilmesine yönelik araştırma ve geliştirme çalışmalarının yürütülmesi planlanıyor.",
      "Program kapsamında özel sektör, üniversiteler ve araştırma kuruluşları arasındaki Ar-Ge iş birliklerinin geliştirilmesi hedefleniyor.",
    ],
  },
  {
    id: "cbam",
    title: "CBAM 2. Çeyrek Fiyatı Yayımlandı",
    excerpt:
      "Sınırda Karbon Düzenleme Mekanizması (SKDM) kapsamında 2026 yılı 2. çeyrek referans fiyatları açıklandı. Firmaların raporlama süreçlerini bu doğrultuda güncellemesi gerekiyor.",
    date: "2026-07-20",
    href: "/haberler/cbam-2-ceyrek-fiyati-yayimlandi",
    category: "Akkaş Karbon",
    image: "/announcements/cbam.jpeg",
    imageRatio: "square",
    content: [
      "Sınırda Karbon Düzenleme Mekanizması kapsamında 2026 yılının ikinci çeyreğine ilişkin referans fiyatları yayımlandı.",
      "Yeni fiyatların özellikle Avrupa Birliği'ne ihracat gerçekleştiren ve CBAM kapsamındaki ürün gruplarında faaliyet gösteren firmaların raporlama süreçlerinde dikkate alınması gerekiyor.",
      "Firmaların emisyon verilerini, raporlama yükümlülüklerini ve maliyet hesaplamalarını güncel referans değerleri doğrultusunda değerlendirmeleri önem taşıyor.",
    ],
  },
  {
    id: "yz-kredi",
    title: "Yapay Zeka Kredi Programı",
    excerpt:
      "KOBİ'lerin yapay zeka dönüşümünü desteklemek amacıyla uygun faizli yeni bir kredi programı yürürlüğe girdi. Başvuru koşulları ve destek üst limitleri açıklandı.",
    date: "2026-07-20",
    href: "/haberler/yapay-zeka-kredi-programi",
    category: "Teşvikler & Hibeler",
    image: "/announcements/yz-kredi.jpeg",
    imageRatio: "landscape",
    content: [
      "KOBİ'lerin dijital dönüşümünü ve yapay zeka teknolojilerinden yararlanmasını desteklemek amacıyla yeni bir kredi programı devreye alındı.",
      "Program kapsamında işletmelerin yapay zeka tabanlı yazılım, otomasyon, veri analitiği ve dijital dönüşüm yatırımlarının finansmanına yönelik imkanlar sunulması hedefleniyor.",
      "Programa başvurmayı planlayan firmaların başvuru şartlarını, kredi limitlerini ve uygun yatırım harcamalarını dikkatle incelemesi gerekiyor.",
    ],
  },
  {
    id: "kapasite",
    title:
      "Kapasite Geliştirme Destek Programı — 2. Başvuru Dönemi Başladı",
    excerpt:
      "Sanayi işletmelerinin üretim kapasitesini artırmasına yönelik destek programının ikinci başvuru dönemi resmen açıldı. Son başvuru tarihi yakında duyurulacak.",
    date: "2026-06-08",
    href: "/haberler/kapasite-gelistirme-destek-programi-2-basvuru-donemi-basladi",
    category: "Teşvikler & Hibeler",
    image: "/announcements/kapasite-gelistirme.jpeg",
    imageRatio: "square",
    content: [
      "Kapasite Geliştirme Destek Programı'nın ikinci başvuru dönemi başladı.",
      "Program ile işletmelerin üretim kapasitesinin artırılması, verimliliğin geliştirilmesi ve büyüme yatırımlarının desteklenmesi amaçlanıyor.",
      "Destekten yararlanmak isteyen firmaların program kriterlerini ve başvuru için talep edilen belgeleri başvuru süresi içerisinde hazırlaması gerekiyor.",
    ],
  },
  {
    id: "verbis",
    title: "VERBİS Kayıt Süresi Uzadı",
    excerpt:
      "Veri Sorumluları Sicili'ne (VERBİS) kayıt yükümlülüğü olan firmalar için son başvuru süresi Kişisel Verileri Koruma Kurulu kararıyla ertelendi.",
    date: "2026-06-01",
    href: "/haberler/verbis-kayit-suresi-uzadi",
    category: "KVKK & Mevzuat",
    image: "/announcements/verbis.jpeg",
    imageRatio: "landscape",
    content: [
      "VERBİS kayıt yükümlülüğü bulunan veri sorumluları için kayıt süresine ilişkin yeni bir düzenleme duyuruldu.",
      "Kayıt yükümlülüğü kapsamında bulunan işletmelerin mevcut durumlarını kontrol ederek gerekli bildirim ve kayıt işlemlerini yeni süre içerisinde tamamlamaları gerekiyor.",
      "Firmaların yalnızca VERBİS kaydını değil, kişisel veri işleme envanteri, aydınlatma yükümlülükleri ve diğer KVKK uyum süreçlerini de birlikte değerlendirmesi önem taşıyor.",
    ],
  },
];

/* =========================================================
   ANA SAYFA
========================================================= */

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
      href: "/markalarimiz/akkas-osgb",
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
    {
      id: "years",
      value: "25+",
      label: "Yıllık tecrübe (1999'dan beri)",
    },
    {
      id: "consultants",
      value: "200+",
      label: "Uzman danışman kadrosu",
    },
    {
      id: "companies",
      value: "18.000+",
      label: "Hizmet verilen firma",
    },
    {
      id: "brands",
      value: "7",
      label: "Grup şirketi",
    },
  ],

  announcements: news,

};

/* =========================================================
   HAKKIMIZDA
========================================================= */

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
      "Akkaş Group, Marka & Patent Vekili ve Başdenetçi Erkan Akkaş tarafından 1999 yılında İstanbul'da ticari hayatına başladı.",
      "Türkiye'de ilk kez entegre danışmanlık modelini kobilere taşıyarak, küreselleşen dünyada rekabet edebilmeleri için uçtan uca destek sunduk.",
      "Merkezi İstanbul Kadıköy'de bulunan Akkaş Group, 200 kişilik uzman danışman kadrosuyla 18.000'den fazla firmaya hizmet vermeye devam ediyor.",
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
        "Kadıköy merkezli, 200 danışman ve 18.000'den fazla firmaya entegre hizmet veren danışmanlık grubu.",
    },
  ],

  visionMission: {
    vision:
      "Uzman ekibimizle yatırım danışmanlığı konusunda şirketlere doğrudan bilgi vererek büyüme süreçlerinde yol gösterici olmak.",
    mission:
      "Küreselleşen dünyada şirketlerin, kurumların ve girişimcilerin yanında olmak ve hedeflerinde yol göstermek.",
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
    {
      id: "kurulus",
      value: "1999",
      label: "Kuruluş Yılı",
    },
    {
      id: "danisman",
      value: "200+",
      label: "Uzman Danışman",
    },
    {
      id: "firma",
      value: "18.000+",
      label: "Hizmet Verilen Firma",
    },
    {
      id: "marka",
      value: "7",
      label: "Grup Şirketi",
    },
  ],
};

/* =========================================================
   REFERANSLAR
========================================================= */

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
  {
    id: "12",
    name: "Berkshire Hathaway",
    logo: "/references/berkshire.png",
  },
];

/* =========================================================
   İLETİŞİM
========================================================= */

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
    address:
      "Uzunçayır Cad. Akkaş Plaza No:51 Hasanpaşa-Kadıköy-İSTANBUL",
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


/* =========================================================
   HİZMET SERVİSLERİ
========================================================= */

export async function getServices(): Promise<ServiceDetail[]> {
  try {
    // CMS bağlandığında burada API çağrısı olacak.
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

export async function getServiceByCategoryAndSlug(
  category: string,
  slug: string,
): Promise<ServiceDetail | null> {
  try {
    // CMS bağlandığında kategori + slug ile API sorgusu burada yapılacak.
    return (
      MOCK_SERVICE_DETAILS.find(
        (service) =>
          service.category === category &&
          service.slug === slug,
      ) ?? null
    );
  } catch (error) {
    logger.error("Hizmet detayı alınamadı", {
      error,
      category,
      slug,
    });

    throw new AppError(
      "Hizmet detayı yüklenemedi",
      "CONTENT_FETCH_FAILED",
      error,
    );
  }
}

/* =========================================================
   REFERANS SERVİSİ
========================================================= */

export async function getClientReferences(): Promise<ClientReference[]> {
  try {
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

/* =========================================================
   ANA SAYFA SERVİSİ
========================================================= */

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


export async function getHomeContent(): Promise<HomeContent> {
  try {
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

/* =========================================================
   HAKKIMIZDA SERVİSİ
========================================================= */

export async function getAboutContent(): Promise<AboutContent> {
  try {
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

/* =========================================================
   İLETİŞİM SERVİSİ
========================================================= */



export async function getBlogPosts(): Promise<ArticleItem[]> {
  try {
    // İleride: await wpClient.query(BLOG_QUERY) burada olacak.
    return articles;
  } catch (error) {
    logger.error("Blog içerikleri alınamadı", { error });

    throw new AppError(
      "Blog içerikleri yüklenemedi",
         "CONTENT_FETCH_FAILED",
      error,
    );
  }
}


export async function getContactContent() {
  try {
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

   

export async function getBlogPostBySlug(
  slug: string
): Promise<ArticleItem | null> {
  try {
    const article = articles.find(
      (item) => item.href === `/blog/${slug}`
    );

    return article ?? null;
  } catch (error) {
    logger.error("Blog yazısı alınamadı", { error, slug });

    throw new AppError(
      "Blog yazısı yüklenemedi",
      "CONTENT_FETCH_FAILED",
      error
    );
  }
}

export async function getNews(): Promise<NewsItem[]> {
  try {
    return news;
  } catch (error) {
    logger.error("Haberler alınamadı", { error });

    throw new AppError(
      "Haberler yüklenemedi",
      "CONTENT_FETCH_FAILED",
      error,
    );
  }
}

export async function getNewsBySlug(
  slug: string,
): Promise<NewsItem | null> {
  try {
    const newsItem = news.find(
      (item) => item.href === `/haberler/${slug}`,
    );

    return newsItem ?? null;
  } catch (error) {
    logger.error("Haber detayı alınamadı", {
      error,
      slug,
    });

    throw new AppError(
      "Haber detayı yüklenemedi",
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
    logger.error("Sektör içeriği alınamadı", {
      error,
      slug,
    });

    throw new AppError(
      "Sektör içeriği yüklenemedi",
      "CONTENT_FETCH_FAILED",
      error,
    );
  }
}
export async function getSectors(): Promise<SectorContent[]> {
  try {
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