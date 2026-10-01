export const WHATSAPP = {
  phone: "905415205540", // 0541 520 55 40 → uluslararası format, + ve boşluk yok
  displayPhone: "0541 520 55 40",
  defaultMessage: "Merhaba, web sitenizden ulaşıyorum. Bilgi almak istiyorum.",
} as const;

export function getWhatsAppUrl(message: string = WHATSAPP.defaultMessage) {
  return `https://wa.me/${WHATSAPP.phone}?text=${encodeURIComponent(message)}`;
}
