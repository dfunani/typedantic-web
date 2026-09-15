import { DocShell } from "@/components/DocShell";
import { schemaNodes } from "@/lib/api";

export const metadata = { title: "CoreSchema" };

export default function SchemaPage() {
  return (
    <DocShell
      title="CoreSchema"
      lead="The IR is a discriminated union on type. The compiler is a switch. Leaves live in primitives/ and complex/."
    >
      <p>
        You rarely write CoreSchema by hand. Field inference emits it.{" "}
        <code>@typedantic/core</code> is usable without decorators when you want a validator for a
        JSON blob.
      </p>
      <table>
        <thead>
          <tr>
            <th>type</th>
            <th>Accepts</th>
          </tr>
        </thead>
        <tbody>
          {schemaNodes.map((node) => (
            <tr key={node.type}>
              <td>
                <code>{node.type}</code>
              </td>
              <td>{node.accepts}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2>Layout</h2>
      <p>
        <code>compile.ts</code> only switches. Integer checks are <code>compileInts</code>, IEEE
        numbers are <code>compileNumbers</code>, collections are <code>compileArrays</code> and{" "}
        <code>compileObjects</code>.
      </p>
      <h2>Unions</h2>
      <p>
        If <code>discriminator</code> is set, a missing or unknown tag is an error. The compiler
        does not then try every member. Untagged unions still try choices in order.
      </p>
    </DocShell>
  );
}
