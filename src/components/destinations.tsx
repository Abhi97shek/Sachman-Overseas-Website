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
    <section id="destinations" className="bg-ink text-white">
      <div className="mx-auto max-w-6xl px-6 py-24 md:px-8 md:py-28">
        <p className="text-[0.7rem] font-semibold tracking-[0.22em] text-tide uppercase">
          Study destinations
        </p>
        <h2 className="mt-4 max-w-xl font-display text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
          Where your next chapter begins.
        </h2>
        <p className="mt-4 max-w-lg text-base leading-relaxed text-white/65 md:text-lg">
          Student, tourist, and visitor visas for leading destinations — matched
          to your scores, budget, and goals.
        </p>
      </div>

      <div className="flex flex-col">
        {destinations.map((place, i) => (
          <article
            key={place.name}
            className="group relative min-h-[52vh] overflow-hidden md:min-h-[58vh]"
          >
            <Image
              src={place.image}
              alt={`${place.name} skyline`}
              fill
              className="object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-[1.04]"
              sizes="100vw"
              priority={i < 2}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/45 to-ink/20" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />

            <div className="relative z-10 mx-auto flex h-full min-h-[52vh] max-w-6xl flex-col justify-end px-6 py-14 md:min-h-[58vh] md:px-8 md:py-20">
              <span className="font-display text-xs font-semibold tracking-[0.2em] text-white/45">
                {String(i + 1).padStart(2, "0")} / {String(destinations.length).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-display text-[clamp(2.5rem,8vw,5.5rem)] font-extrabold leading-[0.92] tracking-[-0.03em]">
                {place.name}
              </h3>
              <div className="mt-5 h-px w-16 origin-left scale-x-100 bg-tide transition-transform duration-500 group-hover:scale-x-150" />
              <p className="mt-5 max-w-sm text-base text-white/70 md:text-lg">
                {place.focus}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
