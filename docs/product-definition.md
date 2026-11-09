# CapiPay — Product Definition

CapiPay is a crypto payment gateway on Stellar, USDC only and API-first. LATAM merchants can accept payments and **automate their business flows when a payment happens**, with no forged receipts, no manual bank checks and no paperwork to get started. The verified status of a payment is the source of truth, not a screenshot.

> Status: product definition, pre-implementation. Last updated: 2026-11-09.
> Decisions marked **Decided** were confirmed by the founder. Items marked **Proposed** are recommendations still awaiting explicit approval.

## Quick path (happy path)

1. The merchant signs up, configures a payout wallet (or creates one with Pollar) and creates a **Payment Link**.
2. The merchant shares the link on WhatsApp, Instagram or a website, or creates a **Checkout Session** through the API.
3. The buyer opens the link. A **Checkout Session** is created with a unique memo and an expiry timer.
4. The buyer pays in USDC on Stellar. CapiPay detects and reconciles the payment, then marks it `paid`.
5. CapiPay forwards the net amount (amount minus fee) to the merchant's payout wallet **automatically**.
6. The merchant receives a webhook, a push notification and a timeline event, and their process continues automatically.

---

## 1. Problem

- Anyone in LATAM can receive a stablecoin or bank QR payment. **What they cannot do is automate what happens after it.**
- Social sellers today share a bank QR. The buyer sends a receipt that may be forged or show the wrong amount, and the seller has to check their banking app manually.
- SaaS products and digital services cannot continue onboarding or fulfillment automatically when a Stellar payment lands in their wallet.
- Existing automation paths are heavy. For example, Binance Pay is free between users, but automating flows requires Binance Pay for Merchants and a business account. (Founder's observation; not independently verified.)

**Positioning:** *A crypto payment gateway with no bureaucracy and an API ready to use. CapiPay is a gateway, not a wallet.*

## 2. Target customers

| Segment | Channel | In MVP |
|---|---|---|
| Instagram / WhatsApp sellers | Payment Link | Yes (beachhead) |
| Freelancers, digital services (art, design, florists, etc.) | Payment Link | Yes |
| SaaS / apps | API + webhooks | Yes |
| Campaigns / causes | Donation widget | Yes (same engine) |
| In-person merchants (cafés, POS) | QR at the counter, PWA as POS | No (later) |
| Marketplaces / platforms paying on behalf of others | Split payments ("Connect") | No (only if a real customer appears) |

## 3. Core decisions

| Area | Decision | Status |
|---|---|---|
| Network / asset | Stellar, **USDC (Circle) only**. Prices are set and settled in USDC | Decided |
| Product shape | API-first. Payment Links, dashboard and widgets are clients of the same public API | Decided |
| Custody | Pass-through. **Successful payments are forwarded automatically** to the merchant's payout wallet. CapiPay holds funds only while an exception is unresolved | Decided |
| Payment model | **Persistent Payment Link** plus a **Checkout Session** created when the buyer opens it | Decided |
| Session expiry | Default 10 min, merchant-configurable, **min 5 min, max 24 h** | Decided |
| Payout wallet | Required before the first link is activated. Connect an existing wallet, use an external address + memo, or create one with Pollar | Decided |
| KYC | **Progressive**: start in minutes with low limits, verify identity to raise them | Decided |
| Client app | **PWA** for this sprint, native app later | Decided |
| Fiscal invoicing | Out of scope. CSV export so merchants can invoice | Decided |
| Local fiat pay-in | Kalea integration in week 4 | Decided |

## 4. Payment flow

```
Merchant creates PAYMENT LINK (persistent)  →  shares on WhatsApp / IG / web
        ↓ buyer opens
CHECKOUT SESSION (unique memo, expires 5 min – 24 h, default 10 min)
        ↓ buyer pays USDC
pending → paid | partially_paid | expired
        ↓ paid
Net amount auto-forwarded to merchant payout wallet  +  webhook  +  push  +  timeline event
```

### Session states

```
created → pending → paid ──────────→ refunded | partially_refunded
             │        ↑
             ├→ partially_paid (topped up)
             └→ expired (→ late_payment → paid or refund)
```

Every transition produces a **timestamped event** and a **signed webhook**. The event timeline is CapiPay's traceability layer.

## 5. Exception rules

| Case | Rule | Status |
|---|---|---|
| Underpaid | `partially_paid`, not forwarded. The buyer may top up with the same memo before expiry. The merchant can set an optional tolerance (e.g. accept a shortfall of ≤1%). On expiry, the funds go to a buyer refund claim | Proposed |
| Overpaid | The session amount is forwarded. The excess is held and refundable to the buyer. An excess under 0.10 USDC goes to the merchant, as stated in the terms | Proposed |
| Duplicate payment | Treated as an overpayment, fully refundable | Proposed |
| Late payment (after expiry) | A `late_payment` event. **Accepted by default**, since USDC carries no FX risk. The merchant may reject it, which turns it into a refund | Proposed |
| Unknown or missing memo | Recorded in the ledger as **unallocated funds**. Claimable by transaction hash | Proposed |
| Dust (< 0.10 USDC) | Recorded as unallocated. No notification, no refund | Proposed |
| Wrong asset | A fake "USDC" cannot arrive, because the account only trusts Circle's issuer. An XLM payment goes to unallocated funds and is claimable | Proposed |
| Merchant refund | Funded from the **merchant's wallet**, since CapiPay holds no balance. The original fee is not returned | Proposed |
| Refund destination | **Never sent automatically to the source address**, because exchanges use shared accounts plus a memo. The buyer gets a claim link and enters their address and memo | Proposed |
| Payout safety | Only to verified addresses. Ownership is proven by signing a challenge, or the address's USDC trustline is checked. Address changes need 2FA and a cooldown | Proposed |
| Disputes | No on-chain chargebacks. **CapiPay does not arbitrate in the MVP.** Optional escrow (Trustless Work) later | Proposed |
| Claim deadline | Still open. Reference: CoinGate applies admin fees after about 90–100 days | Pending |

## 6. Pricing

| Item | Rule | Status |
|---|---|---|
| USDC direct payments | **1% per successful payment, no fixed fee** | Decided |
| Volume tiers (monthly, automatic, published) | Up to 10,000 USDC: 1% · 10,000–50,000: 0.8% · over 50,000: 0.6% | Decided (thresholds unvalidated) |
| Kalea (local fiat) payments | Percentage plus a fixed fee, calibrated on Kalea's real costs. May have its own minimum ticket | Decided (amounts pending) |
| Minimum link amount | 0.10 USDC (anti-dust) | Decided |
| Network fees | Absorbed by CapiPay (they are negligible on Stellar) | Decided |
| Settlement / payouts | Instant and free. No surcharge for faster settlement | Decided |
| Refunds | No issuing fee, but the original fee is not returned | Decided |
| Pass fee to customer | Optional per link (useful for donations) | Decided |
| Donations | Proposed reduced rate (0.5%) | Proposed |
| Split payments (`application_fee`) | **Removed from MVP** | Decided |

**Why there is no fixed fee:** a fixed fee only makes sense when each operation has a real fixed cost (Stripe pays card networks per transaction). On Stellar a USDC transfer costs about 0.00001 XLM, so a fixed fee would only punish micropayments.

### Benchmarks (2026-11)

| Provider | Fee |
|---|---|
| Stripe stablecoins | 1.5%, gas included (no Stellar support) |
| PayPal crypto checkout | 1.5% |
| NOWPayments | 0.5% single currency / 1% with conversion |
| CoinGate | 1% |
| BitPay | 2% / 1.5% / 1% by monthly volume, plus $0.25 |
| Mercado Pago payment link (MX) | 3.49% + MXN 4 + IVA (cheaper with delayed settlement) |
| Yape (PE) / QR Simple (BO) | Free for small sellers |

> In local markets CapiPay competes against **free**. What it sells is a **verified payment in dollars that triggers automation**, not a lower price.

## 7. Competitive landscape (Stellar)

| Product | What it is | Relation to CapiPay |
|---|---|---|
| **Paywit** | SCF #41, $70K awarded, pre-launch. Non-custodial, memo detection, SEP-7, webhooks, SDKs | **Closest competitor.** Developer-focused, no LATAM social-seller focus |
| **StellarTools** (payrouteshq) | Stripe-like billing on Stellar. Africa focus, test mode | Subscription / SaaS billing |
| Kript | SCF #27, $35K. Checkout links plus off-ramp | Secondary competitor |
| Coinflow | Enterprise card and bank pay-in infrastructure | Not a competitor |
| paykit-sdk | TypeScript multi-provider toolkit | Not a competitor |

**Differentiation:** pass-through gateway with automatic forwarding, no-code links for social sellers, multi-store observability in a PWA, a donations engine, and local fiat pay-in through Kalea.

## 8. Observability (the core of the merchant experience)

- **Account → stores (N) → products / prices → payment links → sessions → payments → events.**
- Dashboard filters: store, product, amount, date, status.
- Per-payment timeline of every state transition.
- CSV export (supports fiscal invoicing done outside CapiPay).
- Push notifications (PWA) and signed webhooks.

## 9. Reusable ecosystem pieces

| Need | Option | Note |
|---|---|---|
| Wallet creation | Pollar (embedded wallets, passkeys, sponsored reserves and USDC trustline) | Pricing and who pays sponsorship are unknown |
| Wallet connection | Stellar Wallets Kit (Freighter, LOBSTR, xBull…) | SEP-7 support per wallet needs hands-on testing |
| Payment detection | Stellar RPC / Horizon behind an adapter | Horizon will eventually be deprecated |
| Escrow (later) | Trustless Work (0.3% protocol fee) | Not in MVP |
| Local fiat pay-in | Kalea | Testnet, simulated lifecycle |

**Network facts:** about 0.00001 XLM per operation. An account needs 1 XLM of reserve and each trustline adds 0.5 XLM. USDC issuer (mainnet): `GA5ZSEJYB37JRC5AVCIA5MOP4RHTM335X2KGX3IHOJAPP5RE34K4KZVN`. USDT is not natively issued on Stellar (only LayerZero USDT0), so it is out of scope.

## 10. Architecture and infrastructure

Everything runs on Cloudflare. The backend is a modular monolith (hexagonal + screaming architecture), and platform-specific pieces stay behind ports so they can be replaced.

| Area | Decision | Status |
|---|---|---|
| Deploy target | Cloudflare for frontend, API and background work | Decided |
| Frontend (PWA) | React + Vite, built and served with the official Cloudflare Vite plugin (runs `workerd` locally) | Decided |
| Backend | TypeScript on Cloudflare Workers, modular monolith | Decided |
| HTTP framework | Hono (Fastify does not fit Workers) | Proposed |
| Database | **PostgreSQL on Neon (Launch plan)**, accessed through Hyperdrive | Decided |
| Payment watcher | **One global Durable Object** (or a few shards) with alarms, polling Stellar RPC / Horizon by cursor every ~5 s. The cursor lives in the DO's SQLite so Neon can scale to zero | Decided |
| Webhook delivery | Cloudflare Queues with retries | Decided |
| Session expiry | Durable Object alarms or Cron Triggers | Decided |
| Tooling | Bun as local package manager only. Workers run on `workerd`, not Bun | Decided |
| Signing key | Workers secrets on testnet. Mainnet needs stronger key management | Decided (testnet) |

**Why Postgres and not D1:** D1 runs in auto-commit mode and only `batch()` is transactional, which is a weak fit for a double-entry ledger.

**Why one watcher and not one per merchant:** a single DO polling every 5 s fits inside the included duration. One DO per merchant would cost about $3.9k/month at 50k merchants.

### Estimated monthly infra cost (official pricing, 2026-11)

| Scenario | Cloudflare | Neon |
|---|---|---|
| 1k payments / month | ~$5 (Workers Paid) | $0–3 |
| 100k payments / month | ~$5–6 | ~$40 (Launch) |
| 2M payments / month | ~$27–37 | ~$172 (Launch) / ~$342 (Scale) |

Database compute is the main infra cost. Infra is still small next to revenue: 2M payments is roughly $40M in volume, or about $280k/month at ~0.7%. The real cost drivers are the Stellar RPC provider, KYC and compliance, and they are not in this model.

### Lock-in

| Piece | Lock-in | Mitigation |
|---|---|---|
| Hono, static assets, Hyperdrive, R2, Neon (plain Postgres) | Low | — |
| Queues | Medium | Behind a port. Handlers must be idempotent (max delay 24 h, 100 retries, 14-day retention) |
| Durable Object watcher | Medium-high | Behind a port, same as the Horizon / RPC adapter |

## 11. Sprint plan (30 days, testnet)

| Week | Focus | Outcome |
|---|---|---|
| 1 | Core: accounts, stores, Payment Links, Checkout Sessions, memo matching, payment watcher, state machine | A session moves to `paid` / `partially_paid` / `expired` automatically |
| 2 | Money: double-entry ledger, fees, auto-forwarding payouts, payout wallets (incl. Pollar), signed webhooks, exception handling | The merchant receives the net amount in their wallet automatically |
| 3 | Observability: PWA dashboard, filters, timelines, CSV export, push notifications, KYC limits engine (provider mocked) | The merchant knows everything without checking the blockchain |
| 4 | Kalea: local fiat pay-in reconciled by CapiPay | A buyer without USDC pays a seller |

## 12. Known risks

| Risk | Mitigation |
|---|---|
| Buyers rarely hold Stellar USDC | Kalea local pay-in (week 4), and Pollar onboarding later |
| Regulation (VASP / PSAV) for transmitting third-party funds | Pass-through design, progressive KYC, legal review per country before mainnet |
| AML and Circle address freezes | KYC limits, monitoring of unallocated funds |
| Kalea is still simulated | Demo integration only. No unit economics depend on it |
| Horizon deprecation | Detection behind an adapter |
| Paywit competition | Focus on LATAM social sellers and observability |
| Cloudflare lock-in (Durable Objects, Queues) | Keep them behind ports |
| Neon lists no PCI certification | Card data is out of scope. Re-check if fiat card pay-in is added |

## 13. Open items

- [ ] Approve or adjust the **Proposed** exception rules.
- [ ] Refund claim deadline.
- [ ] Donation rate and the campaign social layer.
- [ ] KYC provider (LATAM coverage, cost per check) and the exact limits.
- [ ] Pollar pricing and who pays account sponsorship.
- [ ] Kalea fees for CapiPay.
- [ ] Validate tier thresholds with real seller volume data.
- [ ] Verify SEP-7 support per wallet.
- [ ] Confirm Hono as the HTTP framework.
- [ ] Choose a Stellar RPC / Horizon provider and add its cost to the infra model.
- [ ] Mainnet key management for the forwarding key.
