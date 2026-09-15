"use client";

import { useState, useEffect } from "react";
import NextLink from "next/link";
import Image from "next/image";
import { Link, useRouter, usePathname } from "@/i18n/routing";
import {
  Search,
  Menu,
  X,
  ChevronDown,
  LogOut,
  User as UserIcon,
  Link2,
  Shield,
  Package,
} from "lucide-react";
import { useAuth } from "@/providers/AuthProvider";
import { AnimatePresence, motion } from "framer-motion";
import { CoppedskinsLogo } from "../CoppedskinsLogo";
import { CurrencySwitcher } from "./CurrencySwitcher";
import { ThemeToggle } from "./ThemeToggle";
import { Ticker } from "@/components/ui/Ticker";
import { brand } from "@/lib/brand";

/* Category tabs map onto the real catalogue facets, so every tab lands on a
   populated grid rather than an empty state. */
const TABS: { label: string; href: string }[] = [
  { label: "All", href: "/store" },
  { label: "Rifles", href: "/store?category=Rifles" },
  { label: "Pistols", href: "/store?category=Pistols" },
  { label: "SMGs", href: "/store?category=SMGs" },
  { label: "Heavy", href: "/store?category=Heavy" },
  { label: "Knives", href: "/store?category=Knives" },
  { label: "Gloves", href: "/store?category=Gloves" },
  { label: "Best value", href: "/store?sort=price_asc" },
  { label: "New", href: "/store?sort=newest" },
];

/* Rarity quick-filters — the colour chips that open the mega-panel. */
const RARE_LINKS: { label: string; href: string; color: string }[] = [
  { label: "Mil-Spec", href: "/store?rarity=Mil-Spec%20Grade", color: "#4b69ff" },
  { label: "Restricted", href: "/store?rarity=Restricted", color: "#8847ff" },
  { label: "Classified", href: "/store?rarity=Classified", color: "#d32ce6" },
  { label: "Covert", href: "/store?rarity=Covert", color: "#eb4b4b" },
  { label: "Extraordinary", href: "/store?rarity=Extraordinary", color: "#ffd700" },
  { label: "Contraband", href: "/store?rarity=Contraband", color: "#e4ae39" },
];

/* The top strip runs the things the store can actually promise. It is the
   ticker of release culture without inventing a feed of imaginary sales. */
const STRIP = [
  { label: "Instant Steam delivery" },
  { label: "Live stock · live prices" },
  { label: "Verified exterior on every listing" },
  { label: "Refund if the trade fails" },
  { label: "Secure payment" },
];

export function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const { user, role, signOut } = useAuth();

  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        setScrolled((prev) => (prev ? y > 2 : y > 8));
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const submitSearch = (q: string) => {
    const term = q.trim();
    setMobileOpen(false);
    router.push(term ? `/store?q=${encodeURIComponent(term)}` : "/store");
  };

  const currentPath = pathname || "/";
  const authHref = `/auth?next=${encodeURIComponent(currentPath)}`;
  const isAdmin = role === "ADMIN" || role === "SUPER_ADMIN";
  const displayName = user?.steam?.personaName || user?.name || user?.email || "Trader";
  const avatar = user?.steam?.avatarFull || user?.steam?.avatar || null;

  const tabActive = (href: string) => {
    const [path, qs] = href.split("?");
    if (currentPath !== path) return false;
    if (!qs) return true;
    // Only mark a filtered tab active when its parameter is actually applied.
    if (typeof window === "undefined") return false;
    const current = new URLSearchParams(window.location.search);
    const target = new URLSearchParams(qs);
    for (const [k, v] of target) if (current.get(k) !== v) return false;
    return true;
  };

  const searchForm = (variant: "desktop" | "mobile") => (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        submitSearch(query);
      }}
      className="well flex h-10 items-center overflow-hidden pl-3"
    >
      <Search size={16} className="shrink-0 text-[color:var(--color-text-tertiary)]" />
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={
          variant === "desktop"
            ? "Search — AWP Dragon Lore, ★ Karambit, AK-47 Redline…"
            : "Search skins"
        }
        aria-label="Search skins"
        className="min-w-0 flex-1 bg-transparent px-3 text-[13.5px] text-[color:var(--color-text)] placeholder:text-[color:var(--color-text-tertiary)] focus:outline-none"
      />
      <button
        type="submit"
        aria-label="Search"
        className="inline-flex h-10 shrink-0 items-center bg-[color:var(--color-primary-strong)] px-4 font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-[color:var(--color-primary-fg)] transition-colors hover:bg-[color:var(--color-primary-hover)]"
      >
        Search
      </button>
    </form>
  );

  const accountLinks = [
    { href: "/account", icon: UserIcon, label: "Profile" },
    { href: "/my-purchases", icon: Package, label: "My purchases" },
    { href: "/account/trade-url", icon: Link2, label: "Trade URL settings" },
  ];

  return (
    <>
      <header className="sticky top-0 z-40 w-full" role="banner">
        {/* ── 1. The poster-black strip ─────────────────────────────── */}
        <div className="poster-band">
          <div className="mx-auto flex h-9 max-w-[1360px] items-center gap-4 px-4 sm:px-6 lg:px-8">
            <Ticker entries={STRIP} className="min-w-0 flex-1" />
            <div className="flex shrink-0 items-center gap-2">
              <CurrencySwitcher />
              <span className="h-3 w-px bg-[color:var(--color-border-strong)]" aria-hidden />
              <ThemeToggle />
            </div>
          </div>
        </div>

        {/* ── 2. The concrete main bar ──────────────────────────────── */}
        <div className="border-b border-[color:var(--color-border)] bg-[color:var(--color-bg)]">
          <div
            className={[
              "mx-auto flex max-w-[1360px] items-center gap-3 px-4 transition-[padding] duration-[var(--dur-slow)] sm:px-6 lg:gap-6 lg:px-8",
              scrolled ? "py-2" : "py-3",
            ].join(" ")}
          >
            <button
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              className="focus-amber inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-[var(--radius-sm)] text-[color:var(--color-text)] hover:bg-[color:var(--color-bg-secondary)] lg:hidden"
            >
              <Menu size={22} />
            </button>

            <Link href="/" aria-label={`${brand.displayName} — home`} className="shrink-0">
              <CoppedskinsLogo size={scrolled ? 19 : 22} />
            </Link>

            <div className="relative hidden min-w-0 flex-1 lg:block">{searchForm("desktop")}</div>

            <div className="ml-auto flex items-center gap-2 lg:ml-0">
              {!user ? (
                <Link
                  href={authHref}
                  className="focus-amber inline-flex h-10 items-center gap-2 rounded-[var(--radius-md)] bg-[color:var(--color-primary-strong)] px-4 text-[13px] font-bold text-[color:var(--color-primary-fg)] transition-colors hover:bg-[color:var(--color-primary-hover)]"
                >
                  <UserIcon size={15} />
                  <span>Sign in</span>
                </Link>
              ) : (
                <div
                  className="relative"
                  onMouseEnter={() => setAccountOpen(true)}
                  onMouseLeave={() => setAccountOpen(false)}
                >
                  <button
                    type="button"
                    onClick={() => setAccountOpen((v) => !v)}
                    aria-haspopup="menu"
                    aria-expanded={accountOpen}
                    className="focus-amber inline-flex h-10 items-center gap-2 rounded-[var(--radius-md)] border border-[color:var(--color-border-strong)] bg-[color:var(--color-bg-elevated)] py-1 pl-1 pr-2.5 transition-colors hover:border-[color:var(--color-text)]"
                  >
                    <span className="relative inline-flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-[var(--radius-sm)] bg-[color:var(--color-primary-tint)] text-[color:var(--color-primary-strong)]">
                      {avatar ? (
                        <Image src={avatar} alt="" fill sizes="32px" className="object-cover" />
                      ) : (
                        <UserIcon size={16} />
                      )}
                    </span>
                    <span className="hidden max-w-[120px] truncate text-[13px] font-semibold text-[color:var(--color-text)] sm:inline">
                      {displayName}
                    </span>
                    <ChevronDown size={14} className="hidden text-[color:var(--color-text-tertiary)] sm:inline" />
                  </button>
                  <AnimatePresence>
                    {accountOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 4 }}
                        transition={{ duration: 0.14 }}
                        role="menu"
                        className="absolute right-0 top-full z-40 mt-1.5 w-64 overflow-hidden rounded-[var(--radius-lg)] border border-[color:var(--color-text)] bg-[color:var(--color-bg-elevated)] p-2 shadow-[var(--shadow-lg)]"
                      >
                        <div className="mb-2 flex items-center gap-3 bg-[color:var(--color-bg-secondary)] p-3">
                          <span className="relative inline-flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-[var(--radius-sm)] bg-[color:var(--color-primary-tint)] text-[color:var(--color-primary-strong)]">
                            {avatar ? (
                              <Image src={avatar} alt="" fill sizes="40px" className="object-cover" />
                            ) : (
                              <UserIcon size={18} />
                            )}
                          </span>
                          <span className="min-w-0">
                            <span className="block truncate text-sm font-bold text-[color:var(--color-text)]">
                              {displayName}
                            </span>
                            <span className="microlabel block text-[color:var(--color-primary-strong)]">
                              {user.steam?.tradeUrlVerified ? "Trade ready" : "Trade URL needed"}
                            </span>
                          </span>
                        </div>
                        {accountLinks.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            role="menuitem"
                            onClick={() => setAccountOpen(false)}
                            className="flex items-center gap-2.5 rounded-[var(--radius-sm)] px-2.5 py-2 text-[13px] font-medium text-[color:var(--color-text)] transition-colors hover:bg-[color:var(--color-primary-tint)]"
                          >
                            <item.icon size={15} className="text-[color:var(--color-primary-strong)]" />
                            {item.label}
                          </Link>
                        ))}
                        {isAdmin && (
                          <NextLink
                            href="/admin"
                            role="menuitem"
                            onClick={() => setAccountOpen(false)}
                            className="flex items-center gap-2.5 rounded-[var(--radius-sm)] px-2.5 py-2 text-[13px] font-medium text-[color:var(--color-text)] transition-colors hover:bg-[color:var(--color-primary-tint)]"
                          >
                            <Shield size={15} className="text-[color:var(--color-primary-strong)]" />
                            Admin panel
                          </NextLink>
                        )}
                        <div className="my-1.5 h-px bg-[color:var(--color-border)]" />
                        <button
                          type="button"
                          onClick={() => {
                            setAccountOpen(false);
                            signOut();
                          }}
                          role="menuitem"
                          className="flex w-full items-center gap-2.5 rounded-[var(--radius-sm)] px-2.5 py-2 text-[13px] font-medium text-[color:var(--color-text)] transition-colors hover:bg-[color:var(--color-danger-light)] hover:text-[color:var(--color-danger)]"
                        >
                          <LogOut size={15} />
                          Sign out
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )}
            </div>
          </div>

          {/* ── 3. Flat uppercase tabs, heat underline on the active one ── */}
          <div className="hidden border-t border-[color:var(--color-border)] lg:block">
            <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
              <nav className="flex items-center gap-6 overflow-x-auto" aria-label="Primary">
                {TABS.map((t) => {
                  const active = tabActive(t.href);
                  return (
                    <Link
                      key={t.href}
                      href={t.href}
                      aria-current={active ? "page" : undefined}
                      className={[
                        "-mb-px shrink-0 border-b-[3px] py-2.5 font-mono text-[11px] font-bold uppercase tracking-[0.16em] transition-colors",
                        active
                          ? "border-[color:var(--color-primary)] text-[color:var(--color-text)]"
                          : "border-transparent text-[color:var(--color-text-secondary)] hover:text-[color:var(--color-text)]",
                      ].join(" ")}
                    >
                      {t.label}
                    </Link>
                  );
                })}
              </nav>
            </div>
          </div>

          {/* Search — mobile row */}
          <div className="border-t border-[color:var(--color-border)] px-4 py-2 lg:hidden">
            {searchForm("mobile")}
          </div>
        </div>
      </header>

      {/* ── Mobile drawer ──────────────────────────────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-50 bg-[#171512]/70 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />
            <motion.aside
              className="fixed inset-y-0 left-0 z-50 flex w-[88%] max-w-sm flex-col border-r-2 border-[color:var(--color-text)] bg-[color:var(--color-bg)] lg:hidden"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 32, stiffness: 340 }}
            >
              <div className="flex items-center justify-between border-b border-[color:var(--color-border)] px-5 py-4">
                <CoppedskinsLogo size={19} />
                <button
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close menu"
                  className="focus-amber inline-flex h-9 w-9 items-center justify-center rounded-[var(--radius-sm)] text-[color:var(--color-text-secondary)] hover:bg-[color:var(--color-bg-secondary)] hover:text-[color:var(--color-text)]"
                >
                  <X size={18} />
                </button>
              </div>

              <nav className="flex-1 overflow-y-auto" aria-label="Mobile">
                <ul>
                  {TABS.map((t) => (
                    <li key={t.href} className="border-b border-[color:var(--color-border)]">
                      <Link
                        href={t.href}
                        onClick={() => setMobileOpen(false)}
                        className="poster block px-5 py-3.5 text-[18px] text-[color:var(--color-text)] hover:bg-[color:var(--color-primary-tint)]"
                      >
                        {t.label}
                      </Link>
                    </li>
                  ))}
                </ul>

                <div className="px-5 pt-5">
                  <span className="microlabel">By rarity</span>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {RARE_LINKS.map((r) => (
                      <Link
                        key={r.label}
                        href={r.href}
                        onClick={() => setMobileOpen(false)}
                        className="inline-flex items-center gap-1.5 border border-[color:var(--color-border)] px-2 py-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.12em] text-[color:var(--color-text)]"
                      >
                        <span className="h-2 w-2 rounded-full" style={{ background: r.color }} />
                        {r.label}
                      </Link>
                    ))}
                  </div>
                </div>

                {user && (
                  <ul className="mt-5 border-t border-[color:var(--color-border)]">
                    {accountLinks.map((item) => (
                      <li key={item.href} className="border-b border-[color:var(--color-border)]">
                        <Link
                          href={item.href}
                          onClick={() => setMobileOpen(false)}
                          className="flex items-center gap-3 px-5 py-3 text-[15px] font-medium text-[color:var(--color-text)] hover:bg-[color:var(--color-bg-secondary)]"
                        >
                          <item.icon size={17} className="text-[color:var(--color-primary-strong)]" />
                          {item.label}
                        </Link>
                      </li>
                    ))}
                    {isAdmin && (
                      <li className="border-b border-[color:var(--color-border)]">
                        <NextLink
                          href="/admin"
                          onClick={() => setMobileOpen(false)}
                          className="flex items-center gap-3 px-5 py-3 text-[15px] font-medium text-[color:var(--color-text)] hover:bg-[color:var(--color-bg-secondary)]"
                        >
                          <Shield size={17} className="text-[color:var(--color-primary-strong)]" />
                          Admin panel
                        </NextLink>
                      </li>
                    )}
                  </ul>
                )}
              </nav>

              <div className="border-t border-[color:var(--color-border)] px-5 py-4">
                <div className="mb-3 flex items-center gap-2">
                  <ThemeToggle />
                  <span className="h-4 w-px bg-[color:var(--color-border)]" />
                  <CurrencySwitcher />
                </div>
                {user ? (
                  <button
                    type="button"
                    onClick={() => {
                      setMobileOpen(false);
                      signOut();
                    }}
                    className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-[var(--radius-md)] border border-[color:var(--color-text)] text-sm font-bold text-[color:var(--color-text)]"
                  >
                    <LogOut size={16} /> Sign out
                  </button>
                ) : (
                  <Link
                    href={authHref}
                    onClick={() => setMobileOpen(false)}
                    className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-[var(--radius-md)] bg-[color:var(--color-primary-strong)] text-sm font-bold text-[color:var(--color-primary-fg)]"
                  >
                    <UserIcon size={16} /> Sign in
                  </Link>
                )}
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
