# CapiPay Brand Guide

CapiPay looks like a calm lake at sunset: a capybara floating in the water, a mandarin sun on the horizon. Every visual piece comes from that one scene, and every ornament carries real meaning in the product. This guide is the reference for anyone designing or building for CapiPay.

> Status: v1, decided by the founder on 2026-11-09. Visual boards are in [`boards/`](boards/). Code-ready values are in [`tokens.css`](tokens.css). Logo files are in [`logo/`](logo/).

## Quick path

1. Use the logo files in [`logo/`](logo/) as they are. Never redraw them.
2. Import [`tokens.css`](tokens.css) and use the functional tokens (`--surface`, `--ink`, `--brand`...), not raw hex values.
3. Before shipping a piece, run the [checklist](#checklist).

---

## 1. Concept

| Idea | What it means | How it shows |
|---|---|---|
| **Verified** | The payment's status is the truth, not a screenshot | The capybara surfaces only when a payment is confirmed |
| **It keeps going** | A payment starts what comes next | The water line that flows forward |
| **Calm** | No checking the bank, no doubting the buyer | The capybara as an attitude, never as a cartoon |

**The rule behind everything:** the capybara is a *symbol*, not a mascot. An earlier round with a full character was rejected because it made CapiPay look like a kids' or gaming app.

## 2. Logo

The mark is a capybara's head floating above a water line. It comes in three versions, chosen by the space available.

| Version | File | Use | Size |
|---|---|---|---|
| **Full mark** | [`capipay-mark.svg`](logo/capipay-mark.svg), [`capipay-mark-crema.svg`](logo/capipay-mark-crema.svg) | Header, website, receipts, next to the wordmark | 48 px wide or more |
| **Compact symbol** | [`capipay-symbol.svg`](logo/capipay-symbol.svg) | App icon, avatar, square slots | 32 px or more |
| **Small symbol** | [`capipay-symbol-small.svg`](logo/capipay-symbol-small.svg) | Favicon, browser tabs | 24 px and below |
| **App icon** | [`capipay-app-icon.svg`](logo/capipay-app-icon.svg) | Stores, home screen | Any |

- **Lockup:** the full mark followed by "CapiPay" set in Rubik Bold, with a gap of 0.3× the mark's height. The wordmark is not yet outlined as a vector.
- **The eye is cut out** (transparent), so the background shows through. It is dropped in the small symbol because it disappears below 24 px.
- **Clear space:** keep empty space around the mark equal to the ear's diameter.
- **Construction:** the logo is drawn on a 100×100 grid. The water line sits at y = 62, the back of the skull is a circle of r = 22, and the snout corner is r = 12. The source shapes are in the SVG files.

**Never:**
- ❌ Form a "CP" monogram or pair those two letters as a symbol. The combination has other uses CapiPay must not be associated with.
- ❌ Turn the capybara into a character: no limbs, poses or expressions.
- ❌ Recolor it outside the palette, stretch it, or add effects.
- ❌ Use the full mark in square slots. Use the compact symbol instead.

Board: [`03-logo-system.png`](boards/03-logo-system.png)

## 3. Color

Five colors, used in fixed proportions. Any layout should roughly keep this share:

| Color | Hex | Share | Role |
|---|---|---|---|
| **Crema** | `#FFF7EC` | 45% | Ground |
| **Monte** | `#1F4D3A` | 20% | Water, depth, "verified" |
| **Tinta** | `#241F1A` | 15% | Text, logo |
| **Mandarina** | `#FF7A1A` | 12% | The sun, primary actions. One sun per piece |
| **Manteca** | `#FFD45C` | 8% | Light on the water, highlights |

**Contrast rules (WCAG 2):**
- Mandarina on Crema is **2.5:1**, so it is never used as text there. For orange text and links use `--brand-text` (`#B84A00`, 4.9:1).
- Text on Mandarina is always Tinta (6.3:1), never white.
- Manteca is only a fill, with Tinta text on it.
- Errors use a berry red (`#9E1B32`), so they are never confused with the brand orange.

**Dark theme:** Tinta-brown surfaces (`#1A1612`), cream text, and lighter success and danger colors. All values are in [`tokens.css`](tokens.css).

Board: [`01-color.png`](boards/01-color.png)

## 4. Typography

| Role | Typeface | Use |
|---|---|---|
| **Titles** | Rubik (500–700) | Display, h1–h3, amounts |
| **Text** | Nunito (400–800) | Body, labels, buttons |
| **Data** | Ubuntu Mono | Memos, addresses, transaction hashes |
| **Communication** | Sour Gummy | Marketing and the brand's playful voice only. **Never in the product UI** |

| Style | Size / line height | Weight |
|---|---|---|
| display | 84 / 84 | 700, tracking −2.5 |
| h1 | 54 / 57 | 700, tracking −1.2 |
| h2 | 36 / 41 | 600 |
| h3 | 24 / 30 | 500 |
| body | 18 / 29 | 400 |
| small | 15 / 22 | 600, muted |
| label | 13 / 16 | 800, uppercase, +1.5, `--brand-text` |
| data | 17 / 23 | 400, tabular numbers |

All four faces are free on Google Fonts. Board: [`02-typography.png`](boards/02-typography.png) (option C, "Firme", is the chosen one).

## 5. Ornaments: the lake

Ornaments are built **only from the logo's own parts**: the water line, the head and the mandarin. Nothing new is invented.

### Base elements

| Element | What it is | Use |
|---|---|---|
| **Water line** | The logo's stroke with round caps | Dividers, progress, limit bars |
| **Ripples** | The line repeated, shorter each time | "Something happened" |
| **Surfacing** | The head above the water | Good news only |
| **Mandarin** | An orange circle | Bullets, unread markers, the one thing to look at |
| **Horizon** | Monte lake, Crema or Manteca sky, Mandarina sun | Banners, social posts, headers |
| **Sun reflection** | The sun broken into water strokes | The signature piece: shirts, cards, CTAs |
| **Lake pattern** | Rows of short water strokes | Quiet texture behind previews and empty states |

### Payment states

The state of a payment is told by **how far the capybara has surfaced**. It always comes with a word, so color is never the only signal.

| State | Ornament | Color |
|---|---|---|
| Waiting for payment | Ripples on still water | Muted |
| Paid | The capybara surfaces | Monte |
| Partially paid | Halfway up | Brand text |
| Overpaid | Surfaced, plus extra ripples | Brand text |
| Expired | Flat, empty water | Border |
| Rejected | The water line breaks | Danger |

Boards: [`04-ornaments-static.png`](boards/04-ornaments-static.png), [`05-ornaments-states.png`](boards/05-ornaments-states.png)

## 6. Voice

- **Plain and calm.** Say what happened and what to do next ("We received 13.00 of 18.00 USDC. The buyer can top up with the same memo.").
- **The promise:** "Get paid in USDC. Your business keeps going." **The proof:** "No more fake receipts."
- **Languages.** English is the master copy. Customer-facing copy also ships in Spanish and Brazilian Portuguese. Everything else in the repo (code, tokens, docs) is English only.

| Language | Rules | Promise |
|---|---|---|
| English (`en`) | Master copy. Short sentences, second person | Get paid in USDC. Your business keeps going. |
| Spanish (`es`) | Neutral Latin American Spanish with *tú*. No voseo and no regional slang (*falso*, not *trucho*; *dinero*, not *plata*). Must read the same in Mexico, Peru, Bolivia or Argentina | Cobra en USDC. Tu negocio sigue solo. |
| Portuguese (`pt-BR`) | Brazilian Portuguese with *você*. Informal but not slangy | Receba em USDC. Seu negócio segue sozinho. |

## 7. Applications

| Piece | Board |
|---|---|
| Social profile, story, banners, WhatsApp link preview | [`06-social.png`](boards/06-social.png) |
| Checkout (waiting and paid) and merchant dashboard | [`07-interfaces.png`](boards/07-interfaces.png) |
| T-shirt, mug, tote, cap, stickers, business cards | [`08-swag.png`](boards/08-swag.png) |
| Landing page | [`09-landing.png`](boards/09-landing.png) |
| Transactional emails | [`10-emails.png`](boards/10-emails.png) |

The mockups use real product rules from [`../product-definition.md`](../product-definition.md): the 1% fee, the volume tiers and the partial payment rule. The API example on the landing page is illustrative only.

## Checklist

- [ ] The logo comes from `logo/`, in the right version for the space.
- [ ] Only the five palette colors appear, in roughly the stated shares.
- [ ] One mandarin sun per piece, at most.
- [ ] No Mandarina or Manteca text on light backgrounds.
- [ ] Sour Gummy appears only in marketing, never in product UI.
- [ ] Every payment state shows a word, not just a color or an ornament.
- [ ] No "CP" monogram, no capybara character.
- [ ] Spanish copy uses *tú*, with no voseo and no regional slang. Portuguese copy uses *você*.

## Open items

- [ ] Outline the "CapiPay" wordmark as a vector, with optical kerning.
- [ ] Final polish of the mark by a designer (optical corrections at small sizes).
- [ ] The partially paid ornament reads weakly. It may need its own metaphor.
- [ ] Photographic swag mockups for external presentations.
