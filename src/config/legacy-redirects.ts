/**
 * Eski akkasgroup.com URL yapısı (flat) → yeni Next.js URL yapısı (nested) eşleştirmesi.
 * Yeni bir sayfa eklendikçe veya eski bir URL fark edildikçe buraya satır ekle.
 * Kaynak: eski site sitemap.xml taraması, 2026-09.
 */
export const LEGACY_REDIRECTS: Record<string, string> = {
  // --- yatirim danismanligi ---
  "/dahilde-isleme-izin-belgesi":
    "/hizmetlerimiz/yatirim-danismanligi/dahilde-isleme-izin-belgesi",
  "/haricte-isleme-izin-belgesi":
    "/hizmetlerimiz/yatirim-danismanligi/haricte-isleme-izin-belgesi",
  "/turizm-yatirim-tesvik-belge":
    "/hizmetlerimiz/yatirim-danismanligi/turizm-yatirim-tesvik-belge",
  "/yatirim-fizibilite-raporlarinin-hazirlanmasi":
    "/hizmetlerimiz/yatirim-danismanligi/yatirim-fizibilite-raporlarinin-hazirlanmasi",
  "/yatirim-taahhutlu-avans-kredisi":
    "/hizmetlerimiz/yatirim-danismanligi/yatirim-taahhutlu-avans-kredisi",
  "/yatirim-tesvik-belgesi":
    "/hizmetlerimiz/yatirim-danismanligi/yatirim-tesvik-belgesi",
  "/yatirim-tesvik-belgesi-gumruk-vergi-muafiyetleri":
    "/hizmetlerimiz/yatirim-danismanligi/yatirim-tesvik-belgesi-gumruk-vergi-muafiyetleri",
  "/turizm-isletme-belgesi":
    "/hizmetlerimiz/yatirim-danismanligi/turizm-isletme-belgesi",
  "/dijital-donusum-destek-programi":
    "/hizmetlerimiz/yatirim-danismanligi/dijital-donusum-destek-programi",
  "/yesil-donusum-destek-programi":
    "/hizmetlerimiz/yatirim-danismanligi/yesil-donusum-destek-programi",
  "/teknoloji-odakli-sanayi-hamle-programi":
    "/hizmetlerimiz/yatirim-danismanligi/teknoloji-odakli-sanayi-hamle-programi",

  // --- devlet destekleri ---
  "/ab-fonlari": "/hizmetlerimiz/devlet-destekleri/ab-fonlari",
  "/dis-ticaret-destekleri":
    "/hizmetlerimiz/devlet-destekleri/dis-ticaret-destekleri",
  "/ipard": "/hizmetlerimiz/devlet-destekleri/ipard",
  "/kalkinma-ajanslari-destekleri":
    "/hizmetlerimiz/devlet-destekleri/kalkinma-ajanslari-destekleri",
  "/kirsal-kalkinma-proje-destekleri-tkdk":
    "/hizmetlerimiz/devlet-destekleri/kirsal-kalkinma-proje-destekleri-tkdk",
  "/kobigel-2021": "/hizmetlerimiz/devlet-destekleri/kobigel-2021",
  "/kosgeb-destekleri": "/hizmetlerimiz/devlet-destekleri/kosgeb-destekleri",
  "/sanayi-bakanligi-destekleri":
    "/hizmetlerimiz/devlet-destekleri/sanayi-bakanligi-destekleri",
  "/ticaret-bakanligi-destekleri":
    "/hizmetlerimiz/devlet-destekleri/ticaret-bakanligi-destekleri",
  "/tubitak-destekleri": "/hizmetlerimiz/devlet-destekleri/tubitak-destekleri",
  "/ulastirma-bakanligi-destekleri":
    "/hizmetlerimiz/devlet-destekleri/ulastirma-bakanligi-destekleri",
  "/yesil-sanayi-destek-programi":
    "/hizmetlerimiz/devlet-destekleri/yesil-sanayi-destek-programi",
  "/arge-ve-tasarim-merkezi-kurulumu":
    "/hizmetlerimiz/devlet-destekleri/arge-ve-tasarim-merkezi-kurulumu",

  // "/6111-sayili-tesvikten-nasil-fayda-saglanir":
  //   "/hizmetlerimiz/devlet-destekleri/6111-sayili-tesvikten-nasil-fayda-saglanir",

  // "/devlet-tesvikleri-ve-kobiler":
  //   "/hizmetlerimiz/devlet-destekleri/devlet-tesvikleri-ve-kobiler",

  // "/dijital-donusum-destek-programi-basladi":
  //   "/hizmetlerimiz/devlet-destekleri/dijital-donusum-destek-programi-basladi",

  // "/konaklama-tesislerine-sgk-prim-destegi":
  //   "/hizmetlerimiz/devlet-destekleri/konaklama-tesislerine-sgk-prim-destegi",

  // "/teknoloji-odakli-sanayi-hamle-programi-basladi":
  //   "/hizmetlerimiz/devlet-destekleri/teknoloji-odakli-sanayi-hamle-programi-basladi",

  // "/yesil-donusum-destek-programi-basladi":
  //   "/hizmetlerimiz/devlet-destekleri/yesil-donusum-destek-programi-basladi",

  // "/yurt-disi-pazar-destek-programi":
  //   "/hizmetlerimiz/devlet-destekleri/yurt-disi-pazar-destek-programi",

  // --- Makale ---
  "/Blog/detay/sgk-tesvikleri-ve-sigorta-tesvik-sistemi":
    "/blog/sgk-tesvikleri-ve-sigorta-tesvik-sistemi",
  "/Blog/detay/tahsilat-performansi": "/blog/tahsilat-performansi",
  "/Blog/detay/isletmelere-girisimcilere-ve-yatirimcilara-yonelik-bilgi-transferini-kolaylastiran-online-teknoloji":
    "/blog/isletmelere-girisimcilere-ve-yatirimcilara-yonelik-bilgi-transferini-kolaylastiran-online-teknoloji",
  "/Blog/detay/telefonda-dogru-iletisim-icin-altin-ogutler":
    "/blog/telefonda-dogru-iletisim-icin-altin-ogutler",
  "/Blog/detay/calisma-hayatinda-ve-gunluk-yasamda-guvenlik-kulturu":
    "/blog/calisma-hayatinda-ve-gunluk-yasamda-guvenlik-kulturu",
  "/Blog/detay/etkili-konusma-nasil-yapilir":
    "/blog/etkili-konusma-nasil-yapilir",
  "/Blog/detay/kimyasal-maddelerin-is-hayatindaki-yeri":
    "/blog/kimyasal-maddelerin-is-hayatindaki-yeri",
  "/Blog/detay/isg-egitimlerinin-gerekliligi":
    "/blog/isg-egitimlerinin-gerekliligi",
  "/Blog/detay/is-sagligi-ve-guvenliginin-onemi":
    "/blog/is-sagligi-ve-guvenliginin-onemi",
  "/Blog/detay/devlet-tesvikleri-ve-kobiler":
    "/blog/devlet-tesvikleri-ve-kobiler",
  "/Blog/detay/is-guvenligi-levhalari-tehlikelere-karsi-guvenligi-saglamamiza-yardimci-oluyor-mu":
    "/blog/is-guvenligi-levhalari-tehlikelere-karsi-guvenligi-saglamamiza-yardimci-oluyor-mu",
  "/Blog/detay/kisisel-veri-sahibi-nin-haklari-ve-kanun-hukumlerinin-uygulanmayacagi-haller":
    "/blog/kisisel-veri-sahibi-nin-haklari-ve-kanun-hukumlerinin-uygulanmayacagi-haller",
  "/Blog/detay/sgk-ve-iskur-tesviklerinin-isverenler-acisindan-onemi":
    "/blog/sgk-ve-iskur-tesviklerinin-isverenler-acisindan-onemi",
  "/Blog/detay/kisisel-verilerin-korunmasi-kanununun-sosyal-hayat-ve-is-dunyasindaki-onemi":
    "/blog/kisisel-verilerin-korunmasi-kanununun-sosyal-hayat-ve-is-dunyasindaki-onemi",
  // "/sgk-tesvikleri-ve-sigorta-tesvik-sistemi":
  //   "/hizmetlerimiz/sigorta-tesvik-danismanligi/sgk-tesvikleri-ve-sigorta-tesvik-sistemi",

  // --- Haberler ---
  "/Blog/detay/kosgeb-destekleri-acildi": "/haberler/kosgeb-destekleri-acildi",
  "/Blog/detay/kosgeb-istihdami-koruma-destek-programi":
    "/haberler/kosgeb-istihdami-koruma-destek-programi",
  "/Blog/detay/konaklama-tesislerine-sgk-prim-destegi":
    "/haberler/konaklama-tesislerine-sgk-prim-destegi",
  "/Blog/detay/cbam-2-ceyrek-fiyati-yayimlandi":
    "/haberler/cbam-2-ceyrek-fiyati-yayimlandi",
  "/Blog/detay/yapay-zeka-kredi-programi":
    "/haberler/yapay-zeka-kredi-programi",
  "/Blog/detay/kapasite-gelistirme-destek-programi-2-basvuru-donemi-basladi":
    "/haberler/kapasite-gelistirme-destek-programi-2-basvuru-donemi-basladi",

  // --- grup sirketleri ---

  // --- Sigorta tesvik danimanligi (hizmetler) ---
  "/sts-hizmetleri":
    "/hizmetlerimiz/sigorta-tesvik-danismanligi/sts-hizmetleri",
  "/gecmis-donem-tesvik-hesaplamalari":
    "/hizmetlerimiz/sigorta-tesvik-danismanligi/gecmis-donem-tesvik-hesaplamalari",
  "/cari-donem-takipleri-6111":
    "/hizmetlerimiz/sigorta-tesvik-danismanligi/cari-donem-takipleri-6111",
  "/6645-isbasi-egitim-programini-tamamlayanlarin-istihdamina-yonelik-tesvik":
    "/hizmetlerimiz/sigorta-tesvik-danismanligi/6645-isbasi-egitim-programini-tamamlayanlarin-istihdamina-yonelik-tesvik",
  "/14857-engelli-sigortali-istihdamina-yonelik-tesvik":
    "/hizmetlerimiz/sigorta-tesvik-danismanligi/14857-engelli-sigortali-istihdamina-yonelik-tesvik",
  "/15746-arastirma-gelistirme-ve-tasarim-faaliyetlerine-iliskin-tesvik":
    "/hizmetlerimiz/sigorta-tesvik-danismanligi/15746-arastirma-gelistirme-ve-tasarim-faaliyetlerine-iliskin-tesvik",
  "/5225-55225-25225-kultur-yatirimlari-ve-girisimleri-hakkinda-uygulanan-sigorta-primi-tesviki":
    "/hizmetlerimiz/sigorta-tesvik-danismanligi/5225-55225-25225-kultur-yatirimlari-ve-girisimleri-hakkinda-uygulanan-sigorta-primi-tesviki",
  "/5510-25510-16322-26322-yatirimlarda-devlet-yardimlari-hakkinda-kararlar-uyarinca-uygulanan-tesvik":
    "/hizmetlerimiz/sigorta-tesvik-danismanligi/5510-25510-16322-26322-yatirimlarda-devlet-yardimlari-hakkinda-kararlar-uyarinca-uygulanan-tesvik",
  "/5510-46486-56486-66486-ilave-6-puanlik-prim-indirimi":
    "/hizmetlerimiz/sigorta-tesvik-danismanligi/5510-46486-56486-66486-ilave-6-puanlik-prim-indirimi",
  "/5510-6486-yurtdisina-goturulen-gonderilen-sigortalilara-uygulanan-5-puanlik-prim-indirimi":
    "/hizmetlerimiz/sigorta-tesvik-danismanligi/5510-6486-yurtdisina-goturulen-gonderilen-sigortalilara-uygulanan-5-puanlik-prim-indirimi",
  "/5510-malulluk-yaslilik-ve-olum-sigortasi-isveren-hissesinden-5-puanlik-indirim":
    "/hizmetlerimiz/sigorta-tesvik-danismanligi/5510-malulluk-yaslilik-ve-olum-sigortasi-isveren-hissesinden-5-puanlik-indirim",
  "/4447-15921-issizlik-odenegi-alanlarin-istihdami-halinde-uygulanan-prim-tesviki":
    "/hizmetlerimiz/sigorta-tesvik-danismanligi/4447-15921-issizlik-odenegi-alanlarin-istihdami-halinde-uygulanan-prim-tesviki",
  "/sigorta-tesvik-sistemi":
    "/hizmetlerimiz/sigorta-tesvik-danismanligi/sigorta-tesvik-sistemi",

  // --- fikri-sinai-mulkiyet-haklari ---
  "/cografi-isaret-tescili":
    "/hizmetlerimiz/fikri-sinai-mulkiyet-haklari/cografi-isaret-tescili",
  "/entegre-devre-topografyasi":
    "/hizmetlerimiz/fikri-sinai-mulkiyet-haklari/entegre-devre-topografyasi",
  "/marka-tescili": "/hizmetlerimiz/fikri-sinai-mulkiyet-haklari/marka-tescili",
  "/patent-ve-faydali-model-tescili":
    "/hizmetlerimiz/fikri-sinai-mulkiyet-haklari/patent-ve-faydali-model-tescili",
  "/tasarim": "/hizmetlerimiz/fikri-sinai-mulkiyet-haklari/tasarim",
  "/telif-hakki": "/hizmetlerimiz/fikri-sinai-mulkiyet-haklari/telif-hakki",
  "/uluslararasi-patent-ve-marka-arastirmasi":
    "/hizmetlerimiz/fikri-sinai-mulkiyet-haklari/uluslararasi-patent-ve-marka-arastirmasi",
  "/yurt-disi-marka-tescili":
    "/hizmetlerimiz/fikri-sinai-mulkiyet-haklari/yurt-disi-marka-tescili",
  // "/barkod-tescili":
  //   "/hizmetlerimiz/fikri-sinai-mulkiyet-haklari/barkod-tescili",

  // --- Kalite Belgelendirme ---
  "/gap-iyi-tarim-uygulamalari":
    "/hizmetlerimiz/kalite-belgelendirme/gap-iyi-tarim-uygulamalari",
  "/helal-gida-belgesi":
    "/hizmetlerimiz/kalite-belgelendirme/helal-gida-belgesi",
  "/iso-10002-musteri-memnuniyeti-belgesi":
    "/hizmetlerimiz/kalite-belgelendirme/iso-10002-musteri-memnuniyeti-belgesi",
  "/iso-27001-bilgi-guvenligi-yonetim-sistemi":
    "/hizmetlerimiz/kalite-belgelendirme/iso-27001-bilgi-guvenligi-yonetim-sistemi",
  "/iso-9001-2015kalite-yonetim-sistemi":
    "/hizmetlerimiz/kalite-belgelendirme/iso-9001-2015kalite-yonetim-sistemi",
  "/iso-14001-cevre-yonetim-sistemi":
    "/hizmetlerimiz/kalite-belgelendirme/iso-14001-cevre-yonetim-sistemi",
  "/iso-ts-16949": "/hizmetlerimiz/kalite-belgelendirme/iso-ts-16949",
  "/ce-markalama": "/hizmetlerimiz/kalite-belgelendirme/ce-markalama",
  "/iso-45001-is-sagligi-ve-guvenligi":
    "/hizmetlerimiz/kalite-belgelendirme/iso-45001-is-sagligi-ve-guvenligi",
  "/iso-22000-haccp-gida-guvenligi":
    "/hizmetlerimiz/kalite-belgelendirme/iso-22000",
  // "/garanti-belgesi": "/hizmetlerimiz/kalite-belgelendirme/garanti-belgesi",
  // "/ced-belgesi": "/hizmetlerimiz/kalite-belgelendirme/ced-belgesi",
  // "/kapasite-raporu": "/hizmetlerimiz/kalite-belgelendirme/kapasite-raporu",
  // "/sanayi-sicil-belgesi":
  //   "/hizmetlerimiz/kalite-belgelendirme/sanayi-sicil-belgesi",
  // "/tse-hizmet-yeri-yeterlilik-belgesi":
  //   "/hizmetlerimiz/kalite-belgelendirme/tse-hizmet-yeri-yeterlilik-belgesi",
  // "/turizm-isletme-belgesi":
  //   "/hizmetlerimiz/kalite-belgelendirme/turizm-isletme-belgesi",
  // "/yerli-mali-belgesi":
  //   "/hizmetlerimiz/kalite-belgelendirme/yerli-mali-belgesi",

  // --- OSGB — İş Sağlığı ve Güvenliği ---
  "/is-guvenligi-uzmani-hizmetleri":
    "/hizmetlerimiz/ortak-saglik-guvenlik-birimi/is-guvenligi-uzmani-hizmetleri",
  "/is-yeri-acil-durum-plani-hazirlama":
    "/hizmetlerimiz/ortak-saglik-guvenlik-birimi/is-yeri-acil-durum-plani-hazirlama",
  "/is-yeri-hekimligi-hizmetleri":
    "/hizmetlerimiz/ortak-saglik-guvenlik-birimi/is-yeri-hekimligi-hizmetleri",
  "/is-yeri-saglik-personeli-hizmetleri":
    "/hizmetlerimiz/ortak-saglik-guvenlik-birimi/is-yeri-saglik-personeli-hizmetleri",
  "/is-sagligi-ve-is-guvenligi-egitimleri":
    "/hizmetlerimiz/ortak-saglik-guvenlik-birimi/is-sagligi-ve-is-guvenligi-egitimleri",
  "/patlamadan-korunma-dokumani-hazirlama":
    "/hizmetlerimiz/ortak-saglik-guvenlik-birimi/patlamadan-korunma-dokumani-hazirlama",
  "/risk-degerlendirmesi-ve-raporlama":
    "/hizmetlerimiz/ortak-saglik-guvenlik-birimi/risk-degerlendirmesi-ve-raporlama",
  // "/pandemi-koronavirus-covid-19-salgininda-is-yerlerinde-alinmasi-gereken-tedbirler":
  //   "/hizmetlerimiz/ortak-saglik-guvenlik-birimi/pandemi-koronavirus-covid-19-salgininda-is-yerlerinde-alinmasi-gereken-tedbirler",
  // "/yabanci-personel-islemleri":
  //   "/hizmetlerimiz/ortak-saglik-guvenlik-birimi/yabanci-personel-islemleri",

  // --- KVKK Danışmanlığı ---
  "/acik-rizalarin-hazirlanmasi":
    "/hizmetlerimiz/kisisel-verileri-koruma-danismanligi/acik-rizalarin-hazirlanmasi",
  "/aydinlatma-metinlerinin-hazirlanmasi":
    "/hizmetlerimiz/kisisel-verileri-koruma-danismanligi/aydinlatma-metinlerinin-hazirlanmasi",
  "/guvenlik-onlemlerinin-belirlenmesi":
    "/hizmetlerimiz/kisisel-verileri-koruma-danismanligi/guvenlik-onlemlerinin-belirlenmesi",
  "/denetimlerin-yapilmasi":
    "/hizmetlerimiz/kisisel-verileri-koruma-danismanligi/denetimlerin-yapilmasi",
  "/gdpr": "/hizmetlerimiz/kisisel-verileri-koruma-danismanligi/gdpr",
  "/farkindalik-egitimlerinin-yapilmasi":
    "/hizmetlerimiz/kisisel-verileri-koruma-danismanligi/farkindalik-egitimlerinin-yapilmasi",
  "/verbis-sistemine-kayit-yapilmasi":
    "/hizmetlerimiz/kisisel-verileri-koruma-danismanligi/verbis-danismanligi",
  "/veri-envanteri-hazirlanmasi":
    "/hizmetlerimiz/kisisel-verileri-koruma-danismanligi/kisisel-veri-envanteri-hazirlanmasi",
  "/politikalarin-hazirlanmasi":
    "/hizmetlerimiz/kisisel-verileri-koruma-danismanligi/politikalarin-hazirlanmasi",
  "/kisisel-verileri-koruma-kanunu":
    "/hizmetlerimiz/kisisel-verileri-koruma-danismanligi/kisisel-verileri-koruma-kanunu",
  // "/kisisel-veri-sahibi-nin-haklari-ve-kanun-hukumlerinin-uygulanmayacagi-haller":
  //   "/hizmetlerimiz/kisisel-verileri-koruma-danismanligi/kisisel-veri-sahibi-nin-haklari-ve-kanun-hukumlerinin-uygulanmayacagi-haller",
  // "/kisisel-verilerin-ve-ozel-nitelikli-kisisel-verilerin-yurt-disina-aktarilma-sartlari":
  //   "/hizmetlerimiz/kisisel-verileri-koruma-danismanligi/kisisel-verilerin-ve-ozel-nitelikli-kisisel-verilerin-yurt-disina-aktarilma-sartlari",
  // "/kvkk-tarafindan-verilen-guncel-kararlar":
  //   "/hizmetlerimiz/kisisel-verileri-koruma-danismanligi/kvkk-tarafindan-verilen-guncel-kararlar",
  // "/unutulma-kvk-bilgi-notu":
  //   "/hizmetlerimiz/kisisel-verileri-koruma-danismanligi/unutulma-kvk-bilgi-notu",
  // "/verbis-kayit-suresi-5-haziran-2026-ya-uzadi":
  //   "/hizmetlerimiz/kisisel-verileri-koruma-danismanligi/verbis-kayit-suresi-5-haziran-2026-ya-uzadi",
  // "/6698-sayili-kisisel-verileri-koruma-kanunu-kapsaminda-bazi-terimler":
  //   "/hizmetlerimiz/kisisel-verileri-koruma-danismanligi/6698-sayili-kisisel-verileri-koruma-kanunu-kapsaminda-bazi-terimler",
  // "/6698-sayili-kisisel-verilerin-korunmasi-kanunu-zorunlulugu-hakkinda":
  //   "/hizmetlerimiz/kisisel-verileri-koruma-danismanligi/6698-sayili-kisisel-verilerin-korunmasi-kanunu-zorunlulugu-hakkinda",

  // --- Akkaş Karbon ---
  "/akkas-karbon-nedir": "/hizmetlerimiz/akkas-karbon/akkas-karbon-nedir",
  "/karbon-ayak-izi-kavramina-genel-bakis":
    "/hizmetlerimiz/akkas-karbon/karbon-ayak-izi-kavramina-genel-bakis",
  "/kurumsal-karbon-ayak-izi-hesaplama-ve-raporlama":
    "/hizmetlerimiz/akkas-karbon/kurumsal-karbon-ayak-izi-hesaplama-ve-raporlama",
  "/kurumsal-su-ayak-izi-hesaplama-ve-raporlama":
    "/hizmetlerimiz/akkas-karbon/kurumsal-su-ayak-izi-hesaplama-ve-raporlama",
  "/skdm-basladi": "/hizmetlerimiz/akkas-karbon/skdm-basladi",
  // "/cbam-2-ceyrek-fiyati-yayimlandi":
  //   "/hizmetlerimiz/akkas-karbon/cbam-2-ceyrek-fiyati-yayimlandi",

  //--- Pro KVK ---
  "/prokvk-nedir": "/hizmetlerimiz/pro-kvk/prokvk-nedir",
  "/prokvk-ozellikleri-nelerdir":
    "/hizmetlerimiz/pro-kvk/prokvk-ozellikleri-nelerdir",
  "/prokvk-aydinlatma-riza-yonetimi-gizlilik-sozlesmeleri-taahhutname":
    "/hizmetlerimiz/pro-kvk/prokvk-aydinlatma-riza-yonetimi-gizlilik-sozlesmeleri-taahhutname",

  // --- Diğer Hizmetmetlerimiz ---
  "/uluslar-arasi-ar-ge-yardimlari-ve-ab-hibe-fonlari-danismanligi":
    "/hizmetlerimiz/diger-hizmetlerimiz/uluslar-arasi-ar-ge-yardimlari-ve-ab-hibe-fonlari-danismanligi",
  "/sirketlere-ve-universitelere-sertifikali-egitimler":
    "/hizmetlerimiz/diger-hizmetlerimiz/sirketlere-ve-universitelere-sertifikali-egitimler",
  "/kapasite-raporu": "/hizmetlerimiz/diger-hizmetlerimiz/kapasite-raporu",
  "/sanayi-sicil-belgesi":
    "/hizmetlerimiz/diger-hizmetlerimiz/sanayi-sicil-belgesi",
  "/garanti-belgesi": "/hizmetlerimiz/diger-hizmetlerimiz/garanti-belgesi",
  "/ced-belgesi": "/hizmetlerimiz/diger-hizmetlerimiz/ced-belgesi",
  "/calisma-izni": "/hizmetlerimiz/diger-hizmetlerimiz/calisma-izni",
  "/yabanci-personel-islemleri":
    "/hizmetlerimiz/diger-hizmetlerimiz/yabanci-personel-islemleri",
  "/yerli-mali-belgesi":
    "/hizmetlerimiz/diger-hizmetlerimiz/yerli-mali-belgesi",
  "/tse-hizmet-yeri-yeterlilik-belgesi":
    "/hizmetlerimiz/diger-hizmetlerimiz/tse-hizmet-yeri-yeterlilik-belgesi",
  "/hijyen-belgesi": "/hizmetlerimiz/diger-hizmetlerimiz/hijyen-belgesi",
  "/barkod-tescili": "/hizmetlerimiz/diger-hizmetlerimiz/barkod-tescili",

  // --- Ar-Ge Yönetimi ---
  // "/kosgeb-ar-ge-ur-ge-ve-inovasyon-destekleri-basladi":
  //   "/hizmetlerimiz/ar-ge-yonetimi/kosgeb-ar-ge-ur-ge-ve-inovasyon-destekleri-basladi",

  // --- Eğitimler ---
  "/arge-tesvikleri-egitimleri":
    "/hizmetlerimiz/egitimler/arge-tesvikleri-egitimleri",
  "/devlet-destekleri-egitimleri":
    "/hizmetlerimiz/egitimler/devlet-destekleri-egitimleri",
  "/dis-ticaret-mevzuati-egitimleri":
    "/hizmetlerimiz/egitimler/dis-ticaret-mevzuati-egitimleri",
  "/fikri-ve-sinai-mulki-haklar-egitimleri":
    "/hizmetlerimiz/egitimler/fikri-ve-sinai-mulki-haklar-egitimi",
  "/kalite-yonetim-sistemi-egitimleri":
    "/hizmetlerimiz/egitimler/kalite-yonetim-sistemi-egitimleri",
  "/kurumsal-pazarlama-egitimleri":
    "/hizmetlerimiz/egitimler/kurumsal-pazarlama-egitimleri",
  "/musteri-iliskileri-yonetimi-egitimleri":
    "/hizmetlerimiz/egitimler/musteri-iliskileri-yonetimi-egitimi",
  "/musteri-memnuniyeti-egitimleri":
    "/hizmetlerimiz/egitimler/musteri-memnuniyeti-egitimleri",
  "/nlp-egitimleri": "/hizmetlerimiz/egitimler/nlp-egitimleri",
  "/satis-pazarlama-egitimleri":
    "/hizmetlerimiz/egitimler/satis-pazarlama-egitimleri",
  "/uygulamali-psikolojik-satis-teknikleri":
    "/hizmetlerimiz/egitimler/uygulamali-psikolojik-satis-teknikleri",
  // "/sirketlere-ve-universitelere-sertifikali-egitimler":
  //   "/hizmetlerimiz/egitimler/sirketlere-ve-universitelere-sertifikali-egitimler",

  // --- İnsan Kaynakları ---
  // "/insan-kaynaklari": "/hizmetlerimiz/insan-kaynaklari",

  // --- Kurumsal Sayfalar ---
  // "/application/uploads/pdf/dosya.pdf": "/",
  // "/cerezlere-iliskin-aydinlatma-metni": "/cerez-politikasi",

  // --- Blog Yazıları ---
  // "/Blog/detay/2024-kariyer-gunlerinde-akkas-group-olarak-yine-yerimizi-aldik":
  //   "/blog/2024-kariyer-gunlerinde-akkas-group-olarak-yine-yerimizi-aldik",
  // "/Blog/detay/6111-sayili-kanun-numarali-tesvik-uzatildi":
  //   "/blog/6111-sayili-kanun-numarali-tesvik-uzatildi",
  // "/Blog/detay/6111-sayili-tesvik-neler-getirdi":
  //   "/blog/6111-sayili-tesvik-neler-getirdi",
  // "/Blog/detay/6698-sayili-kisisel-verileri-koruma-kanunu-kapsaminda-bazi-terimler":
  //   "/blog/6698-sayili-kisisel-verileri-koruma-kanunu-kapsaminda-bazi-terimler",
  // "/Blog/detay/6698-sayili-kisisel-verilerin-korunmasi-kanunu-zorunlulugu-hakkinda":
  //   "/blog/6698-sayili-kisisel-verilerin-korunmasi-kanunu-zorunlulugu-hakkinda",
  // "/Blog/detay/6698-sayili-kvk-kanununda-yapilan-degisiklikler-hakkinda":
  //   "/blog/6698-sayili-kvk-kanununda-yapilan-degisiklikler-hakkinda",
  // "/Blog/detay/akkas-insan-kaynaklari": "/blog/akkas-insan-kaynaklari",
  // "/Blog/detay/akkas-karbon-nedir": "/blog/akkas-karbon-nedir",
  // "/Blog/detay/antoto-opel-firmamiz-ile-kvk-egitimlerimiz-devam-ediyor":
  //   "/blog/antoto-opel-firmamiz-ile-kvk-egitimlerimiz-devam-ediyor",
  // "/Blog/detay/arge-ve-tasarim-merkezi-kurulumu":
  //   "/blog/arge-ve-tasarim-merkezi-kurulumu",
  // "/Blog/detay/calisanin-ozel-yasamina-mudahalenin-sinirlari":
  //   "/blog/calisanin-ozel-yasamina-mudahalenin-sinirlari",
  // "/Blog/detay/calisma-hayatinda-ve-gunluk-yasamda-guvenlik-kulturu":
  //   "/blog/calisma-hayatinda-ve-gunluk-yasamda-guvenlik-kulturu",
  // "/Blog/detay/cari-donem-takipleri-6111": "/blog/cari-donem-takipleri-6111",
  // "/Blog/detay/cbam-2-ceyrek-fiyati-yayimlandi":
  //   "/blog/cbam-2-ceyrek-fiyati-yayimlandi",
  // "/Blog/detay/denizli-ticaret-odasi-ile-kvk-egitimlerimiz-devam-ediyor":
  //   "/blog/denizli-ticaret-odasi-ile-kvk-egitimlerimiz-devam-ediyor",
  // "/Blog/detay/devlet-tesvikleri-ve-kobiler":
  //   "/blog/devlet-tesvikleri-ve-kobiler",
  // "/Blog/detay/dijital-donusum-destek-programi":
  //   "/blog/dijital-donusum-destek-programi",
  // "/Blog/detay/dijital-donusum-destek-programi-basladi":
  //   "/blog/dijital-donusum-destek-programi-basladi",
  // "/Blog/detay/el-bi-elektrik-firmamiz-ile-kvk-farkindalik-egitim-programimiz":
  //   "/blog/el-bi-elektrik-firmamiz-ile-kvk-farkindalik-egitim-programimiz",
  // "/Blog/detay/etkili-konusma-nasil-yapilir":
  //   "/blog/etkili-konusma-nasil-yapilir",
  // "/Blog/detay/garanti-belgesi": "/blog/garanti-belgesi",
  // "/Blog/detay/geleneksel-kvk-sistem-yoneticisi-sertifika-toren-programimiz":
  //   "/blog/geleneksel-kvk-sistem-yoneticisi-sertifika-toren-programimiz",
  // "/Blog/detay/gida-sektorunde-is-sagligi-ve-guvenligi":
  //   "/blog/gida-sektorunde-is-sagligi-ve-guvenligi",
  // "/Blog/detay/girisimci-destek-programi-acildi":
  //   "/blog/girisimci-destek-programi-acildi",
  // "/Blog/detay/gungoren-belediyesi-ile-kvk-egitim-programimiz":
  //   "/blog/gungoren-belediyesi-ile-kvk-egitim-programimiz",
  // "/Blog/detay/is-guvenligi-levhalari-tehlikelere-karsi-guvenligi-saglamamiza-yardimci-oluyor-mu":
  //   "/blog/is-guvenligi-levhalari-tehlikelere-karsi-guvenligi-saglamamiza-yardimci-oluyor-mu",
  // "/Blog/detay/is-sagligi-ve-guvenligi": "/blog/is-sagligi-ve-guvenligi",
  // "/Blog/detay/is-sagligi-ve-guvenliginin-onemi":
  //   "/blog/is-sagligi-ve-guvenliginin-onemi",
  // "/Blog/detay/isg-egitimlerinin-gerekliligi":
  //   "/blog/isg-egitimlerinin-gerekliligi",
  // "/Blog/detay/isletmelere-girisimcilere-ve-yatirimcilara-yonelik-bilgi-transferini-kolaylastiran-online-teknoloji":
  //   "/blog/isletmelere-girisimcilere-ve-yatirimcilara-yonelik-bilgi-transferini-kolaylastiran-online-teknoloji",
  // "/Blog/detay/istanbul-okan-universitesi-kariyer-gunleri":
  //   "/blog/istanbul-okan-universitesi-kariyer-gunleri",
  // "/Blog/detay/istanbul-zaim-universitesi-fikri-ve-sinai-haklar-egitim-programi":
  //   "/blog/istanbul-zaim-universitesi-fikri-ve-sinai-haklar-egitim-programi",
  // "/Blog/detay/istanbul-zaim-universitesi-kariyer-gunleri":
  //   "/blog/istanbul-zaim-universitesi-kariyer-gunleri",
  // "/Blog/detay/kadin-istihdami-icin-pozitif-ayrimcilik-projesi-75-000-tl":
  //   "/blog/kadin-istihdami-icin-pozitif-ayrimcilik-projesi-75-000-tl",
  // "/Blog/detay/kapasite-gelistirme-destek-programi-2-basvuru-donemi-basladi":
  //   "/blog/kapasite-gelistirme-destek-programi-2-basvuru-donemi-basladi",
  // "/Blog/detay/karbon-ayak-izi-kavramina-genel-bakis":
  //   "/blog/karbon-ayak-izi-kavramina-genel-bakis",
  // "/Blog/detay/kimyasal-maddelerin-is-hayatindaki-yeri":
  //   "/blog/kimyasal-maddelerin-is-hayatindaki-yeri",
  // "/Blog/detay/kirsal-kalkinma-yatirim-programi":
  //   "/blog/kirsal-kalkinma-yatirim-programi",
  // "/Blog/detay/kisisel-veri-sahibi-nin-haklari-ve-kanun-hukumlerinin-uygulanmayacagi-haller":
  //   "/blog/kisisel-veri-sahibi-nin-haklari-ve-kanun-hukumlerinin-uygulanmayacagi-haller",
  // "/Blog/detay/kisisel-veri-sahibi-nin-ve-kanun-hukumlerinin-uygulanmayacagi-haller":
  //   "/blog/kisisel-veri-sahibi-nin-ve-kanun-hukumlerinin-uygulanmayacagi-haller",
  // "/Blog/detay/kisisel-verilerin-islenmesinde-genel-ilkeler-nelerdir":
  //   "/blog/kisisel-verilerin-islenmesinde-genel-ilkeler-nelerdir",
  // "/Blog/detay/kisisel-verilerin-korunmasi-kanunu-ile-yapay-zeka-arasindaki-iliski":
  //   "/blog/kisisel-verilerin-korunmasi-kanunu-ile-yapay-zeka-arasindaki-iliski",
  // "/Blog/detay/kisisel-verilerin-korunmasi-kanunu-ve-sosyal-medya-iliskisi-milli-guvenlik-boyutu":
  //   "/blog/kisisel-verilerin-korunmasi-kanunu-ve-sosyal-medya-iliskisi-milli-guvenlik-boyutu",
  // "/Blog/detay/kisisel-verilerin-korunmasi-kanununun-sosyal-hayat-ve-is-dunyasindaki-onemi":
  //   "/blog/kisisel-verilerin-korunmasi-kanununun-sosyal-hayat-ve-is-dunyasindaki-onemi",
  // "/Blog/detay/kisisel-verilerin-korunmasi-yeni-duzenleme-neler-getiriyor":
  //   "/blog/kisisel-verilerin-korunmasi-yeni-duzenleme-neler-getiriyor",
  // "/Blog/detay/kisisel-verilerin-ve-ozel-nitelikli-kisisel-verilerin-yurt-disina-aktarilma-sartlari":
  //   "/blog/kisisel-verilerin-ve-ozel-nitelikli-kisisel-verilerin-yurt-disina-aktarilma-sartlari",
  // "/Blog/detay/kitlesel-gozetim-ve-kisisel-verilerin-korunmasi":
  //   "/blog/kitlesel-gozetim-ve-kisisel-verilerin-korunmasi",
  // "/Blog/detay/kobi-beyannamelerinizi-guncellemeyi-unutmayin":
  //   "/blog/kobi-beyannamelerinizi-guncellemeyi-unutmayin",
  // "/Blog/detay/konaklama-tesislerine-sgk-prim-destegi":
  //   "/blog/konaklama-tesislerine-sgk-prim-destegi",
  // "/Blog/detay/kosgeb-ar-ge-ur-ge-ve-inovasyon-destekleri-basladi":
  //   "/blog/kosgeb-ar-ge-ur-ge-ve-inovasyon-destekleri-basladi",
  // "/Blog/detay/kosgeb-imalat-sanayi-sektoru-icin-kobigel-destekleri-acildi":
  //   "/blog/kosgeb-imalat-sanayi-sektoru-icin-kobigel-destekleri-acildi",
  // "/Blog/detay/kurumsal-karbon-ayak-izi-hesaplama-ve-raporlama":
  //   "/blog/kurumsal-karbon-ayak-izi-hesaplama-ve-raporlama",
  // "/Blog/detay/kurumsal-su-ayak-izi-hesaplama-ve-raporlama":
  //   "/blog/kurumsal-su-ayak-izi-hesaplama-ve-raporlama",
  // "/Blog/detay/kvkk-nin-turkiye-deki-8-yillik-seruveni":
  //   "/blog/kvkk-nin-turkiye-deki-8-yillik-seruveni",
  // "/Blog/detay/kvkk-tarafindan-verilen-guncel-kararlar":
  //   "/blog/kvkk-tarafindan-verilen-guncel-kararlar",
  // "/Blog/detay/mobil-uygulamalarda-mahremiyetin-korunmasina-yonelik-tavsiyeler":
  //   "/blog/mobil-uygulamalarda-mahremiyetin-korunmasina-yonelik-tavsiyeler",
  // "/Blog/detay/pandemi-koronavirus-covid-19-salgininda-is-yerlerinde-alinmasi-gereken-tedbirler":
  //   "/blog/pandemi-koronavirus-covid-19-salgininda-is-yerlerinde-alinmasi-gereken-tedbirler",
  // "/Blog/detay/pazar-arastirmasi-ve-pazara-giris-destegi":
  //   "/blog/pazar-arastirmasi-ve-pazara-giris-destegi",
  // "/Blog/detay/prokvk-aydinlatma-riza-yonetimi-gizlilik-sozlesmeleri-taahhutname":
  //   "/blog/prokvk-aydinlatma-riza-yonetimi-gizlilik-sozlesmeleri-taahhutname",
  // "/Blog/detay/prokvk-nedir": "/blog/prokvk-nedir",
  // "/Blog/detay/prokvk-ozellikleri-nelerdir":
  //   "/blog/prokvk-ozellikleri-nelerdir",
  // "/Blog/detay/sanayi-siciline-kayitli-isletmelerin-dikkatine-yillik-isletme-cetveli":
  //   "/blog/sanayi-siciline-kayitli-isletmelerin-dikkatine-yillik-isletme-cetveli",

  // "/Blog/detay/sgk-ve-iskur-tesviklerinin-isverenler-acisindan-onemi":
  //   "/blog/sgk-ve-iskur-tesviklerinin-isverenler-acisindan-onemi",
  // "/Blog/detay/skdm-basladi": "/blog/skdm-basladi",
  // "/Blog/detay/sorularla-kisisel-verilerin-korunmasi":
  //   "/blog/sorularla-kisisel-verilerin-korunmasi",
  // "/Blog/detay/tahsilat-performansi": "/blog/tahsilat-performansi",
  // "/Blog/detay/tekirdag-icin-yerel-kalkinma-hamlesi-programi-basladi":
  //   "/blog/tekirdag-icin-yerel-kalkinma-hamlesi-programi-basladi",
  // "/Blog/detay/teknoloji-odakli-sanayi-hamle-programi":
  //   "/blog/teknoloji-odakli-sanayi-hamle-programi",
  // "/Blog/detay/teknoloji-odakli-sanayi-hamle-programi-basladi":
  //   "/blog/teknoloji-odakli-sanayi-hamle-programi-basladi",
  // "/Blog/detay/telefonda-dogru-iletisim-icin-altin-ogutler":
  //   "/blog/telefonda-dogru-iletisim-icin-altin-ogutler",
  // "/Blog/detay/tubitak-1501-sanayi-ar-ge-projeleri-ve-1507-kobi-ar-ge-baslangic-destek-programi":
  //   "/blog/tubitak-1501-sanayi-ar-ge-projeleri-ve-1507-kobi-ar-ge-baslangic-destek-programi",
  // "/Blog/detay/unutulma-kvk-bilgi-notu": "/blog/unutulma-kvk-bilgi-notu",
  // "/Blog/detay/verbis-e-kayit-icin-son-tarih-31-mayis":
  //   "/blog/verbis-e-kayit-icin-son-tarih-31-mayis",
  // "/Blog/detay/verbis-kayit-suresi-5-haziran-2026-ya-uzadi":
  //   "/blog/verbis-kayit-suresi-5-haziran-2026-ya-uzadi",
  // "/Blog/detay/verbis-sistemine-son-basvuru-tarihi-6-haziran":
  //   "/blog/verbis-sistemine-son-basvuru-tarihi-6-haziran",
  // "/Blog/detay/yapay-zek": "/blog/yapay-zek",
  // "/Blog/detay/yapay-zeka-kredi-programi": "/blog/yapay-zeka-kredi-programi",
  // "/Blog/detay/yatirim-taahhutlu-avans-kredisi":
  //   "/blog/yatirim-taahhutlu-avans-kredisi",
  // "/Blog/detay/yatirim-tesvik-belgesi": "/blog/yatirim-tesvik-belgesi",
  // "/Blog/detay/yatirim-tesvik-belgesi-gumruk-vergi-muafiyetleri":
  //   "/blog/yatirim-tesvik-belgesi-gumruk-vergi-muafiyetleri",
  // "/Blog/detay/yesil-donusum-destek-programi":
  //   "/blog/yesil-donusum-destek-programi",
  // "/Blog/detay/yesil-donusum-destek-programi-basladi":
  //   "/blog/yesil-donusum-destek-programi-basladi",
  // "/Blog/detay/yesil-sanayi-destek-programi-14-000-000-tl-geri-odemeli":
  //   "/blog/yesil-sanayi-destek-programi-14-000-000-tl-geri-odemeli",
  // "/Blog/detay/yillik-isletme-cetveli-icin-son-tarih-30-nisan":
  //   "/blog/yillik-isletme-cetveli-icin-son-tarih-30-nisan",
  // "/Blog/detay/yurt-disi-pazar-arastirmasi-destegi":
  //   "/blog/yurt-disi-pazar-arastirmasi-destegi",
  // "/Blog/detay/yurt-disi-pazar-destek-programi":
  //   "/blog/yurt-disi-pazar-destek-programi",

  // "/Blog/index/": "/blog//Blog/index/",
  // "/Blog/index/27": "/blog//Blog/index/27",
  // "/Blog/index/36": "/blog//Blog/index/36",
  // "/Blog/index/45": "/blog//Blog/index/45",
  // "/Blog/index/54": "/blog//Blog/index/54",
  // "/Blog/index/9": "/blog//Blog/index/9",
  // "/Blog/kategori/genel": "/blog//Blog/kategori/genel",
};
