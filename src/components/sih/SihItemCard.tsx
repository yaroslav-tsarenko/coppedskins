"use client";

import Link from "next/link";
import { exteriorMeta } from "@/lib/skins/shared";
import type { SihCatalogItem } from "@/lib/sih/queries";
import { useCurrency } from "@/providers/CurrencyProvider";
import { Sticker, MicroTag } from "@/components/ui/Sticker";
import { FloatGauge } from "@/components/ui/FloatTag";
import { RaritySpine, rarityVars, rarityInk } from "@/components/ui/RarityTag";

/**
 * The release card — a skin presented the way a limited sneaker release is.
 *
 * Uniform render stage, rarity spine down the leading edge, the model name set
 * like a model number, a printed authentication strip, and the price as the
 * loudest thing on the card. Stickers (discount, last units) are applied at
 * the top-right like hand-placed labels, and only when they are true.
 */
export function SihItemCard({ item }: { item: SihCatalogItem }) {
  const ext = exteriorMeta(item.exterior);
  const { format } = useCurrency();

  const skin =
    item.skinName ||
    item.name.replace(/^(StatTrak™ |Souvenir |★ )/, "").split(" | ").slice(1).join(" | ") ||
    item.name;

  const hasDiscount = item.discountPct != null && item.discountPct > 0;
  const lastUnits = item.count > 0 && item.count <= 3;

  return (
    <Link
      href={`/store/${item.slug}`}
      style={rarityVars(item.rarityColor)}
      className="card-lift group relative flex flex-col overflow-hidden rounded-[var(--radius-lg)] border border-[color:var(--color-border)] bg-[color:var(--color-bg-elevated)]"
    >
      <RaritySpine />

      {/* Render stage */}
      <div className="relative aspect-[4/3] overflow-hidden bg-[color:var(--color-bg-secondary)]">
        <span aria-hidden className="rarity-wash pointer-events-none absolute inset-0" />

        {item.imageUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={item.imageUrl}
            alt={item.name}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-contain p-4 transition-transform duration-[var(--dur-slow)] ease-[var(--ease-out-expo)] group-hover:scale-[1.06] group-hover:-rotate-2"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="microlabel">No render</span>
          </div>
        )}

        {/* Applied labels — top left: what the item IS */}
        <div className="absolute left-3 top-2 flex flex-wrap items-start gap-1">
          {item.isStatTrak ? <MicroTag tone="warning">StatTrak™</MicroTag> : null}
          {item.isSouvenir ? <MicroTag tone="success">Souvenir</MicroTag> : null}
          {item.phase ? <MicroTag>{item.phase}</MicroTag> : null}
        </div>

        {/* Applied labels — top right: what the deal IS */}
        <div className="absolute right-2 top-2 flex flex-col items-end gap-1.5">
          {hasDiscount ? <Sticker tone="heat">−{item.discountPct}%</Sticker> : null}
          {lastUnits ? (
            <Sticker tone="yellow" tilt="right">
              {item.count} left
            </Sticker>
          ) : null}
        </div>
      </div>

      {/* Release data */}
      <div className="flex flex-1 flex-col gap-2 border-t border-[color:var(--color-border)] p-3">
        <div className="flex items-center justify-between gap-2">
          <span className="microlabel truncate">{item.weapon ?? item.category}</span>
          {ext ? (
            <span
              className="shrink-0 font-mono text-[10px] font-bold uppercase leading-none tracking-[0.14em]"
              style={{ color: rarityInk(item.rarityColor) }}
            >
              {ext.short}
            </span>
          ) : null}
        </div>

        <h3 className="poster line-clamp-2 min-h-[1.8em] text-[15px] text-[color:var(--color-text)]">
          {skin}
        </h3>

        <FloatGauge exterior={item.exterior} variant="band" showScale={false} className="mt-1" />

        <div className="mt-auto flex items-end justify-between gap-2 pt-2">
          <div className="flex flex-col">
            <span className="poster tnum text-[22px] leading-none text-[color:var(--color-text)]">
              {format(item.price, "USD")}
            </span>
            {item.steamPrice != null && hasDiscount ? (
              <span className="readout mt-1 text-[10px] text-[color:var(--color-text-tertiary)] line-through">
                {format(item.steamPrice, "USD")}
              </span>
            ) : null}
          </div>
          {hasDiscount ? (
            <span className="microlabel pb-0.5 text-[color:var(--color-success)]">vs Steam</span>
          ) : null}
        </div>
      </div>
    </Link>
  );
}

export function SihItemCardSkeleton() {
  return (
    <div className="flex flex-col overflow-hidden rounded-[var(--radius-lg)] border border-[color:var(--color-border)] bg-[color:var(--color-bg-elevated)]">
      <div className="skeleton aspect-[4/3] w-full" />
      <div className="flex flex-col gap-2 border-t border-[color:var(--color-border)] p-3">
        <div className="skeleton h-2.5 w-1/3" />
        <div className="skeleton h-4 w-3/4" />
        <div className="skeleton h-1.5 w-full" />
        <div className="skeleton mt-2 h-5 w-1/2" />
      </div>
    </div>
  );
}
