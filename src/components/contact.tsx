"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, MapPin, Mail, Phone, Clock } from "lucide-react";
import { Label } from "@/components/ui/label";

const interests = [
  { value: "ielts", label: "IELTS Coaching" },
  { value: "pte", label: "PTE Academic" },
  { value: "spoken", label: "Spoken English" },
  { value: "visa", label: "Study Visa" },
  { value: "counselling", label: "General counselling" },
];

const fieldClass =
  "border-border bg-paper h-12 w-full border-0 border-b px-0 text-base text-ink outline-none transition-colors placeholder:text-muted-foreground focus-visible:border-tide";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [interest, setInterest] = useState("ielts");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="bg-skywash relative overflow-hidden py-24 md:py-32">
      <div className="relative mx-auto grid max-w-6xl gap-16 px-6 md:grid-cols-2 md:gap-20 md:px-8">
        <div>
          <p className="text-[0.7rem] font-semibold tracking-[0.22em] text-tide uppercase">
            Visit or reach out
          </p>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl md:text-5xl">
            Start your overseas journey today.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            Drop by our Pathankot centre or leave a message — we respond within
            one business day.
          </p>

          <ul className="mt-12 space-y-6">
            <li className="flex gap-4">
              <MapPin className="mt-0.5 size-5 shrink-0 text-tide" strokeWidth={1.75} />
              <div>
                <p className="font-display text-lg font-semibold text-ink">
                  Sachman Overseas
                </p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  2nd Floor, above Dashmesh Bajaj, Dalhousie Road,
                  <br />
                  near Simbal Chowk, Pathankot, Punjab 145001
                </p>
              </div>
            </li>
            <li className="flex items-center gap-4">
              <Phone className="size-5 shrink-0 text-tide" strokeWidth={1.75} />
              <a
                href="tel:+919888454140"
                className="font-medium text-ink transition-colors hover:text-tide"
              >
                +91 98884 54140
              </a>
            </li>
            <li className="flex items-center gap-4">
              <Mail className="size-5 shrink-0 text-tide" strokeWidth={1.75} />
              <a
                href="mailto:sachmaninstitute08@gmail.com"
                className="font-medium text-ink transition-colors hover:text-tide"
              >
                sachmaninstitute08@gmail.com
              </a>
            </li>
            <li className="flex gap-4">
              <Clock className="mt-0.5 size-5 shrink-0 text-tide" strokeWidth={1.75} />
              <p className="text-sm leading-relaxed text-muted-foreground">
                Monday – Saturday · 9:00 AM – 6:00 PM
              </p>
            </li>
          </ul>
        </div>

        <div className="border-t border-border pt-8 md:border-t-0 md:border-l md:pt-0 md:pl-12 lg:pl-16">
          {submitted ? (
            <div
              id="form-success"
              role="status"
              aria-live="polite"
              className="flex min-h-[320px] flex-col justify-center"
            >
              <CheckCircle2 className="size-10 text-tide" strokeWidth={1.5} />
              <h3 className="mt-5 font-display text-2xl font-semibold text-ink md:text-3xl">
                Message received
              </h3>
              <p className="mt-3 max-w-sm text-muted-foreground">
                Thanks for reaching out. Our counsellor will call you shortly to
                schedule your free consultation.
              </p>
              <button
                type="button"
                className="mt-8 inline-flex h-11 w-fit items-center justify-center border border-ink/20 px-5 text-sm font-medium text-ink transition-colors hover:border-tide hover:text-tide"
                onClick={() => setSubmitted(false)}
              >
                Send another message
              </button>
            </div>
          ) : (
            <form id="consult-form" onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-xs tracking-[0.12em] text-muted-foreground uppercase">
                  Full name
                </Label>
                <input
                  id="name"
                  name="name"
                  required
                  placeholder="Your name"
                  className={fieldClass}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-xs tracking-[0.12em] text-muted-foreground uppercase">
                  Phone
                </Label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  placeholder="+91 …"
                  className={fieldClass}
                />
              </div>
              <fieldset className="space-y-4">
                <legend className="text-xs font-medium tracking-[0.12em] text-muted-foreground uppercase">
                  I am interested in
                </legend>
                <div className="flex flex-col gap-0 divide-y divide-border/80 border-y border-border/80">
                  {interests.map((item) => {
                    const selected = interest === item.value;
                    return (
                      <label
                        key={item.value}
                        className={`flex cursor-pointer items-center gap-3 py-3.5 text-sm transition-colors ${
                          selected
                            ? "font-semibold text-ink"
                            : "text-muted-foreground hover:text-ink"
                        }`}
                      >
                        <input
                          type="radio"
                          name="interest"
                          value={item.value}
                          checked={selected}
                          onChange={() => setInterest(item.value)}
                          className="sr-only"
                        />
                        <span
                          className={`flex size-4 shrink-0 items-center justify-center border ${
                            selected
                              ? "border-tide bg-tide"
                              : "border-border bg-transparent"
                          }`}
                          aria-hidden
                        >
                          {selected ? (
                            <span className="size-1.5 bg-white" />
                          ) : null}
                        </span>
                        {item.label}
                      </label>
                    );
                  })}
                </div>
              </fieldset>
              <div className="space-y-2">
                <Label htmlFor="message" className="text-xs tracking-[0.12em] text-muted-foreground uppercase">
                  Message
                </Label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Tell us your target country, exam, or timeline…"
                  className={`${fieldClass} min-h-28 resize-y py-2`}
                />
              </div>
              <button
                type="submit"
                className="inline-flex h-12 w-full items-center justify-center bg-tide text-sm font-semibold tracking-wide text-white transition-colors hover:bg-tide-deep"
              >
                Request free consultation
              </button>
              <p className="text-center text-xs text-muted-foreground">
                Mock form — submissions stay on this page for demo purposes.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
