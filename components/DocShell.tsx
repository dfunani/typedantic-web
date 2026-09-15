import type { ReactNode } from "react";
import { DocSidebar } from "@/components/DocSidebar";

export function DocShell({
  title,
  lead,
  children,
}: {
  title: string;
  lead: string;
  children: ReactNode;
}) {
  return (
    <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 lg:grid-cols-[220px_minmax(0,1fr)]">
      <aside className="lg:sticky lg:top-24 lg:self-start">
        <DocSidebar />
      </aside>
      <article className="prose-docs min-w-0">
        <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.18em] text-copper">
          Documentation
        </p>
        <h1>{title}</h1>
        <p className="text-lg text-paper-dim">{lead}</p>
        {children}
      </article>
    </div>
  );
}
