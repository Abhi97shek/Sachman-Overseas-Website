import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/page-shell";
import { countries, getCountry } from "@/lib/countries";

type Params = { slug: string };

export function generateStaticParams() {
  return countries.map((country) => ({ slug: country.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const country = getCountry(slug);
  if (!country) return { title: "Country | Sachman Overseas" };
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
  if (!country) notFound();

  return (
    <PageShell>
      <article className="px-3 py-6 sm:px-4 md:px-5 md:py-8">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[1.75rem] border border-ink/8 bg-white shadow-[0_24px_70px_rgba(18,22,28,0.06)] sm:rounded-[2rem]">
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
              <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">
                {country.blurb}
              </p>
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
