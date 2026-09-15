import Link from "next/link";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link href="/" className="group flex items-center gap-2.5">
      <span className="relative flex h-8 w-8 items-center justify-center rounded-lg border border-line bg-ink-2">
        <span className="absolute h-3.5 w-[2px] rounded-full bg-copper" />
        <span className="absolute w-3.5 h-[2px] rounded-full bg-copper" />
        <span className="absolute -bottom-0.5 -right-0.5 h-1.5 w-1.5 rounded-full bg-paper" />
      </span>
      {!compact && (
        <span className="display text-[1.15rem] tracking-tight text-paper">
          typedantic
        </span>
      )}
    </Link>
  );
}
