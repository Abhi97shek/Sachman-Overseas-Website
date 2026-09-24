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
  "h-12 w-full rounded-xl border border-ink/10 bg-white px-4 text-base text-ink outline-none transition-colors placeholder:text-muted-foreground focus-visible:border-tide focus-visible:ring-2 focus-visible:ring-tide/20";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [interest, setInterest] = useState("ielts");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="px-3 pb-6 sm:px-4 md:px-5">
      <div className="mx-auto overflow-hidden rounded-[1.75rem] border border-ink/6 bg-white/80 shadow-[0_20px_60px_rgba(18,22,28,0.05)] sm:rounded-[2rem] md:rounded-[2.5rem]">
        <div className="relative mx-auto grid max-w-6xl gap-14 px-6 py-20 md:grid-cols-2 md:gap-16 md:px-10 md:py-24 lg:px-12">
          <div>
            <p className="text-[0.72rem] font-semibold tracking-[0.2em] text-tide uppercase">
              Visit or reach out
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl md:text-5xl">
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

          <div>
            {submitted ? (
              <div
                id="form-success"
                role="status"
                aria-live="polite"
                className="flex min-h-[360px] flex-col justify-center rounded-[1.5rem] bg-paper/80 p-8"
              >
                <CheckCircle2 className="size-10 text-tide" strokeWidth={1.5} />
                <h3 className="mt-5 font-display text-2xl font-bold text-ink md:text-3xl">
                  Message received
                </h3>
                <p className="mt-3 max-w-sm text-muted-foreground">
                  Thanks for reaching out. Our counsellor will call you shortly to
                  schedule your free consultation.
                </p>
                <button
                  type="button"
                  className="mt-8 inline-flex h-11 w-fit items-center justify-center rounded-full border border-ink/15 px-5 text-sm font-medium text-ink transition-colors hover:border-tide hover:text-tide"
                  onClick={() => setSubmitted(false)}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                id="consult-form"
                onSubmit={handleSubmit}
                className="space-y-6 rounded-[1.5rem] bg-paper/70 p-6 sm:p-8"
              >
                <div className="space-y-2">
                  <Label
                    htmlFor="name"
                    className="text-xs tracking-[0.12em] text-muted-foreground uppercase"
                  >
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
                  <Label
                    htmlFor="phone"
                    className="text-xs tracking-[0.12em] text-muted-foreground uppercase"
                  >
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
                <fieldset className="space-y-3">
                  <legend className="text-xs font-medium tracking-[0.12em] text-muted-foreground uppercase">
                    I am interested in
                  </legend>
                  <div className="flex flex-col gap-2">
                    {interests.map((item) => {
                      const selected = interest === item.value;
                      return (
                        <label
                          key={item.value}
                          className={`flex cursor-pointer items-center gap-3 rounded-xl border px-3.5 py-3 text-sm transition-colors ${
                            selected
                              ? "border-tide/40 bg-white font-semibold text-ink"
                              : "border-transparent bg-white/50 text-muted-foreground hover:border-ink/10 hover:text-ink"
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
                            className={`flex size-4 shrink-0 items-center justify-center rounded-full border ${
                              selected
                                ? "border-tide bg-tide"
                                : "border-border bg-transparent"
                            }`}
                            aria-hidden
                          >
                            {selected ? (
                              <span className="size-1.5 rounded-full bg-white" />
                            ) : null}
                          </span>
                          {item.label}
                        </label>
                      );
                    })}
                  </div>
                </fieldset>
                <div className="space-y-2">
                  <Label
                    htmlFor="message"
                    className="text-xs tracking-[0.12em] text-muted-foreground uppercase"
                  >
                    Message
                  </Label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Tell us your target country, exam, or timeline…"
                    className={`${fieldClass} min-h-28 resize-y py-3`}
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex h-12 w-full items-center justify-center rounded-full bg-ink text-sm font-semibold tracking-wide text-white transition-colors hover:bg-ink-soft"
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
      </div>
    </section>
  );
}
