import { DocShell } from "@/components/DocShell";
import { InstallTabs } from "@/components/InstallTabs";
import { CodeBlock } from "@/components/CodeBlock";

export const metadata = { title: "Installation" };

export default function InstallPage() {
  return (
    <DocShell
      title="Installation"
      lead="Node 20 or newer. Bun is the canonical toolchain in the monorepo; npm and pnpm work for consumers."
    >
      <h2>Packages</h2>
      <InstallTabs />
      <p className="mt-6">
        <code>typedantic</code> depends on <code>@typedantic/core</code>. Add{" "}
        <code>typedantic-settings</code> if you need env loading.
      </p>
      <CodeBlock
        label="optional"
        code={`bun add typedantic-settings`}
      />
      <h2>TypeScript config</h2>
      <p>Decorators and metadata are required for Field inference:</p>
      <CodeBlock
        label="tsconfig.json"
        code={`{
  "compilerOptions": {
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true,
    "useDefineForClassFields": false
  }
}`}
      />
      <h2>Import once</h2>
      <CodeBlock code={`import "reflect-metadata";`} />
      <p>
        Import <code>reflect-metadata</code> before any model file. In tests, put it at the top of
        the file.
      </p>
      <h2>From source</h2>
      <CodeBlock
        label="git"
        code={`git clone https://github.com/dfunani/typedantic.git
cd typedantic
bun install
bun run build
bun run test`}
      />
    </DocShell>
  );
}
