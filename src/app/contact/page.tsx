import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import { Contact } from "@/components/contact";

export const metadata: Metadata = {
  title: "Contact | Sachman Overseas",
  description:
    "Visit Sachman Overseas in Pathankot or request a free study-visa consultation.",
};

export default function ContactPage() {
  return (
    <PageShell>
      <Contact />
      <section className="px-6 pb-24 md:px-8">
        <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-3">
          {[
            {
              title: "Call or visit",
              body: "The centre is open Monday to Saturday, 9:00 AM to 6:00 PM, on Dalhousie Road near Simbal Chowk.",
            },
            {
              title: "What the consult covers",
              body: "Your scores, budget, and preferred country. You leave with a clear next step for coaching or a visa file.",
            },
            {
              title: "After you write",
              body: "A counsellor calls within one business day. This form is a demo and stays on the page.",
            },
          ].map((item) => (
            <article
              key={item.title}
              className="rounded-[1.5rem] border border-ink/6 bg-white/80 p-7"
            >
              <h2 className="font-display text-xl font-bold tracking-tight text-ink">
                {item.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
