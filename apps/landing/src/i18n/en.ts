// Master copy. es.ts and pt-BR.ts must match this shape (enforced by the Dict type).
export const en = {
  meta: {
    title: "CapiPay · USDC payments verified on Stellar",
    description:
      "Payment links and an API in USDC on Stellar for Latin American merchants. Verified on-chain, straight to your wallet.",
  },
  header: {
    skip: "Skip to content",
    nav: { how: "How it works", pricing: "Pricing", developers: "Developers" },
    navLabel: "Main",
    languageLabel: "Language",
    cta: "Get early access",
  },
  hero: {
    eyebrow: "USDC payment links and API · Stellar",
    badge: "Testnet · coming soon",
    title: "Get paid in USDC. Your business keeps going.",
    sub: "Share a link on WhatsApp or Instagram. The payment is verified on the network, not in a screenshot, and the net amount reaches your wallet in seconds.",
    primary: "Get early access",
    secondary: "See the API",
    previewLabel: "Checkout preview",
    merchant: "Lu's Shop · Soy candles",
    timer: "Time left to pay",
    pay: "Pay with wallet",
    paid: "Paid",
    paidSub: "Already in your wallet",
  },
  why: {
    eyebrow: "No more fake receipts",
    title: "A screenshot isn't proof. The payment status is.",
    features: [
      {
        title: "Verified on-chain",
        text: "CapiPay detects the payment on Stellar and matches it to the session's memo. Nobody can show you a payment that doesn't exist.",
      },
      {
        title: "Your business keeps going",
        text: "When the payment is confirmed, you get a webhook and a notification. Your process continues without you checking anything.",
      },
      {
        title: "Straight to your wallet",
        text: "The net amount is forwarded automatically to your payout wallet. We don't hold your money.",
      },
    ],
  },
  how: {
    eyebrow: "How it works",
    title: "From link to wallet, in three steps.",
    steps: [
      {
        title: "Create your link",
        text: "Set the amount in USDC and connect your payout wallet. You start in minutes, with no paperwork.",
      },
      {
        title: "Share it",
        text: "Send it on WhatsApp, Instagram or your website. Each time someone opens it, a session with its own memo is created.",
      },
      {
        title: "Get paid and keep going",
        text: "The payment is verified on Stellar, we notify you, and the net amount reaches your wallet. You get on with your day.",
      },
    ],
  },
  states: {
    eyebrow: "Every payment, with its status",
    title: "Know what happened without reading the blockchain",
    text: "Partial, extra or late payments follow clear rules. If money is missing, the buyer tops up with the same memo before the session expires.",
    caption: "Example payments",
    columns: { item: "Item", amount: "Amount", status: "Status" },
    items: ["Soy candles", "3-scent pack", "Bamboo diffuser", "Gift card"],
    status: { paid: "Paid", waiting: "Waiting", partial: "Partial", expired: "Expired" },
  },
  developers: {
    eyebrow: "For developers",
    title: "One API. The same engine the links use.",
    text: "Create checkout sessions from your SaaS and get signed webhooks when the payment is confirmed. Links, dashboard and widgets all run on this same public API.",
    codeLabel: "Illustrative example",
    cta: "Read the docs",
  },
  pricing: {
    eyebrow: "Pricing",
    title: "1% per successful payment. No fixed fee.",
    sub: "No setup fee, no monthly fee, no surcharge for instant payouts. The fee drops as you sell more.",
    tiers: [
      { fee: "1%", range: "Up to 10,000 USDC/month" },
      { fee: "0.8%", range: "10,000–50,000 USDC/month" },
      { fee: "0.6%", range: "Over 50,000 USDC/month" },
    ],
    note: "Tiers are monthly and automatic.",
  },
  waitlist: {
    title: "Your first link, in minutes.",
    sub: "Join the waitlist for the testnet.",
    label: "Email",
    placeholder: "you@yourbusiness.com",
    submit: "Get early access",
    invalid: "Enter a valid email, like you@yourbusiness.com.",
    success: "You're on the list. We'll write when the testnet opens.",
  },
  footer: {
    tagline: "USDC payments verified on Stellar · Made in Latin America",
    columns: [
      { title: "Product", links: ["Payment links", "Checkout", "API"] },
      { title: "Company", links: ["Pricing", "Security", "Contact"] },
      { title: "Legal", links: ["Terms", "Privacy"] },
    ],
    copyright: "© 2026 CapiPay",
  },
};

export type Dict = typeof en;
