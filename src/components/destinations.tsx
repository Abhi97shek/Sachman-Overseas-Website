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
    <section id="destinations" className="bg-ink py-20 text-white md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold tracking-[0.18em] text-ember uppercase">
            Study destinations
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            Where your next chapter begins.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-white/70">
            We guide student, tourist, and visitor visas for leading study
            destinations — matched to your scores, budget, and goals.
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.map((place, i) => (
            <article
              key={place.name}
              className="group relative aspect-[4/5] overflow-hidden sm:aspect-[3/4]"
            >
              <Image
                src={place.image}
                alt={`${place.name} skyline`}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                priority={i < 2}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                <h3 className="font-display text-2xl font-semibold">{place.name}</h3>
                <p className="mt-1 text-sm text-white/70">{place.focus}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
