import Image from "next/image";
import { notFound } from "next/navigation";
import { ProjectGrid } from "@/components/projects/ProjectGrid";
import { getProjectsForSig, getSingleSig } from "@/lib/cms";
import { getSigTemplateStyle } from "@/lib/project-templates";
import { cn } from "@/lib/utils";

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
  const style = getSigTemplateStyle(sig.projectTemplate, sig.slug);

  return (
    <main className="min-h-screen px-6 pt-30 pb-16">
      <section className="mx-auto max-w-6xl">
        <div
          className={cn(
            "rounded-3xl border bg-card/90 p-8 md:p-10",
            style.cardBorder
          )}
        >
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
              <p
                className={cn(
                  "mb-2 inline-flex rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wide",
                  style.sigChip
                )}
              >
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

        <ProjectGrid projects={sigProjects} sigTitle={sig.title} style={style} />
      </section>
    </main>
  );
}
  
