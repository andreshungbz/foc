import Link from "next/link";

export default function UBCampusPhotography() {
  return (
    <div>
      <h1>University of Belize (UB) Campus Photography</h1>
      <Link href="/project">
        <div className="backlink">⬅️ Back to Projects</div>
      </Link>
    </div>
  );
}
