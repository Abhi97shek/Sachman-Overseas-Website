export function LegalArticle({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <article className="px-4 py-10 sm:px-6 md:px-8 md:py-14">
      <div className="mx-auto max-w-3xl">
        <p className="text-[0.72rem] font-semibold tracking-[0.16em] text-tide uppercase">
          Sachman Overseas
        </p>
        <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-ink">{title}</h1>
        <p className="mt-2 text-sm text-muted-foreground">Updated 25 September 2026</p>
        <div className="mt-8 space-y-8 text-sm leading-relaxed text-muted-foreground">{children}</div>
      </div>
    </article>
  );
}
