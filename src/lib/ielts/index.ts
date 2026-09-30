import { bookingTopics } from "@/lib/ielts/booking";
import { ieltsFaqs } from "@/lib/ielts/faqs";
import { overviewTopics } from "@/lib/ielts/overview";
import { scoreTopics } from "@/lib/ielts/scores";
import { skillTopics } from "@/lib/ielts/skills";
import type { IeltsTopic } from "@/lib/ielts/types";

export const ieltsTopics: IeltsTopic[] = [
  ...overviewTopics,
  ...skillTopics,
  ...scoreTopics,
  ...bookingTopics,
];

export const ieltsTopicMap = new Map(ieltsTopics.map((topic) => [topic.slug, topic]));

export function getIeltsTopic(slug: string) {
  return ieltsTopicMap.get(slug);
}

export const ieltsGroups: { id: IeltsTopic["group"]; label: string }[] = [
  { id: "about", label: "About the test" },
  { id: "listening", label: "Listening" },
  { id: "reading", label: "Reading" },
  { id: "writing", label: "Writing" },
  { id: "speaking", label: "Speaking" },
  { id: "scores", label: "Scores" },
  { id: "booking", label: "India, results, prep" },
];

export const hubTopicSlugs = [
  "what-is-ielts",
  "academic-vs-general",
  "exam-pattern",
  "how-ielts-is-conducted",
  "exam-duration",
  "listening",
  "listening-question-types",
  "reading",
  "reading-question-types",
  "writing",
  "academic-writing",
  "general-training-writing",
  "writing-assessment",
  "speaking",
  "speaking-part-1",
  "speaking-part-2",
  "speaking-part-3",
  "speaking-assessment",
  "band-score",
  "band-descriptors",
  "overall-band",
  "listening-score",
  "reading-score",
  "results",
  "fees",
  "preparation",
  "mock-tests",
  "faqs",
] as const;

export function ieltsPath(slug?: string) {
  return slug ? `/services/ielts/${slug}` : "/services/ielts";
}

export function relatedIeltsTopics(slug: string, limit = 4) {
  const topic = getIeltsTopic(slug);
  if (!topic) return [];
  return ieltsTopics.filter((item) => item.group === topic.group && item.slug !== slug).slice(0, limit);
}

export { ieltsFaqs };
export { ieltsChapters } from "@/lib/ielts/chapters";
