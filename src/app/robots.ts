import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/seo";

const AI_CRAWLERS = [
  "GPTBot",
  "ChatGPT-User",
  "OAI-SearchBot",
  "ClaudeBot",
  "PerplexityBot",
  "Google-Extended",
  "GoogleOther",
  "Applebot",
  "Applebot-Extended",
  "Amazonbot",
];

export default function robots(): MetadataRoute.Robots {
  const base = getSiteUrl();

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/eligibility", "/api/"],
      },
      ...AI_CRAWLERS.map((userAgent) => ({
        userAgent,
        allow: "/",
        disallow: ["/eligibility", "/api/"],
      })),
    ],
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}
