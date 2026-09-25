import Image from "next/image";
import Link from "next/link";
import { directionsUrl } from "@/lib/institute";

function Mark() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden className="size-8 shrink-0">
      <path
        fill="currentColor"
        d="M16 2.8 27.8 9.4v13.2L16 29.2 4.2 22.6V9.4L16 2.8Zm0 3.6L7.4 11.1v9.8L16 25.6l8.6-4.7v-9.8L16 6.4Z"
      />
      <path fill="currentColor" d="m16 11.4 4.7 4.6-4.7 4.6-4.7-4.6 4.7-4.6Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className="size-[18px]" fill="none" stroke="currentColor" strokeWidth="1.7">
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="3.6" />
      <circle cx="17.2" cy="6.8" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className="size-[18px]" fill="currentColor">
      <path d="M14.5 8.4h2.3V5.7h-2.3c-2.2 0-3.8 1.7-3.8 3.9v1.7H8.4v2.7h2.3V20h2.8v-6h2.3l.4-2.7h-2.7V9.6c0-.7.4-1.2 1-1.2Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className="size-[18px]" fill="currentColor">
      <path d="M6.2 9.1H3.7V20h2.5V9.1ZM4.9 3.8c-.9 0-1.6.7-1.6 1.6s.7 1.6 1.6 1.6 1.6-.7 1.6-1.6-.7-1.6-1.6-1.6ZM20.2 20h-2.5v-5.4c0-1.5-.5-2.4-1.8-2.4-1 0-1.5.7-1.8 1.3-.1.2-.1.5-.1.9V20H11.5V9.1h2.4v1.5c.4-.7 1.2-1.6 3-1.6 2.2 0 3.3 1.4 3.3 4.5V20Z" />
    </svg>
  );
}

const socials = [
  { href: "https://www.instagram.com/sachmaninstitute/", label: "Instagram", icon: InstagramIcon },
  { href: "https://www.facebook.com/sachmanpathankot", label: "Facebook", icon: FacebookIcon },
  { href: "https://www.linkedin.com/in/meenakshi-sharma-370830318/", label: "LinkedIn", icon: LinkedInIcon },
];

const columns = [
  {
    title: "Coaching",
    links: [
      { href: "/services#ielts-coaching", label: "IELTS Coaching" },
      { href: "/services#pte-academic", label: "PTE Academic" },
      { href: "/services#spoken-english", label: "Spoken English" },
      { href: "/services#study-visa-guidance", label: "Study Visa" },
    ],
  },
  {
    title: "Explore",
    links: [
      { href: "/", label: "Home" },
      { href: "/services", label: "Services" },
      { href: "/destinations", label: "Countries" },
      { href: "/process", label: "Process" },
      { href: "/contact", label: "Contact" },
    ],
  },
];

const linkClass = "text-sm text-white/70 transition-colors hover:text-white";

export function SiteFooter() {
  return (
    <footer className="bg-[#e8eef2] px-3 pt-2 pb-3 sm:px-4 sm:pb-4 md:px-5">
      <div className="rounded-[1.75rem] bg-[linear-gradient(165deg,#d8f1ff_0%,#8ecff3_55%,#5eb0e4_100%)] p-3 sm:rounded-[2rem] sm:p-4 md:p-5">
        <div className="rounded-[1.35rem] bg-[#07182e] px-6 py-8 text-white sm:rounded-[1.5rem] sm:px-8 sm:py-10 md:px-12 md:py-12">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.15fr)] lg:gap-16">
            <div>
              <Link href="/" className="inline-flex items-center gap-2.5 text-white">
                <Mark />
                <span className="font-display text-xl font-bold tracking-tight sm:text-[1.35rem]">
                  Sachman Overseas
                </span>
              </Link>
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/65">
                IELTS, PTE, spoken English, and study visas from one centre on Dalhousie Road, Pathankot.
              </p>
              <div className="mt-6 flex items-center gap-5">
                {socials.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={item.label}
                      className="text-white/85 transition-colors hover:text-white"
                    >
                      <Icon />
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-6">
              {columns.map((column) => (
                <nav key={column.title} className="flex flex-col gap-3">
                  <p className="text-sm font-semibold text-white">{column.title}</p>
                  {column.links.map((link) => (
                    <Link key={link.label} href={link.href} className={linkClass}>
                      {link.label}
                    </Link>
                  ))}
                </nav>
              ))}
              <nav className="col-span-2 flex flex-col gap-3 sm:col-span-1">
                <p className="text-sm font-semibold text-white">Visit</p>
                <a href={directionsUrl} target="_blank" rel="noreferrer" className={linkClass}>
                  Dalhousie Road
                </a>
                <a href={directionsUrl} target="_blank" rel="noreferrer" className={linkClass}>
                  Pathankot, Punjab
                </a>
                <a href="tel:+919888454140" className={linkClass}>
                  +91 98884 54140
                </a>
                <a href="mailto:sachmaninstitute08@gmail.com" className={linkClass}>
                  Email the centre
                </a>
                <a href={directionsUrl} target="_blank" rel="noreferrer" className={linkClass}>
                  Get directions
                </a>
              </nav>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-5 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} Sachman Overseas. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/terms" className="transition-colors hover:text-white">
                Terms & Conditions
              </Link>
              <Link href="/privacy" className="transition-colors hover:text-white">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
        <div
          className="relative -mx-1 mt-2 overflow-hidden rounded-[1.35rem] sm:-mx-1.5 sm:mt-3 sm:rounded-[1.5rem]"
          style={{
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.45) 14%, #000 34%, #000 100%)",
            maskImage:
              "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.45) 14%, #000 34%, #000 100%)",
          }}
        >
          <Image
            src="/images/footer-airport.jpg"
            alt="Parents seeing their daughter off at the airport"
            width={1280}
            height={720}
            className="h-[280px] w-full object-cover object-[center_64%] sm:h-[360px] md:h-[460px]"
          />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#7ec4ee] to-transparent sm:h-36" />
        </div>
      </div>
    </footer>
  );
}
