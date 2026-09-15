"use client";

import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

function pad(n: number) {
  return String(Math.max(0, Math.floor(n))).padStart(2, "0");
}

/**
 * A countdown chip in the language of release culture.
 *
 * It only ever counts down to a real deadline passed in by the caller — the
 * store never manufactures scarcity, so there is no "ends soon" without an
 * actual end. While the clock is running it renders mono digits on the given
 * tone; when it hits zero it renders `endedLabel` and stops.
 */
export function DropTimer({
  /** Absolute deadline. */
  target,
  /** Or a rolling window in seconds (e.g. a cache revalidate interval). */
  everySeconds,
  label,
  endedLabel = "Refreshing…",
  tone = "yellow",
  className,
}: {
  target?: Date | string | number;
  everySeconds?: number;
  label?: string;
  endedLabel?: string;
  tone?: "yellow" | "heat" | "black" | "quiet";
  className?: string;
}) {
  const [left, setLeft] = useState<number | null>(null);

  useEffect(() => {
    const compute = () => {
      if (everySeconds && everySeconds > 0) {
        const ms = everySeconds * 1000;
        return ms - (Date.now() % ms);
      }
      if (target == null) return null;
      return new Date(target).getTime() - Date.now();
    };
    setLeft(compute());
    const id = setInterval(() => setLeft(compute()), 1000);
    return () => clearInterval(id);
  }, [target, everySeconds]);

  const tones: Record<string, string> = {
    yellow: "bg-[color:var(--color-gold)] text-[#171512]",
    heat: "bg-[color:var(--color-primary)] text-[color:var(--color-primary-ink)]",
    black: "bg-[color:var(--color-text)] text-[color:var(--color-text-inverse)]",
    quiet:
      "bg-[color:var(--color-bg-secondary)] text-[color:var(--color-text)] shadow-[inset_0_0_0_1px_var(--color-border)]",
  };

  // Server render and the first client paint must agree, so the digits only
  // appear once the effect has measured the clock.
  const digits = (() => {
    if (left == null) return "--:--:--";
    if (left <= 0) return null;
    const s = left / 1000;
    const h = s / 3600;
    const m = (s % 3600) / 60;
    const sec = s % 60;
    return `${pad(h)}:${pad(m)}:${pad(sec)}`;
  })();

  return (
    <span
      className={twMerge(
        clsx(
          "inline-flex items-center gap-2 px-2 py-1 font-mono text-[10px] font-bold uppercase leading-none tracking-[0.14em]",
          tones[tone],
          className,
        ),
      )}
      role="timer"
      aria-live="off"
    >
      {label ? <span>{label}</span> : null}
      <span className="tnum tracking-[0.08em]">{digits ?? endedLabel}</span>
    </span>
  );
}
