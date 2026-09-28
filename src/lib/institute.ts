export const instituteName = "Sachman Overseas";
export const instituteAlsoKnownAs = "Sachman Institute";
export const instituteNames = [instituteName, instituteAlsoKnownAs] as const;

export const instituteAddress =
  "2nd Floor, above Dashmesh Bajaj, Dalhousie Road, near Simbal Chowk, Pathankot, Punjab 145001";

/* Dalhousie Road near Simbal Chowk — used to measure distance from a visitor. */
export const instituteLocation = {
  lat: 32.2641,
  lng: 75.6614,
  label: "Dalhousie Road, Pathankot",
} as const;

export const phone = { display: "+91 98884 54140", href: "tel:+919888454140" };

export const email = { display: "sachmaninstitute08@gmail.com", href: "mailto:sachmaninstitute08@gmail.com" };

export const openingHours = "Monday – Saturday · 9:00 AM – 6:00 PM";

export const socials = {
  instagram: "https://www.instagram.com/sachmaninstitute/",
  facebook: "https://www.facebook.com/sachmanpathankot",
  linkedin: "https://www.linkedin.com/in/meenakshi-sharma-370830318/",
};

export const googleReviewsUrl =
  "https://www.google.com/search?q=sachman+institute#lrd=0x391c7ff576be2beb:0x5e390e209b87c8b9,1";

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  instituteAddress,
)}&travelmode=driving`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(
  instituteAddress,
)}&z=16&output=embed`;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/destinations", label: "Countries" },
  // { href: "/eligibility", label: "Eligibility" },
  { href: "/process", label: "Process" },
  { href: "/contact", label: "Contact" },
];
