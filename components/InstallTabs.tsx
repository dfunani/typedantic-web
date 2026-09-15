"use client";

import { useState } from "react";
import { installCommands } from "@/lib/site";

const tabs = Object.keys(installCommands) as (keyof typeof installCommands)[];

export function InstallTabs() {
  const [tab, setTab] = useState<(typeof tabs)[number]>("bun");
  const [copied, setCopied] = useState(false);
  const command = installCommands[tab];

  async function copy() {
    await navigator.clipboard.writeText(command);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1400);
  }

  return (
    <div className="overflow-hidden rounded-xl border border-line bg-ink-2">
      <div className="flex items-center gap-1 border-b border-line px-2 py-2">
        {tabs.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setTab(item)}
            className={`rounded-md px-3 py-1 font-mono text-xs uppercase tracking-wider ${
              tab === item ? "bg-copper-dim text-paper" : "text-muted hover:text-paper"
            }`}
          >
            {item}
          </button>
        ))}
        <button
          type="button"
          onClick={copy}
          className="ml-auto px-3 font-mono text-[11px] uppercase tracking-[0.14em] text-paper-dim hover:text-copper-bright"
        >
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <pre className="overflow-x-auto p-4 font-mono text-sm text-paper">{command}</pre>
    </div>
  );
}
