# CapiPay landing

The marketing landing page for CapiPay, a USDC payment gateway on Stellar for Latin American merchants.

> **Non-functional MVP.** No accounts, payments or backend. The "Get early access" buttons scroll to the waitlist, and the waitlist form only validates the email and shows a local confirmation. Nothing is sent or stored. The API example is illustrative.

## Run

Requires [Bun](https://bun.sh).

```sh
bun install
bun run dev        # local dev server
bun run typecheck  # TypeScript, no emit
bun run build      # typecheck + production build into dist/
bun run preview    # serve the production build
```

## Where things live

| Path | What |
|---|---|
| `src/i18n/en.ts` | Master copy (English). Its shape is the `Dict` type |
| `src/i18n/es.ts`, `src/i18n/pt-BR.ts` | Spanish and Brazilian Portuguese. A missing key is a type error |
| `src/i18n/index.tsx` | Language context. Initial language: `?lang=`, then the saved choice, then the browser, then English |
| `src/components/` | Header, page sections and lake ornaments |
| `src/styles/tokens.css` | Brand tokens, copied from `docs/brand/tokens.css` |
| `public/` | Logo files, copied from `docs/brand/logo/` |

## Language rules

English is the master copy. Spanish is neutral Latin American with *tú* (no voseo, no regional slang). Portuguese is Brazilian with *você*. See the voice section of [`docs/brand/README.md`](../../docs/brand/README.md#6-voice).
