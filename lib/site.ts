export const site = {
  name: "Typedantic",
  tagline: "Pydantic-style validation for TypeScript.",
  description:
    "Compile schemas once, validate untrusted data, and throw structured errors — with BaseModel, @Field, and a Pydantic-inspired core engine.",
  version: "0.1.0",
  license: "MIT",
  node: "20+",
  github: "https://github.com/dfunani/typedantic",
  githubShort: "dfunani/typedantic",
  npm: "https://www.npmjs.com/package/typedantic",
  author: "dfunani",
} as const;

export const packages = [
  {
    name: "typedantic",
    role: "Public API",
    blurb: "BaseModel, @Field, modelConfig. The decorator layer you write against.",
    href: "/reference/typedantic",
  },
  {
    name: "@typedantic/core",
    role: "Engine",
    blurb: "CoreSchema IR, compile-once validators, SchemaValidator, ValidationError.",
    href: "/reference/core",
  },
  {
    name: "typedantic-settings",
    role: "Settings",
    blurb: "BaseSettings: load, prefix, and nest environment variables onto a model.",
    href: "/reference/settings",
  },
] as const;

export const installCommands = {
  bun: "bun add typedantic reflect-metadata",
  npm: "npm install typedantic reflect-metadata",
  pnpm: "pnpm add typedantic reflect-metadata",
  yarn: "yarn add typedantic reflect-metadata",
} as const;
