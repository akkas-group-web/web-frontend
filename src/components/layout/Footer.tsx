"use client";

import { useState } from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { NAV_LINKS, SITE_CONFIG, SOCIAL_LINKS } from "@/constants/site";

const SOCIAL_ICON = {
  facebook: FaFacebookF,
  instagram: FaInstagram,
  linkedin: FaLinkedinIn,
  twitter: FaTwitter,
  youtube: FaFacebookF, // youtube ikonu istersen react-icons/fa'dan FaYoutube import edip değiştir
};

export function Footer() {
  const [email, setEmail] = useState("");
  const [kvkkAccepted, setKvkkAccepted] = useState(false);
  const [bulletinAccepted, setBulletinAccepted] = useState(false);

  const canSubmit = email.trim().length > 3 && kvkkAccepted && bulletinAccepted;

  return (
    <footer className="bg-[#242629] text-white/70">
      {/* Haberdarolun / Bülten */}
      {/* <div className="border-b border-white/10">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-14 md:grid-cols-2 md:items-center md:px-12">
          <div>
            <h3 className="font-heading text-2xl font-semibold text-white">
              Haberdar Olun
            </h3>
            <p className="mt-2 max-w-md text-sm text-white/55">
              E-bülten üye listemize kaydolun, en güncel haberler mailinize
              gelsin.
            </p>
          </div>

          <div>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col gap-3 sm:flex-row"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="E-mail adresiniz"
                className="w-full rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm text-white placeholder:text-white/35 outline-none transition-colors focus:border-[#7fc7d4]"
              />
              <button
                type="submit"
                disabled={!canSubmit}
                className="group flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#7fc7d4] px-6 py-3 text-sm font-semibold text-[#0d4d5c] transition-all hover:bg-white disabled:cursor-not-allowed disabled:opacity-40"
              >
                Kaydol
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </form>

            <div className="mt-4 space-y-2.5">
              <label className="flex cursor-pointer items-start gap-2.5 text-xs text-white/45">
                <input
                  type="checkbox"
                  checked={kvkkAccepted}
                  onChange={(e) => setKvkkAccepted(e.target.checked)}
                  className="mt-0.5 h-3.5 w-3.5 shrink-0 accent-[#7fc7d4]"
                />
                <span>
                  <Link
                    href="/kvkk-aydinlatma-metni"
                    className="underline hover:text-white/70"
                  >
                    KVKK Aydınlatma Metni
                  </Link>
                  &apos;ni okudum ve kabul ediyorum
                </span>
              </label>
              <label className="flex cursor-pointer items-start gap-2.5 text-xs text-white/45">
                <input
                  type="checkbox"
                  checked={bulletinAccepted}
                  onChange={(e) => setBulletinAccepted(e.target.checked)}
                  className="mt-0.5 h-3.5 w-3.5 shrink-0 accent-[#7fc7d4]"
                />
                <span>
                  E-bülten gönderimi için kişisel verilerimin işlenmesini kabul
                  ediyorum.
                </span>
              </label>
            </div>
          </div>
        </div>
      </div> */}

      {/* Ana Footer İçeriği */}
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-4 md:px-12">
        <div>
          <p className="font-heading text-2xl font-semibold text-white">
            AKKAŞ GROUP
          </p>
          <p className="mt-3 max-w-xs text-sm text-white/45">
            {SITE_CONFIG.description}
          </p>
        </div>

        {/* Yazılar */}

        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-[#7fc7d4]">
            Yazılar
          </p>

          <div className="mt-4 flex flex-col gap-2 text-sm">
            <Link
              href="https://akkasgroup.com/cerezlere-iliskin-aydinlatma-metni"
              className="break-words text-white/45 transition-colors hover:text-white"
            >
              Çerezlere İlişkin Aydınlatma Metni
            </Link>

            <Link
              href="https://akkasgroup.com/kisisel-verilerik-koruma-kanunu"
              className="break-words text-white/45 transition-colors hover:text-white"
            >
              Kişisel Verileri Koruma Kanunu
            </Link>

            <Link
              href="https://akkasgroup.com/6111-sayili-tesvikten-nasil-fayda-saglanir"
              className="break-words text-white/45 transition-colors hover:text-white"
            >
              6111 Sayılı Teşvikten Nasıl Fayda Sağlanır?
            </Link>
          </div>
        </div>

        {/* <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-[#7fc7d4]">
            Kurumsal
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div> */}

        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-[#7fc7d4]">
            Bize Ulaşın
          </p>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-2.5">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-white/40" />
              <a
                href={`tel:${SITE_CONFIG.phone.replace(/\D/g, "")}`}
                className="hover:text-white"
              >
                {SITE_CONFIG.phone}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-white/40" />
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="hover:text-white"
              >
                {SITE_CONFIG.email}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-white/40" />
              <span className="max-w-[220px]">{SITE_CONFIG.address}</span>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-[#7fc7d4]">
            Haberdar Olun
          </p>

          <p className="mt-3 text-sm text-white/45">
            E-bültenimize kaydolun, güncel haberlerden haberdar olun.
          </p>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-4 flex flex-col gap-2"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="E-mail adresiniz"
              className="w-full rounded-full border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/35 outline-none transition-colors focus:border-[#7fc7d4]"
            />
          </form>

          <div className="mt-3 space-y-2">
            <label className="flex cursor-pointer items-start gap-2 text-[11px] leading-4 text-white/40">
              <input
                type="checkbox"
                checked={kvkkAccepted}
                onChange={(e) => setKvkkAccepted(e.target.checked)}
                className="mt-0.5 h-3.5 w-3.5 shrink-0 accent-[#7fc7d4]"
              />

              <span>
                <Link
                  href="/kvkk-aydinlatma-metni"
                  className="underline hover:text-white/70"
                >
                  KVKK Aydınlatma Metni
                </Link>{" "}
                &apos;ni okudum ve kabul ediyorum.
              </span>
            </label>

            <label className="flex cursor-pointer items-start gap-2 text-[11px] leading-4 text-white/40">
              <input
                type="checkbox"
                checked={bulletinAccepted}
                onChange={(e) => setBulletinAccepted(e.target.checked)}
                className="mt-0.5 h-3.5 w-3.5 shrink-0 accent-[#7fc7d4]"
              />

              <span>
                E-bülten gönderimi için kişisel verilerimin işlenmesini kabul
                ediyorum.
              </span>
            </label>
          </div>
          <div className="mt-3 space-y-2"></div>
          <button
            type="submit"
            disabled={!canSubmit}
            className="group flex items-center justify-center gap-3 rounded-full bg-[#7fc7d4] px-5 py-2.5 text-sm font-semibold text-[#0d4d5c] transition-all hover:bg-white disabled:cursor-not-allowed disabled:opacity-70"
          >
            Kaydol
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>

          <p className="mt-6 text-xs font-semibold uppercase tracking-wide text-[#7fc7d4]">
            Takip Edin
          </p>

          <div className="mt-3 flex gap-2">
            {SOCIAL_LINKS.map((social) => {
              const Icon = SOCIAL_ICON[social.icon];

              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/60 transition-all hover:border-[#7fc7d4] hover:bg-[#7fc7d4]/10 hover:text-[#7fc7d4]"
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>
        </div>

        {/* <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-[#7fc7d4]">
            Takip Edin
          </p>
          <div className="mt-4 flex gap-3">
            {SOCIAL_LINKS.map((social) => {
              const Icon = SOCIAL_ICON[social.icon];
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/60 transition-all hover:border-[#7fc7d4] hover:bg-[#7fc7d4]/10 hover:text-[#7fc7d4]"
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>
        </div> */}
      </div>

      <div className="border-t border-white/10 py-6 text-center text-xs text-white/30">
        © {new Date().getFullYear()} Akkaş Group — Tüm hakları saklıdır.
      </div>
    </footer>
  );
}
