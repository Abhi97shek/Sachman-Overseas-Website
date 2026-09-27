import { Plus } from "lucide-react";
import { SectionHeading } from "@/components/layout/page-intro";
import { faqs } from "@/lib/journey";

export function Faq() {
  return (
    <section className="page-container section-y">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20">
        <SectionHeading align="stack" label="Questions" title="Before you enrol." />
        <div data-stagger className="border-t border-line">
          {faqs.map((item) => (
            <details key={item.q} className="group border-b border-line">
              <summary className="flex items-center justify-between gap-6 py-6 text-lg font-semibold tracking-[-0.01em]">
                {item.q}
                <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-control border border-line transition-[transform,background-color,border-color] speed-base group-open:rotate-45 group-open:border-signal group-open:bg-signal">
                  <Plus className="size-4" aria-hidden />
                </span>
              </summary>
              <p className="max-w-2xl pb-7 type-body text-muted">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
