import Image from "next/image";
import type { ClientReference } from "@/types/reference";

interface ClientLogoCardProps {
  client: ClientReference;
}

export function ClientLogoCard({ client }: ClientLogoCardProps) {
  return (
    <div className="card-surface flex aspect-[3/2] items-center justify-center rounded-2xl p-3">
  <div className="relative h-20 w-full">
    <Image
      src={client.logo.url}
      alt={client.logo.alt || client.name || "Referans logosu"}
      fill
      className="object-contain"
    />
  </div>
</div>
  );
}
