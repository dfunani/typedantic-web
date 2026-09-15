import { CodeBlock } from "@/components/CodeBlock";
import { DocShell } from "@/components/DocShell";
import { examples } from "@/lib/examples";

export const metadata = { title: "Validation" };

export default function ValidationPage() {
  return (
    <DocShell
      title="Validation"
      lead="SchemaValidator compiles once. Every call gets a fresh error list. Failures throw ValidationError."
    >
      <h2>From a model</h2>
      <p>
        <code>BaseModel.modelValidate</code> builds the schema, compiles it, and runs{" "}
        <code>validateModel</code>. You catch <code>ValidationError</code>.
      </p>
      <CodeBlock code={examples.error} />
      <h2>From CoreSchema</h2>
      <CodeBlock code={examples.core} />
      <h2>Error shape</h2>
      <p>
        Each detail has <code>type</code>, <code>location</code> (a path array),{" "}
        <code>message</code>, <code>input</code>, and optional <code>context</code>.{" "}
        <code>toJson()</code> is <code>{`{ detail: [...] }`}</code> — the FastAPI convention.
      </p>
      <table>
        <thead>
          <tr>
            <th>Rule</th>
            <th>Behavior</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Constraint copy</td>
            <td>
              <code>ge: 1</code> with input <code>0</code> says “greater than or equal to 1”
            </td>
          </tr>
          <tr>
            <td>Missing field</td>
            <td>
              Location is <code>[...path, name]</code>, not the parent object
            </td>
          </tr>
          <tr>
            <td>
              <code>validateJson</code>
            </td>
            <td>
              Only <code>JSON.parse</code> failures become <code>json_invalid</code>
            </td>
          </tr>
          <tr>
            <td>Reuse</td>
            <td>A validator that failed once can succeed on the next call</td>
          </tr>
        </tbody>
      </table>
    </DocShell>
  );
}
