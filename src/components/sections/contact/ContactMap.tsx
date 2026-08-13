import { SITE_CONFIG } from "@/constants/site";

export function ContactMap() {
  const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(
    SITE_CONFIG.address,
  )}&z=15&output=embed`;

  return (
    <iframe
      title="Akkaş Group Merkez Ofis"
      src={mapUrl}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className="absolute inset-0 h-full w-full border-0"
    />
  );
}