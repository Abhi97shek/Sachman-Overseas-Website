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
    <section id="process" className="bg-paper py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <div className="max-w-xl">
          <p className="text-[0.7rem] font-semibold tracking-[0.22em] text-tide uppercase">
            How it works
          </p>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl md:text-5xl">
            Three steps. One committed team.
          </h2>
        </div>

        <ol className="mt-16 space-y-0">
          {steps.map((item, index) => (
            <li
              key={item.step}
              className="relative grid gap-4 border-t border-border py-10 last:border-b md:grid-cols-[8rem_minmax(0,1fr)_minmax(0,1.3fr)] md:items-start md:gap-12 md:py-14"
            >
              <span
                className="font-display text-5xl font-extrabold tracking-tight text-tide/90 md:text-6xl"
                aria-hidden
              >
                {item.step}
              </span>
              <div>
                <h3 className="font-display text-2xl font-semibold tracking-tight text-ink md:text-3xl">
                  {item.title}
                </h3>
                {index < steps.length - 1 ? (
                  <p className="mt-3 hidden text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase md:block">
                    Next step ↓
                  </p>
                ) : null}
              </div>
              <p className="max-w-md text-base leading-relaxed text-muted-foreground md:text-lg">
                {item.detail}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
