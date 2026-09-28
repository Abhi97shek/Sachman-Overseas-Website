import type { Metadata } from "next";
import { PageShell } from "@/components/layout/page-shell";
import { PageIntro } from "@/components/layout/page-intro";
import { JourneySteps } from "@/components/sections/journey-steps";
import { Faq } from "@/components/sections/faq";
import { Button } from "@/design-system/buttons/button";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbJsonLd, faqJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "From Counselling to Study Visa in Pathankot",
  description:
    "How Sachman Overseas takes Pathankot students from a free counselling session to IELTS or PTE classes, an offer letter, and the study-visa file.",
  path: "/process",
});

const details = [
  {
    code: "A",
    title: "What to bring to counselling",
    body: "Your mark sheets, passport if you have one, a rough budget, and the countries you are considering. If you are unsure, come anyway — the first meeting is to sort the options.",
  },
  {
    code: "B",
    title: "How coaching runs",
    body: "You join an IELTS or PTE batch, sit regular mocks, and get writing and speaking feedback until the score matches the universities on your list.",
  },
  {
    code: "C",
    title: "What we file with you",
    body: "University shortlist, offer documents, statement of purpose, financial papers, and the visa form. We also rehearse the interview before submission.",
  },
];

export default function ProcessPage() {
  return (
    <PageShell>
      <PageIntro
        label="Process"
        code="4 steps"
        title="From the first visit to the boarding gate."
        lead="The same order for every student, so the test, the offer, and the visa never wait on each other."
        actions={
          <Button href="/contact" arrow>
            Book the first counselling
          </Button>
        }
      />
      <JourneySteps />

      <section className="page-container section-y">
        <div data-stagger className="grid gap-12 md:grid-cols-3 md:gap-10">
          {details.map((item) => (
            <article key={item.title} className="border-t-2 border-text pt-6">
              <p className="type-code text-sm text-subtle">{item.code}</p>
              <h2 className="mt-4 type-h3">{item.title}</h2>
              <p className="mt-4 type-body text-muted">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <Faq />
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Process", path: "/process" },
          ]),
          faqJsonLd(),
        ]}
      />
    </PageShell>
  );
}
