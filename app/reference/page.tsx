import Link from "next/link";
import { ReferenceShell } from "@/components/ReferenceShell";
import { packages } from "@/lib/site";

export const metadata = { title: "API reference" };

export default function ReferencePage() {
  return (
    <ReferenceShell
      title="Every public name"
      lead="Three packages, compiled as ESM. This is the surface you import — not internal compiler files."
    >
      <div className="mt-10 grid gap-4">
        {packages.map((pkg) => (
          <Link
            key={pkg.name}
            href={pkg.href}
            className="rounded-xl border border-line bg-ink-2 p-6 hover:border-copper"
          >
            <p className="font-mono text-sm text-paper">{pkg.name}</p>
            <p className="mt-2 text-sm leading-6 text-paper-dim">{pkg.blurb}</p>
            <p className="mt-4 text-xs uppercase tracking-[0.14em] text-copper">{pkg.role}</p>
          </Link>
        ))}
      </div>
    </ReferenceShell>
  );
}
