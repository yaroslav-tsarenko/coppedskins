import { Breadcrumbs } from "@/components/layout/Breadcrumbs/Breadcrumbs";
import { ReactNode } from "react";
import { brand, brandAddressLine } from "@/lib/brand";

interface PolicyLayoutProps {
  title: string;
  lastUpdated: string;
  children: ReactNode;
}

/**
 * Policy pages keep the poster masthead but drop into a plain, readable
 * measure — long legal copy is the one place where the identity gets out of
 * the way and lets the text do its job.
 */
export function PolicyLayout({ title, lastUpdated, children }: PolicyLayoutProps) {
  return (
    <div className="mx-auto max-w-3xl px-4 pb-20 sm:px-6 [overflow-wrap:anywhere] [word-break:break-word]">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Policies", href: "/policies" },
          { label: title },
        ]}
      />
      <hr className="tape-rule" />
      <span className="eyebrow mt-4 block text-[color:var(--color-text)]">Policies</span>
      <h1 className="poster mb-4 mt-2 text-[clamp(1.75rem,4.5vw,2.75rem)] text-[color:var(--color-text)]">
        {title}
      </h1>
      <p className="readout mb-8 text-[11px] text-[color:var(--color-text-tertiary)]">
        Last updated: {lastUpdated}
      </p>
      <div
        className="prose-policy text-[15px] leading-[1.75] text-[color:var(--color-text-secondary)] max-sm:text-sm max-sm:leading-[1.65] [&_h2]:poster [&_h2]:mb-3 [&_h2]:mt-9 [&_h2]:text-[19px] [&_h2]:text-[color:var(--color-text)] max-sm:[&_h2]:mt-7 max-sm:[&_h2]:text-[17px] [&_h3]:mb-2 [&_h3]:mt-5 [&_h3]:text-base [&_h3]:font-bold [&_h3]:text-[color:var(--color-text)] max-sm:[&_h3]:text-[15px] [&_p]:mb-3 [&_ul]:mb-3 [&_ul]:ml-6 [&_ul]:mt-2 [&_ul]:list-disc [&_ul>li]:mb-1 [&_a]:text-[color:var(--color-accent)] [&_a]:underline [&_a]:underline-offset-2 [&_table]:my-4 [&_table]:block [&_table]:w-full [&_table]:overflow-x-auto [&_table]:text-sm [&_th]:border [&_th]:border-[color:var(--color-line)] [&_th]:bg-[color:var(--color-bg-secondary)] [&_th]:px-3 [&_th]:py-2 [&_th]:text-left [&_th]:font-bold [&_th]:text-[color:var(--color-text)] [&_th]:[word-break:break-word] [&_td]:border [&_td]:border-[color:var(--color-line)] [&_td]:px-3 [&_td]:py-2 [&_td]:text-left [&_td]:[word-break:break-word]"
      >
        {children}
      </div>
    </div>
  );
}

export function ContactBlock() {
  return (
    <div className="mt-2 border-l-[3px] border-[color:var(--color-primary)] bg-[color:var(--color-bg-secondary)] px-4 py-3.5 text-sm leading-relaxed">
      <p>
        <strong>{brand.company.legalName}</strong>
        <br />
        Company number: {brand.company.number}
        <br />
        Registered office: {brandAddressLine}
        <br />
        General email: {brand.contact.email}
      </p>
    </div>
  );
}
