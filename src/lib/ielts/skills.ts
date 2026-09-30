import type { IeltsTopic } from "@/lib/ielts/types";

const listeningQuestionTypes = [
  {
    title: "Multiple choice",
    body: "You choose the correct answer from options. The recording may paraphrase the options, so matching a word you hear to a word on screen is not enough.",
    example:
      "The woman phones the sports centre to\nA  cancel a swimming class.\nB  change the time of her booking.\nC  ask about family membership.",
  },
  {
    title: "Matching",
    body: "You match items in one list with options in another — for example speakers to opinions, or places to features.",
    example:
      "Match each person with the activity they mention.\n1  Sam\n2  Priya\n3  Leo\nA  cycling to work\nB  joining a choir\nC  cooking on Sundays",
  },
  {
    title: "Plan, map or diagram labelling",
    body: "You label locations or parts from the recording. Direction language (opposite, past the, at the end of) matters as much as names.",
    example:
      "Label the plan of the community centre. Write the correct letter, A–H.\n11  reception\n12  café\n13  main hall",
  },
  {
    title: "Form, note, table, flow-chart or summary completion",
    body: "You fill gaps from the recording. Spelling counts. If the instruction says NO MORE THAN TWO WORDS AND/OR A NUMBER, extra words are wrong.",
    example:
      "Complete the form below.\nWrite NO MORE THAN TWO WORDS AND/OR A NUMBER.\nGuest name: ………………\nArrival date: ………………\nRoom type: ………………",
  },
  {
    title: "Sentence completion",
    body: "You complete a sentence using information from the recording, again within the word limit.",
    example:
      "Complete the sentence below. Write NO MORE THAN TWO WORDS.\nThe new bus route starts from the ……………… .",
  },
  {
    title: "Short-answer questions",
    body: "You answer a question in a set number of words or numbers. The limit is part of the task, not a hint.",
    example:
      "Answer the question. Write NO MORE THAN TWO WORDS AND/OR A NUMBER.\nWhat time does the library open on Saturday?",
  },
];

const readingQuestionTypes = [
  {
    title: "Multiple choice",
    body: "Select the correct answer from the options. The correct option is usually a paraphrase of the passage, not a copied sentence.",
    example:
      "The researcher moved the study to a second city because\nA  the first sample was too small.\nB  funding for the original site ended.\nC  local weather made fieldwork impossible.\nD  the university required a comparison.",
  },
  {
    title: "True / False / Not Given",
    body: "Decide whether the statement agrees with information in the passage. False means the passage says the opposite. Not Given means the passage does not say enough to judge.",
    example:
      "Do the following statements agree with the information in the passage?\nTRUE  FALSE  NOT GIVEN\nThe factory opened in 1974.",
  },
  {
    title: "Yes / No / Not Given",
    body: "Decide whether the statement agrees with the writer’s views or claims. This is not the same as True/False: you are scoring opinion, not only facts.",
    example:
      "Do the following statements agree with the views of the writer?\nYES  NO  NOT GIVEN\nRemote work always reduces a company's costs.",
  },
  {
    title: "Matching information",
    body: "Match specific information to the paragraph that contains it. A paragraph can be used more than once if the instructions allow it.",
    example: "Which paragraph contains the following information?\n14  a figure for the cost of the project\n15  a reason the first design was rejected",
  },
  {
    title: "Matching headings",
    body: "Choose the most appropriate heading for each paragraph or section. The heading is the main idea, not a detail from the first line.",
    example:
      "Choose the correct heading for paragraphs A–C from the list of headings.\ni    Early experiments\nii   A change in public opinion\niii  Why the method failed",
  },
  {
    title: "Matching features",
    body: "Match information to people, places, theories, dates or similar categories named in the passage.",
    example:
      "Match each researcher with the finding they reported.\n20  Patel\n21  Okonkwo\n22  Berg\nA  bees prefer warmer hives\nB  nectar quality varies by season\nC  colony size affects flight range",
  },
  {
    title: "Sentence completion",
    body: "Complete sentences using words from the passage, within the word limit.",
    example:
      "Complete the sentence below. Choose NO MORE THAN TWO WORDS from the passage.\nThe team stored the samples in a ……………… .",
  },
  {
    title: "Summary completion",
    body: "Complete a summary using words from the passage or from a box of answers, as instructed.",
    example:
      "Complete the summary using words from the box.\nThe city reduced traffic by building a 27 ……………… and charging a 28 ……………… at peak hours.",
  },
  {
    title: "Note, table or flow-chart completion",
    body: "Fill missing information in notes, a table or a flow-chart from the passage.",
    example:
      "Complete the table below. Write NO MORE THAN TWO WORDS from the passage.\nStage          What happens\nCollection     fruit is 33 ………………\nSorting        damaged items are removed",
  },
  {
    title: "Diagram label completion",
    body: "Label a diagram from information in the passage.",
    example:
      "Label the diagram of the water filter. Choose NO MORE THAN TWO WORDS from the passage.\nA  ……………… layer\nB  charcoal bed\nC  ……………… outlet",
  },
  {
    title: "Short-answer questions",
    body: "Answer questions using information from the passage, within the stated number of words.",
    example:
      "Answer the question. Write NO MORE THAN THREE WORDS.\nWhat did the islanders use to waterproof their boats?",
  },
];

const writingCriteria = {
  headers: ["Criterion", "What it asks"],
  rows: [
    ["Task Achievement / Task Response", "Did you answer the question? Cover the data or the essay task, with enough development."],
    ["Coherence and Cohesion", "Are ideas in a clear order, with linking that helps rather than repeats?"],
    ["Lexical Resource", "Is vocabulary precise, varied and appropriate, with acceptable spelling?"],
    ["Grammatical Range and Accuracy", "Are sentence forms varied, and are errors rare enough not to hide meaning?"],
  ],
};

const speakingCriteria = {
  headers: ["Criterion", "What it assesses"],
  rows: [
    ["Fluency & Coherence", "Speaking at length without long strain, and organising ideas so the listener can follow"],
    ["Lexical Resource", "Range and appropriate use of vocabulary, including paraphrase when a word does not come"],
    ["Grammatical Range & Accuracy", "Variety of structures and how often errors hide meaning"],
    ["Pronunciation", "Whether sounds, stress and chunking let the examiner follow you easily"],
  ],
};

export const skillTopics: IeltsTopic[] = [
  {
    slug: "listening",
    title: "IELTS Listening",
    seoTitle: "IELTS Listening: Format, Four Parts and Question Types",
    seoDescription:
      "IELTS Listening has four parts and 40 questions. You listen to recordings and answer from what you hear, from everyday talk to an academic lecture.",
    group: "listening",
    answer:
      "You hear each recording once and answer 40 questions as you go. The four parts get denser — from an everyday conversation to an academic lecture.",
    blocks: [
      {
        type: "answer",
        text: "You hear each recording once and answer 40 questions as you go. The four parts get denser — from an everyday conversation to an academic lecture.",
      },
      { type: "figure", id: "listening-parts" },
      {
        type: "table",
        headers: ["Part", "You hear", "Example"],
        rows: [
          ["1", "Everyday conversation", "Booking a hotel"],
          ["2", "Everyday monologue", "A talk about a community centre"],
          ["3", "Training conversation", "Students discussing an assignment"],
          ["4", "Academic lecture", "A lecture on a subject"],
        ],
      },
      { type: "accordion", label: "Question types", items: listeningQuestionTypes },
    ],
  },
  {
    slug: "listening-question-types",
    title: "IELTS Listening question types",
    seoTitle: "IELTS Listening Question Types: Multiple Choice to Short Answer",
    seoDescription:
      "IELTS Listening uses multiple choice, matching, map labelling, form completion, sentence completion and short-answer questions.",
    group: "listening",
    answer:
      "IELTS Listening mixes several question types on the same test. Follow the word limit printed on the question.",
    blocks: [
      {
        type: "answer",
        text: "IELTS Listening mixes several question types on the same test. Follow the word limit printed on the question.",
      },
      { type: "accordion", items: listeningQuestionTypes },
    ],
  },
  {
    slug: "listening-score",
    title: "How IELTS Listening is scored",
    seoTitle: "IELTS Listening Score: 40 Questions to Band",
    seoDescription:
      "IELTS Listening has 40 questions. Raw marks convert to a band; published conversion tables are approximate and can vary by version.",
    group: "listening",
    answer:
      "Listening has 40 questions. Each correct answer generally gets one mark. That raw score is converted to a band from 0 to 9. Exact conversion can vary by test version, so treat any table as a guide.",
    blocks: [
      {
        type: "answer",
        text: "Listening has 40 questions. Each correct answer generally gets one mark. That raw score is converted to a band from 0 to 9. Exact conversion can vary by test version, so treat any table as a guide.",
      },
      { type: "figure", id: "listening-convert" },
    ],
  },
  {
    slug: "reading",
    title: "IELTS Reading",
    seoTitle: "IELTS Reading: Academic vs General Training, 60 Minutes, 40 Questions",
    seoDescription:
      "IELTS Reading is 60 minutes and 40 questions. Academic uses longer texts from books and journals; General Training uses everyday and workplace texts.",
    group: "reading",
    answer:
      "Sixty minutes, 40 questions, no extra transfer time. Academic and General Training share question types. The texts — and the score conversion — do not.",
    blocks: [
      {
        type: "answer",
        text: "Sixty minutes, 40 questions, no extra transfer time. Academic and General Training share question types. The texts — and the score conversion — do not.",
      },
      {
        type: "table",
        headers: ["Aspect", "Academic", "General Training"],
        rows: [
          ["Texts", "Longer pieces from books, journals, magazines, newspapers", "Everyday, workplace and general-interest texts"],
          ["Shape", "Usually three texts, getting harder", "Shorter items first; later sections are longer"],
          ["30 / 40", "Not the same band as GT", "Usually needs more correct answers for the same band"],
        ],
      },
      { type: "accordion", label: "Question types", items: readingQuestionTypes },
    ],
  },
  {
    slug: "reading-question-types",
    title: "IELTS Reading question types",
    seoTitle: "IELTS Reading Question Types: T/F/NG, Headings, Matching and More",
    seoDescription:
      "IELTS Reading includes multiple choice, True/False/Not Given, Yes/No/Not Given, matching, completion tasks and short answers.",
    group: "reading",
    answer:
      "IELTS Reading uses many task types on one paper. True/False/Not Given tests information in the passage. Yes/No/Not Given tests the writer’s views.",
    blocks: [
      {
        type: "answer",
        text: "IELTS Reading uses many task types on one paper. True/False/Not Given tests information in the passage. Yes/No/Not Given tests the writer’s views.",
      },
      { type: "accordion", items: readingQuestionTypes },
    ],
  },
  {
    slug: "reading-score",
    title: "How IELTS Reading is scored",
    seoTitle: "IELTS Reading Score Conversion: Academic vs General Training",
    seoDescription:
      "Reading has 40 questions. Academic and General Training use different conversions from raw score to band. Treat tables as approximate.",
    group: "reading",
    answer:
      "Reading has 40 questions, each generally one mark, converted to a band. Academic Reading and General Training Reading use different conversions. The same number of correct answers can produce different bands.",
    blocks: [
      {
        type: "answer",
        text: "Reading has 40 questions, each generally one mark, converted to a band. Academic Reading and General Training Reading use different conversions. The same number of correct answers can produce different bands.",
      },
      { type: "figure", id: "reading-convert" },
    ],
  },
  {
    slug: "writing",
    title: "IELTS Writing",
    seoTitle: "IELTS Writing: Two Tasks in 60 Minutes",
    seoDescription:
      "IELTS Writing is 60 minutes and two tasks. Academic Task 1 describes visuals; General Training Task 1 is a letter. Task 2 is an essay in both tests.",
    group: "writing",
    answer:
      "Two tasks in 60 minutes. Task 2 carries more of the Writing band than Task 1, so most of the hour belongs there.",
    blocks: [
      {
        type: "answer",
        text: "Two tasks in 60 minutes. Task 2 carries more of the Writing band than Task 1, so most of the hour belongs there.",
      },
      { type: "figure", id: "writing-split" },
      {
        type: "table",
        headers: ["Task", "Academic", "General Training"],
        rows: [
          ["Task 1", "Describe a graph, chart, table, map or process", "A letter — formal, semi-formal or informal"],
          ["Task 2", "An essay on a point of view, argument or problem", "An essay, often on a more everyday topic"],
        ],
      },
      {
        type: "accordion",
        label: "Question types",
        items: [
          {
            title: "Academic Task 1",
            body: "Report the main features of the visual, with comparisons where they matter. You do not give your opinion, and you do not invent reasons the data does not show.",
            example:
              "The chart below shows the percentage of households with internet access in four countries from 2005 to 2020.\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.\nWrite at least 150 words.",
          },
          {
            title: "General Training Task 1",
            body: "Write a letter. State why you are writing early, cover every bullet in the prompt, and match the tone: formal to a company, informal to a friend, semi-formal to a known colleague or landlord.",
            example:
              "You live in a rented flat. Write a letter to the landlord. In your letter:\n• explain a problem with the heating\n• say how long it has been happening\n• say what you would like them to do\nWrite at least 150 words.",
          },
          {
            title: "Task 2 essay",
            body: "Common shapes: opinion / agree or disagree; two views; advantages and disadvantages; problem and solution; two-part questions. Read the question twice. An agree/disagree question that never takes a position is not answering the task.",
            example:
              "Some people think universities should focus on job skills. Others think they should teach a wide range of subjects.\nDiscuss both views and give your own opinion.\nWrite at least 250 words.",
          },
        ],
      },
      { type: "table", headers: writingCriteria.headers, rows: writingCriteria.rows },
      { type: "figure", id: "writing-weight" },
    ],
  },
  {
    slug: "academic-writing",
    title: "IELTS Academic Writing",
    seoTitle: "IELTS Academic Writing Task 1 and Task 2",
    seoDescription:
      "Academic Task 1 describes graphs, charts, tables, processes or maps. Task 2 is an essay on a point of view, argument or problem.",
    group: "writing",
    answer:
      "Academic Task 1 asks you to describe visual information and report the main features, with comparisons where they matter. Task 2 is an essay responding to a point of view, argument or problem.",
    blocks: [
      {
        type: "answer",
        text: "Academic Task 1 asks you to describe visual information and report the main features, with comparisons where they matter. Task 2 is an essay responding to a point of view, argument or problem.",
      },
      {
        type: "table",
        headers: ["Task", "What you write"],
        rows: [
          ["Task 1", "A line graph, bar chart, pie chart, table, process, map, or a combination"],
          ["Task 2", "An essay on a point of view, argument or problem"],
        ],
      },
      {
        type: "accordion",
        label: "Task 2 shapes",
        items: [
          { title: "Opinion / agree or disagree", body: "Take a position and keep it. An essay that never states whether you agree is not answering this question." },
          { title: "Discussion of two views", body: "Cover both views. Only add your own if the question asks for it." },
          { title: "Advantages and disadvantages", body: "Treat both sides. Do not turn it into an opinion essay unless the question asks which side you support." },
          { title: "Problem and solution", body: "Name the problem clearly, then propose solutions that follow from it." },
          { title: "Two-part questions", body: "Answer both parts. A full answer to only the first question is a Task Response miss." },
        ],
      },
    ],
  },
  {
    slug: "general-training-writing",
    title: "IELTS General Training Writing",
    seoTitle: "IELTS General Training Writing: Letters and Essays",
    seoDescription:
      "General Training Task 1 is a formal, semi-formal or informal letter. Task 2 is an essay on a problem, point of view or argument.",
    group: "writing",
    answer:
      "General Training Task 1 is a letter. The style is formal, semi-formal or informal depending on who you are writing to. Task 2 is an essay on a problem, point of view or argument.",
    blocks: [
      {
        type: "answer",
        text: "General Training Task 1 is a letter. The style is formal, semi-formal or informal depending on who you are writing to. Task 2 is an essay on a problem, point of view or argument.",
      },
      {
        type: "table",
        headers: ["Tone", "Who you write to"],
        rows: [
          ["Formal", "A company, council, or someone you do not know"],
          ["Semi-formal", "A known colleague, landlord, or neighbour"],
          ["Informal", "A friend"],
        ],
      },
      {
        type: "accordion",
        label: "What the letter must do",
        items: [
          { title: "Purpose", body: "Say why you are writing, early. A complaint, request, invitation or explanation should be obvious in the first lines." },
          { title: "Bullets", body: "Cover every bullet in the prompt, in a readable order. Missing a bullet costs Task Achievement." },
          { title: "Vocabulary", body: "Match the tone — no slang in a complaint to a council, no stiff legal English to a friend." },
        ],
      },
    ],
  },
  {
    slug: "writing-assessment",
    title: "How IELTS Writing is assessed",
    seoTitle: "IELTS Writing Assessment Criteria and Task 1 vs Task 2 Weighting",
    seoDescription:
      "IELTS Writing is marked on Task Achievement or Task Response, Coherence and Cohesion, Lexical Resource, and Grammatical Range and Accuracy. Task 2 counts more.",
    group: "writing",
    answer:
      "Examiners mark IELTS Writing on four criteria: Task Achievement (Task 1) or Task Response (Task 2), Coherence and Cohesion, Lexical Resource, and Grammatical Range and Accuracy. Task 2 has more weight in the Writing band than Task 1.",
    blocks: [
      {
        type: "answer",
        text: "Examiners mark IELTS Writing on four criteria: Task Achievement (Task 1) or Task Response (Task 2), Coherence and Cohesion, Lexical Resource, and Grammatical Range and Accuracy. Task 2 has more weight in the Writing band than Task 1.",
      },
      { type: "table", headers: writingCriteria.headers, rows: writingCriteria.rows },
      { type: "figure", id: "writing-weight" },
    ],
  },
  {
    slug: "speaking",
    title: "IELTS Speaking",
    seoTitle: "IELTS Speaking Test: Format, Three Parts and Timing",
    seoDescription:
      "IELTS Speaking is a face-to-face interview of 11–14 minutes in three parts: interview, cue-card long turn, then discussion.",
    group: "speaking",
    answer:
      "A face-to-face interview with an examiner, usually 11–14 minutes. It is recorded. You talk to a person — there is no computer speaking test in this format.",
    blocks: [
      {
        type: "answer",
        text: "A face-to-face interview with an examiner, usually 11–14 minutes. It is recorded. You talk to a person — there is no computer speaking test in this format.",
      },
      { type: "figure", id: "speaking-parts" },
      {
        type: "accordion",
        label: "Question types",
        items: [
          {
            title: "Part 1 — familiar interview",
            body: "Home, family, work, studies, hobbies, daily routine, food, travel. Answer, add a reason or a small example, then stop. One-word replies are too short; a memorised paragraph is too long.",
            example: "Do you prefer to study in the morning or in the evening? Why?",
          },
          {
            title: "Part 2 — cue card",
            body: "You get one minute to prepare, then speak for up to two minutes. Use the minute to note the bullets on the card, not to write a script.",
            example:
              "Describe a place you would like to visit.\nYou should say:\n• what the place is\n• where it is\n• why you want to go there\nand explain what you would do there.",
          },
          {
            title: "Part 3 — broader discussion",
            body: "Questions linked to the Part 2 topic, but more abstract: opinions, comparison, analysis, speculation. If Part 2 was a place to visit, Part 3 might ask how tourism changes a town. “Yes, I agree” is not enough for this part.",
            example: "How has travel changed in your country in the last twenty years?",
          },
        ],
      },
      { type: "table", headers: speakingCriteria.headers, rows: speakingCriteria.rows },
    ],
  },
  {
    slug: "speaking-part-1",
    title: "IELTS Speaking Part 1",
    seoTitle: "IELTS Speaking Part 1: Introduction and Interview Topics",
    seoDescription:
      "Part 1 asks about familiar topics such as home, work, studies, hobbies, food and travel. Answers should be natural, not memorised speeches.",
    group: "speaking",
    answer:
      "Part 1 is an introduction and interview on familiar topics — home, family, work, studies, hobbies, daily routine, food, travel. The examiner wants clear, extended answers, not one-word replies and not a memorised paragraph.",
    blocks: [
      {
        type: "answer",
        text: "Part 1 is an introduction and interview on familiar topics — home, family, work, studies, hobbies, daily routine, food, travel. The examiner wants clear, extended answers, not one-word replies and not a memorised paragraph.",
      },
      {
        type: "p",
        text: "A useful habit: answer, then add a reason or a small example, then stop. Over-long Part 1 answers that sound rehearsed are easy to hear.",
      },
    ],
  },
  {
    slug: "speaking-part-2",
    title: "IELTS Speaking Part 2",
    seoTitle: "IELTS Speaking Part 2: Cue Card, 1 Minute Prep, 2 Minutes Talk",
    seoDescription:
      "In Part 2 you get a cue card, one minute to prepare, then speak for up to two minutes on the topic.",
    group: "speaking",
    answer:
      "In Part 2 you receive a topic on a cue card. You get one minute to prepare, then you speak for up to two minutes. The card lists points you should cover.",
    blocks: [
      {
        type: "answer",
        text: "In Part 2 you receive a topic on a cue card. You get one minute to prepare, then you speak for up to two minutes. The card lists points you should cover.",
      },
      {
        type: "example",
        label: "Example task",
        text: "Describe a place you would like to visit. You should say what the place is, where it is, why you want to visit it, and what you would do there.",
      },
      {
        type: "p",
        text: "Use the minute to note the four bullets, not to write a script. If you finish early, add detail on the last bullet rather than going silent. The examiner may ask a short follow-up before Part 3.",
      },
    ],
  },
  {
    slug: "speaking-part-3",
    title: "IELTS Speaking Part 3",
    seoTitle: "IELTS Speaking Part 3: Discussion and Abstract Questions",
    seoDescription:
      "Part 3 discusses broader issues related to the Part 2 topic: opinions, comparison, analysis and speculation.",
    group: "speaking",
    answer:
      "Part 3 is a discussion of more abstract questions related to the Part 2 topic. It tests whether you can explain ideas, give opinions, compare, analyse, speculate and talk about broader issues — not only describe your own life.",
    blocks: [
      {
        type: "answer",
        text: "Part 3 is a discussion of more abstract questions related to the Part 2 topic. It tests whether you can explain ideas, give opinions, compare, analyse, speculate and talk about broader issues — not only describe your own life.",
      },
      {
        type: "p",
        text: "If Part 2 was a place you would like to visit, Part 3 might ask how tourism changes a town, or whether young people should travel before university. Short answers that only say “yes, I agree” do not show the skill this part is for.",
      },
    ],
  },
  {
    slug: "speaking-assessment",
    title: "How IELTS Speaking is scored",
    seoTitle: "IELTS Speaking Band Descriptors: Fluency, Vocabulary, Grammar, Pronunciation",
    seoDescription:
      "Speaking is marked on Fluency and Coherence, Lexical Resource, Grammatical Range and Accuracy, and Pronunciation.",
    group: "speaking",
    answer:
      "Speaking is marked on four criteria: Fluency and Coherence, Lexical Resource, Grammatical Range and Accuracy, and Pronunciation. Accent is not a separate score — the question is whether you can be understood and use English with control.",
    blocks: [
      {
        type: "answer",
        text: "Speaking is marked on four criteria: Fluency and Coherence, Lexical Resource, Grammatical Range and Accuracy, and Pronunciation. Accent is not a separate score — the question is whether you can be understood and use English with control.",
      },
      { type: "table", headers: speakingCriteria.headers, rows: speakingCriteria.rows },
    ],
  },
];
