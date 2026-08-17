import type { Metadata } from "next";

import {
  ServiceSection,
  ServiceText,
} from "@/components/sections/services/ServiceContent";
import { ServiceDetailLayout } from "@/components/sections/services/ServiceDetailLayout";

export const metadata: Metadata = {
  title: "GAP - İyi Tarım Uygulamaları | Akkaş Group",
  description:
    "GAP - İyi Tarım Uygulamaları ve İyi Tarım Ürünleri sertifikasyon süreci hakkında detaylı bilgi.",
};

export default function GapIyiTarimPage() {
  return (
    <ServiceDetailLayout
      category="Kalite Belgelendirme"
      title="GAP - İyi Tarım Uygulamaları"
      description="İyi Tarım Uygulamaları ve sertifikasyon süreci hakkında detaylı bilgi."
    >
      {/* İYİ TARIM UYGULAMALARI */}
      <ServiceSection title="İyi Tarım Uygulamaları">
        <ServiceText>
          <p>
            İyi tarım uygulamaları (GAP), uygulandığında güvenli ve sağlıklı
            tarım oluşturmak ve işlenmesi için özel yöntemler ve
            standartlardır.
          </p>

          <p>
            1990&apos;ların sonlarında Avrupa süpermarket zincirleri (Eurep) ve
            onların önemli tedarikçileri tarafından oluşturulan İyi Tarım
            Uygulamaları (ITU) veya İngilizcesi Good Agricultural Practices
            (GAP)&apos; tır. Temel amacı farklı tedarikçilerin isteklerini bir
            standart altında toplayarak çiftçilere ve tedarikçilere kolaylık
            sağlamaktır. Standart kullanılarak geliştirilen Tehlike Analizi ve
            Kritik Kontrol Noktaları (HACCP) yayınlanan kılavuzlar Birleşmiş
            Milletler Gıda ve Tarım Örgütü ve sertifikalar düzenleri ISO Guide
            65&apos;e göre yönetilmektedir.
          </p>

          <p>
            Uluslararası tarım ile ilgili olan bu önemli uygulamalar ve
            standartlar Türkiye’de de zorunlu hale gelmiştir. Ülkemizin zengin
            tarım kaynaklarını daha verimli kullanılması tarımda güçlü ülkeler
            arasına koyacaktır.
          </p>

          <p>
            Tarım ürünleri kalitesi hasat, depolama, ve uygun olan yerlerde,
            tarım ürünlerinin işlenmesi için kabul edilebilir protokollerin
            uygulanmasına bağlıdır. Hasat zamanında tarım ilaçları ve veteriner
            ilaçlar kullanılırken için önceden hasat aralıkları ile ilgili
            kurallara uymak zorundadır. Gıda ürünleri alanı tasarlanmış ve bu
            iş için öngörülmüş olan sıcaklık ve nem uygun koşullar altında
            muhafaza edilmelidir.
          </p>
        </ServiceText>
      </ServiceSection>

      {/* SERTİFİKASYON SÜRECİ */}
      <ServiceSection title="İyi Tarım ürünleri (Itu) Sertifikasyon Süreci">
        <ServiceText>
          <p>
            Tarım ürünlerinde İtü Sertifikası iki şekilde olabilmektedir.
          </p>

          <div className="pt-2">
            <p>
              <strong className="font-bold text-[#0d4d5c]">
                Bireysel Sertifikasyon;
              </strong>
            </p>

            <p className="mt-2">
              Şahısların ve gerçek kişilerin bireysel olarak üretim yapmaları
              durumunda yapılmaktadır. Sertifika kapsamındaki ürün ile ilgili
              üretim sahası denetlenmektedir.
            </p>
          </div>

          <div className="pt-2">
            <p>
              <strong className="font-bold text-[#0d4d5c]">
                Grup Sertifikasyon;
              </strong>
            </p>

            <p className="mt-2">
              Bir üretici grubu altında veya sözleşmeye dayalı olarak bir araya
              gelen şahısların oluşturduğu organizsayonlara verilen
              sertifikasyon programıdır. Grup sertifikasyonu yapılması halinde
              kontrol firması ile üretici firma arasında sözleşme
              yapılmaktadır.
            </p>
          </div>
        </ServiceText>
      </ServiceSection>
    </ServiceDetailLayout>
  );
}