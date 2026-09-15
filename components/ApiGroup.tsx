import type { ApiItem } from "@/lib/api";

const kindColor: Record<ApiItem["kind"], string> = {
  class: "text-sage",
  function: "text-copper-bright",
  method: "text-paper-dim",
  type: "text-muted",
  decorator: "text-copper",
};

export function ApiGroup({
  group,
  items,
}: {
  group: string;
  items: ApiItem[];
}) {
  return (
    <section className="mt-12">
      <h2 className="display text-2xl text-paper">{group}</h2>
      <div className="mt-5 divide-y divide-line rounded-xl border border-line">
        {items.map((item) => (
          <div key={item.name} id={item.name.replace(/\./g, "-")} className="scroll-mt-28 px-5 py-5">
            <div className="flex flex-wrap items-baseline gap-3">
              <code className="font-mono text-[15px] text-paper">{item.name}</code>
              <span className={`font-mono text-[11px] uppercase tracking-[0.14em] ${kindColor[item.kind]}`}>
                {item.kind}
              </span>
            </div>
            <pre className="mt-2 overflow-x-auto font-mono text-[13px] text-muted">{item.signature}</pre>
            <p className="mt-2 text-sm leading-6 text-paper-dim">{item.summary}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
