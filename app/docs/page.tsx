import { CodeBlock } from "@/components/CodeBlock";
import { DocShell } from "@/components/DocShell";
import { examples } from "@/lib/examples";

export const metadata = { title: "Documentation" };

export default function DocsPage() {
  return (
    <DocShell
      title="Typedantic is a validation library."
      lead="You describe a model with @Field. We compile a CoreSchema once, then reject or coerce untrusted input — the same job Pydantic does in Python."
    >
      <p>
        Three packages. Write against <code>typedantic</code>. The engine lives in{" "}
        <code>@typedantic/core</code>. Environment config is{" "}
        <code>typedantic-settings</code>.
      </p>
      <CodeBlock code={examples.user} />
      <h2>What this site covers</h2>
      <ul>
        <li>Install, tsconfig, and the first model</li>
        <li>Field options, numbers vs ints, arrays vs objects</li>
        <li>ValidationError shape and SchemaValidator</li>
        <li>Every public class, method, and type</li>
        <li>How to clone the repo and send a change</li>
      </ul>
      <h2>Runtime types</h2>
      <p>
        TypeScript erases types. <code>emitDecoratorMetadata</code> recovers a coarse{" "}
        <code>design:type</code> (<code>String</code>, <code>Number</code>, <code>Array</code>
        ). Always pass <code>type</code> on <code>@Field</code> in tests. Do not treat the{" "}
        <code>Object</code> constructor as an open map.
      </p>
    </DocShell>
  );
}
