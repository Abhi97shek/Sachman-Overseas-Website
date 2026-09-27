import Image from "next/image";
import Link from "next/link";
import { phone } from "@/lib/institute";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden text-white">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-journey.jpg"
          alt=""
          fill
          priority
          quality={90}
          sizes="100vw"
          className="object-cover object-[center_45%]"
        />
        <div aria-hidden className="absolute inset-0 bg-[#0d1014]/35" />
        <div
          aria-hidden
          className="absolute inset-0 bg-linear-to-t from-[#0d1014]/80 via-transparent to-[#0d1014]/25"
        />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[32rem] max-w-4xl flex-col items-center justify-center px-6 py-20 text-center md:min-h-[40rem] md:py-28">
        <h1 className="type-display text-balance">
          <span className="block overflow-hidden pb-[0.08em]">
            <span data-intro="line" className="block">
              Study visas,
            </span>
          </span>
          <span className="block overflow-hidden pb-[0.08em]">
            <span data-intro="line" className="block">
              from this centre.
            </span>
          </span>
        </h1>

        <p data-intro className="mt-6 max-w-xl type-lead text-white/80 text-pretty">
          Walk in for free counselling in 10 minutes — coaching, the offer letter, and the visa file
          from one classroom.
        </p>

        <form
          data-intro
          action="/contact"
          method="get"
          className="mt-10 flex w-full max-w-2xl flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center"
        >
          <label className="sr-only" htmlFor="hero-phone">
            Phone number
          </label>
          <input
            id="hero-phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="Your phone"
            className="h-12 rounded-control border-0 bg-white/92 px-5 type-body text-[#0d1014] outline-none placeholder:text-[#66717d] focus-visible:ring-2 focus-visible:ring-signal"
          />
          <button
            type="submit"
            className="h-12 shrink-0 rounded-control bg-signal px-6 type-small font-medium text-on-signal transition-colors speed-fast hover:bg-signal-hover"
          >
            Book counselling
          </button>
          <Link
            href={phone.href}
            className="inline-flex h-12 shrink-0 items-center justify-center rounded-control border border-white/35 bg-white/10 px-6 type-small font-medium text-white backdrop-blur-sm transition-colors speed-fast hover:border-white/70"
          >
            Call the centre
          </Link>
        </form>
      </div>

      <p className="relative z-10 border-t border-white/10 bg-[#0d1014]/80 px-6 py-3 text-center type-small text-white/70">
        Dalhousie Road, Pathankot · A call is 5 seconds from anywhere ·{" "}
        <a href={phone.href} className="text-white underline-offset-4 hover:underline">
          {phone.display}
        </a>
      </p>
    </section>
  );
}
