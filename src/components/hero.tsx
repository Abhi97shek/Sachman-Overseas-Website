import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SiteHeader } from "@/components/site-header";

export function Hero() {
  return (
    <section id="top" className="relative px-3 pt-3 sm:px-4 sm:pt-4 md:px-5 md:pt-5">
      <div className="relative mx-auto flex min-h-[min(78svh,40rem)] flex-col overflow-hidden rounded-[1.75rem] sm:min-h-[min(88svh,48rem)] sm:rounded-[2rem] md:min-h-[calc(100svh-2.5rem)] md:rounded-[2.75rem]">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-overseas.jpg"
            alt="Students leaving for a painted university campus abroad"
            fill
            priority
            className="object-cover object-[center_42%]"
            sizes="100vw"
          />
        </div>

        <SiteHeader />

        <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-5 pb-16 pt-24 text-center sm:px-8 sm:pt-28">
          <h1 className="animate-fade-up max-w-4xl font-display text-[clamp(2.6rem,7vw,5.4rem)] leading-[0.95] font-extrabold tracking-[-0.045em] text-white drop-shadow-[0_8px_24px_rgba(8,40,90,0.25)]">
            A brighter path
            <span className="mt-1 block font-medium italic">from Pathankot.</span>
          </h1>
          <p className="animate-fade-up delay-150 mt-5 max-w-md text-sm leading-relaxed text-white/90 sm:text-base">
            IELTS, PTE, and study-visa guidance that takes you from the first
            mock test to a campus abroad.
          </p>
          <div className="animate-fade-up delay-300 mt-8 flex flex-col items-center gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex h-12 items-center gap-2 rounded-full bg-[#f0b429] pr-2 pl-5 text-sm font-semibold text-ink shadow-[0_10px_30px_rgba(18,22,28,0.18)] transition-transform hover:scale-[1.02]"
            >
              Book a free consult
              <span className="inline-flex size-8 items-center justify-center rounded-full bg-ink text-white">
                <ArrowRight className="size-4" />
              </span>
            </Link>
            <Link
              href="/services"
              className="inline-flex h-12 items-center justify-center rounded-full border border-white/80 bg-white/10 px-6 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/20"
            >
              Explore services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
