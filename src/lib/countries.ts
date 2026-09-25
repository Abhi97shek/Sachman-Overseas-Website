export type Country = {
  slug: string;
  name: string;
  flag: string;
  image: string;
  landmark: string;
  blurb: string;
  headline: string;
  overview: string;
  story: string;
  facts: { label: string; value: string }[];
  included: string[];
  visaGuide?: VisaGuide;
};

export type VisaGuide = {
  postStudy: {
    intro: string;
    rows: { qualification: string; stay: string }[];
    notes: string[];
  };
  processing: {
    intro: string;
    rows: { label: string; value: string; detail: string }[];
    note: string;
  };
  documents: { title: string; detail: string }[];
  application: {
    intro: string;
    steps: { title: string; detail: string }[];
    questions: string[];
  };
};

export const countries: Country[] = [
  {
    slug: "canada",
    name: "Canada",
    flag: "/images/flags/ca.svg",
    image: "/images/landmarks/canada.jpg",
    landmark: "CN Tower, Toronto",
    blurb:
      "Colleges and university pathways, with room to build a career after graduation. We match the intake to your scores, budget, and goals.",
    headline: "Study route: Canada",
    overview:
      "Colleges and universities with a practical path after graduation. We line up the course, the city, and the study permit before you apply.",
    story:
      "Most students start with a diploma or a degree in a city they can afford. From Pathankot we shortlist colleges, check IELTS or PTE scores against the offer, and build the study-permit file: funds, ties, and a clear study plan.",
    facts: [
      { label: "Route", value: "Diploma & degree" },
      { label: "Test", value: "IELTS or PTE" },
      { label: "Visa", value: "Study permit" },
      { label: "Focus", value: "Career after study" },
    ],
    included: [
      "Course and city shortlist",
      "Score check against offers",
      "Study-permit document list",
      "Interview preparation",
    ],
  },
  {
    slug: "united-kingdom",
    name: "United Kingdom",
    flag: "/images/flags/gb.svg",
    image: "/images/landmarks/uk.jpg",
    landmark: "Big Ben, London",
    blurb:
      "Undergraduate and postgraduate study across the UK. Shortlists, personal statements, and the student visa file — handled with you.",
    headline: "Study route: United Kingdom",
    overview:
      "Undergraduate and postgraduate study, with the personal statement and the student visa treated as one plan.",
    story:
      "We match your academics to universities that will actually consider the file, then draft the statement and gather the CAS and financial papers the visa needs.",
    facts: [
      { label: "Route", value: "UG & PG" },
      { label: "Test", value: "IELTS or PTE" },
      { label: "Visa", value: "Student visa" },
      { label: "Focus", value: "Offer then CAS" },
    ],
    included: [
      "University shortlist",
      "Personal statement support",
      "CAS and visa checklist",
      "Pre-submission review",
    ],
  },
  {
    slug: "australia",
    name: "Australia",
    flag: "/images/flags/au.svg",
    image: "/images/landmarks/australia.jpg",
    landmark: "Sydney Opera House",
    blurb:
      "Courses with strong career outcomes and a clear study pathway. From the offer letter to the visa, the plan stays practical.",
    headline: "Study route: Australia",
    overview:
      "Courses chosen for what you can do after graduation, then a student visa file that matches the offer.",
    story:
      "We compare VET and degree options against your budget and scores, confirm the Genuine Student story, and keep the offer letter and visa papers in one sequence.",
    facts: [
      { label: "Route", value: "VET & degrees" },
      { label: "Test", value: "IELTS, PTE, TOEFL" },
      { label: "Visa", value: "Subclass 500" },
      { label: "After study", value: "2–4 years" },
    ],
    included: [
      "Post-study work length",
      "Genuine Student answers",
      "Document checklist",
      "ImmiAccount lodgement",
    ],
    visaGuide: {
      postStudy: {
        intro:
          "After you finish a CRICOS course in Australia, the usual work visa is the Temporary Graduate visa (subclass 485), Post-Higher Education Work stream. For an Indian passport, the stay depends on the qualification.",
        rows: [
          { qualification: "Bachelor degree, including honours", stay: "2 years" },
          {
            qualification: "Bachelor with first-class honours in STEM, including ICT",
            stay: "3 years",
          },
          {
            qualification: "Masters (coursework, extended, or research)",
            stay: "3 years",
          },
          { qualification: "Doctoral degree (PhD)", stay: "4 years" },
        ],
        notes: [
          "You can work full-time, for any employer, for the length of that visa.",
          "The course has to be on CRICOS, and you apply after you complete it. Most applicants need to be under 35. Masters by research and PhD applicants can apply up to age 50.",
          "British National (Overseas) passport holders follow a different stay. We use the Indian arrangement above for files from Pathankot.",
        ],
      },
      processing: {
        intro:
          "The student visa is subclass 500, lodged online. There is usually no visa interview. Home Affairs starts offshore files by priority. These windows are when a case officer begins the file, not the day the visa is granted.",
        rows: [
          {
            label: "Priority 1",
            value: "1–4 weeks",
            detail: "Provider is still inside its yearly allocation.",
          },
          {
            label: "Priority 2",
            value: "5–8 weeks",
            detail: "Provider has passed its higher-priority share.",
          },
          {
            label: "Priority 3",
            value: "9–12 weeks",
            detail: "Provider has reached the threshold for that year.",
          },
        ],
        note: "A complete file moves faster. Biometrics, a health exam, or a request for more papers can push the grant later. Priority follows the education provider on your main Confirmation of Enrolment, for applications lodged from 14 November 2025.",
      },
      documents: [
        {
          title: "Passport",
          detail: "Bio page. Add a birth certificate or national ID if you have one.",
        },
        {
          title: "Confirmation of Enrolment",
          detail: "A CoE for every course in the package, before you lodge.",
        },
        {
          title: "OSHC",
          detail: "Overseas Student Health Cover from a week before class until the end of your stay.",
        },
        {
          title: "English test",
          detail: "IELTS, PTE, or TOEFL, unless you fall under an exemption.",
        },
        {
          title: "Academics",
          detail: "Transcripts and certificates for Class 12, diploma, or degree.",
        },
        {
          title: "Funds",
          detail: "Travel, 12 months of living costs, tuition, and school fees for any child on the file.",
        },
        {
          title: "Genuine Student evidence",
          detail: "Employment proof, a CV, and papers that match the answers in the form.",
        },
        {
          title: "Health and biometrics",
          detail: "Only if Home Affairs asks. Book them as soon as the request arrives.",
        },
      ],
      application: {
        intro:
          "The Genuine Student (GS) requirement replaced the old GTE test for applications lodged from 23 March 2024. You answer inside the online form, in English, up to 150 words each.",
        steps: [
          {
            title: "Offer, then CoE",
            detail: "The college or university issues the Confirmation of Enrolment after you accept and meet their conditions.",
          },
          {
            title: "Build the file",
            detail: "Passport, academics, English score, funds, and OSHC sit in one folder before anyone opens ImmiAccount.",
          },
          {
            title: "Lodge subclass 500",
            detail: "Create an ImmiAccount, complete the form, attach the documents, and pay the visa charge.",
          },
          {
            title: "Answer the GS questions",
            detail: "Write the four answers in the form. Attach the papers that support them. A loose essay on its own is not enough.",
          },
          {
            title: "Biometrics and health",
            detail: "Complete these if Home Affairs requests them. A decision can be made while they are still pending, so book early.",
          },
          {
            title: "Grant",
            detail: "There is usually no interview. You travel once the grant notice and the course start date line up.",
          },
        ],
        questions: [
          "Your current circumstances: family, community, work, and money.",
          "Why this course, with this provider, in Australia, and what study and living there will ask of you.",
          "How finishing the course helps your future.",
          "Anything else that belongs on the file. A previous student visa, or a visa lodged inside Australia, needs one more question.",
        ],
      },
    },
  },
  {
    slug: "germany",
    name: "Germany",
    flag: "/images/flags/de.svg",
    image: "/images/landmarks/germany.jpg",
    landmark: "Brandenburg Gate, Berlin",
    blurb:
      "Affordable public universities and English-taught programmes. We map admissions, proof of funds, and each visa step.",
    headline: "Study route: Germany",
    overview:
      "Public universities and English-taught programmes, with admissions and proof of funds mapped before you apply.",
    story:
      "Germany rewards a tidy file. We check whether your academics fit the programme, what German or IELTS the course asks for, and how the blocked-account and visa appointment should be timed.",
    facts: [
      { label: "Route", value: "Public universities" },
      { label: "Test", value: "IELTS or German" },
      { label: "Visa", value: "Student visa" },
      { label: "Focus", value: "Low tuition" },
    ],
    included: [
      "Programme fit check",
      "Language requirement plan",
      "Proof-of-funds steps",
      "Visa appointment order",
    ],
  },
  {
    slug: "new-zealand",
    name: "New Zealand",
    flag: "/images/flags/nz.svg",
    image: "/images/landmarks/nz.jpg",
    landmark: "Milford Sound",
    blurb:
      "Quality education in a safe, welcoming setting. A strong fit if you want a smaller campus and a manageable student life.",
    headline: "Study route: New Zealand",
    overview:
      "A smaller campus and a straightforward fee-paying student visa, suited to students who want a calmer setting.",
    story:
      "We look at diplomas and degrees in cities you can live in, then line up the offer, tuition evidence, and the visa form so nothing is filed out of order.",
    facts: [
      { label: "Route", value: "Diplomas & degrees" },
      { label: "Test", value: "IELTS or PTE" },
      { label: "Visa", value: "Fee-paying student" },
      { label: "Focus", value: "Smaller campuses" },
    ],
    included: [
      "Campus shortlist",
      "Offer and tuition check",
      "Visa form review",
      "Departure checklist",
    ],
  },
  {
    slug: "united-states",
    name: "United States",
    flag: "/images/flags/us.svg",
    image: "/images/landmarks/usa.jpg",
    landmark: "Statue of Liberty, New York",
    blurb:
      "Universities across every major city, from community college to graduate school. We align the campus to your profile.",
    headline: "Study route: United States",
    overview:
      "From community college to graduate school. The campus has to fit your scores, your budget, and the F-1 rules.",
    story:
      "We narrow the list before you spend on applications, then help with the I-20 story, funds, and the visa interview so the answers match the file.",
    facts: [
      { label: "Route", value: "UG, college & PG" },
      { label: "Test", value: "IELTS or PTE" },
      { label: "Visa", value: "F-1 student" },
      { label: "Focus", value: "Campus fit" },
    ],
    included: [
      "Campus shortlist",
      "Application order",
      "I-20 and funds check",
      "Visa interview practice",
    ],
  },
];

export function getCountry(slug: string) {
  return countries.find((country) => country.slug === slug);
}
