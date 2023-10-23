import Link from "next/link";

export default function ASCIIConverter() {
  return (
    <div>
      <h1>ASCII Converter</h1>
      <Link href="/project">
        <div className="backlink">⬅️ Back to Projects</div>
      </Link>
    </div>
  );
}
