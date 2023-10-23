import { projects } from "@/utils/data";
import ProjectItem from "@/components/ProjectItem";

export const metadata = {
  title: "Project",
  description: "Various projects in Javascript",
};

export default function Project() {
  return (
    <div>
      <h1>Project</h1>
      <p className="mb-4">
        The projects below deomonstrate the use of the Javascript programming
        language (and React framework) to create useful programs for the web.
      </p>
      {projects.map((project) => {
        return (
          <ProjectItem
            key={project.id}
            name={project.name}
            link={project.link}
            special={project?.special}
          />
        );
      })}
    </div>
  );
}
