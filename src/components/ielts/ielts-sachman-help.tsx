import { Check } from "lucide-react";
import { Button } from "@/design-system/buttons/button";
import { programmes } from "@/lib/programmes";

const help = [
  "IELTS coaching for Academic and General Training",
  "Trainers who mark Writing and run Speaking to the four official criteria",
  "Listening practice on the four parts and the real question types",
  "Reading strategies for Academic and General Training papers",
  "Writing evaluation with notes on task, cohesion, vocabulary and grammar",
  "Weekly mocks with a band estimate before you book",
  "Study-visa counselling so the score and the file move together",
];

export function IeltsSachmanHelp({ as = "h2" }: { as?: "h2" | "h3" }) {
  const ielts = programmes.find((item) => item.slug === "ielts");
  const Heading = as;
  return (
    <section className={as === "h3" ? "mt-16 border-t border-line pt-10 md:mt-20 md:pt-12" : "border-t border-line py-14 md:py-16"}>
      <Heading className={as === "h3" ? "type-h2 text-[clamp(1.5rem,1.25rem+1vw,1.85rem)]" : "type-h2"}>How Sachman Overseas helps</Heading>
      <p className="mt-4 max-w-2xl type-lead">
        Coaching is at Sachman Overseas, Pathankot. The exam is at an authorised centre. We teach the four sections,
        mark the work, and line up the visa file once the score is in range.
      </p>
      <ul className="mt-8 border-t border-line">
        {help.map((item) => (
          <li key={item} className="flex gap-4 border-b border-line py-4 type-body">
            <span className="mt-0.5 inline-flex size-6 shrink-0 items-center justify-center rounded-[0.3rem] bg-signal-tint text-text">
              <Check className="size-3.5" strokeWidth={2.5} aria-hidden />
            </span>
            {item}
          </li>
        ))}
      </ul>
      {ielts ? (
        <ul className="mt-6 grid gap-3 sm:grid-cols-3">
          {ielts.facts.map((fact) => (
            <li key={fact.label} className="border-t border-line pt-3">
              <p className="type-label text-[0.625rem] text-subtle">{fact.label}</p>
              <p className="mt-2 font-semibold">{fact.value}</p>
            </li>
          ))}
        </ul>
      ) : null}
      <div className="mt-8">
        <Button href="/contact?interest=ielts-coaching" arrow>
          Book a free IELTS counselling session
        </Button>
      </div>
    </section>
  );
}
