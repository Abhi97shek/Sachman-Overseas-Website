export type PartnerUniversity = {
  name: string;
  city: string;
  country: string;
};

export const partnerUniversities: PartnerUniversity[] = [
  { name: "Conestoga College", city: "Kitchener", country: "Canada" },
  { name: "Seneca Polytechnic", city: "Toronto", country: "Canada" },
  { name: "Lambton College", city: "Sarnia", country: "Canada" },
  { name: "Cape Breton University", city: "Sydney", country: "Canada" },
  { name: "University of Windsor", city: "Windsor", country: "Canada" },
  { name: "University of Hertfordshire", city: "Hatfield", country: "United Kingdom" },
  { name: "Coventry University", city: "Coventry", country: "United Kingdom" },
  { name: "University of East London", city: "London", country: "United Kingdom" },
  { name: "Anglia Ruskin University", city: "Cambridge", country: "United Kingdom" },
  { name: "University of Greenwich", city: "London", country: "United Kingdom" },
  { name: "Deakin University", city: "Melbourne", country: "Australia" },
  { name: "Griffith University", city: "Brisbane", country: "Australia" },
  { name: "Curtin University", city: "Perth", country: "Australia" },
  { name: "University of Wollongong", city: "Wollongong", country: "Australia" },
  { name: "La Trobe University", city: "Melbourne", country: "Australia" },
  { name: "SRH Berlin", city: "Berlin", country: "Germany" },
  { name: "IU International University", city: "Berlin", country: "Germany" },
  { name: "University of Europe for Applied Sciences", city: "Berlin", country: "Germany" },
  { name: "GISMA Business School", city: "Berlin", country: "Germany" },
  { name: "Berlin School of Business and Innovation", city: "Berlin", country: "Germany" },
  { name: "Auckland University of Technology", city: "Auckland", country: "New Zealand" },
  { name: "Massey University", city: "Palmerston North", country: "New Zealand" },
  { name: "University of Waikato", city: "Hamilton", country: "New Zealand" },
  { name: "Lincoln University", city: "Lincoln", country: "New Zealand" },
  { name: "Unitec", city: "Auckland", country: "New Zealand" },
  { name: "Arizona State University", city: "Tempe", country: "United States" },
  { name: "University of Cincinnati", city: "Cincinnati", country: "United States" },
  { name: "Wichita State University", city: "Wichita", country: "United States" },
  { name: "Monroe College", city: "New York", country: "United States" },
  { name: "California State University, East Bay", city: "Hayward", country: "United States" },
];

export const universityCountries = [
  "Canada",
  "United Kingdom",
  "Australia",
  "Germany",
  "New Zealand",
  "United States",
] as const;

export const countryFlags: Record<string, string> = {
  Canada: "/images/flags/ca.svg",
  "United Kingdom": "/images/flags/gb.svg",
  Australia: "/images/flags/au.svg",
  Germany: "/images/flags/de.svg",
  "New Zealand": "/images/flags/nz.svg",
  "United States": "/images/flags/us.svg",
};
