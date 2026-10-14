import { CodeBlock } from "@/components/CodeBlock";
import { DocShell } from "@/components/DocShell";
import { examples } from "@/lib/examples";

export const metadata = { title: "Annotated types" };

export default function AnnotatedPage() {
  return (
    <DocShell
      title="Annotated types"
      lead="Reusable constrained types — EmailStr, HttpUrl, UUID, PositiveInt, SecretStr, and friends."
    >
      <CodeBlock code={examples.annotated} />
      <h2>Available markers</h2>
      <ul>
        <li>
          <code>EmailStr</code>, <code>HttpUrl</code>, <code>UUID</code>
        </li>
        <li>
          <code>PositiveInt</code>, <code>NegativeInt</code>, <code>NonNegativeInt</code>,{" "}
          <code>NonPositiveInt</code>
        </li>
        <li>
          <code>SecretStr</code> — wraps the value; JSON dump masks it
        </li>
      </ul>
      <p>
        Use as <code>@Field(&#123; type: EmailStr &#125;)</code> or with{" "}
        <code>new TypeAdapter(EmailStr)</code>.
      </p>
    </DocShell>
  );
}
