"use client";

import { useEffect, useMemo, useState } from "react";
import { Link } from "@/i18n/routing";
import { EXTERIORS, type ExteriorCode } from "@/lib/skins/shared";
import { ArrowRight } from "lucide-react";

/**
 * The float finder — the interactive instrument of the identity.
 *
 * Drag the 0.00–1.00 scale; the band under the handle selects itself and the
 * count comes from the live catalogue, so the number on screen is the number
 * of skins actually in that wear band right now.
 */
export function FloatFinder({ className }: { className?: string }) {
  const [pos, setPos] = useState(0.1);
  const [count, setCount] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);

  const band = useMemo(() => {
    return (
      EXTERIORS.find((e) => pos >= e.floatMin && pos < e.floatMax) ??
      EXTERIORS[EXTERIORS.length - 1]
    );
  }, [pos]);

  useEffect(() => {
    let cancelled = false;
    const code: ExteriorCode = band.code;
    setLoading(true);
    const t = setTimeout(() => {
      fetch(`/api/sih/catalog?exterior=${code}&perPage=1`)
        .then((r) => (r.ok ? r.json() : null))
        .then((data) => {
          if (cancelled) return;
          setCount(typeof data?.total === "number" ? data.total : null);
        })
        .catch(() => {
          if (!cancelled) setCount(null);
        })
        .finally(() => {
          if (!cancelled) setLoading(false);
        });
    }, 220);
    return () => {
      cancelled = true;
      clearTimeout(t);
    };
  }, [band]);

  return (
    <div
      className={`border border-[color:var(--color-border)] bg-[color:var(--color-bg-elevated)] p-5 sm:p-6 ${className ?? ""}`}
    >
      <div className="flex flex-wrap items-baseline justify-between gap-3">
        <span className="microlabel">Wear scale</span>
        <span className="readout text-[13px] font-bold text-[color:var(--color-text)]">
          {pos.toFixed(4)}
        </span>
      </div>

      {/* The gauge */}
      <div className="mt-4">
        <label htmlFor="float-finder" className="sr-only">
          Float value
        </label>
        <input
          id="float-finder"
          type="range"
          min={0}
          max={1}
          step={0.001}
          value={pos}
          onChange={(e) => setPos(Number(e.target.value))}
          aria-valuetext={`${pos.toFixed(4)}, ${band.label}`}
          className="wear-slider h-1.5 w-full cursor-pointer appearance-none rounded-[1px]"
        />
        <div className="mt-2 flex justify-between">
          {EXTERIORS.map((e) => (
            <button
              key={e.code}
              type="button"
              onClick={() => setPos((e.floatMin + e.floatMax) / 2)}
              className={[
                "font-mono text-[10px] font-bold uppercase tracking-[0.12em] transition-colors",
                e.code === band.code
                  ? "text-[color:var(--color-text)]"
                  : "text-[color:var(--color-text-tertiary)] hover:text-[color:var(--color-text)]",
              ].join(" ")}
            >
              {e.short}
            </button>
          ))}
        </div>
      </div>

      {/* The readout */}
      <div className="mt-6 flex flex-wrap items-end justify-between gap-4 border-t border-[color:var(--color-border)] pt-5">
        <div>
          <span className="microlabel block">Selected band</span>
          <p className="poster mt-1 text-[clamp(1.5rem,4vw,2.25rem)] text-[color:var(--color-text)]">
            {band.label}
          </p>
          <p className="readout mt-1 text-[11px] text-[color:var(--color-text-secondary)]">
            {band.floatMin.toFixed(2)} – {band.floatMax.toFixed(2)}
          </p>
        </div>

        <div className="text-right">
          <span className="microlabel block">In stock</span>
          <p
            className="poster tnum mt-1 text-[clamp(1.5rem,4vw,2.25rem)] leading-none text-[color:var(--color-primary-strong)]"
            aria-live="polite"
          >
            {loading && count == null ? "—" : count != null ? count.toLocaleString() : "—"}
          </p>
        </div>
      </div>

      <Link
        href={`/store?exterior=${band.code}`}
        className="focus-amber mt-5 inline-flex h-11 w-full items-center justify-center gap-2 rounded-[var(--radius-md)] bg-[color:var(--color-primary-strong)] text-sm font-bold text-[color:var(--color-primary-fg)] transition-colors hover:bg-[color:var(--color-primary-hover)]"
      >
        Show {band.short} skins <ArrowRight size={15} />
      </Link>
    </div>
  );
}
