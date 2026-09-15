"use client";

import { useState, useRef, useEffect } from "react";
import { useCurrency, type Currency } from "@/providers/CurrencyProvider";

const CURRENCIES: { code: Currency; symbol: string; label: string }[] = [
  { code: "EUR", symbol: "€", label: "EUR (€)" },
  { code: "USD", symbol: "$", label: "USD ($)" },
  { code: "GBP", symbol: "£", label: "GBP (£)" },
];

export function CurrencySwitcher() {
  const { currency, setCurrency } = useCurrency();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const current = CURRENCIES.find((c) => c.code === currency)!;

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={`Currency: ${current.label}`}
        className="focus-amber inline-flex items-center gap-1 rounded-[var(--radius-sm)] px-2 py-1 font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-current/80 transition-colors hover:text-current"
      >
        <span aria-hidden>{current.symbol}</span>
        <span>{current.code}</span>
      </button>
      {open && (
        <div
          role="listbox"
          className="absolute right-0 top-full z-50 mt-1.5 min-w-[132px] overflow-hidden border border-[color:var(--color-border-strong)] bg-[color:var(--color-bg-elevated)] shadow-[var(--shadow-md)]"
        >
          {CURRENCIES.map((c) => (
            <button
              key={c.code}
              role="option"
              aria-selected={c.code === currency}
              onClick={() => {
                setCurrency(c.code);
                setOpen(false);
              }}
              className={`block w-full px-3 py-2 text-left font-mono text-[11px] font-bold uppercase tracking-[0.12em] transition-colors ${
                c.code === currency
                  ? "bg-[color:var(--color-text)] text-[color:var(--color-text-inverse)]"
                  : "text-[color:var(--color-text)] hover:bg-[color:var(--color-primary-tint)]"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
