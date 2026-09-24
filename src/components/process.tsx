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
    <section id="process" className="bg-paper py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="max-w-xl">
          <p className="text-sm font-semibold tracking-[0.18em] text-ember uppercase">
            How it works
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl md:text-5xl">
            Three steps. One committed team.
          </h2>
        </div>

        <ol className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
          {steps.map((item, index) => (
            <li key={item.step} className="relative">
              {index < steps.length - 1 && (
                <div
                  aria-hidden
                  className="absolute top-6 left-[calc(100%_-_0.5rem)] hidden h-px w-[calc(100%_-_2rem)] bg-border md:block"
                />
              )}
              <span className="font-display text-4xl font-semibold text-ember/90">
                {item.step}
              </span>
              <h3 className="mt-4 font-display text-xl font-semibold text-ink sm:text-2xl">
                {item.title}
              </h3>
              <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                {item.detail}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
