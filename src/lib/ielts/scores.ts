import { IELTS_SCORING_URL, type IeltsTopic } from "@/lib/ielts/types";

const bandMeanings = [
  {
    title: "9 — Expert user",
    body: "Fully operational command of the language: appropriate, accurate, fluent, with complete understanding.",
  },
  {
    title: "8 — Very good user",
    body: "Fully operational command with only occasional unsystematic inaccuracies. May misunderstand some things in unfamiliar situations. Handles detailed argumentation well.",
  },
  {
    title: "7 — Good user",
    body: "Operational command, though with occasional inaccuracies and misunderstandings in some situations. Generally handles complex language and detailed reasoning.",
  },
  {
    title: "6 — Competent user",
    body: "Generally effective command despite some inaccuracies and misunderstandings. Can use and understand fairly complex language, especially in familiar situations.",
  },
  {
    title: "5 — Modest user",
    body: "Partial command, coping with overall meaning in most situations, though likely to make many mistakes. Should be able to handle basic communication in their own field.",
  },
  {
    title: "4 — Limited user",
    body: "Basic competence is limited to familiar situations. Frequent problems in understanding and expression. Not able to use complex language.",
  },
  {
    title: "3 — Extremely limited user",
    body: "Conveys and understands only general meaning in very familiar situations. Frequent breakdowns in communication.",
  },
  {
    title: "2 — Intermittent user",
    body: "Great difficulty understanding spoken and written English.",
  },
  {
    title: "1 — Non-user",
    body: "No ability to use the language except a few isolated words.",
  },
  {
    title: "0 — Did not attempt the test",
    body: "No assessable information was provided.",
  },
];

export const scoreTopics: IeltsTopic[] = [
  {
    slug: "band-score",
    title: "IELTS band scores",
    seoTitle: "IELTS Band Score Chart 0–9 and What Each Band Means",
    seoDescription:
      "IELTS reports scores from 0 to 9 for each skill and overall. There is no pass mark — the university or visa sets the band you need.",
    group: "scores",
    answer:
      "You get a band from 0 to 9 in each skill, plus an overall band. There is no pass mark. The offer names a number — open a band for the official label.",
    blocks: [
      {
        type: "answer",
        text: "You get a band from 0 to 9 in each skill, plus an overall band. There is no pass mark. The offer names a number — open a band for the official label.",
      },
      { type: "figure", id: "band-scale" },
      { type: "accordion", items: bandMeanings },
    ],
  },
  {
    slug: "band-descriptors",
    title: "What each IELTS band means",
    seoTitle: "IELTS Band Descriptors: Band 9 to Band 0 Explained",
    seoDescription:
      "Plain-language explanation of IELTS bands from Expert user (9) to Did not attempt the test (0).",
    group: "scores",
    answer:
      "These labels describe English use in general. Your offer still names a number, not a label.",
    blocks: [
      {
        type: "answer",
        text: "These labels describe English use in general. Your offer still names a number, not a label.",
      },
      { type: "accordion", items: bandMeanings },
    ],
  },
  {
    slug: "overall-band",
    title: "How the overall IELTS band is calculated",
    seoTitle: "How IELTS Overall Band Is Calculated (With Rounding Examples)",
    seoDescription:
      "Overall band is (Listening + Reading + Writing + Speaking) ÷ 4, rounded to the nearest whole or half band. 6.25 becomes 6.5; 6.75 becomes 7.0.",
    group: "scores",
    answer:
      "Overall band = (Listening + Reading + Writing + Speaking) ÷ 4, then rounded to the nearest whole or half band.",
    blocks: [
      {
        type: "answer",
        text: "Overall band = (Listening + Reading + Writing + Speaking) ÷ 4, then rounded to the nearest whole or half band.",
      },
      { type: "figure", id: "rounding" },
      { type: "calculator" },
      { type: "figure", id: "listening-convert" },
      { type: "cta", href: IELTS_SCORING_URL, label: "Official scoring on ielts.org", external: true },
    ],
  },
];
