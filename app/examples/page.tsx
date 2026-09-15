import { CodeBlock } from "@/components/CodeBlock";
import { examples } from "@/lib/examples";

export const metadata = { title: "Examples" };

const items = [
  {
    title: "A first model",
    note: "String, int, boolean. extra: forbid.",
    code: examples.user,
  },
  {
    title: "Collections",
    note: "array of strings, object of ints with key minLength.",
    code: examples.collections,
  },
  {
    title: "Tagged unions",
    note: "discriminator is strict. Unknown tags do not fall through.",
    code: examples.unions,
  },
  {
    title: "int vs number",
    note: "Number → int. type: 'number' is IEEE-754.",
    code: examples.numbers,
  },
  {
    title: "Settings",
    note: "Prefix, .env, then modelValidate.",
    code: examples.settings,
  },
  {
    title: "Core only",
    note: "No BaseModel. Compile a schema and validate JSON.",
    code: examples.core,
  },
] as const;

export default function ExamplesPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16">
      <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-copper">Examples</p>
      <h1 className="display mt-3 text-4xl text-paper">Copy, then break it.</h1>
      <p className="mt-4 max-w-2xl text-lg leading-8 text-paper-dim">
        These are the same shapes as the functional tests in the library repo. Invalid input should
        throw <span className="font-mono text-paper">ValidationError</span>.
      </p>
      <div className="mt-12 space-y-14">
        {items.map((item, index) => (
          <section key={item.title}>
            <div className="mb-4 flex items-baseline gap-4">
              <span className="font-mono text-xs text-muted">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h2 className="display text-2xl text-paper">{item.title}</h2>
                <p className="mt-1 text-sm text-paper-dim">{item.note}</p>
              </div>
            </div>
            <CodeBlock code={item.code} />
          </section>
        ))}
      </div>
    </div>
  );
}
