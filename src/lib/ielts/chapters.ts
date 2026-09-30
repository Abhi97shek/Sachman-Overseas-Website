export type IeltsChapterTopic = {
  slug: string;
  label: string;
};

export type IeltsChapter = {
  id: string;
  num: string;
  title: string;
  lead: string;
  topics: IeltsChapterTopic[];
};

export const ieltsChapters: IeltsChapter[] = [
  {
    id: "the-test",
    num: "01",
    title: "Know the test",
    lead: "What IELTS is, which test to book, how the sitting is built, and how India runs the day.",
    topics: [
      { slug: "what-is-ielts", label: "What is IELTS?" },
      { slug: "academic-vs-general", label: "Academic vs General Training" },
      { slug: "exam-pattern", label: "Exam structure" },
      { slug: "how-ielts-is-conducted", label: "How it is conducted in India" },
    ],
  },
  {
    id: "sections",
    num: "02",
    title: "The four sections",
    lead: "Learn them in exam order: Listening, Reading, Writing, then Speaking.",
    topics: [
      { slug: "listening", label: "Listening" },
      { slug: "reading", label: "Reading" },
      { slug: "writing", label: "Writing" },
      { slug: "speaking", label: "Speaking" },
    ],
  },
  {
    id: "scores",
    num: "03",
    title: "Read the score",
    lead: "Four skill bands, one overall, and the rounding that turns 6.75 into 7.0.",
    topics: [
      { slug: "band-score", label: "Band scores" },
      { slug: "overall-band", label: "Overall band" },
    ],
  },
  {
    id: "prepare",
    num: "04",
    title: "Book when ready",
    lead: "Results, the official fee, mocks at Sachman Overseas, then the date — not the other way around.",
    topics: [
      { slug: "results", label: "Results" },
      { slug: "fees", label: "Test fees" },
      { slug: "preparation", label: "How to prepare" },
      { slug: "mock-tests", label: "Mock tests" },
      { slug: "faqs", label: "FAQs" },
    ],
  },
];
