import { useMemo, useSyncExternalStore } from "react";

export type ConsentCategory =
  | "necessary"
  | "functional"
  | "analytics"
  | "marketing";

export type ConsentChoices = Record<ConsentCategory, boolean>;

export interface StoredConsent {
  version: number;
  timestamp: string;
  choices: ConsentChoices;
}

const KEY = "akkas_cookie_consent";
const VERSION = 1;

const CHANGE_EVENT = "cookie-consent-change";
const OPEN_EVENT = "cookie-consent-open";

export const DEFAULT_CHOICES: ConsentChoices = {
  necessary: true,
  functional: false,
  analytics: false,
  marketing: false,
};

function subscribe(cb: () => void) {
  window.addEventListener(CHANGE_EVENT, cb);

  return () => {
    window.removeEventListener(CHANGE_EVENT, cb);
  };
}

/**
 * Browser cookie'den consent bilgisini okur.
 */
function getRaw(): string | null {
  try {
    const cookies = document.cookie.split("; ");

    const cookie = cookies.find((row) => row.startsWith(`${KEY}=`));

    if (!cookie) return null;

    return decodeURIComponent(cookie.substring(KEY.length + 1));
  } catch {
    return null;
  }
}

/**
 * Consent bilgisini gerçek browser cookie olarak kaydeder.
 *
 * SameSite=Lax:
 * - Normal site kullanımı için uygun
 *
 * Path=/:
 * - Sitenin tamamından erişilebilir
 *
 * Max-Age:
 * - 1 yıl boyunca saklanır
 *
 * Secure:
 * - HTTPS üzerinde gönderilir
 */
export function saveConsent(choices: ConsentChoices) {
  const data: StoredConsent = {
    version: VERSION,
    timestamp: new Date().toISOString(),
    choices: {
      ...choices,
      necessary: true,
    },
  };

  try {
    const encoded = encodeURIComponent(JSON.stringify(data));

    document.cookie = [
      `${KEY}=${encoded}`,
      "Path=/",
      "Max-Age=31536000",
      "SameSite=Lax",
      "Secure",
    ].join("; ");
  } catch {
    // Cookie yazılamazsa sessizce devam et
  }

  window.dispatchEvent(new Event(CHANGE_EVENT));
}

export function openCookieSettings() {
  window.dispatchEvent(new Event(OPEN_EVENT));
}

export const COOKIE_OPEN_EVENT = OPEN_EVENT;

export function useCookieConsent() {
  const raw = useSyncExternalStore<string | null | undefined>(
    subscribe,
    getRaw,
    () => undefined,
  );

  return useMemo(() => {
    // SSR / hydration tamamlanmadı
    if (raw === undefined) {
      return {
        ready: false,
        consent: null,
      };
    }

    // Cookie bulunamadı
    if (!raw) {
      return {
        ready: true,
        consent: null,
      };
    }

    try {
      const parsed = JSON.parse(raw) as StoredConsent;

      if (parsed.version !== VERSION) {
        return {
          ready: true,
          consent: null,
        };
      }

      return {
        ready: true,
        consent: parsed,
      };
    } catch {
      return {
        ready: true,
        consent: null,
      };
    }
  }, [raw]);
}
