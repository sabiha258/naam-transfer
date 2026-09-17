import type { MetadataRoute } from "next";
import { services, areas } from "@/lib/nav";
import { posts } from "@/lib/blog";
import { professionalServiceDetails } from "@/lib/professionalServices";

const BASE_URL = "https://www.naamtransfer.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/services",
    "/professional-services",
    "/areas",
    "/blog",
    "/faqs",
    "/contact",
    "/book-service",
    "/legal/privacy",
    "/legal/terms",
  ];

  const dynamicRoutes = [
    ...services.map((s) => s.href),
    ...areas.map((a) => a.href),
    ...posts.map((p) => `/blog/${p.slug}`),
    ...Object.keys(professionalServiceDetails).map((slug) => `/professional-services/${slug}`),
  ];

  return [...staticRoutes, ...dynamicRoutes].map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
  }));
}
