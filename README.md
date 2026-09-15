# Coppedskins

CS2 skins storefront — Next.js 16 (App Router) + Tailwind CSS v4, TypeScript, Prisma/Postgres,
next-intl, Steam trade delivery via the SIH provider.

Forked from the UltraSensSkin/tradelock codebase: commerce, auth, Prisma schema, the SIH sync and
order pipeline, the admin panel and every API route carry over unchanged. The storefront interface
was rebuilt on a new design system.

## Design system — "Drop District"

Rare CS2 skins are the sneakers of gaming: coveted, collected, flexed, resold. So the store borrows
its energy from streetwear drop culture and limited-release retail. A bright concrete gallery, each
skin presented like a limited release — poster typography, release cards, authentication tags — and
one heat orange-red that marks drops, deals and CTAs like a SALE sticker on a release wall.

All tokens live in `src/styles/variables.css` and are exposed to Tailwind through `@theme` in
`src/styles/globals.css`. No component hardcodes a colour, a radius or a shadow.

| Token group | Values |
| --- | --- |
| Surfaces | concrete `#F2F1ED`, paper-grey `#E9E7E1`, gallery white `#FCFBF9` |
| Ink | poster black `#171512`, muted `#75716A` |
| Heat | `#F04E23` (plates, stickers, rules) · `#D13F16` press ink for fills carrying white type |
| Cobalt | `#2757D6` links, secondary buttons, info tags |
| Safety yellow | `#F5C518`, always with black type — rationed for "last units" |
| Rarity | the full CS2 scale, as a spine strip + tag chip (never a glow) |
| Semantic | profit `#2FA866`, loss `#D9453A`, trade-lock `#E8A33D` |
| Radii | `2 / 3 / 4 / 6 / 8px` — nothing is a pill |
| Elevation | hard, offset, low-alpha — a printed poster lifting off the wall |

Two inks for heat is deliberate: `--color-primary` is the poster heat that carries **black** type
(5.9:1), `--color-primary-strong` is the darker press ink for fills that carry **white** type
(4.9:1), so buttons clear WCAG AA for body-size text rather than only large-text AA.

"After Hours" (`[data-theme="dark"]`) is a first-class inversion — poster-black walls, concrete ink,
heat tamed, rarity spines allowed a soft glow. Light ships as the default.

### Signature motifs

- **The release card** (`components/sih/SihItemCard.tsx`) — uniform render stage, rarity spine,
  model name in poster type, wear band, price as the loudest element, stickers applied on top.
- **The float tag** (`components/ui/FloatTag.tsx`) — the authentication label: mono readout over the
  0.00–1.00 wear gauge with the item's band bracketed. Cards get the compact `band` variant; the tag
  and the filter rail get the full FN→BS scale.
- **Stickers** (`components/ui/Sticker.tsx`) — rotated ±2°, slapped on with a scale-settle.
- **Tape rules, index numerals, the ticker strip** — the structural language of the poster wall.

Typography: **Anton** (poster display — headlines, section titles, skin names, prices), **Inter**
(UI and body), **JetBrains Mono** (floats, prices, seeds, order refs, every micro-label).

### Honesty rules baked into the UI

The store never manufactures urgency or data it does not hold:

- `DropTimer` only counts down to a real deadline. On the home page that is the catalogue's own
  60-second revalidate window, labelled "prices refresh in".
- Discount stickers appear only when `discountPct` is genuinely set against a Steam price.
- The catalogue stores an exterior, not a per-item float, so the gauge shows the exterior's real
  range instead of inventing a decimal. The exact-float needle is wired up for when the source
  provides one.
- The ticker carries what the store can promise, not a feed of invented sales.
- "Top 10" is ranked by price — a real ordering — not by fabricated popularity.

## Getting started

```bash
npm install
npx prisma generate
npm run dev
```

## Environment

Copy `.env.example` to `.env.local`. Brand-facing values (`NEXT_PUBLIC_SITE_URL`, `APP_URL`,
`NEXT_PUBLIC_CONTACT_EMAIL`, socials) already point at `coppedskins.com`.

> `RESEND_FROM_EMAIL` / `RESEND_REPLY_TO` still use the sending domain inherited from the fork,
> because that domain is the one verified in Resend. Move them to a `coppedskins.com` sender once
> that domain is verified — there is a TODO on the line.

## Structure

```
src/styles          variables.css (tokens) + globals.css (@theme, motifs) + animations.css
src/components/ui   primitives: Sticker, FloatTag, RarityTag, DropTimer, Ticker, SectionHead, Button, Chip
src/components/sih  release card, catalogue, item page, purchases — the SIH storefront
src/components/home home-only blocks: FloatFinder, RarityExplorer, TopTen
src/lib/sih         provider client, sync, pricing, orders, queries
src/app/admin       admin panel — inherits the new tokens, layout unchanged
```
