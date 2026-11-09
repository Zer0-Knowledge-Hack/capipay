import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";
import { en, type Dict } from "./en";
import { es } from "./es";
import { ptBR } from "./pt-BR";

export const LANGS = ["en", "es", "pt-BR"] as const;
export type Lang = (typeof LANGS)[number];

const DICTS: Record<Lang, Dict> = { en, es, "pt-BR": ptBR };
const STORAGE_KEY = "capipay.lang";

function isLang(value: string | null): value is Lang {
  return value !== null && (LANGS as readonly string[]).includes(value);
}

function fromBrowser(): Lang {
  const prefs = navigator.languages?.length ? navigator.languages : [navigator.language];
  for (const pref of prefs) {
    const code = pref.toLowerCase();
    if (code.startsWith("es")) return "es";
    if (code.startsWith("pt")) return "pt-BR";
    if (code.startsWith("en")) return "en";
  }
  return "en";
}

// Order: ?lang= query param, saved choice, browser preference, English.
function initialLang(): Lang {
  const fromQuery = new URLSearchParams(window.location.search).get("lang");
  if (isLang(fromQuery)) return fromQuery;
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (isLang(saved)) return saved;
  } catch {
    // Storage can be blocked; fall through to the browser preference.
  }
  return fromBrowser();
}

type I18n = { lang: Lang; t: Dict; setLang: (lang: Lang) => void };

const I18nContext = createContext<I18n | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(initialLang);
  const t = DICTS[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = t.meta.title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", t.meta.description);
  }, [lang, t]);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Ignore: the choice still applies for this visit.
    }
    const url = new URL(window.location.href);
    url.searchParams.set("lang", next);
    window.history.replaceState(null, "", url);
  }, []);

  return <I18nContext.Provider value={{ lang, t, setLang }}>{children}</I18nContext.Provider>;
}

export function useI18n(): I18n {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used inside I18nProvider");
  return ctx;
}
