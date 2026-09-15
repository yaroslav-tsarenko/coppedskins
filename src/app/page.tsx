import type { Metadata } from "next";
import { Link } from "@/i18n/routing";
import { JsonLd } from "@/components/shared/SEO/JsonLd";
import { querySihCatalog, type SihCatalogItem } from "@/lib/sih/queries";
import { SihItemCard } from "@/components/sih/SihItemCard";
import { brand } from "@/lib/brand";
import { SectionHead } from "@/components/ui/SectionHead";
import { Sticker, MicroTag, IndexNum } from "@/components/ui/Sticker";
import { DropTimer } from "@/components/ui/DropTimer";
import { FloatTag } from "@/components/ui/FloatTag";
import { RarityTag, rarityVars } from "@/components/ui/RarityTag";
import { FloatFinder } from "@/components/home/FloatFinder";
import { RarityExplorer } from "@/components/home/RarityExplorer";
import { TopTen } from "@/components/home/TopTen";
import { HomePrice } from "@/components/home/HomePrice";
import { ArrowRight } from "lucide-react";

/** The catalogue is revalidated on this cadence, which is also the only real
 *  countdown on the page — the store never invents a deadline. */
export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `${brand.displayName} — ${brand.tagline}`,
    description: brand.description,
    alternates: { canonical: "/" },
    openGraph: { url: "/" },
  };
}

const CATEGORY_RAIL = [
  { label: "Rifles", href: "/store?category=Rifles" },
  { label: "Pistols", href: "/store?category=Pistols" },
  { label: "SMGs", href: "/store?category=SMGs" },
  { label: "Heavy", href: "/store?category=Heavy" },
  { label: "Knives", href: "/store?category=Knives" },
  { label: "Gloves", href: "/store?category=Gloves" },
  { label: "StatTrak™", href: "/store?stattrak=1" },
  { label: "Souvenir", href: "/store?souvenir=1" },
];

const STEPS = [
  { title: "Pick your skin", body: "Browse live stock. Every listing shows its exterior, rarity and price up front." },
  { title: "Pay securely", body: "Card checkout through our payment provider. No Steam password, ever." },
  { title: "Delivered to your inventory", body: "The item arrives as a Steam trade offer. Accept it and it's yours." },
];

const BENEFITS = [
  { tag: "Live stock", body: "Everything on the wall is in hand right now — nothing is listed that we cannot send." },
  { tag: "Exterior verified", body: "Each release carries its wear band on an authentication tag, printed on the card." },
  { tag: "No password", body: "Delivery runs through a Steam trade offer. We never ask for your account." },
  { tag: "Refund if undelivered", body: "If a trade fails on our side, you get your money back. That is the whole policy." },
];

export default async function HomePage() {
  const [fresh, premium, value, knives] = await Promise.all([
    querySihCatalog({ sort: "newest", perPage: 24 }),
    querySihCatalog({ sort: "price_desc", perPage: 12 }),
    querySihCatalog({ sort: "price_asc", perPage: 24 }),
    querySihCatalog({ sort: "price_desc", perPage: 8, categories: ["Knives", "Gloves"] }),
  ]);

  // The hero release: the best genuine discount we currently hold, falling
  // back to the newest listing when nothing is marked down.
  const discounted = [...fresh.items, ...premium.items, ...value.items]
    .filter((i) => i.discountPct != null && i.discountPct > 0)
    .sort((a, b) => (b.discountPct ?? 0) - (a.discountPct ?? 0));
  const hero: SihCatalogItem | undefined = discounted[0] ?? fresh.items[0];

  const sideTiles = [
    { label: "Best value", item: value.items[0] },
    { label: "Top of the knife wall", item: knives.items[0] },
    { label: "Newest in", item: fresh.items[0] },
  ].filter((t) => t.item) as { label: string; item: SihCatalogItem }[];

  const deals = discounted.slice(0, 6);
  const underTen = value.items.filter((i) => i.price <= 10).slice(0, 6);

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: brand.displayName,
          legalName: brand.company.legalName,
          alternateName: [brand.domain],
          url: brand.url,
          sameAs: [brand.url],
          description: brand.description,
        }}
      />

      {/* ── HERO — a release poster, not a banner ─────────────────── */}
      <section className="border-b border-[color:var(--color-border)] bg-[color:var(--color-bg)]">
        <div className="mx-auto w-full max-w-[1360px] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
          <div className="grid gap-x-12 gap-y-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <Sticker tone="black" tilt="left" className="mb-6">
                Live stock · {fresh.total.toLocaleString()} skins on the floor
              </Sticker>

              <h1 className="poster text-[clamp(2.75rem,8vw,5.25rem)] text-[color:var(--color-text)]">
                Fresh <span className="heat-plate">drops</span> daily.
              </h1>

              <p className="mt-5 max-w-[46ch] text-[15.5px] leading-relaxed text-[color:var(--color-text-secondary)]">
                Real CS2 skins, in stock and priced in the open. Pick one, pay once, and it lands in
                your Steam inventory as a trade offer — no password, no waiting room.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href="/store"
                  className="focus-amber inline-flex h-12 items-center gap-2 rounded-[var(--radius-md)] bg-[color:var(--color-primary-strong)] px-6 text-sm font-bold text-[color:var(--color-primary-fg)] shadow-[var(--shadow-sm)] transition-all hover:bg-[color:var(--color-primary-hover)] hover:shadow-[var(--shadow-md)] active:translate-y-px active:shadow-none"
                >
                  Shop the drop <ArrowRight size={16} />
                </Link>
                <Link
                  href="/how-it-works"
                  className="focus-amber inline-flex h-12 items-center gap-2 rounded-[var(--radius-md)] border border-[color:var(--color-text)] px-6 text-sm font-bold text-[color:var(--color-text)] transition-colors hover:bg-[color:var(--color-text)] hover:text-[color:var(--color-text-inverse)]"
                >
                  How it works
                </Link>
              </div>

              <ul className="mt-7 flex flex-wrap gap-2">
                <li><MicroTag tone="heat">Instant Steam delivery</MicroTag></li>
                <li><MicroTag>Verified exterior</MicroTag></li>
                <li><MicroTag>Secure card payment</MicroTag></li>
              </ul>
            </div>

            {/* The featured release */}
            {hero ? (
              <Link
                href={`/store/${hero.slug}`}
                style={rarityVars(hero.rarityColor)}
                className="card-lift group relative block overflow-hidden rounded-[var(--radius-lg)] border border-[color:var(--color-text)] bg-[color:var(--color-bg-elevated)]"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-[color:var(--color-bg-secondary)]">
                  <span aria-hidden className="rarity-wash pointer-events-none absolute inset-0" />
                  {hero.imageUrl ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={hero.imageUrl}
                      alt={hero.name}
                      className="absolute inset-0 h-full w-full -rotate-6 object-contain p-8 transition-transform duration-[var(--dur-slow)] group-hover:-rotate-3 group-hover:scale-105"
                    />
                  ) : null}

                  <div className="absolute left-4 top-4 flex flex-col items-start gap-2">
                    <Sticker tone="heat" pop>
                      {hero.discountPct != null && hero.discountPct > 0
                        ? `−${hero.discountPct}% vs Steam`
                        : "Just listed"}
                    </Sticker>
                    <DropTimer everySeconds={60} label="Prices refresh in" tone="yellow" />
                  </div>
                </div>

                <div className="grid gap-4 border-t border-[color:var(--color-border)] p-4 sm:grid-cols-[1.2fr_1fr] sm:p-5">
                  <div>
                    <div className="flex flex-wrap items-center gap-1.5">
                      <RarityTag rarity={hero.rarity} color={hero.rarityColor} />
                      {hero.isStatTrak ? <MicroTag tone="warning">StatTrak™</MicroTag> : null}
                      {hero.phase ? <MicroTag>{hero.phase}</MicroTag> : null}
                    </div>
                    <p className="microlabel mt-3">{hero.weapon ?? hero.category}</p>
                    <h2 className="poster mt-1 text-[clamp(1.5rem,3vw,2rem)] text-[color:var(--color-text)]">
                      {hero.skinName ?? hero.name}
                    </h2>
                    <p className="poster mt-3 text-[clamp(1.75rem,4vw,2.5rem)] leading-none text-[color:var(--color-text)]">
                      <HomePrice usd={hero.price} />
                    </p>
                  </div>

                  <FloatTag
                    exterior={hero.exterior}
                    compact
                    rows={[
                      { label: "Rarity", value: hero.rarity ?? "—" },
                      hero.count > 0 && { label: "In stock", value: `${hero.count}` },
                    ]}
                  />
                </div>
              </Link>
            ) : null}
          </div>

          {/* Side tiles — three real picks, each labelled for what it is */}
          {sideTiles.length > 0 ? (
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {sideTiles.map(({ label, item }) => (
                <Link
                  key={`${label}-${item.slug}`}
                  href={`/store/${item.slug}`}
                  style={rarityVars(item.rarityColor)}
                  className="card-lift group relative flex items-center gap-3 overflow-hidden rounded-[var(--radius-lg)] border border-[color:var(--color-border)] bg-[color:var(--color-bg-elevated)] p-3"
                >
                  <span className="rarity-spine absolute inset-y-0 left-0 w-[3px]" aria-hidden />
                  <span className="relative h-14 w-20 shrink-0 bg-[color:var(--color-bg-secondary)]">
                    {item.imageUrl ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={item.imageUrl} alt="" className="h-full w-full object-contain p-1" />
                    ) : null}
                  </span>
                  <span className="min-w-0">
                    <span className="microlabel block">{label}</span>
                    <span className="poster mt-1 block truncate text-[15px] text-[color:var(--color-text)]">
                      {item.skinName ?? item.name}
                    </span>
                    <span className="poster tnum mt-1 block text-[17px] leading-none text-[color:var(--color-text)]">
                      <HomePrice usd={item.price} />
                    </span>
                  </span>
                </Link>
              ))}
            </div>
          ) : null}

          {/* Category quick-rail */}
          <div className="mt-8 flex flex-wrap gap-2">
            {CATEGORY_RAIL.map((c) => (
              <Link
                key={c.label}
                href={c.href}
                className="inline-flex items-center border border-[color:var(--color-border-strong)] bg-[color:var(--color-bg-elevated)] px-3 py-2 font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-[color:var(--color-text)] transition-colors hover:border-[color:var(--color-text)] hover:bg-[color:var(--color-primary-tint)]"
              >
                {c.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="mx-auto w-full max-w-[1360px] px-4 sm:px-6 lg:px-8">
        {/* ── 01 NEW DROPS ───────────────────────────────────────── */}
        <section className="py-12 lg:py-16">
          <SectionHead
            index={1}
            eyebrow="Just listed"
            title={<>New drops</>}
            action={
              <Link
                href="/store?sort=newest"
                className="inline-flex items-center gap-1.5 border-b-2 border-[color:var(--color-primary)] pb-0.5 text-[13px] font-bold text-[color:var(--color-text)] hover:border-[color:var(--color-text)]"
              >
                Shop all <ArrowRight size={14} />
              </Link>
            }
          />
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {fresh.items.slice(0, 6).map((item, i) => (
              <div key={item.slug} className="animate-fadeInUp" data-stagger={(i % 6) + 1}>
                <SihItemCard item={item} />
              </div>
            ))}
          </div>
        </section>

        {/* ── 02 DEALS — only when something is actually marked down ── */}
        {deals.length > 0 ? (
          <section className="py-12 lg:py-16">
            <SectionHead
              index={2}
              eyebrow="Under Steam price"
              title={<>Marked <span className="heat-plate">down</span></>}
              action={<DropTimer everySeconds={60} label="Prices refresh in" tone="quiet" />}
            />
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
              {deals.map((item) => (
                <SihItemCard key={item.slug} item={item} />
              ))}
            </div>
          </section>
        ) : null}

        {/* ── 03 FLOAT FINDER ────────────────────────────────────── */}
        <section className="py-12 lg:py-16">
          <div className="grid gap-x-12 gap-y-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <SectionHead
              index={3}
              eyebrow="Wear finder"
              title={<>Know your <span className="heat-plate">float</span></>}
              lede="Exterior decides how a skin actually looks — and what it costs. Drag the scale to the wear band you want and see what is on the floor right now."
            />
            <FloatFinder />
          </div>
        </section>
      </div>

      {/* ── 04 KNIFE WALL — the poster-black band ─────────────────── */}
      {knives.items.length > 0 ? (
        <section className="poster-band border-y border-[color:var(--color-border)]">
          <div className="mx-auto w-full max-w-[1360px] px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
            <SectionHead
              index={4}
              eyebrow="Knives & gloves"
              title={<>The knife wall</>}
              lede="The top of the floor: the most expensive knives and gloves in stock."
              action={
                <Link
                  href="/store?category=Knives"
                  className="inline-flex items-center gap-1.5 border-b-2 border-[color:var(--color-primary)] pb-0.5 text-[13px] font-bold text-[color:var(--color-text)] hover:border-[color:var(--color-text)]"
                >
                  See the wall <ArrowRight size={14} />
                </Link>
              }
            />
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
              {knives.items.slice(0, 8).map((item) => (
                <SihItemCard key={item.slug} item={item} />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <div className="mx-auto w-full max-w-[1360px] px-4 sm:px-6 lg:px-8">
        {/* ── 05 RARITY EXPLORER ─────────────────────────────────── */}
        <section className="py-12 lg:py-16">
          <SectionHead
            index={5}
            eyebrow="By grade"
            title={<>Pick a rarity</>}
            lede="Mil-Spec blue through Covert red, plus the knife and glove tier. Tap a grade to preview what is in stock."
          />
          <RarityExplorer className="mt-8" />
        </section>

        {/* ── 06 UNDER $10 ───────────────────────────────────────── */}
        {underTen.length > 0 ? (
          <section className="py-12 lg:py-16">
            <SectionHead
              index={6}
              eyebrow="Entry level"
              title={<>Under $10</>}
              action={
                <Link
                  href="/store?priceMax=10&sort=price_asc"
                  className="inline-flex items-center gap-1.5 border-b-2 border-[color:var(--color-primary)] pb-0.5 text-[13px] font-bold text-[color:var(--color-text)] hover:border-[color:var(--color-text)]"
                >
                  Shop the rail <ArrowRight size={14} />
                </Link>
              }
            />
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
              {underTen.map((item) => (
                <SihItemCard key={item.slug} item={item} />
              ))}
            </div>
          </section>
        ) : null}

        {/* ── 07 TOP 10 BY PRICE ─────────────────────────────────── */}
        {premium.items.length > 0 ? (
          <section className="py-12 lg:py-16">
            <SectionHead
              index={7}
              eyebrow="The board"
              title={<>Top 10 by price</>}
              lede="The ten most expensive releases in stock, ranked. No votes, no hype — just the price tag."
            />
            <TopTen items={premium.items.slice(0, 10)} className="mt-8" />
          </section>
        ) : null}

        {/* ── 08 HOW IT WORKS ────────────────────────────────────── */}
        <section className="py-12 lg:py-16">
          <SectionHead index={8} eyebrow="Three steps" title={<>How it works</>} />
          <ol className="mt-8 grid gap-px border border-[color:var(--color-border)] bg-[color:var(--color-border)] sm:grid-cols-3">
            {STEPS.map((s, i) => (
              <li key={s.title} className="bg-[color:var(--color-bg-elevated)] p-6">
                <IndexNum n={i + 1} className="text-[34px] text-[color:var(--color-primary)]" />
                <h3 className="poster mt-3 text-[19px] text-[color:var(--color-text)]">{s.title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-[color:var(--color-text-secondary)]">
                  {s.body}
                </p>
              </li>
            ))}
          </ol>

          <ul className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {BENEFITS.map((b) => (
              <li
                key={b.tag}
                className="border border-[color:var(--color-border)] bg-[color:var(--color-bg-elevated)] p-4"
              >
                <MicroTag tone="heat">{b.tag}</MicroTag>
                <p className="mt-3 text-[13.5px] leading-relaxed text-[color:var(--color-text-secondary)]">
                  {b.body}
                </p>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
}
