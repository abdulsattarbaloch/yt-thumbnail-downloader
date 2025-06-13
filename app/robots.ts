import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://www.thumbnail-downloader.xyz/sitemap.xml",
    host: "https://www.thumbnail-downloader.xyz",
  };
}
