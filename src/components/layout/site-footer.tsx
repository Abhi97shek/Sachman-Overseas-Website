import Image from "next/image";
import Link from "next/link";
import { Button } from "@/design-system/buttons/button";
import { Logo } from "@/components/layout/logo";
import { FacebookIcon, InstagramIcon, LinkedInIcon } from "@/components/layout/social-icons";
import { directionsUrl, email, instituteAddress, openingHours, phone, socials } from "@/lib/institute";
import { programmes } from "@/lib/programmes";

const socialLinks = [
  { href: socials.instagram, label: "Instagram", icon: InstagramIcon },
  { href: socials.facebook, label: "Facebook", icon: FacebookIcon },
  { href: socials.linkedin, label: "LinkedIn", icon: LinkedInIcon },
];

const explore = [
  { href: "/services", label: "Services" },
  { href: "/destinations", label: "Countries" },
  // { href: "/eligibility", label: "Eligibility" },
  { href: "/process", label: "Process" },
  { href: "/contact", label: "Contact" },
];

const linkClass = "type-small text-on-signage-muted transition-colors speed-fast hover:text-on-signage";

export function SiteFooter() {
  return (
    <footer className="mt-auto px-3 pb-3 sm:px-4 sm:pb-4">
      <div className="overflow-hidden rounded-frame bg-signage text-on-signage">
        <div className="relative isolate h-[26rem] sm:h-[30rem] md:h-[32rem]">
          <Image
            src="/images/footer-airport.jpg"
            alt="A family waving off their daughter at the airport"
            fill
            quality={70}
            sizes="100vw"
            className="object-cover object-[12%_center] md:object-center"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-linear-to-t from-signage/70 via-transparent to-transparent md:from-signage/25"
          />
          <div className="absolute inset-x-0 bottom-0 md:inset-y-0 md:right-0 md:left-auto md:flex md:w-1/2 md:items-center">
            <div data-reveal className="p-6 sm:p-10 md:pr-14 md:pl-0">
              <p className="type-label text-on-signage md:text-muted">Final call</p>
              <h2 className="mt-3 max-w-md type-h2 text-on-signage md:text-text">
                They wave you off. We get you there.
              </h2>
              <p className="mt-4 hidden max-w-sm type-body text-muted md:block">
                The first counselling session is free. Bring your mark sheets and the countries on your list.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button href="/contact" arrow>
                  Book free counselling
                </Button>
                <Button href={phone.href} variant="dark" className="hidden md:inline-flex">
                  Call {phone.display}
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="px-6 pt-12 pb-8 sm:px-10 md:px-14 md:pt-16">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_2fr]">
            <div>
              <Logo tone="light" />
              <p className="mt-5 max-w-xs type-small text-on-signage-muted">
                Sachman Overseas, also known as Sachman Institute. IELTS, PTE, Spoken English, and study
                visas from one centre on Dalhousie Road, Pathankot.
              </p>
              <div className="mt-6 flex items-center gap-2">
                {socialLinks.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={item.label}
                      className="inline-flex size-10 items-center justify-center rounded-control border border-signage-line text-on-signage-muted transition-colors speed-fast hover:border-on-signage-muted hover:text-on-signage"
                    >
                      <Icon />
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
              <nav aria-label="Coaching" className="flex flex-col gap-3">
                <p className="mb-1 type-label text-on-signage">Coaching</p>
                {programmes.map((item) => (
                  <Link key={item.id} href={`/services#${item.id}`} className={linkClass}>
                    {item.title}
                  </Link>
                ))}
              </nav>
              <nav aria-label="Explore" className="flex flex-col gap-3">
                <p className="mb-1 type-label text-on-signage">Explore</p>
                {explore.map((item) => (
                  <Link key={item.href} href={item.href} className={linkClass}>
                    {item.label}
                  </Link>
                ))}
              </nav>
              <div className="col-span-2 flex flex-col gap-3 sm:col-span-1">
                <p className="mb-1 type-label text-on-signage">Visit</p>
                <a href={directionsUrl} target="_blank" rel="noreferrer" className={linkClass}>
                  {instituteAddress}
                </a>
                <p className="type-small text-on-signage-muted">{openingHours}</p>
                <a href={phone.href} className={`${linkClass} type-code`}>
                  {phone.display}
                </a>
                <a href={email.href} className={`${linkClass} break-all`}>
                  {email.display}
                </a>
              </div>
            </div>
          </div>

          <div className="mt-14 flex flex-col gap-4 border-t border-signage-line pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="type-small text-on-signage-muted">
              © {new Date().getFullYear()} Sachman Overseas (Sachman Institute). All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="/terms" className={linkClass}>
                Terms & Conditions
              </Link>
              <Link href="/privacy" className={linkClass}>
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
