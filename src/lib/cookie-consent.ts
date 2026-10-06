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
const VERSION = 1; // Kategoriler değişirse artır, kullanıcıya tekrar sorulur
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
  window.addEventListener("storage", cb);
  return () => {
    window.removeEventListener(CHANGE_EVENT, cb);
    window.removeEventListener("storage", cb);
  };
}

function getRaw(): string | null {
  try {
    return localStorage.getItem(KEY);
  } catch {
    return null;
  }
}

export function saveConsent(choices: ConsentChoices) {
  const data: StoredConsent = {
    version: VERSION,
    timestamp: new Date().toISOString(),
    choices: { ...choices, necessary: true },
  };
  try {
    localStorage.setItem(KEY, JSON.stringify(data));
  } catch {
    /* localStorage kapalıysa sessizce geç */
  }
  window.dispatchEvent(new Event(CHANGE_EVENT));
}

export function openCookieSettings() {
  window.dispatchEvent(new Event(OPEN_EVENT));
}

export const COOKIE_OPEN_EVENT = OPEN_EVENT;

export function useCookieConsent() {
  // Sunucuda undefined döner: hydration bitene kadar banner göstermemek için
  const raw = useSyncExternalStore<string | null | undefined>(
    subscribe,
    getRaw,
    () => undefined,
  );

  return useMemo(() => {
    if (raw === undefined) return { ready: false, consent: null };
    if (!raw) return { ready: true, consent: null };
    try {
      const parsed = JSON.parse(raw) as StoredConsent;
      if (parsed.version !== VERSION) return { ready: true, consent: null };
      return { ready: true, consent: parsed };
    } catch {
      return { ready: true, consent: null };
    }
  }, [raw]);
}
