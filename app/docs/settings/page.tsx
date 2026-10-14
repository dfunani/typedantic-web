import { CodeBlock } from "@/components/CodeBlock";
import { DocShell } from "@/components/DocShell";
import { examples } from "@/lib/examples";

export const metadata = { title: "Settings" };

export default function SettingsPage() {
  return (
    <DocShell
      title="Settings"
      lead="BaseSettings is a BaseModel that loads configuration through a pluggable source pipeline."
    >
      <CodeBlock code={examples.settings} />
      <table>
        <thead>
          <tr>
            <th>Option</th>
            <th>Default</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>envPrefix</code>
            </td>
            <td>empty</td>
            <td>
              Prepend to keys, e.g. <code>APP_</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>envFile</code>
            </td>
            <td>
              <code>.env</code>
            </td>
            <td>
              Path, or <code>false</code> to skip
            </td>
          </tr>
          <tr>
            <td>
              <code>envNestedDelimiter</code>
            </td>
            <td>
              <code>__</code>
            </td>
            <td>
              <code>DB__HOST</code> becomes nested <code>db.host</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>caseSensitive</code>
            </td>
            <td>
              <code>false</code>
            </td>
            <td>Match env keys ignoring case</td>
          </tr>
          <tr>
            <td>
              <code>secretsDir</code>
            </td>
            <td>unset</td>
            <td>Directory of secret files (lowest priority)</td>
          </tr>
        </tbody>
      </table>
      <h2>Custom sources</h2>
      <CodeBlock code={examples.settingsSources} />
      <p>
        Default priority (highest first): init → env → dotenv. Coercion uses field schema types so
        string fields keep values like <code>&quot;007&quot;</code>.
      </p>
      <p>
        Task recipe: <a href="/docs/howto/settings">How to load from the env</a>.
      </p>
    </DocShell>
  );
}
