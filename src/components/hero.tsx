import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SiteHeader } from "@/components/site-header";

export function Hero() {
  return (
    <section id="top" className="relative px-3 pt-3 sm:px-4 sm:pt-4 md:px-5 md:pt-5">
      <div className="relative mx-auto flex min-h-[min(78svh,40rem)] flex-col overflow-hidden rounded-[1.75rem] sm:min-h-[min(88svh,48rem)] sm:rounded-[2rem] md:min-h-[calc(100svh-2.5rem)] md:rounded-[2.75rem]">
        <div data-hero-photo className="absolute inset-0">
          <Image
            src="/images/hero-campus-walk.png"
            alt="Students with backpacks walking toward a university campus under a bright blue sky"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>

        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(6,22,48,0.72)_0%,rgba(6,22,48,0.42)_34%,rgba(6,22,48,0.12)_62%,transparent_76%)]" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-[#07182e]/55 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[5] h-28 bg-gradient-to-b from-transparent to-[#e8eef2]" />

        <SiteHeader />

        <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-5 pb-16 pt-24 text-center sm:px-8 sm:pt-28">
          <h1
            data-hero-title
            className="max-w-4xl font-display text-[clamp(2.5rem,6.4vw,4.8rem)] leading-[0.98] font-extrabold tracking-[-0.04em] text-white [text-shadow:0_2px_24px_rgba(4,14,32,0.55)]"
          >
            IELTS, PTE, and study visas
            <span className="mt-2 block text-[0.46em] font-semibold tracking-[-0.03em]">from Pathankot.</span>
          </h1>
          <p
            data-hero-copy
            className="mt-5 max-w-lg text-base leading-relaxed text-white sm:text-lg [text-shadow:0_1px_12px_rgba(4,14,32,0.7)]"
          >
            Spoken English, weekly mocks, and the visa file, from the centre on Dalhousie Road.
          </p>
          <div data-hero-cta className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
            <Link
              href="/contact"
              data-press
              className="inline-flex h-12 items-center gap-2 rounded-full bg-[#f0b429] pr-2 pl-5 text-sm font-semibold text-ink shadow-[0_10px_30px_rgba(18,22,28,0.18)]"
            >
              Book a free consult
              <span className="inline-flex size-8 items-center justify-center rounded-full bg-ink text-white">
                <ArrowRight className="size-4" />
              </span>
            </Link>
            <Link
              href="/services"
              data-press
              className="inline-flex h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-ink shadow-[0_8px_24px_rgba(8,20,40,0.18)] hover:bg-white/90"
            >
              Explore services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
