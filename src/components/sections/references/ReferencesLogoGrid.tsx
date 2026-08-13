import { ClientLogoCard } from "@/components/shared/ClientLogoCard";
import type { ClientReference } from "@/types/reference";

interface ReferencesLogoGridProps {
  clients: ClientReference[];
}

export function ReferencesLogoGrid({ clients }: ReferencesLogoGridProps) {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {clients.map((client) => (
            <ClientLogoCard key={client.id} client={client} />
          ))}
        </div>
      </div>
    </section>
  );
}
