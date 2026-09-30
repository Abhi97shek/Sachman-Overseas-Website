import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Check } from "lucide-react";
import { PageShell } from "@/components/layout/page-shell";
import { DestinationTile } from "@/components/destinations/destination-tile";
import { Button } from "@/design-system/buttons/button";
import { countries, getCountry } from "@/lib/countries";
import { destinationCards } from "@/lib/destinations";
import { getStudyDestination, studyDestinations } from "@/lib/study-destinations";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

type Params = { slug: string };

export function generateStaticParams() {
  const slugs = new Set([
    ...countries.map((country) => country.slug),
    ...studyDestinations.map((country) => country.slug),
  ]);
  return [...slugs].map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const country = getCountry(slug);
  const destination = getStudyDestination(slug);
  const card = destinationCards.find((item) => item.slug === slug);
  const path = `/destinations/${slug}`;
  const name = country?.name ?? destination?.name;
  if (!name) return { title: "Country" };

  return pageMetadata({
    title: `Study in ${name} from Pathankot`,
    description:
      country?.overview ??
      `Study routes and visa guidance for ${name} from Sachman Overseas in Pathankot. Course shortlist, English test plan, and the visa file in one sequence.`,
    path,
    image: card?.image ?? country?.image,
  });
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="type-h3">{children}</h2>;
}

export default async function CountryPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const country = getCountry(slug);
  const destination = getStudyDestination(slug);
  const card = destinationCards.find((item) => item.slug === slug);
  if (!card || (!country && !destination)) notFound();

  const name = country?.name ?? card.name;
  const related = destinationCards
    .filter((item) => item.region === card.region && item.slug !== slug)
    .slice(0, 4);

  return (
    <PageShell>
      <article>
        <div className="px-3 sm:px-4">
          <div className="relative isolate flex min-h-[28rem] flex-col justify-end overflow-hidden rounded-frame bg-signage text-on-signage md:min-h-[36rem]">
            <div className="absolute inset-0 -z-10 animate-settle">
              <Image
                src={card.image}
                alt={country?.landmark ? `${name} — ${country.landmark}` : `Study in ${name}`}
                fill
                priority
                sizes="100vw"
                className="object-cover object-[center_62%]"
              />
            </div>
            <div aria-hidden className="absolute inset-0 -z-10 bg-linear-to-t from-signage via-signage/40 to-signage/10" />

            <div className="page-container pt-24 pb-10 md:pb-14">
              <Link
                data-intro
                href="/destinations"
                className="inline-flex items-center gap-2 type-label text-on-signage/80 transition-colors speed-fast hover:text-on-signage"
              >
                <ArrowLeft className="size-3.5" aria-hidden />
                All study countries
              </Link>
              <div data-intro className="mt-6 flex items-center gap-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={card.flag} alt="" className="size-8 rounded-full object-cover ring-2 ring-white/30" />
                <span className="inline-flex h-8 items-center rounded-[0.3rem] bg-signage px-2.5 type-code text-sm text-signal">
                  IXP → {card.airport}
                </span>
                <span className="type-label text-on-signage/80">{card.region}</span>
              </div>
              <h1 className="mt-5 overflow-hidden type-h1 text-white">
                <span data-intro="line" className="block">
                  {name}
                </span>
              </h1>
              {country?.landmark ? (
                <p data-intro className="mt-3 type-lead text-on-signage/80">
                  {country.landmark}
                </p>
              ) : null}
            </div>
          </div>
        </div>

        <div className="page-container section-y-tight grid gap-12 lg:grid-cols-[minmax(0,1fr)_22rem] lg:gap-20">
          <div className="min-w-0">
            <p data-reveal className="max-w-2xl type-lead">
              {country?.overview ??
                `We shortlist courses in ${name} against your marks, budget, and English score, then prepare the offer and the visa file in one sequence.`}
            </p>

            {country ? (
              <>
                <dl data-stagger className="mt-10 grid grid-cols-2 border-t border-l border-line sm:grid-cols-4">
                  {country.facts.map((fact) => (
                    <div key={fact.label} className="border-r border-b border-line p-4">
                      <dt className="type-label text-[0.625rem] text-subtle">{fact.label}</dt>
                      <dd className="mt-2 font-semibold">{fact.value}</dd>
                    </div>
                  ))}
                </dl>

                <section data-reveal className="mt-16">
                  <SectionTitle>Route overview</SectionTitle>
                  <p className="mt-4 max-w-2xl type-body text-muted">{country.story}</p>
                  <p className="mt-4 max-w-2xl type-body text-muted">{country.blurb}</p>
                </section>
              </>
            ) : null}

            {country?.visaGuide ? (
              <div className="mt-16 space-y-16">
                <section data-reveal>
                  <SectionTitle>Post-study work permit</SectionTitle>
                  <p className="mt-3 max-w-2xl type-body text-muted">{country.visaGuide.postStudy.intro}</p>
                  <div className="mt-6 border-t border-line">
                    {country.visaGuide.postStudy.rows.map((row) => (
                      <div
                        key={row.qualification}
                        className="grid gap-1 border-b border-line py-4 sm:grid-cols-[minmax(0,1fr)_8rem] sm:items-center"
                      >
                        <p className="font-medium">{row.qualification}</p>
                        <p className="type-code sm:text-right">{row.stay}</p>
                      </div>
                    ))}
                  </div>
                  <ul className="mt-5 space-y-2">
                    {country.visaGuide.postStudy.notes.map((note) => (
                      <li key={note} className="flex gap-3 type-small text-muted">
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-signal" />
                        {note}
                      </li>
                    ))}
                  </ul>
                </section>

                <section data-reveal>
                  <SectionTitle>Visa processing time</SectionTitle>
                  <p className="mt-3 max-w-2xl type-body text-muted">{country.visaGuide.processing.intro}</p>
                  <div className="mt-6 grid gap-3 sm:grid-cols-3">
                    {country.visaGuide.processing.rows.map((row) => (
                      <div key={row.label} className="rounded-panel bg-signage p-5 text-on-signage">
                        <p className="type-label text-[0.625rem] text-on-signage-muted">{row.label}</p>
                        <p className="mt-3 type-code text-2xl text-signal">{row.value}</p>
                        <p className="mt-3 type-small text-on-signage-muted">{row.detail}</p>
                      </div>
                    ))}
                  </div>
                  <p className="mt-5 max-w-2xl type-small text-muted">{country.visaGuide.processing.note}</p>
                </section>

                <section data-reveal>
                  <SectionTitle>Documents required</SectionTitle>
                  <p className="mt-3 max-w-2xl type-body text-muted">
                    ImmiAccount shows the exact list for your file. These are the papers a typical student visa
                    needs before lodgement.
                  </p>
                  <ul className="mt-6 grid gap-x-8 border-t border-line sm:grid-cols-2">
                    {country.visaGuide.documents.map((doc) => (
                      <li key={doc.title} className="border-b border-line py-4">
                        <p className="font-semibold">{doc.title}</p>
                        <p className="mt-1 type-small text-muted">{doc.detail}</p>
                      </li>
                    ))}
                  </ul>
                </section>

                <section data-reveal>
                  <SectionTitle>How the visa application works</SectionTitle>
                  <p className="mt-3 max-w-2xl type-body text-muted">{country.visaGuide.application.intro}</p>
                  <ol className="mt-6 space-y-5">
                    {country.visaGuide.application.steps.map((step, index) => (
                      <li key={step.title} className="flex gap-4">
                        <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-control bg-signal type-code text-sm text-on-signal">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span>
                          <span className="block font-semibold">{step.title}</span>
                          <span className="mt-1 block type-small text-muted">{step.detail}</span>
                        </span>
                      </li>
                    ))}
                  </ol>
                  <div className="mt-8 rounded-panel border border-line bg-surface p-6">
                    <p className="type-label text-muted">Genuine Student questions</p>
                    <ol className="mt-4 space-y-3">
                      {country.visaGuide.application.questions.map((question, index) => (
                        <li key={question} className="flex gap-3 type-body">
                          <span className="type-code text-subtle">{index + 1}.</span>
                          {question}
                        </li>
                      ))}
                    </ol>
                  </div>
                </section>
              </div>
            ) : null}
          </div>

          <aside className="lg:sticky lg:top-[calc(var(--header-height)+2rem)] lg:self-start">
            <div data-reveal className="overflow-hidden rounded-panel bg-surface shadow-raised">
              <div className="flex items-center justify-between bg-signage px-5 py-4 text-on-signage">
                <p className="type-label">Your route</p>
                <p className="type-code text-sm text-signal">IXP → {card.airport}</p>
              </div>
              <div className="p-5">
                <p className="type-h3">{name}</p>
                <ul className="mt-5 space-y-3 border-t border-line pt-5">
                  {(country?.included ?? [
                    "Course and university shortlist",
                    "English test plan",
                    "Visa document checklist",
                    "Interview preparation",
                  ]).map((item) => (
                    <li key={item} className="flex gap-3 type-small">
                      <Check className="mt-0.5 size-4 shrink-0 text-success" strokeWidth={2.25} aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
                <Button href={`/contact?country=${slug}`} block arrow className="mt-6">
                  Plan a {name} study visa
                </Button>
              </div>
            </div>
          </aside>
        </div>

        {related.length ? (
          <section className="page-container section-y-tight border-t border-line">
            <p className="type-label text-muted">More in {card.region}</p>
            <p className="mt-3 max-w-2xl type-small text-muted">
              Compare nearby routes, or see{" "}
              <Link href="/services/ielts" className="font-medium text-text underline underline-offset-4">
                IELTS and PTE coaching in Pathankot
              </Link>{" "}
              and{" "}
              <Link href="/contact" className="font-medium text-text underline underline-offset-4">
                book a free counselling session
              </Link>
              .
            </p>
            <div data-stagger className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((place) => (
                <DestinationTile key={place.slug} place={place} />
              ))}
            </div>
          </section>
        ) : null}
      </article>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Study countries", path: "/destinations" },
          { name, path: `/destinations/${slug}` },
        ])}
      />
    </PageShell>
  );
}
