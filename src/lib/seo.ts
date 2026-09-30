import type { Metadata } from "next";
import { email, instituteAddress, instituteAlsoKnownAs, instituteLocation, instituteName, phone, socials } from "@/lib/institute";
import { faqs } from "@/lib/journey";
import { ieltsTopics } from "@/lib/ielts";
import { programmes } from "@/lib/programmes";
import { googleRating } from "@/lib/stories";
import { studyDestinations } from "@/lib/study-destinations";

export const SITE_NAME = instituteName;
export const PRODUCTION_SITE_URL = "https://thesachmanoverseas.in";

/** Last editorial pass across public pages. Used as sitemap lastmod — not "now" on every crawl. */
export const SITE_CONTENT_UPDATED = new Date("2026-10-01T00:00:00+05:30");

export function getSiteUrl() {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  if (explicit) return explicit;
  if (process.env.NODE_ENV !== "production") return "http://localhost:3000";
  return PRODUCTION_SITE_URL;
}

export function absoluteUrl(path: string) {
  const base = getSiteUrl();
  if (!path || path === "/") return base;
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

export function pageMetadata({
  title,
  description,
  path,
  image,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} | ${SITE_NAME}`,
      description,
      url: path,
      type: "website",
      locale: "en_IN",
      siteName: SITE_NAME,
      ...(image ? { images: [{ url: image, alt: title }] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE_NAME}`,
      description,
    },
  };
}

export const indexablePaths = [
  "/",
  "/services",
  ...programmes.map((item) => `/services/${item.slug}`),
  ...ieltsTopics.map((topic) => `/services/ielts/${topic.slug}`),
  "/destinations",
  "/process",
  "/contact",
  "/privacy",
  "/terms",
  ...studyDestinations.map((country) => `/destinations/${country.slug}`),
] as const;

const HUB_IELTS_SLUGS = new Set([
  "what-is-ielts",
  "academic-vs-general",
  "exam-pattern",
  "how-ielts-is-conducted",
  "listening",
  "reading",
  "writing",
  "speaking",
  "band-score",
  "overall-band",
  "results",
  "fees",
  "preparation",
  "mock-tests",
  "faqs",
]);

export function sitemapFields(path: string): {
  lastModified: Date;
  changeFrequency: "weekly" | "monthly" | "yearly";
  priority: number;
} {
  const lastModified = SITE_CONTENT_UPDATED;

  if (path === "/") return { lastModified, changeFrequency: "weekly", priority: 1 };
  if (path === "/services/ielts") return { lastModified, changeFrequency: "weekly", priority: 0.9 };
  if (path === "/services" || path === "/destinations" || path === "/contact" || path === "/process") {
    return { lastModified, changeFrequency: "monthly", priority: 0.8 };
  }
  if (path.startsWith("/services/ielts/")) {
    const slug = path.slice("/services/ielts/".length);
    return {
      lastModified,
      changeFrequency: "monthly",
      priority: HUB_IELTS_SLUGS.has(slug) ? 0.7 : 0.55,
    };
  }
  if (path.startsWith("/services/")) return { lastModified, changeFrequency: "monthly", priority: 0.8 };
  if (path.startsWith("/destinations/")) return { lastModified, changeFrequency: "monthly", priority: 0.65 };
  if (path === "/privacy" || path === "/terms") return { lastModified, changeFrequency: "yearly", priority: 0.3 };
  return { lastModified, changeFrequency: "monthly", priority: 0.5 };
}

type JsonLd = Record<string, unknown>;

export function localBusinessJsonLd(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": ["EducationalOrganization", "LocalBusiness"],
    "@id": `${getSiteUrl()}/#institute`,
    name: SITE_NAME,
    alternateName: [instituteAlsoKnownAs, "Sachman Institute of IELTS", "Sachman Institute Pathankot"],
    url: getSiteUrl(),
    email: email.display,
    telephone: phone.href.replace("tel:", ""),
    image: `${getSiteUrl()}/images/logo.png`,
    logo: `${getSiteUrl()}/images/logo.png`,
    description:
      "Sachman Overseas, also known as Sachman Institute, offers IELTS, PTE, Spoken English, and study-visa guidance from Dalhousie Road, Pathankot.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "2nd Floor, above Dashmesh Bajaj, Dalhousie Road, near Simbal Chowk",
      addressLocality: "Pathankot",
      addressRegion: "Punjab",
      postalCode: "145001",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: instituteLocation.lat,
      longitude: instituteLocation.lng,
    },
    hasMap: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(instituteAddress)}`,
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "18:00",
    },
    areaServed: {
      "@type": "City",
      name: "Pathankot",
    },
    knowsAbout: ["IELTS", "PTE Academic", "Spoken English", "Study visas", "Pathankot"],
    makesOffer: programmes.map((item) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": item.slug === "study-visa" ? "Service" : "Course",
        name: item.title,
        url: absoluteUrl(`/services/${item.slug}`),
        provider: { "@id": `${getSiteUrl()}/#institute` },
      },
    })),
    sameAs: [socials.instagram, socials.facebook, socials.linkedin],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: googleRating.score,
      reviewCount: googleRating.count,
      bestRating: "5",
      worstRating: "1",
    },
  };
}

export function websiteJsonLd(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${getSiteUrl()}/#website`,
    name: SITE_NAME,
    alternateName: instituteAlsoKnownAs,
    url: getSiteUrl(),
    inLanguage: "en-IN",
    publisher: { "@id": `${getSiteUrl()}/#institute` },
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${getSiteUrl()}${item.path === "/" ? "" : item.path}`,
    })),
  };
}

export function faqJsonLd(items: { q: string; a: string }[] = faqs): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}

export function courseJsonLd(input: {
  name: string;
  description: string;
  path: string;
  kind?: "course" | "service";
  about?: string;
}): JsonLd {
  const type = input.kind === "service" ? "Service" : "Course";
  return {
    "@context": "https://schema.org",
    "@type": type,
    "@id": `${absoluteUrl(input.path)}#guide`,
    name: input.name,
    description: input.description,
    url: absoluteUrl(input.path),
    inLanguage: "en-IN",
    provider: { "@id": `${getSiteUrl()}/#institute` },
    ...(input.about ? { about: { "@type": "Thing", name: input.about } } : {}),
  };
}

export function learningResourceJsonLd(input: {
  title: string;
  seoTitle: string;
  description: string;
  answer: string;
  path: string;
}): JsonLd {
  const url = absoluteUrl(input.path);
  return {
    "@context": "https://schema.org",
    "@type": ["WebPage", "LearningResource"],
    "@id": `${url}#guide`,
    url,
    name: input.seoTitle,
    headline: input.title,
    description: input.description,
    abstract: input.answer,
    inLanguage: "en-IN",
    learningResourceType: "Guide",
    isPartOf: { "@id": `${absoluteUrl("/services/ielts")}#guide` },
    about: { "@type": "Thing", name: "IELTS" },
    author: { "@id": `${getSiteUrl()}/#institute` },
    publisher: { "@id": `${getSiteUrl()}/#institute` },
    dateModified: SITE_CONTENT_UPDATED.toISOString().slice(0, 10),
  };
}

export function itemListJsonLd(input: {
  name: string;
  path: string;
  items: { name: string; path: string }[];
}): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: input.name,
    url: absoluteUrl(input.path),
    numberOfItems: input.items.length,
    itemListElement: input.items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      url: absoluteUrl(item.path),
    })),
  };
}

export function contactPageJsonLd(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Sachman Overseas",
    url: absoluteUrl("/contact"),
    inLanguage: "en-IN",
    mainEntity: { "@id": `${getSiteUrl()}/#institute` },
  };
}
