import { Suspense } from "react";
import { Clock, Mail, Phone } from "lucide-react";
import { SectionHeading } from "@/components/layout/page-intro";
import { ConsultPass } from "@/components/sections/consult-pass";
import { email, openingHours, phone } from "@/lib/institute";

const details = [
  { icon: Phone, label: "Call", value: phone.display, href: phone.href },
  { icon: Mail, label: "Email", value: email.display, href: email.href, nowrap: true },
  { icon: Clock, label: "Open", value: openingHours, nowrap: true },
];

export function ConsultSection({ heading = true }: { heading?: boolean }) {
  return (
    <section id="contact" className="page-container section-y">
      {heading ? (
        <SectionHeading
          label="Check in"
          title="Start with a free counselling session."
          lead="Tell us your programme and destination. A counsellor calls back within one business day."
        />
      ) : null}

      <div data-reveal className={heading ? "mt-14 md:mt-20" : undefined}>
        <Suspense>
          <ConsultPass />
        </Suspense>
      </div>

      <ul data-stagger className="mt-10 grid gap-8 border-t border-line pt-10 sm:grid-cols-3">
        {details.map((item) => {
          const Icon = item.icon;
          const body = (
            <span className={`mt-1 block type-body ${item.nowrap ? "whitespace-nowrap" : "break-words"}`}>
              {item.value}
            </span>
          );
          return (
            <li key={item.label} className="flex gap-4">
              <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-control bg-surface text-text shadow-raised">
                <Icon className="size-4" strokeWidth={1.75} aria-hidden />
              </span>
              <div className="min-w-0">
                <p className="type-label text-muted">{item.label}</p>
                {item.href ? (
                  <a
                    href={item.href}
                    className="underline-offset-4 transition-colors speed-fast hover:underline"
                  >
                    {body}
                  </a>
                ) : (
                  body
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
