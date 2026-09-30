import { faqs as centreFaqs } from "@/lib/journey";
import { getProgrammeBySlug, programmes, type Programme } from "@/lib/programmes";

/*
  Long-form copy for /services/[slug].

  Fill `detail` on a module, or add objects to `sections` / `faqs`, when the
  institute sends the next batch of content. Empty optional fields are omitted
  from the page — do not add placeholder paragraphs.
*/

export type ServiceModule = {
  name: string;
  code: string;
  detail?: string;
};

export type ServiceSection = {
  title: string;
  body: string;
};

export type ServicePageCopy = {
  slug: string;
  headline: string;
  seoTitle: string;
  seoDescription: string;
  modulesLabel?: string;
  modules?: ServiceModule[];
  sections?: ServiceSection[];
  faqs?: { q: string; a: string }[];
  reviewMatch?: string;
};

const byQuestion = (...questions: string[]) =>
  questions
    .map((question) => centreFaqs.find((item) => item.q === question))
    .filter((item): item is (typeof centreFaqs)[number] => Boolean(item));

export const servicePages: ServicePageCopy[] = [
  {
    slug: "ielts",
    headline: "IELTS coaching, module by module.",
    seoTitle: "IELTS Coaching Institute in Pathankot",
    seoDescription:
      "Sachman Institute (Sachman Overseas) is an IELTS coaching centre on Dalhousie Road, Pathankot. Academic and General Training, weekly mocks, Listening, Reading, Writing and Speaking.",
    modulesLabel: "The four sections",
    modules: [
      { name: "Listening", code: "01" },
      { name: "Reading", code: "02" },
      { name: "Writing", code: "03" },
      { name: "Speaking", code: "04" },
    ],
    reviewMatch: "IELTS",
    faqs: byQuestion(
      "Is the first consultation free?",
      "Should I take IELTS or PTE?",
      "Which is the best IELTS institute in Pathankot?",
      "Can I join coaching and visa guidance together?",
      "Where are classes held?",
    ),
  },
  {
    slug: "pte",
    headline: "PTE Academic on the real computer format.",
    seoTitle: "PTE Academic Coaching in Pathankot",
    seoDescription:
      "Computer-based PTE Academic practice at Sachman Overseas, Pathankot: real task types, timing, and full-length simulations.",
    modulesLabel: "Exam parts",
    modules: [
      { name: "Speaking & Writing", code: "01" },
      { name: "Reading", code: "02" },
      { name: "Listening", code: "03" },
    ],
    faqs: byQuestion(
      "Is the first consultation free?",
      "Should I take IELTS or PTE?",
      "Can I join coaching and visa guidance together?",
      "Where are classes held?",
    ),
  },
  {
    slug: "spoken-english",
    headline: "Spoken English for interviews and campus life.",
    seoTitle: "Spoken English Classes in Pathankot",
    seoDescription:
      "Small Spoken English groups at Sachman Overseas, Pathankot, for interviews, campus life, and everyday English abroad.",
    reviewMatch: "Spoken English",
    faqs: byQuestion("Is the first consultation free?", "Where are classes held?"),
  },
  {
    slug: "study-visa",
    headline: "Study-visa files in one sequence from Pathankot.",
    seoTitle: "Study Visa Guidance in Pathankot",
    seoDescription:
      "Course shortlist, offer letter, documents, and the study-visa file from Sachman Overseas on Dalhousie Road, Pathankot.",
    reviewMatch: "visa",
    faqs: byQuestion(
      "Is the first consultation free?",
      "Can I join coaching and visa guidance together?",
      "Can I check which countries I am eligible for?",
    ),
  },
];

export function getServicePage(slug: string) {
  const programme = getProgrammeBySlug(slug);
  const page = servicePages.find((item) => item.slug === slug);
  if (!programme || !page) return null;
  return { programme, page };
}

export function allServiceSlugs() {
  return programmes.map((item) => item.slug);
}

export function otherProgrammes(slug: string): Programme[] {
  return programmes.filter((item) => item.slug !== slug);
}
