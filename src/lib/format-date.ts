/**
 * ISO tarih string'ini yerelleştirilmiş, kısa formatta gösterir.
 * Örn: "14 Mar 2025"
 *
 * Not: AnnouncementsSection içindeki formatDate ile birebir aynı mantık;
 * tek noktadan yönetilmesi için buraya taşındı. AnnouncementsSection
 * dokunulmadı, istersen orada da bu fonksiyonu import edip yerel
 * tanımı kaldırabiliriz.
 */
export function formatDate(isoDate: string, locale: string = "tr-TR") {
  return new Date(isoDate).toLocaleDateString(locale, {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}
