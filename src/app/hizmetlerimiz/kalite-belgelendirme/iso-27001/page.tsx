import type { Metadata } from "next";

import {
  ServiceSection,
  ServiceText,
} from "@/components/sections/services/ServiceContent";
import { ServiceDetailLayout } from "@/components/sections/services/ServiceDetailLayout";

export const metadata: Metadata = {
  title: "ISO 27001 Bilgi Güvenliği Yönetim Sistemi | Akkaş Group",
  description:
    "ISO 27001 Bilgi Güvenliği Yönetim Sistemi ve kimler için gerekli olduğu hakkında detaylı bilgi.",
};

const kimlerIcinGereklidir = [
  "Bilişim sektöründe faaliyet gösteren ve kamu ihalelerine giren bilgisayar yazılım, donanım firmaları",
  "Elektronik Haberleşme şebekesi sağlayan ve alt yapısını işleten firmalar",
  "Görev veya İmtiyaz Sözleşmesi İmzalayan firmalar şirketler",
  "Sabit Telefon Hizmeti veya Uydu Haberleşme Hizmeti Veren firmalar şirketler",
  "Altyapı İşletmeciliği Hizmeti Veren firmalar şirketler",
  "GMPCS Mobil Telefon Hizmeti Veren firmalar şirketler",
  "Sanal Mobil Şebeke Hizmeti firmalar şirketler",
  "İnternet Servis Sağlayıcıları",
  "Hava Taşıtlarında GSM 1800 Mobil Telefon Hizmeti veren firmalar şirketler",
  "E fatura Özel Entegratör Yetkisi almak isteyen firmalar",
  "Gümrük işleri Kolaylaştırma Yetkisi almak isteyen ihracatçı firmalar",
];

export default function Iso27001Page() {
  return (
    <ServiceDetailLayout
      category="Kalite Belgelendirme"
      title="ISO 27001 Bilgi Güvenliği Yönetim Sistemi"
      description="ISO 27001 Bilgi Güvenliği Yönetim Sistemi ve kimler için gerekli olduğu hakkında detaylı bilgi."
    >
      {/* KİMLER İÇİN GEREKLİDİR */}
      <ServiceSection title="ISO 27001 Kimler için Gereklidir?">
        <div className="space-y-2 text-[14px] leading-6 text-[#58696e]">
          {kimlerIcinGereklidir.map((madde) => (
            <p key={madde}>{madde}</p>
          ))}
        </div>
      </ServiceSection>

      {/* AÇIKLAMA */}
      <ServiceSection>
        <ServiceText>
          <p>
            ISO 27001 Bilgi güvenliği hizmeti Kişisel Verilerin Korunması
            Kanunu kapsamında firmalara bazı zorunlukları kolayca sağlamaları
            konusunda ciddi fayda avantaj sağlayacaktır.
          </p>

          <p>
            ISO 27001 Bilgi Güvenliği Yönetim Sistemi, şirketlerin finansal
            verilerini, fikri mülkiyetlerini ve hassas müşteri bilgilerini
            korumalarına yardımcı olan uluslararası bir çerçevedir. ISO 27001
            sayesinde şirketler risklerini tanımlayabilir, gizli bilgileri
            konusundaki riskleri yönetebilir veya azaltabilir. Ayrıca bu
            doğrultuda gerekli güvenlik önlemlerini yerine getirirler.
          </p>
        </ServiceText>
      </ServiceSection>
    </ServiceDetailLayout>
  );
}