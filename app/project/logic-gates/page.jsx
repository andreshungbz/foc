import Link from "next/link";

export const metadata = {
  title: "Logic Gates",
  description:
    "A web application that demonstrates the functionality of logic gates.",
};

export default function LogicGates() {
  return (
    <div>
      <h1>Logic Gates Demonstration</h1>
      <Link href="/project">
        <div className="backlink">⬅️ Back to Projects</div>
      </Link>
    </div>
  );
}
