import { CodeBlock } from "@/components/CodeBlock";
import { InstallTabs } from "@/components/InstallTabs";
import { site } from "@/lib/site";

export const metadata = { title: "Download" };

export default function DownloadPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-16">
      <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-copper">Download</p>
      <h1 className="display mt-3 text-4xl text-paper">Get Typedantic</h1>
      <p className="mt-4 text-lg leading-8 text-paper-dim">
        Current release <span className="font-mono text-paper">v{site.version}</span>, MIT license.
        Requires Node {site.node} and <span className="font-mono text-paper">reflect-metadata</span>.
      </p>

      <h2 className="display mt-12 text-2xl text-paper">From a registry</h2>
      <p className="mt-3 mb-5 text-sm text-paper-dim">
        Installs <code className="font-mono text-paper">typedantic</code> and its core engine.
      </p>
      <InstallTabs />

      <h2 className="display mt-12 text-2xl text-paper">From Git</h2>
      <CodeBlock
        label="clone"
        code={`git clone ${site.github}.git
cd typedantic
bun install
bun run build`}
      />

      <div className="mt-12 overflow-hidden rounded-xl border border-line">
        <table className="w-full text-sm">
          <tbody>
            {[
              ["npm", "typedantic, @typedantic/core, typedantic-settings"],
              ["Repository", site.githubShort],
              ["License", site.license],
              ["Runtime", `Node ${site.node}`],
              ["Package manager", "Bun (canonical), npm, pnpm, yarn"],
            ].map(([k, v]) => (
              <tr key={k} className="border-t border-line first:border-t-0">
                <td className="w-40 px-5 py-3 font-mono text-xs uppercase tracking-[0.12em] text-muted">
                  {k}
                </td>
                <td className="px-5 py-3 text-paper-dim">{v}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-8 text-sm text-paper-dim">
        Package pages:{" "}
        <a className="text-copper-bright hover:underline" href={site.npm}>
          npmjs.com/package/typedantic
        </a>
      </p>
    </div>
  );
}
