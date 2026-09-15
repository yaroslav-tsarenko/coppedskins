"use client";

import { Link } from "@/i18n/routing";
import type { SihCatalogItem } from "@/lib/sih/queries";
import { useCurrency } from "@/providers/CurrencyProvider";
import { RarityTag, rarityVars } from "@/components/ui/RarityTag";
import { exteriorMeta } from "@/lib/skins/shared";

/**
 * The board — a ranked list, not a grid. Oversized numerals carry the rank,
 * hairlines separate the rows, and the price sits at the right edge where the
 * eye can run straight down the column.
 */
export function TopTen({
  items,
  className,
}: {
  items: SihCatalogItem[];
  className?: string;
}) {
  const { format } = useCurrency();

  return (
    <ol className={`border-t-[3px] border-[color:var(--color-text)] ${className ?? ""}`}>
      {items.map((item, i) => {
        const ext = exteriorMeta(item.exterior);
        return (
          <li key={item.slug} className="border-b border-[color:var(--color-border)]">
            <Link
              href={`/store/${item.slug}`}
              style={rarityVars(item.rarityColor)}
              className="group grid grid-cols-[auto_auto_1fr_auto] items-center gap-x-4 py-3 transition-colors hover:bg-[color:var(--color-primary-tint)] sm:gap-x-6"
            >
              <span
                aria-hidden
                className="index-num w-[1.6em] text-[clamp(1.5rem,4vw,2.25rem)] text-[color:var(--color-text-tertiary)] group-hover:text-[color:var(--color-primary-strong)]"
              >
                {String(i + 1).padStart(2, "0")}
              </span>

              <span className="relative hidden h-12 w-16 shrink-0 bg-[color:var(--color-bg-secondary)] sm:block">
                <span className="rarity-spine absolute inset-y-0 left-0 w-[3px]" aria-hidden />
                {item.imageUrl ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={item.imageUrl} alt="" loading="lazy" className="h-full w-full object-contain p-1" />
                ) : null}
              </span>

              <span className="min-w-0">
                <span className="microlabel block truncate">{item.weapon ?? item.category}</span>
                <span className="poster mt-0.5 block truncate text-[16px] text-[color:var(--color-text)]">
                  {item.skinName ?? item.name}
                </span>
                <span className="mt-1 flex flex-wrap items-center gap-1.5">
                  <RarityTag rarity={item.rarity} color={item.rarityColor} />
                  {ext ? (
                    <span className="readout text-[10px] text-[color:var(--color-text-tertiary)]">
                      {ext.short} · {ext.floatMin.toFixed(2)}–{ext.floatMax.toFixed(2)}
                    </span>
                  ) : null}
                </span>
              </span>

              <span className="poster tnum shrink-0 text-[clamp(1.1rem,3vw,1.6rem)] leading-none text-[color:var(--color-text)]">
                {format(item.price, "USD")}
              </span>
            </Link>
          </li>
        );
      })}
    </ol>
  );
}
