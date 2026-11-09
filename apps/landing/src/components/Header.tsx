import { LANGS, useI18n, type Lang } from "../i18n";

const LANG_SHORT: Record<Lang, string> = { en: "EN", es: "ES", "pt-BR": "PT" };
const LANG_NAME: Record<Lang, string> = { en: "English", es: "Español", "pt-BR": "Português (Brasil)" };

/** Mark + "CapiPay" in Rubik 700, gap 0.3x the mark's height. */
export function Lockup({ tone = "ink", height = 30 }: { tone?: "ink" | "cream"; height?: number }) {
  const src = tone === "cream" ? "/capipay-mark-crema.svg" : "/capipay-mark.svg";
  return (
    <span className={`lockup lockup--${tone}`} style={{ gap: height * 0.3, fontSize: height * 0.8 }}>
      <img src={src} alt="CapiPay" height={height} width={(height * 96) / 44} />
      <span aria-hidden="true">CapiPay</span>
    </span>
  );
}

export function Header() {
  const { t, lang, setLang } = useI18n();
  return (
    <header className="site-header">
      <a className="skip-link" href="#main">
        {t.header.skip}
      </a>
      <div className="container site-header__inner">
        <a href="#top" className="site-header__home">
          <Lockup />
        </a>
        <nav className="site-nav" aria-label={t.header.navLabel}>
          <a href="#how">{t.header.nav.how}</a>
          <a href="#pricing">{t.header.nav.pricing}</a>
          <a href="#developers">{t.header.nav.developers}</a>
        </nav>
        <div className="lang-switch" role="group" aria-label={t.header.languageLabel}>
          {LANGS.map((code) => (
            <button
              key={code}
              type="button"
              lang={code}
              aria-label={LANG_NAME[code]}
              aria-pressed={code === lang}
              onClick={() => setLang(code)}
            >
              {LANG_SHORT[code]}
            </button>
          ))}
        </div>
        <a className="btn btn--primary site-header__cta" href="#waitlist">
          {t.header.cta}
        </a>
      </div>
    </header>
  );
}
