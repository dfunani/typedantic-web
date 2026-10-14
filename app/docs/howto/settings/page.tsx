import { CodeBlock } from "@/components/CodeBlock";
import { DocShell } from "@/components/DocShell";
import { examples } from "@/lib/examples";

export const metadata = { title: "Env settings" };

export default function HowtoSettingsPage() {
  return (
    <DocShell
      title="How to load settings from the environment"
      lead="BaseSettings merges pluggable sources, then runs the same modelValidate path as BaseModel."
    >
      <h2>Basic prefix + aliases</h2>
      <CodeBlock code={examples.settings} />
      <h2>Custom sources</h2>
      <CodeBlock code={examples.settingsSources} />
      <p>
        Default priority (highest first): <code>init</code> → <code>env</code> →{" "}
        <code>dotenv</code>. Optional <code>secretsDir</code> appends a secrets-directory source.
        Nested keys use <code>envNestedDelimiter</code> (default <code>__</code>).
      </p>
      <p>
        Full topic: <a href="/docs/settings">Settings</a>.
      </p>
    </DocShell>
  );
}
