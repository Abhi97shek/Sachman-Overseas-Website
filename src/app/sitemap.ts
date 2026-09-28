import type { MetadataRoute } from "next";
import { getSiteUrl, indexablePaths } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  const now = new Date();

  return indexablePaths.map((path) => {
    const url = path === "/" ? base : `${base}${path}`;
    const isHome = path === "/";
    const isDestination = path.startsWith("/destinations/");
    const isLegal = path === "/privacy" || path === "/terms";

    return {
      url,
      lastModified: now,
      changeFrequency: isHome ? "weekly" : isDestination ? "monthly" : isLegal ? "yearly" : "monthly",
      priority: isHome ? 1 : isDestination ? 0.7 : isLegal ? 0.3 : 0.8,
    };
  });
}
