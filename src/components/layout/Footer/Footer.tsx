"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { openCookieSettings } from "@/components/shared/CookieConsent/CookieConsent";
import { ArrowRight, Mail, ShieldCheck, ChevronDown, Globe, Check } from "lucide-react";
import Image from "next/image";
import { CoppedskinsLogo } from "../CoppedskinsLogo";
import { brand, brandAddressLine } from "@/lib/brand";
import { useCurrency } from "@/providers/CurrencyProvider";
import { Sticker } from "@/components/ui/Sticker";
import visaLogo from "@/assets/visa.svg";
import mastercardLogo from "@/assets/mastercard.svg";
import pciDssLogo from "@/assets/pci-dss.svg";

const paymentBadges = [
  { src: visaLogo, label: "Visa" },
  { src: mastercardLogo, label: "Mastercard" },
  { src: pciDssLogo, label: "PCI DSS Compliant" },
];

interface Group {
  key: string;
  title: string;
  items: Array<{ href: string; label: string }>;
}

const groups: Group[] = [
  {
    key: "shop",
    title: "Shop",
    items: [
      { href: "/store", label: "All skins" },
      { href: "/store?category=Rifles", label: "Rifles" },
      { href: "/store?category=Pistols", label: "Pistols" },
      { href: "/store?category=Knives", label: "Knives" },
      { href: "/store?category=Gloves", label: "Gloves" },
      { href: "/store?sort=newest", label: "New drops" },
      { href: "/store?sort=price_asc", label: "Best value" },
    ],
  },
  {
    key: "support",
    title: "Support",
    items: [
      { href: "/faq", label: "FAQ" },
      { href: "/how-it-works", label: "How it works" },
      { href: "/policies/shipping", label: "Delivery" },
      { href: "/policies/returns", label: "Refunds" },
      { href: "/my-purchases", label: "My purchases" },
      { href: "/contact", label: "Contact us" },
    ],
  },
  {
    key: "company",
    title: "Company",
    items: [
      { href: "/about", label: "About us" },
      { href: "/store?rarity=Covert", label: "Covert wall" },
      { href: "/store?rarity=Extraordinary", label: "Knife wall" },
      { href: "/policies", label: "All policies" },
    ],
  },
];

const legalLinks = [
  { href: "/policies/privacy", label: "Privacy" },
  { href: "/policies/terms", label: "Terms" },
  { href: "/policies/cookies", label: "Cookies" },
  { href: "/policies/returns", label: "Refund Policy" },
  { href: "/policies/payment", label: "Payment" },
  { href: "/policies/shipping", label: "Delivery" },
];

/** A footer column: a plain list from `md` up, a disclosure on phones. */
function LinkGroup({ group }: { group: Group }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[color:var(--color-border)] md:border-b-0">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between py-4 text-left md:hidden"
      >
        <span className="poster text-[15px] text-[color:var(--color-text)]">{group.title}</span>
        <ChevronDown
          size={15}
          className={`text-[color:var(--color-primary)] transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      <h3 className="hidden pb-4 md:block">
        <span className="microlabel text-[color:var(--color-text)]">{group.title}</span>
      </h3>
      <ul className={`grid grid-cols-1 gap-y-2 pb-4 md:gap-y-2.5 ${open ? "grid" : "hidden md:grid"}`}>
        {group.items.map((it) => (
          <li key={it.label}>
            <Link
              href={it.href}
              className="text-[13.5px] text-[color:var(--color-text-secondary)] transition-colors hover:text-[color:var(--color-primary)]"
            >
              {it.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Drop alerts. Posts to the same newsletter endpoint the rest of the site
 *  uses; the only promise made is the one the endpoint keeps. */
function DropAlerts() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "busy" | "done" | "error">("idle");
  const [message, setMessage] = useState<string | null>(null);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setState("busy");
    setMessage(null);
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim() }),
      });
      if (!res.ok) {
        setState("error");
        setMessage("That didn't go through. Check the address and try again.");
        return;
      }
      setState("done");
    } catch {
      setState("error");
      setMessage("Network error. Try again in a moment.");
    }
  }

  if (state === "done") {
    return (
      <p className="inline-flex items-center gap-2 bg-[color:var(--color-primary)] px-3 py-2.5 text-[13px] font-bold text-[color:var(--color-primary-ink)]">
        <Check size={15} /> You&apos;re on the list.
      </p>
    );
  }

  return (
    <form onSubmit={submit} className="w-full max-w-sm">
      <div className="flex items-stretch border border-[color:var(--color-border-strong)] bg-[color:var(--color-bg-elevated)]">
        <label htmlFor="drop-alerts" className="sr-only">
          Email address
        </label>
        <input
          id="drop-alerts"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className="h-11 min-w-0 flex-1 bg-transparent px-3 text-sm text-[color:var(--color-text)] placeholder:text-[color:var(--color-text-tertiary)] focus:outline-none"
        />
        <button
          type="submit"
          disabled={state === "busy"}
          className="shrink-0 bg-[color:var(--color-primary)] px-4 font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-[color:var(--color-primary-ink)] transition-colors hover:bg-[color:var(--color-primary-hover)] hover:text-[color:var(--color-primary-fg)] disabled:opacity-60"
        >
          {state === "busy" ? "…" : "Subscribe"}
        </button>
      </div>
      {message ? (
        <p className="mt-2 text-[12px] text-[color:var(--color-danger)]">{message}</p>
      ) : null}
    </form>
  );
}

/**
 * The black wall. Poster-black band, concrete type, heat hairlines between
 * tiers — the loudest the brand speaks, and the last thing on every page.
 */
export function Footer() {
  const t = useTranslations("footer");
  const { currency, symbol } = useCurrency();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="poster-band mt-auto" role="contentinfo">
      <hr className="tape-rule" />

      {/* ── Tier 1 — the statement + drop alerts ─────────────────── */}
      <div className="mx-auto grid max-w-[1360px] gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[1.2fr_1fr] lg:items-end lg:px-8">
        <div>
          <Link href="/" aria-label={brand.displayName}>
            <CoppedskinsLogo size={24} />
          </Link>
          <p className="poster mt-6 max-w-[12ch] text-[clamp(2rem,5vw,3.25rem)] text-[color:var(--color-text)]">
            {brand.tagline}
          </p>
          <a
            href={`mailto:${brand.contact.email}`}
            className="mt-6 inline-flex items-center gap-2 text-[13.5px] text-[color:var(--color-text-secondary)] transition-colors hover:text-[color:var(--color-primary)]"
          >
            <Mail size={14} />
            {brand.contact.email}
          </a>
        </div>

        <div className="lg:pb-2">
          <span className="microlabel text-[color:var(--color-text)]">Drop alerts</span>
          <p className="mb-4 mt-2 text-[13.5px] text-[color:var(--color-text-secondary)]">
            First dibs on new stock. Zero spam.
          </p>
          <DropAlerts />
          <Link
            href="/store"
            className="mt-5 inline-flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-[color:var(--color-primary)] hover:underline"
          >
            Shop the drop <ArrowRight size={13} />
          </Link>
        </div>
      </div>

      {/* ── Tier 2 — the columns ─────────────────────────────────── */}
      <div className="border-t border-[color:var(--color-border)]">
        <div className="mx-auto grid max-w-[1360px] grid-cols-1 gap-x-8 px-4 sm:px-6 md:grid-cols-4 md:py-10 lg:px-8">
          {groups.map((g) => (
            <LinkGroup key={g.key} group={g} />
          ))}
          <LinkGroup
            group={{
              key: "legal",
              title: "Legal",
              items: legalLinks,
            }}
          />
        </div>
      </div>

      {/* ── Tier 3 — the trust row ───────────────────────────────── */}
      <div className="border-t border-[color:var(--color-border)]">
        <div className="mx-auto flex max-w-[1360px] flex-col gap-4 px-4 py-6 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <div className="flex flex-wrap items-center gap-2">
            {paymentBadges.map(({ src, label }) => (
              <span
                key={label}
                title={label}
                className="relative inline-flex h-8 w-14 items-center justify-center rounded-[var(--radius-sm)] bg-white px-2.5 py-2"
              >
                <Image src={src} alt={label} fill sizes="56px" className="object-contain p-1.5" />
              </span>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Sticker tone="yellow" tilt="none" className="gap-1.5">
              <ShieldCheck size={12} /> Secure checkout
            </Sticker>
            <button
              type="button"
              onClick={openCookieSettings}
              className="font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-[color:var(--color-text-secondary)] transition-colors hover:text-[color:var(--color-primary)]"
            >
              Cookie preferences
            </button>
            <span className="inline-flex items-center gap-2 border border-[color:var(--color-border)] px-2.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-[color:var(--color-text-secondary)]">
              <Globe size={11} className="text-[color:var(--color-primary)]" />
              {currency} {symbol}
            </span>
          </div>
        </div>
      </div>

      {/* ── Tier 4 — the legal bar ───────────────────────────────── */}
      <div className="border-t border-[color:var(--color-border)]">
        <div className="mx-auto flex max-w-[1360px] flex-col gap-3 px-4 py-6 text-[color:var(--color-text-secondary)] sm:px-6 md:flex-row md:items-start md:justify-between lg:px-8">
          <div className="flex flex-col gap-1.5 text-[12px]">
            <p>{t("copyright", { year: currentYear, storeName: brand.displayName })}</p>
            <p className="text-[11.5px] text-[color:var(--color-text-tertiary)]">
              {brand.company.legalName} · Company No. {brand.company.number} · {brandAddressLine}
            </p>
            <p className="max-w-xl text-[11.5px] leading-relaxed text-[color:var(--color-text-tertiary)]">
              Not affiliated with Valve Corporation. Counter-Strike is a trademark of Valve
              Corporation. All skin names and images are the property of their respective owners.
            </p>
          </div>

          <nav aria-label="Legal" className="flex flex-wrap gap-x-4 gap-y-1.5 text-[11.5px]">
            {legalLinks.slice(0, 4).map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="transition-colors hover:text-[color:var(--color-primary)]"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
