import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/page-shell";
import { Services } from "@/components/services";

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
    title: "Study visa guidance",
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
        <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-2">
          {details.map((item) => (
            <article
              key={item.title}
              className="rounded-[1.5rem] border border-ink/6 bg-white/80 p-7 md:p-8"
            >
              <h2 className="font-display text-2xl font-bold tracking-tight text-ink">
                {item.title}
              </h2>
              <ul className="mt-4 space-y-3 text-base leading-relaxed text-muted-foreground">
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
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
