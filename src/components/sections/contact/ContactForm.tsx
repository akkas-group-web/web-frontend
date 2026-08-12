"use client";

import { ArrowRight } from "lucide-react";
import { CONTACT_SERVICES } from "@/constants/contact";

export function ContactForm() {
  return (
    <form className="space-y-4">
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="mb-2 block text-sm font-medium text-brand-dark"
          >
            Ad Soyad
          </label>

          <input
            id="name"
            name="name"
            type="text"
            placeholder="Adınız Soyadınız"
            className="h-13 w-full rounded-xl border border-brand-dark/10 bg-[#f8fafb] px-4 text-sm outline-none transition placeholder:text-[#9ca6a9] focus:border-brand-primary focus:bg-white focus:ring-4 focus:ring-brand-light/15"
          />
        </div>

        <div>
          <label
            htmlFor="company"
            className="mb-2 block text-sm font-medium text-brand-dark"
          >
            Firma
          </label>

          <input
            id="company"
            name="company"
            type="text"
            placeholder="Firma adınız"
            className="h-13 w-full rounded-xl border border-brand-dark/10 bg-[#f8fafb] px-4 text-sm outline-none transition placeholder:text-[#9ca6a9] focus:border-brand-primary focus:bg-white focus:ring-4 focus:ring-brand-light/15"
          />
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium text-brand-dark"
          >
            E-posta
          </label>

          <input
            id="email"
            name="email"
            type="email"
            placeholder="ornek@firma.com"
            className="h-13 w-full rounded-xl border border-brand-dark/10 bg-[#f8fafb] px-4 text-sm outline-none transition placeholder:text-[#9ca6a9] focus:border-brand-primary focus:bg-white focus:ring-4 focus:ring-brand-light/15"
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="mb-2 block text-sm font-medium text-brand-dark"
          >
            Telefon
          </label>

          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+90 5__ ___ __ __"
            className="h-13 w-full rounded-xl border border-brand-dark/10 bg-[#f8fafb] px-4 text-sm outline-none transition placeholder:text-[#9ca6a9] focus:border-brand-primary focus:bg-white focus:ring-4 focus:ring-brand-light/15"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="service"
          className="mb-2 block text-sm font-medium text-brand-dark"
        >
          İlgilendiğiniz Hizmet
        </label>

        <select
          id="service"
          name="service"
          defaultValue=""
          className="h-13 w-full rounded-xl border border-brand-dark/10 bg-[#f8fafb] px-4 text-sm text-[#576569] outline-none transition focus:border-brand-primary focus:bg-white focus:ring-4 focus:ring-brand-light/15"
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

      <div>
        <label
          htmlFor="message"
          className="mb-2 block text-sm font-medium text-brand-dark"
        >
          Mesajınız
        </label>

        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Size nasıl yardımcı olabiliriz?"
          className="w-full resize-none rounded-xl border border-brand-dark/10 bg-[#f8fafb] px-4 py-4 text-sm outline-none transition placeholder:text-[#9ca6a9] focus:border-brand-primary focus:bg-white focus:ring-4 focus:ring-brand-light/15"
        />
      </div>

      <label className="flex cursor-pointer items-start gap-3">
        <input
          type="checkbox"
          className="mt-1 h-4 w-4 accent-[#1a7d8f]"
        />

        <span className="text-xs leading-5 text-muted-foreground">
          KVKK Aydınlatma Metni&apos;ni okudum ve kişisel verilerimin iletişim
          talebimin değerlendirilmesi amacıyla işlenmesini kabul ediyorum.
        </span>
      </label>

      <button
        type="button"
        className="group inline-flex items-center justify-center gap-3 rounded-full bg-brand-dark px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-brand-primary hover:shadow-lg"
      >
        Mesajı Gönder

        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </button>
    </form>
  );
}