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
      { label: "Test", value: "IELTS or PTE" },
      { label: "Visa", value: "Subclass 500" },
      { label: "Focus", value: "Career outcomes" },
    ],
    included: [
      "Course comparison",
      "Offer-letter review",
      "Genuine Student notes",
      "Visa checklist",
    ],
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
