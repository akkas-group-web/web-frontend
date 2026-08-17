import type { Metadata } from "next";

import {
  ServiceList,
  ServiceSection,
  ServiceText,
} from "@/components/sections/services/ServiceContent";
import { ServiceDetailLayout } from "@/components/sections/services/ServiceDetailLayout";

export const metadata: Metadata = {
  title: "ISO 22000 HACCP Gıda Güvenliği | Akkaş Group",
  description:
    "ISO 22000 HACCP Gıda Güvenliği Yönetim Sistemi ve sağladığı faydalar hakkında detaylı bilgi.",
};

const faydalar = [
  "Uluslararası bir standarttır.",
  "Tüm dünyada ticaret kolaylığı sağlar.",
  "Tüketici tercihi, beğenisi ve güveninin kazanılmasını sağlar.",
  "Ürün kayıplarını azaltır.",
  "Rekabet gücü kazandırır.",
  "Ürün ve hizmet kalitesinde ölçülebilir düzelme sağlar.",
  "Güvenilir gıdanın tüketiciye ulaşmasını sağlar.",
  "Yasal mevzuata uygunluğun sağlanmasına yardımcı olur.",
];

export default function Iso22000Page() {
  return (
    <ServiceDetailLayout
      category="Kalite Belgelendirme"
      title="ISO 22000 HACCP Gıda Güvenliği"
      description="ISO 22000 HACCP Gıda Güvenliği Yönetim Sistemi ve sağladığı faydalar hakkında detaylı bilgi."
    >
      <ServiceSection title="ISO 22000:2005 HACCP Gıda Güvenliği Yönetim Sistemi">
        <ServiceText>
          <p>
            Gıda zincirindeki potansiyel tehlikelerin analizi yapıldıktan
            sonra kritik kontrol noktalarının belirtilmesi ve izlenmesi,
            gözden geçirilmesi, iyileştirmesini içermektedir.
          </p>

          <p>
            Günümüzde güvenli gıda üretimi için hammaddeler, katkılar,
            yardımcı diğer maddeler ve ambalaj malzemelerinin üretiminden
            başlayarak tedarikçilerin seçimi ve değerlendirmesini, işletmeye
            kabulünü, üretim aşamalarını, son muhafaza ve sevkiyat dahil olmak
            üzere kontrol altında tutan bir yaklaşımın gerekliliği ortaya
            çıkmıştır.
          </p>

          <p>
            HACCP (Hazard Analysis and Critical Control Points - Tehlike
            Analizleri ve Kritik Kontrol Noktaları) Sistemi bu yaklaşımlardan
            birisidir.
          </p>
        </ServiceText>
      </ServiceSection>

      <ServiceSection title="Faydaları Nelerdir?">
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