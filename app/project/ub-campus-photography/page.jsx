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
      <div className="mt-3 border-2 border-indigo-600 bg-indigo-50 p-3">
        <p className="m-0">
          This is my personal project that I did for CS50. You can find the
          project{" "}
          <a
            href="https://ub-campus-photography.vercel.app/"
            target="_blank"
            className="text-indigo-600 underline hover:text-indigo-800"
          >
            here
          </a>
          !
        </p>
      </div>
    </div>
  );
}
