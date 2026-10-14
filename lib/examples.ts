export const examples = {
  user: `import "reflect-metadata";
import { BaseModel, Field, modelConfig } from "@typedantic/model";

@modelConfig({ extra: "forbid" })
class User extends BaseModel {
  @Field({ type: String, minLength: 1 })
  name!: string;

  @Field({ type: Number, ge: 0 })
  age!: number;

  @Field({ type: Boolean })
  active!: boolean;
}

const user = User.modelValidate({
  name: "Ada",
  age: 36,
  active: true,
});

console.log(user.modelDump());
// { name: "Ada", age: 36, active: true }`,

  collections: `import { BaseModel, Field } from "@typedantic/model";

class Order extends BaseModel {
  @Field({ type: Array, items: String, minLength: 1 })
  tags!: string[];

  @Field({ type: "object", values: Number, keys: String })
  scores!: Record<string, number>;
}

Order.modelValidate({
  tags: ["rush", "eu"],
  scores: { qa: 10 },
});`,

  unions: `import { BaseModel, Field } from "@typedantic/model";

class Cat extends BaseModel {
  @Field({ literal: "cat" })
  kind!: "cat";
  @Field({ type: Boolean })
  indoor!: boolean;
}

class Dog extends BaseModel {
  @Field({ literal: "dog" })
  kind!: "dog";
  @Field({ type: Boolean })
  barks!: boolean;
}

class Shelter extends BaseModel {
  @Field({ union: [Cat, Dog], discriminator: "kind" })
  pet!: Cat | Dog;
}

Shelter.modelValidate({ pet: { kind: "dog", barks: true } });
// unknown tag "bird" → ValidationError`,

  numbers: `import { BaseModel, Field } from "@typedantic/model";

class Rating extends BaseModel {
  @Field({ type: Number, ge: 0 })          // int
  stars!: number;

  @Field({ type: "number", ge: 0, multipleOf: 0.5 })
  score!: number;
}

Rating.modelValidate({ stars: 5, score: 4.5 });
// stars: 1.5 fails — Number maps to int
// score: 1.25 fails — not a multiple of 0.5`,

  settings: `import { Field } from "@typedantic/model";
import { BaseSettings, settingsConfig } from "@typedantic/settings";

@settingsConfig({ envPrefix: "APP_", envFile: false, extra: "forbid" })
class AppSettings extends BaseSettings {
  @Field({ type: String, minLength: 1, alias: "HOST" })
  host!: string;

  @Field({ type: Number, default: 8080, alias: "PORT" })
  port!: number;
}

const settings = AppSettings.settingsValidate({
  APP_HOST: "0.0.0.0",
  APP_PORT: "3000",
});`,

  validators: `import { BaseModel, Field, fieldValidator, modelValidator } from "@typedantic/model";

class Product extends BaseModel {
  @Field({ type: String })
  sku!: string;

  @Field({ type: Number, ge: 0 })
  price!: number;

  @fieldValidator("sku", { mode: "after" })
  static upperSku(value: unknown) {
    return typeof value === "string" ? value.toUpperCase() : value;
  }

  @modelValidator({ mode: "after" })
  static check(data: unknown) {
    const d = data as { price?: number };
    if (d.price !== undefined && d.price > 1_000_000) {
      throw new Error("price too high");
    }
    return data;
  }
}`,

  serializers: `import {
  BaseModel,
  Field,
  fieldSerializer,
  computedField,
} from "@typedantic/model";

class Item extends BaseModel {
  @Field({ type: String })
  name!: string;

  @Field({ type: Number })
  qty!: number;

  @computedField()
  get label(): string {
    return \`\${this.name}×\${this.qty}\`;
  }

  @fieldSerializer("name")
  static upper(value: unknown) {
    return typeof value === "string" ? value.toUpperCase() : value;
  }
}

const item = Item.modelValidate({ name: "tea", qty: 2 });
item.modelDump();     // { name: "TEA", qty: 2, label: "tea×2" }
item.modelDumpJson(); // JSON mode`,

  annotated: `import { BaseModel, Field, EmailStr, PositiveInt, SecretStr } from "@typedantic/model";

class Account extends BaseModel {
  @Field({ type: EmailStr })
  email!: string;

  @Field({ type: PositiveInt })
  seats!: number;

  @Field({ type: SecretStr })
  apiKey!: SecretStr;
}

const a = Account.modelValidate({
  email: "ada@example.com",
  seats: 3,
  apiKey: "sk-live-…",
});
a.apiKey.getSecretValue();
a.modelDumpJson(); // apiKey → "**********"`,

  rootModel: `import { RootModel } from "@typedantic/model";
import type { FieldInfo } from "@typedantic/model";

class IntList extends RootModel<number[]> {
  static rootType: FieldInfo = { type: Array, items: Number };
  root!: number[];
}

const list = IntList.modelValidate([1, 2, 3]);
list.modelDump(); // [1, 2, 3]`,

  createModel: `import { createModel } from "@typedantic/model";

const User = createModel(
  "User",
  {
    name: { type: String, minLength: 1 },
    age: { type: Number, ge: 0 },
  },
  { extra: "forbid" },
);

User.modelValidate({ name: "Ada", age: 36 });`,

  typeAdapter: `import { TypeAdapter, EmailStr } from "@typedantic/model";

const emails = new TypeAdapter(EmailStr);
emails.validate("ada@example.com");
emails.validateJson('"ada@example.com"');`,

  core: `import { SchemaValidator, toJsonSchema } from "@typedantic/core";

const schema = {
  type: "array" as const,
  itemsSchema: { type: "string" as const, minLength: 1 },
  minLength: 1,
};

const v = new SchemaValidator(schema);
v.validateModel(["ok"]);
v.validateJson('["ok"]');
toJsonSchema(schema, { title: "Tags" });`,

  error: `import { ValidationError } from "@typedantic/model";

try {
  User.modelValidate({ name: "", age: -1, active: true });
} catch (err) {
  if (err instanceof ValidationError) {
    console.log(err.toObject());
    // detail entries include location/message and FastAPI loc/msg aliases
  }
}`,

  settingsSources: `import { Field } from "@typedantic/model";
import {
  BaseSettings,
  settingsConfig,
  settingsCustomiseSources,
  jsonFileSettingsSource,
} from "@typedantic/settings";

@settingsCustomiseSources((init, env, dotenv) => [
  init,
  env,
  dotenv,
  jsonFileSettingsSource("settings.json"),
])
@settingsConfig({ envPrefix: "APP_", envFile: false })
class AppSettings extends BaseSettings {
  @Field({ type: String, alias: "HOST" })
  host!: string;
}

AppSettings.settingsValidate(process.env, {
  initData: { host: "override" },
});`,
} as const;
