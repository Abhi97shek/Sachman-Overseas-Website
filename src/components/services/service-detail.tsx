import Link from "next/link";
import { ArrowLeft, Check, Plus } from "lucide-react";
import { PageIntro } from "@/components/layout/page-intro";
import { ConsultSection } from "@/components/sections/consult-section";
import { ResultPosts } from "@/components/sections/result-posts";
import { Button } from "@/design-system/buttons/button";
import { phone } from "@/lib/institute";
import { programmePath, type Programme } from "@/lib/programmes";
import type { ServicePageCopy } from "@/lib/service-pages";
import { reviews } from "@/lib/stories";

function matchingReviews(match?: string) {
  if (!match) return [];
  const needle = match.toLowerCase();
  return reviews.filter((item) => item.topic.toLowerCase().includes(needle)).slice(0, 4);
}

export function ServiceDetail({
  programme,
  page,
  others,
}: {
  programme: Programme;
  page: ServicePageCopy;
  others: Programme[];
}) {
  const Icon = programme.icon;
  const quotes = matchingReviews(page.reviewMatch);
  const contactHref = `/contact?interest=${programme.id}`;

  return (
    <>
      <div className="page-container pt-8 md:pt-10">
        <Link
          href="/services"
          className="inline-flex items-center gap-2 type-label text-muted transition-colors speed-fast hover:text-text"
        >
          <ArrowLeft className="size-3.5" aria-hidden />
          All programmes
        </Link>
      </div>

      <PageIntro
        label={programme.title}
        code={`${programme.num} / 04`}
        title={page.headline}
        lead={programme.summary}
        actions={
          <>
            <Button href={contactHref} arrow>
              Book free counselling
            </Button>
            <Button href={phone.href} variant="outline">
              {phone.display}
            </Button>
          </>
        }
      />

      <div className="page-container grid gap-12 pb-(--section-space) lg:grid-cols-[minmax(0,1fr)_22rem] lg:gap-20">
        <div className="min-w-0">
          <dl data-stagger className="grid grid-cols-3 border-t border-l border-line">
            {programme.facts.map((fact) => (
              <div key={fact.label} className="border-r border-b border-line p-4">
                <dt className="type-label text-[0.625rem] text-subtle">{fact.label}</dt>
                <dd className="mt-2 font-semibold">{fact.value}</dd>
              </div>
            ))}
          </dl>

          <section data-reveal className="mt-16">
            <h2 className="type-h3">Who it is for</h2>
            <p className="mt-4 max-w-2xl type-lead">{programme.forWho}</p>
          </section>

          <section data-reveal className="mt-16">
            <h2 className="type-h3">What is included</h2>
            <ul className="mt-6 border-t border-line">
              {programme.includes.map((point) => (
                <li key={point} className="flex gap-4 border-b border-line py-4 type-body">
                  <span className="mt-0.5 inline-flex size-6 shrink-0 items-center justify-center rounded-[0.3rem] bg-signal-tint text-text">
                    <Check className="size-3.5" strokeWidth={2.5} aria-hidden />
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </section>

          {page.modules?.length ? (
            <section data-reveal className="mt-16">
              <h2 className="type-h3">{page.modulesLabel ?? "Syllabus"}</h2>
              <div
                data-stagger
                className={`mt-8 grid gap-10 ${page.modules.length === 4 ? "sm:grid-cols-2 lg:grid-cols-4" : "sm:grid-cols-3"}`}
              >
                {page.modules.map((module) => (
                  <article key={module.name} className="border-t-2 border-text pt-5">
                    <p className="type-code text-sm text-subtle">{module.code}</p>
                    <h3 className="mt-3 type-h3 text-[1.35rem]">{module.name}</h3>
                    {module.detail ? <p className="mt-3 type-small text-muted">{module.detail}</p> : null}
                  </article>
                ))}
              </div>
            </section>
          ) : null}

          {page.sections?.map((section) => (
            <section key={section.title} data-reveal className="mt-16">
              <h2 className="type-h3">{section.title}</h2>
              <p className="mt-4 max-w-2xl type-body text-muted">{section.body}</p>
            </section>
          ))}

          {quotes.length ? (
            <section data-reveal className="mt-16">
              <h2 className="type-h3">From students</h2>
              <ul className="mt-6 border-t border-line">
                {quotes.map((item) => (
                  <li key={item.name} className="border-b border-line py-6">
                    <p className="type-body">“{item.quote}”</p>
                    <p className="mt-3 type-small font-semibold">{item.name}</p>
                    <p className="mt-1 type-label text-subtle">{item.topic}</p>
                  </li>
                ))}
              </ul>
            </section>
          ) : null}

          {page.faqs?.length ? (
            <section className="mt-16">
              <h2 className="type-h3">Before you enrol</h2>
              <div data-stagger className="mt-6 border-t border-line">
                {page.faqs.map((item) => (
                  <details key={item.q} className="group border-b border-line">
                    <summary className="flex items-center justify-between gap-6 py-5 text-[1.05rem] font-semibold tracking-[-0.01em]">
                      {item.q}
                      <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-control border border-line transition-[transform,background-color,border-color] speed-base group-open:rotate-45 group-open:border-signal group-open:bg-signal">
                        <Plus className="size-4" aria-hidden />
                      </span>
                    </summary>
                    <p className="max-w-2xl pb-6 type-body text-muted">{item.a}</p>
                  </details>
                ))}
              </div>
            </section>
          ) : null}
        </div>

        <aside className="lg:sticky lg:top-[calc(var(--header-height)+2rem)] lg:self-start">
          <div data-reveal className="overflow-hidden rounded-panel bg-surface shadow-raised">
            <div className="flex items-center justify-between bg-signage px-5 py-4 text-on-signage">
              <p className="type-label">This programme</p>
              <p className="type-code text-sm text-signal">{programme.num} / 04</p>
            </div>
            <div className="p-5">
              <div className="flex items-center gap-3">
                <span className="inline-flex size-10 items-center justify-center rounded-control bg-sunken">
                  <Icon className="size-4" strokeWidth={1.7} aria-hidden />
                </span>
                <p className="font-semibold">{programme.title}</p>
              </div>
              <ul className="mt-5 space-y-3 border-t border-line pt-5">
                {programme.includes.slice(0, 4).map((item) => (
                  <li key={item} className="flex gap-3 type-small">
                    <Check className="mt-0.5 size-4 shrink-0 text-success" strokeWidth={2.25} aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
              <Button href={contactHref} block arrow className="mt-6">
                Ask about {programme.title}
              </Button>
            </div>
          </div>
        </aside>
      </div>

      {programme.slug === "ielts" ? (
        <>
          <div className="section-y-tight" />
          <ResultPosts />
        </>
      ) : null}

      <section className="page-container section-y-tight border-t border-line">
        <p className="type-label text-muted">Other programmes</p>
        <ul data-stagger className="mt-6 grid gap-3 sm:grid-cols-3">
          {others.map((item) => {
            const OtherIcon = item.icon;
            return (
              <li key={item.id}>
                <Link
                  href={programmePath(item)}
                  className="group flex h-full flex-col rounded-panel border border-line bg-surface p-5 transition-colors speed-fast hover:border-text"
                >
                  <span className="flex items-center gap-3">
                    <span className="inline-flex size-9 items-center justify-center rounded-control bg-sunken">
                      <OtherIcon className="size-4" strokeWidth={1.7} aria-hidden />
                    </span>
                    <span className="type-code text-xs text-subtle">{item.num}</span>
                  </span>
                  <span className="mt-4 font-semibold">{item.title}</span>
                  <span className="mt-2 type-small text-muted">{item.short}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>

      <ConsultSection interest={programme.id} />
    </>
  );
}
