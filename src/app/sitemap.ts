import type { MetadataRoute } from "next";

const base = "https://phokentish.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "",
    "/menu",
    "/locations",
    "/book",
    "/faq",
    "/food-safety",
    "/privacy",
    "/terms",
    "/cookies",
  ];

  const lastModified = "2026-10-10";

  return paths.map((path) => ({
    url: `${base}${path}`,
    lastModified,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path === "/book" || path === "/menu" ? 0.9 : 0.7,
  }));
}
