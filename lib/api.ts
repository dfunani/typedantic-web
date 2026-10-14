export type ApiItem = {
  name: string;
  kind: "class" | "function" | "method" | "type" | "decorator";
  signature: string;
  summary: string;
};

export const modelApi: { group: string; items: ApiItem[] }[] = [
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
        name: "BaseModel.modelValidateJson",
        kind: "method",
        signature: "static modelValidateJson<T>(this: T, json: string): InstanceType<T>",
        summary: "Parse JSON then modelValidate.",
      },
      {
        name: "BaseModel.modelConstruct",
        kind: "method",
        signature: "static modelConstruct<T>(this: T, values: Record<string, unknown>): InstanceType<T>",
        summary: "Build an instance without validation. Use only for trusted values.",
      },
      {
        name: "BaseModel.modelJsonSchema",
        kind: "method",
        signature: "static modelJsonSchema(): JsonSchema",
        summary: "JSON Schema for the model (via toJsonSchema).",
      },
      {
        name: "modelDump",
        kind: "method",
        signature: "modelDump(options?: ModelDumpOptions): Record<string, unknown>",
        summary: "Serialize with dump options (mode, byAlias, excludeUnset, …).",
      },
      {
        name: "modelDumpJson",
        kind: "method",
        signature: "modelDumpJson(options?: ModelDumpOptions): string",
        summary: "JSON.stringify of modelDump({ mode: 'json' }).",
      },
      {
        name: "modelCopy",
        kind: "method",
        signature: "modelCopy(options?: ModelCopyOptions): this",
        summary: "Clone with optional field updates (re-validates).",
      },
      {
        name: "RootModel",
        kind: "class",
        signature: "class RootModel<T = unknown>",
        summary: "Non-object root value. Set static rootType; value lives on .root.",
      },
      {
        name: "createModel",
        kind: "function",
        signature: "createModel(name, fields, config?): typeof BaseModel",
        summary: "Dynamically create a BaseModel subclass from a field map.",
      },
      {
        name: "TypeAdapter",
        kind: "class",
        signature: "class TypeAdapter<T>",
        summary: "Validate / dump a schema, FieldInfo, annotated type, or model without a class.",
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
        summary: "Set extra, strict, frozen, populateByName, validateAssignment.",
      },
      {
        name: "fieldValidator / modelValidator",
        kind: "decorator",
        signature: "@fieldValidator(field, { mode }) / @modelValidator({ mode })",
        summary: "before | after | wrap | plain validators.",
      },
      {
        name: "fieldSerializer / modelSerializer / computedField",
        kind: "decorator",
        signature: "@fieldSerializer / @modelSerializer / @computedField",
        summary: "Customize dump output and computed properties.",
      },
    ],
  },
  {
    group: "Annotated types",
    items: [
      {
        name: "EmailStr / HttpUrl / UUID",
        kind: "type",
        signature: "EmailStr | HttpUrl | UUID",
        summary: "Use as @Field({ type: EmailStr }) — validated via function-after schemas.",
      },
      {
        name: "PositiveInt / NegativeInt / …",
        kind: "type",
        signature: "PositiveInt | NegativeInt | NonNegativeInt | NonPositiveInt",
        summary: "Constrained integers.",
      },
      {
        name: "SecretStr",
        kind: "class",
        signature: "class SecretStr",
        summary: "Wraps a string; dumps as ********** in JSON mode. getSecretValue() for the raw value.",
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
          "type, items, values, keys, enum, literal, union, discriminator, nullable, default, defaultFactory, alias, validationAlias, serializationAlias, exclude, minLength, maxLength, pattern, ge, gt, le, lt, multipleOf, strict, title, description.",
      },
      {
        name: "ConfigDict",
        kind: "type",
        signature: "interface ConfigDict",
        summary: "strict?, frozen?, extra?, populateByName?, validateAssignment?, title?",
      },
    ],
  },
];

/** @deprecated use modelApi */
export const typedanticApi = modelApi;

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
        summary: "JSON.parse then validateModel. Parse failures are json_invalid.",
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
    group: "Serializer / JSON Schema",
    items: [
      {
        name: "SchemaSerializer",
        kind: "class",
        signature: "class SchemaSerializer",
        summary: "Dump values according to a BaseSchema (aliases, exclude, mode).",
      },
      {
        name: "toJsonSchema",
        kind: "function",
        signature: "toJsonSchema(schema: BaseSchema, options?: JsonSchemaOptions): JsonSchema",
        summary: "JSON Schema with $defs / $ref for nested models.",
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
        summary: "errors detail list. toObject/toJson expose location/message and FastAPI loc/msg.",
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
        summary: "Load configuration via a pluggable source pipeline, then modelValidate.",
      },
      {
        name: "settingsValidate",
        kind: "method",
        signature:
          "static settingsValidate(env?, options?: { initData? }): InstanceType<T>",
        summary: "Merge sources (init → env → dotenv → …) and validate.",
      },
      {
        name: "settingsConfig",
        kind: "decorator",
        signature: "settingsConfig(config: SettingsConfigDict): ClassDecorator",
        summary: "envPrefix, envFile, envNestedDelimiter, caseSensitive, secretsDir, …",
      },
      {
        name: "settingsCustomiseSources",
        kind: "decorator",
        signature: "settingsCustomiseSources((init, env, dotenv) => SettingsSource[])",
        summary: "Reorder or inject sources (e.g. jsonFileSettingsSource).",
      },
      {
        name: "jsonFileSettingsSource / secretsDirectorySettingsSource",
        kind: "function",
        signature: "jsonFileSettingsSource(path) / secretsDirectorySettingsSource(dir)",
        summary: "Built-in extra sources.",
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
  { type: "function-*", accepts: "before / after / wrap / plain hooks (validators, annotated types)" },
  { type: "model-fields", accepts: "Named fields, aliases, extra ignore | allow | forbid" },
] as const;

export const fieldOptions = [
  { name: "type", detail: "Constructor, annotated type, or schema tag. Prefer explicit." },
  { name: "items", detail: "Array item constructor or schema type." },
  { name: "values / keys", detail: "Open-object value and key schemas. Do not use type: Object." },
  { name: "enum", detail: "Closed string set → enum schema." },
  { name: "literal", detail: "Exact value or list of values." },
  { name: "union + discriminator", detail: "Tagged unions. Unknown tags error; no fallthrough." },
  { name: "nullable", detail: "Wrap the field schema in nullable." },
  { name: "default / defaultFactory", detail: "Fill missing keys. Prefer defaultFactory for arrays." },
  { name: "alias / validationAlias / serializationAlias", detail: "Input and dump key aliases." },
  { name: "exclude", detail: "Omit from schema / dump." },
  { name: "minLength / maxLength / pattern", detail: "String (or array length when type is Array)." },
  { name: "ge / gt / le / lt / multipleOf", detail: "Numeric constraints. Messages interpolate the limit." },
  { name: "strict", detail: "Disable coercion for this field." },
  { name: "title / description", detail: "Metadata for JSON Schema." },
] as const;
