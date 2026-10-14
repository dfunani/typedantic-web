import Link from "next/link";
import { CodeBlock } from "@/components/CodeBlock";
import { InstallTabs } from "@/components/InstallTabs";
import { examples } from "@/lib/examples";
import { packages, site } from "@/lib/site";

const pillars = [
  {
    href: "/docs",
    title: "Documentation",
    body: "Getting started, topics, and the mental model — like Django’s overview + topics.",
  },
  {
    href: "/docs/howto",
    title: "How-to guides",
    body: "Task recipes: validate JSON, custom validators, serializers, env settings.",
  },
  {
    href: "/reference",
    title: "API reference",
    body: "Every public export across @typedantic/model, core, and settings.",
  },
];

const mapping = [
  ["BaseModel", "BaseModel"],
  ["Field(...)", "@Field({ ... })"],
  ["model_validate", "modelValidate"],
  ["model_dump", "modelDump"],
  ["RootModel", "RootModel"],
  ["EmailStr", "EmailStr"],
  ["BaseSettings", "BaseSettings"],
  ["TypeAdapter", "TypeAdapter"],
];

export default function Home() {
  return (
    <>
      <section className="relative mx-auto max-w-6xl px-5 pb-10 pt-16 md:pt-20">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-copper">
          Typedantic · v{site.version} · MIT · Node {site.node}
        </p>
        <h1 className="display mt-5 max-w-3xl text-5xl leading-[1.05] tracking-tight text-paper sm:text-7xl">
          Meet Typedantic
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
            href="/download"
            className="rounded-full border border-line px-5 py-2.5 text-sm text-paper hover:border-copper"
          >
            Download v{site.version}
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

      <section className="mx-auto mt-16 max-w-6xl px-5">
        <CodeBlock code={examples.user} />
      </section>

      <section className="mx-auto mt-20 max-w-6xl px-5">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-copper">Explore</p>
        <h2 className="display mt-3 text-3xl text-paper">Where to go next</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {pillars.map((p) => (
            <Link
              key={p.href}
              href={p.href}
              className="border-t border-line pt-5 transition-colors hover:border-copper"
            >
              <h3 className="display text-2xl text-paper">{p.title}</h3>
              <p className="mt-3 text-sm leading-7 text-paper-dim">{p.body}</p>
            </Link>
          ))}
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
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {packages.map((pkg) => (
            <Link
              key={pkg.name}
              href={pkg.href}
              className="border-t border-line pt-5 transition-colors hover:border-copper"
            >
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-copper">
                {pkg.role}
              </p>
              <h3 className="mt-3 font-mono text-sm text-paper">{pkg.name}</h3>
              <p className="mt-3 text-sm leading-6 text-paper-dim">{pkg.blurb}</p>
            </Link>
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
                Same mental model. Schema tags are JS-native (<code className="text-paper">array</code>
                , <code className="text-paper">object</code>, <code className="text-paper">int</code>
                ). Decorators replace erased TypeScript types at runtime.
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
        <div className="flex flex-col items-start justify-between gap-6 border-t border-line px-0 py-10 md:flex-row md:items-center">
          <div>
            <h2 className="display text-3xl text-paper">Help make it stricter.</h2>
            <p className="mt-3 max-w-lg text-sm leading-7 text-paper-dim">
              Issues and patches live on GitHub. Build with Bun; keep unit tests next to each package.
            </p>
          </div>
          <div className="flex gap-3">
            <Link
              href="/community"
              className="rounded-full bg-paper px-5 py-2.5 text-sm font-medium text-ink hover:bg-paper-dim"
            >
              Community
            </Link>
            <Link
              href="/contribute"
              className="rounded-full border border-line px-5 py-2.5 text-sm text-paper hover:border-copper"
            >
              Contribute
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
