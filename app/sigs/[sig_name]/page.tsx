import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectsForSig, getSingleSig } from "@/lib/cms";

export default async function SigPage({
  params,
}: {
  params: Promise<{ sig_name: string }>;
}) {
  const { sig_name } = await params;
  const sig = await getSingleSig(sig_name);

  if (!sig) {
    notFound();
  }

  const sigProjects = await getProjectsForSig(sig.slug);

  return (
    <main className="min-h-screen px-6 pt-30 pb-16">
      <section className="mx-auto max-w-6xl">
        <div className="rounded-3xl border border-white/10 bg-card/90 p-8 md:p-10">
          <div className="grid gap-8 md:grid-cols-[220px_1fr] md:items-center">
            <div className="relative mx-auto h-44 w-44 md:h-52 md:w-52">
              <Image
                src={sig.image}
                alt={sig.title}
                fill
                className="rounded-2xl object-cover"
              />
            </div>
            <div>
              <p className="mb-2 inline-flex rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
                Special Interest Group
              </p>
              <h1 className="text-4xl font-bold font-display text-white md:text-5xl">
                {sig.title}
              </h1>
              <p className="mt-4 max-w-2xl text-muted">{sig.description}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-14 max-w-6xl">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold font-display text-white md:text-3xl">
            Projects
          </h2>
          <span className="text-sm text-muted">
            {sigProjects.length} published
          </span>
        </div>

        {sigProjects.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-white/20 bg-card/80 p-8 text-center">
            <p className="text-lg font-semibold text-white">
              No projects added yet
            </p>
            <p className="mt-2 text-sm text-muted">
              This SIG page is ready. Add projects and they will appear here in
              this uniform layout.
            </p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2">
            {sigProjects.map((project) => (
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
                <div className="p-6">
                  <div className="mb-3 flex items-center gap-2">
                    <span className="rounded-full border border-secondary/40 bg-secondary/10 px-3 py-1 text-xs font-semibold text-secondary">
                      {project.status}
                    </span>
                    <span className="text-xs text-muted">{project.year}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  <p className="mt-2 text-sm text-muted">
                    {project.shortDescription}
                  </p>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="mt-5 inline-flex items-center rounded-full border border-primary/40 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-white"
                  >
                    View project
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
  
