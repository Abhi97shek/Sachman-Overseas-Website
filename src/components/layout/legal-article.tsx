export function LegalArticle({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <article className="page-container pt-12 pb-(--section-space) md:pt-20">
      <div className="mx-auto max-w-prose">
        <div data-intro className="flex items-center gap-3">
          <span className="h-px w-8 bg-signal" aria-hidden />
          <p className="type-label text-muted">Sachman Overseas · Updated 25 September 2026</p>
        </div>
        <h1 data-intro className="mt-6 type-h1">
          {title}
        </h1>
        <div
          data-intro
          className="mt-12 space-y-10 type-body text-muted [&_a]:font-medium [&_a]:text-text [&_a]:underline [&_a]:underline-offset-4 [&_h2]:type-h3 [&_h2]:text-text [&_p]:mt-3"
        >
          {children}
        </div>
      </div>
    </article>
  );
}
