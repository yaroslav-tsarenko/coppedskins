// Skins priced above this are not sold. The cap is set in EUR but catalog
// prices are stored in USD, so it is converted at the current EUR→USD rate.
export const MAX_SELL_PRICE_EUR = 7449.57;

const FALLBACK_EUR_USD = 1.08;

export async function maxSellPriceUsd(): Promise<number> {
  let rate = FALLBACK_EUR_USD;
  try {
    const res = await fetch("https://api.frankfurter.dev/v1/latest?base=EUR&symbols=USD", {
      next: { revalidate: 3600 },
    });
    if (res.ok) {
      const usd = Number((await res.json())?.rates?.USD);
      if (Number.isFinite(usd) && usd > 0) rate = usd;
    }
  } catch {
    // Keep the fallback rate.
  }
  return Math.floor(MAX_SELL_PRICE_EUR * rate * 100) / 100;
}
