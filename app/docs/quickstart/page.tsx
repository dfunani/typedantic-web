import { CodeBlock } from "@/components/CodeBlock";
import { DocShell } from "@/components/DocShell";
import { examples } from "@/lib/examples";

export const metadata = { title: "Quickstart" };

export default function QuickstartPage() {
  return (
    <DocShell
      title="Quickstart"
      lead="A model, a validate call, a dump. Invalid data throws."
    >
      <h2>Define a model</h2>
      <CodeBlock code={examples.user} />
      <h2>Handle errors</h2>
      <CodeBlock code={examples.error} />
      <h2>What just happened</h2>
      <ol>
        <li>
          <code>@Field</code> registered each property on the constructor.
        </li>
        <li>
          <code>modelValidate</code> built a <code>model-fields</code> CoreSchema and compiled it.
        </li>
        <li>
          The validator coerced or rejected values, then <code>modelConstruct</code> filled the
          instance.
        </li>
      </ol>
      <p>
        Next: <a href="/docs/fields">field options</a> and{" "}
        <a href="/docs/models">model configuration</a>.
      </p>
    </DocShell>
  );
}
