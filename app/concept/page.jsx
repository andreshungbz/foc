import { concepts } from "@/utils/data.js";
import ConceptItem from "@/components/ConceptItem";

export const metadata = {
  title: "Concept",
  description:
    "Presentations by students on various concepts in the Fundamentals of Computing course [CMPS1134-2]",
};

export default function Concept() {
  return (
    <div>
      <h1>Concept</h1>
      <p>
        Throughout the course of the Fundamentals of Computing course, students
        are required to present on a particular section in the textbook,
        Computer Science: An Overview (11th edition). This assessment is
        intended for the student to improve their presentation skills while
        learning about required concepts. Below are the presentations for our
        dev team&apos;s concepts for the 2023-1 semester.
      </p>
      {concepts.map((concept) => {
        return <ConceptItem key={concept.name} {...concept} />;
      })}
    </div>
  );
}
