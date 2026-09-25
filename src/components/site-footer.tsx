import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/destinations", label: "Countries" },
  { href: "/process", label: "Process" },
  { href: "/contact", label: "Contact" },
];

export function SiteFooter() {
  return (
    <footer className="section-shell">
      <div className="mx-auto overflow-hidden rounded-[1.75rem] bg-ink text-white sm:rounded-[2rem] md:rounded-[2.5rem]">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-14 md:flex-row md:items-end md:justify-between md:px-10 md:py-16 lg:px-12">
          <div>
            <p className="font-display text-3xl font-extrabold tracking-tight md:text-4xl">
              Sachman Overseas
            </p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/55">
              IELTS · PTE · Spoken English · Study Visa Consultancy — Pathankot,
              Punjab.
            </p>
          </div>
          <div className="flex flex-col gap-6 md:items-end">
            <nav className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-white/70">
              {links.map((link) => (
                <Link key={link.href} href={link.href} className="hover:text-white">
                  {link.label}
                </Link>
              ))}
            </nav>
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
        </div>
      </div>
    </footer>
  );
}
