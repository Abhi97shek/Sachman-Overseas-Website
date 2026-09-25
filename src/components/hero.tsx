import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";
import { ArrowRight } from "lucide-react";
import { SiteHeader } from "@/components/site-header";

const interItalic = Inter({
  subsets: ["latin"],
  style: "italic",
  weight: ["600", "700"],
});

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

        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[5] h-28 bg-gradient-to-b from-transparent to-[#e8eef2]" />

        <SiteHeader />

        <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-5 pb-16 pt-24 text-center sm:px-8 sm:pt-28">
          <h1
            data-hero-title
            className={`${interItalic.className} max-w-4xl text-[clamp(2.45rem,5.6vw,4.35rem)] leading-[1.05] font-bold tracking-[-0.03em] text-[#12161c] italic`}
          >
            IELTS, PTE, and study visas
            <span className="mt-2 block text-[0.55em] font-semibold tracking-[-0.02em]">from Pathankot.</span>
          </h1>
          <p
            data-hero-copy
            className="mt-5 max-w-lg font-sans text-base leading-relaxed font-medium text-[#1c2836] sm:text-lg"
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
