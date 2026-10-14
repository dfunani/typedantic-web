import { CodeBlock } from "@/components/CodeBlock";
import { DocShell } from "@/components/DocShell";
import { examples } from "@/lib/examples";

export const metadata = { title: "Validate JSON" };

export default function HowtoJsonPage() {
  return (
    <DocShell
      title="How to validate a JSON payload"
      lead="HTTP handlers and webhooks usually hand you a string. Prefer modelValidateJson so parse failures become ValidationError."
    >
      <h2>Model class</h2>
      <CodeBlock
        code={`const user = User.modelValidateJson(await request.text());
// or
const user = User.modelValidateJson(JSON.stringify(body));`}
      />
      <h2>Without a class — TypeAdapter</h2>
      <CodeBlock code={examples.typeAdapter} />
      <h2>Core only</h2>
      <CodeBlock code={examples.core} />
      <p>
        Invalid JSON yields a <code>json_invalid</code> error, not a thrown <code>SyntaxError</code>{" "}
        from your handler.
      </p>
    </DocShell>
  );
}
