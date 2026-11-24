import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/metadata";
export default function sitemap(): MetadataRoute.Sitemap {
  if (!SITE_URL) return [];
  return ["", "/about", "/contact"].map((path) => ({
    url: SITE_URL + path, changeFrequency: "monthly", priority: path === "" ? 1 : 0.8,
  }));
}
