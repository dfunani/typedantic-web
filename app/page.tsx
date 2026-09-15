import Link from "next/link";
import { CodeBlock } from "@/components/CodeBlock";
import { InstallTabs } from "@/components/InstallTabs";
import { examples } from "@/lib/examples";
import { packages, site } from "@/lib/site";

const features = [
  {
    n: "01",
    title: "Compile once",
    body: "CoreSchema compiles to a ValidatorFunction. Models reuse that function for every validate call.",
  },
  {
    n: "02",
    title: "JS-native IR",
    body: "array and object, int and number. No Python float. Number.isInteger is a predicate, not a language type.",
  },
  {
    n: "03",
    title: "Honest errors",
    body: "Constraint messages interpolate the limit, not the input. Paths include the field name. JSON errors stay JSON errors.",
  },
  {
    n: "04",
    title: "Settings included",
    body: "BaseSettings reads process.env and .env, prefixes keys, and nests APP_DB__HOST into models.",
  },
];

const mapping = [
  ["BaseModel", "BaseModel"],
  ["Field(...)", "@Field({ ... })"],
  ["model_validate", "modelValidate"],
  ["model_dump", "modelDump"],
  ["ValidationError", "ValidationError"],
  ["int / float", "int / number"],
  ["list / dict", "array / object"],
  ["BaseSettings", "BaseSettings"],
];

export default function Home() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-5 pb-8 pt-16 md:pt-24">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-copper">
          v{site.version} · MIT · Node {site.node}
        </p>
        <h1 className="display mt-5 max-w-3xl text-5xl leading-[1.05] tracking-tight text-paper sm:text-7xl">
          Data that matches
          <span className="italic text-copper-bright"> the types you wrote.</span>
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-8 text-paper-dim">
          {site.description}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/docs/quickstart"
            className="rounded-full bg-copper px-5 py-2.5 text-sm font-medium text-ink hover:bg-copper-bright"
          >
            Get started
          </Link>
          <Link
            href="/reference"
            className="rounded-full border border-line px-5 py-2.5 text-sm text-paper hover:border-copper"
          >
            API reference
          </Link>
          <a
            href={site.github}
            className="rounded-full px-5 py-2.5 text-sm text-muted hover:text-paper"
          >
            {site.githubShort} ↗
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5">
        <InstallTabs />
      </section>

      <section className="mx-auto mt-16 grid max-w-6xl items-start gap-8 px-5 lg:grid-cols-2">
        <CodeBlock code={examples.user} />
        <div className="rounded-xl border border-line bg-ink-2 p-6">
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">Result</p>
          <p className="display mt-4 text-3xl text-paper">Ada Lovelace</p>
          <dl className="mt-6 space-y-3 text-sm">
            <div className="flex justify-between border-b border-line pb-3">
              <dt className="text-muted">age</dt>
              <dd className="font-mono text-sage">36</dd>
            </div>
            <div className="flex justify-between border-b border-line pb-3">
              <dt className="text-muted">active</dt>
              <dd className="font-mono text-sage">true</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-muted">extra keys</dt>
              <dd className="font-mono text-danger">forbid</dd>
            </div>
          </dl>
          <p className="mt-8 text-sm leading-6 text-paper-dim">
            Invalid input throws <code className="font-mono text-paper">ValidationError</code> with
            a FastAPI-shaped <code className="font-mono text-paper">detail</code> list.
          </p>
        </div>
      </section>

      <section className="mx-auto mt-24 max-w-6xl px-5">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-copper">Packages</p>
            <h2 className="display mt-3 text-3xl text-paper">What we ship</h2>
          </div>
          <Link href="/docs/packages" className="hidden text-sm text-muted hover:text-paper sm:block">
            Package map →
          </Link>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {packages.map((pkg) => (
            <Link
              key={pkg.name}
              href={pkg.href}
              className="rounded-xl border border-line bg-ink-2 p-6 transition-colors hover:border-copper"
            >
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-copper">{pkg.role}</p>
              <h3 className="mt-3 font-mono text-sm text-paper">{pkg.name}</h3>
              <p className="mt-3 text-sm leading-6 text-paper-dim">{pkg.blurb}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-24 max-w-6xl px-5">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-copper">Why</p>
        <h2 className="display mt-3 max-w-2xl text-3xl text-paper">
          Built like Pydantic. Named like JavaScript.
        </h2>
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {features.map((feature) => (
            <div key={feature.n} className="border-t border-line pt-5">
              <p className="font-mono text-xs text-muted">{feature.n}</p>
              <h3 className="display mt-2 text-2xl text-paper">{feature.title}</h3>
              <p className="mt-3 text-sm leading-7 text-paper-dim">{feature.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-24 max-w-6xl px-5">
        <div className="overflow-hidden rounded-2xl border border-line">
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-10">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-copper">
                From Python
              </p>
              <h2 className="display mt-3 text-3xl text-paper">If you know Pydantic</h2>
              <p className="mt-4 text-sm leading-7 text-paper-dim">
                The mental model is the same. The schema tags are the JS ones: array, object, int,
                number. Decorators replace type hints because TypeScript erases types at runtime.
              </p>
            </div>
            <div className="border-t border-line bg-ink-2 md:border-l md:border-t-0">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left text-[11px] uppercase tracking-[0.14em] text-muted">
                    <th className="px-6 py-3 font-medium">Pydantic</th>
                    <th className="px-6 py-3 font-medium">Typedantic</th>
                  </tr>
                </thead>
                <tbody>
                  {mapping.map(([py, ts]) => (
                    <tr key={py} className="border-t border-line">
                      <td className="px-6 py-3 font-mono text-paper-dim">{py}</td>
                      <td className="px-6 py-3 font-mono text-paper">{ts}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-24 max-w-6xl px-5 pb-8">
        <div className="flex flex-col items-start justify-between gap-6 rounded-2xl border border-line bg-ink-2 px-8 py-10 md:flex-row md:items-center">
          <div>
            <h2 className="display text-3xl text-paper">Help make it stricter.</h2>
            <p className="mt-3 max-w-lg text-sm leading-7 text-paper-dim">
              Issues, tests, and patches live on GitHub. Build with Bun, keep unit tests in each
              package, and open a PR against the current branch.
            </p>
          </div>
          <div className="flex gap-3">
            <Link
              href="/contribute"
              className="rounded-full bg-paper px-5 py-2.5 text-sm font-medium text-ink hover:bg-paper-dim"
            >
              Contribute
            </Link>
            <Link
              href="/download"
              className="rounded-full border border-line px-5 py-2.5 text-sm text-paper hover:border-copper"
            >
              Download
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
