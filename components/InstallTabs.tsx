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
    <div className="surface overflow-hidden rounded-xl">
      <div className="flex items-center gap-1 border-b border-line-strong bg-ink-3/80 px-2 py-2">
        {tabs.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setTab(item)}
            className={`rounded-md px-3 py-1.5 font-mono text-xs uppercase tracking-wider transition-colors ${
              tab === item
                ? "bg-copper text-ink"
                : "text-muted hover:bg-ink-2 hover:text-paper"
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
      <pre className="overflow-x-auto bg-ink-2 p-4 font-mono text-sm text-paper">{command}</pre>
    </div>
  );
}
