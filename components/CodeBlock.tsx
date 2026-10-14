"use client";

import { useState } from "react";

export function CodeBlock({
  code,
  label = "TypeScript",
}: {
  code: string;
  label?: string;
}) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    await navigator.clipboard.writeText(code.trim() + "\n");
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1400);
  }

  return (
    <div className="surface overflow-hidden rounded-xl">
      <div className="flex items-center justify-between border-b border-line-strong bg-ink-3/80 px-4 py-2.5">
        <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-copper">
          {label}
        </span>
        <button
          type="button"
          onClick={copy}
          className="font-mono text-[11px] uppercase tracking-[0.14em] text-paper-dim transition-colors hover:text-copper-bright"
        >
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <pre className="overflow-x-auto bg-ink-2 p-4 text-[13.5px] leading-7 text-paper">
        <code className="font-mono">{code.trim()}</code>
      </pre>
    </div>
  );
}
