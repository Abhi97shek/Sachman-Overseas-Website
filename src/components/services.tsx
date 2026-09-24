const services = [
  {
    num: "01",
    title: "IELTS Coaching",
    description:
      "Structured modules for Listening, Reading, Writing, and Speaking with weekly mock tests and targeted feedback.",
  },
  {
    num: "02",
    title: "PTE Academic",
    description:
      "Exam-ready practice for the computer-based PTE, including scoring strategies and timed simulations.",
  },
  {
    num: "03",
    title: "Spoken English",
    description:
      "Confidence-building conversation classes that prepare you for interviews, campus life, and daily English abroad.",
  },
  {
    num: "04",
    title: "Study Visa Guidance",
    description:
      "End-to-end support for student visas — documents, university shortlists, SOPs, and interview prep.",
  },
];

export function Services() {
  return (
    <section id="services" className="bg-skywash relative overflow-hidden py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <div className="max-w-2xl">
          <p className="text-[0.7rem] font-semibold tracking-[0.22em] text-tide uppercase">
            What we offer
          </p>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl md:text-5xl">
            Coaching that opens doors.
          </h2>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg">
            From your first practice test to your visa stamp — one team in
            Pathankot walks with you through every step.
          </p>
        </div>

        <ul className="mt-16 divide-y divide-border/80 border-y border-border/80">
          {services.map((service) => (
            <li
              key={service.title}
              className="group grid gap-3 py-8 transition-colors md:grid-cols-[5rem_1fr_1.4fr] md:items-baseline md:gap-10 md:py-10"
            >
              <span className="font-display text-sm font-semibold tracking-[0.16em] text-tide">
                {service.num}
              </span>
              <h3 className="font-display text-2xl font-semibold tracking-tight text-ink transition-colors group-hover:text-tide md:text-3xl">
                {service.title}
              </h3>
              <p className="max-w-md text-base leading-relaxed text-muted-foreground md:justify-self-end md:text-right">
                {service.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
