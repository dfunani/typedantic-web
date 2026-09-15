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
    <div className="overflow-hidden rounded-xl border border-line bg-ink-2">
      <div className="flex items-center justify-between border-b border-line px-4 py-2">
        <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
          {label}
        </span>
        <button
          type="button"
          onClick={copy}
          className="font-mono text-[11px] uppercase tracking-[0.14em] text-paper-dim hover:text-copper-bright"
        >
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <pre className="overflow-x-auto p-4 text-[13px] leading-6 text-paper-dim">
        <code className="font-mono">{code.trim()}</code>
      </pre>
    </div>
  );
}
