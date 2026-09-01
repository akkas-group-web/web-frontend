"use client";

import { useState } from "react";
import { ArrowRight, ExternalLink } from "lucide-react";
interface ContactFormProps {
  services: string[];
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
}

export function ContactForm({
  services,
  nameLabel,
  namePlaceholder,
  companyLabel,
  companyPlaceholder,
  emailLabel,
  emailPlaceholder,
  phoneLabel,
  phonePlaceholder,
  serviceLabel,
  serviceDefault,
  messageLabel,
  messagePlaceholder,
  submitButtonText,
  kvkkPdfUrl,
}: ContactFormProps) {
  const [kvkkOpened, setKvkkOpened] = useState(false);

  return (
    <form className="space-y-3.5">
      {/* Ad Soyad / Firma */}
      <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 sm:gap-4">
        <div>
          <label
            htmlFor="name"
            className="mb-1.5 block text-sm font-medium text-brand-dark"
          >
            {nameLabel} <span className="text-red-500">*</span>
          </label>

          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder={namePlaceholder}
            className="h-12 w-full rounded-xl border border-brand-dark/10 bg-[#f8fafb] px-4 text-base outline-none transition placeholder:text-[#9ca6a9] focus:border-brand-primary focus:bg-white focus:ring-4 focus:ring-brand-light/15 sm:text-sm"
          />
        </div>

        <div>
          <label
            htmlFor="company"
            className="mb-1.5 block text-sm font-medium text-brand-dark"
          >
            {companyLabel}
          </label>

          <input
            id="company"
            name="company"
            type="text"
            placeholder={companyPlaceholder}
            className="h-12 w-full rounded-xl border border-brand-dark/10 bg-[#f8fafb] px-4 text-base outline-none transition placeholder:text-[#9ca6a9] focus:border-brand-primary focus:bg-white focus:ring-4 focus:ring-brand-light/15 sm:text-sm"
          />
        </div>
      </div>

      {/* E-posta / Telefon */}
      <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 sm:gap-4">
        <div>
          <label
            htmlFor="email"
            className="mb-1.5 block text-sm font-medium text-brand-dark"
          >
            {emailLabel}
            <span className="text-red-500">*</span>
          </label>

          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder={emailPlaceholder}
            className="h-12 w-full rounded-xl border border-brand-dark/10 bg-[#f8fafb] px-4 text-base outline-none transition placeholder:text-[#9ca6a9] focus:border-brand-primary focus:bg-white focus:ring-4 focus:ring-brand-light/15 sm:text-sm"
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="mb-1.5 block text-sm font-medium text-brand-dark"
          >
            {phoneLabel} <span className="text-red-500">*</span>
          </label>

          <input
            id="phone"
            name="phone"
            type="tel"
            required
            placeholder={phonePlaceholder}
            className="h-12 w-full rounded-xl border border-brand-dark/10 bg-[#f8fafb] px-4 text-base outline-none transition placeholder:text-[#9ca6a9] focus:border-brand-primary focus:bg-white focus:ring-4 focus:ring-brand-light/15 sm:text-sm"
          />
        </div>
      </div>

      {/* Hizmet */}
      <div>
        <label
          htmlFor="service"
          className="mb-1.5 block text-sm font-medium text-brand-dark"
        >
          {serviceLabel}
          <span className="text-red-500">*</span>
        </label>

        <select
          id="service"
          name="service"
          required
          defaultValue=""
          className="h-12 w-full rounded-xl border border-brand-dark/10 bg-[#f8fafb] px-4 text-base text-[#576569] outline-none transition focus:border-brand-primary focus:bg-white focus:ring-4 focus:ring-brand-light/15 sm:text-sm"
        >
          <option value="" disabled>
            {serviceDefault}
          </option>

          {services.map((service) => (
            <option key={service} value={service}>
              {service}
            </option>
          ))}
        </select>
      </div>

      {/* Mesaj */}
      <div>
        <label
          htmlFor="message"
          className="mb-1.5 block text-sm font-medium text-brand-dark"
        >
          {messageLabel} <span className="text-red-500">*</span>
        </label>

        <textarea
          id="message"
          name="message"
          rows={3}
          required
          minLength={10}
          placeholder={messagePlaceholder}
          className="min-h-[96px] w-full resize-none rounded-xl border border-brand-dark/10 bg-[#f8fafb] px-4 py-3 text-base outline-none transition placeholder:text-[#9ca6a9] focus:border-brand-primary focus:bg-white focus:ring-4 focus:ring-brand-light/15 sm:text-sm"
        />
      </div>

      {/* KVKK */}
      <div className="pt-1">
        <label className="flex items-start gap-2.5">
          <input
            type="checkbox"
            name="kvkk"
            required
            disabled={!kvkkOpened}
            className="mt-1 h-4 w-4 shrink-0 accent-[#1a7d8f] disabled:cursor-not-allowed disabled:opacity-40"
          />

          <span className="text-xs leading-5 text-muted-foreground">
            <a
              href={kvkkPdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setKvkkOpened(true)}
              className="inline-flex items-center gap-1 font-semibold text-[#118B99] underline decoration-[#118B99]/30 underline-offset-2 transition hover:text-[#0D747E]"
            >
              KVKK Aydınlatma Metni
              <ExternalLink className="h-3 w-3" />
            </a>{" "}
            &apos;ni okudum ve kişisel verilerimin iletişim talebimin
            değerlendirilmesi amacıyla işlenmesine ilişkin bilgilendirmeyi
            okuduğumu kabul ediyorum.
            <span className="text-red-500"> *</span>
          </span>
        </label>

        {!kvkkOpened && (
          <p className="ml-6 mt-1 text-[11px] text-[#8A9A9D]">
            Onay kutusunu işaretlemek için önce aydınlatma metnini
            görüntüleyiniz.
          </p>
        )}
      </div>

      {/* Gönder */}
      <button
        type="submit"
        className="group inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-brand-dark px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-brand-primary hover:shadow-lg sm:w-auto"
      >
        {submitButtonText}
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </button>
    </form>
  );
}
