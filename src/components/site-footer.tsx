import Link from "next/link";

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className="size-4" fill="none" stroke="currentColor" strokeWidth="1.75">
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="3.6" />
      <circle cx="17.2" cy="6.8" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className="size-4" fill="currentColor">
      <path d="M14.2 8.6h2.6V5.8h-2.6c-2.1 0-3.7 1.7-3.7 3.8v1.8H8.2v2.8h2.3V20h2.9v-5.8h2.4l.4-2.8h-2.8V9.7c0-.6.4-1.1 1-1.1z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className="size-4" fill="currentColor">
      <path d="M6.4 9.2H3.8V20h2.6V9.2zM5.1 3.8c-.9 0-1.7.7-1.7 1.6s.8 1.6 1.7 1.6 1.7-.7 1.7-1.6-.8-1.6-1.7-1.6zM20.2 20h-2.6v-5.5c0-1.5-.5-2.5-1.9-2.5-1 0-1.6.7-1.8 1.3-.1.2-.1.6-.1.9V20h-2.6V9.2h2.5v1.5c.4-.7 1.3-1.7 3.1-1.7 2.3 0 3.4 1.5 3.4 4.6V20z" />
    </svg>
  );
}

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/destinations", label: "Countries" },
  { href: "/process", label: "Process" },
  { href: "/contact", label: "Contact" },
];

const socials = [
  {
    href: "https://www.instagram.com/sachmaninstitute/",
    label: "Instagram",
    icon: InstagramIcon,
  },
  {
    href: "https://www.facebook.com/sachmanpathankot",
    label: "Facebook",
    icon: FacebookIcon,
  },
  {
    href: "https://www.linkedin.com/in/meenakshi-sharma-370830318/",
    label: "LinkedIn",
    icon: LinkedInIcon,
  },
];

export function SiteFooter() {
  return (
    <footer className="px-3 pb-3 sm:px-4 sm:pb-4 md:px-5 md:pb-5">
      <div className="mx-auto overflow-hidden rounded-[1.75rem] border border-white/80 bg-[linear-gradient(180deg,#e8eef2_0%,#f4f8f8_32%,#ffffff_100%)] sm:rounded-[2rem] md:rounded-[2.5rem]">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-10 md:px-10 md:py-12 lg:px-12">
          <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
            <div>
              <p className="font-display text-3xl font-extrabold tracking-tight text-ink md:text-4xl">
                Sachman Overseas
              </p>
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
                IELTS, PTE, spoken English, and study-visa guidance from Pathankot.
              </p>
            </div>
            <nav className="flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium text-ink/70">
              {links.map((link) => (
                <Link key={link.href} href={link.href} className="transition-colors hover:text-tide">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex flex-col gap-5 border-t border-ink/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-col gap-1 text-sm text-muted-foreground">
              <a href="tel:+919888454140" className="transition-colors hover:text-tide">
                +91 98884 54140
              </a>
              <a href="mailto:sachmaninstitute08@gmail.com" className="transition-colors hover:text-tide">
                sachmaninstitute08@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              {socials.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={item.label}
                    className="flex size-11 items-center justify-center rounded-full bg-[#d7f3f0] text-tide transition-colors hover:bg-tide hover:text-white"
                  >
                    <Icon className="size-4" strokeWidth={1.75} />
                  </a>
                );
              })}
            </div>
          </div>

          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Sachman Overseas. Website mockup.
          </p>
        </div>
      </div>
    </footer>
  );
}
