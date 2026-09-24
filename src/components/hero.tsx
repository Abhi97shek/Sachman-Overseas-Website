import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-end overflow-hidden"
    >
      <div className="absolute inset-0">
        <Image
          src="/images/hero-campus.jpg"
          alt="Graduates celebrating on a university campus abroad"
          fill
          priority
          className="animate-ken-burns object-cover object-[center_30%]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/55 via-transparent to-transparent opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/65 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/45 via-ink/10 to-transparent md:from-ink/40 md:via-transparent" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-20 pt-36 sm:px-8 md:pb-28 md:pt-40">
        <div className="max-w-2xl">
          <p className="animate-fade-up font-display text-[2.75rem] font-semibold leading-[0.92] tracking-[-0.02em] text-white sm:text-6xl md:text-7xl lg:text-[5.25rem]">
            Sachman
            <span className="mt-1 block font-light tracking-[-0.01em] text-ember sm:mt-1.5">
              Overseas
            </span>
          </p>

          <div className="mt-7 h-px w-16 bg-ember animate-draw-line sm:mt-8 sm:w-20" />

          <h1 className="animate-fade-up delay-200 mt-7 max-w-lg font-display text-[1.35rem] font-medium leading-[1.35] tracking-tight text-white sm:mt-8 sm:text-3xl md:text-[2rem]">
            Your path from Pathankot to the world.
          </h1>

          <p className="animate-fade-up delay-300 mt-4 max-w-md text-[0.95rem] leading-relaxed text-white/78 sm:text-lg">
            IELTS &amp; PTE coaching with study-visa guidance for Canada, UK,
            Australia, Germany, and beyond.
          </p>

          <div className="animate-fade-up delay-500 mt-9 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:items-center">
            <a
              href="#contact"
              className={cn(
                buttonVariants({ variant: "default" }),
                "h-12 gap-2 rounded-md bg-ember px-7 text-[0.95rem] font-semibold tracking-wide text-white shadow-[0_10px_30px_-12px_rgba(201,123,58,0.7)] transition-[background-color,transform] hover:bg-ember-deep hover:text-white active:translate-y-px"
              )}
            >
              Book a free consult
              <ArrowRight className="size-4 opacity-90" />
            </a>
            <a
              href="#services"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "h-12 rounded-md border-white/40 bg-white/5 px-7 text-[0.95rem] font-medium text-white backdrop-blur-[2px] transition-colors hover:border-white/60 hover:bg-white/12 hover:text-white"
              )}
            >
              Explore services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
