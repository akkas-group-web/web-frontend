"use client";

import Script from "next/script";
import { useEffect } from "react";

import { useCookieConsent } from "@/lib/cookie-consent";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

// _ga ve _ga_* çerezleri bizim alan adımıza ait, bu yüzden silebiliriz
function clearGaCookies() {
  const names = document.cookie
    .split(";")
    .map((c) => c.split("=")[0].trim())
    .filter((n) => n === "_ga" || n.startsWith("_ga_"));

  const host = location.hostname;
  const root = host.split(".").slice(-2).join(".");
  const domains = [undefined, host, `.${host}`, `.${root}`];

  names.forEach((name) =>
    domains.forEach((domain) => {
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/${
        domain ? `; domain=${domain}` : ""
      }`;
    }),
  );
}

export function GoogleAnalytics() {
  const { ready, consent } = useCookieConsent();
  const allowed = Boolean(GA_ID) && consent?.choices.analytics === true;

  useEffect(() => {
    if (!GA_ID || !ready) return;
    // true olunca Google'ın kendi kapatma anahtarı devreye girer
    (window as unknown as Record<string, unknown>)[`ga-disable-${GA_ID}`] =
      !allowed;
    if (!allowed) clearGaCookies();
  }, [allowed, ready]);

  if (!ready || !allowed) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}
      </Script>
    </>
  );
}
