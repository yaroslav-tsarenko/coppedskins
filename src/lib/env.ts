import { z } from "zod";

// Centralized, validated server environment. Import `env` from here instead of
// reading process.env directly so that a misconfiguration fails loudly at the
// boundary rather than silently deep inside the money flow.
//
// This module is server-only. It must never be imported from a client
// component — it reads secrets (SIH_API_KEY, CRON_SECRET, …).

const bool = (def: boolean) =>
  z
    .string()
    .optional()
    .transform((v) => (v == null || v === "" ? def : v === "true" || v === "1"));

const num = (def: number) =>
  z
    .string()
    .optional()
    .transform((v) => (v == null || v === "" ? def : Number(v)))
    .pipe(z.number().finite());

// Per-field schemas so that reading one variable never forces validation of an
// unrelated one. This matters at build/prerender time: rendering a page that
// only needs non-secret config (e.g. SIH_APP_ID, which has a default) must not
// require the SIH_API_KEY / CRON_SECRET secrets that are absent during build.
const shape = {
  // ── SIH ──────────────────────────────────────────
  SIH_API_KEY: z.string().min(1, "SIH_API_KEY is required"),
  SIH_API_BASE: z.string().url().default("https://api.sih.market/api/v1"),
  SIH_APP_ID: num(730),
  SIH_WEBHOOK_SECRET: z.string().min(1, "SIH_WEBHOOK_SECRET is required"),
  SIH_TEST_MODE: bool(false),
  SIH_PRICE_TOLERANCE: num(0.03),
  SIH_MARGIN: num(0.07),
  SIH_MIN_MARGIN_ABS: num(0.1),
  SIH_SYNC_INTERVAL_MIN: num(7),
  SIH_LOW_BALANCE_THRESHOLD: num(100),

  // ── Cron / app ───────────────────────────────────
  CRON_SECRET: z.string().min(1, "CRON_SECRET is required"),
  APP_URL: z.string().url(),

  // ── Telegram alerts (optional) ───────────────────
  ALERT_TELEGRAM_BOT_TOKEN: z.string().optional(),
  ALERT_TELEGRAM_CHAT_ID: z.string().optional(),
} as const;

const schema = z.object(shape);
type Env = z.infer<typeof schema>;

const cache = new Map<keyof Env, unknown>();

// Validate a single variable on first access. A required-but-missing secret
// still fails loudly — but only when that specific secret is actually read.
function readEnv<K extends keyof Env>(key: K): Env[K] {
  if (cache.has(key)) return cache.get(key) as Env[K];
  const parsed = shape[key].safeParse(process.env[key as string]);
  if (!parsed.success) {
    const msg = parsed.error.issues.map((i) => i.message).join("; ");
    throw new Error(`Invalid environment configuration:\n  - ${String(key)}: ${msg}`);
  }
  cache.set(key, parsed.data);
  return parsed.data as Env[K];
}

// Convenience proxy so callers can write `env.SIH_API_KEY` while still
// validating on first access.
export const env: Env = new Proxy({} as Env, {
  get(_t, prop: string) {
    return readEnv(prop as keyof Env);
  },
});
