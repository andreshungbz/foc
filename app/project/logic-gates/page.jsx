import NOTGate from "@/components/project/NOTGate";
import ANDGate from "@/components/project/ANDGate";
import ORGate from "@/components/project/ORGate";
import XORGate from "@/components/project/XORGate";
import Link from "next/link";

export const metadata = {
  title: "Logic Gates",
  description:
    "A web application that demonstrates the functionality of logic gates.",
};

export default function LogicGatesPage() {
  return (
    <div>
      <h1>Logic Gates Demonstration</h1>
      <Link href="/project">
        <div className="backlink">⬅️ Back to Projects</div>
      </Link>
      <NOTGate />
      <ANDGate />
      <ORGate />
      <XORGate />
    </div>
  );
}
