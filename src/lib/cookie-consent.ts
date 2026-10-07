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
  decided?: boolean; // false: ziyaretçi henüz karar vermedi
  choices: ConsentChoices;
}
const KEY = "akkas_cookie_consent";
const VERSION = 2;

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
  window.addEventListener("focus", cb);

  return () => {
    window.removeEventListener(CHANGE_EVENT, cb);
    window.removeEventListener("focus", cb);
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
function writeConsent(data: StoredConsent) {
  try {
    const encoded = encodeURIComponent(JSON.stringify(data));
    // Secure yalnızca HTTPS'te (Safari'de http://localhost'ta Secure çerez yazılmaz)
    const secure = location.protocol === "https:" ? "Secure" : "";

    document.cookie = [
      `${KEY}=${encoded}`,
      "Path=/",
      "Max-Age=31536000",
      "SameSite=Lax",
      secure,
    ]
      .filter(Boolean)
      .join("; ");
  } catch {
    // Cookie yazılamazsa sessizce devam et
  }
}

export function saveConsent(choices: ConsentChoices) {
  writeConsent({
    version: VERSION,
    timestamp: new Date().toISOString(),
    decided: true,
    choices: { ...choices, necessary: true },
  });

  window.dispatchEvent(new Event(CHANGE_EVENT));
}

// İlk ziyarette "henüz karar verilmedi" kaydını yazar (zorunlu kayıt)
export function ensureConsentRecord() {
  try {
    const raw = getRaw();
    if (raw) {
      const parsed = JSON.parse(raw) as StoredConsent;
      if (parsed.version === VERSION) return; // güncel kayıt var
    }
  } catch {
    // Kayıt bozuksa aşağıda yeniden yazılır
  }

  writeConsent({
    version: VERSION,
    timestamp: new Date().toISOString(),
    decided: false,
    choices: DEFAULT_CHOICES,
  });

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

      if (parsed.version !== VERSION || parsed.decided === false) {
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
