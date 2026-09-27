export type StudyDestination = {
  name: string;
  slug: string;
  code: string;
  /* main international airport, shown on the departures board and boarding pass */
  airport: string;
  region: "Popular" | "Europe" | "Asia and beyond";
};

export const studyDestinations: StudyDestination[] = [
  { name: "United States", slug: "united-states", code: "us", airport: "JFK", region: "Popular" },
  { name: "Canada", slug: "canada", code: "ca", airport: "YYZ", region: "Popular" },
  { name: "United Kingdom", slug: "united-kingdom", code: "gb", airport: "LHR", region: "Popular" },
  { name: "Ireland", slug: "ireland", code: "ie", airport: "DUB", region: "Popular" },
  { name: "Australia", slug: "australia", code: "au", airport: "SYD", region: "Popular" },
  { name: "New Zealand", slug: "new-zealand", code: "nz", airport: "AKL", region: "Popular" },
  { name: "Germany", slug: "germany", code: "de", airport: "BER", region: "Popular" },
  { name: "Singapore", slug: "singapore", code: "sg", airport: "SIN", region: "Popular" },
  { name: "United Arab Emirates", slug: "united-arab-emirates", code: "ae", airport: "DXB", region: "Popular" },
  { name: "France", slug: "france", code: "fr", airport: "CDG", region: "Europe" },
  { name: "Sweden", slug: "sweden", code: "se", airport: "ARN", region: "Europe" },
  { name: "Netherlands", slug: "netherlands", code: "nl", airport: "AMS", region: "Europe" },
  { name: "Austria", slug: "austria", code: "at", airport: "VIE", region: "Europe" },
  { name: "Denmark", slug: "denmark", code: "dk", airport: "CPH", region: "Europe" },
  { name: "Finland", slug: "finland", code: "fi", airport: "HEL", region: "Europe" },
  { name: "Italy", slug: "italy", code: "it", airport: "FCO", region: "Europe" },
  { name: "Hungary", slug: "hungary", code: "hu", airport: "BUD", region: "Europe" },
  { name: "Switzerland", slug: "switzerland", code: "ch", airport: "ZRH", region: "Europe" },
  { name: "Spain", slug: "spain", code: "es", airport: "MAD", region: "Europe" },
  { name: "Belgium", slug: "belgium", code: "be", airport: "BRU", region: "Europe" },
  { name: "Poland", slug: "poland", code: "pl", airport: "WAW", region: "Europe" },
  { name: "Czech Republic", slug: "czech-republic", code: "cz", airport: "PRG", region: "Europe" },
  { name: "Lithuania", slug: "lithuania", code: "lt", airport: "VNO", region: "Europe" },
  { name: "Latvia", slug: "latvia", code: "lv", airport: "RIX", region: "Europe" },
  { name: "Cyprus", slug: "cyprus", code: "cy", airport: "LCA", region: "Europe" },
  { name: "Bulgaria", slug: "bulgaria", code: "bg", airport: "SOF", region: "Europe" },
  { name: "Malta", slug: "malta", code: "mt", airport: "MLA", region: "Europe" },
  { name: "Georgia", slug: "georgia", code: "ge", airport: "TBS", region: "Europe" },
  { name: "South Korea", slug: "south-korea", code: "kr", airport: "ICN", region: "Asia and beyond" },
  { name: "Mauritius", slug: "mauritius", code: "mu", airport: "MRU", region: "Asia and beyond" },
];

export const studyRegions = ["Popular", "Europe", "Asia and beyond"] as const;

export function getStudyDestination(slug: string) {
  return studyDestinations.find((country) => country.slug === slug);
}
