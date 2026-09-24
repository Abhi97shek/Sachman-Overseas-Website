"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, MapPin, Mail, Phone, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const interests = [
  { value: "ielts", label: "IELTS Coaching" },
  { value: "pte", label: "PTE Academic" },
  { value: "spoken", label: "Spoken English" },
  { value: "visa", label: "Study Visa" },
  { value: "counselling", label: "General counselling" },
];

const fieldClass =
  "border-input bg-background h-11 w-full rounded-lg border px-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [interest, setInterest] = useState("ielts");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="relative overflow-hidden bg-atmosphere py-20 md:py-28">
      <div className="bg-mesh absolute inset-0 opacity-50" />
      <div className="relative mx-auto grid max-w-6xl gap-14 px-5 md:grid-cols-2 md:px-8 lg:gap-20">
        <div>
          <p className="text-sm font-semibold tracking-[0.18em] text-ember uppercase">
            Visit or reach out
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl md:text-5xl">
            Start your overseas journey today.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Drop by our Pathankot centre or leave a message — we respond within
            one business day.
          </p>

          <ul className="mt-10 space-y-5">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 size-5 shrink-0 text-ember" />
              <div>
                <p className="font-medium text-ink">Sachman Overseas</p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  2nd Floor, above Dashmesh Bajaj, Dalhousie Road,
                  <br />
                  near Simbal Chowk, Pathankot, Punjab 145001
                </p>
              </div>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="size-5 shrink-0 text-ember" />
              <a
                href="tel:+919888454140"
                className="font-medium text-ink transition-colors hover:text-ember"
              >
                +91 98884 54140
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="size-5 shrink-0 text-ember" />
              <a
                href="mailto:sachmaninstitute08@gmail.com"
                className="font-medium text-ink transition-colors hover:text-ember"
              >
                sachmaninstitute08@gmail.com
              </a>
            </li>
            <li className="flex gap-3">
              <Clock className="mt-0.5 size-5 shrink-0 text-ember" />
              <p className="text-sm leading-relaxed text-muted-foreground">
                Monday – Saturday · 9:00 AM – 6:00 PM
              </p>
            </li>
          </ul>
        </div>

        <div className="border border-border/80 bg-white/80 p-6 shadow-sm backdrop-blur-sm md:p-8">
          {submitted ? (
            <div
              id="form-success"
              role="status"
              aria-live="polite"
              className="flex min-h-[320px] flex-col items-center justify-center text-center"
            >
              <CheckCircle2 className="size-12 text-ember" strokeWidth={1.5} />
              <h3 className="mt-4 font-display text-2xl font-semibold text-ink">
                Message received
              </h3>
              <p className="mt-2 max-w-xs text-muted-foreground">
                Thanks for reaching out. Our counsellor will call you shortly to
                schedule your free consultation.
              </p>
              <Button
                type="button"
                variant="outline"
                className="mt-6 h-10"
                onClick={() => setSubmitted(false)}
              >
                Send another message
              </Button>
            </div>
          ) : (
            <form id="consult-form" onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="name">Full name</Label>
                <input
                  id="name"
                  name="name"
                  required
                  placeholder="Your name"
                  className={fieldClass}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
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
                <legend className="text-sm font-medium">I am interested in</legend>
                <div className="flex flex-wrap gap-2">
                  {interests.map((item) => {
                    const selected = interest === item.value;
                    return (
                      <label
                        key={item.value}
                        className={`cursor-pointer rounded-md border px-3 py-2 text-sm transition-colors ${
                          selected
                            ? "border-ember bg-ember/10 text-ink"
                            : "border-border bg-white text-muted-foreground hover:border-ink/30"
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
                        {item.label}
                      </label>
                    );
                  })}
                </div>
              </fieldset>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
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
                className="inline-flex h-12 w-full items-center justify-center rounded-md bg-ember text-base font-semibold text-white transition-colors hover:bg-ember-deep"
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
