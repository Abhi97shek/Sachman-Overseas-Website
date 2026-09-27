import { SectionHeading } from "@/components/layout/page-intro";
import { journeySteps } from "@/lib/journey";

export function JourneySteps({ title = "From the first visit to the visa file." }: { title?: string }) {
  return (
    <section id="process" className="px-3 sm:px-4">
      <div className="overflow-hidden rounded-frame bg-signage text-on-signage">
        <div className="page-container section-y">
          <SectionHeading
            tone="dark"
            label="How it works"
            title={title}
            lead="Four stops, in this order. You always know what comes next and what to bring."
          />

          <div className="relative mt-16 md:mt-24">
            <div aria-hidden className="absolute top-6 right-0 left-0 hidden h-px bg-signage-line lg:block">
              <div data-draw className="h-full w-full origin-left bg-signal" />
            </div>
            <ol data-stagger className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
              {journeySteps.map((step, index) => (
                <li key={step.title} className="relative">
                  <div className="flex items-center gap-4">
                    <span className="relative z-10 inline-flex size-12 items-center justify-center rounded-control bg-signal type-code text-base text-on-signal">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="type-label text-on-signage-muted lg:hidden">Step {index + 1} of 4</span>
                  </div>
                  <h3 className="mt-6 type-h3">{step.title}</h3>
                  <p className="mt-3 max-w-xs type-body text-on-signage-muted">{step.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
