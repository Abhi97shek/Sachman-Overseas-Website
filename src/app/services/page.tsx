import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageShell } from "@/components/layout/page-shell";
import { PageIntro } from "@/components/layout/page-intro";
import { JourneySteps } from "@/components/sections/journey-steps";
import { ResultPosts } from "@/components/sections/result-posts";
import { Faq } from "@/components/sections/faq";
import { Button } from "@/design-system/buttons/button";
import { phone } from "@/lib/institute";
import { programmePath, programmes } from "@/lib/programmes";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbJsonLd, faqJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "IELTS, PTE & Spoken English Coaching in Pathankot",
  description:
    "Classroom IELTS coaching, PTE Academic practice, Spoken English groups, and study-visa guidance under one roof at Sachman Overseas, Pathankot.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <PageShell>
      <PageIntro
        label="Services"
        code="04 programmes"
        title="Four programmes. One centre in Pathankot."
        lead="English test preparation and study-visa guidance under one roof, so your score and your application move together."
        actions={
          <>
            <Button href="/contact" arrow>
              Book free counselling
            </Button>
            <Button href={phone.href} variant="outline">
              {phone.display}
            </Button>
          </>
        }
      />

      <nav aria-label="Programmes" className="page-container pb-(--section-space)">
        <ul data-stagger className="border-t border-line">
          {programmes.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.id} className="border-b border-line">
                <Link
                  href={programmePath(item)}
                  className="group relative isolate grid grid-cols-[auto_1fr_auto] items-center gap-x-5 gap-y-2 px-1 py-7 sm:gap-x-8 md:grid-cols-[4rem_minmax(0,1fr)_minmax(0,1.1fr)_auto] md:py-9"
                >
                  <span
                    aria-hidden
                    className="absolute inset-0 -z-10 origin-bottom scale-y-0 rounded-panel bg-signage transition-transform speed-slow group-hover:scale-y-100 group-focus-visible:scale-y-100"
                  />
                  <span className="type-code text-sm text-subtle transition-colors speed-base group-hover:text-signal">
                    {item.num}
                  </span>
                  <span className="type-h2 text-[clamp(1.5rem,1.1rem+1.6vw,2.25rem)] transition-colors speed-base group-hover:text-on-signage">
                    {item.title}
                  </span>
                  <span className="col-span-3 col-start-1 max-w-md type-body text-muted transition-colors speed-base group-hover:text-on-signage-muted md:col-span-1 md:col-start-auto">
                    {item.short}
                  </span>
                  <span className="col-start-3 row-start-1 flex items-center justify-end gap-3 md:col-start-auto md:row-start-auto">
                    <span className="hidden size-12 items-center justify-center rounded-control border border-line text-muted transition-colors speed-base group-hover:border-signage-line group-hover:text-on-signage sm:inline-flex">
                      <Icon className="size-5" strokeWidth={1.6} aria-hidden />
                    </span>
                    <span className="inline-flex size-12 items-center justify-center rounded-control bg-sunken text-text transition-[background-color,transform] speed-base group-hover:translate-x-1 group-hover:bg-signal">
                      <ArrowRight className="size-5" aria-hidden />
                    </span>
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <JourneySteps title="How a course runs." />
      <div className="section-y-tight" />
      <ResultPosts />
      <Faq />
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
          ]),
          faqJsonLd(),
        ]}
      />
    </PageShell>
  );
}
