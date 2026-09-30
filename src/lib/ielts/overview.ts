import { IELTS_WRITING_ON_PAPER_URL, type IeltsTopic } from "@/lib/ielts/types";

export const overviewTopics: IeltsTopic[] = [
  {
    slug: "what-is-ielts",
    title: "What is IELTS?",
    seoTitle: "What is IELTS? Full Form, Purpose and Who Takes It",
    seoDescription:
      "IELTS is the International English Language Testing System. It measures Listening, Reading, Writing and Speaking for study, work and migration.",
    group: "about",
    answer:
      "IELTS (International English Language Testing System) is an English-language test of listening, reading, writing and speaking. Universities, employers and immigration programmes use the four skill bands — and the overall average — to decide if your English is enough for a course, a job or a visa.",
    blocks: [
      {
        type: "answer",
        text: "IELTS (International English Language Testing System) is an English-language test of listening, reading, writing and speaking. Universities, employers and immigration programmes use the four skill bands — and the overall average — to decide if your English is enough for a course, a job or a visa.",
      },
      { type: "figure", id: "four-skills" },
      { type: "h3", text: "Who needs it" },
      {
        type: "p",
        text: "A university, regulator or visa office cannot sit in class with you, so they list a test on offer letters, visa checklists and professional applications. Pathankot files commonly go to the UK, Australia, Canada, New Zealand, Ireland, and many institutions in the United States.",
      },
      {
        type: "ul",
        items: [
          "University or college applications that ask for an English score",
          "Professional registration that names IELTS",
          "Work or skilled-migration programmes that list IELTS",
        ],
      },
    ],
  },
  {
    slug: "academic-vs-general",
    title: "IELTS Academic vs General Training",
    seoTitle: "IELTS Academic vs General Training: Which Test to Book",
    seoDescription:
      "Academic is for university and many professional applications. General Training is commonly used for work, migration and training below degree level.",
    group: "about",
    answer:
      "Book Academic for university or college, and for professional registration that names Academic. Book General Training when the organisation asks for it — often work, migration, or training below degree level. The institution or visa programme decides, not the coaching centre.",
    blocks: [
      {
        type: "answer",
        text: "Book Academic for university or college, and for professional registration that names Academic. Book General Training when the organisation asks for it — often work, migration, or training below degree level. The institution or visa programme decides, not the coaching centre.",
      },
      { type: "figure", id: "academic-gt" },
      {
        type: "p",
        text: "Open the university, employer or visa checklist and book the name on that list. If two countries on your file ask for different tests, we sort that in counselling before you pay for a date.",
      },
    ],
  },
  {
    slug: "exam-pattern",
    title: "IELTS exam structure",
    seoTitle: "IELTS Exam Pattern: Four Sections, Timing and Skills",
    seoDescription:
      "IELTS has four sections: Listening (~30 min), Reading (60 min), Writing (60 min) and Speaking (11–14 min).",
    group: "about",
    answer:
      "Listening, Reading and Writing are one computer sitting — about two and a half hours. Speaking is a short interview, often on a different slot. There is no extra ten-minute answer-transfer time on computer: you enter Listening answers as you go.",
    blocks: [
      {
        type: "answer",
        text: "Listening, Reading and Writing are one computer sitting — about two and a half hours. Speaking is a short interview, often on a different slot. There is no extra ten-minute answer-transfer time on computer: you enter Listening answers as you go.",
      },
      { type: "figure", id: "duration" },
    ],
  },
  {
    slug: "how-ielts-is-conducted",
    title: "How IELTS is conducted in India",
    seoTitle: "How IELTS Is Conducted in India: Computer and Writing on Paper",
    seoDescription:
      "In India, IELTS Listening and Reading are on computer. Writing can be typed or handwritten on paper. Speaking is with an examiner.",
    group: "booking",
    answer:
      "In India you sit Listening and Reading on computer. Writing is typed, or handwritten on the official answer sheet (Writing on Paper). Speaking is still with an examiner.",
    blocks: [
      {
        type: "answer",
        text: "In India you sit Listening and Reading on computer. Writing is typed, or handwritten on the official answer sheet (Writing on Paper). Speaking is still with an examiner.",
      },
      { type: "figure", id: "india-delivery" },
      {
        type: "p",
        text: "Traditional full IELTS on Paper is no longer the India option. IDP India states that Writing on Paper is available from 1 September 2026. Question types and scoring stay the same; only how you write the answers changes.",
      },
      {
        type: "p",
        text: "On test day for Writing on Paper: Listening and Reading on computer, then a short instruction video, then you raise your hand for the paper sheets and pen. You can ask for extra paper. An invigilator collects the sheets at the end.",
      },
      {
        type: "note",
        text: "IDP states this Writing on Paper option is for Academic and General Training in selected markets, and is not described as covering IELTS for UKVI. Confirm the exact product when you book.",
      },
      { type: "cta", href: IELTS_WRITING_ON_PAPER_URL, label: "IDP India: Writing on Paper", external: true },
    ],
  },
  {
    slug: "exam-duration",
    title: "IELTS test duration",
    seoTitle: "IELTS Test Duration: Listening, Reading, Writing, Speaking",
    seoDescription:
      "Listening about 30 minutes, Reading 60, Writing 60, Speaking 11–14 minutes. Speaking may be the same day or a separate slot.",
    group: "about",
    answer:
      "Listening takes about 30 minutes, Reading 60 minutes, Writing 60 minutes, and Speaking 11–14 minutes. Speaking may be on the same day or at another time the centre assigns.",
    blocks: [
      {
        type: "answer",
        text: "Listening takes about 30 minutes, Reading 60 minutes, Writing 60 minutes, and Speaking 11–14 minutes. Speaking may be on the same day or at another time the centre assigns.",
      },
      { type: "figure", id: "sitting" },
      {
        type: "p",
        text: "There is no extra ten-minute answer-transfer time on computer: you enter Listening answers as you go. Writing is still 60 minutes for both tasks, whether you type or write on paper.",
      },
    ],
  },
];
