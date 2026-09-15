import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-xl px-5 py-32 text-center">
      <p className="font-mono text-xs text-copper">404</p>
      <h1 className="display mt-4 text-4xl text-paper">This path did not validate.</h1>
      <p className="mt-4 text-paper-dim">No page at this location.</p>
      <Link
        href="/"
        className="mt-8 inline-block rounded-full bg-copper px-5 py-2.5 text-sm text-ink"
      >
        Back to the index
      </Link>
    </div>
  );
}
