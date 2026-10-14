import Link from "next/link";
import { DocShell } from "@/components/DocShell";

export const metadata = { title: "How-to guides" };

const guides = [
  {
    href: "/docs/howto/json",
    title: "Validate a JSON payload",
    body: "Parse request bodies and API responses with modelValidateJson or TypeAdapter.",
  },
  {
    href: "/docs/howto/validators",
    title: "Add custom validators",
    body: "Trim strings, cross-field checks, and wrap modes with @fieldValidator / @modelValidator.",
  },
  {
    href: "/docs/howto/serializers",
    title: "Control dump output",
    body: "Aliases, computed fields, JSON mode, and field serializers.",
  },
  {
    href: "/docs/howto/settings",
    title: "Load config from the environment",
    body: "BaseSettings, prefixes, nested keys, and custom sources.",
  },
  {
    href: "/docs/annotated",
    title: "Use EmailStr and friends",
    body: "Annotated types for common constrained values.",
  },
  {
    href: "/docs/root-model",
    title: "Validate a non-object root",
    body: "RootModel for arrays and scalars at the top level.",
  },
] as const;

export default function HowtoIndexPage() {
  return (
    <DocShell
      title="How-to guides"
      lead="Task-oriented recipes — the Django docs pattern. Prefer these when you know what you want to do."
    >
      <p>
        For concepts and vocabulary, use{" "}
        <Link href="/docs/models">Topics</Link>. For every public symbol, see the{" "}
        <Link href="/reference">API reference</Link>.
      </p>
      <div className="mt-8 space-y-4">
        {guides.map((g) => (
          <Link
            key={g.href}
            href={g.href}
            className="block rounded-xl border border-line bg-ink-2 p-5 transition-colors hover:border-copper"
          >
            <h2 className="display text-xl text-paper">{g.title}</h2>
            <p className="mt-2 text-sm leading-6 text-paper-dim">{g.body}</p>
          </Link>
        ))}
      </div>
    </DocShell>
  );
}
