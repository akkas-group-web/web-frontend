import type { Metadata } from "next";
import Image from "next/image";

import {
  ServiceList,
  ServiceSection,
  ServiceText,
} from "@/components/sections/services/ServiceContent";
import { ServiceDetailLayout } from "@/components/sections/services/ServiceDetailLayout";

export const metadata: Metadata = {
  title: "ISO 14001 Çevre Yönetim Sistemi | Akkaş Group",
  description:
    "ISO 14001 Çevre Yönetim Sistemi ve kuruluşlara sağladığı faydalar hakkında detaylı bilgi.",
};

const faydalar = [
  "Çevresel performansınızı sürekli iyileştirmenizi sağlar,",
  "Çevresel risklerinizi yönetebilmenizi sağlar,",
  "Çevre ile ilgili ulusal ve uluslararası mevzuata uyum sağlamanızı kolaylaştırır,",
  "Küresel olarak tanınmış ve kabul görmüş bir standarda uygunluğunuzu sağlar,",
  "Uluslararası rekabet avantajı sağlar,",
  "Kurumsal imajınızı güçlendirir, kaliteyi artırır,",
  "Müşterileriniz, paydaşlarınız ve tüm ilgili taraflara güven verir,",
  "Çevre kirliliğinin kaynaktan başlayarak kontrol altına alınmasını ve azaltılmasını sağlar,",
  "Atıkların sistematik olarak azaltılıp kontrol altına alınmasıyla hammaddelerin ekonomik kullanımını sağlar ve üretim maliyetlerini düşürür,",
  "Tüm çalışanlarınızın çevre konusundaki bilinç ve farkındalıklarının artmasını sağlar.",
];

export default function Iso14001Page() {
  return (
    <ServiceDetailLayout
      category="Kalite Belgelendirme"
      title="ISO 14001 Çevre Yönetim Sistemi"
      description="ISO 14001 Çevre Yönetim Sistemi ve kuruluşlara sağladığı faydalar hakkında detaylı bilgi."
    >
      {/* ISO 14001 HAKKINDA */}
      <ServiceSection>
        <div className="grid items-start gap-8 md:grid-cols-[200px_minmax(0,1fr)] lg:gap-12">
          {/* GÖRSEL */}
          <div className="flex justify-center md:justify-start">
            <Image
              src="/services/iso-14001.png"
              alt="ISO 14001 Çevre Yönetim Sistemi"
              width={183}
              height={275}
              className="h-auto w-[130px] sm:w-[145px] md:w-[165px]"
              priority
            />
          </div>

          {/* METİN */}
          <div className="min-w-0">
            <h2 className="text-xl font-bold text-[#0d4d5c] md:text-[22px]">
              ISO 14001 Çevre Yönetim Sistemi
            </h2>

            <div className="mt-4">
              <ServiceText>
                <p>
                  Kuruluşların faaliyetleri nedeniyle çevreye verdiği zararı
                  en aza indiren, hammadde, enerji tüketimini azaltarak
                  finansal açıdan yarar sağlamalarına destek olan bir çevre
                  yönetim sistemidir.
                </p>

                <p>
                  ISO 14001, Çevre Yönetim Sistemlerine ilişkin olarak
                  uluslararası alanda tanınmış bir standarttır ve kuruluşların
                  faaliyetlerinin, ürünlerinin ve hizmetlerinin çevreyle ilgili
                  unsurlarının daha etkin şekilde nasıl yönetileceği konusunda
                  bir kılavuz sunmaktadır.
                </p>
              </ServiceText>
            </div>
          </div>
        </div>
      </ServiceSection>

      {/* FAYDALAR */}
      <ServiceSection title="ISO 14001:2015 Çevre Yönetim Sistemi’nin Kuruluşunuza Sağlayacağı Faydalar">
        <ServiceList>
          {faydalar.map((fayda) => (
            <li key={fayda} className="flex items-start gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#16859a]" />
              <span>{fayda}</span>
            </li>
          ))}
        </ServiceList>
      </ServiceSection>
    </ServiceDetailLayout>
  );
}