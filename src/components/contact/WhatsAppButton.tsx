import { MessageCircle } from "lucide-react";
import { WHATSAPP, getWhatsAppUrl } from "@/constants/whatsapp";

export function WhatsAppButton() {
  return (
    <a
      href={getWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`WhatsApp ile iletişime geçin: ${WHATSAPP.displayPhone}`}
      className="group fixed bottom-[calc(1.5rem+var(--cookie-bar-h,0px))] right-6 z-40 flex items-center gap-0 rounded-full bg-[#25D366] p-3.5 text-white shadow-lg transition-all duration-300 hover:gap-2 hover:pr-5 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366]"
    >
      <MessageCircle className="size-6 shrink-0" aria-hidden="true" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-medium opacity-0 transition-all duration-300 group-hover:max-w-40 group-hover:opacity-100 group-focus-visible:max-w-40 group-focus-visible:opacity-100">
        WhatsApp ile yazın
      </span>
    </a>
  );
}
