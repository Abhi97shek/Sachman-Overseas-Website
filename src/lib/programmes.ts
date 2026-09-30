import { GraduationCap, Headphones, Laptop, Mic } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type Programme = {
  id: string;
  slug: string;
  num: string;
  title: string;
  icon: LucideIcon;
  short: string;
  summary: string;
  forWho: string;
  includes: string[];
  facts: { label: string; value: string }[];
};

export function programmePath(programme: Pick<Programme, "slug">) {
  return `/services/${programme.slug}`;
}

export function getProgrammeBySlug(slug: string) {
  return programmes.find((item) => item.slug === slug);
}

export const programmes: Programme[] = [
  {
    id: "ielts-coaching",
    slug: "ielts",
    num: "01",
    title: "IELTS Coaching",
    icon: Headphones,
    short:
      "Listening, Reading, Writing, and Speaking taught module by module, with a mock test every week.",
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
    id: "pte-academic",
    slug: "pte",
    num: "02",
    title: "PTE Academic",
    icon: Laptop,
    short: "Computer-based practice on the real task types and timer, with full-length simulations.",
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
    id: "spoken-english",
    slug: "spoken-english",
    num: "03",
    title: "Spoken English",
    icon: Mic,
    short: "Small conversation groups for interviews, campus life, and everyday English abroad.",
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
    id: "study-visa-guidance",
    slug: "study-visa",
    num: "04",
    title: "Study Visa Guidance",
    icon: GraduationCap,
    short: "Shortlist, offer letter, documents, and the visa file in one order, with interview practice.",
    summary:
      "Country, course, and university shortlist, then the documents and the visa file in one order, with interview preparation before you submit.",
    forWho:
      "Students ready to apply to Canada, the UK, Australia, the USA, New Zealand, Germany, and other destinations.",
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
