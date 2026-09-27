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

const shell = "mx-auto w-full max-w-[1200px] px-4 sm:px-6";
const section = "py-18";
const eyebrow = "text-xs font-medium tracking-[0.14em] text-ink/55 uppercase";
const heading = "font-display font-medium tracking-[0.01em] text-ink";
const card = "rounded-[12px] bg-white";
const ghostButton =
  "inline-flex h-11 items-center justify-center gap-2 rounded-full border border-ink/25 px-5 text-base text-ink transition-colors hover:border-ink hover:bg-ink hover:text-white";

export default function ServicesPage() {
  return (
    <PageShell>
      <section className={section}>
        <div className={shell}>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,0.75fr)] lg:items-end">
            <div>
              <p className={eyebrow}>Services</p>
              <h1 className={`${heading} mt-4 max-w-3xl text-[clamp(2.5rem,5vw,4.0625rem)] leading-[1.1]`}>
                Four programmes. One centre in Pathankot.
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-[1.5] text-ink/70">
                English test preparation and study-visa guidance under one roof, so your score and your
                application move together.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#f0b429] px-6 text-base text-ink transition-colors hover:bg-[#e6a817]"
              >
                Book a free consult
                <ArrowRight className="size-4" aria-hidden />
              </Link>
              <a href="tel:+919888454140" className={`${ghostButton} h-12`}>
                <Phone className="size-4" aria-hidden />
                +91 98884 54140
              </a>
            </div>
          </div>

          <nav aria-label="Programmes" className="mt-12 flex flex-wrap gap-3">
            {programmes.map((item) => {
              const Icon = services.find((entry) => entry.title === item.title)?.icon;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="inline-flex h-11 items-center gap-2 rounded-full bg-white px-5 text-base text-ink transition-colors hover:bg-ink hover:text-white"
                >
                  {Icon ? <Icon className="size-4" strokeWidth={1.6} aria-hidden /> : null}
                  {item.title}
                </a>
              );
            })}
          </nav>
        </div>
      </section>

      <section className={`${section} pt-0`}>
        <div className={`${shell} flex flex-col gap-3`}>
          {programmes.map((item) => {
            const service = services.find((entry) => entry.title === item.title);
            const Icon = service?.icon;
            return (
              <article key={item.id} id={item.id} className={`${card} scroll-mt-28 p-8`}>
                <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
                  <div className="flex flex-col">
                    <div className="flex items-center justify-between">
                      {Icon ? (
                        <span className="flex size-11 items-center justify-center rounded-full bg-[#eef2f5] text-ink">
                          <Icon className="size-5" strokeWidth={1.6} aria-hidden />
                        </span>
                      ) : null}
                      <span className="text-sm tracking-[0.14em] text-ink/45">{service?.num}</span>
                    </div>
                    <h2 className={`${heading} mt-8 text-[2rem] leading-[1.15]`}>{item.title}</h2>
                    <p className="mt-4 max-w-md text-base leading-[1.5] text-ink/70">{item.summary}</p>
                    <dl className="mt-8 grid grid-cols-3 gap-3 border-t border-ink/10 pt-6">
                      {item.facts.map((fact) => (
                        <div key={fact.label}>
                          <dt className="text-xs tracking-[0.1em] text-ink/50 uppercase">{fact.label}</dt>
                          <dd className="mt-1.5 text-sm font-medium text-ink">{fact.value}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>

                  <div className="flex flex-col">
                    <p className={eyebrow}>Who it is for</p>
                    <p className="mt-3 text-base leading-[1.5] text-ink">{item.forWho}</p>

                    <p className={`${eyebrow} mt-8`}>What is included</p>
                    <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                      {item.includes.map((point) => (
                        <li
                          key={point}
                          className="flex gap-3 rounded-[12px] bg-[#f3f6f8] p-4 text-base leading-[1.5] text-ink"
                        >
                          <Check className="mt-1 size-4 shrink-0 text-ink/60" strokeWidth={2} aria-hidden />
                          {point}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-auto flex flex-wrap items-center gap-3 pt-8">
                      <Link href="/contact" className={ghostButton}>
                        Ask about {item.title}
                        <ArrowRight className="size-4" aria-hidden />
                      </Link>
                      {item.id === "study-visa-guidance" ? (
                        <Link href="/destinations" className={ghostButton}>
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

      <section className={`${section} pt-0`}>
        <div className={shell}>
          <div className="rounded-[12px] bg-[#1c2733] p-8 text-[#ededf3] md:p-12">
            <p className="text-xs font-medium tracking-[0.14em] text-[#c3c3cc] uppercase">How a course runs</p>
            <h2 className="mt-4 max-w-2xl font-display text-[2rem] leading-[1.15] font-medium tracking-[0.01em]">
              From the first visit to the visa file.
            </h2>
            <ol className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((step, index) => (
                <li key={step.title} className="rounded-[12px] bg-[#243240] p-8">
                  <span className="text-sm tracking-[0.14em] text-[#c3c3cc]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 text-lg font-medium">{step.title}</h3>
                  <p className="mt-2 text-base leading-[1.5] text-[#c3c3cc]">{step.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className={`${section} pt-0`}>
        <div className={`${shell} grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-center`}>
          <div>
            <p className={eyebrow}>Recent results</p>
            <h2 className={`${heading} mt-4 text-[2rem] leading-[1.15]`}>Scores and visas from this centre.</h2>
            <p className="mt-4 max-w-md text-base leading-[1.5] text-ink/70">
              Posted by the Pathankot team after each result. More are on the centre&apos;s Instagram.
            </p>
            <a
              href="https://www.instagram.com/sachmaninstitute/"
              target="_blank"
              rel="noreferrer"
              className={`${ghostButton} mt-6`}
            >
              View on Instagram
              <ArrowUpRight className="size-4" aria-hidden />
            </a>
          </div>
          <ul className="grid grid-cols-3 gap-3">
            {results.map((item) => (
              <li key={item.name} className={`${card} overflow-hidden`}>
                <Image
                  src={item.image}
                  alt={`${item.name}: ${item.result}`}
                  width={item.width}
                  height={item.height}
                  className="aspect-[4/5] h-auto w-full object-cover object-top"
                  sizes="(min-width: 1024px) 20vw, 33vw"
                />
                <p className="px-4 py-3">
                  <span className="block text-sm font-medium text-ink">{item.name}</span>
                  <span className="block text-xs text-ink/55">{item.result}</span>
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className={`${section} pt-0`}>
        <div className={`${shell} grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]`}>
          <div>
            <p className={eyebrow}>Questions</p>
            <h2 className={`${heading} mt-4 text-[2rem] leading-[1.15]`}>Before you enrol.</h2>
          </div>
          <div className={`${card} divide-y divide-ink/10 px-8`}>
            {faqs.map((item) => (
              <details key={item.q} className="group py-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-medium text-ink [&::-webkit-details-marker]:hidden">
                  {item.q}
                  <ChevronDown
                    className="size-5 shrink-0 text-ink/50 transition-transform group-open:rotate-180"
                    strokeWidth={1.6}
                    aria-hidden
                  />
                </summary>
                <p className="mt-3 max-w-2xl text-base leading-[1.5] text-ink/70">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className={`${section} pt-0`}>
        <div className={shell}>
          <div className={`${card} flex flex-col gap-8 p-8 md:flex-row md:items-center md:justify-between md:p-12`}>
            <div>
              <h2 className={`${heading} text-[2rem] leading-[1.15]`}>Not sure which course fits?</h2>
              <p className="mt-3 flex items-center gap-2 text-base text-ink/70">
                <MapPin className="size-4 shrink-0" strokeWidth={1.6} aria-hidden />
                Dalhousie Road, near Simbal Chowk, Pathankot · Mon–Sat, 9:00–18:00
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#f0b429] px-6 text-base text-ink transition-colors hover:bg-[#e6a817]"
              >
                Book a free consult
                <ArrowRight className="size-4" aria-hidden />
              </Link>
              <a href={directionsUrl} target="_blank" rel="noreferrer" className={`${ghostButton} h-12`}>
                Get directions
              </a>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
