import type { MetadataRoute } from "next";

const paths = [
  "/",
  "/docs",
  "/docs/install",
  "/docs/quickstart",
  "/docs/models",
  "/docs/fields",
  "/docs/validation",
  "/docs/schema",
  "/docs/settings",
  "/docs/packages",
  "/reference",
  "/reference/typedantic",
  "/reference/core",
  "/reference/settings",
  "/examples",
  "/download",
  "/contribute",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((path) => ({
    url: `https://typedantic.dev${path}`,
    lastModified: new Date(),
  }));
}
