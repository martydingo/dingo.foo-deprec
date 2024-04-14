import { Project } from "@payload-types";
import ProjectCard from "./ProjectCard";

export default function ProjectGrid({ projects }: { projects: Project[] }) {
    //
    return (
        <div className="flex flex-wrap gap-8">
            {
                projects.map((project, index) => {
                    return (
                        <div key={`project-grid-${index}`}>
                            <ProjectCard project={project} />
                        </div>
                    )
                })
            }
        </div>
    )
}