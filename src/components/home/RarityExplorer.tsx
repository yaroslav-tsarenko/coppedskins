"use client";

import { useEffect, useState } from "react";
import { Link } from "@/i18n/routing";
import { RARITY_TIERS } from "@/lib/skins/shared";
import type { SihCatalogItem, SihCatalogResult } from "@/lib/sih/queries";
import { SihItemCard, SihItemCardSkeleton } from "@/components/sih/SihItemCard";
import { ArrowRight } from "lucide-react";

const GRADES = Object.entries(RARITY_TIERS)
  .sort((a, b) => a[1].order - b[1].order)
  .map(([name, meta]) => ({ name, color: meta.color }));

/**
 * The rarity explorer — the colour chips of the grade scale, filtering a live
 * preview. Chips are the one place the raw Valve hues appear as fills, because
 * here the colour IS the content; the label rides on a black or white type
 * layer chosen for contrast rather than left to chance.
 */
export function RarityExplorer({ className }: { className?: string }) {
  const [active, setActive] = useState(GRADES[GRADES.length - 3]?.name ?? "Covert");
  const [items, setItems] = useState<SihCatalogItem[]>([]);
  const [total, setTotal] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    fetch(`/api/sih/catalog?rarity=${encodeURIComponent(active)}&perPage=6&sort=price_desc`)
      .then((r) => (r.ok ? r.json() : null))
      .then((data: SihCatalogResult | null) => {
        if (cancelled) return;
        setItems(data?.items ?? []);
        setTotal(data?.total ?? null);
      })
      .catch(() => {
        if (!cancelled) {
          setItems([]);
          setTotal(null);
        }
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [active]);

  return (
    <div className={className}>
      <div role="tablist" aria-label="Rarity grades" className="flex flex-wrap gap-2">
        {GRADES.map((g) => {
          const selected = g.name === active;
          return (
            <button
              key={g.name}
              role="tab"
              aria-selected={selected}
              onClick={() => setActive(g.name)}
              className={[
                "focus-amber inline-flex items-center gap-2 px-3 py-2 font-mono text-[11px] font-bold uppercase tracking-[0.12em] transition-all",
                selected
                  ? "text-[color:var(--color-text-inverse)]"
                  : "text-[color:var(--color-text)] hover:-translate-y-px",
              ].join(" ")}
              style={
                selected
                  ? { background: "var(--color-text)", boxShadow: `inset 3px 0 0 0 ${g.color}` }
                  : { background: "var(--color-bg-elevated)", boxShadow: `inset 3px 0 0 0 ${g.color}, inset 0 0 0 1px var(--color-border)` }
              }
            >
              {g.name}
            </button>
          );
        })}
      </div>

      <div className="mt-5 flex flex-wrap items-baseline justify-between gap-3">
        <p className="readout text-[12px] text-[color:var(--color-text-secondary)]" aria-live="polite">
          {total != null ? `${total.toLocaleString()} in stock` : "—"}
        </p>
        <Link
          href={`/store?rarity=${encodeURIComponent(active)}`}
          className="inline-flex items-center gap-1.5 border-b-2 border-[color:var(--color-primary)] pb-0.5 text-[13px] font-bold text-[color:var(--color-text)] hover:border-[color:var(--color-text)]"
        >
          Shop {active} <ArrowRight size={14} />
        </Link>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
        {loading
          ? Array.from({ length: 6 }).map((_, i) => <SihItemCardSkeleton key={i} />)
          : items.map((item) => <SihItemCard key={item.slug} item={item} />)}
      </div>

      {!loading && items.length === 0 ? (
        <p className="mt-6 text-[14px] text-[color:var(--color-text-secondary)]">
          Nothing in stock at this grade right now.
        </p>
      ) : null}
    </div>
  );
}
