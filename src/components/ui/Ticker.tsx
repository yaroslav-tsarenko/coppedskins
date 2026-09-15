"use client";

import React from "react";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

export interface TickerEntry {
  label: string;
  value?: string;
}

/**
 * The ticker strip — the recent-pickups marquee that runs across the black
 * top bar. The list is duplicated once so the translation loops seamlessly;
 * the copy is hidden from assistive tech and the whole strip pauses on hover
 * and on keyboard focus.
 *
 * It renders nothing when there is nothing real to show — an empty store does
 * not get a fake tape of imaginary sales.
 */
export function Ticker({
  entries,
  className,
}: {
  entries: TickerEntry[];
  className?: string;
}) {
  if (!entries.length) return null;

  const run = (hidden: boolean) => (
    <ul
      aria-hidden={hidden || undefined}
      className="flex shrink-0 items-center gap-6 pr-6"
    >
      {entries.map((e, i) => (
        <li key={`${e.label}-${i}`} className="flex items-center gap-2 whitespace-nowrap">
          <span aria-hidden className="h-1 w-1 bg-[color:var(--color-primary)]" />
          <span className="font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-[color:var(--color-text-secondary)]">
            {e.label}
          </span>
          {e.value ? (
            <span className="readout text-[11px] font-bold text-[color:var(--color-text)]">
              {e.value}
            </span>
          ) : null}
        </li>
      ))}
    </ul>
  );

  return (
    <div className={twMerge(clsx("ticker overflow-hidden", className))}>
      <div className="ticker-track">
        {run(false)}
        {run(true)}
      </div>
    </div>
  );
}
