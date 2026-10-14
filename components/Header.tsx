"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Logo } from "@/components/Logo";
import { mainNav } from "@/lib/nav";
import { site } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line-strong bg-ink/95 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Logo />
        <nav className="hidden items-center gap-1 md:flex">
          {mainNav.map((item) => {
            const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-md px-3 py-1.5 text-sm tracking-wide transition-colors ${
                  active
                    ? "bg-copper-dim text-copper-bright"
                    : "text-paper-dim hover:bg-ink-3 hover:text-paper"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <a
            href={site.github}
            className="ml-2 rounded-md border border-line-strong bg-ink-2 px-3.5 py-1.5 text-sm text-paper transition-colors hover:border-copper hover:text-copper-bright"
          >
            GitHub
          </a>
        </nav>
        <button
          type="button"
          className="md:hidden text-sm text-paper-dim"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>
      {open && (
        <div className="border-t border-line-strong bg-ink-2 px-5 py-4 md:hidden">
          <div className="flex flex-col gap-1">
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2 text-paper hover:bg-ink-3"
              >
                {item.label}
              </Link>
            ))}
            <a href={site.github} className="rounded-md px-2 py-2 text-copper-bright">
              GitHub
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
