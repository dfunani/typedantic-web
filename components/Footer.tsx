import Link from "next/link";
import { footerNav } from "@/lib/nav";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-line">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:grid-cols-4">
        <div>
          <p className="display text-lg text-paper">typedantic</p>
          <p className="mt-3 max-w-xs text-sm leading-6 text-muted">
            {site.tagline} Open source, MIT, Node {site.node}.
          </p>
        </div>
        {footerNav.map((group) => (
          <div key={group.title}>
            <p className="text-[0.7rem] font-medium uppercase tracking-[0.16em] text-muted">
              {group.title}
            </p>
            <ul className="mt-4 space-y-2">
              {group.items.map((item) => (
                <li key={item.href}>
                  {"external" in item && item.external ? (
                    <a href={item.href} className="text-sm text-paper-dim hover:text-paper">
                      {item.label}
                    </a>
                  ) : (
                    <Link href={item.href} className="text-sm text-paper-dim hover:text-paper">
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-5 py-5 text-xs text-muted">
          <span>v{site.version} · {site.license}</span>
          <span>{site.githubShort}</span>
        </div>
      </div>
    </footer>
  );
}
