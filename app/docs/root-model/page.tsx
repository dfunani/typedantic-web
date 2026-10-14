import { CodeBlock } from "@/components/CodeBlock";
import { DocShell } from "@/components/DocShell";
import { examples } from "@/lib/examples";

export const metadata = { title: "RootModel" };

export default function RootModelPage() {
  return (
    <DocShell
      title="RootModel"
      lead="When the payload is not a named-field object — a list, scalar, or annotated value at the root."
    >
      <CodeBlock code={examples.rootModel} />
      <p>
        Set <code>static rootType</code> to a constructor, <code>FieldInfo</code>, annotated type, or
        BaseSchema. The validated value is on <code>.root</code>. Dump and JSON Schema work like
        BaseModel.
      </p>
      <h2>Dynamic models</h2>
      <CodeBlock code={examples.createModel} />
    </DocShell>
  );
}
