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
    <section id="services" className="relative overflow-hidden py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
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

        <ul className="mt-16 grid gap-4 sm:grid-cols-2">
          {services.map((service) => (
            <li
              key={service.title}
              className="group rounded-[1.5rem] border border-ink/6 bg-white/70 p-7 shadow-[0_10px_40px_rgba(18,22,28,0.04)] transition-transform hover:-translate-y-0.5 md:p-8"
            >
              <span className="font-display text-xs font-semibold tracking-[0.18em] text-tide">
                {service.num}
              </span>
              <h3 className="mt-4 font-display text-2xl font-bold tracking-tight text-ink md:text-[1.7rem]">
                {service.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
