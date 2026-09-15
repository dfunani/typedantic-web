import { CodeBlock } from "@/components/CodeBlock";
import { DocShell } from "@/components/DocShell";
import { fieldOptions } from "@/lib/api";
import { examples } from "@/lib/examples";

export const metadata = { title: "Fields" };

export default function FieldsPage() {
  return (
    <DocShell
      title="Fields"
      lead="@Field is how a TypeScript property becomes a CoreSchema node."
    >
      <h2>Always pass type</h2>
      <p>
        <code>design:type</code> cannot tell int from number, loses array item types, and is often
        missing under Vitest. Write <code>{`@Field({ type: String })`}</code> even if the property is
        already typed.
      </p>
      <h2>int vs number</h2>
      <CodeBlock code={examples.numbers} />
      <p>
        JavaScript has one numeric type: IEEE-754 <code>number</code>. There is no{" "}
        <code>float</code>. <code>Number</code> maps to <code>int</code> (Pydantic-like). Use{" "}
        <code>type: &apos;number&apos;</code> for fractions.
      </p>
      <h2>array vs object</h2>
      <CodeBlock code={examples.collections} />
      <p>
        <code>type: Array</code> is accepted because metadata reports <code>Array</code>. Prefer{" "}
        <code>&apos;array&apos;</code> when you write the tag yourself. Open maps are{" "}
        <code>type: &apos;object&apos;</code> plus <code>values</code> / <code>keys</code>. Never{" "}
        <code>type: Object</code> — metadata uses that for almost everything.
      </p>
      <h2>Unions</h2>
      <CodeBlock code={examples.unions} />
      <h2>Options</h2>
      <table>
        <thead>
          <tr>
            <th>Option</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {fieldOptions.map((row) => (
            <tr key={row.name}>
              <td>
                <code>{row.name}</code>
              </td>
              <td>{row.detail}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </DocShell>
  );
}
