"use client";

import { useState } from "react";
import { Link } from "@/i18n/routing";
import { useRouter } from "next/navigation";
import { ShieldCheck, Truck, Zap, AlertTriangle, ArrowLeft, Loader2 } from "lucide-react";
import { exteriorMeta } from "@/lib/skins/shared";
import type { SihItemDetail, SihCatalogItem } from "@/lib/sih/queries";
import { useCurrency } from "@/providers/CurrencyProvider";
import { SihItemCard } from "./SihItemCard";
import { Sticker, MicroTag } from "@/components/ui/Sticker";
import { FloatTag } from "@/components/ui/FloatTag";
import { RarityTag, rarityVars } from "@/components/ui/RarityTag";
import { SectionHead } from "@/components/ui/SectionHead";

export type SihPurchaseState = "anon" | "no-steam" | "no-trade-url" | "ready";

/**
 * The item page as a poster spread: the render huge on its rarity-tinted
 * stage on the left, the release data printed on the right — model name in
 * poster type, the authentication tag, the price, and one heat CTA.
 */
export function SihItemDetailClient({
  item,
  related,
  purchaseState,
}: {
  item: SihItemDetail;
  related: SihCatalogItem[];
  purchaseState: SihPurchaseState;
}) {
  const { format } = useCurrency();
  const router = useRouter();
  const ext = exteriorMeta(item.exterior);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const soldOut = item.count <= 0;
  const hasDiscount = item.steamPrice != null && item.discountPct != null && item.discountPct > 0;

  const title =
    item.skinName ||
    item.name.replace(/^(StatTrak™ |Souvenir |★ )/, "").split(" | ").slice(1).join(" | ") ||
    item.name;

  async function handleBuy() {
    setError(null);
    if (purchaseState === "anon") {
      router.push(`/auth/login?next=/store/${item.slug}`);
      return;
    }
    if (purchaseState === "no-steam" || purchaseState === "no-trade-url") {
      router.push("/sell");
      return;
    }
    setBusy(true);
    try {
      const res = await fetch("/api/sih/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ marketHashName: item.marketHashName }),
      });
      const data = (await res.json()) as { paymentUrl?: string; error?: string };
      if (!res.ok || !data.paymentUrl) {
        setError(data.error ?? "Unable to start checkout. Please try again.");
        setBusy(false);
        return;
      }
      window.location.href = data.paymentUrl;
    } catch {
      setError("Network error. Please try again.");
      setBusy(false);
    }
  }

  const buyLabel = (() => {
    if (soldOut) return "Out of stock";
    if (item.stale) return "Refreshing price…";
    if (purchaseState === "anon") return "Sign in to buy";
    if (purchaseState === "no-steam") return "Link Steam to buy";
    if (purchaseState === "no-trade-url") return "Add trade URL to buy";
    return `Buy now · ${format(item.price, "USD")}`;
  })();

  return (
    <div className="mx-auto w-full max-w-[var(--max-width)] px-4 py-6 sm:px-6 lg:px-8">
      <Link
        href="/store"
        className="mb-5 inline-flex items-center gap-1.5 font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-[color:var(--color-text-secondary)] transition-colors hover:text-[color:var(--color-text)]"
      >
        <ArrowLeft className="h-3.5 w-3.5" /> Back to the floor
      </Link>

      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
        {/* ── The render stage ─────────────────────────────────── */}
        <div
          style={rarityVars(item.rarityColor)}
          className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-[var(--radius-lg)] border border-[color:var(--color-text)] bg-[color:var(--color-bg-elevated)]"
        >
          <span aria-hidden className="rarity-spine absolute inset-y-0 left-0 w-[5px]" />
          <span aria-hidden className="rarity-wash pointer-events-none absolute inset-0" />

          {item.imageUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={item.imageUrl}
              alt={item.name}
              className="relative h-full w-full -rotate-3 object-contain p-10"
            />
          ) : (
            <span className="microlabel">No render</span>
          )}

          <div className="absolute left-5 top-4 flex flex-col items-start gap-2">
            {hasDiscount ? (
              <Sticker tone="heat" pop>
                −{item.discountPct}% vs Steam
              </Sticker>
            ) : null}
            {!soldOut && item.count <= 3 ? (
              <Sticker tone="yellow" tilt="right">
                Last {item.count}
              </Sticker>
            ) : null}
            {soldOut ? (
              <Sticker tone="black" tilt="none">
                Sold out
              </Sticker>
            ) : null}
          </div>
        </div>

        {/* ── The release data ─────────────────────────────────── */}
        <div className="flex flex-col">
          <div className="flex flex-wrap items-center gap-1.5">
            <RarityTag rarity={item.rarity} color={item.rarityColor} />
            {item.isStatTrak ? <MicroTag tone="warning">StatTrak™</MicroTag> : null}
            {item.isSouvenir ? <MicroTag tone="success">Souvenir</MicroTag> : null}
            {item.phase ? <MicroTag>{item.phase}</MicroTag> : null}
          </div>

          <p className="microlabel mt-4">{item.weapon ?? item.category}</p>
          <h1 className="poster mt-1.5 text-[clamp(2rem,5vw,3.25rem)] text-[color:var(--color-text)]">
            {title}
          </h1>
          <p className="readout mt-2 text-[12px] text-[color:var(--color-text-secondary)]">
            {item.name}
          </p>

          {/* Price */}
          <div className="mt-7 flex flex-wrap items-end gap-4 border-t-[3px] border-[color:var(--color-text)] pt-5">
            <span className="poster tnum text-[clamp(2.25rem,6vw,3.5rem)] leading-none text-[color:var(--color-text)]">
              {format(item.price, "USD")}
            </span>
            {hasDiscount ? (
              <span className="flex flex-col pb-1">
                <span className="readout text-[13px] text-[color:var(--color-text-tertiary)] line-through">
                  {format(item.steamPrice!, "USD")}
                </span>
                <span className="font-mono text-[11px] font-bold uppercase tracking-[0.12em] text-[color:var(--color-success)]">
                  −{item.discountPct}% vs Steam
                </span>
              </span>
            ) : null}
          </div>

          <p className="readout mt-2 text-[11px] text-[color:var(--color-text-tertiary)]">
            {soldOut ? "Currently unavailable" : `${item.count} in stock`}
          </p>

          {/* Buy */}
          <button
            onClick={handleBuy}
            disabled={busy || soldOut || item.stale}
            className="focus-amber mt-6 inline-flex h-14 items-center justify-center gap-2 rounded-[var(--radius-md)] bg-[color:var(--color-primary-strong)] px-6 text-[15px] font-bold text-[color:var(--color-primary-fg)] shadow-[var(--shadow-sm)] transition-all hover:bg-[color:var(--color-primary-hover)] hover:shadow-[var(--shadow-md)] active:translate-y-px active:shadow-none disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none"
          >
            {busy ? <Loader2 className="h-4 w-4 animate-spin" /> : <Zap className="h-4 w-4" />}
            {busy ? "Starting checkout…" : buyLabel}
          </button>

          {error && (
            <p className="mt-3 flex items-center gap-1.5 border-l-[3px] border-[color:var(--color-danger)] bg-[color:var(--color-danger-light)] px-3 py-2 text-sm text-[color:var(--color-danger)]">
              <AlertTriangle className="h-4 w-4 shrink-0" /> {error}
            </p>
          )}
          {item.stale && !soldOut && (
            <p className="readout mt-3 text-[11px] text-[color:var(--color-text-tertiary)]">
              Live price is being refreshed — check back in a moment.
            </p>
          )}

          {/* The authentication tag */}
          <FloatTag
            className="mt-7"
            exterior={item.exterior}
            rows={[
              { label: "Exterior", value: ext ? ext.label : "Unknown" },
              { label: "Rarity", value: item.rarity ?? "—" },
              item.phase ? { label: "Phase", value: item.phase } : null,
              { label: "StatTrak™", value: item.isStatTrak ? "Yes" : "No" },
              { label: "Souvenir", value: item.isSouvenir ? "Yes" : "No" },
              { label: "Market name", value: item.marketHashName },
            ]}
          />

          {/* Trust */}
          <div className="mt-6 grid grid-cols-1 gap-px bg-[color:var(--color-border)] sm:grid-cols-3">
            <Trust icon={<Truck className="h-4 w-4" />} title="Steam delivery" body="Sent as a trade offer" />
            <Trust icon={<ShieldCheck className="h-4 w-4" />} title="Buyer protection" body="Refund if undelivered" />
            <Trust icon={<Zap className="h-4 w-4" />} title="Fast dispatch" body="Automated fulfilment" />
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-16">
          <SectionHead
            eyebrow="Same shelf"
            title={<>More {item.weapon ?? item.category}</>}
            action={
              <Link
                href={`/store?${item.weapon ? `weapon=${encodeURIComponent(item.weapon)}` : `category=${encodeURIComponent(item.category)}`}`}
                className="inline-flex items-center gap-1.5 border-b-2 border-[color:var(--color-primary)] pb-0.5 text-[13px] font-bold text-[color:var(--color-text)] hover:border-[color:var(--color-text)]"
              >
                See all
              </Link>
            }
          />
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-6">
            {related.map((r) => (
              <SihItemCard key={r.slug} item={r} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

function Trust({ icon, title, body }: { icon: React.ReactNode; title: string; body: string }) {
  return (
    <div className="flex items-start gap-2.5 bg-[color:var(--color-bg-elevated)] p-3">
      <span className="mt-0.5 text-[color:var(--color-primary-strong)]">{icon}</span>
      <div>
        <p className="text-[12.5px] font-bold text-[color:var(--color-text)]">{title}</p>
        <p className="text-[11.5px] text-[color:var(--color-text-secondary)]">{body}</p>
      </div>
    </div>
  );
}
