import { Mail, MapPin, Phone } from "lucide-react";

import { CONTACT_OFFICES } from "@/constants/contact";
import { SITE_CONFIG } from "@/constants/site";
import { ContactForm } from "./ContactForm";

export function ContactSection() {
  const otherOffices = CONTACT_OFFICES.slice(1);

  return (
    <section className="bg-white py-10 md:py-14">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          {/* LEFT - FORM */}
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-primary">
              İletişim
            </p>

            <h2 className="mt-3 font-heading text-2xl font-semibold tracking-[-0.03em] text-brand-dark md:text-[28px]">
              Size nasıl yardımcı olabiliriz?
            </h2>

            <p className="mb-6 mt-3 max-w-lg text-sm leading-6 text-muted-foreground">
              Formu doldurun, ilgili uzmanımız en kısa sürede sizinle iletişime
              geçsin.
            </p>

            <ContactForm />
          </div>

          {/* RIGHT - CONTACT INFO */}
          <div className="lg:border-l lg:border-brand-dark/10 lg:pl-12">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-primary">
              Merkez Ofis
            </p>

            <h3 className="mt-3 font-heading text-2xl font-semibold text-brand-dark">
              İstanbul Asya
            </h3>

            <p className="mt-1 text-sm text-muted-foreground">
              Akkaş Plaza
            </p>

            {/* Contact Details */}
            <div className="mt-5 divide-y divide-brand-dark/10 border-y border-brand-dark/10">
              <div className="flex gap-3 py-4">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-primary" />

                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                    Adres
                  </p>

                  <p className="mt-1.5 max-w-sm text-sm leading-6 text-brand-dark">
                    {SITE_CONFIG.address}
                  </p>
                </div>
              </div>

              <a
                href={`tel:${SITE_CONFIG.phone.replace(/\D/g, "")}`}
                className="group flex gap-3 py-4"
              >
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand-primary" />

                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                    Telefon
                  </p>

                  <p className="mt-1.5 text-sm font-medium text-brand-dark transition-colors group-hover:text-brand-primary">
                    {SITE_CONFIG.phone}
                  </p>
                </div>
              </a>

              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="group flex gap-3 py-4"
              >
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand-primary" />

                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                    E-posta
                  </p>

                  <p className="mt-1.5 text-sm font-medium text-brand-dark transition-colors group-hover:text-brand-primary">
                    {SITE_CONFIG.email}
                  </p>
                </div>
              </a>
            </div>

            {/* Other Locations */}
            <div className="mt-7">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-primary">
                Diğer Hizmet Noktalarımız
              </p>

              <div className="mt-3 grid grid-cols-2 gap-x-7">
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