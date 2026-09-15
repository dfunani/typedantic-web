import { CodeBlock } from "@/components/CodeBlock";
import { DocShell } from "@/components/DocShell";
import { examples } from "@/lib/examples";

export const metadata = { title: "Settings" };

export default function SettingsPage() {
  return (
    <DocShell
      title="Settings"
      lead="BaseSettings is a BaseModel that reads the environment."
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
        </tbody>
      </table>
      <p>
        Process environment wins over the file. Values are parsed as JSON when they look like JSON,
        otherwise left as strings and then validated by the field schema.
      </p>
    </DocShell>
  );
}
