import React from "react";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

/**
 * Rarity is label-language here, not lighting: a thin vertical spine on the
 * card edge plus a small tag chip. The raw Valve hue drives the spine and the
 * backdrop wash; type gets the darkened token so the rarity NAME stays
 * readable on concrete.
 */

/** Maps a raw Valve rarity hex onto the darkened, type-safe token. */
const INK: Record<string, string> = {
  "#b0c3d9": "var(--rarity-consumer)",
  "#5e98d9": "var(--rarity-industrial)",
  "#4b69ff": "var(--rarity-milspec)",
  "#8847ff": "var(--rarity-restricted)",
  "#d32ce6": "var(--rarity-classified)",
  "#eb4b4b": "var(--rarity-covert)",
  "#ffd700": "var(--rarity-gold)",
  "#e4ae39": "var(--rarity-contraband)",
};

export function rarityInk(raw: string | null | undefined): string {
  if (!raw) return "var(--rarity-consumer)";
  return INK[raw.toLowerCase()] ?? raw;
}

/** Inline style bundle that drives `.rarity-spine` and `.rarity-wash`. */
export function rarityVars(raw: string | null | undefined): React.CSSProperties {
  return { ["--rarity" as string]: raw || "#b0c3d9" };
}

/** The vertical spine strip down a card's leading edge. */
export function RaritySpine({ className }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={twMerge(clsx("rarity-spine absolute inset-y-0 left-0 w-[3px]", className))}
    />
  );
}

/** The rarity tag chip — a square-cut label with a dot in the raw hue. */
export function RarityTag({
  rarity,
  color,
  className,
}: {
  rarity: string | null;
  color: string | null | undefined;
  className?: string;
}) {
  if (!rarity) return null;
  return (
    <span
      className={twMerge(
        clsx(
          "inline-flex items-center gap-1.5 bg-[color:var(--color-bg-secondary)] px-1.5 py-1",
          "font-mono text-[10px] font-bold uppercase leading-none tracking-[0.12em]",
          className,
        ),
      )}
      style={{ color: rarityInk(color) }}
    >
      <span
        aria-hidden
        className="inline-block h-1.5 w-1.5 rounded-[9999px]"
        style={{ background: color || "#b0c3d9" }}
      />
      {rarity}
    </span>
  );
}
