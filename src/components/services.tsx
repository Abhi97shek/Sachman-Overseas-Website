import { BookOpen, Mic2, Plane, GraduationCap } from "lucide-react";

const services = [
  {
    icon: BookOpen,
    title: "IELTS Coaching",
    description:
      "Structured modules for Listening, Reading, Writing, and Speaking with weekly mock tests and targeted feedback.",
  },
  {
    icon: Mic2,
    title: "PTE Academic",
    description:
      "Exam-ready practice for the computer-based PTE, including scoring strategies and timed simulations.",
  },
  {
    icon: GraduationCap,
    title: "Spoken English",
    description:
      "Confidence-building conversation classes that prepare you for interviews, campus life, and daily English abroad.",
  },
  {
    icon: Plane,
    title: "Study Visa Guidance",
    description:
      "End-to-end support for student visas — documents, university shortlists, SOPs, and interview prep.",
  },
];

export function Services() {
  return (
    <section id="services" className="bg-atmosphere relative py-20 md:py-28">
      <div className="bg-mesh absolute inset-0 opacity-60" />
      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold tracking-[0.18em] text-ember uppercase">
            What we offer
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl md:text-5xl">
            Coaching that opens doors. Guidance that gets you there.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            From your first practice test to your visa stamp — one team in
            Pathankot walks with you through every step.
          </p>
        </div>

        <ul className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2">
          {services.map((service) => (
            <li key={service.title} className="group">
              <div className="mb-4 flex size-11 items-center justify-center rounded-md bg-ink text-ember transition-transform duration-500 group-hover:-translate-y-0.5">
                <service.icon className="size-5" strokeWidth={1.75} />
              </div>
              <h3 className="font-display text-xl font-semibold text-ink sm:text-2xl">
                {service.title}
              </h3>
              <p className="mt-2 max-w-sm text-base leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
