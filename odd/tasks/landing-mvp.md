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
| T1 | README in English + repo description and topics | Inline (one mechanical file + one `gh` call) | Pending |
| T2 | Brand voice section: English master copy, es and pt-BR rules | Inline (one small edit) | Pending |
| T3 | Scaffold `apps/landing` with brand tokens, fonts and logo assets | Delegated writer (2+ non-trivial files) | Pending |
| T4 | Landing sections and i18n (`en`, `es`, `pt-BR`) with language switcher | Delegated writer (same writer as T3) | Pending |
| T5 | Verify: typecheck, build, screenshot each locale at desktop and phone width | Parent, bounded | Pending |

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

## Next step

T1.
