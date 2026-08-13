import Image from "next/image";
import type { ClientReference } from "@/types/reference";

interface ClientLogoCardProps {
  client: ClientReference;
}

export function ClientLogoCard({ client }: ClientLogoCardProps) {
  return (
    <div className="card-surface flex aspect-[3/2] flex-col items-center justify-center gap-3 rounded-2xl p-6 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-[#1a7d8f]/10">
      <div className="relative h-12 w-full">
        <Image
          src={client.logo}
          alt={client.name}
          fill
          className="object-contain grayscale transition-all hover:grayscale-0"
        />
      </div>
      <span className="text-center text-xs font-medium text-[#6b7280]">
        {client.name}
      </span>
    </div>
  );
}
