export type ApiItem = {
  name: string;
  kind: "class" | "function" | "method" | "type" | "decorator";
  signature: string;
  summary: string;
};

export const typedanticApi: { group: string; items: ApiItem[] }[] = [
  {
    group: "Models",
    items: [
      {
        name: "BaseModel",
        kind: "class",
        signature: "class BaseModel",
        summary: "Validated instance. Subclass, decorate fields, then call modelValidate.",
      },
      {
        name: "BaseModel.modelValidate",
        kind: "method",
        signature: "static modelValidate<T>(this: T, data: unknown): InstanceType<T>",
        summary: "Compile (once) and run the model schema. Throws ValidationError on failure.",
      },
      {
        name: "BaseModel.modelConstruct",
        kind: "method",
        signature: "static modelConstruct<T>(this: T, values: Record<string, unknown>): InstanceType<T>",
        summary: "Build an instance without validation. Use only for trusted values.",
      },
      {
        name: "modelDump",
        kind: "method",
        signature: "modelDump(): Record<string, unknown>",
        summary: "Plain object of own enumerable fields.",
      },
      {
        name: "modelDumpJson",
        kind: "method",
        signature: "modelDumpJson(): string",
        summary: "JSON.stringify of modelDump().",
      },
    ],
  },
  {
    group: "Decorators",
    items: [
      {
        name: "Field",
        kind: "decorator",
        signature: "Field<T>(options?: FieldInfo<T>): PropertyDecorator",
        summary: "Register a field. Pass type explicitly — Vitest often omits design:type.",
      },
      {
        name: "modelConfig",
        kind: "decorator",
        signature: "modelConfig(config: ConfigDict): ClassDecorator",
        summary: "Set extra, strict, frozen, and validateAssignment on the model class.",
      },
      {
        name: "getModelConfig",
        kind: "function",
        signature: "getModelConfig(ctor: Function): ConfigDict",
        summary: "Read the config stored on a model constructor.",
      },
      {
        name: "getModelFields",
        kind: "function",
        signature: "getModelFields(ctor: Function): Record<string, ModelFieldMeta>",
        summary: "Finalize registered fields into CoreSchema-backed metadata.",
      },
    ],
  },
  {
    group: "Types",
    items: [
      {
        name: "FieldInfo",
        kind: "type",
        signature: "interface FieldInfo<T = unknown>",
        summary:
          "type, items, values, keys, enum, literal, union, discriminator, nullable, default, defaultFactory, alias, minLength, maxLength, pattern, ge, gt, le, lt, multipleOf, strict.",
      },
      {
        name: "ConfigDict",
        kind: "type",
        signature: "interface ConfigDict",
        summary: "strict?, frozen?, extra?: 'ignore' | 'allow' | 'forbid', validateAssignment?",
      },
    ],
  },
];

export const coreApi: { group: string; items: ApiItem[] }[] = [
  {
    group: "Validator",
    items: [
      {
        name: "SchemaValidator",
        kind: "class",
        signature: "class SchemaValidator",
        summary: "Compile a BaseSchema once. Each validateModel call uses a fresh error list.",
      },
      {
        name: "validateModel",
        kind: "method",
        signature: "validateModel(input: unknown, config?: ValidationConfigSchema): unknown",
        summary: "Run the compiled validator. Throws ValidationError if any errors were pushed.",
      },
      {
        name: "validateJson",
        kind: "method",
        signature: "validateJson(json: string, config?: ValidationConfigSchema): unknown",
        summary: "JSON.parse then validateModel. Parse failures are json_invalid, not swallowed ValidationError.",
      },
      {
        name: "compileValidator",
        kind: "function",
        signature: "compileValidator(schema: BaseSchema): ValidatorFunction",
        summary: "Switch on schema.type and return a compile-once function.",
      },
    ],
  },
  {
    group: "Errors",
    items: [
      {
        name: "ValidationError",
        kind: "class",
        signature: "class ValidationError extends Error",
        summary: "errors: ValidationErrorDetailSchema[]. Message joins location + message.",
      },
      {
        name: "toJson",
        kind: "method",
        signature: "toJson(): string",
        summary: 'FastAPI-shaped { detail: [...] } as JSON.',
      },
      {
        name: "toObject",
        kind: "method",
        signature: "toObject(): { detail: ValidationErrorDetailSchema[] }",
        summary: "Same payload without stringifying.",
      },
    ],
  },
  {
    group: "Schema nodes",
    items: [
      {
        name: "BaseSchema",
        kind: "type",
        signature: "type BaseSchema = IntSchema | NumbersSchema | …",
        summary:
          "int, number, string, boolean, literal, enum, array, object, union, nullable, optional, default, default-factory, function-*, date, any, never, model-fields.",
      },
    ],
  },
];

export const settingsApi: { group: string; items: ApiItem[] }[] = [
  {
    group: "Settings",
    items: [
      {
        name: "BaseSettings",
        kind: "class",
        signature: "abstract class BaseSettings extends BaseModel",
        summary: "Load process.env and an optional .env file onto a Typedantic model.",
      },
      {
        name: "settingsValidate",
        kind: "method",
        signature: "static settingsValidate(env?: Record<string, string | undefined>): InstanceType<typeof BaseSettings>",
        summary: "Merge env file + process.env, flatten nested keys, then modelValidate.",
      },
      {
        name: "settingsConfig",
        kind: "decorator",
        signature: "settingsConfig(config: SettingsConfigDict): ClassDecorator",
        summary: "Alias for modelConfig with settings keys (envPrefix, envFile, envNestedDelimiter, caseSensitive).",
      },
      {
        name: "SettingsConfigDict",
        kind: "type",
        signature: "interface SettingsConfigDict extends ConfigDict",
        summary: "envPrefix, envFile, envNestedDelimiter, caseSensitive, populateByName.",
      },
    ],
  },
];

export const schemaNodes = [
  { type: "int", accepts: "Number.isInteger — Field({ type: Number })" },
  { type: "number", accepts: "Any finite JS number — Field({ type: 'number' })" },
  { type: "string", accepts: "Strings, with minLength / maxLength / pattern" },
  { type: "boolean", accepts: "Booleans, with non-strict coercion" },
  { type: "array", accepts: "JS Array — Field({ type: Array, items })" },
  { type: "object", accepts: "Plain key/value map — Field({ type: 'object', values, keys })" },
  { type: "union", accepts: "Tagged (discriminator, no fallthrough) or try-all" },
  { type: "literal / enum", accepts: "Exact values or a closed string set" },
  { type: "date", accepts: "Date, ISO string, or epoch" },
  { type: "nullable / optional / default", accepts: "Presence wrappers; defaults are cloned" },
  { type: "model-fields", accepts: "Named fields, aliases, extra ignore | allow | forbid" },
] as const;

export const fieldOptions = [
  { name: "type", detail: "Constructor or schema tag. Prefer explicit — design:type is incomplete under Vitest." },
  { name: "items", detail: "Array item constructor or schema type." },
  { name: "values / keys", detail: "Open-object value and key schemas. Do not use type: Object." },
  { name: "enum", detail: "Closed string set → enum schema." },
  { name: "literal", detail: "Exact value or list of values." },
  { name: "union + discriminator", detail: "Tagged unions. Unknown tags error; no fallthrough." },
  { name: "nullable", detail: "Wrap the field schema in nullable." },
  { name: "default / defaultFactory", detail: "Fill missing keys. Prefer defaultFactory for arrays." },
  { name: "alias", detail: "Input key used during validation." },
  { name: "minLength / maxLength / pattern", detail: "String (or array length when type is Array)." },
  { name: "ge / gt / le / lt / multipleOf", detail: "Numeric constraints. Messages interpolate the limit, not the input." },
  { name: "strict", detail: "Disable coercion for this field." },
] as const;
