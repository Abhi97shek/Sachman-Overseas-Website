import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/page-shell";
import { Services, services } from "@/components/services";

export const metadata: Metadata = {
  title: "Services | Sachman Overseas",
  description:
    "IELTS, PTE, spoken English, and study-visa guidance from Sachman Overseas in Pathankot.",
};

const details = [
  {
    title: "IELTS Coaching",
    points: [
      "Listening, Reading, Writing, and Speaking taught as separate modules.",
      "Weekly mock tests with a band estimate and notes on what to fix next.",
      "Writing reviews and speaking practice aimed at your target score.",
    ],
  },
  {
    title: "PTE Academic",
    points: [
      "Computer-based practice that matches the real exam timing.",
      "Templates and scoring habits for speaking and writing tasks.",
      "Full simulations so test day is not the first time you see the format.",
    ],
  },
  {
    title: "Spoken English",
    points: [
      "Conversation classes for interviews, campus life, and everyday English.",
      "Pronunciation and confidence work alongside exam speaking.",
      "Small groups so you get time to talk, not only listen.",
    ],
  },
  {
    title: "Study Visa Guidance",
    points: [
      "Country and course shortlist based on your marks, budget, and intake.",
      "Help with documents, the statement of purpose, and the visa file.",
      "Interview preparation before you submit.",
    ],
  },
];

export default function ServicesPage() {
  return (
    <PageShell>
      <Services />
      <section className="px-6 pb-24 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {details.map((item) => {
            const service = services.find((entry) => entry.title === item.title);
            const Icon = service?.icon;
            return (
              <article
                key={item.title}
                className={`rounded-[1.5rem] p-7 md:p-8 ${service?.wash ?? "bg-white"}`}
              >
                <div className="flex items-center gap-3">
                  {Icon ? (
                    <span
                      className={`flex size-11 items-center justify-center rounded-2xl ${service?.chip}`}
                    >
                      <Icon className="size-5" aria-hidden />
                    </span>
                  ) : null}
                  <h2 className={`font-display text-2xl font-bold tracking-tight ${service?.ink ?? "text-ink"}`}>
                    {item.title}
                  </h2>
                </div>
                <ul className={`mt-4 space-y-3 text-base leading-relaxed ${service?.muted ?? "text-muted-foreground"}`}>
                  {item.points.map((point) => (
                    <li key={point} className="flex gap-2">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-current" />
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
        <p className="mx-auto mt-10 max-w-6xl text-center">
          <Link href="/contact" className="text-sm font-semibold text-tide hover:text-tide-deep">
            Ask which course fits you
          </Link>
        </p>
      </section>
    </PageShell>
  );
}
