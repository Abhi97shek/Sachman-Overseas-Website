import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check, ChevronDown, MapPin, Phone } from "lucide-react";
import { PageShell } from "@/components/page-shell";
import { services } from "@/components/services";
import { directionsUrl } from "@/lib/institute";

export const metadata: Metadata = {
  title: "Services | Sachman Overseas",
  description:
    "IELTS, PTE, spoken English, and study-visa guidance from Sachman Overseas in Pathankot.",
};

type Programme = {
  title: string;
  id: string;
  summary: string;
  forWho: string;
  includes: string[];
  facts: { label: string; value: string }[];
};

const programmes: Programme[] = [
  {
    title: "IELTS Coaching",
    id: "ielts-coaching",
    summary:
      "Academic and General Training preparation, with each of the four modules taught on its own and brought together in weekly mocks.",
    forWho: "Students applying abroad who need a band score for a university offer or a visa.",
    includes: [
      "Listening, Reading, Writing, and Speaking taught as separate modules",
      "Weekly mock tests with a band estimate and notes on what to fix next",
      "Marked writing tasks and one-to-one speaking practice",
      "Help choosing a test date once your mocks reach the target band",
    ],
    facts: [
      { label: "Format", value: "Classroom batches" },
      { label: "Mocks", value: "Every week" },
      { label: "Covers", value: "Academic and General" },
    ],
  },
  {
    title: "PTE Academic",
    id: "pte-academic",
    summary:
      "Computer-based practice that matches the real exam, so the format, timer, and scoring are familiar before test day.",
    forWho: "Students who prefer a computer-based test or want results back quickly.",
    includes: [
      "Practice on the same task types and timings as the real exam",
      "Templates and scoring habits for speaking and writing tasks",
      "Full-length simulations with a section-by-section breakdown",
      "Review of weak task types before you book the test",
    ],
    facts: [
      { label: "Format", value: "Computer practice" },
      { label: "Mocks", value: "Full simulations" },
      { label: "Focus", value: "Timing and scoring" },
    ],
  },
  {
    title: "Spoken English",
    id: "spoken-english",
    summary:
      "Conversation classes for interviews, campus life, and everyday English, run alongside exam speaking work.",
    forWho: "Anyone who understands English but wants to speak it with more confidence.",
    includes: [
      "Guided conversation on real situations abroad",
      "Pronunciation, fluency, and sentence building",
      "Visa and admission interview rehearsal",
      "Small groups so everyone gets time to talk",
    ],
    facts: [
      { label: "Format", value: "Small groups" },
      { label: "Useful for", value: "Interviews and campus" },
      { label: "Pairs with", value: "IELTS and PTE" },
    ],
  },
  {
    title: "Study Visa Guidance",
    id: "study-visa-guidance",
    summary:
      "Country, course, and university shortlist, then the documents and the visa file in one order, with interview preparation before you submit.",
    forWho: "Students ready to apply to Canada, the UK, Australia, the USA, New Zealand, Germany, and other destinations.",
    includes: [
      "Shortlist matched to your marks, budget, and intake",
      "Offer letters, statement of purpose, and financial documents",
      "Visa form review and document checklist for your country",
      "Interview practice before the file goes in",
    ],
    facts: [
      { label: "Starts with", value: "Free counselling" },
      { label: "Covers", value: "Offer to visa file" },
      { label: "Countries", value: "40+ destinations" },
    ],
  },
];

const steps = [
  {
    title: "Free counselling",
    body: "Bring your mark sheets and the countries you are considering. We sort the options together.",
  },
  {
    title: "Level check",
    body: "A short test shows where you stand, so you join the right batch and set a realistic target.",
  },
  {
    title: "Classes and mocks",
    body: "Regular classes, weekly mocks, and feedback on writing and speaking until the score is there.",
  },
  {
    title: "Test and visa file",
    body: "Book the exam, then the offer, documents, and visa file move in one sequence.",
  },
];

const results = [
  { name: "Sarabjeet", result: "UK study visa", image: "/images/results/sarabjeet.jpg", width: 1440, height: 1800 },
  { name: "Rutvik", result: "IELTS 6.5", image: "/images/results/rutvik.jpg", width: 960, height: 1280 },
  { name: "Simranjeet Kaur", result: "IELTS 6.5", image: "/images/results/simranjeet.jpg", width: 960, height: 1280 },
];

const faqs = [
  {
    q: "Is the first consultation free?",
    a: "Yes. The first counselling session is free and there is no obligation to enrol.",
  },
  {
    q: "Should I take IELTS or PTE?",
    a: "Both are accepted widely. It depends on your country, university, and how you prefer to sit a test. We look at your list and your level before recommending one.",
  },
  {
    q: "Can I join coaching and visa guidance together?",
    a: "Yes. Most students prepare for the test while we shortlist courses, so the offer and visa work can start as soon as the score is in.",
  },
  {
    q: "Where are classes held?",
    a: "At the centre on the 2nd Floor, above Dashmesh Bajaj, Dalhousie Road, near Simbal Chowk, Pathankot. We are open Monday to Saturday, 9:00 to 18:00.",
  },
];

export default function ServicesPage() {
  return (
    <PageShell>
      <section className="px-4 pt-10 pb-12 sm:px-6 md:px-8 md:pt-16 md:pb-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:items-end">
            <div>
              <p className="text-[0.72rem] font-semibold tracking-[0.2em] text-tide uppercase">Services</p>
              <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl md:text-6xl">
                Four programmes. One centre in Pathankot.
              </h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
                English test preparation and study-visa guidance under one roof, so your score and your
                application move together.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#f0b429] pr-2 pl-5 text-sm font-semibold text-ink"
              >
                Book a free consult
                <span className="inline-flex size-8 items-center justify-center rounded-full bg-ink text-white">
                  <ArrowRight className="size-4" aria-hidden />
                </span>
              </Link>
              <a
                href="tel:+919888454140"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white px-5 text-sm font-semibold text-ink ring-1 ring-ink/10 hover:bg-white/80"
              >
                <Phone className="size-4" aria-hidden />
                +91 98884 54140
              </a>
            </div>
          </div>

          <nav aria-label="Programmes" className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {programmes.map((item) => {
              const service = services.find((entry) => entry.title === item.title);
              const Icon = service?.icon;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="group flex items-center gap-3 rounded-2xl bg-white p-4 ring-1 ring-ink/8 transition-shadow hover:shadow-[0_12px_32px_rgba(18,22,28,0.08)]"
                >
                  {Icon ? (
                    <span className={`flex size-10 shrink-0 items-center justify-center rounded-xl ${service?.chip}`}>
                      <Icon className="size-5" aria-hidden />
                    </span>
                  ) : null}
                  <span className="flex-1">
                    <span className="block text-[0.7rem] font-semibold tracking-[0.14em] text-muted-foreground uppercase">
                      {service?.num}
                    </span>
                    <span className="block text-sm font-semibold text-ink">{item.title}</span>
                  </span>
                  <ChevronDown className="size-4 text-ink/40 transition-transform group-hover:translate-y-0.5" aria-hidden />
                </a>
              );
            })}
          </nav>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 md:px-8 md:pb-24">
        <div className="mx-auto flex max-w-7xl flex-col gap-5">
          {programmes.map((item) => {
            const service = services.find((entry) => entry.title === item.title);
            const Icon = service?.icon;
            return (
              <article
                key={item.id}
                id={item.id}
                className="scroll-mt-28 overflow-hidden rounded-[1.75rem] bg-white ring-1 ring-ink/8"
              >
                <div className="grid lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
                  <div className={`relative flex flex-col p-7 sm:p-9 md:p-10 ${service?.wash ?? "bg-white"}`}>
                    {Icon ? (
                      <Icon
                        aria-hidden
                        className={`pointer-events-none absolute -right-4 -bottom-6 size-40 ${service?.ghost} opacity-15`}
                      />
                    ) : null}
                    <div className="relative flex items-center justify-between">
                      {Icon ? (
                        <span className={`flex size-12 items-center justify-center rounded-2xl ${service?.chip}`}>
                          <Icon className="size-6" aria-hidden />
                        </span>
                      ) : null}
                      <span className={`font-display text-sm font-semibold tracking-[0.16em] ${service?.ghost}`}>
                        {service?.num}
                      </span>
                    </div>
                    <h2 className="relative mt-8 font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
                      {item.title}
                    </h2>
                    <p className={`relative mt-4 max-w-md text-base leading-relaxed ${service?.muted}`}>{item.summary}</p>
                    <dl className="relative mt-8 grid grid-cols-3 gap-3 border-t border-ink/10 pt-6">
                      {item.facts.map((fact) => (
                        <div key={fact.label}>
                          <dt className="text-[0.68rem] font-semibold tracking-[0.12em] text-ink/55 uppercase">
                            {fact.label}
                          </dt>
                          <dd className="mt-1 text-sm font-semibold text-ink">{fact.value}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>

                  <div className="flex flex-col p-7 sm:p-9 md:p-10">
                    <p className="text-[0.72rem] font-semibold tracking-[0.16em] text-muted-foreground uppercase">
                      Who it is for
                    </p>
                    <p className="mt-2 text-base leading-relaxed text-ink">{item.forWho}</p>

                    <p className="mt-8 text-[0.72rem] font-semibold tracking-[0.16em] text-muted-foreground uppercase">
                      What is included
                    </p>
                    <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                      {item.includes.map((point) => (
                        <li key={point} className="flex gap-3 rounded-2xl bg-[#f3f6f8] p-4 text-sm leading-relaxed text-ink">
                          <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-tide text-white">
                            <Check className="size-3" aria-hidden />
                          </span>
                          {point}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-auto flex flex-wrap items-center gap-4 pt-8">
                      <Link
                        href="/contact"
                        className="inline-flex h-11 items-center gap-2 rounded-full bg-ink px-5 text-sm font-semibold text-white hover:bg-ink-soft"
                      >
                        Ask about {item.title}
                        <ArrowRight className="size-4" aria-hidden />
                      </Link>
                      {item.id === "study-visa-guidance" ? (
                        <Link href="/destinations" className="text-sm font-semibold text-tide hover:text-tide-deep">
                          See study countries
                        </Link>
                      ) : null}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 md:px-8 md:pb-24">
        <div className="mx-auto max-w-7xl rounded-[1.75rem] bg-[#07182e] px-6 py-10 text-white sm:px-10 md:px-12 md:py-14">
          <p className="text-[0.72rem] font-semibold tracking-[0.2em] text-[#8ecff3] uppercase">How a course runs</p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold tracking-tight md:text-4xl">
            From the first visit to the visa file.
          </h2>
          <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {steps.map((step, index) => (
              <li key={step.title} className="relative border-t border-white/15 pt-5">
                <span className="font-display text-sm font-semibold tracking-[0.16em] text-[#f0b429]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 md:px-8 md:pb-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-center">
          <div>
            <p className="text-[0.72rem] font-semibold tracking-[0.2em] text-tide uppercase">Recent results</p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
              Scores and visas from this centre.
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
              Posted by the Pathankot team after each result. More are on the centre&apos;s Instagram.
            </p>
            <a
              href="https://www.instagram.com/sachmaninstitute/"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-tide hover:text-tide-deep"
            >
              View on Instagram
              <ArrowUpRight className="size-4" aria-hidden />
            </a>
          </div>
          <ul className="grid grid-cols-3 gap-3 sm:gap-4">
            {results.map((item) => (
              <li key={item.name} className="overflow-hidden rounded-2xl bg-white ring-1 ring-ink/8">
                <Image
                  src={item.image}
                  alt={`${item.name}: ${item.result}`}
                  width={item.width}
                  height={item.height}
                  className="aspect-[4/5] h-auto w-full object-cover object-top"
                  sizes="(min-width: 1024px) 20vw, 33vw"
                />
                <p className="px-3 py-3">
                  <span className="block text-sm font-semibold text-ink">{item.name}</span>
                  <span className="block text-xs text-tide">{item.result}</span>
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 md:px-8 md:pb-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
          <div>
            <p className="text-[0.72rem] font-semibold tracking-[0.2em] text-tide uppercase">Questions</p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
              Before you enrol.
            </h2>
          </div>
          <div className="divide-y divide-ink/10 rounded-[1.5rem] bg-white px-6 ring-1 ring-ink/8 sm:px-8">
            {faqs.map((item) => (
              <details key={item.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-ink [&::-webkit-details-marker]:hidden">
                  {item.q}
                  <ChevronDown className="size-5 shrink-0 text-ink/50 transition-transform group-open:rotate-180" aria-hidden />
                </summary>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 md:px-8 md:pb-20">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 rounded-[1.75rem] bg-[linear-gradient(135deg,#d7f1ff_0%,#eef7fb_55%,#fff7e0_100%)] p-8 sm:p-10 md:flex-row md:items-center md:justify-between md:p-12">
          <div>
            <h2 className="font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
              Not sure which course fits?
            </h2>
            <p className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="size-4 shrink-0 text-tide" aria-hidden />
              Dalhousie Road, near Simbal Chowk, Pathankot · Mon–Sat, 9:00–18:00
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center rounded-full bg-ink px-6 text-sm font-semibold text-white hover:bg-ink-soft"
            >
              Book a free consult
            </Link>
            <a
              href={directionsUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-ink ring-1 ring-ink/10 hover:bg-white/80"
            >
              Get directions
            </a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
