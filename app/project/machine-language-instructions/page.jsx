import Link from "next/link";

export const metadata = {
  title: "Machine Langue Instructions",
  description:
    "A web application that demonstrates the functionality of machine language instructions.",
};

export default function MachineLanguageInstructions() {
  return (
    <div>
      <h1>Machine Language Instructions Demonstration</h1>
      <Link href="/project">
        <div className="backlink">⬅️ Back to Projects</div>
      </Link>
    </div>
  );
}