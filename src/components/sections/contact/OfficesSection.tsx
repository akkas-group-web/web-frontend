import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";

import { CONTACT_OFFICES } from "@/constants/contact";

export function OfficesSection() {
  const mainOffice = CONTACT_OFFICES[0];
  const otherOffices = CONTACT_OFFICES.slice(1);

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        {/* Heading */}
        <div className="mb-12 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-primary">
            Ofislerimiz
          </p>

          <h2 className="mt-4 font-heading text-3xl font-semibold tracking-[-0.03em] text-brand-dark md:text-5xl">
            Türkiye genelinde
            <br />
            size daha yakınız.
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground">
            Merkez ofisimiz ve Türkiye&apos;nin farklı şehirlerindeki hizmet
            noktalarımızla müşterilerimize hızlı ve ulaşılabilir destek
            sunuyoruz.
          </p>
        </div>

        {/* Main Office */}
        <div className="grid overflow-hidden border-y border-brand-dark/10 lg:grid-cols-2">
          {/* Image */}
          <div className="relative min-h-[360px] lg:min-h-[470px]">
            <Image
              src="/office/AkkaşPlaza.png"
              alt="Akkaş Group Merkez Ofis - Akkaş Plaza"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Information */}
          <div className="flex flex-col justify-center px-0 py-10 lg:px-14 lg:py-14">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-primary">
              Merkez Ofis
            </p>

            <h3 className="mt-3 font-heading text-3xl font-semibold text-brand-dark md:text-4xl">
              İstanbul Asya
            </h3>

            <p className="mt-2 text-sm text-muted-foreground">
              Akkaş Plaza
            </p>

            <div className="mt-8 space-y-5">
              {mainOffice.address && (
                <div className="flex items-start gap-4">
                  <MapPin className="mt-1 h-5 w-5 shrink-0 text-brand-primary" />

                  <p className="max-w-md text-sm leading-7 text-muted-foreground">
                    {mainOffice.address}
                  </p>
                </div>
              )}

              {mainOffice.phone && (
                <a
                  href={`tel:${mainOffice.phone.replace(/\D/g, "")}`}
                  className="flex items-center gap-4 text-sm text-muted-foreground transition-colors hover:text-brand-primary"
                >
                  <Phone className="h-5 w-5 text-brand-primary" />
                  {mainOffice.phone}
                </a>
              )}

              {mainOffice.email && (
                <a
                  href={`mailto:${mainOffice.email}`}
                  className="flex items-center gap-4 text-sm text-muted-foreground transition-colors hover:text-brand-primary"
                >
                  <Mail className="h-5 w-5 text-brand-primary" />
                  {mainOffice.email}
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Other Locations */}
        <div className="pt-12">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-primary">
            Diğer Hizmet Noktalarımız
          </p>

          <div className="mt-7 grid border-t border-brand-dark/10 sm:grid-cols-2 lg:grid-cols-4">
            {otherOffices.map((office) => (
              <div
                key={office.id}
                className="flex items-center gap-3 border-b border-brand-dark/10 py-5 lg:pr-8"
              >
                <MapPin className="h-4 w-4 shrink-0 text-brand-primary" />

                <span className="font-heading text-base font-medium text-brand-dark">
                  {office.city}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}