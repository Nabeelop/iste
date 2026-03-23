import Image from "next/image";
import Link from "next/link";
import { getAllSigs, getProjectsForSig, isUsingStrapi } from "@/lib/cms";

export default async function ProjectsPage() {
  const sigs = await getAllSigs();
  const usingStrapi = isUsingStrapi();
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
            Browse projects by SIG. As project heads add more work, each entry
            will appear here in the same uniform template.
          </p>
          <p className="mt-2 text-xs text-muted">
            Source: {usingStrapi ? "Strapi CMS" : "Local fallback data"}
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
        {projectsBySig.map(({ sig, projects }) => (
            <div key={sig.slug} id={sig.slug} className="scroll-mt-28">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold font-display text-white">
                    {sig.title}
                  </h2>
                  <p className="text-sm text-muted">
                    {projects.length} project{projects.length === 1 ? "" : "s"}
                  </p>
                </div>
                <Link
                  href={`/sigs/${sig.slug}`}
                  className="rounded-full border border-primary/40 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-white"
                >
                  Visit SIG
                </Link>
              </div>

              {projects.length === 0 ? (
                <div className="rounded-2xl border border-dashed border-white/20 bg-card/70 p-6">
                  <p className="text-sm text-muted">
                    No projects added yet for {sig.title}.
                  </p>
                </div>
              ) : (
                <div className="grid gap-6 md:grid-cols-2">
                  {projects.map((project) => (
                    <article
                      key={project.slug}
                      className="group overflow-hidden rounded-2xl border border-white/10 bg-card/90 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40"
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
                        <div className="mb-2 flex items-center gap-2">
                          <span className="rounded-full border border-secondary/40 bg-secondary/10 px-3 py-1 text-xs font-semibold text-secondary">
                            {project.status}
                          </span>
                          <span className="text-xs text-muted">{project.year}</span>
                        </div>
                        <h3 className="text-lg font-bold text-white">
                          {project.title}
                        </h3>
                        <p className="mt-2 text-sm text-muted">
                          {project.shortDescription}
                        </p>
                        <Link
                          href={`/projects/${project.slug}`}
                          className="mt-4 inline-flex rounded-full border border-primary/40 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-white"
                        >
                          View Project
                        </Link>
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </div>
        ))}
      </section>
    </main>
  );
}
