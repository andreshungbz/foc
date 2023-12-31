import BinaryHexadecimalConverter from "@/components/project/BinaryHexadecimalConverter";
import Link from "next/link";

export const metadata = {
  title: "Binary/Hexadecimal Converter",
  description:
    "A web application that converts binary to hexadecimal and vice versa.",
};

export default function BinaryHexadecimalConverterPage() {
  return (
    <div>
      <h1>Binary Hexadecimal Converter</h1>
      <Link href="/project">
        <div className="backlink">⬅️ Back to Projects</div>
      </Link>
      <BinaryHexadecimalConverter />
    </div>
  );
}
