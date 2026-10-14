import Link from "next/link";
import { CodeBlock } from "@/components/CodeBlock";
import { DocShell } from "@/components/DocShell";
import { examples } from "@/lib/examples";

export const metadata = { title: "Documentation" };

export default function DocsPage() {
  return (
    <DocShell
      title="Documentation"
      lead="Typedantic validates untrusted data against models you declare with @Field — the same job Pydantic does in Python, for TypeScript."
    >
      <p>
        Write against <code>@typedantic/model</code>. The engine is{" "}
        <code>@typedantic/core</code>. Environment loading is <code>@typedantic/settings</code>.
      </p>
      <CodeBlock code={examples.user} />

      <h2>How this site is organized</h2>
      <p>Same shape as Django&apos;s documentation:</p>
      <ul>
        <li>
          <Link href="/docs/install">Getting started</Link> — install, tsconfig, first model
        </li>
        <li>
          <Link href="/docs/howto">How-to guides</Link> — task recipes (JSON, validators, env, …)
        </li>
        <li>
          <strong>Topics</strong> — Models, Fields, CoreSchema, Annotated types, RootModel, Settings
        </li>
        <li>
          <Link href="/reference">API reference</Link> — every public export
        </li>
      </ul>

      <h2>Runtime types</h2>
      <p>
        TypeScript erases types. <code>emitDecoratorMetadata</code> recovers a coarse{" "}
        <code>design:type</code>. Always pass <code>type</code> on <code>@Field</code> in tests. Do
        not treat the <code>Object</code> constructor as an open map — use{" "}
        <code>type: &apos;object&apos;</code> with <code>values</code> / <code>keys</code>.
      </p>
    </DocShell>
  );
}
