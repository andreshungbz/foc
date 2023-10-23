import Link from "next/link";

export default function BMICalculator() {
  return (
    <div>
      <h1>Body Mass Index (BMI) Calculator</h1>
      <Link href="/project">
        <div className="backlink">⬅️ Back to Projects</div>
      </Link>
    </div>
  );
}
