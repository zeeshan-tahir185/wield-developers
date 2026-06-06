import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { services } from "@/lib/services";
import { epcProjects } from "@/lib/epc";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/services",
    "/projects",
    "/epc-projects",
    "/transformers",
    "/gallery",
    "/contact",
  ];

  const staticPages = routes.map((route) => ({
    url: `${site.url}${route}`,
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  const servicePages = services.map((s) => ({
    url: `${site.url}/services/${s.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const epcPages = epcProjects.map((p) => ({
    url: `${site.url}/epc-projects/${p.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...servicePages, ...epcPages];
}
