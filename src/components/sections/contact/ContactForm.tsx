"use client";

import { ArrowRight } from "lucide-react";

import { CONTACT_SERVICES } from "@/constants/contact";

export function ContactForm() {
  return (
    <form className="space-y-3.5">
      {/* Ad Soyad / Firma */}
      <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 sm:gap-4">
        <div>
          <label
            htmlFor="name"
            className="mb-1.5 block text-sm font-medium text-brand-dark"
          >
            Ad Soyad <span className="text-red-500">*</span>
          </label>

          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Adınız Soyadınız"
            className="h-12 w-full rounded-xl border border-brand-dark/10 bg-[#f8fafb] px-4 text-base outline-none transition placeholder:text-[#9ca6a9] focus:border-brand-primary focus:bg-white focus:ring-4 focus:ring-brand-light/15 sm:text-sm"
          />
        </div>

        <div>
          <label
            htmlFor="company"
            className="mb-1.5 block text-sm font-medium text-brand-dark"
          >
            Firma
          </label>

          <input
            id="company"
            name="company"
            type="text"
            placeholder="Firma adınız"
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
            E-posta <span className="text-red-500">*</span>
          </label>

          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="ornek@firma.com"
            className="h-12 w-full rounded-xl border border-brand-dark/10 bg-[#f8fafb] px-4 text-base outline-none transition placeholder:text-[#9ca6a9] focus:border-brand-primary focus:bg-white focus:ring-4 focus:ring-brand-light/15 sm:text-sm"
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="mb-1.5 block text-sm font-medium text-brand-dark"
          >
            Telefon <span className="text-red-500">*</span>
          </label>

          <input
            id="phone"
            name="phone"
            type="tel"
            required
            placeholder="+90 5__ ___ __ __"
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
          İlgilendiğiniz Hizmet <span className="text-red-500">*</span>
        </label>

        <select
          id="service"
          name="service"
          required
          defaultValue=""
          className="h-12 w-full rounded-xl border border-brand-dark/10 bg-[#f8fafb] px-4 text-base text-[#576569] outline-none transition focus:border-brand-primary focus:bg-white focus:ring-4 focus:ring-brand-light/15 sm:text-sm"
        >
          <option value="" disabled>
            Hizmet seçiniz
          </option>

          {CONTACT_SERVICES.map((service) => (
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
          Mesajınız <span className="text-red-500">*</span>
        </label>

        <textarea
          id="message"
          name="message"
          rows={3}
          required
          minLength={10}
          placeholder="Size nasıl yardımcı olabiliriz?"
          className="min-h-[96px] w-full resize-none rounded-xl border border-brand-dark/10 bg-[#f8fafb] px-4 py-3 text-base outline-none transition placeholder:text-[#9ca6a9] focus:border-brand-primary focus:bg-white focus:ring-4 focus:ring-brand-light/15 sm:text-sm"
        />
      </div>

      {/* KVKK */}
      <label className="flex cursor-pointer items-start gap-2.5 pt-0.5">
        <input
          type="checkbox"
          required
          className="mt-0.5 h-4 w-4 shrink-0 accent-[#1a7d8f]"
        />

        <span className="text-xs leading-5 text-muted-foreground">
          KVKK Aydınlatma Metni&apos;ni okudum ve kişisel verilerimin iletişim
          talebimin değerlendirilmesi amacıyla işlenmesini kabul ediyorum.
          <span className="text-red-500"> *</span>
        </span>
      </label>

      {/* Gönder */}
      <button
        type="submit"
        className="group inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-brand-dark px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-brand-primary hover:shadow-lg sm:w-auto"
      >
        Mesajı Gönder

        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </button>
    </form>
  );
}