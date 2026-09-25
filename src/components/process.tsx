const steps = [
  {
    step: "01",
    title: "Free counselling",
    detail:
      "Share your goals, academics, and preferred countries. We map a clear plan for coaching and applications.",
  },
  {
    step: "02",
    title: "Exam preparation",
    detail:
      "Join IELTS or PTE batches with mocks, writing reviews, and speaking practice until you hit your target band.",
  },
  {
    step: "03",
    title: "Apply & fly",
    detail:
      "We help shortlist universities, prepare documents, file your visa, and get you departure-ready.",
  },
];

export function Process() {
  return (
    <section id="process" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <div data-reveal className="mx-auto max-w-xl text-center">
          <p className="text-[0.72rem] font-semibold tracking-[0.2em] text-tide uppercase">
            How it works
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl md:text-5xl">
            Three steps. One committed team.
          </h2>
        </div>

        <ol data-stagger className="mt-16 grid gap-4 md:grid-cols-3">
          {steps.map((item) => (
            <li
              key={item.step}
              className="rounded-[1.5rem] border border-ink/6 bg-white/70 p-7 shadow-[0_10px_40px_rgba(18,22,28,0.04)] md:p-8"
            >
              <span
                className="font-display text-4xl font-extrabold tracking-tight text-tide/85 md:text-5xl"
                aria-hidden
              >
                {item.step}
              </span>
              <h3 className="mt-5 font-display text-xl font-bold tracking-tight text-ink md:text-2xl">
                {item.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                {item.detail}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
