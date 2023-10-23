import Link from "next/link";

export default function ProjectItem({ name, link, special = false }) {
  return (
    <Link href={link}>
      <div className={special ? "project special" : "project"}>
        <h2>{name}</h2>
      </div>
    </Link>
  );
}
