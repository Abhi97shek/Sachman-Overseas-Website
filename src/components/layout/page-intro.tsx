import type { ReactNode } from "react";

export function PageIntro({
  label,
  code,
  title,
  lead,
  actions,
}: {
  label: string;
  code?: string;
  title: ReactNode;
  lead?: ReactNode;
  actions?: ReactNode;
}) {
  return (
    <section className="page-container pt-12 pb-14 md:pt-20 md:pb-20">
      <div className="flex items-center gap-3" data-intro>
        <span className="h-px w-8 bg-signal" aria-hidden />
        <p className="type-label text-muted">{label}</p>
        {code ? <p className="type-label text-subtle">· {code}</p> : null}
      </div>
      <div className="mt-6 grid gap-8 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:items-end lg:gap-16">
        <h1 data-intro className="max-w-4xl type-h1">
          {title}
        </h1>
        {lead || actions ? (
          <div data-intro className="flex flex-col gap-6 lg:pb-2">
            {lead ? <p className="max-w-md type-lead text-muted">{lead}</p> : null}
            {actions ? <div className="flex flex-wrap gap-3">{actions}</div> : null}
          </div>
        ) : null}
      </div>
    </section>
  );
}

export function SectionHeading({
  label,
  title,
  lead,
  tone = "light",
  align = "split",
  aside,
}: {
  label: string;
  title: ReactNode;
  lead?: ReactNode;
  tone?: "light" | "dark";
  align?: "split" | "stack";
  aside?: ReactNode;
}) {
  const dark = tone === "dark";
  return (
    <div
      data-reveal
      className={
        align === "split"
          ? "grid gap-6 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] lg:items-end lg:gap-16"
          : "max-w-3xl"
      }
    >
      <div>
        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-signal" aria-hidden />
          <p className={`type-label ${dark ? "text-on-signage-muted" : "text-muted"}`}>{label}</p>
        </div>
        <h2 className={`mt-5 max-w-3xl type-h2 ${dark ? "text-on-signage" : "text-text"}`}>{title}</h2>
      </div>
      {lead || aside ? (
        <div className={`flex flex-col gap-5 ${align === "stack" ? "mt-5" : "lg:pb-1.5"}`}>
          {lead ? (
            <p className={`max-w-md type-lead ${dark ? "text-on-signage-muted" : "text-muted"}`}>{lead}</p>
          ) : null}
          {aside}
        </div>
      ) : null}
    </div>
  );
}
