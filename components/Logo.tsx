import Link from "next/link";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link href="/" className="group flex items-center gap-2.5">
      <span className="relative flex h-8 w-8 items-center justify-center rounded-lg border border-line-strong bg-ink-2 shadow-[0_0_20px_var(--glow)]">
        <span className="absolute h-3.5 w-[2px] rounded-full bg-copper" />
        <span className="absolute w-3.5 h-[2px] rounded-full bg-copper" />
        <span className="accent-dot absolute -bottom-0.5 -right-0.5 h-1.5 w-1.5 rounded-full bg-copper-bright" />
      </span>
      {!compact && (
        <span className="display text-[1.2rem] tracking-tight text-paper group-hover:text-copper-bright">
          Typedantic
        </span>
      )}
    </Link>
  );
}
