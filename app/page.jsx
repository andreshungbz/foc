import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Fundamentals of Computing",
  description:
    "Final project for the University of Belize Fundamentals of Computing course [CMPS1134-2]",
};

export default function Home() {
  return (
    <div>
      <h1>Course</h1>
      <div className="flexsection">
        <Image
          src="/placeholder.jpeg"
          width={500}
          height={300}
          alt="placeholder"
          className="image"
        />
        <div className="flex flex-col">
          <p>
            This course is an introduction to the fundamentals of Computer
            Science that will provide students with a foundation for future
            courses in Computer Science. The course is a broad survey of the
            discipline through topics that allow students to understand the
            capabilities of computer systems in terms of: the computer
            architecture; operating systems and computer networks; software and
            software development; data organization and visualization; and the
            potential of computing machines.
          </p>
          <p>
            The Fundamentals of Computing [CMPS1134] course is the course
            offered by the University of Belize as one of the first professional
            core courses for students majoring in Information Technology.
          </p>
          <Link href="/team">
            <div className="mb-4 border-2 border-lime-600 bg-lime-100 p-3 hover:bg-lime-200">
              <p className="m-0 text-center">
                Click here to check out our other group member&apos;s FOC
                projects!
              </p>
            </div>
          </Link>
        </div>
      </div>
      <h1>Course Intended Learning Outcomes (CILOs)</h1>
      <ol>
        <li>
          Discuss several important application areas of computer science which
          include Data, Operating Systems, Networking, Internet, Algorithms,
          Programming Languages, and Software Engineering.
        </li>
        <li>
          Describe and differentiate between the major issues in several sub
          disciplines of computer science that include: Computer Architecture,
          OSs, Networks, Software, Data, and the Potential of Machines.
        </li>
        <li>
          Analyze algorithmically, classify problems into a type and choose a
          suitable algorithmic approach for yielding a solution, and phrasing
          solutions to such problems in a logical and precise way.
        </li>
        <li>
          Construct programs using computer languages to accomplish a variety of
          tasks and write clear and concise documentation for such programs.
        </li>
        <li>
          Construct data representations using lists, scalars, and trees; and
          evaluate and defend their choices.
        </li>
        <li>
          Compare the complexity of solutions and accurately evaluate the
          relative costs of the solutions.
        </li>
      </ol>
    </div>
  );
}
