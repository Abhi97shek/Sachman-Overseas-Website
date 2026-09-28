import Image from "next/image";
import { Inter } from "next/font/google";
import { Button } from "@/design-system/buttons/button";

const interItalic = Inter({
  subsets: ["latin"],
  style: "italic",
  weight: ["600", "700"],
  display: "swap",
  preload: false,
});

export function Hero() {
  return (
    <section className="relative z-0 -mt-(--header-height) px-3 pt-3 sm:px-4 sm:pt-4 md:px-5 md:pt-5">
      <div className="relative isolate flex min-h-[calc(100svh-1.5rem)] flex-col overflow-hidden rounded-frame">
        <div data-parallax="0.08" className="absolute inset-0">
          <Image
            src="/images/hero-campus-walk.webp"
            alt="Students with backpacks walking toward a university campus under a bright blue sky"
            width={1556}
            height={1011}
            priority
            quality={72}
            sizes="(max-width: 768px) 100vw, 1600px"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
        </div>
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-[5] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.78)_0%,rgba(232,244,255,0.42)_38%,transparent_68%)]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 z-[5] h-28 bg-linear-to-b from-transparent to-canvas"
        />

        <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-5 py-16 text-center sm:px-8 sm:py-24">
          <h1
            className={`${interItalic.className} max-w-4xl text-[clamp(2rem,6.4vw,4.35rem)] leading-[1.05] font-bold tracking-[-0.03em] text-[#0b2744] italic [text-shadow:0_1px_0_rgb(255_255_255_/_0.7),0_0_32px_rgb(255_255_255_/_0.95)]`}
          >
            <span className="block pb-[0.08em]">IELTS, PTE, and study visas</span>
            <span className="mt-2 block text-[0.55em] font-semibold tracking-[-0.02em]">from Pathankot.</span>
          </h1>
          <p
            data-intro
            className="mt-5 max-w-lg type-lead font-medium text-[#16324f] [text-shadow:0_1px_12px_rgb(255_255_255_/_0.9)]"
          >
            Spoken English, weekly mocks, and the visa file, from the centre on Dalhousie Road.
          </p>
          <div data-intro className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
            <Button href="/contact" arrow>
              Book a free consult
            </Button>
            <Button href="/services" variant="light">
              Explore services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
