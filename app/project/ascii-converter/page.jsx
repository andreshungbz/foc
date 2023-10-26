import ASCIIConverter from "@/components/project/ASCIIConverter";
import Link from "next/link";

export const metadata = {
  title: "ASCII Converter",
  description: "A web application that converts a number to ASCII.",
};

export default function ASCIIConverterPage() {
  return (
    <div>
      <h1>ASCII Converter</h1>
      <Link href="/project">
        <div className="backlink">⬅️ Back to Projects</div>
      </Link>
      <ASCIIConverter />
    </div>
  );
}
