export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-ink text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-12 md:flex-row md:items-end md:justify-between md:px-8">
        <div>
          <p className="font-display text-2xl font-semibold tracking-tight">
            Sachman <span className="font-light text-ember">Overseas</span>
          </p>
          <p className="mt-2 max-w-sm text-sm leading-relaxed text-white/60">
            IELTS · PTE · Spoken English · Study Visa Consultancy — Pathankot,
            Punjab.
          </p>
        </div>
        <div className="flex flex-col gap-2 text-sm text-white/60 md:items-end">
          <a href="tel:+919888454140" className="hover:text-white">
            +91 98884 54140
          </a>
          <a
            href="mailto:sachmaninstitute08@gmail.com"
            className="hover:text-white"
          >
            sachmaninstitute08@gmail.com
          </a>
          <p className="mt-2 text-xs text-white/40">
            © {new Date().getFullYear()} Sachman Overseas. Website mockup.
          </p>
        </div>
      </div>
    </footer>
  );
}
