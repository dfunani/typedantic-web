import { CodeBlock } from "@/components/CodeBlock";
import { DocShell } from "@/components/DocShell";
import { examples } from "@/lib/examples";

export const metadata = { title: "Serializers" };

export default function HowtoSerializersPage() {
  return (
    <DocShell
      title="How to control dump output"
      lead="modelDump / modelDumpJson run SchemaSerializer plus optional field serializers and computed fields."
    >
      <CodeBlock code={examples.serializers} />
      <h2>Common options</h2>
      <ul>
        <li>
          <code>mode: &apos;json&apos;</code> — dates → ISO, SecretStr → masked
        </li>
        <li>
          <code>byAlias</code> — use serializationAlias / alias as keys
        </li>
        <li>
          <code>excludeUnset</code> / <code>excludeNone</code> — omit fields
        </li>
      </ul>
      <p>
        JSON Schema for OpenAPI-style tooling: <code>User.modelJsonSchema()</code>.
      </p>
    </DocShell>
  );
}
