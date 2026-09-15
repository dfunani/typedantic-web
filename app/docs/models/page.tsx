import { CodeBlock } from "@/components/CodeBlock";
import { DocShell } from "@/components/DocShell";

export const metadata = { title: "Models" };

export default function ModelsPage() {
  return (
    <DocShell
      title="Models"
      lead="Subclass BaseModel. Configure the class. Validate at the boundary."
    >
      <h2>modelConfig</h2>
      <CodeBlock
        code={`@modelConfig({ extra: "forbid", strict: false })
class User extends BaseModel {
  @Field({ type: String })
  name!: string;
}`}
      />
      <table>
        <thead>
          <tr>
            <th>Key</th>
            <th>Meaning</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>extra</code>
            </td>
            <td>
              <code>ignore</code> (default), <code>allow</code>, or <code>forbid</code> unknown
              keys
            </td>
          </tr>
          <tr>
            <td>
              <code>strict</code>
            </td>
            <td>Disable coercion (strings to ints, etc.)</td>
          </tr>
          <tr>
            <td>
              <code>frozen</code>
            </td>
            <td>Reserved for assignment locking</td>
          </tr>
          <tr>
            <td>
              <code>validateAssignment</code>
            </td>
            <td>Reserved for per-set validation</td>
          </tr>
        </tbody>
      </table>
      <h2>Lifecycle</h2>
      <ul>
        <li>
          <code>modelValidate(data)</code> — compile, run, throw or return an instance
        </li>
        <li>
          <code>modelConstruct(values)</code> — skip validation
        </li>
        <li>
          <code>modelDump()</code> / <code>modelDumpJson()</code> — plain output
        </li>
      </ul>
      <h2>Nested models</h2>
      <p>
        <code>{`@Field({ type: Address })`}</code> inlines Address’s <code>model-fields</code> schema.
        Nested results are plain objects, not nested class instances.
      </p>
      <h2>Defaults</h2>
      <p>
        Put <code>default</code> or <code>defaultFactory</code> on the field. Core clones array and
        object defaults so instances do not share <code>[]</code>. Prefer{" "}
        <code>defaultFactory: () =&gt; []</code>.
      </p>
    </DocShell>
  );
}
