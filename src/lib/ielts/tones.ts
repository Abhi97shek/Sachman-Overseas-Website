export type IeltsTone = "listen" | "read" | "write" | "speak" | "test" | "score" | "prepare";

const topicTones: Record<string, IeltsTone> = {
  listening: "listen",
  reading: "read",
  writing: "write",
  speaking: "speak",
  "band-score": "score",
  "overall-band": "score",
  results: "prepare",
  fees: "prepare",
  preparation: "prepare",
  "mock-tests": "prepare",
  faqs: "prepare",
};

const chapterTones: Record<string, IeltsTone> = {
  "the-test": "test",
  sections: "read",
  scores: "score",
  prepare: "prepare",
};

export function topicTone(slug: string): IeltsTone {
  return topicTones[slug] ?? "test";
}

export function chapterTone(id: string): IeltsTone {
  return chapterTones[id] ?? "test";
}

export function skillTone(name: string): IeltsTone {
  const key = name.toLowerCase();
  if (key.startsWith("listen")) return "listen";
  if (key.startsWith("read")) return "read";
  if (key.startsWith("writ")) return "write";
  if (key.startsWith("speak")) return "speak";
  return "test";
}

export const skillLegend = [
  { tone: "listen" as const, name: "Listening" },
  { tone: "read" as const, name: "Reading" },
  { tone: "write" as const, name: "Writing" },
  { tone: "speak" as const, name: "Speaking" },
];
