import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SiteHeader } from "@/components/site-header";

const avatars = [
  { initials: "AP", tone: "bg-[#c4a484]" },
  { initials: "RK", tone: "bg-[#7a8f7a]" },
  { initials: "MS", tone: "bg-[#8a9bb0]" },
  { initials: "JS", tone: "bg-[#b08a7a]" },
];

const stats = [
  { value: "10+", label: "Years guiding students" },
  { value: "6+", label: "Study destinations" },
  { value: "IELTS · PTE", label: "Coaching focus" },
  { value: "Pathankot", label: "Your home base" },
];

export function Hero() {
  return (
    <section id="top" className="relative px-3 pt-3 sm:px-4 sm:pt-4 md:px-5 md:pt-5">
      <div className="relative mx-auto flex min-h-[min(72svh,34rem)] flex-col overflow-hidden rounded-[1.75rem] sm:min-h-[min(85svh,46rem)] sm:rounded-[2rem] md:min-h-[calc(100svh-2.5rem)] md:rounded-[2.5rem] lg:rounded-[3rem]">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-campus.jpg"
            alt="Graduates celebrating abroad against a bright city skyline"
            fill
            priority
            className="animate-slow-pan object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-white/20 to-black/30" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.32),transparent_62%)]" />
        </div>

        <SiteHeader />

        <div className="relative z-10 flex flex-1 flex-col px-5 pb-5 pt-[4.75rem] sm:px-8 sm:pb-7 sm:pt-24 md:px-10 md:pb-8 lg:px-12">
          <div className="mx-auto flex flex-1 flex-col items-center justify-center py-4 text-center sm:py-6">
            <div className="animate-fade-up inline-flex max-w-full items-center gap-2.5 rounded-full border border-white/55 bg-white/60 px-3 py-1.5 shadow-[0_8px_30px_rgba(18,22,28,0.08)] backdrop-blur-md sm:gap-3 sm:px-4 sm:py-2">
              <div className="flex -space-x-2" aria-hidden>
                {avatars.map((avatar) => (
                  <span
                    key={avatar.initials}
                    className={`flex size-7 items-center justify-center rounded-full border-2 border-white text-[0.55rem] font-semibold text-white sm:size-8 sm:text-[0.6rem] ${avatar.tone}`}
                  >
                    {avatar.initials}
                  </span>
                ))}
              </div>
              <p className="truncate text-left text-[0.72rem] font-medium leading-snug text-ink/80 sm:text-[0.8rem]">
                400+ students from Pathankot joined us
              </p>
            </div>

            <h1 className="animate-fade-up delay-150 mt-5 max-w-4xl font-display text-[clamp(2.35rem,7.5vw,4.85rem)] font-extrabold leading-[0.98] tracking-[-0.045em] text-ink sm:mt-6">
              IELTS. Visas. Abroad.
            </h1>

            <p className="animate-fade-up delay-300 mt-4 max-w-md text-sm leading-relaxed text-ink/70 sm:mt-5 sm:text-base md:text-[1.05rem]">
              IELTS, PTE, and study-visa guidance that takes Pathankot students
              from first mock test to boarding pass.
            </p>

            <Link
              href="/contact"
              className="animate-fade-up delay-450 mt-6 inline-flex h-12 items-center justify-center rounded-full bg-ink px-7 text-sm font-semibold text-white shadow-[0_12px_40px_rgba(18,22,28,0.25)] transition-transform hover:scale-[1.02] hover:bg-ink-soft sm:mt-7 sm:h-14 sm:px-8"
            >
              Book a free consult
            </Link>
          </div>

          <div className="animate-fade-up delay-600 mx-auto w-full max-w-4xl shrink-0">
            <div className="flex items-stretch gap-3 rounded-[1.35rem] border border-white/15 bg-ink/55 p-4 shadow-[0_20px_60px_rgba(18,22,28,0.28)] backdrop-blur-xl sm:rounded-[1.75rem] sm:p-5 md:gap-4 md:p-5">
              <div className="grid flex-1 grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-2 md:gap-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="min-w-0 text-left sm:px-2 md:px-3">
                    <p className="font-display text-lg font-bold tracking-tight text-white sm:text-xl md:text-2xl">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-[0.68rem] leading-snug text-white/65 sm:text-[0.72rem] md:text-xs">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
              <Link
                href="/services"
                aria-label="Explore services"
                className="hidden size-11 shrink-0 items-center justify-center self-center rounded-full bg-white text-ink transition-transform hover:scale-105 sm:inline-flex md:size-12"
              >
                <ArrowUpRight className="size-5" strokeWidth={2} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
