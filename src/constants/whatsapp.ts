export const WHATSAPP_FALLBACK = {
  number: "905415205540",
  displayNumber: "0541 520 55 40",
  label: "WhatsApp",
  hint: "Mesaj yazmak için tıklayın",
  message: "Merhaba, web sitenizden ulaşıyorum. Bilgi almak istiyorum.",
};

export function normalizeWhatsAppNumber(raw: string) {
  const digits = raw.replace(/\D/g, "");
  if (digits.startsWith("90")) return digits;
  if (digits.startsWith("0")) return `90${digits.slice(1)}`;
  return `90${digits}`;
}

export function getWhatsAppUrl(number: string, message: string) {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
