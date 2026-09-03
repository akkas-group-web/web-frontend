import { Mail, MapPin, Phone } from "lucide-react";

import type { ContactOffice } from "@/types";
import { ContactForm } from "./ContactForm";

interface ContactSectionProps {
  offices: ContactOffice[];
  services: string[];
  formEyebrow?: string;
  formTitle?: string;
  formDescription?: string;
}

export function ContactSection({
  offices,
  services,
  formEyebrow,
  formTitle,
  formDescription,
}: ContactSectionProps) {
  const [mainOffice, ...otherOffices] = offices;

  if (!mainOffice) {
    return null;
  }

  return (
    <section className="bg-white py-8 md:py-10">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* LEFT - FORM */}
          <div className="max-w-xl">
            {formEyebrow && (
  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-primary">
    {formEyebrow}
  </p>
)}

{formTitle && (
  <h2 className="mt-3 font-heading text-2xl font-semibold tracking-[-0.03em] text-brand-dark md:text-[28px]">
    {formTitle}
  </h2>
)}

{formDescription && (
  <p className="mb-6 mt-3 max-w-lg text-sm leading-6 text-muted-foreground">
    {formDescription}
  </p>
)}

            <ContactForm services={services} />
          </div>

          {/* RIGHT - CONTACT INFO */}
          <div className="lg:border-l lg:border-brand-dark/10 lg:pl-12">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-primary">
              {mainOffice.title}
            </p>

            <h3 className="mt-3 font-heading text-2xl font-semibold text-brand-dark">
              {mainOffice.city}
            </h3>

            <p className="mt-1 text-sm text-muted-foreground">
              Akkaş Plaza
            </p>

            {/* Contact Details */}
            <div className="mt-5 divide-y divide-brand-dark/10 border-y border-brand-dark/10">
              {mainOffice.address && (
                <div className="flex gap-3 py-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-primary" />

                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                      Adres
                    </p>

                    <p className="mt-1.5 max-w-sm text-sm leading-6 text-brand-dark">
                      {mainOffice.address}
                    </p>
                  </div>
                </div>
              )}

              {mainOffice.phone && (
                <a
                  href={`tel:${mainOffice.phone.replace(/\D/g, "")}`}
                  className="group flex gap-3 py-4"
                >
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand-primary" />

                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                      Telefon
                    </p>

                    <p className="mt-1.5 text-sm font-medium text-brand-dark transition-colors group-hover:text-brand-primary">
                      {mainOffice.phone}
                    </p>
                  </div>
                </a>
              )}

              {mainOffice.email && (
                <a
                  href={`mailto:${mainOffice.email}`}
                  className="group flex gap-3 py-4"
                >
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand-primary" />

                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                      E-posta
                    </p>

                    <p className="mt-1.5 text-sm font-medium text-brand-dark transition-colors group-hover:text-brand-primary">
                      {mainOffice.email}
                    </p>
                  </div>
                </a>
              )}
            </div>

            {/* Other Locations */}
            <div className="mt-7">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-primary">
                Diğer Hizmet Noktalarımız
              </p>

              <div className="mt-3 grid grid-cols-1 gap-x-7 sm:grid-cols-2">
                {otherOffices.map((office) => (
                  <div
                    key={office.id}
                    className="flex items-center gap-2 border-b border-brand-dark/10 py-2.5"
                  >
                    <MapPin className="h-3 w-3 shrink-0 text-brand-primary" />

                    <span className="text-[13px] font-medium text-brand-dark">
                      {office.city}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}