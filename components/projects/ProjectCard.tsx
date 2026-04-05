import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/components/data";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  project: Project;
  style: {
    cardBorder: string;
    hoverBorder: string;
    statusChip: string;
    button: string;
    tag: string;
  };
};

export function ProjectCard({ project, style }: ProjectCardProps) {
  const contributors = project.leads;

  return (
    <article
      className={cn(
        "group overflow-hidden rounded-2xl border bg-card/90 transition-all duration-300 hover:-translate-y-1",
        style.cardBorder,
        style.hoverBorder
      )}
    >
      <div className="relative h-44 w-full overflow-hidden">
        <Image
          src={project.coverImage}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-5">
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <span
            className={cn(
              "rounded-full border px-3 py-1 text-xs font-semibold",
              style.statusChip
            )}
          >
            {project.status}
          </span>
          <span className="text-xs text-muted">{project.year}</span>
        </div>

        <h3 className="text-lg font-bold text-white">{project.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          {project.shortDescription}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.techStack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className={cn(
                "rounded-full border px-2.5 py-1 text-[11px] font-semibold",
                style.tag
              )}
            >
              {tech}
            </span>
          ))}
        </div>

        <p className="mt-4 text-xs text-muted">
          <span className="font-semibold text-white">Contributors:</span>{" "}
          {contributors.slice(0, 3).join(", ")}
          {contributors.length > 3 ? " + more" : ""}
        </p>

        <div className="mt-5 flex flex-wrap items-center gap-3">
          <Link
            href={`/projects/${project.slug}`}
            className={cn(
              "inline-flex rounded-full border px-4 py-2 text-sm font-semibold transition-colors",
              style.button
            )}
          >
            View Project
          </Link>

          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="text-xs font-semibold text-muted transition-colors hover:text-white"
            >
              GitHub
            </a>
          ) : null}

          {project.demoUrl ? (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer"
              className="text-xs font-semibold text-muted transition-colors hover:text-white"
            >
              Demo
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
