import type { Metadata } from "next";
import { PageShell } from "@/components/layout/page-shell";
import { PageIntro } from "@/components/layout/page-intro";
import { EligibilityChecker } from "@/components/eligibility/eligibility-checker";
import { Button } from "@/design-system/buttons/button";
import { phone } from "@/lib/institute";

export const metadata: Metadata = {
  title: "Eligibility | Sachman Overseas",
  description:
    "Check which study destinations fit your 10th, 12th, IELTS or PTE score, graduation marks, and study gap.",
};

const notes = [
  {
    title: "Marks first, then the test",
    body: "If 12th or graduation is already in range, we can start the shortlist while you prepare IELTS or PTE.",
  },
  {
    title: "A gap is not an automatic no",
    body: "Work letters, a clear study plan, and the right country matter more than a blank year on the sheet.",
  },
  {
    title: "This page does not file a visa",
    body: "Universities set their own cut-offs. Bring the mark sheets to the centre and we match the actual course.",
  },
];

export default function EligibilityPage() {
  return (
    <PageShell>
      <PageIntro
        label="Eligibility"
        code="First-pass check"
        title="See which countries fit your marks."
        lead="Enter 10th, 12th, IELTS or PTE, and any study gap. Going for a master's? Add your graduation percentage too."
        actions={
          <Button href={phone.href} variant="outline">
            Prefer to call? {phone.display}
          </Button>
        }
      />
      <EligibilityChecker />

      <section className="page-container pb-(--section-space)">
        <div data-stagger className="grid gap-12 border-t border-line pt-12 md:grid-cols-3 md:gap-10">
          {notes.map((item, index) => (
            <article key={item.title}>
              <p className="type-code text-sm text-subtle">{String(index + 1).padStart(2, "0")}</p>
              <h2 className="mt-4 type-h3">{item.title}</h2>
              <p className="mt-4 type-body text-muted">{item.body}</p>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
