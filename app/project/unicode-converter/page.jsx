import Link from "next/link";

export default function UnicodeConverter() {
  return (
    <div>
      <h1>Unicode Converter</h1>
      <Link href="/project">
        <div className="backlink">⬅️ Back to Projects</div>
      </Link>
    </div>
  );
}
