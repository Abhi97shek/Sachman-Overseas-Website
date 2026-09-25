"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, ChevronDown, Clock, Mail, MapPin, Phone } from "lucide-react";
import { Label } from "@/components/ui/label";

const interests = [
  { value: "ielts", label: "IELTS Coaching" },
  { value: "pte", label: "PTE Academic" },
  { value: "spoken", label: "Spoken English" },
  { value: "visa", label: "Study Visa" },
  { value: "counselling", label: "General counselling" },
];

const fieldClass =
  "h-12 w-full rounded-2xl border border-ink/10 bg-white px-4 text-sm text-ink outline-none transition-colors placeholder:text-muted-foreground focus-visible:border-tide focus-visible:ring-2 focus-visible:ring-tide/20";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [interest, setInterest] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="section-shell">
      <div
        data-reveal
        className="grid w-full overflow-hidden rounded-[1.75rem] bg-white shadow-[0_18px_50px_rgba(18,22,28,0.06)] sm:rounded-[2rem] md:grid-cols-2"
      >
        <div className="flex flex-col justify-center px-6 py-8 sm:px-8 md:px-10 md:py-10">
          <p className="text-[0.72rem] font-semibold tracking-[0.2em] text-tide uppercase">
            Visit or reach out
          </p>
          <h2 className="mt-3 max-w-sm font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Start your overseas journey today.
          </h2>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Drop by the Pathankot centre or send a note. A counsellor replies within one business day.
          </p>

          <ul className="mt-8 space-y-5">
            <li className="flex gap-3">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#d7f3f0] text-tide">
                <MapPin className="size-4" strokeWidth={1.75} />
              </span>
              <div>
                <p className="font-semibold text-ink">Sachman Overseas</p>
                <p className="mt-1 max-w-xs text-sm leading-relaxed text-muted-foreground">
                  2nd Floor, above Dashmesh Bajaj, Dalhousie Road, near Simbal Chowk, Pathankot, Punjab 145001
                </p>
              </div>
            </li>
            <li className="flex items-center gap-3">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#d7f3f0] text-tide">
                <Phone className="size-4" strokeWidth={1.75} />
              </span>
              <a href="tel:+919888454140" className="font-medium text-ink transition-colors hover:text-tide">
                +91 98884 54140
              </a>
            </li>
            <li className="flex items-center gap-3">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#d7f3f0] text-tide">
                <Mail className="size-4" strokeWidth={1.75} />
              </span>
              <a
                href="mailto:sachmaninstitute08@gmail.com"
                className="font-medium text-ink transition-colors hover:text-tide"
              >
                sachmaninstitute08@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-3">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#d7f3f0] text-tide">
                <Clock className="size-4" strokeWidth={1.75} />
              </span>
              <p className="text-sm text-muted-foreground">Monday – Saturday · 9:00 AM – 6:00 PM</p>
            </li>
          </ul>
        </div>

        <div className="flex flex-col justify-center bg-[#f4f7f8] px-6 py-8 sm:px-8 md:px-10 md:py-10">
          {submitted ? (
            <div id="form-success" role="status" aria-live="polite" className="py-6">
              <CheckCircle2 className="size-10 text-tide" strokeWidth={1.5} />
              <h3 className="mt-5 font-display text-2xl font-bold text-ink">Message received</h3>
              <p className="mt-3 max-w-sm text-muted-foreground">
                Thanks for reaching out. Our counsellor will call you shortly to schedule your free consultation.
              </p>
              <button
                type="button"
                className="mt-6 inline-flex h-11 items-center justify-center rounded-full border border-ink/15 px-5 text-sm font-medium text-ink transition-colors hover:border-tide hover:text-tide"
                onClick={() => setSubmitted(false)}
              >
                Send another message
              </button>
            </div>
          ) : (
            <form id="consult-form" onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-xs tracking-[0.14em] text-muted-foreground uppercase">
                  Full name
                </Label>
                <input id="name" name="name" required placeholder="Your name" className={fieldClass} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-xs tracking-[0.14em] text-muted-foreground uppercase">
                  Phone
                </Label>
                <input id="phone" name="phone" type="tel" required placeholder="+91" className={fieldClass} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="interest" className="text-xs tracking-[0.14em] text-muted-foreground uppercase">
                  I am interested in
                </Label>
                <div className="relative">
                  <select
                    id="interest"
                    name="interest"
                    required
                    value={interest}
                    onChange={(event) => setInterest(event.target.value)}
                    className={`${fieldClass} appearance-none pr-10 ${interest ? "text-ink" : "text-muted-foreground"}`}
                  >
                    <option value="" disabled>
                      Select a course
                    </option>
                    {interests.map((item) => (
                      <option key={item.value} value={item.value}>
                        {item.label}
                      </option>
                    ))}
                  </select>
                  <ChevronDown
                    className="pointer-events-none absolute top-1/2 right-4 size-4 -translate-y-1/2 text-muted-foreground"
                    aria-hidden
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message" className="text-xs tracking-[0.14em] text-muted-foreground uppercase">
                  Message
                </Label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  placeholder="Target country, exam, or timeline"
                  className={`${fieldClass} h-24 resize-none py-3`}
                />
              </div>
              <button
                type="submit"
                className="inline-flex h-12 w-full items-center justify-center rounded-full bg-[#f0b429] text-sm font-semibold text-ink transition-colors hover:bg-[#e0a61d]"
              >
                Request free consultation
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
