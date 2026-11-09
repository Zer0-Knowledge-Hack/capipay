<p align="center">
  <img src="docs/brand/logo/capipay-mark.svg" alt="CapiPay" width="120">
</p>

<h1 align="center">CapiPay</h1>

<p align="center">
  <strong>Get paid in USDC. Your business keeps going.</strong><br>
  An API-first crypto payment gateway on Stellar for Latin American merchants.
</p>

---

CapiPay lets sellers on WhatsApp and Instagram, freelancers and SaaS products accept **USDC on Stellar** through payment links or an API. Every payment is verified on-chain, so the status of a payment is the truth, not a screenshot. When a payment lands, the net amount is forwarded to the merchant's wallet automatically and their flow continues through webhooks.

> **Status:** pre-implementation. The product, architecture and brand are defined. The first build targets **Stellar testnet**. Nothing in this repo moves real funds yet.

## How it works

1. **Create a payment link.** Set an amount in USDC and connect a payout wallet.
2. **Share it.** Send it on WhatsApp, Instagram or your website. Each visit opens a checkout session with its own memo and expiry.
3. **Get paid and keep going.** CapiPay detects the payment on Stellar, marks it `paid`, forwards the net amount to your wallet and sends a signed webhook.

| | |
|---|---|
| **Network / asset** | Stellar, USDC (Circle) only |
| **Pricing** | 1% per successful payment, no fixed fee |
| **Custody** | Pass-through: funds are forwarded on success, held only while an exception is resolved |
| **Onboarding** | Progressive KYC: start in minutes with low limits |

## Repository layout

| Path | What it is |
|---|---|
| [`apps/landing`](apps/landing) | Marketing landing (static MVP, not functional) in English, Spanish and Brazilian Portuguese |
| [`docs/product-definition.md`](docs/product-definition.md) | Product definition: flows, exception rules, pricing, architecture, sprint plan |
| [`docs/brand/`](docs/brand) | Brand guide, design tokens, logo files and boards |

## Run the landing locally

Requires [Bun](https://bun.sh).

```bash
cd apps/landing
bun install
bun run dev      # http://localhost:5173
bun run build    # production build in apps/landing/dist
```

## Planned stack

| Layer | Choice |
|---|---|
| Frontend | React + Vite (PWA), served on Cloudflare |
| Backend | TypeScript on Cloudflare Workers, modular monolith (hexagonal) |
| Database | PostgreSQL on Neon via Hyperdrive |
| Payment watcher | A Durable Object polling Stellar RPC / Horizon |
| Webhooks | Cloudflare Queues with retries |

See [section 10 of the product definition](docs/product-definition.md#10-architecture-and-infrastructure) for the reasoning and cost model.

## License

[Apache 2.0](LICENSE)
