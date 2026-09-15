import type { ReactNode } from "react";
import { ReferenceSidebar } from "@/components/ReferenceSidebar";

export function ReferenceShell({
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
        <ReferenceSidebar />
      </aside>
      <article className="min-w-0">
        <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.18em] text-copper">
          API reference
        </p>
        <h1 className="display text-4xl tracking-tight text-paper">{title}</h1>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-paper-dim">{lead}</p>
        {children}
      </article>
    </div>
  );
}
