import type { MetadataRoute } from "next";

const paths = [
  "/",
  "/docs",
  "/docs/install",
  "/docs/quickstart",
  "/docs/packages",
  "/docs/howto",
  "/docs/howto/json",
  "/docs/howto/validators",
  "/docs/howto/serializers",
  "/docs/howto/settings",
  "/docs/models",
  "/docs/fields",
  "/docs/validation",
  "/docs/schema",
  "/docs/annotated",
  "/docs/root-model",
  "/docs/settings",
  "/reference",
  "/reference/model",
  "/reference/core",
  "/reference/settings",
  "/examples",
  "/download",
  "/community",
  "/contribute",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((path) => ({
    url: `https://typedantic-web.vercel.app${path}`,
    lastModified: new Date(),
  }));
}
