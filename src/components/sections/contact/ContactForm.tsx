"use client";

import { useState } from "react";
import { ArrowRight, ExternalLink } from "lucide-react";

interface ContactFormProps {
  //services: string[];a
  fields: {
    nameLabel: string;
    namePlaceholder: string;
    // companyLabel: string;
    // companyPlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    // serviceLabel: string;
    // serviceDefault: string;
    messageLabel: string;
    messagePlaceholder: string;
    submitButtonText: string;
  };
}

export function ContactForm({ fields }: ContactFormProps) {
  const [kvkkOpened, setKvkkOpened] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;

    setIsSubmitting(true);
    setStatusMessage("");
    setErrorMessage("");

    const formData = new FormData(form);

    const body = {
      name: String(formData.get("name") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      phone: String(formData.get("phone") || "").trim(),
      message: String(formData.get("message") || "").trim(),
      kvkkAccepted: formData.get("kvkk") === "on",
    };

    const showError = (message: string) => {
      setErrorMessage(message);

      setTimeout(() => {
        setErrorMessage("");
      }, 5000);
    };

    const name = body.name;
    const email = body.email;
    const phone = body.phone;
    const message = body.message;

    if (name.length < 2 || name.length > 150) {
      showError("Ad Soyad 2-150 karakter arasında olmalıdır.");
      setIsSubmitting(false);
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 255) {
      showError("Lütfen geçerli bir e-posta adresi giriniz.");
      setIsSubmitting(false);
      return;
    }

    const phoneDigits = phone.replace(/\D/g, "");

    if (phoneDigits.length !== 10 || !/^[0-9+\s()-]+$/.test(phone)) {
      showError("Lütfen 10 haneli geçerli bir telefon numarası giriniz.");
      setIsSubmitting(false);
      return;
    }
    if (message.length < 5 || message.length > 5000) {
      showError("Mesajınız 5-5000 karakter arasında olmalıdır.");
      setIsSubmitting(false);
      return;
    }

    if (!body.kvkkAccepted) {
      showError(
        "Devam etmek için KVKK Aydınlatma Metni'ni okuyup onaylamanız gerekmektedir.",
      );
      setIsSubmitting(false);
      return;
    }

    console.log("Contact form body:", body);

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_CHAT_API_URL}/api/contact`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        },
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "İletişim talebiniz gönderilemedi.");
      }

      setStatusMessage(
        "İletişim talebiniz başarıyla gönderildi. En kısa sürede sizinle iletişime geçeceğiz.",
      );

      setTimeout(() => {
        setStatusMessage("");
      }, 5000);

      form.reset();
      setKvkkOpened(false);
    } catch (error) {
      showError(
        error instanceof Error
          ? error.message
          : "İletişim talebiniz gönderilirken bir hata oluştu.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }
  return (
    <form className="space-y-3.5" onSubmit={handleSubmit} noValidate>
      {/* Ad Soyad / Firma */}
      <div>
        <div>
          <label
            htmlFor="name"
            className="mb-1.5 block text-sm font-medium text-brand-dark"
          >
            {fields.nameLabel} <span className="text-red-500">*</span>
          </label>

          <input
            id="name"
            name="name"
            type="text"
            required
            minLength={2}
            maxLength={150}
            placeholder={fields.namePlaceholder}
            className="h-12 w-full rounded-xl border border-brand-dark/10 bg-[#f8fafb] px-4 text-base outline-none transition placeholder:text-[#9ca6a9] focus:border-brand-primary focus:bg-white focus:ring-4 focus:ring-brand-light/15 sm:text-sm"
          />
        </div>

        {/* <div>
          <label
            htmlFor="company"
            className="mb-1.5 block text-sm font-medium text-brand-dark"
          >
            {fields.companyLabel}
          </label>

          <input
            id="company"
            name="company"
            type="text"
            placeholder={fields.companyPlaceholder}
            className="h-12 w-full rounded-xl border border-brand-dark/10 bg-[#f8fafb] px-4 text-base outline-none transition placeholder:text-[#9ca6a9] focus:border-brand-primary focus:bg-white focus:ring-4 focus:ring-brand-light/15 sm:text-sm"
          />
        </div> */}
      </div>

      {/* E-posta / Telefon */}
      <div>
        <div>
          <label
            htmlFor="email"
            className="mb-1.5 block text-sm font-medium text-brand-dark"
          >
            {fields.emailLabel} <span className="text-red-500">*</span>
          </label>

          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder={fields.emailPlaceholder}
            className="h-12 w-full rounded-xl border border-brand-dark/10 bg-[#f8fafb] px-4 text-base outline-none transition placeholder:text-[#9ca6a9] focus:border-brand-primary focus:bg-white focus:ring-4 focus:ring-brand-light/15 sm:text-sm"
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="mb-1.5 block text-sm font-medium text-brand-dark"
          >
            {fields.phoneLabel} <span className="text-red-500">*</span>
          </label>

          <input
            id="phone"
            name="phone"
            type="tel"
            required
            maxLength={10}
            pattern="[0-9]+"
            placeholder="555 555 55 55"
            className="h-12 w-full rounded-xl border border-brand-dark/10 bg-[#f8fafb] px-4 text-base outline-none transition placeholder:text-[#9ca6a9] focus:border-brand-primary focus:bg-white focus:ring-4 focus:ring-brand-light/15 sm:text-sm"
          />
        </div>
      </div>

      {/* Hizmet */}
      {/* <div>
        <label
          htmlFor="service"
          className="mb-1.5 block text-sm font-medium text-brand-dark"
        >
          {fields.serviceLabel} <span className="text-red-500">*</span>
        </label>

        <select
          id="service"
          name="service"
          required
          defaultValue=""
          className="h-12 w-full rounded-xl border border-brand-dark/10 bg-[#f8fafb] px-4 text-base text-[#576569] outline-none transition focus:border-brand-primary focus:bg-white focus:ring-4 focus:ring-brand-light/15 sm:text-sm"
        >
          <option value="" disabled>
            {fields.serviceDefault}
          </option>

          {services.map((service) => (
            <option key={service} value={service}>
              {service}
            </option>
          ))}
        </select>
      </div> */}

      {/* Mesaj */}
      <div>
        <label
          htmlFor="message"
          className="mb-1.5 block text-sm font-medium text-brand-dark"
        >
          {fields.messageLabel} <span className="text-red-500">*</span>
        </label>

        <textarea
          id="message"
          name="message"
          rows={3}
          required
          minLength={5}
          maxLength={5000}
          placeholder={fields.messagePlaceholder}
          className="min-h-[96px] w-full resize-none rounded-xl border border-brand-dark/10 bg-[#f8fafb] px-4 py-3 text-base outline-none transition placeholder:text-[#9ca6a9] focus:border-brand-primary focus:bg-white focus:ring-4 focus:ring-brand-light/15 sm:text-sm"
        />
      </div>

      {/* KVKK */}
      <div className="pt-1">
        <label className="flex items-start gap-2.5">
          <input
            type="checkbox"
            name="kvkk"
            // required
            disabled={!kvkkOpened}
            className="mt-1 h-4 w-4 shrink-0 accent-[#1a7d8f] disabled:cursor-not-allowed disabled:opacity-40"
          />

          <span className="text-xs leading-5 text-muted-foreground">
            <a
              href="/iletisim-formu-aydinlatma-metni"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setKvkkOpened(true)}
              className="inline-flex items-center gap-1 font-semibold text-[#118B99] underline decoration-[#118B99]/30 underline-offset-2 transition hover:text-[#0D747E]"
            >
              İletişim Formu Aydınlatma Metni
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

      {statusMessage && (
        <p className="text-sm font-medium text-green-600">{statusMessage}</p>
      )}

      {errorMessage && (
        <div
          role="alert"
          className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-600"
        >
          {errorMessage}
        </div>
      )}

      {/* Gönder */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="group inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-brand-dark px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-brand-primary hover:shadow-lg sm:w-auto"
      >
        {isSubmitting ? "Gönderiliyor..." : fields.submitButtonText}

        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </button>
    </form>
  );
}
