import { CodeBlock } from "@/components/CodeBlock";
import { DocShell } from "@/components/DocShell";
import { examples } from "@/lib/examples";

export const metadata = { title: "Custom validators" };

export default function HowtoValidatorsPage() {
  return (
    <DocShell
      title="How to add custom validators"
      lead="Modes: before (raw input), after (typed value), wrap (call handler), plain (replace schema)."
    >
      <CodeBlock code={examples.validators} />
      <h2>Rules of thumb</h2>
      <ul>
        <li>
          Throw <code>Error</code> or return a value — thrown messages become{" "}
          <code>value_error</code> entries.
        </li>
        <li>
          Prefer <code>after</code> for normalization (trim, uppercase) once the inner type is valid.
        </li>
        <li>
          Use <code>modelValidator</code> for cross-field checks.
        </li>
      </ul>
      <p>
        See also <a href="/docs/annotated">annotated types</a> for reusable constraints without a
        custom method.
      </p>
    </DocShell>
  );
}
