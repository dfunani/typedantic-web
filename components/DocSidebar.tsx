"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { docNav } from "@/lib/nav";

export function DocSidebar() {
  const pathname = usePathname();

  return (
    <nav className="space-y-8">
      {docNav.map((group) => (
        <div key={group.title}>
          <p className="mb-3 text-[0.68rem] font-medium uppercase tracking-[0.16em] text-muted">
            {group.title}
          </p>
          <ul className="space-y-1.5">
            {group.items.map((item) => {
              const active = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`block rounded-md px-2 py-1 text-sm ${
                      active
                        ? "bg-copper-dim text-paper"
                        : "text-paper-dim hover:text-paper"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </nav>
  );
}
