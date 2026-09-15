/**
 * Coppedskins mark — a price-tag square with a crosshair punched through it
 * and a hole where the string goes. Retail tag + CS2 reticle in one shape,
 * drawn on a 32×32 grid so it stays crisp down to 16px. Original artwork —
 * no game assets.
 */
export function CoppedskinsMark({
  size = 28,
  className,
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      className={className}
      aria-hidden
    >
      {/* The tag body — a square with the top-left corner cut, like a swing tag. */}
      <path
        d="M11 3h18v26H3V11L11 3Z"
        fill="var(--color-primary)"
      />
      {/* The string hole. */}
      <circle cx="8.6" cy="8.6" r="1.9" fill="var(--color-primary-ink)" />
      {/* The crosshair, punched out of the tag. */}
      <g stroke="var(--color-primary-ink)" strokeWidth="2.2" strokeLinecap="square">
        <path d="M20 12.5v3.2M20 24.3v-3.2M14.1 18.4h3.2M25.9 18.4h-3.2" />
      </g>
      <circle cx="20" cy="18.4" r="4.4" stroke="var(--color-primary-ink)" strokeWidth="2.2" />
    </svg>
  );
}

/**
 * The wordmark. "COPPED" in poster ink, "SKINS" on a heat plate — the same
 * marker move the headlines use, so the logo is the identity in miniature.
 * `size` is the cap height in px; everything else scales from it.
 */
export function CoppedskinsLogo({
  size = 22,
  className,
}: {
  size?: number;
  className?: string;
}) {
  return (
    <span className={`inline-flex items-center gap-2 ${className ?? ""}`}>
      <CoppedskinsMark size={size * 1.35} />
      <span
        className="poster inline-flex items-center leading-none tracking-[0.01em] text-[color:var(--color-text)]"
        style={{ fontSize: size }}
      >
        Copped
        <span
          className="ml-[0.12em] bg-[color:var(--color-primary)] px-[0.14em] py-[0.06em] text-[color:var(--color-primary-ink)]"
        >
          Skins
        </span>
      </span>
    </span>
  );
}
