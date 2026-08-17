import type { Metadata } from "next";

import {
  ServiceSection,
  ServiceText,
} from "@/components/sections/services/ServiceContent";
import { ServiceDetailLayout } from "@/components/sections/services/ServiceDetailLayout";

export const metadata: Metadata = {
  title: "ISO/TS 16949 | Akkaş Group",
  description:
    "ISO/TS 16949 otomotiv sektörüne yönelik kalite yönetim sistemi hakkında detaylı bilgi.",
};

export default function IsoTs16949Page() {
  return (
    <ServiceDetailLayout
      category="Kalite Belgelendirme"
      title="ISO/TS 16949"
      description="ISO/TS 16949 otomotiv sektörüne yönelik kalite yönetim sistemi hakkında detaylı bilgi."
    >
      <ServiceSection title="ISO/TS 16949">
        <ServiceText>
          <p>
            Otomotiv sektöründeki üretici ana kuruluşların ve bu kuruluşlara
            yedek parça üreten yan kuruluşların kalite sistemlerinin ortak bir
            anlayış içinde güvence altına alınmasını ve bu anlayışın
            süreklilik kazanmasını amaçlayan sistematik bir yaklaşımdır.
          </p>
        </ServiceText>
      </ServiceSection>
    </ServiceDetailLayout>
  );
}