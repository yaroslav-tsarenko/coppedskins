"use client";

import { Link } from "@/i18n/routing";
import { Button } from "@/components/ui/Button";
import { PackageOpen } from "lucide-react";

interface EmptyStateProps {
  title: string;
  subtitle?: string;
  actionLabel?: string;
  actionHref?: string;
  icon?: React.ReactNode;
}

/** An empty shelf, not a shrug: dashed frame, poster headline, one way out. */
export function EmptyState({
  title,
  subtitle,
  actionLabel,
  actionHref,
  icon,
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center gap-3 border border-dashed border-[color:var(--color-border-strong)] px-4 py-16 text-center">
      <span className="text-[color:var(--color-text-tertiary)]">
        {icon || <PackageOpen size={40} strokeWidth={1.5} />}
      </span>
      <h3 className="poster text-[clamp(1.25rem,3vw,1.75rem)] text-[color:var(--color-text)]">
        {title}
      </h3>
      {subtitle && (
        <p className="max-w-[40ch] text-[14px] text-[color:var(--color-text-secondary)]">
          {subtitle}
        </p>
      )}
      {actionLabel && actionHref && (
        <Button as={Link} href={actionHref} className="mt-2">
          {actionLabel}
        </Button>
      )}
    </div>
  );
}
