import Link from "next/link";
import { directionsUrl, instituteAddress, mapEmbedUrl } from "@/lib/institute";

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
  { href: "https://www.instagram.com/sachmaninstitute/", label: "Instagram", icon: InstagramIcon },
  { href: "https://www.facebook.com/sachmanpathankot", label: "Facebook", icon: FacebookIcon },
  { href: "https://www.linkedin.com/in/meenakshi-sharma-370830318/", label: "LinkedIn", icon: LinkedInIcon },
];

export function SiteFooter() {
  return (
    <footer className="mt-8 bg-white">
      <div className="h-1.5 bg-gradient-to-r from-tide via-[#7ec8c0] to-[#f0b429]" />
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-10 sm:px-6 md:px-8 md:py-12 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,0.9fr)] lg:px-10">
        <div className="grid gap-10 sm:grid-cols-2">
          <div>
            <p className="font-display text-3xl font-extrabold tracking-tight text-ink">Sachman Overseas</p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
              IELTS, PTE, spoken English, and study visas from the Pathankot centre.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-ink/80">{instituteAddress}</p>
            <div className="mt-4 flex flex-col gap-1 text-sm">
              <a href="tel:+919888454140" className="font-medium text-ink hover:text-tide">
                +91 98884 54140
              </a>
              <a href="mailto:sachmaninstitute08@gmail.com" className="text-muted-foreground hover:text-tide">
                sachmaninstitute08@gmail.com
              </a>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {socials.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={item.label}
                    className="inline-flex items-center gap-2 rounded-full bg-[#f4f8f8] py-1.5 pr-3 pl-1.5 text-sm font-medium text-ink hover:bg-[#d7f3f0]"
                  >
                    <span className="flex size-8 items-center justify-center rounded-full bg-white text-tide">
                      <Icon />
                    </span>
                    {item.label}
                  </a>
                );
              })}
            </div>
          </div>
          <nav className="flex flex-col gap-3">
            <p className="text-[0.72rem] font-semibold tracking-[0.16em] text-tide uppercase">Explore</p>
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm font-medium text-ink hover:text-tide">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <p className="text-[0.72rem] font-semibold tracking-[0.16em] text-tide uppercase">Directions</p>
          <div className="relative mt-3 h-64 overflow-hidden rounded-2xl bg-[#e8eef2] lg:h-72">
            <iframe
              title="Map showing Sachman Overseas in Pathankot"
              src={mapEmbedUrl}
              className="pointer-events-none h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <a
              href={directionsUrl}
              target="_blank"
              rel="noreferrer"
              className="absolute inset-0 flex items-end p-3"
            >
              <span className="inline-flex h-10 items-center rounded-full bg-ink px-4 text-sm font-semibold text-white shadow-lg">
                Directions from your location
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-ink/8">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-6 md:px-8 lg:px-10">
          <p>© {new Date().getFullYear()} Sachman Overseas · Pathankot, Punjab</p>
          <div className="flex gap-4">
            <Link href="/terms" className="hover:text-tide">
              Terms & Conditions
            </Link>
            <Link href="/privacy" className="hover:text-tide">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
