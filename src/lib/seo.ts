import type { Metadata } from "next";
import { email, instituteAddress, instituteAlsoKnownAs, instituteLocation, instituteName, phone, socials } from "@/lib/institute";
import { faqs } from "@/lib/journey";
import { googleRating } from "@/lib/stories";
import { studyDestinations } from "@/lib/study-destinations";

export const SITE_NAME = instituteName;
export const PRODUCTION_SITE_URL = "https://thesachmanoverseas.in";

export function getSiteUrl() {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  if (explicit) return explicit;
  if (process.env.NODE_ENV !== "production") return "http://localhost:3000";
  return PRODUCTION_SITE_URL;
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
  "/destinations",
  "/process",
  "/contact",
  "/privacy",
  "/terms",
  ...studyDestinations.map((country) => `/destinations/${country.slug}`),
] as const;

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

export function faqJsonLd(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}
