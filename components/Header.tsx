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
    <header className="sticky top-0 z-40 border-b border-line bg-ink/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Logo />
        <nav className="hidden items-center gap-7 md:flex">
          {mainNav.map((item) => {
            const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm tracking-wide transition-colors ${
                  active ? "text-paper" : "text-muted hover:text-paper"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <a
            href={site.github}
            className="rounded-full border border-line px-3.5 py-1.5 text-sm text-paper-dim transition-colors hover:border-copper hover:text-paper"
          >
            GitHub
          </a>
        </nav>
        <button
          type="button"
          className="md:hidden text-sm text-muted"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>
      {open && (
        <div className="border-t border-line px-5 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-paper"
              >
                {item.label}
              </Link>
            ))}
            <a href={site.github} className="text-copper-bright">
              GitHub
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
