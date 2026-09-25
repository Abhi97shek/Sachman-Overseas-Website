import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/page-shell";
import { Process } from "@/components/process";

export const metadata: Metadata = {
  title: "Process | Sachman Overseas",
  description:
    "How Sachman Overseas takes you from counselling to exam preparation and your study visa.",
};

const more = [
  {
    title: "What to bring to counselling",
    body: "Your mark sheets, passport if you have one, a rough budget, and the countries you are considering. If you are unsure, come anyway — the first meeting is to sort the options.",
  },
  {
    title: "How coaching runs",
    body: "You join an IELTS or PTE batch, sit regular mocks, and get writing and speaking feedback until the score matches the universities on your list.",
  },
  {
    title: "What we file with you",
    body: "University shortlist, offer documents, statement of purpose, financial papers, and the visa form. We also rehearse the interview before submission.",
  },
];

export default function ProcessPage() {
  return (
    <PageShell>
      <Process />
      <section className="section-shell">
        <div className="grid w-full gap-4">
          {more.map((item) => (
            <article
              key={item.title}
              className="rounded-[1.5rem] border border-ink/6 bg-white/80 p-7 md:p-8"
            >
              <h2 className="font-display text-2xl font-bold tracking-tight text-ink">
                {item.title}
              </h2>
              <p className="mt-3 max-w-3xl text-base leading-relaxed text-muted-foreground">
                {item.body}
              </p>
            </article>
          ))}
        </div>
        <p className="mx-auto mt-10 max-w-6xl text-center">
          <Link href="/contact" className="text-sm font-semibold text-tide hover:text-tide-deep">
            Book the first counselling
          </Link>
        </p>
      </section>
    </PageShell>
  );
}
