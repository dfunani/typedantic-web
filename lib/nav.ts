export const mainNav = [
  { href: "/docs", label: "Documentation" },
  { href: "/docs/howto", label: "How-to" },
  { href: "/reference", label: "API" },
  { href: "/examples", label: "Examples" },
  { href: "/download", label: "Download" },
  { href: "/community", label: "Community" },
] as const;

/** Django-style docs tree: getting started → how-to → topics → reference links. */
export const docNav = [
  {
    title: "Getting started",
    items: [
      { href: "/docs", label: "Overview" },
      { href: "/docs/install", label: "Installation" },
      { href: "/docs/quickstart", label: "Quickstart" },
      { href: "/docs/packages", label: "Packages" },
    ],
  },
  {
    title: "How-to guides",
    items: [
      { href: "/docs/howto", label: "How-to index" },
      { href: "/docs/howto/json", label: "Validate JSON" },
      { href: "/docs/howto/validators", label: "Custom validators" },
      { href: "/docs/howto/serializers", label: "Serializers & dump" },
      { href: "/docs/howto/settings", label: "Load from the env" },
    ],
  },
  {
    title: "Topics",
    items: [
      { href: "/docs/models", label: "Models" },
      { href: "/docs/fields", label: "Fields" },
      { href: "/docs/validation", label: "Validation errors" },
      { href: "/docs/schema", label: "CoreSchema IR" },
      { href: "/docs/annotated", label: "Annotated types" },
      { href: "/docs/root-model", label: "RootModel" },
      { href: "/docs/settings", label: "Settings" },
    ],
  },
] as const;

export const referenceNav = [
  { href: "/reference", label: "Overview" },
  { href: "/reference/model", label: "@typedantic/model" },
  { href: "/reference/core", label: "@typedantic/core" },
  { href: "/reference/settings", label: "@typedantic/settings" },
] as const;

export const footerNav = [
  {
    title: "Learn",
    items: [
      { href: "/docs", label: "Documentation" },
      { href: "/docs/howto", label: "How-to guides" },
      { href: "/docs/quickstart", label: "Quickstart" },
      { href: "/examples", label: "Examples" },
    ],
  },
  {
    title: "Reference",
    items: [
      { href: "/reference/model", label: "@typedantic/model" },
      { href: "/reference/core", label: "@typedantic/core" },
      { href: "/reference/settings", label: "@typedantic/settings" },
    ],
  },
  {
    title: "Project",
    items: [
      { href: "/download", label: "Download" },
      { href: "/community", label: "Community" },
      { href: "/contribute", label: "Contribute" },
      { href: "https://github.com/dfunani/typedantic", label: "GitHub", external: true },
    ],
  },
] as const;
