import type { IeltsFaq } from "@/lib/ielts/types";
import { googleRating } from "@/lib/stories";

export const ieltsFaqs: IeltsFaq[] = [
  {
    q: "What does IELTS stand for?",
    a: "IELTS stands for International English Language Testing System. It is an English-language test used for study, work and migration.",
  },
  {
    q: "How many sections are there in IELTS?",
    a: "IELTS has four sections: Listening, Reading, Writing and Speaking. Listening and Reading test comprehension; Writing and Speaking test how you produce English.",
  },
  {
    q: "How many questions are there in IELTS Listening?",
    a: "IELTS Listening has 40 questions, usually across four parts. Each correct answer is generally worth one mark, which is then converted to a band score.",
  },
  {
    q: "How many questions are there in IELTS Reading?",
    a: "IELTS Reading has 40 questions in 60 minutes. Academic and General Training use different texts, and the raw-score to band conversion can differ between the two.",
  },
  {
    q: "How long is the IELTS test?",
    a: "Listening takes about 30 minutes, Reading 60 minutes, Writing 60 minutes, and Speaking 11–14 minutes. Speaking may be on the same day as the other sections or at a different appointment, depending on the centre.",
  },
  {
    q: "What is the difference between IELTS Academic and General Training?",
    a: "Academic is the usual test for university or college study and some professional registration. General Training is commonly used for work, migration, or training below degree level. The institution, employer or immigration programme tells you which one to book.",
  },
  {
    q: "What are the IELTS Writing Task 1 question types?",
    a: "In Academic Task 1 you usually describe visual information such as a graph, chart, table, process, map, or a combination. In General Training Task 1 you write a letter in a formal, semi-formal or informal style.",
  },
  {
    q: "What are the IELTS Speaking parts?",
    a: "Speaking is a face-to-face interview in three parts: short questions on familiar topics, a long turn from a cue card, then a discussion of more abstract questions linked to that topic.",
  },
  {
    q: "How is the IELTS overall band calculated?",
    a: "Add Listening, Reading, Writing and Speaking, then divide by four. The average is rounded to the nearest whole or half band: .25 rounds up to the next half band, and .75 rounds up to the next whole band.",
  },
  {
    q: "Is 6.5 a good IELTS score?",
    a: "Whether 6.5 is enough depends on the university, course, employer or immigration programme you are applying to. Some offers need 6.0, others 7.0 with a minimum in each skill. Check the requirement on your list, then set that as the target.",
  },
  {
    q: "Can I retake IELTS?",
    a: "Yes. You can book another full test. Some centres also offer a One Skill Retake for a single section; availability and rules depend on how you first sat the test. Confirm the current options when you book.",
  },
  {
    q: "How long should I prepare for IELTS?",
    a: "It depends on your starting level and target band. After a diagnostic mock, we set a timeline from the gap in each skill — often weeks for a small lift, longer if Writing or Speaking needs rebuilding.",
  },
  {
    q: "Is IELTS available on computer in India?",
    a: "Yes. In India, Listening and Reading are taken on computer. You can type Writing on computer, or choose Writing on Paper and handwrite on the official answer sheet. Speaking is still with an examiner.",
  },
  {
    q: "Is IELTS difficult?",
    a: "Difficulty depends on the band you need and how close you already are. The test is predictable in format. Students who practise the real task types under timed conditions usually find the day itself less surprising than the first mock.",
  },
  {
    q: "How can I improve my IELTS Writing score?",
    a: "Answer the task fully, organise paragraphs so each one does a job, and get marked feedback on Task Achievement or Task Response, cohesion, vocabulary and grammar. At Sachman, writing is marked against those four criteria, not only grammar.",
  },
  {
    q: "How can I improve my IELTS Speaking score?",
    a: "Practise the three parts with a partner or trainer, extend answers with reasons and examples, and work on fluency, vocabulary, grammar and pronunciation together. Cue-card timing — one minute to prepare, up to two minutes to speak — should feel familiar before test day.",
  },
  {
    q: "How is IELTS Listening scored?",
    a: "Listening has 40 questions. Each correct answer generally receives one mark. The raw score is converted to a band from 0 to 9. Conversion can vary slightly by test version, so published tables are a guide, not a guarantee.",
  },
  {
    q: "How is IELTS Reading scored?",
    a: "Reading also has 40 questions, marked and converted to a band. Academic Reading and General Training Reading use different conversions, so the same number of correct answers can produce a different band.",
  },
  {
    q: "What happens if I get different scores in each section?",
    a: "That is normal. You receive a band for each skill plus an overall average. Universities and visa programmes often set both an overall band and a minimum in one or more skills, so a high Listening score does not hide a low Writing score.",
  },
  {
    q: "Who conducts IELTS?",
    a: "IELTS is jointly owned by the British Council, IDP IELTS, and Cambridge University Press & Assessment. In India, tests are delivered through authorised centres.",
  },
  {
    q: "Where is IELTS accepted?",
    a: "IELTS is accepted by universities, professional bodies, employers and immigration authorities in countries including the UK, Australia, Canada, New Zealand and many institutions in the United States. Always confirm the test type the organisation asks for.",
  },
  {
    q: "Do I need Academic or General Training from Pathankot?",
    a: "Most students applying for a degree abroad take Academic. General Training is more common for work or migration. Bring the university or visa requirement to counselling and we book the matching test.",
  },
  {
    q: "When should I book the IELTS test?",
    a: "Book when weekly mocks are at or near the band on your offer. Booking too early freezes a weak Writing or Speaking score; waiting too long can miss an intake. We help pick the date from your mock trend.",
  },
  {
    q: "How much is the IELTS test fee in India?",
    a: "Fees vary by test type and can change. Check the current fee on the official IDP India page before you pay. Sachman Overseas coaches for the test; we do not set the exam fee.",
  },
  {
    q: "Which is the best IELTS institute in Pathankot?",
    a: `There is no official ranking. Compare weekly mocks, Writing and Speaking marking, Google reviews, and whether you can attend classes on Dalhousie Road. Sachman Overseas (Sachman Institute) is an IELTS coaching centre in Pathankot with weekly mocks and a free first counselling session. Google lists the centre at ${googleRating.score} from ${googleRating.count} reviews; one published review calls it the best IELTS institute in Pathankot.`,
  },
];
