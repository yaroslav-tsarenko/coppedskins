import { Suspense } from "react";
import type { Metadata } from "next";
import { getSihFacets } from "@/lib/sih/queries";
import { SihCatalogClient } from "@/components/sih/SihCatalogClient";
import { Sticker } from "@/components/ui/Sticker";
import { brand } from "@/lib/brand";

export const metadata: Metadata = {
  title: `Store — ${brand.displayName}`,
  description:
    "Buy real CS2 skins delivered straight to your Steam inventory. Live stock, live prices, verified exteriors.",
};

export const dynamic = "force-dynamic";

export default async function StorePage() {
  const facets = await getSihFacets();

  return (
    <>
      <header className="border-b border-[color:var(--color-border)] bg-[color:var(--color-bg)]">
        <div className="mx-auto w-full max-w-[var(--max-width)] px-4 py-8 sm:px-6 lg:px-8">
          <hr className="tape-rule" />
          <div className="mt-4 flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="eyebrow text-[color:var(--color-text)]">The floor</span>
              <h1 className="poster mt-2 text-[clamp(2rem,5vw,3.25rem)] text-[color:var(--color-text)]">
                Every skin <span className="heat-plate">in stock</span>
              </h1>
              <p className="mt-3 max-w-[54ch] text-[14.5px] leading-relaxed text-[color:var(--color-text-secondary)]">
                Live stock, priced in the open and delivered to your Steam inventory as a trade
                offer. Filter by grade, wear or budget — the URL keeps your view, so you can share it.
              </p>
            </div>
            <Sticker tone="black" tilt="right" className="mb-1">
              Delivered via Steam trade
            </Sticker>
          </div>
        </div>
      </header>
      <Suspense fallback={null}>
        <SihCatalogClient facets={facets} />
      </Suspense>
    </>
  );
}
