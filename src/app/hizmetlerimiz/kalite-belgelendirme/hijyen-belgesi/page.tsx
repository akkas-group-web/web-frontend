import type { Metadata } from "next";

import {
  ServiceOrderedList,
  ServiceSection,
  ServiceText,
} from "@/components/sections/services/ServiceContent";
import { ServiceDetailLayout } from "@/components/sections/services/ServiceDetailLayout";

export const metadata: Metadata = {
  title: "Hijyen Belgesi | Akkaş Group",
  description:
    "Hijyen Belgesi, hijyen eğitimi ve hijyen eğitimi alınması gereken faaliyet alanları hakkında detaylı bilgi.",
};

const guzellikVeSacBakim = [
  "Cilt Bakimi Hijyen Eğitimi",
  "Dövme ve Taki (Piercing) Hijyen Eğitimi",
  "Güzellik ve Saç Bakim Hizmetlerinde İşyeri Sahipleri ve İşletenlerin Hijyen Eğitimi",
  "Kuafor (Kadin/Erkek) Hijyen Egitimi",
  "Makyaj Hijyen Eğitimi",
  "Vücut Bakimi Hijyen Eğitimi",
  "Kaplıca, Hamam ve Sauna Görevlisi Hijyen Eğitimi",
];

const pazarlamaVePerakende = [
  "Kantin İşletmeciligi Hijyen Eğitimi",
  "Meyve ve Sebze Satis, Elemanlığı Hijyen Eğitimi",
  "Su ve Deniz Ürünleri Satis, Elemanliği Hijyen Eğitimi",
  "Şarkuteri, Bakkal ve Gida Pazarlari Satis Elemanliği Hijyen Eğitimi",
  "Tarım Ürünleri Satiş, Elemanliği Hijyen Eğitimi",
];

const yiyecekIcecekHizmetleri = [
  "Asci Hijyen Eğitimi",
  "Bar Görevlisi (Barmen) Hijyen Eğitimi",
  "Et ve Et Urunleri İşlemeciliği Hijyen Eğitimi",
  "Otel/Motel ve Lokanta Yöneticileri Hijyen Eğitimi",
  "Pastaci Hijyen Eğitimi",
  "Servis Görevlisi (Garson) Hijyen Eğitimi",
  "Şef (Yiyecek Hazirlama ve Sunum Hizmetleri) Hijyen Eğitimi",
];

const toplumSagligi = [
  "Su Temini (Üretimi) Hijyen Eğitimi",
];

const gidaTeknolojisi = [
  "Çay Üretimi ve İşleme Elemani Hijyen Eğitimi",
  "Gida Kontrol Elemani Hijyen Eğitimi",
  "Hububat İşleme Elemani Hijyen Eğitimi",
  "Süt İşleme Elemani Hijyen Eğitimi",
  "Sebze ve Meyve İşleme Elemani Hijyen Eğitimi",
  "Zeytin İşleme Elemani Hijyen Egitimi",
];

export default function HijyenBelgesiPage() {
  return (
    <ServiceDetailLayout
      category="Kalite Belgelendirme"
      title="Hijyen Belgesi"
      description="Hijyen Belgesi ve hijyen eğitimi kapsamında yer alan faaliyet alanları hakkında detaylı bilgi."
    >
      {/* HİJYEN BELGESİ NEDİR */}
     <ServiceSection title="Hijyen belgesi nedir?">
  <ServiceText>
    <p>
      Hijyen, insan sağlığına zarar verecek ortam ve/veya faaliyetlerden
      korumak adına yapılan önleyici uygulamaları kapsamaktadır. Hijyen
      eğitimlerini başta işyeri yemekhaneleri, restoranlar ve diğer benzeri
      gıda hizmetlerinin sunulduğu yerler olmak üzere, konaklama hizmeti
      veren, gıda üretimi yapan işyerleri ve insan bedenine temasın söz konusu
      olduğu temizlik hizmetlerinin verildiği iş yerlerinde çalışanlarının
      almaları gerekmektedir.{" "}
      
      <span className="underline underline-offset-2">
        24/04/1930 tarihinde yayınlanan 1593 sayılı Umumi Hıfzıssıhha
        Kanununun 127. maddesine
      </span>{" "}
      
      dayanılarak hazırlanan Hijyen Eğitimi Yönetmeliği{" "}
      
      <strong className="font-bold text-[#0d4d5c]">
        5 Temmuz 2013
      </strong>{" "}
      
      tarihinde yürürlüğe girmiş olup, bu kapsamda aşağıda belirtilen
      faaliyet alanlarında istihdam eden çalışanların eğitim alması
      gerekmektedir.
    </p>
  </ServiceText>
</ServiceSection>
      {/* GÜZELLİK VE SAÇ BAKIM */}
      <ServiceSection title="GÜZELLİK VE SAÇ BAKIM HİZMETLERİ">
        <ServiceOrderedList>
          {guzellikVeSacBakim.map((madde) => (
            <li key={madde}>{madde}</li>
          ))}
        </ServiceOrderedList>
      </ServiceSection>

      {/* PAZARLAMA VE PERAKENDE */}
      <ServiceSection title="PAZARLAMA VE PERAKENDE (FOET KODU: 341)">
        <ServiceOrderedList>
          {pazarlamaVePerakende.map((madde) => (
            <li key={madde}>{madde}</li>
          ))}
        </ServiceOrderedList>
      </ServiceSection>

      {/* YİYECEK İÇECEK */}
      <ServiceSection title="YİYECEK İÇECEK HİZMETLERİ">
        <ServiceOrderedList>
          {yiyecekIcecekHizmetleri.map((madde) => (
            <li key={madde}>{madde}</li>
          ))}
        </ServiceOrderedList>
      </ServiceSection>

      {/* TOPLUM SAĞLIĞI */}
      <ServiceSection title="TOPLUM SAĞLIĞINI KORUYUCU HİZMETLER">
        <ServiceOrderedList>
          {toplumSagligi.map((madde) => (
            <li key={madde}>{madde}</li>
          ))}
        </ServiceOrderedList>
      </ServiceSection>

      {/* GIDA TEKNOLOJİSİ */}
      <ServiceSection title="GIDA TEKNOLOJİSİ">
        <ServiceOrderedList>
          {gidaTeknolojisi.map((madde) => (
            <li key={madde}>{madde}</li>
          ))}
        </ServiceOrderedList>
      </ServiceSection>
    </ServiceDetailLayout>
  );
}