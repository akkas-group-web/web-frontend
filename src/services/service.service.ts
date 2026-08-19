import { AppError } from "@/lib/errors/AppError";
import { logger } from "@/lib/logger/logger";
import type { ServiceDetail } from "@/types/service";

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
