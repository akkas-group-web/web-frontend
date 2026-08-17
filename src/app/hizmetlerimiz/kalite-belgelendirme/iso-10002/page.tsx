import type { Metadata } from "next";

import {
  ServiceSection,
  ServiceText,
} from "@/components/sections/services/ServiceContent";
import { ServiceDetailLayout } from "@/components/sections/services/ServiceDetailLayout";

export const metadata: Metadata = {
  title: "ISO 10002 Müşteri Memnuniyeti Belgesi | Akkaş Group",
  description:
    "ISO 10002 Müşteri Memnuniyeti Belgesi ve müşteri şikayetlerinin ele alınması hakkında detaylı bilgi.",
};

const sikayetleriEleAlma = [
  "Müşteri geri bildirimleri ele alınarak müşteri odaklı bir ortama oluşturularak müşteri şikayetlerinin çözümü ile müşteri hizmetlerini iyileştirmek ve organizasyonun yeteneğini arttırarak müşteri memnuniyetinin arttırılması ve dolayısıyla karlılığın da arttırılması hedeflenir,",
  "Üst yönetim taahhüdü ile yeterli insan kaynağı sağlanması,",
  "Şikayetlerin ihtiyaçlarını ve beklentileri tanıma değerlendirme",
  "Açık bir şikayet yönetim sistemi oluşturma",
  "Şikayetlerin analizi yapılarak kök nedene ulaşma,",
  "Şikayetlerin işleme sürecinin denetimi,",
  "Şikayetleerin işleme sürecinin etkinlik ve verimliliğini gözden geçirme.",
];

export default function Iso10002Page() {
  return (
    <ServiceDetailLayout
      category="Kalite Belgelendirme"
      title="ISO 10002 Müşteri Memnuniyeti Belgesi"
      description="ISO 10002 Müşteri Memnuniyeti Belgesi ve müşteri şikayetlerinin ele alınması hakkında detaylı bilgi."
    >
      {/* ISO 10002 HAKKINDA */}
      <ServiceSection title="ISO 10002 Müşteri Memnuniyeti Belgesi">
        <ServiceText>
          <p>
            Bir kuruluşun planlama, tasarım, satış, servis vs. dahil olmak üzere
            organizasyon içerisinde müşteriler ile ilgili şikayetleri ele alma
            ile ilgili standarttır. Alınan şikayetlerin genel kalite sistemi
            içwerisinde ele alınmaktadır.
          </p>

          <p>
            ISO 10002 iş ile ilgili ihtilafların çözümü üçün geçerli değildir
            sadece müşteri şikayetleri üzerinde odaklanan bir standarttır.
          </p>

          <p>
            Küçük bir işletmeden en büyük işletmeye kadar bütün sektörler için
            uyumlu bir standarttır.
          </p>
        </ServiceText>
      </ServiceSection>

      {/* ŞİKAYETLERİ ELE ALMA */}
      <ServiceSection title="Şikayetleri Ele Alma">
        <div className="space-y-2 text-[14px] leading-6 text-[#58696e]">
          {sikayetleriEleAlma.map((madde) => (
            <p key={madde}>{madde}</p>
          ))}
        </div>
      </ServiceSection>
    </ServiceDetailLayout>
  );
}