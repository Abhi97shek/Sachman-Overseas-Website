import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/layout/page-intro";
import { Button } from "@/design-system/buttons/button";
import { programmes } from "@/lib/programmes";

export function ProgrammeIndex() {
  return (
    <section id="services" className="page-container section-y">
      <SectionHeading
        label="What we teach"
        title="Four programmes, one plan for getting you abroad."
        lead="Most students prepare for the test while we shortlist courses, so the offer and the visa can start as soon as the score is in."
        aside={
          <Button href="/services" variant="outline" arrow className="w-fit">
            IELTS, PTE and visa programmes
          </Button>
        }
      />

      <ul data-stagger className="mt-14 border-t border-line md:mt-20">
        {programmes.map((item) => {
          const Icon = item.icon;
          return (
            <li key={item.id} className="border-b border-line">
              <Link
                href={`/services#${item.id}`}
                className="group relative isolate grid grid-cols-[auto_1fr_auto] items-center gap-x-5 gap-y-2 px-1 py-7 sm:gap-x-8 md:grid-cols-[4rem_minmax(0,1fr)_minmax(0,1.1fr)_auto] md:py-9 lg:px-4"
              >
                <span
                  aria-hidden
                  className="absolute inset-0 -z-10 origin-bottom scale-y-0 rounded-panel bg-signage transition-transform speed-slow group-hover:scale-y-100 group-focus-visible:scale-y-100"
                />
                <span className="type-code text-sm text-subtle transition-colors speed-base group-hover:text-signal">
                  {item.num}
                </span>
                <span className="type-h2 text-[clamp(1.75rem,1.2rem+2vw,3rem)] transition-colors speed-base group-hover:text-on-signage">
                  {item.title}
                </span>
                <span className="col-span-3 col-start-1 max-w-md type-body text-muted transition-colors speed-base group-hover:text-on-signage-muted md:col-span-1 md:col-start-auto">
                  {item.short}
                </span>
                <span className="col-start-3 row-start-1 flex items-center justify-end gap-3 md:col-start-auto md:row-start-auto">
                  <span className="hidden size-12 items-center justify-center rounded-control border border-line text-muted transition-colors speed-base group-hover:border-signage-line group-hover:text-on-signage sm:inline-flex">
                    <Icon className="size-5" strokeWidth={1.6} aria-hidden />
                  </span>
                  <span className="inline-flex size-12 items-center justify-center rounded-control bg-sunken text-text transition-[background-color,transform] speed-base group-hover:translate-x-1 group-hover:bg-signal">
                    <ArrowRight className="size-5" aria-hidden />
                  </span>
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
