/**
 * Eski akkasgroup.com URL yapısı (flat) → yeni Next.js URL yapısı (nested) eşleştirmesi.
 * Yeni bir sayfa eklendikçe veya eski bir URL fark edildikçe buraya satır ekle.
 * Kaynak: eski site sitemap.xml taraması, 2026-09.
 */
export const LEGACY_REDIRECTS: Record<string, string> = {
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
  // --- Teşvik ve Hibe Danışmanlığı ---
  "/14857-engelli-sigortali-istihdamina-yonelik-tesvik":
    "/hizmetlerimiz/tesvik-ve-hibe-danismanligi/14857-engelli-sigortali-istihdamina-yonelik-tesvik",
  "/15746-arastirma-gelistirme-ve-tasarim-faaliyetlerine-iliskin-tesvik":
    "/hizmetlerimiz/tesvik-ve-hibe-danismanligi/15746-arastirma-gelistirme-ve-tasarim-faaliyetlerine-iliskin-tesvik",
  "/4447-15921-issizlik-odenegi-alanlarin-istihdami-halinde-uygulanan-prim-tesviki":
    "/hizmetlerimiz/tesvik-ve-hibe-danismanligi/4447-15921-issizlik-odenegi-alanlarin-istihdami-halinde-uygulanan-prim-tesviki",
  "/5225-55225-25225-kultur-yatirimlari-ve-girisimleri-hakkinda-uygulanan-sigorta-primi-tesviki":
    "/hizmetlerimiz/tesvik-ve-hibe-danismanligi/5225-55225-25225-kultur-yatirimlari-ve-girisimleri-hakkinda-uygulanan-sigorta-primi-tesviki",
  "/5510-25510-16322-26322-yatirimlarda-devlet-yardimlari-hakkinda-kararlar-uyarinca-uygulanan-tesvik":
    "/hizmetlerimiz/tesvik-ve-hibe-danismanligi/5510-25510-16322-26322-yatirimlarda-devlet-yardimlari-hakkinda-kararlar-uyarinca-uygulanan-tesvik",
  "/5510-46486-56486-66486-ilave-6-puanlik-prim-indirimi":
    "/hizmetlerimiz/tesvik-ve-hibe-danismanligi/5510-46486-56486-66486-ilave-6-puanlik-prim-indirimi",
  "/5510-6486-yurtdisina-goturulen-gonderilen-sigortalilara-uygulanan-5-puanlik-prim-indirimi":
    "/hizmetlerimiz/tesvik-ve-hibe-danismanligi/5510-6486-yurtdisina-goturulen-gonderilen-sigortalilara-uygulanan-5-puanlik-prim-indirimi",
  "/5510-malulluk-yaslilik-ve-olum-sigortasi-isveren-hissesinden-5-puanlik-indirim":
    "/hizmetlerimiz/tesvik-ve-hibe-danismanligi/5510-malulluk-yaslilik-ve-olum-sigortasi-isveren-hissesinden-5-puanlik-indirim",
  "/6111-sayili-tesvikten-nasil-fayda-saglanir":
    "/hizmetlerimiz/tesvik-ve-hibe-danismanligi/6111-sayili-tesvikten-nasil-fayda-saglanir",
  "/ab-fonlari": "/hizmetlerimiz/tesvik-ve-hibe-danismanligi/ab-fonlari",
  "/cari-donem-takipleri-6111":
    "/hizmetlerimiz/tesvik-ve-hibe-danismanligi/cari-donem-takipleri-6111",
  "/devlet-tesvikleri-ve-kobiler":
    "/hizmetlerimiz/tesvik-ve-hibe-danismanligi/devlet-tesvikleri-ve-kobiler",
  "/dijital-donusum-destek-programi":
    "/hizmetlerimiz/tesvik-ve-hibe-danismanligi/dijital-donusum-destek-programi",
  "/dijital-donusum-destek-programi-basladi":
    "/hizmetlerimiz/tesvik-ve-hibe-danismanligi/dijital-donusum-destek-programi-basladi",
  "/dis-ticaret-destekleri":
    "/hizmetlerimiz/tesvik-ve-hibe-danismanligi/dis-ticaret-destekleri",
  "/gecmis-donem-tesvik-hesaplamalari":
    "/hizmetlerimiz/tesvik-ve-hibe-danismanligi/gecmis-donem-tesvik-hesaplamalari",
  "/ipard": "/hizmetlerimiz/tesvik-ve-hibe-danismanligi/ipard",
  "/kalkinma-ajanslari-destekleri":
    "/hizmetlerimiz/tesvik-ve-hibe-danismanligi/kalkinma-ajanslari-destekleri",
  "/kirsal-kalkinma-proje-destekleri-tkdk":
    "/hizmetlerimiz/tesvik-ve-hibe-danismanligi/kirsal-kalkinma-proje-destekleri-tkdk",
  "/kobigel-2021": "/hizmetlerimiz/tesvik-ve-hibe-danismanligi/kobigel-2021",
  "/konaklama-tesislerine-sgk-prim-destegi":
    "/hizmetlerimiz/tesvik-ve-hibe-danismanligi/konaklama-tesislerine-sgk-prim-destegi",
  "/kosgeb-destekleri":
    "/hizmetlerimiz/tesvik-ve-hibe-danismanligi/kosgeb-destekleri",
  "/sanayi-bakanligi-destekleri":
    "/hizmetlerimiz/tesvik-ve-hibe-danismanligi/sanayi-bakanligi-destekleri",
  "/teknoloji-odakli-sanayi-hamle-programi":
    "/hizmetlerimiz/tesvik-ve-hibe-danismanligi/teknoloji-odakli-sanayi-hamle-programi",
  "/teknoloji-odakli-sanayi-hamle-programi-basladi":
    "/hizmetlerimiz/tesvik-ve-hibe-danismanligi/teknoloji-odakli-sanayi-hamle-programi-basladi",
  "/ticaret-bakanligi-destekleri":
    "/hizmetlerimiz/tesvik-ve-hibe-danismanligi/ticaret-bakanligi-destekleri",
  "/tubitak-destekleri":
    "/hizmetlerimiz/tesvik-ve-hibe-danismanligi/tubitak-destekleri",
  "/ulastirma-bakanligi-destekleri":
    "/hizmetlerimiz/tesvik-ve-hibe-danismanligi/ulastirma-bakanligi-destekleri",
  "/yesil-donusum-destek-programi":
    "/hizmetlerimiz/tesvik-ve-hibe-danismanligi/yesil-donusum-destek-programi",
  "/yesil-donusum-destek-programi-basladi":
    "/hizmetlerimiz/tesvik-ve-hibe-danismanligi/yesil-donusum-destek-programi-basladi",
  "/yesil-sanayi-destek-programi":
    "/hizmetlerimiz/tesvik-ve-hibe-danismanligi/yesil-sanayi-destek-programi",
  "/yurt-disi-pazar-destek-programi":
    "/hizmetlerimiz/tesvik-ve-hibe-danismanligi/yurt-disi-pazar-destek-programi",
  // --- Makale ---
  "/sgk-tesvikleri-ve-sigorta-tesvik-sistemi":
    "/hizmetlerimiz/sigorta-tesvik-danismanligi/sgk-tesvikleri-ve-sigorta-tesvik-sistemi",

  // --- grup sirketleri ---
  "/sigorta-tesvik-sistemi":
    "/hizmetlerimiz/sigorta-tesvik-danismanligi/sigorta-tesvik-sistemi",
  // --- Sigorta tesvik danimanligi (hizmetler) ---
  "/sts-hizmetleri":
    "/hizmetlerimiz/sigorta-tesvik-danismanligi/sts-hizmetleri",
  // --- Marka, Patent ve Fikri Mülkiyet ---
  "/barkod-tescili":
    "/hizmetlerimiz/marka-patent-fikri-mulkiyet/barkod-tescili",
  "/cografi-isaret-tescili":
    "/hizmetlerimiz/marka-patent-fikri-mulkiyet/cografi-isaret-tescili",
  "/entegre-devre-topografyasi":
    "/hizmetlerimiz/marka-patent-fikri-mulkiyet/entegre-devre-topografyasi",
  "/marka-tescili": "/hizmetlerimiz/marka-patent-fikri-mulkiyet/marka-tescili",
  "/patent-ve-faydali-model-tescili":
    "/hizmetlerimiz/marka-patent-fikri-mulkiyet/patent-ve-faydali-model-tescili",
  "/tasarim": "/hizmetlerimiz/marka-patent-fikri-mulkiyet/tasarim",
  "/telif-hakki": "/hizmetlerimiz/marka-patent-fikri-mulkiyet/telif-hakki",
  "/uluslararasi-patent-ve-marka-arastirmasi":
    "/hizmetlerimiz/marka-patent-fikri-mulkiyet/uluslararasi-patent-ve-marka-arastirmasi",
  "/yurt-disi-marka-tescili":
    "/hizmetlerimiz/marka-patent-fikri-mulkiyet/yurt-disi-marka-tescili",
  // --- Kalite Belgelendirme ---
  "/ced-belgesi": "/hizmetlerimiz/kalite-belgelendirme/ced-belgesi",
  "/gap-iyi-tarim-uygulamalari":
    "/hizmetlerimiz/kalite-belgelendirme/gap-iyi-tarim-uygulamalari",
  "/garanti-belgesi": "/hizmetlerimiz/kalite-belgelendirme/garanti-belgesi",
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
  "/kapasite-raporu": "/hizmetlerimiz/kalite-belgelendirme/kapasite-raporu",
  "/sanayi-sicil-belgesi":
    "/hizmetlerimiz/kalite-belgelendirme/sanayi-sicil-belgesi",
  "/tse-hizmet-yeri-yeterlilik-belgesi":
    "/hizmetlerimiz/kalite-belgelendirme/tse-hizmet-yeri-yeterlilik-belgesi",
  "/turizm-isletme-belgesi":
    "/hizmetlerimiz/kalite-belgelendirme/turizm-isletme-belgesi",
  "/yerli-mali-belgesi":
    "/hizmetlerimiz/kalite-belgelendirme/yerli-mali-belgesi",
  // --- OSGB — İş Sağlığı ve Güvenliği ---
  "/calisma-izni": "/hizmetlerimiz/osgb-is-sagligi-guvenligi/calisma-izni",
  "/gida-sektorunde-is-sagligi-ve-guvenligi":
    "/hizmetlerimiz/osgb-is-sagligi-guvenligi/gida-sektorunde-is-sagligi-ve-guvenligi",
  "/guvenlik-onlemlerinin-belirlenmesi":
    "/hizmetlerimiz/osgb-is-sagligi-guvenligi/guvenlik-onlemlerinin-belirlenmesi",
  "/is-guvenligi-uzmani-hizmetleri":
    "/hizmetlerimiz/osgb-is-sagligi-guvenligi/is-guvenligi-uzmani-hizmetleri",
  "/is-yeri-acil-durum-plani-hazirlama":
    "/hizmetlerimiz/osgb-is-sagligi-guvenligi/is-yeri-acil-durum-plani-hazirlama",
  "/is-yeri-hekimligi-hizmetleri":
    "/hizmetlerimiz/osgb-is-sagligi-guvenligi/is-yeri-hekimligi-hizmetleri",
  "/is-yeri-saglik-personeli-hizmetleri":
    "/hizmetlerimiz/osgb-is-sagligi-guvenligi/is-yeri-saglik-personeli-hizmetleri",
  "/pandemi-koronavirus-covid-19-salgininda-is-yerlerinde-alinmasi-gereken-tedbirler":
    "/hizmetlerimiz/osgb-is-sagligi-guvenligi/pandemi-koronavirus-covid-19-salgininda-is-yerlerinde-alinmasi-gereken-tedbirler",
  "/patlamadan-korunma-dokumani-hazirlama":
    "/hizmetlerimiz/osgb-is-sagligi-guvenligi/patlamadan-korunma-dokumani-hazirlama",
  "/risk-degerlendirmesi-ve-raporlama":
    "/hizmetlerimiz/osgb-is-sagligi-guvenligi/risk-degerlendirmesi-ve-raporlama",
  "/yabanci-personel-islemleri":
    "/hizmetlerimiz/osgb-is-sagligi-guvenligi/yabanci-personel-islemleri",
  // --- KVKK Danışmanlığı ---
  "/6698-sayili-kisisel-verileri-koruma-kanunu-kapsaminda-bazi-terimler":
    "/hizmetlerimiz/kvkk-danismanligi/6698-sayili-kisisel-verileri-koruma-kanunu-kapsaminda-bazi-terimler",
  "/6698-sayili-kisisel-verilerin-korunmasi-kanunu-zorunlulugu-hakkinda":
    "/hizmetlerimiz/kvkk-danismanligi/6698-sayili-kisisel-verilerin-korunmasi-kanunu-zorunlulugu-hakkinda",
  "/acik-rizalarin-hazirlanmasi":
    "/hizmetlerimiz/kvkk-danismanligi/acik-rizalarin-hazirlanmasi",
  "/aydinlatma-metinlerinin-hazirlanmasi":
    "/hizmetlerimiz/kvkk-danismanligi/aydinlatma-metinlerinin-hazirlanmasi",
  "/denetimlerin-yapilmasi":
    "/hizmetlerimiz/kvkk-danismanligi/denetimlerin-yapilmasi",
  "/gdpr": "/hizmetlerimiz/kvkk-danismanligi/gdpr",
  "/kisisel-veri-sahibi-nin-haklari-ve-kanun-hukumlerinin-uygulanmayacagi-haller":
    "/hizmetlerimiz/kvkk-danismanligi/kisisel-veri-sahibi-nin-haklari-ve-kanun-hukumlerinin-uygulanmayacagi-haller",
  "/kisisel-verileri-koruma-kanunu":
    "/hizmetlerimiz/kvkk-danismanligi/kisisel-verileri-koruma-kanunu",
  "/kisisel-verilerin-ve-ozel-nitelikli-kisisel-verilerin-yurt-disina-aktarilma-sartlari":
    "/hizmetlerimiz/kvkk-danismanligi/kisisel-verilerin-ve-ozel-nitelikli-kisisel-verilerin-yurt-disina-aktarilma-sartlari",
  "/kvkk-tarafindan-verilen-guncel-kararlar":
    "/hizmetlerimiz/kvkk-danismanligi/kvkk-tarafindan-verilen-guncel-kararlar",
  "/politikalarin-hazirlanmasi":
    "/hizmetlerimiz/kvkk-danismanligi/politikalarin-hazirlanmasi",
  "/prokvk-aydinlatma-riza-yonetimi-gizlilik-sozlesmeleri-taahhutname":
    "/hizmetlerimiz/kvkk-danismanligi/prokvk-aydinlatma-riza-yonetimi-gizlilik-sozlesmeleri-taahhutname",
  "/prokvk-nedir": "/hizmetlerimiz/kvkk-danismanligi/prokvk-nedir",
  "/prokvk-ozellikleri-nelerdir":
    "/hizmetlerimiz/kvkk-danismanligi/prokvk-ozellikleri-nelerdir",
  "/unutulma-kvk-bilgi-notu":
    "/hizmetlerimiz/kvkk-danismanligi/unutulma-kvk-bilgi-notu",
  "/verbis-kayit-suresi-5-haziran-2026-ya-uzadi":
    "/hizmetlerimiz/kvkk-danismanligi/verbis-kayit-suresi-5-haziran-2026-ya-uzadi",
  "/verbis-sistemine-kayit-yapilmasi":
    "/hizmetlerimiz/kvkk-danismanligi/verbis-sistemine-kayit-yapilmasi",
  "/veri-envanteri-hazirlanmasi":
    "/hizmetlerimiz/kvkk-danismanligi/veri-envanteri-hazirlanmasi",
  // --- Akkaş Karbon ---
  "/akkas-karbon-nedir": "/hizmetlerimiz/akkas-karbon/akkas-karbon-nedir",
  "/cbam-2-ceyrek-fiyati-yayimlandi":
    "/hizmetlerimiz/akkas-karbon/cbam-2-ceyrek-fiyati-yayimlandi",
  "/karbon-ayak-izi-kavramina-genel-bakis":
    "/hizmetlerimiz/akkas-karbon/karbon-ayak-izi-kavramina-genel-bakis",
  "/kurumsal-karbon-ayak-izi-hesaplama-ve-raporlama":
    "/hizmetlerimiz/akkas-karbon/kurumsal-karbon-ayak-izi-hesaplama-ve-raporlama",
  "/kurumsal-su-ayak-izi-hesaplama-ve-raporlama":
    "/hizmetlerimiz/akkas-karbon/kurumsal-su-ayak-izi-hesaplama-ve-raporlama",
  "/skdm-basladi": "/hizmetlerimiz/akkas-karbon/skdm-basladi",
  // --- Ar-Ge Yönetimi ---
  "/arge-ve-tasarim-merkezi-kurulumu":
    "/hizmetlerimiz/ar-ge-yonetimi/arge-ve-tasarim-merkezi-kurulumu",
  "/kosgeb-ar-ge-ur-ge-ve-inovasyon-destekleri-basladi":
    "/hizmetlerimiz/ar-ge-yonetimi/kosgeb-ar-ge-ur-ge-ve-inovasyon-destekleri-basladi",
  "/uluslar-arasi-ar-ge-yardimlari-ve-ab-hibe-fonlari-danismanligi":
    "/hizmetlerimiz/ar-ge-yonetimi/uluslar-arasi-ar-ge-yardimlari-ve-ab-hibe-fonlari-danismanligi",
  // --- Eğitimler ---
  "/6645-isbasi-egitim-programini-tamamlayanlarin-istihdamina-yonelik-tesvik":
    "/hizmetlerimiz/egitimler/6645-isbasi-egitim-programini-tamamlayanlarin-istihdamina-yonelik-tesvik",
  "/arge-tesvikleri-egitimleri":
    "/hizmetlerimiz/egitimler/arge-tesvikleri-egitimleri",
  "/devlet-destekleri-egitimleri":
    "/hizmetlerimiz/egitimler/devlet-destekleri-egitimleri",
  "/dis-ticaret-mevzuati-egitimleri":
    "/hizmetlerimiz/egitimler/dis-ticaret-mevzuati-egitimleri",
  "/farkindalik-egitimlerinin-yapilmasi":
    "/hizmetlerimiz/egitimler/farkindalik-egitimlerinin-yapilmasi",
  "/fikri-ve-sinai-mulki-haklar-egitimleri":
    "/hizmetlerimiz/egitimler/fikri-ve-sinai-mulki-haklar-egitimleri",
  "/hijyen-belgesi-egitimleri":
    "/hizmetlerimiz/egitimler/hijyen-belgesi-egitimleri",
  "/is-sagligi-ve-is-guvenligi-egitimleri":
    "/hizmetlerimiz/egitimler/is-sagligi-ve-is-guvenligi-egitimleri",
  "/kalite-yonetim-sistemi-egitimleri":
    "/hizmetlerimiz/egitimler/kalite-yonetim-sistemi-egitimleri",
  "/kurumsal-pazarlama-egitimleri":
    "/hizmetlerimiz/egitimler/kurumsal-pazarlama-egitimleri",
  "/musteri-iliskileri-yonetimi-egitimleri":
    "/hizmetlerimiz/egitimler/musteri-iliskileri-yonetimi-egitimleri",
  "/musteri-memnuniyeti-egitimleri":
    "/hizmetlerimiz/egitimler/musteri-memnuniyeti-egitimleri",
  "/nlp-egitimleri": "/hizmetlerimiz/egitimler/nlp-egitimleri",
  "/satis-pazarlama-egitimleri":
    "/hizmetlerimiz/egitimler/satis-pazarlama-egitimleri",
  "/sirketlere-ve-universitelere-sertifikali-egitimler":
    "/hizmetlerimiz/egitimler/sirketlere-ve-universitelere-sertifikali-egitimler",
  "/uygulamali-psikolojik-satis-teknikleri":
    "/hizmetlerimiz/egitimler/uygulamali-psikolojik-satis-teknikleri",
  // --- İnsan Kaynakları ---
  "/insan-kaynaklari": "/hizmetlerimiz/insan-kaynaklari",
  // --- Kurumsal Sayfalar ---
  "/application/uploads/pdf/dosya.pdf": "/",
  "/cerezlere-iliskin-aydinlatma-metni": "/cerez-politikasi",

  // --- Blog Yazıları ---

  "/Blog/detay/2024-kariyer-gunlerinde-akkas-group-olarak-yine-yerimizi-aldik":
    "/blog/2024-kariyer-gunlerinde-akkas-group-olarak-yine-yerimizi-aldik",
  "/Blog/detay/6111-sayili-kanun-numarali-tesvik-uzatildi":
    "/blog/6111-sayili-kanun-numarali-tesvik-uzatildi",
  "/Blog/detay/6111-sayili-tesvik-neler-getirdi":
    "/blog/6111-sayili-tesvik-neler-getirdi",
  "/Blog/detay/6698-sayili-kisisel-verileri-koruma-kanunu-kapsaminda-bazi-terimler":
    "/blog/6698-sayili-kisisel-verileri-koruma-kanunu-kapsaminda-bazi-terimler",
  "/Blog/detay/6698-sayili-kisisel-verilerin-korunmasi-kanunu-zorunlulugu-hakkinda":
    "/blog/6698-sayili-kisisel-verilerin-korunmasi-kanunu-zorunlulugu-hakkinda",
  "/Blog/detay/6698-sayili-kvk-kanununda-yapilan-degisiklikler-hakkinda":
    "/blog/6698-sayili-kvk-kanununda-yapilan-degisiklikler-hakkinda",
  "/Blog/detay/akkas-insan-kaynaklari": "/blog/akkas-insan-kaynaklari",
  "/Blog/detay/akkas-karbon-nedir": "/blog/akkas-karbon-nedir",
  "/Blog/detay/antoto-opel-firmamiz-ile-kvk-egitimlerimiz-devam-ediyor":
    "/blog/antoto-opel-firmamiz-ile-kvk-egitimlerimiz-devam-ediyor",
  "/Blog/detay/arge-ve-tasarim-merkezi-kurulumu":
    "/blog/arge-ve-tasarim-merkezi-kurulumu",
  "/Blog/detay/calisanin-ozel-yasamina-mudahalenin-sinirlari":
    "/blog/calisanin-ozel-yasamina-mudahalenin-sinirlari",
  "/Blog/detay/calisma-hayatinda-ve-gunluk-yasamda-guvenlik-kulturu":
    "/blog/calisma-hayatinda-ve-gunluk-yasamda-guvenlik-kulturu",
  "/Blog/detay/cari-donem-takipleri-6111": "/blog/cari-donem-takipleri-6111",
  "/Blog/detay/cbam-2-ceyrek-fiyati-yayimlandi":
    "/blog/cbam-2-ceyrek-fiyati-yayimlandi",
  "/Blog/detay/denizli-ticaret-odasi-ile-kvk-egitimlerimiz-devam-ediyor":
    "/blog/denizli-ticaret-odasi-ile-kvk-egitimlerimiz-devam-ediyor",
  "/Blog/detay/devlet-tesvikleri-ve-kobiler":
    "/blog/devlet-tesvikleri-ve-kobiler",
  "/Blog/detay/dijital-donusum-destek-programi":
    "/blog/dijital-donusum-destek-programi",
  "/Blog/detay/dijital-donusum-destek-programi-basladi":
    "/blog/dijital-donusum-destek-programi-basladi",
  "/Blog/detay/el-bi-elektrik-firmamiz-ile-kvk-farkindalik-egitim-programimiz":
    "/blog/el-bi-elektrik-firmamiz-ile-kvk-farkindalik-egitim-programimiz",
  "/Blog/detay/etkili-konusma-nasil-yapilir":
    "/blog/etkili-konusma-nasil-yapilir",
  "/Blog/detay/garanti-belgesi": "/blog/garanti-belgesi",
  "/Blog/detay/geleneksel-kvk-sistem-yoneticisi-sertifika-toren-programimiz":
    "/blog/geleneksel-kvk-sistem-yoneticisi-sertifika-toren-programimiz",
  "/Blog/detay/gida-sektorunde-is-sagligi-ve-guvenligi":
    "/blog/gida-sektorunde-is-sagligi-ve-guvenligi",
  "/Blog/detay/girisimci-destek-programi-acildi":
    "/blog/girisimci-destek-programi-acildi",
  "/Blog/detay/gungoren-belediyesi-ile-kvk-egitim-programimiz":
    "/blog/gungoren-belediyesi-ile-kvk-egitim-programimiz",
  "/Blog/detay/is-guvenligi-levhalari-tehlikelere-karsi-guvenligi-saglamamiza-yardimci-oluyor-mu":
    "/blog/is-guvenligi-levhalari-tehlikelere-karsi-guvenligi-saglamamiza-yardimci-oluyor-mu",
  "/Blog/detay/is-sagligi-ve-guvenligi": "/blog/is-sagligi-ve-guvenligi",
  "/Blog/detay/is-sagligi-ve-guvenliginin-onemi":
    "/blog/is-sagligi-ve-guvenliginin-onemi",
  "/Blog/detay/isg-egitimlerinin-gerekliligi":
    "/blog/isg-egitimlerinin-gerekliligi",
  "/Blog/detay/isletmelere-girisimcilere-ve-yatirimcilara-yonelik-bilgi-transferini-kolaylastiran-online-teknoloji":
    "/blog/isletmelere-girisimcilere-ve-yatirimcilara-yonelik-bilgi-transferini-kolaylastiran-online-teknoloji",
  "/Blog/detay/istanbul-okan-universitesi-kariyer-gunleri":
    "/blog/istanbul-okan-universitesi-kariyer-gunleri",
  "/Blog/detay/istanbul-zaim-universitesi-fikri-ve-sinai-haklar-egitim-programi":
    "/blog/istanbul-zaim-universitesi-fikri-ve-sinai-haklar-egitim-programi",
  "/Blog/detay/istanbul-zaim-universitesi-kariyer-gunleri":
    "/blog/istanbul-zaim-universitesi-kariyer-gunleri",
  "/Blog/detay/kadin-istihdami-icin-pozitif-ayrimcilik-projesi-75-000-tl":
    "/blog/kadin-istihdami-icin-pozitif-ayrimcilik-projesi-75-000-tl",
  "/Blog/detay/kapasite-gelistirme-destek-programi-2-basvuru-donemi-basladi":
    "/blog/kapasite-gelistirme-destek-programi-2-basvuru-donemi-basladi",
  "/Blog/detay/karbon-ayak-izi-kavramina-genel-bakis":
    "/blog/karbon-ayak-izi-kavramina-genel-bakis",
  "/Blog/detay/kimyasal-maddelerin-is-hayatindaki-yeri":
    "/blog/kimyasal-maddelerin-is-hayatindaki-yeri",
  "/Blog/detay/kirsal-kalkinma-yatirim-programi":
    "/blog/kirsal-kalkinma-yatirim-programi",
  "/Blog/detay/kisisel-veri-sahibi-nin-haklari-ve-kanun-hukumlerinin-uygulanmayacagi-haller":
    "/blog/kisisel-veri-sahibi-nin-haklari-ve-kanun-hukumlerinin-uygulanmayacagi-haller",
  "/Blog/detay/kisisel-veri-sahibi-nin-ve-kanun-hukumlerinin-uygulanmayacagi-haller":
    "/blog/kisisel-veri-sahibi-nin-ve-kanun-hukumlerinin-uygulanmayacagi-haller",
  "/Blog/detay/kisisel-verilerin-islenmesinde-genel-ilkeler-nelerdir":
    "/blog/kisisel-verilerin-islenmesinde-genel-ilkeler-nelerdir",
  "/Blog/detay/kisisel-verilerin-korunmasi-kanunu-ile-yapay-zeka-arasindaki-iliski":
    "/blog/kisisel-verilerin-korunmasi-kanunu-ile-yapay-zeka-arasindaki-iliski",
  "/Blog/detay/kisisel-verilerin-korunmasi-kanunu-ve-sosyal-medya-iliskisi-milli-guvenlik-boyutu":
    "/blog/kisisel-verilerin-korunmasi-kanunu-ve-sosyal-medya-iliskisi-milli-guvenlik-boyutu",
  "/Blog/detay/kisisel-verilerin-korunmasi-kanununun-sosyal-hayat-ve-is-dunyasindaki-onemi":
    "/blog/kisisel-verilerin-korunmasi-kanununun-sosyal-hayat-ve-is-dunyasindaki-onemi",
  "/Blog/detay/kisisel-verilerin-korunmasi-yeni-duzenleme-neler-getiriyor":
    "/blog/kisisel-verilerin-korunmasi-yeni-duzenleme-neler-getiriyor",
  "/Blog/detay/kisisel-verilerin-ve-ozel-nitelikli-kisisel-verilerin-yurt-disina-aktarilma-sartlari":
    "/blog/kisisel-verilerin-ve-ozel-nitelikli-kisisel-verilerin-yurt-disina-aktarilma-sartlari",
  "/Blog/detay/kitlesel-gozetim-ve-kisisel-verilerin-korunmasi":
    "/blog/kitlesel-gozetim-ve-kisisel-verilerin-korunmasi",
  "/Blog/detay/kobi-beyannamelerinizi-guncellemeyi-unutmayin":
    "/blog/kobi-beyannamelerinizi-guncellemeyi-unutmayin",
  "/Blog/detay/konaklama-tesislerine-sgk-prim-destegi":
    "/blog/konaklama-tesislerine-sgk-prim-destegi",
  "/Blog/detay/kosgeb-ar-ge-ur-ge-ve-inovasyon-destekleri-basladi":
    "/blog/kosgeb-ar-ge-ur-ge-ve-inovasyon-destekleri-basladi",
  "/Blog/detay/kosgeb-imalat-sanayi-sektoru-icin-kobigel-destekleri-acildi":
    "/blog/kosgeb-imalat-sanayi-sektoru-icin-kobigel-destekleri-acildi",
  "/Blog/detay/kurumsal-karbon-ayak-izi-hesaplama-ve-raporlama":
    "/blog/kurumsal-karbon-ayak-izi-hesaplama-ve-raporlama",
  "/Blog/detay/kurumsal-su-ayak-izi-hesaplama-ve-raporlama":
    "/blog/kurumsal-su-ayak-izi-hesaplama-ve-raporlama",
  "/Blog/detay/kvkk-nin-turkiye-deki-8-yillik-seruveni":
    "/blog/kvkk-nin-turkiye-deki-8-yillik-seruveni",
  "/Blog/detay/kvkk-tarafindan-verilen-guncel-kararlar":
    "/blog/kvkk-tarafindan-verilen-guncel-kararlar",
  "/Blog/detay/mobil-uygulamalarda-mahremiyetin-korunmasina-yonelik-tavsiyeler":
    "/blog/mobil-uygulamalarda-mahremiyetin-korunmasina-yonelik-tavsiyeler",
  "/Blog/detay/pandemi-koronavirus-covid-19-salgininda-is-yerlerinde-alinmasi-gereken-tedbirler":
    "/blog/pandemi-koronavirus-covid-19-salgininda-is-yerlerinde-alinmasi-gereken-tedbirler",
  "/Blog/detay/pazar-arastirmasi-ve-pazara-giris-destegi":
    "/blog/pazar-arastirmasi-ve-pazara-giris-destegi",
  "/Blog/detay/prokvk-aydinlatma-riza-yonetimi-gizlilik-sozlesmeleri-taahhutname":
    "/blog/prokvk-aydinlatma-riza-yonetimi-gizlilik-sozlesmeleri-taahhutname",
  "/Blog/detay/prokvk-nedir": "/blog/prokvk-nedir",
  "/Blog/detay/prokvk-ozellikleri-nelerdir":
    "/blog/prokvk-ozellikleri-nelerdir",
  "/Blog/detay/sanayi-siciline-kayitli-isletmelerin-dikkatine-yillik-isletme-cetveli":
    "/blog/sanayi-siciline-kayitli-isletmelerin-dikkatine-yillik-isletme-cetveli",
  "/Blog/detay/sgk-tesvikleri-ve-sigorta-tesvik-sistemi":
    "/blog/sgk-tesvikleri-ve-sigorta-tesvik-sistemi",
  "/Blog/detay/sgk-ve-iskur-tesviklerinin-isverenler-acisindan-onemi":
    "/blog/sgk-ve-iskur-tesviklerinin-isverenler-acisindan-onemi",
  "/Blog/detay/skdm-basladi": "/blog/skdm-basladi",
  "/Blog/detay/sorularla-kisisel-verilerin-korunmasi":
    "/blog/sorularla-kisisel-verilerin-korunmasi",
  "/Blog/detay/tahsilat-performansi": "/blog/tahsilat-performansi",
  "/Blog/detay/tekirdag-icin-yerel-kalkinma-hamlesi-programi-basladi":
    "/blog/tekirdag-icin-yerel-kalkinma-hamlesi-programi-basladi",
  "/Blog/detay/teknoloji-odakli-sanayi-hamle-programi":
    "/blog/teknoloji-odakli-sanayi-hamle-programi",
  "/Blog/detay/teknoloji-odakli-sanayi-hamle-programi-basladi":
    "/blog/teknoloji-odakli-sanayi-hamle-programi-basladi",
  "/Blog/detay/telefonda-dogru-iletisim-icin-altin-ogutler":
    "/blog/telefonda-dogru-iletisim-icin-altin-ogutler",
  "/Blog/detay/tubitak-1501-sanayi-ar-ge-projeleri-ve-1507-kobi-ar-ge-baslangic-destek-programi":
    "/blog/tubitak-1501-sanayi-ar-ge-projeleri-ve-1507-kobi-ar-ge-baslangic-destek-programi",
  "/Blog/detay/unutulma-kvk-bilgi-notu": "/blog/unutulma-kvk-bilgi-notu",
  "/Blog/detay/verbis-e-kayit-icin-son-tarih-31-mayis":
    "/blog/verbis-e-kayit-icin-son-tarih-31-mayis",
  "/Blog/detay/verbis-kayit-suresi-5-haziran-2026-ya-uzadi":
    "/blog/verbis-kayit-suresi-5-haziran-2026-ya-uzadi",
  "/Blog/detay/verbis-sistemine-son-basvuru-tarihi-6-haziran":
    "/blog/verbis-sistemine-son-basvuru-tarihi-6-haziran",
  "/Blog/detay/yapay-zek": "/blog/yapay-zek",
  "/Blog/detay/yapay-zeka-kredi-programi": "/blog/yapay-zeka-kredi-programi",
  "/Blog/detay/yatirim-taahhutlu-avans-kredisi":
    "/blog/yatirim-taahhutlu-avans-kredisi",
  "/Blog/detay/yatirim-tesvik-belgesi": "/blog/yatirim-tesvik-belgesi",
  "/Blog/detay/yatirim-tesvik-belgesi-gumruk-vergi-muafiyetleri":
    "/blog/yatirim-tesvik-belgesi-gumruk-vergi-muafiyetleri",
  "/Blog/detay/yesil-donusum-destek-programi":
    "/blog/yesil-donusum-destek-programi",
  "/Blog/detay/yesil-donusum-destek-programi-basladi":
    "/blog/yesil-donusum-destek-programi-basladi",
  "/Blog/detay/yesil-sanayi-destek-programi-14-000-000-tl-geri-odemeli":
    "/blog/yesil-sanayi-destek-programi-14-000-000-tl-geri-odemeli",
  "/Blog/detay/yillik-isletme-cetveli-icin-son-tarih-30-nisan":
    "/blog/yillik-isletme-cetveli-icin-son-tarih-30-nisan",
  "/Blog/detay/yurt-disi-pazar-arastirmasi-destegi":
    "/blog/yurt-disi-pazar-arastirmasi-destegi",
  "/Blog/detay/yurt-disi-pazar-destek-programi":
    "/blog/yurt-disi-pazar-destek-programi",
  // "/Blog/index/": "/blog//Blog/index/",
  // "/Blog/index/27": "/blog//Blog/index/27",
  // "/Blog/index/36": "/blog//Blog/index/36",
  // "/Blog/index/45": "/blog//Blog/index/45",
  // "/Blog/index/54": "/blog//Blog/index/54",
  // "/Blog/index/9": "/blog//Blog/index/9",
  "/Blog/kategori/genel": "/blog//Blog/kategori/genel",
};
