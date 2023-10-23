import Link from "next/link";

export const metadata = {
  title: "ASCII Converter",
  description:
    "A web application that converts binary to ASCII and vice versa.",
};

export default function ASCIIConverterPage() {
  return (
    <div>
      <h1>ASCII Converter</h1>
      <Link href="/project">
        <div className="backlink">⬅️ Back to Projects</div>
      </Link>
    </div>
  );
}
