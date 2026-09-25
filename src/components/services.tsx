import { GraduationCap, Headphones, Laptop, Mic } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type ServiceOffer = {
  num: string;
  title: string;
  description: string;
  icon: LucideIcon;
  wash: string;
  chip: string;
  ink: string;
  muted: string;
  ghost: string;
};

export const services: ServiceOffer[] = [
  {
    num: "01",
    title: "IELTS Coaching",
    description:
      "Structured modules for Listening, Reading, Writing, and Speaking with weekly mock tests and targeted feedback.",
    icon: Headphones,
    wash: "bg-[#d7f3f0]",
    chip: "bg-[#0b7a7a] text-white",
    ink: "text-ink",
    muted: "text-[#3d5c5a]",
    ghost: "text-[#0b7a7a]",
  },
  {
    num: "02",
    title: "PTE Academic",
    description:
      "Exam-ready practice for the computer-based PTE, including scoring strategies and timed simulations.",
    icon: Laptop,
    wash: "bg-[#ffe7b0]",
    chip: "bg-[#e39b12] text-[#1c1404]",
    ink: "text-ink",
    muted: "text-[#6a5420]",
    ghost: "text-[#c4840a]",
  },
  {
    num: "03",
    title: "Spoken English",
    description:
      "Confidence-building conversation classes that prepare you for interviews, campus life, and daily English abroad.",
    icon: Mic,
    wash: "bg-[#d9e6ff]",
    chip: "bg-[#2457c5] text-white",
    ink: "text-ink",
    muted: "text-[#3a4d78]",
    ghost: "text-[#2457c5]",
  },
  {
    num: "04",
    title: "Study Visa Guidance",
    description:
      "End-to-end support for student visas — documents, university shortlists, SOPs, and interview prep.",
    icon: GraduationCap,
    wash: "bg-[#fde8e4]",
    chip: "bg-[#d4534a] text-white",
    ink: "text-ink",
    muted: "text-[#7a403c]",
    ghost: "text-[#d4534a]",
  },
];

export function Services() {
  return (
    <section id="services" className="relative overflow-hidden py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[0.72rem] font-semibold tracking-[0.2em] text-tide uppercase">
            What we offer
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl md:text-5xl">
            Coaching that opens doors.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg">
            From your first practice test to your visa stamp — one team in
            Pathankot walks with you through every step.
          </p>
        </div>

        <ul className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <li
                key={service.title}
                className={`group relative overflow-hidden rounded-[1.75rem] ${service.wash} p-6 shadow-[0_12px_40px_rgba(18,22,28,0.06)] transition-transform hover:-translate-y-0.5 lg:p-5 xl:p-6`}
              >
                <Icon
                  aria-hidden
                  className={`pointer-events-none absolute -right-3 -bottom-4 size-28 ${service.ghost} opacity-20 lg:size-24`}
                />
                <div className="relative flex items-start justify-between gap-4">
                  <span
                    className={`flex size-12 items-center justify-center rounded-2xl ${service.chip}`}
                  >
                    <Icon className="size-6" aria-hidden />
                  </span>
                  <span className={`font-display text-sm font-semibold tracking-[0.16em] ${service.ghost}`}>
                    {service.num}
                  </span>
                </div>
                <h3
                  className={`relative mt-6 font-display text-2xl font-bold tracking-tight ${service.ink} lg:text-xl xl:text-[1.35rem]`}
                >
                  {service.title}
                </h3>
                <p className={`relative mt-3 text-sm leading-relaxed ${service.muted} xl:text-[0.95rem]`}>
                  {service.description}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
