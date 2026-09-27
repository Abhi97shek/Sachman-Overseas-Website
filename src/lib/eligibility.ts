import { destinationCards, type DestinationCard } from "@/lib/destinations";

export type StudyLevel = "bachelor" | "master" | "diploma";
export type EnglishTest = "ielts" | "pte" | "none";
export type FitStatus = "fit" | "possible" | "not-yet";

export type EligibilityProfile = {
  level: StudyLevel;
  tenth: number;
  twelfth: number;
  ug?: number;
  english: EnglishTest;
  englishScore?: number;
  gapYears: number;
};

export type CountryMatch = {
  place: DestinationCard;
  status: FitStatus;
  reasons: string[];
  englishNeeded: boolean;
};

type LevelReq = {
  /* 12th % for diploma/bachelor; UG % for master's */
  marks: number;
  ielts: number;
  gap: number;
  tenth: number;
};

type CountryRule = {
  slug: string;
  bachelor: LevelReq;
  master: LevelReq;
  diploma?: LevelReq;
  note?: Partial<Record<StudyLevel, string>>;
  /* If true, the note is a real constraint and a Fit result becomes Possible. */
  noteLimits?: Partial<Record<StudyLevel, true>>;
};

export const studyLevels: { value: StudyLevel; label: string; hint: string }[] = [
  { value: "bachelor", label: "Bachelor's", hint: "After 12th" },
  { value: "master", label: "Master's", hint: "After graduation" },
  { value: "diploma", label: "Diploma", hint: "Foundation or college" },
];

export const gapOptions = [
  { value: "0", label: "No gap" },
  { value: "1", label: "1 year" },
  { value: "2", label: "2 years" },
  { value: "3", label: "3 years" },
  { value: "4", label: "4 years" },
  { value: "5", label: "5 years" },
  { value: "6", label: "More than 5 years" },
];

/* Typical first-pass cut-offs used in Pathankot counselling — not university policy. */
const rules: CountryRule[] = [
  {
    slug: "united-states",
    bachelor: { marks: 60, ielts: 6.0, gap: 2, tenth: 50 },
    master: { marks: 60, ielts: 6.5, gap: 5, tenth: 50 },
  },
  {
    slug: "canada",
    bachelor: { marks: 60, ielts: 6.0, gap: 2, tenth: 50 },
    master: { marks: 60, ielts: 6.5, gap: 5, tenth: 50 },
    diploma: { marks: 55, ielts: 6.0, gap: 3, tenth: 50 },
    note: {
      bachelor: "Colleges often take 55–60% in 12th. Universities ask more.",
    },
  },
  {
    slug: "united-kingdom",
    bachelor: { marks: 60, ielts: 6.0, gap: 3, tenth: 50 },
    master: { marks: 55, ielts: 6.0, gap: 8, tenth: 50 },
  },
  {
    slug: "ireland",
    bachelor: { marks: 60, ielts: 6.0, gap: 2, tenth: 50 },
    master: { marks: 55, ielts: 6.5, gap: 5, tenth: 50 },
  },
  {
    slug: "australia",
    bachelor: { marks: 60, ielts: 6.0, gap: 2, tenth: 50 },
    master: { marks: 60, ielts: 6.5, gap: 5, tenth: 50 },
  },
  {
    slug: "new-zealand",
    bachelor: { marks: 60, ielts: 6.0, gap: 2, tenth: 50 },
    master: { marks: 55, ielts: 6.5, gap: 5, tenth: 50 },
  },
  {
    slug: "germany",
    bachelor: { marks: 70, ielts: 6.0, gap: 1, tenth: 55 },
    master: { marks: 65, ielts: 6.5, gap: 3, tenth: 55 },
    note: {
      bachelor: "Most 12th students need Studienkolleg or one year of a bachelor's in India first.",
    },
    noteLimits: { bachelor: true },
  },
  {
    slug: "singapore",
    bachelor: { marks: 75, ielts: 6.5, gap: 1, tenth: 60 },
    master: { marks: 70, ielts: 6.5, gap: 3, tenth: 55 },
  },
  {
    slug: "united-arab-emirates",
    bachelor: { marks: 50, ielts: 5.5, gap: 5, tenth: 45 },
    master: { marks: 50, ielts: 6.0, gap: 8, tenth: 45 },
  },
  {
    slug: "france",
    bachelor: { marks: 60, ielts: 6.0, gap: 2, tenth: 50 },
    master: { marks: 55, ielts: 6.0, gap: 5, tenth: 50 },
  },
  {
    slug: "sweden",
    bachelor: { marks: 65, ielts: 6.5, gap: 2, tenth: 55 },
    master: { marks: 60, ielts: 6.5, gap: 4, tenth: 50 },
  },
  {
    slug: "netherlands",
    bachelor: { marks: 70, ielts: 6.0, gap: 1, tenth: 55 },
    master: { marks: 65, ielts: 6.5, gap: 3, tenth: 55 },
  },
  {
    slug: "austria",
    bachelor: { marks: 60, ielts: 6.0, gap: 2, tenth: 50 },
    master: { marks: 60, ielts: 6.0, gap: 4, tenth: 50 },
  },
  {
    slug: "denmark",
    bachelor: { marks: 65, ielts: 6.5, gap: 1, tenth: 55 },
    master: { marks: 60, ielts: 6.5, gap: 3, tenth: 50 },
  },
  {
    slug: "finland",
    bachelor: { marks: 60, ielts: 6.0, gap: 2, tenth: 50 },
    master: { marks: 60, ielts: 6.5, gap: 4, tenth: 50 },
  },
  {
    slug: "italy",
    bachelor: { marks: 55, ielts: 6.0, gap: 2, tenth: 50 },
    master: { marks: 55, ielts: 6.0, gap: 5, tenth: 50 },
  },
  {
    slug: "hungary",
    bachelor: { marks: 50, ielts: 5.5, gap: 3, tenth: 45 },
    master: { marks: 50, ielts: 6.0, gap: 6, tenth: 45 },
  },
  {
    slug: "switzerland",
    bachelor: { marks: 70, ielts: 6.5, gap: 1, tenth: 60 },
    master: { marks: 70, ielts: 6.5, gap: 2, tenth: 55 },
  },
  {
    slug: "spain",
    bachelor: { marks: 55, ielts: 6.0, gap: 2, tenth: 50 },
    master: { marks: 55, ielts: 6.0, gap: 5, tenth: 50 },
  },
  {
    slug: "belgium",
    bachelor: { marks: 65, ielts: 6.5, gap: 1, tenth: 55 },
    master: { marks: 60, ielts: 6.5, gap: 3, tenth: 50 },
  },
  {
    slug: "poland",
    bachelor: { marks: 50, ielts: 5.5, gap: 3, tenth: 45 },
    master: { marks: 50, ielts: 6.0, gap: 6, tenth: 45 },
  },
  {
    slug: "czech-republic",
    bachelor: { marks: 55, ielts: 5.5, gap: 2, tenth: 50 },
    master: { marks: 55, ielts: 6.0, gap: 5, tenth: 50 },
  },
  {
    slug: "lithuania",
    bachelor: { marks: 50, ielts: 5.5, gap: 3, tenth: 45 },
    master: { marks: 50, ielts: 6.0, gap: 6, tenth: 45 },
  },
  {
    slug: "latvia",
    bachelor: { marks: 50, ielts: 5.5, gap: 3, tenth: 45 },
    master: { marks: 50, ielts: 6.0, gap: 6, tenth: 45 },
  },
  {
    slug: "cyprus",
    bachelor: { marks: 50, ielts: 5.5, gap: 4, tenth: 45 },
    master: { marks: 50, ielts: 5.5, gap: 8, tenth: 45 },
  },
  {
    slug: "bulgaria",
    bachelor: { marks: 50, ielts: 5.5, gap: 4, tenth: 45 },
    master: { marks: 50, ielts: 5.5, gap: 8, tenth: 45 },
  },
  {
    slug: "malta",
    bachelor: { marks: 50, ielts: 5.5, gap: 3, tenth: 45 },
    master: { marks: 50, ielts: 6.0, gap: 6, tenth: 45 },
  },
  {
    slug: "georgia",
    bachelor: { marks: 45, ielts: 5.5, gap: 5, tenth: 40 },
    master: { marks: 45, ielts: 5.5, gap: 8, tenth: 40 },
  },
  {
    slug: "south-korea",
    bachelor: { marks: 60, ielts: 5.5, gap: 2, tenth: 50 },
    master: { marks: 60, ielts: 6.0, gap: 4, tenth: 50 },
  },
  {
    slug: "mauritius",
    bachelor: { marks: 50, ielts: 5.5, gap: 4, tenth: 45 },
    master: { marks: 50, ielts: 6.0, gap: 7, tenth: 45 },
  },
];

const ruleBySlug = new Map(rules.map((rule) => [rule.slug, rule]));

function diplomaFrom(bachelor: LevelReq): LevelReq {
  return {
    marks: Math.max(45, bachelor.marks - 5),
    ielts: Math.max(5, bachelor.ielts - 0.5),
    gap: bachelor.gap + 1,
    tenth: Math.max(40, bachelor.tenth - 5),
  };
}

export function pteToIelts(pte: number) {
  if (pte >= 76) return 8;
  if (pte >= 73) return 7.5;
  if (pte >= 65) return 7;
  if (pte >= 58) return 6.5;
  if (pte >= 50) return 6;
  if (pte >= 42) return 5.5;
  if (pte >= 36) return 5;
  if (pte >= 30) return 4.5;
  return 4;
}

export function ieltsEquivalent(profile: EligibilityProfile) {
  if (profile.english === "none" || profile.englishScore == null) return null;
  return profile.english === "pte" ? pteToIelts(profile.englishScore) : profile.englishScore;
}

function requirement(rule: CountryRule, level: StudyLevel): LevelReq {
  if (level === "master") return rule.master;
  if (level === "diploma") return rule.diploma ?? diplomaFrom(rule.bachelor);
  return rule.bachelor;
}

function academicMarks(profile: EligibilityProfile) {
  return profile.level === "master" ? (profile.ug ?? 0) : profile.twelfth;
}

function academicLabel(level: StudyLevel) {
  return level === "master" ? "Graduation" : "12th";
}

function rank(status: FitStatus) {
  if (status === "fit") return 0;
  if (status === "possible") return 1;
  return 2;
}

function matchCountry(place: DestinationCard, profile: EligibilityProfile): CountryMatch | null {
  const rule = ruleBySlug.get(place.slug);
  if (!rule) return null;

  const req = requirement(rule, profile.level);
  const marks = academicMarks(profile);
  const ielts = ieltsEquivalent(profile);
  const reasons: string[] = [];
  let status: FitStatus = "fit";
  let englishNeeded = false;

  const marksGap = marks - req.marks;
  if (marksGap < -8) {
    status = "not-yet";
    reasons.push(`${academicLabel(profile.level)} ${marks}% is below the usual ${req.marks}%.`);
  } else if (marksGap < 0) {
    status = "possible";
    reasons.push(`${academicLabel(profile.level)} ${marks}% is close to the usual ${req.marks}%. Some colleges still take the file.`);
  } else {
    reasons.push(`${academicLabel(profile.level)} ${marks}% meets the usual ${req.marks}%.`);
  }

  if (profile.tenth < req.tenth && status !== "not-yet") {
    status = "possible";
    reasons.push(`10th ${profile.tenth}% is under the usual ${req.tenth}%. We weigh 12th more, but the file needs a clear story.`);
  }

  if (profile.level === "master" && profile.twelfth < 50 && status !== "not-yet") {
    status = "possible";
    reasons.push(`12th ${profile.twelfth}% is thin for a master's file. Universities still look at it.`);
  }

  if (ielts == null) {
    englishNeeded = true;
    if (status === "fit") status = "possible";
    reasons.push(`Sit IELTS ${req.ielts} or the PTE equivalent before you apply.`);
  } else if (ielts <= req.ielts - 1) {
    status = "not-yet";
    reasons.push(
      profile.english === "pte"
        ? `PTE ${profile.englishScore} is below the usual IELTS ${req.ielts} (about PTE ${req.ielts >= 6.5 ? 58 : 50}).`
        : `IELTS ${ielts} is below the usual ${req.ielts}.`,
    );
  } else if (ielts < req.ielts) {
    if (status === "fit") status = "possible";
    reasons.push(
      profile.english === "pte"
        ? `PTE ${profile.englishScore} is just under the usual IELTS ${req.ielts}.`
        : `IELTS ${ielts} is just under the usual ${req.ielts}. A retake or a college with a lower band can still work.`,
    );
  } else {
    reasons.push(
      profile.english === "pte" ? `PTE ${profile.englishScore} covers the usual IELTS ${req.ielts}.` : `IELTS ${ielts} meets the usual ${req.ielts}.`,
    );
  }

  if (profile.gapYears > req.gap + 3) {
    status = "not-yet";
    reasons.push(`${profile.gapYears}+ year gap is longer than most ${place.name} files accept without strong work proof.`);
  } else if (profile.gapYears > req.gap) {
    if (status === "fit") status = "possible";
    reasons.push(`${profile.gapYears} year gap needs work letters or a study plan. Typical files stay within ${req.gap} years.`);
  } else if (profile.gapYears > 0) {
    reasons.push(`${profile.gapYears === 1 ? "1 year" : `${profile.gapYears} years`} gap is within the usual range.`);
  }

  const extra = rule.note?.[profile.level];
  if (extra) {
    reasons.push(extra);
    if (rule.noteLimits?.[profile.level] && status === "fit") status = "possible";
  }

  return { place, status, reasons, englishNeeded };
}

export function matchDestinations(profile: EligibilityProfile): CountryMatch[] {
  return destinationCards
    .map((place) => matchCountry(place, profile))
    .filter((item): item is CountryMatch => item !== null)
    .sort((a, b) => rank(a.status) - rank(b.status) || a.place.name.localeCompare(b.place.name));
}

export function countByStatus(matches: CountryMatch[]) {
  return {
    fit: matches.filter((item) => item.status === "fit").length,
    possible: matches.filter((item) => item.status === "possible").length,
    "not-yet": matches.filter((item) => item.status === "not-yet").length,
  };
}
