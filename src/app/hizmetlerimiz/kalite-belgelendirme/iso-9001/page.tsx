import type { Metadata } from "next";

import {
  ServiceList,
  ServiceSection,
  ServiceText,
} from "@/components/sections/services/ServiceContent";
import { ServiceDetailLayout } from "@/components/sections/services/ServiceDetailLayout";

export const metadata: Metadata = {
  title: "ISO 9001:2015 Kalite Yönetim Sistemi | Akkaş Group",
  description:
    "ISO 9001:2015 Kalite Yönetim Sistemi, sağladığı faydalar ve danışmanlık süreci hakkında detaylı bilgi.",
};

const standartGelisimi = [
  "1963’de MIL/Q/9858 (ABD’de savunma teknolojisinde kullanıldı)",
  "1968’de AQAP Standardları (NATO üyesi ülkelerde yayınlandı)",
  "1979’da BS 5750 (İngiltere’de kabul edildi)",
  "1987’de ISO 9000 serisi (ISO tarafından ilk olarak yayınlandı)",
  "1988’de EN 29000 standardları (CEN tarafından yayınlandı)",
  "1988’de TS 6000 (TSE’de Kalite Güvence Sistem Standardı olarak yayınlandı)",
  "1991’de TS-EN-ISO 9000 (TSE’de yayınlandı)",
  "1994’de ISO revize etti. (9001:1994 / 9002:1994 / 9003:1994 şeklinde yayınlandı)",
  "1996’da EN 29000 serisi (EN-ISO 9000 olarak yayınlandı.)",
  "2000 ve 2008’de ISO revize edildi.",
  "2015’de ISO revize etti ve 9001:2015 olarak yayımlandı. Şu an geçerli olan revizyondur.",
];

const firmaFaydalari = [
  "Firmalar arasında kalitenin ortak dilidir,",
  "Kurumsallaşmak isteyen firmalar için bir basamaktır.",
  "Organizasyon yapısını düzenleyerek çalışan memnuniyetini ve güvenini artırır.",
  "Satış ve pazarlama aracıdır.",
  "İşleri sistematik hale getirerek hızlı ve verimli çalışmayı sağlar.",
  "Ürün ve hizmet maliyetlerini düşürerek karlılığı artırır.",
  "Müşterilerle olan ilişkileri düzenleyerek müşteri tatminini artırır.",
  "Rekabet Üstünlüğü sağlar.",
  "Gelişen firma imajı sağlar.",
  "Gerçekçi hedeflerin düzgün kontrolüyle ürün ve proseslerde sürekli gelişme sağlar.",
];

const danismanlikSureci = [
  "Firmanın mevcut çalışma sisteminin analiz edilmesi,",
  "Proje planının hazırlanması ve firmaya sunulması",
  "ISO 9001 açılış eğitiminin verilmesi ve yönetim temsilcisinin atanması",
  "ISO 9001 temel eğitimin verilmesi,",
  "Organizasyon yapısının belirlenmesi, görev tanımlarının hazırlanması,",
  "Kalite politikası ve hedeflerinin belirlenmesi,",
  "Gerekli dokümantasyon ve kayıt sisteminin hazırlanması,",
  "İlgili bölümlere dokümantasyon eğitiminin verilmesi,",
  "Sistemin uygulanması ve çeşitli parametrelerin izlenmesi,",
  "İzlenilen parametrelere göre iyileştirme faaliyetlerinin yapılması,",
  "İç denetçi eğitiminin verilmesi,",
  "İç denetimin planlanması gerçekleştirilmesi ve sonuçların analiz edilmesi,",
  "Belirlenen eksikliklere yönelik olarak düzeltici önleyici faaliyetlerin gerçekleştirilmesi,",
  "Yönetim gözden geçirme toplantısının yapılması,",
  "Belgelendirme kuruluşuna müracaat edilmesi",
  "Denetimin gerçekleştirilmesi",
  "Varsa denetimde bulunan eksikliklerin giderilmesi,",
  "ISO 9000 belgesinin firmaya teslim edilmesi sağlanmaktadır.",
];

export default function Iso9001Page() {
  return (
    <ServiceDetailLayout
      category="Kalite Belgelendirme"
      title="ISO 9001:2015 Kalite Yönetim Sistemi"
      description="ISO 9001:2015 Kalite Yönetim Sistemi, standardın gelişimi, kuruluşlara sağladığı faydalar ve belgelendirme süreci hakkında detaylı bilgi."
    >
      {/* ISO 9001 HAKKINDA */}
      <ServiceSection title="ISO 9001:2015 Kalite Yönetim Sistemi">
        <ServiceText>
          <p>
            1947 yılında kurulmuş olan ISO (Uluslararası Standardizasyon
            Organizasyonu) 150’e yakın ülkenin ulusal standart hazırlama
            kuruluşlarını bünyesinde toplayan sivil bir federasyondur.
          </p>
        </ServiceText>
      </ServiceSection>

      {/* ISO 9001 NEDİR */}
      <ServiceSection title="ISO 9001 Nedir?">
        <ServiceText>
          <p>
            ISO 9001 ise, ISO tarafından üretim ve hizmet sektörüne kalite
            güvencesi getirebilmek amacıyla hazırlanıp yürürlüğe konulmuş
            yönetim standartları serisidir.
          </p>

          <p>
            ISO 9001 standardı ürün ya da hizmete verilen bir standart olmayıp
            işletmenin müşteriye belirli kriterlere uygun bir şekilde hizmet
            ya da ürün verebilmesi için gerekli yönetim adımlarını ve asgari
            koşulları tanımlar.
          </p>
        </ServiceText>
      </ServiceSection>

      {/* KALİTE YÖNETİM SİSTEMİ NEDİR */}
      <ServiceSection title="ISO 9001:2015 Kalite Yönetim Sistemi Nedir?">
        <ServiceText>
          <p>
            Bugünün dünyası çok küçülmüş, enformasyon, teknoloji ve iletişim
            alanındaki büyük gelişmeler toplumları kıyasıya bir rekabete ve
            her geçen gün yeni gelişmelerin yaşandığı ekonomik bir yarışa
            itmiştir.
          </p>

          <p>
            Mevcut dünya düzeninde ayakta kalabilmek, tüm sektörlerde müşteri
            ihtiyaç ve beklentilerine uygun mal ve hizmet üretiminin
            sağlanmasıyla gerçekleşebilecektir. Bu da ancak, kuruluşlarda,
            tasarım aşamasında başlayarak üretim, pazarlama ve satış sonrası
            hizmetlere kadar tüm aşamaları kapsayan ve sürekli gelişmeyi
            hedefleyen Kalite Yönetim Sisteminin uygulanmasıyla olacaktır.
          </p>

          <p>
            Günümüzde Kalite Yönetim Sistemi konusunda ISO 9000 Kalite Sistem
            Standardları 1987 yılında yayımlandığı tarihten itibaren en fazla
            ilgiyi ve uygulama alanını bulan milletlerarası Standardlar haline
            gelmiştir.
          </p>

          <p>
            TS-EN-ISO 9000 Kalite Standardları Serisi, etkili bir yönetim
            sisteminin nasıl kurulabileceğini, dokümante edilebileceğini ve
            sürdürebileceğini göz önüne sermektedir.
          </p>
        </ServiceText>
      </ServiceSection>

      {/* STANDARDIN GELİŞİMİ */}
      <ServiceSection title="ISO 9001 Standardlarının Gelişimi">
        <ServiceList>
          {standartGelisimi.map((madde) => (
            <li key={madde} className="flex items-start gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#16859a]" />
              <span>{madde}</span>
            </li>
          ))}
        </ServiceList>
      </ServiceSection>

      {/* NEDEN KALİTE YÖNETİM SİSTEMİ */}
      <ServiceSection title="Neden Kalite Yönetim Sistemi?">
        <ServiceText>
          <p>
            Günümüzde müşterilerin kaliteye yönelik beklentileri, çeşitlilik
            ve yoğunluk açısından canlı ve hareketli özellikler içermektedir.
            Bu beklentileri karşılamayı amaçlayan kuruluşların, yüksek ekonomik
            performansa ulaşabilmesi ve bunu artırarak sürdürmesi gerekir.
          </p>

          <p>
            Bunu başarmanın yolu da, ürünlerin ve hizmetlerin kalitesinde
            sürekli yenilenmeyi, gelişmeyi gerçekleştirmekten geçer.
          </p>

          <p>
            Kalite, ürünlerin ve hizmetlerin niceliğinde ve niteliğinde
            çeşitliliği, farklılığı, yeniliği içeren sürekli bir arayış
            olduğundan, ürünlere ve hizmetlere ilişkin şartnameler ve
            standartlar tek başına yeterli olmamaktadır.
          </p>

          <p>
            Bu nedenle, ürün ve hizmetlerin kalitesine ilişkin eksikliklerin
            giderilmesine yönelik olarak, Kalite Yönetim Sistemi’nin
            standartları ve kuralları geliştirilip, devreye sokulmuştur.
            Planla, Uygula, Kontrol et, Önlem al çevrimi kaliteyi iyileştirmek,
            müşteri memnuniyetini sürekli kılmak ve rekabette öncü olmanın
            kilit yöntemlerindendir.
          </p>

          <p>
            Planlama aşamasında kaliteyi tanımlamak, tasarım aşamasında
            kaliteyi tasarlamak, üretimin her aşamasında kaliteyi güvence
            altına almak, kullanım aşamalarında kaliteyi güvence altına almak;
            tüm bunları yaparken müşteri memnuniyeti ve sürekli gelişmeyi
            prensip olarak belirlemek kalite yönetim sisteminin birinci
            felsefesidir.
          </p>
        </ServiceText>
      </ServiceSection>

      {/* FAYDALAR */}
      <ServiceSection title="ISO 9001 Firmalara Neler Sağlar?">
        <ServiceText>
          <p>ISO 9001;</p>
        </ServiceText>

        <div className="mt-4">
          <ServiceList>
            {firmaFaydalari.map((fayda) => (
              <li key={fayda} className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#16859a]" />
                <span>{fayda}</span>
              </li>
            ))}
          </ServiceList>
        </div>
      </ServiceSection>

      {/* DANIŞMANLIK SÜRECİ */}
      <ServiceSection title="ISO 9000 Danışmanlık ve Belgelendirme Süreci Nasıldır?">
        <ServiceText>
          <p>Firmayla sözleşmenin imzalanmasının ardından;</p>
        </ServiceText>

        <div className="mt-4">
          <ServiceList>
            {danismanlikSureci.map((adim) => (
              <li key={adim} className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#16859a]" />
                <span>{adim}</span>
              </li>
            ))}
          </ServiceList>
        </div>
      </ServiceSection>
    </ServiceDetailLayout>
  );
}