import Image from "next/image";

const destinations = [
  {
    name: "Canada",
    focus: "Colleges & university pathways",
    image: "/images/canada.jpg",
  },
  {
    name: "United Kingdom",
    focus: "Undergraduate & postgraduate study",
    image: "/images/uk.jpg",
  },
  {
    name: "Australia",
    focus: "Courses with strong career outcomes",
    image: "/images/australia.jpg",
  },
  {
    name: "Germany",
    focus: "Affordable public university options",
    image: "/images/germany.jpg",
  },
  {
    name: "New Zealand",
    focus: "Quality education in a safe setting",
    image: "/images/nz.jpg",
  },
  {
    name: "United States",
    focus: "Universities across every major city",
    image: "/images/usa.jpg",
  },
];

export function Destinations() {
  return (
    <section id="destinations" className="px-3 pb-6 sm:px-4 md:px-5">
      <div className="mx-auto overflow-hidden rounded-[1.75rem] bg-ink text-white sm:rounded-[2rem] md:rounded-[2.5rem]">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-8 md:py-24">
          <p className="text-[0.72rem] font-semibold tracking-[0.2em] text-tide uppercase">
            Study destinations
          </p>
          <h2 className="mt-4 max-w-xl font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Where your next chapter begins.
          </h2>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-white/65 md:text-lg">
            Student, tourist, and visitor visas for leading destinations —
            matched to your scores, budget, and goals.
          </p>
        </div>

        <div className="relative pb-3 sm:pb-4 lg:pb-5">
          <div
            className="flex snap-x snap-mandatory gap-3 overflow-x-auto px-3 pb-2 sm:px-4 lg:px-5 [scrollbar-width:thin]"
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            {destinations.map((place, i) => (
              <article
                key={place.name}
                className="group relative aspect-[4/5] w-[min(78vw,20rem)] shrink-0 snap-center overflow-hidden rounded-[1.35rem] sm:aspect-[3/4] sm:w-[min(42vw,22rem)] sm:rounded-[1.5rem] md:w-[min(30vw,22rem)] lg:w-[min(24vw,22rem)]"
              >
                <Image
                  src={place.image}
                  alt={`${place.name} skyline`}
                  fill
                  className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.05]"
                  sizes="(max-width: 640px) 78vw, (max-width: 1024px) 42vw, 24vw"
                  priority={i < 2}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/25 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-7">
                  <span className="text-[0.68rem] font-semibold tracking-[0.18em] text-white/50 uppercase">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-2 font-display text-2xl font-bold tracking-tight md:text-3xl">
                    {place.name}
                  </h3>
                  <p className="mt-2 max-w-xs text-sm text-white/70 md:text-base">
                    {place.focus}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
