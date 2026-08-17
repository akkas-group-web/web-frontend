import type { Metadata } from "next";

import {
  ServiceList,
  ServiceOrderedList,
  ServiceSection,
  ServiceText,
} from "@/components/sections/services/ServiceContent";
import { ServiceDetailLayout } from "@/components/sections/services/ServiceDetailLayout";

export const metadata: Metadata = {
  title: "Helal Gıda Belgesi | Akkaş Group",
  description:
    "Helal Gıda Belgesi, helal belgelendirmenin faydaları ve sertifikasyon süreci hakkında detaylı bilgi.",
};

const haramUrunler = [
  "Domuz/domuz eti ve bunlardan üretilen ürünler,",
  "Uygunsuz kesilen hayvanlar yada kesimden önce ölen hayvanlar,",
  "Alah'ın dışında herhangi bir tanrı ismi altında kesilen hayvanlar,",
  "Alkol ve serhoş edici maddeler,",
  "Etçil hayvanlar, avlanmış kuşlar ve dışarıda kulağı olmayan kara hayvanları,",
  "Kan ve kandan yapılmış ürünler,",
  "Yukarıdaki ürünlerin herhangi biri ile temas eden ürünler.",
];

const belgelendirmeSureci = [
  "Belgelendirme firmasına yazılı olarak yada internet üzerinden Helal Belge başvurusunun yapılması.",
  "Belgelendirme firmasıyla beraber helal belge kapsamındaki ürün tiplerinin ve içerdiği bileşen bilgilerinin gözden geçirilmesi.",
  "Tesisin helal standardı kapsamında denetimi ve onaylanması (Bu kısım üretim ekipmanının gözden geçirilmesini, katılan bileşenlerin, temizlik prosedürlerinin, sanitasyonun ve çapraz bulaşma riskinin denetlenmesini içermektedir).",
  "Kesimhaneler için; hayvanların tutulduğu alanların, bayıltma metodunun, doğru kesimin, kesimden önce ve sonra yapılması gerekenlerin vb.nin helal standardı kapsamında denetimi ve gözden geçirilmesi.",
  "Helal sertifikasyonu için gereken masrafın ve ücret içeriğinin belirlenmesi ve sözleşme yapılması.",
  "Masrafların ve ücretin ödenmesi.",
  "Uygun bulunulması durumunda helal belgesinin (sertifikanın) hazırlanması.",
];

export default function HelalGidaBelgesiPage() {
  return (
    <ServiceDetailLayout
      category="Kalite Belgelendirme"
      title="Helal Gıda Belgesi"
      description="Helal Gıda Belgesi ve belgelendirme süreci hakkında detaylı bilgi."
    >
      {/* HELAL GIDA BELGESİ */}
      <ServiceSection title="Helal Gıda Belgesi">
        <ServiceText>
          <p>
            Helal, dinin kurallarına aykırı olmayan, dinî bakımdan
            yasaklanmamış olan, izin verilmiş anlamına gelen Arapça bir
            kelimedir.
          </p>

          <p>
            Helal&apos;in karşıtı, din kurallarına aykırı olan, dinî bakımdan
            yasak olan anlamına gelen Haram &apos;dır.
          </p>

          <p>
            Helal gıdalar, İslami kurallara uygun olarak üretilen gıdalardır.
          </p>

          <p>
            Birçok ürün için Helal yada Haram açıkça bellidir. Ancak bazı
            ürünlerin helal olup olmadığı konusunda belirsizlik söz
            konusudur. Bu tür ürünlerin helal ya da haram olarak
            sınıflandırılabilmesi için daha fazla bilgiye ihtiyaç vardır
            (Mashbooh).
          </p>

          <p>
            Helal olduğu açıkça belli olan gıdalar; ekmek, meyve, su gibi.
          </p>

          <p>
            Haram olduğu açıkça belli olan gıdalar; şarap, domuz eti, ölü
            hayvan eti gibi.
          </p>

          <p>
            Helal ya da haram olduğu açıkça belli olmayan gıdalar. Bunlar,
            bazı yönleriyle helal, bazı yönleriyle haram olarak
            değerlendirilebilecek özellikte olabilirler.
          </p>
        </ServiceText>

        <div className="mt-6">
          <ServiceText>
            <p>
              Haram olan aşağıdaki türler hariç tüm gıdalar Helal kabul
              edilmiştir;
            </p>
          </ServiceText>

          <div className="mt-4">
            <ServiceList>
              {haramUrunler.map((urun) => (
                <li key={urun} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#16859a]" />
                  <span>{urun}</span>
                </li>
              ))}
            </ServiceList>
          </div>

          <div className="mt-5">
            <ServiceText>
              <p>
                Orijinlerinin bilinmemesi sebebiyle helal ya da haram olarak
                sınıflandırılamayan jelatin, gliserin, enzimler, gıda katkı
                maddeleri, hayvansal yağ ve proteinler vb. gıdalar
                şüphelidirler (mashbooh).
              </p>
            </ServiceText>
          </div>
        </div>
      </ServiceSection>

      {/* HELAL BELGESİ NEDİR */}
      <ServiceSection title="Helal Belgesi (Sertifikası) Nedir?">
        <ServiceText>
          <p>
            Helal belgesi İslami kurallara (Şafi, Mailiki, Hanbeli ve Hanefi
            mezhepleri uyarınca) uygun olarak hazırlanan ürünlere verilen
            sertifikadır.
          </p>

          <p>
            Helal belgesi İslam dinine göre yasak olmayan ürünlere verilen
            uluslararası bir belgedir.
          </p>
        </ServiceText>
      </ServiceSection>

      {/* FAYDALAR */}
      <ServiceSection title="Helal Belgelendirmenin (Sertifikasyonun) Faydaları">
        <ServiceText>
          <p>
            Helal belgelendirme (sertifikasyon) hem üreticilere hem de
            tüketicilere şu yararları sağlar;
          </p>

          <p>
            <strong className="font-semibold text-[#0d4d5c]">
              Tüketici güveni:
            </strong>{" "}
            Belgelendirme tüketicilere tercihleri doğrultusunda bilincli bir
            seçim yapma olanağını saglar. Ayni zamanda surekli bir denetim
            mekanismasi ile tuketiciler satın aldıkları gıdaları güvenle
            tüketebilirler. Helal belgelendirme, ürünleri, katkı maddelerini,
            hazırlama ve işleme yöntemlerini, temizlik ve sağlık şartlarını,
            katı güvenlik kuralları içinde denetleyen tarafsız bir bilirkişi
            hizmeti sunar.
          </p>

          <p>
            <strong className="font-semibold text-[#0d4d5c]">
              Ihracat ve Rekabet:
            </strong>{" "}
            Helal gıda sektörü son dönemde küresel pazarda giderek önemini
            arttırmaktadır. Helal belgemizi alan firmalar, urunlerini kuresel
            helal gida pazarina arz imkani bulabilecek ve rekabet gucunu
            arttirabilecektir. Helal belgelendirmesi, ürünün ve üreticinin
            Küresel İslam içinde tanınmasını ve tanıtılmasını sağlamaktadır.
          </p>

          <p>
            <strong className="font-semibold text-[#0d4d5c]">
              Kalite:
            </strong>{" "}
            Bu sertifika, gıda ürününün sadece helal yasası gerekliliklerine
            uyduğuna değil, aynı zamanda bu ürünün üretiminde gıda güvenliği
            ve hijyen uygulamalarının da katı bir şekilde uygulandığına
            işarettir.
          </p>
        </ServiceText>
      </ServiceSection>

      {/* BELGELENDİRME SÜRECİ */}
      <ServiceSection title="Helal Gıda Belgelendirme (Sertifikasyon) Süreci">
        <ServiceOrderedList>
          {belgelendirmeSureci.map((adim) => (
            <li key={adim}>{adim}</li>
          ))}
        </ServiceOrderedList>
      </ServiceSection>
    </ServiceDetailLayout>
  );
}