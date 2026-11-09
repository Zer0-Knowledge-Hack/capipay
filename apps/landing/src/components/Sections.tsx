import { useState, type FormEvent } from "react";
import { useI18n } from "../i18n";
import { Lockup } from "./Header";
import {
  Horizon,
  LakePattern,
  LineToSun,
  MarkShape,
  Ripples,
  StatusIcon,
  SunReflection,
  WaterLine,
  type PaymentStatus,
} from "./Ornaments";

export function Hero() {
  const { t } = useI18n();
  const h = t.hero;
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="container hero__inner">
        <div className="hero__copy">
          <p className="eyebrow">{h.eyebrow}</p>
          <h1 id="hero-title" className="display">
            {h.title}
          </h1>
          <p className="lead">{h.sub}</p>
          <div className="actions">
            <a className="btn btn--primary" href="#waitlist">
              {h.primary}
            </a>
            <a className="btn btn--outline" href="#developers">
              {h.secondary}
            </a>
          </div>
          <p className="badge">{h.badge}</p>
        </div>
        <div className="hero__cards" role="img" aria-label={`${h.previewLabel}: ${h.merchant}, 25.00 USDC. ${h.paid} +24.75 USDC.`}>
          <div className="checkout-card" aria-hidden="true">
            <p className="checkout-card__merchant">{h.merchant}</p>
            <p className="checkout-card__amount">25.00 USDC</p>
            <p className="checkout-card__timer-label">{h.timer}</p>
            <div className="timer-bar">
              <span style={{ width: "70%" }} />
            </div>
            <span className="btn btn--primary btn--block">{h.pay}</span>
          </div>
          <div className="paid-card" aria-hidden="true">
            <MarkShape color="var(--dark-success)" width={56} />
            <div>
              <p className="paid-card__status">{h.paid}</p>
              <p className="paid-card__amount">+24.75 USDC</p>
              <p className="paid-card__sub">{h.paidSub}</p>
            </div>
          </div>
        </div>
      </div>
      <Horizon />
    </section>
  );
}

const FEATURE_ICONS = [<MarkShape key="mark" color="var(--capi-monte)" width={88} />, <Ripples key="ripples" />, <LineToSun key="line" />];

export function Why() {
  const { t } = useI18n();
  return (
    <section className="section" aria-labelledby="why-title">
      <div className="container">
        <p className="eyebrow">{t.why.eyebrow}</p>
        <h2 id="why-title" className="h2">
          {t.why.title}
        </h2>
        <ul className="grid-3 features">
          {t.why.features.map((f, i) => (
            <li key={f.title}>
              <div className="features__icon">{FEATURE_ICONS[i]}</div>
              <h3 className="h3">{f.title}</h3>
              <p className="muted">{f.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function HowItWorks() {
  const { t } = useI18n();
  return (
    <section id="how" className="section section--monte" aria-labelledby="how-title">
      <LakePattern />
      <div className="container">
        <p className="eyebrow eyebrow--on-dark">{t.how.eyebrow}</p>
        <h2 id="how-title" className="h2">
          {t.how.title}
        </h2>
        <ol className="grid-3 steps">
          {t.how.steps.map((s, i) => (
            <li key={s.title} className="card">
              <span className="steps__number" aria-hidden="true">
                {i + 1}
              </span>
              <h3 className="h3">{s.title}</h3>
              <p className="muted">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

const ROWS: { amount: string; status: PaymentStatus }[] = [
  { amount: "25.00", status: "paid" },
  { amount: "60.00", status: "waiting" },
  { amount: "18.00", status: "partial" },
  { amount: "40.00", status: "expired" },
];

export function PaymentStates() {
  const { t } = useI18n();
  const s = t.states;
  return (
    <section className="section" aria-labelledby="states-title">
      <div className="container split">
        <div>
          <p className="eyebrow">{s.eyebrow}</p>
          <h2 id="states-title" className="h2">
            {s.title}
          </h2>
          <p className="muted">{s.text}</p>
        </div>
        <div className="card card--raised">
          <table className="states-table">
            <caption className="visually-hidden">{s.caption}</caption>
            <thead className="visually-hidden">
              <tr>
                <th scope="col">{s.columns.item}</th>
                <th scope="col">{s.columns.amount}</th>
                <th scope="col">{s.columns.status}</th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row, i) => (
                <tr key={row.status}>
                  <th scope="row">{s.items[i]}</th>
                  <td className="data">{row.amount} USDC</td>
                  <td>
                    <span className={`pill pill--${row.status}`}>
                      <StatusIcon status={row.status} />
                      {s.status[row.status]}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export function Developers() {
  const { t } = useI18n();
  const d = t.developers;
  return (
    <section id="developers" className="section section--dark" aria-labelledby="dev-title">
      <div className="container split">
        <div>
          <p className="eyebrow">{d.eyebrow}</p>
          <h2 id="dev-title" className="h2">
            {d.title}
          </h2>
          <p className="muted">{d.text}</p>
          <div className="actions">
            <a className="btn btn--light" href="#">
              {d.cta}
            </a>
          </div>
        </div>
        <figure className="code">
          <figcaption className="code__label">{d.codeLabel}</figcaption>
          <pre>
            <code>
              <span className="code__verb">POST</span> /v1/checkout_sessions{"\n"}
              {"{\n"}
              {'  "amount": '}
              <span className="code__value">"25.00"</span>
              {",\n"}
              {'  "currency": '}
              <span className="code__value">"USDC"</span>
              {",\n"}
              {'  "expires_in": '}
              <span className="code__value">600</span>
              {"\n}\n\n"}
              <span className="code__comment">// Webhook</span>
              {'\n"type": '}
              <span className="code__ok">"checkout_session.paid"</span>
            </code>
          </pre>
        </figure>
      </div>
    </section>
  );
}

export function Pricing() {
  const { t } = useI18n();
  const p = t.pricing;
  return (
    <section id="pricing" className="section" aria-labelledby="pricing-title">
      <div className="container">
        <p className="eyebrow">{p.eyebrow}</p>
        <h2 id="pricing-title" className="h2">
          {p.title}
        </h2>
        <p className="muted">{p.sub}</p>
        <ul className="grid-3 tiers">
          {p.tiers.map((tier, i) => {
            const last = i === p.tiers.length - 1;
            return (
              <li key={tier.fee} className={`card ${last ? "card--monte" : "card--raised"}`}>
                <p className="tiers__fee">{tier.fee}</p>
                <p className="tiers__range">{tier.range}</p>
                <WaterLine color={last ? "var(--capi-mandarina)" : "var(--capi-monte)"} />
              </li>
            );
          })}
        </ul>
        <p className="note">{p.note}</p>
      </div>
    </section>
  );
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function Waitlist() {
  const { t } = useI18n();
  const w = t.waitlist;
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "invalid" | "done">("idle");

  // Non-functional MVP: validate locally and confirm. No network, no storage.
  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState(EMAIL_PATTERN.test(email.trim()) ? "done" : "invalid");
  }

  return (
    <section id="waitlist" className="section section--monte waitlist" aria-labelledby="waitlist-title">
      <div className="container waitlist__inner">
        <div>
          <h2 id="waitlist-title" className="h2">
            {w.title}
          </h2>
          <p>{w.sub}</p>
          <div aria-live="polite">
            {state === "done" ? (
              <p className="waitlist__success" role="status">
                {w.success}
              </p>
            ) : (
              <form className="waitlist__form" onSubmit={onSubmit} noValidate>
                <label htmlFor="waitlist-email">{w.label}</label>
                <div className="waitlist__row">
                  <input
                    id="waitlist-email"
                    type="email"
                    name="email"
                    autoComplete="email"
                    placeholder={w.placeholder}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    aria-invalid={state === "invalid"}
                    aria-describedby={state === "invalid" ? "waitlist-error" : undefined}
                  />
                  <button className="btn btn--primary" type="submit">
                    {w.submit}
                  </button>
                </div>
                {state === "invalid" && (
                  <p id="waitlist-error" className="waitlist__error">
                    {w.invalid}
                  </p>
                )}
              </form>
            )}
          </div>
        </div>
        <SunReflection />
      </div>
    </section>
  );
}

export function Footer() {
  const { t } = useI18n();
  const f = t.footer;
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <div>
          <Lockup tone="cream" />
          <p className="site-footer__tagline">{f.tagline}</p>
          <p className="site-footer__copy">{f.copyright}</p>
        </div>
        <div className="site-footer__columns">
          {f.columns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h2>{col.title}</h2>
              <ul>
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#">{link}</a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
      </div>
    </footer>
  );
}
