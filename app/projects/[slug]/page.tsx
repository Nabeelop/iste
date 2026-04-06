import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectDetail, getSingleProject, getSingleSig } from "@/lib/cms";
import { getSigTemplateStyle } from "@/lib/project-templates";
import { cn } from "@/lib/utils";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = await getSingleProject(slug);

  if (!project) {
    notFound();
  }

  const sig = await getSingleSig(project.sig);
  const detail = await getProjectDetail(slug);
  const style = getSigTemplateStyle(sig?.projectTemplate, sig?.slug ?? project.sig);
  const mentors = detail?.mentors ?? project.leads;
  const mentees = detail?.mentees ?? [];
  const detailCardClass = cn(
    "rounded-2xl border bg-gradient-to-b from-white/10 to-white/5 p-5 backdrop-blur-sm",
    style.cardBorder
  );
  const detailTitleClass = "text-base font-semibold text-white";
  const detailListClass = "mt-3 space-y-2 text-sm leading-relaxed text-muted";
  const hasStructuredSections =
    detail?.problem ||
    detail?.about ||
    (detail?.objectives && detail.objectives.length > 0) ||
    (detail?.methodology && detail.methodology.length > 0) ||
    (detail?.outcomes && detail.outcomes.length > 0) ||
    (detail?.futureScope && detail.futureScope.length > 0) ||
    (detail?.components && detail.components.length > 0);
  const toParagraph = (items: string[]) =>
    items
      .map((item) => item.trim().replace(/^[\-\u2022\s]+/, ""))
      .join(" ");
  const toDetailedNarrative = (
    items: string[],
    intro: string,
    outro?: string
  ) => {
    const cleaned = items
      .map((item) => item.trim().replace(/^[\-\u2022\s]+/, ""))
      .filter(Boolean);

    if (cleaned.length === 0) return "";
    if (cleaned.length === 1) {
      return `${intro} ${cleaned[0]}.${outro ? ` ${outro}` : ""}`;
    }

    const formattedBody = cleaned
      .map((item, index) => {
        if (index === 0) return item;
        if (index === cleaned.length - 1) return `and ${item}`;
        return item;
      })
      .join(", ");

    return `${intro} ${formattedBody}.${outro ? ` ${outro}` : ""}`;
  };

  return (
    <main className="min-h-screen px-6 pt-30 pb-16">
      <article className="mx-auto max-w-5xl">
        <div className="mb-5">
          <Link
            href="/projects"
            className={cn(
              "inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition-colors",
              style.button
            )}
          >
            <span aria-hidden="true">←</span>
            Back to Projects
          </Link>
        </div>
        <div className={cn("overflow-hidden rounded-3xl border bg-card/90", style.cardBorder)}>
          <div className="relative h-64 w-full md:h-80">
            <Image
              src={project.coverImage}
              alt={project.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className={cn("absolute inset-0 bg-gradient-to-r", style.sectionAccent)} />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="mb-3 flex flex-wrap items-center gap-2">
                {sig ? (
                  <Link
                    href={`/sigs/${sig.slug}`}
                    className={cn("rounded-full border px-3 py-1 text-xs font-semibold", style.sigChip)}
                  >
                    {sig.title}
                  </Link>
                ) : null}
                <span className={cn("rounded-full border px-3 py-1 text-xs font-semibold", style.statusChip)}>
                  {project.status}
                </span>
                <span className="text-xs font-medium text-gray-200">
                  {project.year}
                </span>
              </div>
              <h1 className="text-3xl font-bold font-display text-white md:text-4xl">
                {project.title}
              </h1>
            </div>
          </div>

          <div className="grid gap-10 p-8 md:grid-cols-[1fr_280px]">
            <section>
              <h2 className="text-xl font-semibold text-white">Project Overview</h2>
              <div className={cn("mt-3 border-l-4 pl-4", style.sigChip)}>
                <p className="leading-relaxed text-muted">{project.description}</p>
              </div>

              {detail?.about ? (
                <div className={cn("mt-6", detailCardClass)}>
                  <h3 className={detailTitleClass}>About This Project</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{detail.about}</p>
                </div>
              ) : null}

              <h3 className="mt-8 text-lg font-semibold text-white">Tech Stack</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className={cn("rounded-full border px-3 py-1 text-xs font-semibold", style.tag)}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <h3 className="mt-8 text-lg font-semibold text-white">Team</h3>
              <div className={cn("mt-3", detailCardClass)}>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                    <p className="text-xs font-semibold uppercase tracking-wide text-white/80">Mentors</p>
                    <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-sm text-muted">
                      {mentors.map((person) => (
                        <li key={`mentor-${person}`}>{person}</li>
                      ))}
                    </ol>
                  </div>

                  <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                    <p className="text-xs font-semibold uppercase tracking-wide text-white/80">Mentees</p>
                    {mentees.length ? (
                      <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-sm text-muted">
                        {mentees.map((person) => (
                          <li key={`mentee-${person}`}>{person}</li>
                        ))}
                      </ol>
                    ) : (
                      <p className="mt-3 text-sm text-muted">No mentees listed for this project.</p>
                    )}
                  </div>
                </div>
              </div>

              {hasStructuredSections ? (
                <div className="mt-8 space-y-5">
                  {detail?.problem ? (
                    <section className={detailCardClass}>
                      <h3 className={detailTitleClass}>Problem Statement</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted">{detail.problem}</p>
                    </section>
                  ) : null}

                  {detail?.objectives?.length ? (
                    <section className={detailCardClass}>
                      <h3 className={detailTitleClass}>Objectives</h3>
                      <ul className={detailListClass}>
                        {detail.objectives.map((item) => (
                          <li key={item}>- {item}</li>
                        ))}
                      </ul>
                    </section>
                  ) : null}

                  {detail?.methodology?.length ? (
                    <section className={detailCardClass}>
                      <h3 className={detailTitleClass}>Methodology</h3>
                      <p className={detailListClass}>
                        {toDetailedNarrative(
                          detail.methodology,
                          "The project follows a structured implementation approach that includes",
                          "These steps are executed iteratively to validate assumptions, improve performance, and ensure reliable delivery of the final solution."
                        )}
                      </p>
                    </section>
                  ) : null}

                  {detail?.outcomes?.length ? (
                    <section className={detailCardClass}>
                      <h3 className={detailTitleClass}>Expected Outcome</h3>
                      <p className={detailListClass}>
                        {toDetailedNarrative(
                          detail.outcomes,
                          "By the end of this project, the team is expected to deliver",
                          "Together, these outcomes reflect both technical feasibility and practical value for demos, evaluation, and future scaling."
                        )}
                      </p>
                    </section>
                  ) : null}

                  {detail?.futureScope?.length ? (
                    <section className={detailCardClass}>
                      <h3 className={detailTitleClass}>Future Scope</h3>
                      <ul className={detailListClass}>
                        {detail.futureScope.map((item) => (
                          <li key={item}>- {item}</li>
                        ))}
                      </ul>
                    </section>
                  ) : null}

                  {detail?.components?.length ? (
                    <section className={detailCardClass}>
                      <h3 className={detailTitleClass}>Components and Budget</h3>
                      <div className="mt-3 space-y-2 text-sm text-muted">
                        {detail.components.map((item) => (
                          <p key={`${item.name}-${item.cost ?? "na"}`}>
                            <span className="font-semibold text-white">{item.name}</span>
                            {item.cost ? `: ${item.cost}` : ""}
                          </p>
                        ))}
                      </div>
                    </section>
                  ) : null}
                </div>
              ) : null}
            </section>

            <aside className={cn("rounded-2xl border bg-white/5 p-5", style.cardBorder)}>
              <h3 className="text-base font-semibold text-white">Project Snapshot</h3>
              <div className="mt-4 space-y-3 text-sm text-muted">
                <p>
                  <span className="font-semibold text-white">SIG:</span>{" "}
                  {sig?.title ?? "N/A"}
                </p>
                <p>
                  <span className="font-semibold text-white">Status:</span>{" "}
                  {project.status}
                </p>
                <p>
                  <span className="font-semibold text-white">Year:</span>{" "}
                  {project.year}
                </p>
                {detail?.budget ? (
                  <p>
                    <span className="font-semibold text-white">Budget:</span>{" "}
                    {detail.budget}
                  </p>
                ) : null}
              </div>

              <div className="mt-6 flex flex-col gap-3">
                <Link
                  href="/projects"
                  className={cn(
                    "rounded-full border px-4 py-2 text-center text-sm font-semibold transition-colors",
                    style.button
                  )}
                >
                  Back to Projects
                </Link>
                <Link
                  href={`/sigs/${project.sig}`}
                  className={cn(
                    "rounded-full border px-4 py-2 text-center text-sm font-semibold transition-colors",
                    style.button
                  )}
                >
                  View SIG Page
                </Link>
                {project.githubUrl ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className={cn(
                      "rounded-full border px-4 py-2 text-center text-sm font-semibold transition-colors",
                      style.button
                    )}
                  >
                    GitHub
                  </a>
                ) : null}
                {project.demoUrl ? (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className={cn(
                      "rounded-full border px-4 py-2 text-center text-sm font-semibold transition-colors",
                      style.button
                    )}
                  >
                    Live Demo
                  </a>
                ) : null}
              </div>
            </aside>
          </div>
        </div>
      </article>
    </main>
  );
}
