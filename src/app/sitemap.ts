import type { MetadataRoute } from "next";
import { absoluteUrl, indexablePaths, sitemapFields } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return indexablePaths.map((path) => ({
    url: absoluteUrl(path),
    ...sitemapFields(path),
  }));
}
