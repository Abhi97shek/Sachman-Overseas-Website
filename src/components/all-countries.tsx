import Link from "next/link";
import { studyDestinations, studyRegions } from "@/lib/study-destinations";

export function AllCountries() {
  return (
    <section id="all-countries" className="px-3 py-8 sm:px-4 md:px-5 md:py-10">
      <div className="mx-auto max-w-7xl rounded-[1.75rem] bg-[#f5f6f8] px-4 py-12 sm:rounded-[2rem] sm:px-6 sm:py-14 md:px-8 md:py-16">
        <div data-reveal className="mx-auto max-w-2xl text-center">
          <p className="text-[0.72rem] font-semibold tracking-[0.2em] text-tide uppercase">
            Where you can study
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl md:text-5xl">
            {studyDestinations.length} countries we deal with.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-muted-foreground">
            From the main study routes to campuses across Europe, Asia, and Africa.
            Pick a country and we will line up the course and the visa file.
          </p>
        </div>

        <div className="mt-12 space-y-10">
          {studyRegions.map((region) => {
            const countries = studyDestinations.filter((country) => country.region === region);
            return (
              <div key={region}>
                <h3 className="font-display text-lg font-bold text-ink">{region}</h3>
                <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {countries.map((country) => (
                    <li key={country.slug}>
                      <Link
                        href={`/destinations/${country.slug}`}
                        data-press
                        className="flex items-center gap-3 rounded-2xl bg-white px-3 py-3 shadow-[0_8px_24px_rgba(18,22,28,0.04)] transition-colors hover:bg-white/70"
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={`/images/flags/${country.code}.svg`}
                          alt=""
                          className="size-9 shrink-0 rounded-full object-cover shadow-[inset_0_0_0_1px_rgba(18,22,28,0.08)]"
                        />
                        <span className="font-semibold text-ink">{country.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
