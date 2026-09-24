export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-ink text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-14 md:flex-row md:items-end md:justify-between md:px-8 md:py-16">
        <div>
          <p className="font-display text-3xl font-extrabold tracking-tight md:text-4xl">
            Sachman
            <span className="mt-1 block font-semibold text-tide">Overseas</span>
          </p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/55">
            IELTS · PTE · Spoken English · Study Visa Consultancy — Pathankot,
            Punjab.
          </p>
        </div>
        <div className="flex flex-col gap-2 text-sm text-white/55 md:items-end">
          <a href="tel:+919888454140" className="transition-colors hover:text-white">
            +91 98884 54140
          </a>
          <a
            href="mailto:sachmaninstitute08@gmail.com"
            className="transition-colors hover:text-white"
          >
            sachmaninstitute08@gmail.com
          </a>
          <p className="mt-4 text-xs text-white/35">
            © {new Date().getFullYear()} Sachman Overseas. Website mockup.
          </p>
        </div>
      </div>
    </footer>
  );
}
