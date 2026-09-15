export const examples = {
  user: `import "reflect-metadata";
import { BaseModel, Field, modelConfig } from "typedantic";

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

  collections: `class Order extends BaseModel {
  @Field({ type: Array, items: String, minLength: 1 })
  tags!: string[];

  @Field({ type: "object", values: Number, keys: String })
  scores!: Record<string, number>;
}

Order.modelValidate({
  tags: ["rush", "eu"],
  scores: { qa: 10 },
});`,

  unions: `class Cat extends BaseModel {
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

  numbers: `class Rating extends BaseModel {
  @Field({ type: Number, ge: 0 })          // int
  stars!: number;

  @Field({ type: "number", ge: 0, multipleOf: 0.5 })
  score!: number;
}

Rating.modelValidate({ stars: 5, score: 4.5 });
// stars: 1.5 fails — Number maps to int
// score: 1.25 fails — not a multiple of 0.5`,

  settings: `import { Field } from "typedantic";
import { BaseSettings, settingsConfig } from "typedantic-settings";

@settingsConfig({ envPrefix: "APP_", extra: "forbid" })
class AppSettings extends BaseSettings {
  @Field({ type: String, minLength: 1 })
  host!: string;

  @Field({ type: Number, default: 8080 })
  port!: number;
}

const settings = AppSettings.settingsValidate();
// APP_HOST=0.0.0.0  APP_PORT=3000`,

  core: `import { SchemaValidator } from "@typedantic/core";

const v = new SchemaValidator({
  type: "array",
  itemsSchema: { type: "string", minLength: 1 },
  minLength: 1,
});

v.validateModel(["ok"]);
v.validateJson('["ok"]');`,

  error: `try {
  User.modelValidate({ name: "", age: -1, active: true });
} catch (err) {
  if (err instanceof ValidationError) {
    console.log(err.toObject());
    // {
    //   detail: [
    //     { type: "string_too_short", location: ["name"], message: "… at least 1 …" },
    //     { type: "int_greater_than_equal", location: ["age"], message: "… >= 0" }
    //   ]
    // }
  }
}`,
} as const;
