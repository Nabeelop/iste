import { Mail } from "lucide-react";
import Image from "next/image";

export interface TeamMemberDetail {
  name: string;
  role: string;
  description: string;
  image: string;
  linkedin: string;
  email: string;
}

interface TeamMemberDetailCardProps {
  member: TeamMemberDetail;
  reverse?: boolean;
}

const patchStyles = [
  {
    primary: "top-0 right-0 -mt-10 -mr-10 h-32 w-32 bg-teal-500/10",
    secondary: "bottom-0 left-10 -mb-10 h-24 w-24 bg-cyan-400/10",
  },
  {
    primary: "top-6 left-0 -ml-8 h-28 w-28 bg-teal-400/10",
    secondary: "bottom-0 right-8 -mb-10 h-24 w-24 bg-emerald-300/10",
  },
  {
    primary: "top-1/2 right-0 -mr-10 h-28 w-28 -translate-y-1/2 bg-cyan-300/10",
    secondary: "bottom-2 left-1/3 h-20 w-20 bg-teal-500/10",
  },
  {
    primary: "top-0 left-1/2 -mt-10 h-30 w-30 -translate-x-1/2 bg-teal-500/10",
    secondary: "bottom-0 right-0 -mb-8 -mr-8 h-24 w-24 bg-cyan-400/10",
  },
] as const;

function getPatchIndex(seedText: string) {
  let hash = 0;
  for (let i = 0; i < seedText.length; i += 1) {
    hash = (hash * 31 + seedText.charCodeAt(i)) % 2147483647;
  }
  return hash % patchStyles.length;
}

export function TeamMemberDetailCard({ member, reverse = false }: TeamMemberDetailCardProps) {
  const patchIndex = getPatchIndex(`${member.name}-${member.role}`);
  const patch = patchStyles[patchIndex];

  return (
    <article className="relative overflow-hidden rounded-3xl border border-white/10 bg-[linear-gradient(135deg,rgba(3,14,14,0.92),rgba(2,8,18,0.9))] p-6 sm:p-8">
      <div className={`absolute rounded-full blur-2xl ${patch.primary}`} />
      <div className={`absolute rounded-full blur-xl ${patch.secondary}`} />

      <div className={`relative z-10 flex flex-col gap-6 lg:items-center ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"}`}>
        <div className="shrink-0">
          <div className="h-44 w-44 overflow-hidden rounded-3xl border border-white/15 bg-white/5 shadow-[0_0_24px_rgba(20,241,217,0.16)] sm:h-52 sm:w-52">
            <Image
              src={member.image}
              alt={`${member.name} portrait`}
              width={208}
              height={208}
              sizes="(max-width: 640px) 176px, 208px"
              unoptimized
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="flex-1 space-y-4 text-left">
          <div>
            <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">{member.name}</h3>
            <p className="mt-2 text-sm font-bold uppercase tracking-[0.2em] text-teal-400">{member.role}</p>
          </div>

          <p className="max-w-3xl text-base leading-relaxed text-slate-300">{member.description}</p>

          <div className="flex flex-wrap items-center gap-3 pt-1">
            <a
              href={member.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition-colors hover:border-teal-400/60 hover:bg-teal-400/10 hover:text-teal-200"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
              </svg>
              LinkedIn
            </a>
            <a
              href={`mailto:${member.email}`}
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition-colors hover:border-teal-400/60 hover:bg-teal-400/10 hover:text-teal-200"
            >
              <Mail className="h-4 w-4" />
              Email
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}