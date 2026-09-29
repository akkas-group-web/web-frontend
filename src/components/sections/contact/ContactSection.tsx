import { Mail, MapPin, MessageCircle, Phone, Printer } from "lucide-react";

import type { ContactOffice } from "@/types";
import { ContactForm } from "./ContactForm";
// import { WHATSAPP, getWhatsAppUrl } from "@/constants/whatsapp";
import { getWhatsAppUrl } from "@/constants/whatsapp";
import { WhatsAppSettings } from "@/services/contact.service";
// import type { WhatsAppSettings } from "@/components/sections/contact/ContactSection";

interface ContactSectionProps {
  officeLabels: {
    addressLabel: string;
    otherOfficesTitle: string;
  };
  whatsapp: WhatsAppSettings | null;
  offices: ContactOffice[];
  // services: string[];
  formEyebrow?: string;
  formTitle?: string;
  formDescription?: string;
  formFields: {
    nameLabel: string;
    namePlaceholder: string;
    companyLabel: string;
    companyPlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    serviceLabel: string;
    serviceDefault: string;
    messageLabel: string;
    messagePlaceholder: string;
    submitButtonText: string;
    kvkkPdfUrl: string;
  };
}

export function ContactSection({
  whatsapp,
  offices,
  // services,
  formEyebrow,
  formTitle,
  formDescription,
  formFields,
  officeLabels,
}: ContactSectionProps) {
  const [mainOffice, ...otherOffices] = offices;

  if (!mainOffice) {
    return null;
  }

  return (
    <section className="bg-white py-8 md:py-10">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
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

            <ContactForm fields={formFields} />
          </div>

          <div className="lg:border-l lg:border-brand-dark/10 lg:pl-12">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-primary">
              {mainOffice.title}
            </p>

            <h3 className="mt-3 font-heading text-2xl font-semibold text-brand-dark">
              {mainOffice.city}
            </h3>

            <div className="mt-5 divide-y divide-brand-dark/10 border-y border-brand-dark/10">
              {mainOffice.address && (
                <div className="flex gap-3 py-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-primary" />

                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                      {officeLabels.addressLabel}
                    </p>

                    <p className="mt-1.5 max-w-sm text-sm leading-6 text-brand-dark">
                      {mainOffice.address}
                    </p>
                  </div>
                </div>
              )}

              {mainOffice.phones && mainOffice.phones.length > 0 && (
                <div className="flex gap-3 py-4">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand-primary" />

                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                      {formFields.phoneLabel}
                    </p>

                    <div className="mt-1.5 flex flex-col gap-2">
                      {mainOffice.phones.map((p, index) =>
                        p.type === "fax" ? (
                          <p
                            key={`${p.number}-${index}`}
                            className="flex items-center gap-2 text-sm font-medium text-brand-dark"
                          >
                            <Printer
                              className="h-3.5 w-3.5 text-muted-foreground"
                              aria-hidden="true"
                            />
                            <span className="sr-only">Faks:</span>
                            {p.number}
                          </p>
                        ) : (
                          <a
                            key={`${p.number}-${index}`}
                            href={`tel:${p.number.replace(/[^\d+]/g, "")}`}
                            className="text-sm font-medium text-brand-dark transition-colors hover:text-brand-primary"
                          >
                            {p.number}
                          </a>
                        ),
                      )}
                    </div>
                  </div>
                </div>
              )}

              {mainOffice.email && (
                <a
                  href={`mailto:${mainOffice.email}`}
                  className="group flex gap-3 py-4"
                >
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand-primary" />

                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                      {formFields.emailLabel}
                    </p>

                    <p className="mt-1.5 text-sm font-medium text-brand-dark transition-colors group-hover:text-brand-primary">
                      {mainOffice.email}
                    </p>
                  </div>
                </a>
              )}

              {whatsapp && (
                <a
                  href={getWhatsAppUrl(whatsapp.number, whatsapp.message)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex gap-3 py-4"
                >
                  <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-[#25D366]" />

                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                      {whatsapp.label}
                    </p>

                    <p className="mt-1.5 text-sm font-medium text-brand-dark transition-colors group-hover:text-brand-primary">
                      {whatsapp.displayNumber}
                    </p>

                    <p className="mt-1 text-xs text-muted-foreground">
                      {whatsapp.hint}
                    </p>
                  </div>
                </a>
              )}
            </div>

            <div className="mt-7">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-primary">
                {officeLabels.otherOfficesTitle}
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
