import Image from "next/image";

export function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-journey.jpg"
          alt="Airplane wing above clouds on the way to study abroad"
          fill
          priority
          className="animate-slow-pan object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/25" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/50 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-6 pb-16 pt-28 md:px-8 md:pb-24">
        <p className="animate-fade-up font-display text-[clamp(3.25rem,12vw,7.5rem)] font-extrabold leading-[0.9] tracking-[-0.04em] text-white">
          Sachman
          <span className="mt-1 block text-tide">Overseas</span>
        </p>

        <div className="mt-8 h-px w-20 bg-tide animate-rise-line" />

        <h1 className="animate-fade-up delay-300 mt-7 max-w-xl font-display text-2xl font-semibold leading-snug tracking-tight text-white md:text-3xl">
          Study abroad, prepared with care.
        </h1>

        <p className="animate-fade-up delay-450 mt-4 max-w-md text-base leading-relaxed text-white/75 md:text-lg">
          IELTS, PTE, and study-visa guidance for students from Pathankot.
        </p>

        <div className="animate-fade-up delay-600 mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href="#contact"
            className="inline-flex h-12 items-center justify-center bg-tide px-7 text-sm font-semibold tracking-wide text-white transition-colors hover:bg-tide-deep"
          >
            Book a free consult
          </a>
          <a
            href="#services"
            className="inline-flex h-12 items-center justify-center border border-white/35 px-7 text-sm font-medium text-white transition-colors hover:border-white hover:bg-white/10"
          >
            View services
          </a>
        </div>
      </div>
    </section>
  );
}
