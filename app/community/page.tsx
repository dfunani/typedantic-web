import Link from "next/link";
import { site } from "@/lib/site";

export const metadata = { title: "Community" };

export default function CommunityPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-16">
      <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-copper">Community</p>
      <h1 className="display mt-3 text-4xl text-paper">Get involved</h1>
      <p className="mt-4 text-lg leading-8 text-paper-dim">
        Typedantic is open source under the {site.license} license. Discussion and patches happen on
        GitHub — same idea as Django&apos;s community hub, scaled to this project.
      </p>

      <div className="mt-12 space-y-6">
        {[
          {
            title: "Source & issues",
            body: "Report bugs, request features, and browse the monorepo.",
            href: site.github,
            cta: site.githubShort,
            external: true,
          },
          {
            title: "Rebuild curriculum",
            body: "In-repo documentation for recreating Typedantic from scratch.",
            href: site.docsRepo,
            cta: "documentation/",
            external: true,
          },
          {
            title: "Contribute",
            body: "Build, test, and PR workflow for the library.",
            href: "/contribute",
            cta: "Contributor guide",
            external: false,
          },
          {
            title: "Packages on npm",
            body: "@typedantic/core, @typedantic/model, @typedantic/settings.",
            href: site.npmOrg,
            cta: "npm org",
            external: true,
          },
        ].map((item) => (
          <div key={item.title} className="border-t border-line pt-6">
            <h2 className="display text-2xl text-paper">{item.title}</h2>
            <p className="mt-2 text-sm leading-7 text-paper-dim">{item.body}</p>
            {item.external ? (
              <a
                href={item.href}
                className="mt-3 inline-block text-sm text-copper-bright hover:underline"
              >
                {item.cta} ↗
              </a>
            ) : (
              <Link
                href={item.href}
                className="mt-3 inline-block text-sm text-copper-bright hover:underline"
              >
                {item.cta} →
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
