import React from "react";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

type Tone = "heat" | "yellow" | "black" | "cobalt" | "outline";

const tones: Record<Tone, string> = {
  heat: "bg-[color:var(--color-primary)] text-[color:var(--color-primary-ink)]",
  yellow: "bg-[color:var(--color-gold)] text-[#171512]",
  black: "bg-[color:var(--color-text)] text-[color:var(--color-text-inverse)]",
  cobalt: "bg-[color:var(--color-accent)] text-[color:var(--color-accent-fg)]",
  outline:
    "bg-transparent text-[color:var(--color-text-secondary)] shadow-[inset_0_0_0_1px_var(--color-border-strong)]",
};

/**
 * The sticker — a hand-placed label on a release wall.
 *
 * Rotated a couple of degrees so it reads as applied rather than printed, and
 * rationed: one per card. `tilt` picks which way it leans (or none, for tight
 * rows where a rotation would collide with its neighbour).
 */
export function Sticker({
  children,
  tone = "heat",
  tilt = "left",
  pop = false,
  className,
  ...rest
}: {
  children: React.ReactNode;
  tone?: Tone;
  tilt?: "left" | "right" | "none";
  /** Plays the slap-on animation once when the sticker mounts. */
  pop?: boolean;
  className?: string;
} & React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={twMerge(
        clsx(
          "sticker",
          tones[tone],
          tilt === "right" && "sticker-right",
          tilt === "none" && "sticker-flat",
          pop && (tilt === "right" ? "animate-sticker-right" : "animate-sticker"),
          className,
        ),
      )}
      {...rest}
    >
      {children}
    </span>
  );
}

/**
 * A stencil micro-tag — the quiet sibling of the sticker. Square-cut, mono,
 * wide-tracked; used for exteriors, categories and spec labels.
 */
export function MicroTag({
  children,
  tone = "default",
  className,
  style,
}: {
  children: React.ReactNode;
  tone?: "default" | "heat" | "cobalt" | "success" | "warning" | "danger";
  className?: string;
  style?: React.CSSProperties;
}) {
  const tones: Record<string, string> = {
    default:
      "bg-[color:var(--color-bg-secondary)] text-[color:var(--color-text-secondary)]",
    heat: "bg-[color:var(--color-primary-tint)] text-[color:var(--color-primary-strong)]",
    cobalt: "bg-[color:var(--color-accent-tint)] text-[color:var(--color-accent)]",
    success: "bg-[color:var(--color-success-light)] text-[color:var(--color-success)]",
    warning: "bg-[color:var(--color-warning-light)] text-[color:var(--color-warning)]",
    danger: "bg-[color:var(--color-danger-light)] text-[color:var(--color-danger)]",
  };
  return (
    <span
      style={style}
      className={twMerge(
        clsx(
          "inline-flex items-center gap-1 px-1.5 py-1 font-mono text-[10px] font-bold uppercase leading-none tracking-[0.14em]",
          tones[tone],
          className,
        ),
      )}
    >
      {children}
    </span>
  );
}

/** The oversized poster index numeral used on sections and steps. */
export function IndexNum({
  n,
  className,
}: {
  n: number;
  className?: string;
}) {
  return (
    <span aria-hidden className={twMerge(clsx("index-num", className))}>
      {String(n).padStart(2, "0")}
    </span>
  );
}
