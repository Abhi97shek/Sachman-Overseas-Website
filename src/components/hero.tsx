import Image from "next/image";
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
      <div className="relative mx-auto min-h-[calc(100svh-1.5rem)] overflow-hidden rounded-[1.75rem] sm:min-h-[calc(100svh-2rem)] sm:rounded-[2rem] md:rounded-[2.5rem] lg:rounded-[3rem]">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-campus.jpg"
            alt="Graduates celebrating abroad against a bright city skyline"
            fill
            priority
            className="animate-slow-pan object-cover object-[center_35%]"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/45 via-white/15 to-black/25" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.28),transparent_62%)]" />
        </div>

        <SiteHeader />

        <div className="relative z-10 flex min-h-[calc(100svh-1.5rem)] flex-col px-5 pb-6 pt-24 sm:min-h-[calc(100svh-2rem)] sm:px-8 sm:pb-8 md:px-10 md:pb-10 lg:px-12">
          <div className="mx-auto flex flex-1 flex-col items-center justify-center text-center">
            <div className="animate-fade-up inline-flex max-w-full items-center gap-2.5 rounded-full border border-white/50 bg-white/55 px-3 py-1.5 shadow-[0_8px_30px_rgba(18,22,28,0.08)] backdrop-blur-md sm:gap-3 sm:px-4 sm:py-2">
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

            <h1 className="animate-fade-up delay-150 mt-7 max-w-4xl font-display text-[clamp(2.6rem,9vw,5.75rem)] font-extrabold leading-[0.95] tracking-[-0.045em] text-ink sm:mt-8">
              IELTS. Visas. Abroad.
            </h1>

            <p className="animate-fade-up delay-300 mt-5 max-w-md text-sm leading-relaxed text-ink/70 sm:mt-6 sm:text-base md:text-lg">
              IELTS, PTE, and study-visa guidance that takes Pathankot students
              from first mock test to boarding pass.
            </p>

            <a
              href="#contact"
              className="animate-fade-up delay-450 mt-8 inline-flex h-12 items-center justify-center rounded-full bg-ink px-7 text-sm font-semibold text-white shadow-[0_12px_40px_rgba(18,22,28,0.25)] transition-transform hover:scale-[1.02] hover:bg-ink-soft sm:mt-10 sm:h-14 sm:px-8"
            >
              Book a free consult
            </a>
          </div>

          <div className="animate-fade-up delay-600 mx-auto mt-10 w-full max-w-4xl sm:mt-12">
            <div className="flex items-stretch gap-3 rounded-[1.35rem] border border-white/15 bg-ink/55 p-4 shadow-[0_20px_60px_rgba(18,22,28,0.28)] backdrop-blur-xl sm:rounded-[1.75rem] sm:p-5 md:gap-4 md:p-6">
              <div className="grid flex-1 grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-2 md:gap-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="min-w-0 text-left sm:px-2 md:px-3">
                    <p className="font-display text-xl font-bold tracking-tight text-white sm:text-2xl md:text-[1.65rem]">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-[0.68rem] leading-snug text-white/65 sm:text-[0.72rem] md:text-xs">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
              <a
                href="#services"
                aria-label="Explore services"
                className="hidden size-12 shrink-0 items-center justify-center self-center rounded-full bg-white text-ink transition-transform hover:scale-105 sm:inline-flex md:size-14"
              >
                <ArrowUpRight className="size-5 md:size-6" strokeWidth={2} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
