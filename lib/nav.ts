export const mainNav = [
  { href: "/docs", label: "Docs" },
  { href: "/reference", label: "API" },
  { href: "/examples", label: "Examples" },
  { href: "/download", label: "Download" },
  { href: "/contribute", label: "Contribute" },
] as const;

export const docNav = [
  {
    title: "Start",
    items: [
      { href: "/docs", label: "Overview" },
      { href: "/docs/install", label: "Installation" },
      { href: "/docs/quickstart", label: "Quickstart" },
    ],
  },
  {
    title: "Guides",
    items: [
      { href: "/docs/models", label: "Models" },
      { href: "/docs/fields", label: "Fields" },
      { href: "/docs/validation", label: "Validation" },
      { href: "/docs/schema", label: "CoreSchema" },
      { href: "/docs/settings", label: "Settings" },
      { href: "/docs/packages", label: "Packages" },
    ],
  },
] as const;

export const referenceNav = [
  { href: "/reference", label: "Overview" },
  { href: "/reference/typedantic", label: "typedantic" },
  { href: "/reference/core", label: "@typedantic/core" },
  { href: "/reference/settings", label: "typedantic-settings" },
] as const;

export const footerNav = [
  {
    title: "Learn",
    items: [
      { href: "/docs", label: "Documentation" },
      { href: "/docs/quickstart", label: "Quickstart" },
      { href: "/examples", label: "Examples" },
    ],
  },
  {
    title: "Reference",
    items: [
      { href: "/reference/typedantic", label: "typedantic" },
      { href: "/reference/core", label: "core" },
      { href: "/reference/settings", label: "settings" },
    ],
  },
  {
    title: "Project",
    items: [
      { href: "/download", label: "Download" },
      { href: "/contribute", label: "Contribute" },
      { href: "https://github.com/dfunani/typedantic", label: "GitHub", external: true },
    ],
  },
] as const;
