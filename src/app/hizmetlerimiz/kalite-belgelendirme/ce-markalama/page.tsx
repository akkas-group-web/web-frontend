import type { Metadata } from "next";

import {
  ServiceList,
  ServiceSection,
  ServiceText,
} from "@/components/sections/services/ServiceContent";
import { ServiceDetailLayout } from "@/components/sections/services/ServiceDetailLayout";

export const metadata: Metadata = {
  title: "CE Markalama | Akkaş Group",
  description:
    "CE Markalama, CE süreci ve Onaylı Kuruluş hakkında detaylı bilgi.",
};

const birinciAsama = [
  "Ürünün teknik özelliklerinin tanımlanması;",
  "Ürünün hangi direktifler kapsamında olduğunun belirlenmesi;",
  "Ürüne özel standartların araştırılması;",
  "Uygulanacak direktiflerin ve harmonize standartların belirlenmesi;",
  "Kalite Yönetim Sistemi gereksinimlerinin incelenmesi;",
];

const ikinciAsama = [
  "Teknik Dokümantasyon / Teknik Dosyanın hazırlanması;",
  "Risk Analizinin yapılması;",
  "Normlara uygun kullanım kılavuzu hazırlanması;",
  "Ürünün test, analiz ve teknik kontrollerinin yapılması;",
  "Uygunluk Beyanı’nın yayınlanması;",
  "Gerekli durumlarda Onaylı Kuruluş veya test kuruluşundan sertifika ve/veya test raporu alınması;",
];

export default function CeMarkalamaPage() {
  return (
    <ServiceDetailLayout
      category="Kalite Belgelendirme"
      title="CE Markalama"
      description="CE Markalama, uygunluk değerlendirme süreci ve Onaylı Kuruluş uygulamaları hakkında detaylı bilgi."
    >
      {/* CE MARKALAMA */}
      <ServiceSection title="CE Markalama">
        <ServiceText>
          <p>
            Avrupa ülkeleri son 20 yıllık süreçte ekonomik topluluk projesinin
            ardından sınırların kalkması, ürünlerin ve insanların serbest
            dolaşımı gibi açılımları içinde barındıran “Avrupa Birliği”
            projesini hayata geçirmişlerdir. Ürünlerin serbest dolaşımı ise
            teknik mevzuatın tüm üye ülkeler için aynı olması gerekliliğini
            ortaya çıkarmıştır. Bunun en önemli sebebi ürünlere ait temel
            emniyet ve sağlık koşullarının ortak bir seviyeye çekerek, ülkeler
            arası rekabet ve emniyeti şartlarını eşit kılmaktır. İşte bu yüzden
            CE işaretlemesine yönelik yayınlanan direktifler; tüm üye ülkelerde
            ve müzakere sürecindeki ülkelerde yasa olarak kabul edilerek
            ürünlerin serbest dolaşımını kolaylaştıracak, farklılıkları ortadan
            kaldıracak bir yol bulunmuştur. CE işareti bu anlamda vize,
            pasaport veya ehliyet gibi algılanabilir.
          </p>

          <p>
            Ancak temelde CE, Avrupa Birliği’nin teknik mevzuat uyumu
            çerçevesinde geliştirilen ve ürünün asgari güvenlik koşullarına
            sahip olduğunu gösteren bir uygunluk işaretidir. Sadece ürünün
            temel gerekler olarak tanımlanan ve insan sağlığı, can ve mal
            güvenliği, hayvan ve bitki yaşamı ile sağlığı ve çevre ile
            tüketicinin korunması açısından asgari güvenlik koşullarına uygun
            olduğunu gösterir.
          </p>

          <p>
            Avrupa Birliği’nin teknik mevzuat uyumu dolayısıyla 1985 yılında
            benimsediği Yeni Yaklaşım Politikası kapsamındaki Yeni Yaklaşım
            Direktifleri’ne konu olan ürünlerin Avrupa Birliği üyesi veya
            müzakere sürecindeki ülkelerden herhangi birine girişi için
            üzerinde CE işareti taşıması zorunludur. Aynı zamanda iç pazara
            sunulan ürünlerin de CE taşıması zorunludur.
          </p>

          <p>
            Türkiye AB uyum yasaları çerçevesinde son yıllarda CE işaretine
            ilişkin direktifleri yürürlüğe koymuş, hem iç pazar hem de ihracata
            yönelik üretilen ürünlerde CE işareti aranmasını zorunlu kılmıştır.
            CE işareti, ilgili direktifler doğrultusunda yasal olarak bağlayıcı
            niteliktedir.
          </p>

          <p>
            CE işareti, Yeni Yaklaşım Direktifleri’ne konu olan ürünlerin AB
            üyesi ülkelerde serbest dolaşıma çıkabilmesi için pasaport işlevi
            görmektedir. Dünyadaki en büyük ekonomik ve siyasi güç olma
            yolundaki Avrupa Birliği, üye ülkeler itibarıyla teknik standartlar
            arasında da bir teknik uyum sağlamak amacıyla çeşitli sistemler
            oluşturmuştur. Bu sistemlerin en önemli amacıysa, aynı teknik
            standartlarda üretim yapılmasını sağlamaktır. CE üretici tarafından
            iliştirilen bir işaret olup, kalite markası veya garanti belgesi
            değildir. Sadece ürünün güvenliği ve direktiflere uygunluğunu
            gösteren bir işarettir.
          </p>
        </ServiceText>
      </ServiceSection>

      {/* CE SÜRECİ */}
      <ServiceSection title="CE Süreci">
        <div className="space-y-7">
          {/* 1. AŞAMA */}
          <div>
            <h3 className="mb-3 text-base font-semibold text-[#0d4d5c]">
              1. Aşama
            </h3>

            <ServiceList>
              {birinciAsama.map((madde) => (
                <li key={madde} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#16859a]" />
                  <span>{madde}</span>
                </li>
              ))}
            </ServiceList>

            <div className="mt-3">
              <ServiceText>
                <p>
                  (Bazı direktifler CE işareti sürecinde kalite sistemi
                  bulunmasını öngörmektedir)
                </p>
              </ServiceText>
            </div>
          </div>

          {/* 2. AŞAMA */}
          <div>
            <h3 className="mb-3 text-base font-semibold text-[#0d4d5c]">
              2. Aşama
            </h3>

            <ServiceList>
              {ikinciAsama.map((madde) => (
                <li key={madde} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#16859a]" />
                  <span>{madde}</span>
                </li>
              ))}
            </ServiceList>

            <div className="mt-3">
              <ServiceText>
                <p>
                  (Bu kontroller firma içindeki imkanlarla ya da gerekli
                  durumlarda Onaylı Kuruluşlar veya test laboratuarları
                  tarafından yapılabilir.)
                </p>
              </ServiceText>
            </div>
          </div>

          {/* 3. AŞAMA */}
          <div>
            <h3 className="mb-3 text-base font-semibold text-[#0d4d5c]">
              3. Aşama
            </h3>

            <ServiceText>
              <p>
                CE işaretinin ilgili direktife uygun olarak ürüne
                iliştirilmesi.
              </p>
            </ServiceText>
          </div>

          {/* 4. AŞAMA */}
          <div>
            <h3 className="mb-3 text-base font-semibold text-[#0d4d5c]">
              4. Aşama
            </h3>

            <ServiceText>
              <p>
                Ürüne ait Teknik Dosya’nın ürünle ilgili direktifte belirtilen
                süreyle saklanması ve gerektiğinde yetkili makamlara / piyasa
                gözetimi yapan yetkili kurumlara sunulabilecek şekilde
                arşivlenmesi.
              </p>
            </ServiceText>
          </div>
        </div>
      </ServiceSection>

      {/* ONAYLI KURULUŞ */}
      <ServiceSection title="Onaylı Kuruluş (Notified Body)">
        <ServiceText>
          <p>
            Avrupa Birliği mevzuatı, CE İşareti taşıması gereken ürünlerden
            yüksek risk taşıyan ürünlerin, piyasaya arz edilmeden önce
            konusunda uzman, üçüncü bir taraf olan ve AB Resmi Gazetesi&apos;nde
            yayımlanmış kuruluşlar tarafından uygunluk değerlendirmesine tabi
            tutulmasını şart koşmaktadır. Bu ürünlerin test, muayene ve/veya
            belgelendirmesini yapmak üzere üye ülkeler tarafından altyapısı
            yeterli görülen test, muayene ve/veya belgelendirme kuruluşları
            arasından seçilerek AB Resmi Gazetesi&apos;nde yayımlanan kuruluşlar
            onaylanmış kuruluş (bazı direktiflerde farklı terimler
            kullanılabilse de genel olarak &quot;notified body&quot; ifadesi
            kullanılmaktadır.) statüsünü almaktadır. Üye ülkelerce belirlenen
            onaylanmış kuruluşlar Avrupa Komisyonu&apos;na bildirilmekte ve diğer
            üye ülkelere duyurulması amacıyla bu listeler AB Resmi
            Gazetesi’nde yayımlanmaktadır.
          </p>

          <p>
            AB resmi gazetesinde yakın gelecekte ulusal Onaylı Kuruluşların da
            yer alması beklenmektedir. AB Resmi Gazetesi’nde yayınlanan onaylı
            kuruluşun 4 haneli bir kayıt numarası bulunur, bu numaraya sahip
            onaylı kuruluş yetkiyi hangi yönetmeliklerde ve hangi kapsamda
            almışlarsa, hizmet kapsamlarını bu kapsama göre sınırlandırmak
            durumundadırlar. Örneğin, sadece Makine Direktifi’nde yetkilenmiş
            ve kayıt numarası almış bir onaylı kuruluş bu yetkiye dayanarak
            Tıbbi Cihaz Direktifi’ne uygun belgelendirme yapamaz. Ancak bu
            onaylı kuruluş bu direktifte de kayıt numarası almış ve listede
            yayınlanmış ise bu belgelendirmeyi gerçekleştirebilir.
          </p>
        </ServiceText>
      </ServiceSection>
    </ServiceDetailLayout>
  );
}