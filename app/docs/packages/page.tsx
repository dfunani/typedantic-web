import { DocShell } from "@/components/DocShell";
import { packages } from "@/lib/site";

export const metadata = { title: "Packages" };

export default function PackagesPage() {
  return (
    <DocShell
      title="Packages"
      lead="A Bun workspace. Downstream packages import built dist, so always build before testing consumers."
    >
      <pre className="mb-8 overflow-x-auto rounded-xl border border-line bg-ink-2 p-4 font-mono text-sm text-paper-dim">
        {`typedantic-settings  →  typedantic  →  @typedantic/core`}
      </pre>
      <table>
        <thead>
          <tr>
            <th>Package</th>
            <th>Responsibility</th>
          </tr>
        </thead>
        <tbody>
          {packages.map((pkg) => (
            <tr key={pkg.name}>
              <td>
                <code>{pkg.name}</code>
              </td>
              <td>{pkg.blurb}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2>Publish order</h2>
      <ol>
        <li>
          <code>@typedantic/core</code>
        </li>
        <li>
          <code>typedantic</code>
        </li>
        <li>
          <code>typedantic-settings</code>
        </li>
      </ol>
      <h2>Tests</h2>
      <p>
        Unit tests live in <code>packages/&lt;name&gt;/tests/</code>. Functional scripts live in
        repo-root <code>tests/</code> and import the built packages.
      </p>
    </DocShell>
  );
}
