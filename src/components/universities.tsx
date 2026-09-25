import { countryFlags, partnerUniversities, universityCountries } from "@/lib/universities";

const panelTone: Record<string, string> = {
  Canada: "bg-[#d7f3f0]",
  "United Kingdom": "bg-[#ffe7b0]",
  Australia: "bg-[#d9e6ff]",
  Germany: "bg-[#fde8e4]",
  "New Zealand": "bg-[#e3f5d8]",
  "United States": "bg-[#ece7ff]",
};

export function Universities() {
  return (
    <section id="universities" className="px-3 py-8 sm:px-4 md:px-5 md:py-10">
      <div className="mx-auto max-w-7xl rounded-[1.75rem] bg-[#f5f6f8] px-4 py-12 sm:rounded-[2rem] sm:px-6 sm:py-14 md:px-8 md:py-16">
        <div data-reveal className="mx-auto max-w-2xl text-center">
          <p className="text-[0.72rem] font-semibold tracking-[0.2em] text-tide uppercase">
            Partner campuses
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl md:text-5xl">
            Universities we are tied with.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-muted-foreground">
            {partnerUniversities.length} campuses across six countries. We prepare the offer
            and the visa file for each of these.
          </p>
        </div>

        <div data-stagger className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {universityCountries.map((country) => {
            const campuses = partnerUniversities.filter((campus) => campus.country === country);
            return (
              <article key={country} className={`rounded-[1.5rem] p-5 sm:p-6 ${panelTone[country]}`}>
                <div className="flex items-center gap-3">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={countryFlags[country]}
                    alt=""
                    className="size-11 rounded-full object-cover shadow-[0_4px_12px_rgba(18,22,28,0.12)]"
                  />
                  <div>
                    <h3 className="font-display text-xl font-bold tracking-tight text-ink">{country}</h3>
                    <p className="text-sm text-ink/60">
                      {campuses.length} campus{campuses.length === 1 ? "" : "es"}
                    </p>
                  </div>
                </div>
                <ul className="mt-4">
                  {campuses.map((campus) => (
                    <li key={campus.name} className="border-t border-ink/10 py-2.5">
                      <p className="font-semibold leading-snug text-ink">{campus.name}</p>
                      <p className="text-sm text-ink/55">{campus.city}</p>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
