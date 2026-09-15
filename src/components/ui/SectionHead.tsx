import React from "react";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";
import { IndexNum } from "./Sticker";

/**
 * The section opener: a heat tape-rule, an index numeral and a stencil
 * eyebrow on it, then the poster title. The right-hand slot takes the "shop
 * all" link so the heading and its action share one baseline instead of
 * stacking into a centred block.
 */
export function SectionHead({
  index,
  eyebrow,
  title,
  lede,
  action,
  rule = "heat",
  className,
}: {
  index?: number;
  eyebrow?: string;
  title: React.ReactNode;
  lede?: React.ReactNode;
  action?: React.ReactNode;
  rule?: "heat" | "black" | "none";
  className?: string;
}) {
  return (
    <div className={twMerge(clsx("w-full", className))}>
      {rule !== "none" ? (
        <hr className={rule === "heat" ? "tape-rule" : "tape-rule-black"} />
      ) : null}

      {index !== undefined || eyebrow ? (
        <div className="mt-3 flex items-center gap-3">
          {index !== undefined ? <IndexNum n={index} className="text-[13px]" /> : null}
          {eyebrow ? (
            <span className="eyebrow text-[color:var(--color-text)]">{eyebrow}</span>
          ) : null}
        </div>
      ) : null}

      <div className="mt-2 flex flex-wrap items-end justify-between gap-x-8 gap-y-3">
        <h2 className="section-title max-w-[18ch] text-balance">{title}</h2>
        {action ? <div className="pb-1">{action}</div> : null}
      </div>

      {lede ? (
        <p className="mt-3 max-w-[58ch] text-[15px] leading-relaxed text-[color:var(--color-text-secondary)]">
          {lede}
        </p>
      ) : null}
    </div>
  );
}
