import BMICalculator from "@/components/project/BMICalculator";
import Link from "next/link";

export const metadata = {
  title: "BMI Calculator",
  description: "A web application that calculates your Body Mass Index (BMI).",
};

export default function BMICalculatorPage() {
  return (
    <div>
      <h1>Body Mass Index (BMI) Calculator</h1>
      <Link href="/project">
        <div className="backlink">⬅️ Back to Projects</div>
      </Link>
      <BMICalculator />
    </div>
  );
}
