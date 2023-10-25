import UnicodeConverter from "@/components/project/UnicodeConverter";
import Link from "next/link";

export const metadata = {
  title: "Unicode Converter",
  description:
    "A web application that converts binary to Unicode and vice versa.",
};

export default function UnicodeConverterPage() {
  return (
    <div>
      <h1>Unicode Converter</h1>
      <Link href="/project">
        <div className="backlink">⬅️ Back to Projects</div>
      </Link>
      <UnicodeConverter />
    </div>
  );
}
