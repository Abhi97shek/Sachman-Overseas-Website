import { IELTS_FEE_URL, type IeltsTopic } from "@/lib/ielts/types";

export const bookingTopics: IeltsTopic[] = [
  {
    slug: "results",
    title: "IELTS results",
    seoTitle: "IELTS Results: Section Scores, Overall Band and TRF",
    seoDescription:
      "IELTS results show four skill bands and an overall band on a Test Report Form or electronic result. Institutions can verify scores through official channels.",
    group: "booking",
    answer:
      "Your result lists a band for Listening, Reading, Writing and Speaking, plus an overall band. You receive a Test Report Form or an electronic result, depending on how you sat the test. Universities and visa offices verify scores through official IELTS channels — not a screenshot.",
    blocks: [
      { type: "answer", text: "Your result lists a band for Listening, Reading, Writing and Speaking, plus an overall band. You receive a Test Report Form or an electronic result, depending on how you sat the test. Universities and visa offices verify scores through official IELTS channels — not a screenshot." },
      { type: "h3", text: "What is reported" },
      { type: "ul", items: [
        "Four individual skill bands",
        "One overall band (the rounded average)",
        "Test type (Academic or General Training)",
      ] },
      { type: "h3", text: "How institutions receive scores" },
      { type: "p", text: "Many universities ask you to send results electronically through the IELTS Results Service. Some still accept a TRF. Follow the instructions on the offer, not a generic blog." },
      { type: "note", text: "Computer-delivered results in India are often described by IDP as available within one to two days. That is typical, not a guaranteed clock. Confirm the current timeline when you book, and do not plan an application deadline on an unofficial estimate." },
    ],
  },
  {
    slug: "fees",
    title: "IELTS test fees",
    seoTitle: "IELTS Test Fee in India — Check the Current Official Price",
    seoDescription:
      "IELTS fees vary by test type and can change. Check the official IDP India fee page before you book. Sachman Overseas does not set the exam fee.",
    group: "booking",
    answer:
      "IELTS test fees vary by location, test type and centre, and they change. Check the current fee before you book. Sachman Overseas prepares you for the test; we do not collect the exam fee.",
    blocks: [
      { type: "answer", text: "IELTS test fees vary by location, test type and centre, and they change. Check the current fee before you book. Sachman Overseas prepares you for the test; we do not collect the exam fee." },
      { type: "p", text: "Academic and General Training are usually priced the same at a given centre. UKVI and One Skill Retake, where offered, can be listed separately. Always open the official page on the day you pay." },
      { type: "cta", href: IELTS_FEE_URL, label: "Check current IELTS test fee", external: true },
    ],
  },
  {
    slug: "preparation",
    title: "How to prepare for IELTS",
    seoTitle: "How to Prepare for IELTS: Ten Steps from Pathankot",
    seoDescription:
      "Set a target band, take a diagnostic mock, train each skill, review mistakes, then book when mocks are close to the score on your offer.",
    group: "booking",
    answer:
      "Prepare in this order: know the band you need, sit a diagnostic mock, fix the weakest skills, take timed mocks, then book when the scores are close to the offer — not when a calendar feels urgent.",
    blocks: [
      { type: "answer", text: "Prepare in this order: know the band you need, sit a diagnostic mock, fix the weakest skills, take timed mocks, then book when the scores are close to the offer — not when a calendar feels urgent." },
      {
        type: "steps",
        items: [
          { title: "Understand your target score", body: "Copy the overall band and any skill minimums from the university or visa list. That number is the plan, not a wish." },
          { title: "Take a diagnostic test", body: "A full timed mock shows where you are before you buy a test date." },
          { title: "Identify strengths and weaknesses", body: "Listening 7 with Writing 5.5 is a Writing problem, not an “IELTS problem”." },
          { title: "Build Listening and Reading", body: "Daily timed sections, then check why each wrong answer was wrong." },
          { title: "Develop Writing structure and vocabulary", body: "Task format first, then range. Marked scripts beat unmarked essays." },
          { title: "Practise Speaking regularly", body: "Part 1, cue cards, then Part 3. Record yourself or sit with a trainer." },
          { title: "Take mock tests", body: "Full papers under test timing, including computer navigation if you will sit on computer." },
          { title: "Review mistakes", body: "Keep an error log: word limits, T/F/NG, Task 2 off-topic, hesitation in Part 2." },
          { title: "Repeat targeted practice", body: "Return to the weak skill until mocks move, then rebalance so another skill does not drop." },
          { title: "Book when you are ready", body: "When weekly mocks sit on or just under the target, pick a date. We help with that call at Sachman." },
        ],
      },
    ],
  },
  {
    slug: "faqs",
    title: "IELTS FAQs",
    seoTitle: "IELTS FAQs: Sections, Bands, Computer Test and Retakes",
    seoDescription:
      "Answers to common IELTS questions: four sections, Academic vs General Training, overall band rounding, computer delivery in India, and retakes.",
    group: "booking",
    answer:
      "IELTS has four sections. The overall band is the average of those four, rounded to the nearest whole or half band. In India you sit Listening and Reading on computer, with Writing on computer or on paper.",
    blocks: [
      { type: "answer", text: "IELTS has four sections. The overall band is the average of those four, rounded to the nearest whole or half band. In India you sit Listening and Reading on computer, with Writing on computer or on paper. Open a question below for the short answer." },
    ],
  },
  {
    slug: "mock-tests",
    title: "IELTS mock tests in Pathankot",
    seoTitle: "IELTS Mock Tests at Sachman Overseas, Pathankot",
    seoDescription:
      "Weekly IELTS mocks at Sachman Overseas with a band estimate and notes on what to fix next, before you book the real test.",
    group: "booking",
    answer:
      "Sachman Overseas runs weekly IELTS mocks with a band estimate and notes on what to fix next. Book the real test when mocks are close to the score on your offer, not on the first week of class.",
    blocks: [
      { type: "answer", text: "Sachman Overseas runs weekly IELTS mocks with a band estimate and notes on what to fix next. Book the real test when mocks are close to the score on your offer, not on the first week of class." },
      { type: "p", text: "Mocks cover Listening, Reading, Writing and Speaking. Writing is marked; Speaking is practised one to one or in a slot that mirrors the three parts. Computer-style practice is used so the India delivery — Listening and Reading on screen — is not a surprise." },
      { type: "cta", href: "/contact?interest=ielts-coaching", label: "Book a free IELTS counselling session" },
    ],
  },
];
