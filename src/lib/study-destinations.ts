export type StudyDestination = {
  name: string;
  slug: string;
  code: string;
  region: "Popular" | "Europe" | "Asia and beyond";
};

export const studyDestinations: StudyDestination[] = [
  { name: "United States", slug: "united-states", code: "us", region: "Popular" },
  { name: "Canada", slug: "canada", code: "ca", region: "Popular" },
  { name: "United Kingdom", slug: "united-kingdom", code: "gb", region: "Popular" },
  { name: "Ireland", slug: "ireland", code: "ie", region: "Popular" },
  { name: "Australia", slug: "australia", code: "au", region: "Popular" },
  { name: "New Zealand", slug: "new-zealand", code: "nz", region: "Popular" },
  { name: "Germany", slug: "germany", code: "de", region: "Popular" },
  { name: "Singapore", slug: "singapore", code: "sg", region: "Popular" },
  { name: "United Arab Emirates", slug: "united-arab-emirates", code: "ae", region: "Popular" },
  { name: "France", slug: "france", code: "fr", region: "Europe" },
  { name: "Sweden", slug: "sweden", code: "se", region: "Europe" },
  { name: "Netherlands", slug: "netherlands", code: "nl", region: "Europe" },
  { name: "Austria", slug: "austria", code: "at", region: "Europe" },
  { name: "Denmark", slug: "denmark", code: "dk", region: "Europe" },
  { name: "Finland", slug: "finland", code: "fi", region: "Europe" },
  { name: "Italy", slug: "italy", code: "it", region: "Europe" },
  { name: "Hungary", slug: "hungary", code: "hu", region: "Europe" },
  { name: "Switzerland", slug: "switzerland", code: "ch", region: "Europe" },
  { name: "Spain", slug: "spain", code: "es", region: "Europe" },
  { name: "Belgium", slug: "belgium", code: "be", region: "Europe" },
  { name: "Poland", slug: "poland", code: "pl", region: "Europe" },
  { name: "Czech Republic", slug: "czech-republic", code: "cz", region: "Europe" },
  { name: "Lithuania", slug: "lithuania", code: "lt", region: "Europe" },
  { name: "Latvia", slug: "latvia", code: "lv", region: "Europe" },
  { name: "Cyprus", slug: "cyprus", code: "cy", region: "Europe" },
  { name: "Bulgaria", slug: "bulgaria", code: "bg", region: "Europe" },
  { name: "Malta", slug: "malta", code: "mt", region: "Europe" },
  { name: "Turkey", slug: "turkey", code: "tr", region: "Europe" },
  { name: "Georgia", slug: "georgia", code: "ge", region: "Europe" },
  { name: "Russia", slug: "russia", code: "ru", region: "Europe" },
  { name: "Japan", slug: "japan", code: "jp", region: "Asia and beyond" },
  { name: "South Korea", slug: "south-korea", code: "kr", region: "Asia and beyond" },
  { name: "China", slug: "china", code: "cn", region: "Asia and beyond" },
  { name: "Hong Kong", slug: "hong-kong", code: "hk", region: "Asia and beyond" },
  { name: "Malaysia", slug: "malaysia", code: "my", region: "Asia and beyond" },
  { name: "Vietnam", slug: "vietnam", code: "vn", region: "Asia and beyond" },
  { name: "Indonesia", slug: "indonesia", code: "id", region: "Asia and beyond" },
  { name: "India", slug: "india", code: "in", region: "Asia and beyond" },
  { name: "Mauritius", slug: "mauritius", code: "mu", region: "Asia and beyond" },
  { name: "South Africa", slug: "south-africa", code: "za", region: "Asia and beyond" },
  { name: "Zimbabwe", slug: "zimbabwe", code: "zw", region: "Asia and beyond" },
];

export const studyRegions = ["Popular", "Europe", "Asia and beyond"] as const;

export function getStudyDestination(slug: string) {
  return studyDestinations.find((country) => country.slug === slug);
}
