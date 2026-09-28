import type { Metadata } from "next";
import { Check } from "lucide-react";
import { PageShell } from "@/components/layout/page-shell";
import { PageIntro } from "@/components/layout/page-intro";
import { JourneySteps } from "@/components/sections/journey-steps";
import { ResultPosts } from "@/components/sections/result-posts";
import { Faq } from "@/components/sections/faq";
import { Button } from "@/design-system/buttons/button";
import { phone } from "@/lib/institute";
import { programmes } from "@/lib/programmes";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbJsonLd, faqJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "IELTS, PTE & Spoken English Coaching in Pathankot",
  description:
    "Classroom IELTS coaching, PTE Academic practice, spoken English groups, and study-visa guidance under one roof at Sachman Overseas, Pathankot.",
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

      <nav aria-label="Programmes" className="page-container">
        <ul data-intro className="grid grid-cols-2 gap-2 lg:grid-cols-4">
          {programmes.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="group flex h-full items-center gap-3 rounded-control border border-line bg-surface p-3 type-small font-semibold transition-colors speed-fast hover:border-text sm:p-4"
                >
                  <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-control bg-sunken transition-colors speed-fast group-hover:bg-signal">
                    <Icon className="size-4" strokeWidth={1.75} aria-hidden />
                  </span>
                  <span className="min-w-0">
                    <span className="block type-code text-xs font-normal text-subtle">{item.num}</span>
                    {item.title}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="page-container section-y">
        {programmes.map((item, index) => {
          const Icon = item.icon;
          return (
            <article
              key={item.id}
              id={item.id}
              className={`grid gap-10 border-t border-line py-14 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-20 lg:py-20 ${
                index === programmes.length - 1 ? "border-b" : ""
              }`}
            >
              <div data-reveal className="lg:sticky lg:top-[calc(var(--header-height)+2rem)] lg:self-start">
                <div className="flex items-center gap-4">
                  <span className="inline-flex size-12 items-center justify-center rounded-control bg-signage text-signal">
                    <Icon className="size-5" strokeWidth={1.6} aria-hidden />
                  </span>
                  <span className="type-code text-sm text-subtle">{item.num} / 04</span>
                </div>
                <h2 className="mt-8 type-h2">{item.title}</h2>
                <p className="mt-5 max-w-md type-lead text-muted">{item.summary}</p>
                <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-line pt-6">
                  {item.facts.map((fact) => (
                    <div key={fact.label}>
                      <dt className="type-label text-[0.625rem] text-subtle">{fact.label}</dt>
                      <dd className="mt-2 type-small font-semibold">{fact.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div data-reveal>
                <p className="type-label text-muted">Who it is for</p>
                <p className="mt-3 max-w-xl type-lead">{item.forWho}</p>

                <p className="mt-12 type-label text-muted">What is included</p>
                <ul data-stagger className="mt-5 border-t border-line">
                  {item.includes.map((point) => (
                    <li key={point} className="flex gap-4 border-b border-line py-4 type-body">
                      <span className="mt-0.5 inline-flex size-6 shrink-0 items-center justify-center rounded-[0.3rem] bg-signal-tint text-text">
                        <Check className="size-3.5" strokeWidth={2.5} aria-hidden />
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>

                <div className="mt-10 flex flex-wrap gap-3">
                  <Button href="/contact" variant="dark" arrow>
                    Ask about {item.title}
                  </Button>
                  {item.id === "study-visa-guidance" ? (
                    <Button href="/destinations" variant="outline">
                      See study countries
                    </Button>
                  ) : null}
                </div>
              </div>
            </article>
          );
        })}
      </div>

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
