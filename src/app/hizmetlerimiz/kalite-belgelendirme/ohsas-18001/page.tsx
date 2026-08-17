import type { Metadata } from "next";

import {
  ServiceSection,
  ServiceText,
} from "@/components/sections/services/ServiceContent";
import { ServiceDetailLayout } from "@/components/sections/services/ServiceDetailLayout";

export const metadata: Metadata = {
  title: "OHSAS 18001 İş Sağlığı ve İş Güvenliği | Akkaş Group",
  description:
    "OHSAS 18001 İş Sağlığı ve İş Güvenliği Yönetim Sistemi hakkında detaylı bilgi.",
};

export default function Ohsas18001Page() {
  return (
    <ServiceDetailLayout
      category="Kalite Belgelendirme"
      title="OHSAS 18001 İş Sağlığı ve İş Güvenliği"
      description="OHSAS 18001 İş Sağlığı ve İş Güvenliği Yönetim Sistemi hakkında detaylı bilgi."
    >
      <ServiceSection title="OHSAS 18001 İş Sağlığı ve İş Güvenliği">
        <ServiceText>
          <p>
            OHSAS 18001, BSI (British standarts Institute) tarafından
            yayınlanmış olan &quot;İş Sağlığı ve Güvenliği&quot; standardıdır.
          </p>

          <p>
            OHSAS 18001; ISO 9000 ve ISO 14000 gibi diğer uluslararası
            standartlardan farklı olarak bazı ulusal standart kuruluşları ve
            belgelendirme kuruluşlarının birlikte çalışmasıyla
            gerçekleştirilmiştir ve bir ISO standardı değildir.
          </p>

          <p>
            OHSAS 18001 iş sağlığı ve güvenliği yönetim sistemi konusundaki
            gereklilikleri belirleyen uluslararası bir standarddır. OHSAS
            18001, kuruluşların kalite, çevre ve iş sağlığı ve güvenliği
            yönetim sistemlerini entegre edebilmelerini sağlamak amacıyla ISO
            9001 (QMS) ve ISO 14001 (EMS) standardlarıyla uyumlu olacak şekilde
            geliştirilmiştir. Ulusal sağlık ve güvenlik standardlarına uyum
            tüm kuruluşlar için zorunludur.
          </p>

          <p>
            OHSAS 18001 bir yandan kuruluşların yasal standardlarla olan
            uyumunu gösterirken öte yandan iş ortamının sürekli iyileştrilmesi
            sayesinde iş yerindeki üretkenliği ve verimi arttırır.
          </p>

          <p>
            OHSAS 18001 kuruluşların ürün ve hizmetlerinin güvenliğinden çok
            çalışanın sağlığına ve işin güvenliğine yönelik bir standarttır.
          </p>
        </ServiceText>
      </ServiceSection>
    </ServiceDetailLayout>
  );
}