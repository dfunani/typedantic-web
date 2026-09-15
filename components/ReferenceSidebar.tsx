"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { referenceNav } from "@/lib/nav";

export function ReferenceSidebar() {
  const pathname = usePathname();

  return (
    <nav className="space-y-1.5">
      <p className="mb-3 text-[0.68rem] font-medium uppercase tracking-[0.16em] text-muted">
        API
      </p>
      {referenceNav.map((item) => {
        const active = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`block rounded-md px-2 py-1 text-sm ${
              active ? "bg-copper-dim text-paper" : "text-paper-dim hover:text-paper"
            }`}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
