import type { Project } from "@/components/data";
import { ProjectCard } from "@/components/projects/ProjectCard";

type ProjectGridProps = {
  projects: Project[];
  sigTitle: string;
  style: {
    cardBorder: string;
    hoverBorder: string;
    statusChip: string;
    button: string;
    tag: string;
  };
};

export function ProjectGrid({ projects, sigTitle, style }: ProjectGridProps) {
  if (projects.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-white/20 bg-card/70 p-6">
        <p className="text-sm text-muted">No projects added yet for {sigTitle}.</p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {projects.map((project) => (
        <ProjectCard key={project.slug} project={project} style={style} />
      ))}
    </div>
  );
}
