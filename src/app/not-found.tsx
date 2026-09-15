import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { NotFoundSearch } from "@/components/shared/NotFoundSearch";

/**
 * 404 as a torn poster: the number set enormous in the display face, the
 * message underneath, and one way back onto the floor.
 */
export default function NotFound() {
  return (
    <html lang="en" data-theme="light">
      <body className="min-h-screen bg-[color:var(--color-bg)] text-[color:var(--color-text)]">
        <main className="mx-auto flex min-h-screen max-w-[760px] flex-col justify-center gap-6 px-5 py-16">
          <hr className="tape-rule" />
          <span
            aria-hidden
            className="poster select-none text-[clamp(6rem,26vw,14rem)] leading-[0.78] text-[color:var(--color-text)]"
          >
            404
          </span>

          <div className="flex flex-col gap-3">
            <span className="eyebrow text-[color:var(--color-primary-strong)]">Page not found</span>
            <h1 className="poster text-[clamp(1.75rem,5vw,2.75rem)]">
              That one&apos;s <span className="heat-plate">gone</span>.
            </h1>
            <p className="max-w-[52ch] text-[15px] leading-relaxed text-[color:var(--color-text-secondary)]">
              The link may be out of date, or the item may have sold. Search the floor, or head
              back to browsing.
            </p>
          </div>

          <NotFoundSearch />

          <div className="mt-2 flex flex-wrap items-center gap-3">
            <Link
              href="/store"
              className="inline-flex items-center gap-2 rounded-[var(--radius-md)] bg-[color:var(--color-primary-strong)] px-5 py-3 font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-[color:var(--color-primary-fg)] transition-colors hover:bg-[color:var(--color-primary-hover)]"
            >
              Back to the floor <ArrowRight size={13} />
            </Link>
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-[var(--radius-md)] border border-[color:var(--color-text)] px-5 py-3 font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-[color:var(--color-text)] transition-colors hover:bg-[color:var(--color-text)] hover:text-[color:var(--color-text-inverse)]"
            >
              Return home
            </Link>
          </div>
        </main>
      </body>
    </html>
  );
}
