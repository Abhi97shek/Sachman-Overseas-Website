import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-end overflow-hidden"
    >
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=2400&q=80"
          alt="Students walking across a university campus abroad"
          fill
          priority
          className="animate-ken-burns object-cover object-[center_35%]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/35" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/55 via-transparent to-ink/20" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 pb-16 pt-32 md:px-8 md:pb-24">
        <p className="animate-fade-up font-display text-5xl font-semibold leading-[0.95] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
          Sachman
          <span className="block font-light text-ember">Overseas</span>
        </p>

        <div className="mt-6 h-px w-24 origin-left scale-x-0 bg-ember animate-draw-line sm:w-32" />

        <h1 className="animate-fade-up delay-200 mt-6 max-w-xl font-display text-2xl font-medium leading-snug text-white/95 sm:text-3xl md:text-4xl">
          Your path from Pathankot to the world.
        </h1>

        <p className="animate-fade-up delay-300 mt-4 max-w-md text-base leading-relaxed text-white/75 sm:text-lg">
          IELTS &amp; PTE coaching with study-visa guidance for Canada, UK,
          Australia, Germany, and beyond.
        </p>

        <div className="animate-fade-up delay-500 mt-8 flex flex-wrap items-center gap-3">
          <Button
            render={<a href="#contact" />}
            className="h-12 gap-2 rounded-md bg-ember px-6 text-base font-semibold text-white hover:bg-ember-deep"
          >
            Book a free consult
            <ArrowRight className="size-4" />
          </Button>
          <Button
            render={<a href="#services" />}
            variant="outline"
            className="h-12 rounded-md border-white/35 bg-transparent px-6 text-base font-medium text-white hover:bg-white/10 hover:text-white"
          >
            Explore services
          </Button>
        </div>
      </div>
    </section>
  );
}
