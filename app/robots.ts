import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://eloreflorist.github.io/sitemap.xml",
    host: "https://eloreflorist.github.io",
  };
}
