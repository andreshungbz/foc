import Link from "next/link";

export const metadata = {
  title: "UB Campus Photography",
  description:
    "A web application that displays photographs of the University of Belize (UB) campus.",
};

export default function UBCampusPhotographyPage() {
  return (
    <div>
      <h1>University of Belize (UB) Campus Photography</h1>
      <Link href="/project">
        <div className="backlink">⬅️ Back to Projects</div>
      </Link>
    </div>
  );
}
