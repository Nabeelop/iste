import Link from "next/link";
import { ProjectGrid } from "@/components/projects/ProjectGrid";
import { getAllSigs, getProjectsForSig } from "@/lib/cms";
import { getSigTemplateStyle } from "@/lib/project-templates";
import { cn } from "@/lib/utils";

export default async function ProjectsPage() {
  const sigs = await getAllSigs();
  const projectsBySig = await Promise.all(
    sigs.map(async (sig) => ({
      sig,
      projects: await getProjectsForSig(sig.slug),
    }))
  );

  return (
    <main className="min-h-screen px-6 pt-30 pb-16">
      <section className="mx-auto max-w-6xl">
        <div className="rounded-3xl border border-white/10 bg-card/90 p-8 md:p-10">
          <p className="mb-2 inline-flex rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
            ISTE NITK
          </p>
          <h1 className="text-4xl font-bold font-display text-white md:text-5xl">
            Projects
          </h1>
          <p className="mt-3 max-w-3xl text-muted">
            Browse projects by SIG. Each SIG now has a distinct project visual
            template so sections feel unique while keeping data structured.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {sigs.map((sig) => (
              <a
                key={sig.slug}
                href={`#${sig.slug}`}
                className="rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs font-semibold text-gray-200 transition-colors hover:border-primary/40 hover:text-primary"
              >
                {sig.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto mt-10 max-w-6xl space-y-10">
        {projectsBySig.map(({ sig, projects }) => {
          const style = getSigTemplateStyle(sig.projectTemplate, sig.slug);
          return (
            <div key={sig.slug} id={sig.slug} className="scroll-mt-28">
              <div className="relative mb-5 flex items-center justify-between overflow-hidden rounded-2xl border border-white/10 bg-card/80 px-5 py-4">
                <div className={cn("absolute inset-0 bg-gradient-to-r", style.sectionAccent)} />
                <div>
                  <h2 className="relative z-10 text-2xl font-bold font-display text-white">
                    {sig.title}
                  </h2>
                  <p className="relative z-10 text-sm text-muted">
                    {projects.length} project{projects.length === 1 ? "" : "s"}
                  </p>
                </div>
                <Link
                  href={`/sigs/${sig.slug}`}
                  className={cn(
                    "relative z-10 rounded-full border px-4 py-2 text-sm font-semibold transition-colors",
                    style.button
                  )}
                >
                  Visit SIG
                </Link>
              </div>

              <ProjectGrid projects={projects} sigTitle={sig.title} style={style} />
            </div>
          );
        })}
      </section>
    </main>
  );
}
