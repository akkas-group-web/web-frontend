/**
 * Eski akkasgroup.com URL yapısı (flat) → yeni Next.js URL yapısı (nested) eşleştirmesi.
 * Yeni bir sayfa eklendikçe veya eski bir URL fark edildikçe buraya satır ekle.
 * Kaynak: eski site sitemap.xml taraması, 2026-09.
 */
export const LEGACY_REDIRECTS: Record<string, string> = {
  "/kalite-yonetim-sistemi-egitimleri":
    "/hizmetlerimiz/egitimler/kalite-yonetim-sistemi-egitimleri",
};
