import { MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/constants/whatsapp";
import { getWhatsAppSettings } from "@/services/contact.service";

export async function WhatsAppButton() {
  const wa = await getWhatsAppSettings();
  if (!wa) return null;

  return (
    <a
      href={getWhatsAppUrl(wa.number, wa.message)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${wa.label} ile iletişime geçin: ${wa.displayNumber}`}
      title={wa.label}
      className="fixed bottom-6 right-6 z-40 flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform duration-200 hover:scale-110 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366]"
    >
      <MessageCircle className="size-7" aria-hidden="true" />
    </a>
  );
}
