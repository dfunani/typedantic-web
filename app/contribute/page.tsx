import { CodeBlock } from "@/components/CodeBlock";
import { site } from "@/lib/site";

export const metadata = { title: "Contribute" };

export default function ContributePage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-16 prose-docs">
      <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.18em] text-copper">
        Community
      </p>
      <h1>Contribute</h1>
      <p>
        Typedantic is developed in the open at{" "}
        <a href={site.github}>{site.githubShort}</a>. Issues, discussions, and pull requests are
        welcome — especially tests that pin a compiler edge.
      </p>

      <h2>Setup</h2>
      <CodeBlock
        label="shell"
        code={`git clone ${site.github}.git
cd typedantic
bun install
bun run build
bun run typecheck
bun run test
bun run functional-test`}
      />

      <h2>How we work</h2>
      <ul>
        <li>
          Unit tests live in <code>packages/&lt;name&gt;/tests/</code>, not next to <code>src</code>.
        </li>
        <li>
          Functional scripts live in repo-root <code>tests/</code> and import built packages.
        </li>
        <li>
          IR names are JS: <code>array</code>, <code>object</code>, <code>int</code>,{" "}
          <code>number</code>. Do not add <code>list</code>, <code>dict</code>, or{" "}
          <code>float</code>.
        </li>
        <li>
          Constraint messages interpolate the schema limit, never the invalid input.
        </li>
        <li>
          Build before testing consumers — they import <code>dist</code>.
        </li>
      </ul>

      <h2>Pull requests</h2>
      <ol>
        <li>Fork and branch from the current feature branch or <code>main</code>.</li>
        <li>Keep the change small. Match existing file layout.</li>
        <li>
          Run <code>bun run test</code> and <code>bun run typecheck</code>.
        </li>
        <li>Describe why, not the file list. Link an issue if there is one.</li>
      </ol>

      <h2>Report a bug</h2>
      <p>
        Include the schema or <code>@Field</code> options, the input, the error{" "}
        <code>detail</code>, and whether <code>strict</code> was on. Open an issue on{" "}
        <a href={`${site.github}/issues`}>GitHub Issues</a>.
      </p>
    </div>
  );
}
