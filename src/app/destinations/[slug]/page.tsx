import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/page-shell";
import { countries, getCountry } from "@/lib/countries";
import { getStudyDestination, studyDestinations } from "@/lib/study-destinations";

type Params = { slug: string };

export function generateStaticParams() {
  const slugs = new Set([
    ...countries.map((country) => country.slug),
    ...studyDestinations.map((country) => country.slug),
  ]);
  return [...slugs].map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const country = getCountry(slug);
  const destination = getStudyDestination(slug);
  if (!country && !destination) return { title: "Country | Sachman Overseas" };
  if (!country && destination) {
    return {
      title: `${destination.name} | Sachman Overseas`,
      description: `Study routes and visa guidance for ${destination.name} from Sachman Overseas in Pathankot.`,
    };
  }
  return {
    title: `${country.name} | Sachman Overseas`,
    description: country.overview,
  };
}

const crops = [
  "object-[center_20%]",
  "object-center",
  "object-[center_80%]",
  "object-[center_35%]",
];

export default async function CountryPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const country = getCountry(slug);
  const destination = getStudyDestination(slug);
  if (!country && destination) {
    return (
      <PageShell>
        <article className="section-shell">
          <div className="w-full overflow-hidden rounded-[1.75rem] bg-white">
            <div className="relative aspect-[4/3] bg-ink">
              <Image
                src={`/images/landmarks/${destination.slug}.jpg`}
                alt=""
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 768px"
              />
            </div>
            <div className="px-6 py-10 sm:px-10 sm:py-12">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`/images/flags/${destination.code}.svg`}
              alt=""
              className="size-14 rounded-full object-cover shadow-[0_6px_16px_rgba(18,22,28,0.12)]"
            />
            <p className="mt-6 text-[0.72rem] font-semibold tracking-[0.16em] text-tide uppercase">
              Study route · {destination.region}
            </p>
            <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-ink">
              {destination.name}
            </h1>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              We shortlist courses in {destination.name} against your marks, budget, and
              English score, then prepare the offer and the visa file in one sequence.
            </p>
            <Link
              href={`/contact?country=${destination.slug}`}
              className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-ink px-6 text-sm font-semibold text-white"
            >
              Plan this route
            </Link>
            </div>
          </div>
        </article>
      </PageShell>
    );
  }
  if (!country) notFound();

  return (
    <PageShell>
      <article className="section-shell">
        <div className="overflow-hidden rounded-[1.75rem] border border-ink/8 bg-white sm:rounded-[2rem]">
          <div className="grid grid-cols-2 gap-2 p-2 sm:grid-cols-4 sm:p-3 md:gap-3">
            <div className="relative col-span-2 aspect-[4/3] overflow-hidden rounded-2xl bg-ink sm:col-span-2 sm:row-span-2 sm:aspect-auto sm:min-h-[22rem]">
              <Image
                src={country.image}
                alt={country.landmark}
                fill
                priority
                className="object-cover object-[center_30%]"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            {crops.slice(0, 2).map((crop) => (
              <div
                key={crop}
                className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-ink sm:aspect-auto"
              >
                <Image
                  src={country.image}
                  alt=""
                  fill
                  className={`object-cover ${crop}`}
                  sizes="25vw"
                />
              </div>
            ))}
            <div className="relative col-span-2 aspect-[16/7] overflow-hidden rounded-2xl bg-ink sm:col-span-2 sm:aspect-auto">
              <Image
                src={country.image}
                alt=""
                fill
                className="object-cover object-[center_70%]"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>
          </div>

          <div className="grid gap-10 px-5 py-8 sm:px-8 md:grid-cols-[minmax(0,1fr)_18rem] md:px-10 md:py-10 lg:grid-cols-[minmax(0,1fr)_20rem]">
            <div>
              <p className="text-[0.72rem] font-semibold tracking-[0.16em] text-tide uppercase">
                Study route · {country.landmark}
              </p>
              <h1 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl md:text-5xl">
                {country.headline}
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
                {country.overview}
              </p>

              <dl className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {country.facts.map((fact) => (
                  <div
                    key={fact.label}
                    className="rounded-2xl border border-ink/8 bg-[#f6f7f9] px-3 py-3"
                  >
                    <dt className="text-[0.65rem] tracking-[0.14em] text-muted-foreground uppercase">
                      {fact.label}
                    </dt>
                    <dd className="mt-1 text-sm font-semibold text-ink">{fact.value}</dd>
                  </div>
                ))}
              </dl>

              <h2 className="mt-10 font-display text-2xl font-bold tracking-tight text-ink">
                Route overview
              </h2>
              <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">
                {country.story}
              </p>
              <p className="mt-3 max-w-3xl text-base leading-relaxed text-muted-foreground">
                {country.blurb}
              </p>

              {country.visaGuide ? (
                <div className="mt-12 space-y-10">
                  <section>
                    <h2 className="font-display text-2xl font-bold tracking-tight text-ink">
                      Post-study work permit
                    </h2>
                    <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                      {country.visaGuide.postStudy.intro}
                    </p>
                    <div className="mt-4 overflow-hidden rounded-2xl border border-ink/8">
                      {country.visaGuide.postStudy.rows.map((row) => (
                        <div
                          key={row.qualification}
                          className="grid gap-1 border-b border-ink/8 px-4 py-3 last:border-b-0 sm:grid-cols-[minmax(0,1fr)_7rem] sm:items-center sm:gap-4"
                        >
                          <p className="text-sm font-medium text-ink">{row.qualification}</p>
                          <p className="text-sm font-semibold text-tide sm:text-right">{row.stay}</p>
                        </div>
                      ))}
                    </div>
                    <ul className="mt-4 space-y-2">
                      {country.visaGuide.postStudy.notes.map((note) => (
                        <li key={note} className="flex gap-2 text-sm leading-relaxed text-muted-foreground">
                          <span className="mt-2 size-1.5 shrink-0 rounded-full bg-tide" />
                          {note}
                        </li>
                      ))}
                    </ul>
                  </section>

                  <section>
                    <h2 className="font-display text-2xl font-bold tracking-tight text-ink">
                      Visa processing time
                    </h2>
                    <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                      {country.visaGuide.processing.intro}
                    </p>
                    <div className="mt-4 grid gap-3 sm:grid-cols-3">
                      {country.visaGuide.processing.rows.map((row) => (
                        <div key={row.label} className="rounded-2xl border border-ink/8 bg-[#f6f7f9] px-4 py-4">
                          <p className="text-[0.65rem] tracking-[0.14em] text-muted-foreground uppercase">
                            {row.label}
                          </p>
                          <p className="mt-1 font-display text-xl font-bold text-ink">{row.value}</p>
                          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{row.detail}</p>
                        </div>
                      ))}
                    </div>
                    <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                      {country.visaGuide.processing.note}
                    </p>
                  </section>

                  <section>
                    <h2 className="font-display text-2xl font-bold tracking-tight text-ink">
                      Documents required
                    </h2>
                    <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                      ImmiAccount shows the exact list for your file. These are the papers a typical student visa needs before lodgement.
                    </p>
                    <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                      {country.visaGuide.documents.map((doc) => (
                        <li key={doc.title} className="rounded-2xl border border-ink/8 px-4 py-3">
                          <p className="text-sm font-semibold text-ink">{doc.title}</p>
                          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{doc.detail}</p>
                        </li>
                      ))}
                    </ul>
                  </section>

                  <section>
                    <h2 className="font-display text-2xl font-bold tracking-tight text-ink">
                      How the visa application works
                    </h2>
                    <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                      {country.visaGuide.application.intro}
                    </p>
                    <ol className="mt-5 space-y-3">
                      {country.visaGuide.application.steps.map((step, index) => (
                        <li key={step.title} className="flex gap-3">
                          <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-tide text-[0.7rem] font-semibold text-white">
                            {index + 1}
                          </span>
                          <span>
                            <span className="block text-sm font-semibold text-ink">{step.title}</span>
                            <span className="text-sm leading-relaxed text-muted-foreground">{step.detail}</span>
                          </span>
                        </li>
                      ))}
                    </ol>
                    <div className="mt-6 rounded-2xl border border-ink/8 bg-[#f6f7f9] px-4 py-4">
                      <h3 className="font-display text-lg font-bold text-ink">Genuine Student questions</h3>
                      <ol className="mt-3 space-y-2">
                        {country.visaGuide.application.questions.map((question, index) => (
                          <li key={question} className="flex gap-3 text-sm leading-relaxed text-ink">
                            <span className="font-semibold text-tide">{index + 1}.</span>
                            {question}
                          </li>
                        ))}
                      </ol>
                    </div>
                  </section>
                </div>
              ) : null}
            </div>

            <aside className="h-fit rounded-[1.5rem] border border-ink/8 bg-[#f6f7f9] p-5 md:sticky md:top-24">
              <div className="flex items-center gap-2">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={country.flag} alt="" className="size-6 rounded-full object-cover" />
                <p className="font-display text-lg font-bold text-ink">{country.name}</p>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{country.landmark}</p>
              <ul className="mt-5 space-y-2 border-t border-ink/10 pt-5 text-sm text-ink">
                {country.included.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-tide" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href={`/contact?country=${country.slug}`}
                className="mt-6 inline-flex h-12 w-full items-center justify-center rounded-full bg-ink text-sm font-semibold text-white transition-colors hover:bg-ink-soft"
              >
                Plan this route
              </Link>
            </aside>
          </div>
        </div>
      </article>
    </PageShell>
  );
}
