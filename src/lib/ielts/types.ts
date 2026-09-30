export const IELTS_FEE_URL = "https://ieltsidpindia.com/information/ielts-test-fee";
export const IELTS_WRITING_ON_PAPER_URL = "https://ieltsidpindia.com/ielts/ielts-writing-on-paper";
export const IELTS_SCORING_URL = "https://ielts.org/take-a-test/your-results/ielts-scoring-in-detail";

export type IeltsFigureId =
  | "four-skills"
  | "academic-gt"
  | "duration"
  | "sitting"
  | "india-delivery"
  | "listening-parts"
  | "writing-split"
  | "writing-weight"
  | "speaking-parts"
  | "band-scale"
  | "rounding"
  | "listening-convert"
  | "reading-convert";

export type GuideBlock =
  | { type: "answer"; text: string }
  | { type: "p"; text: string }
  | { type: "h3"; text: string }
  | { type: "h4"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "table"; caption?: string; headers: string[]; rows: string[][] }
  | { type: "accordion"; label?: string; items: { title: string; body: string; example?: string }[] }
  | { type: "note"; text: string }
  | { type: "example"; label?: string; text: string }
  | { type: "steps"; items: { title: string; body: string }[] }
  | { type: "pair"; left: { title: string; items: string[] }; right: { title: string; items: string[] } }
  | { type: "flow"; items: { title: string; detail: string }[] }
  | { type: "figure"; id: IeltsFigureId }
  | { type: "calculator" }
  | { type: "cta"; href: string; label: string; external?: boolean };

export type IeltsTopic = {
  slug: string;
  title: string;
  seoTitle: string;
  seoDescription: string;
  group: "about" | "listening" | "reading" | "writing" | "speaking" | "scores" | "booking";
  answer: string;
  blocks: GuideBlock[];
};

export type IeltsFaq = { q: string; a: string };
