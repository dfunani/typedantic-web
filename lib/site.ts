export const site = {
  name: "Typedantic",
  tagline: "Pydantic-style validation for TypeScript.",
  description:
    "Compile schemas once, validate untrusted data, and throw structured errors — with BaseModel, @Field, and a Pydantic-inspired core engine.",
  version: "1.0.0",
  license: "MIT",
  node: "20+",
  github: "https://github.com/dfunani/typedantic",
  githubShort: "dfunani/typedantic",
  docsRepo: "https://github.com/dfunani/typedantic/tree/main/documentation",
  npmOrg: "https://www.npmjs.com/org/typedantic",
  npmModel: "https://www.npmjs.com/package/@typedantic/model",
  npmCore: "https://www.npmjs.com/package/@typedantic/core",
  npmSettings: "https://www.npmjs.com/package/@typedantic/settings",
  author: "dfunani",
} as const;

export const packages = [
  {
    name: "@typedantic/model",
    role: "Public API",
    blurb:
      "BaseModel, RootModel, @Field, validators, serializers, TypeAdapter, annotated types, createModel.",
    href: "/reference/model",
  },
  {
    name: "@typedantic/core",
    role: "Engine",
    blurb: "BaseSchema IR, compile-once validators, SchemaValidator, SchemaSerializer, toJsonSchema.",
    href: "/reference/core",
  },
  {
    name: "@typedantic/settings",
    role: "Settings",
    blurb: "BaseSettings with env / .env, nested keys, and pluggable sources.",
    href: "/reference/settings",
  },
] as const;

export const installCommands = {
  bun: "bun add @typedantic/model reflect-metadata",
  npm: "npm install @typedantic/model reflect-metadata",
  pnpm: "pnpm add @typedantic/model reflect-metadata",
  yarn: "yarn add @typedantic/model reflect-metadata",
} as const;

export const installSettingsCommands = {
  bun: "bun add @typedantic/settings",
  npm: "npm install @typedantic/settings",
  pnpm: "pnpm add @typedantic/settings",
  yarn: "yarn add @typedantic/settings",
} as const;
