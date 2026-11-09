# Landing MVP, README and repo description

## Objective

Give the public repo a proper face: an English README, a repo description and topics, and a non-functional marketing landing in English, Spanish (neutral LATAM) and Brazilian Portuguese.

## Problem and why

The repo is public but its README is a single title and it has no description. There is no landing to show the product. The brand is decided (`docs/brand/`), so the landing can be built from it.

## Scope

- In: `README.md`, GitHub description and topics, `apps/landing` (static React + Vite app), i18n for `en`, `es`, `pt-BR`, brand voice update for three languages.
- Out: any real functionality (accounts, payments, waitlist backend), deployment, analytics.

## Constraints

- Everything in the repo is in English. The only exception is the landing's `es` and `pt-BR` copy.
- Spanish copy is neutral LATAM (tú, no voseo, no regional slang).
- Brand rules from `docs/brand/README.md`: palette shares, Rubik/Nunito/Ubuntu Mono, logo SVGs from `docs/brand/logo/`, no "CP" monogram, no capybara character.
- Stack per product definition: React + Vite, TypeScript, Bun as local tooling.
- Copy with numbers must match `docs/product-definition.md` (1% fee, no fixed fee, volume tiers).
- Non-functional: CTAs lead to a waitlist section whose form only shows a local confirmation.

## Delivery strategy

`single-pr`: one MVP landing PR, reviewed as a whole by the founder, who merges directly. Forecast ~900 authored lines, mostly copy dictionaries and presentational components.

## Tasks

| ID | Task | Route | Status |
|---|---|---|---|
| T1 | README in English + repo description and topics | Inline (one mechanical file + one `gh` call) | Done · `9dba454` |
| T2 | Brand voice section: English master copy, es and pt-BR rules | Inline (one small edit) | Done · `c69bac5` |
| T3 | Scaffold `apps/landing` with brand tokens, fonts and logo assets | Delegated writer (2+ non-trivial files) | Done · `deeb970` |
| T4 | Landing sections and i18n (`en`, `es`, `pt-BR`) with language switcher | Delegated writer (same writer as T3) | Done · `deeb970` |
| T5 | Verify: typecheck, build, screenshot each locale at desktop and phone width | Parent, bounded | Done |

## Acceptance criteria

- [ ] README explains what CapiPay is, the status (pre-implementation, testnet MVP), the repo layout, and how to run the landing.
- [ ] Repo has a description and topics.
- [ ] Landing builds with `bun run build` and has no type errors.
- [ ] Landing renders in `en`, `es`, `pt-BR`; the switcher changes all copy and `<html lang>`.
- [ ] Default language follows the browser, falling back to `en`.
- [ ] Layout works at 400 px wide with no horizontal scroll.
- [ ] No Spanish or Portuguese outside the landing's locale files.

## Progress

- Branch `feat/landing-mvp` created from `main` (9e257e1).
- Receipt-driven review is off (global), so ordinary checks apply.
- Repo description and topics set on GitHub (not a commit).

## Verification evidence

- `bun install`: 68 packages, exit 0 (writer).
- `bun run typecheck`: `tsc --noEmit` passed (writer, re-run by parent).
- `bun run build`: built in ~1.3 s, JS 167.87 kB / 53.83 kB gzip (writer, re-run by parent).
- `rg "Cobrá|Compartí|Creá|Podés|tenés|truch|plata" apps/landing/src`: no matches (writer, re-run by parent).
- Screenshots of `vite preview` captured through Remotion's browser: `en`, `es`, `pt-BR` at 1440 px and `es` at 400 px. All copy switches language; mobile stacks to one column. Chrome headless shell crashed on its own (network service), so it was not used.
- Commit contents checked: 22 source files, no `node_modules` or `dist`.

## Accepted changes

- pt-BR fee tiers use comma decimals ("0,8%"), as Brazilian readers expect. Spanish keeps "0.8%" for neutral LATAM.
- Writer used cream instead of Manteca for small text on Monte (contrast), and the cream logo in the dark footer.

## Pending (not blocking)

- Authored size ~1,200 lines vs. ~900 forecast, mostly CSS and the three dictionaries. Kept as one PR per the `single-pr` strategy.
- iOS ignores SVG touch icons: a 180×180 PNG apple-touch-icon is needed later.
- The 400 px check was visual only; no automated overflow test exists.

## Next step

Push `feat/landing-mvp` and open the PR when the founder approves.
