import React from "react";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";
import { EXTERIORS, exteriorMeta, type ExteriorCode } from "@/lib/skins/shared";

/**
 * The float gauge — the signature component of the identity.
 *
 * A printed authentication instrument: the 0.00–1.00 wear scale with the
 * FN/MW/FT/WW/BS bands marked, and the item's own band bracketed on it.
 *
 * The catalogue stores an exterior, not a per-item float, so the gauge shows
 * the exterior's real range rather than inventing a decimal. When a true float
 * is available (`value`), the needle is drawn at that exact point instead.
 */
/** The wear colour that belongs to an exterior band. */
const BAND_INK: Record<string, string> = {
  FN: "var(--wear-fn)",
  MW: "var(--wear-mw)",
  FT: "var(--wear-ft)",
  WW: "var(--wear-ww)",
  BS: "var(--wear-bs)",
};

export function FloatGauge({
  exterior,
  value,
  className,
  showScale = true,
  variant = "scale",
}: {
  exterior: ExteriorCode;
  /** Exact float, when the source provides one. */
  value?: number | null;
  className?: string;
  showScale?: boolean;
  /**
   * `scale` draws the full FN→BS spectrum — the legend, for the tag and the
   * filter rail. `band` draws a neutral track with only this item's band
   * inked, which is what a card needs: one datum, not a rainbow.
   */
  variant?: "scale" | "band";
}) {
  const meta = exteriorMeta(exterior);
  const hasBand = !!meta;

  if (variant === "band") {
    return (
      <div
        className={twMerge(clsx("relative h-[3px] w-full bg-[color:var(--color-bg-tertiary)]", className))}
        role="img"
        aria-label={
          hasBand
            ? `Wear band ${meta.label}, float ${meta.floatMin.toFixed(2)} to ${meta.floatMax.toFixed(2)}`
            : "Wear unknown"
        }
      >
        {hasBand ? (
          <span
            aria-hidden
            className="absolute inset-y-0"
            style={{
              left: `${meta.floatMin * 100}%`,
              width: `${Math.max(3, (meta.floatMax - meta.floatMin) * 100)}%`,
              background: BAND_INK[meta.code] ?? "var(--color-text)",
            }}
          />
        ) : null}
      </div>
    );
  }

  return (
    <div className={twMerge(clsx("w-full", className))}>
      <div
        className="relative h-1.5 w-full bg-[image:var(--gradient-wear)]"
        role="img"
        aria-label={
          value != null
            ? `Float ${value.toFixed(4)}`
            : hasBand
              ? `Wear band ${meta.label}, float ${meta.floatMin.toFixed(2)} to ${meta.floatMax.toFixed(2)}`
              : "Wear unknown"
        }
      >
        {/* The item's band, bracketed on the scale. */}
        {hasBand ? (
          <span
            aria-hidden
            className="absolute inset-y-[-3px] border-x-2 border-[color:var(--color-text)]"
            style={{
              left: `${meta.floatMin * 100}%`,
              width: `${Math.max(2, (meta.floatMax - meta.floatMin) * 100)}%`,
            }}
          />
        ) : null}

        {/* An exact float, when we actually have one. */}
        {value != null ? (
          <span
            aria-hidden
            className="absolute -top-1 h-3.5 w-0.5 bg-[color:var(--color-text)]"
            style={{ left: `calc(${Math.min(1, Math.max(0, value)) * 100}% - 1px)` }}
          />
        ) : null}
      </div>

      {showScale ? (
        <div className="mt-1 flex justify-between font-mono text-[9px] font-bold uppercase tracking-[0.1em] text-[color:var(--color-text-tertiary)]">
          {EXTERIORS.map((e) => (
            <span
              key={e.code}
              className={
                e.code === exterior ? "text-[color:var(--color-text)]" : undefined
              }
            >
              {e.short}
            </span>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export interface FloatTagRow {
  label: string;
  value: React.ReactNode;
}

/**
 * The authentication tag — the block of printed data every release carries.
 * Mono rows on a paper plate, with the wear gauge underneath. Rows with no
 * value are dropped rather than shown as "—", so the tag never pads itself
 * with data the store does not hold.
 */
export function FloatTag({
  exterior,
  value,
  rows = [],
  className,
  compact = false,
}: {
  exterior: ExteriorCode;
  value?: number | null;
  rows?: Array<FloatTagRow | null | false>;
  className?: string;
  compact?: boolean;
}) {
  const meta = exteriorMeta(exterior);
  const visible = rows.filter(Boolean) as FloatTagRow[];

  return (
    <div
      className={twMerge(
        clsx(
          "border border-[color:var(--color-border)] bg-[color:var(--color-bg-secondary)]",
          compact ? "p-2" : "p-3",
          className,
        ),
      )}
    >
      <div className="flex items-baseline justify-between gap-3">
        <span className="microlabel">Authentication</span>
        <span className="readout text-[11px] font-bold text-[color:var(--color-text)]">
          {meta ? meta.short : "N/A"}
          {value != null ? ` · ${value.toFixed(4)}` : ""}
        </span>
      </div>

      <FloatGauge exterior={exterior} value={value} className="mt-2" showScale={!compact} />

      {meta ? (
        <p className="readout mt-2 text-[10px] text-[color:var(--color-text-secondary)]">
          {meta.label.toUpperCase()} · {meta.floatMin.toFixed(2)}–{meta.floatMax.toFixed(2)}
        </p>
      ) : null}

      {visible.length > 0 ? (
        <dl className="mt-2 border-t border-[color:var(--color-border)] pt-2">
          {visible.map((r) => (
            <div key={r.label} className="flex items-baseline justify-between gap-3 py-1">
              <dt className="microlabel">{r.label}</dt>
              <dd className="readout text-[11px] text-[color:var(--color-text)]">{r.value}</dd>
            </div>
          ))}
        </dl>
      ) : null}
    </div>
  );
}
