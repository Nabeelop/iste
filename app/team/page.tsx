"use client";
import { adminCore, auxCore, executiveCore } from "@/components/data"
import SpecialCard from "@/components/FacAd";
import MemberCard, { Member } from "@/components/MemberCard"
import { useState } from "react"
import { TeamMemberDetail, TeamMemberDetailCard } from "@/components/ui/team-member-detail-card";
import Link from "next/link";
import { HomeSectionLink } from "@/components/shared/HomeSectionLink";

const coreMembers: TeamMemberDetail[] = [
  {
    name: "Aarav Kulkarni",
    role: "Chairperson",
    description:
      "Leads chapter-wide strategy, drives cross-SIG collaboration, and ensures that every flagship initiative aligns with ISTE NITK's long-term vision and student impact goals.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
    linkedin: "https://www.linkedin.com/",
    email: "aarav.kulkarni@istenitk.in",
  },
  {
    name: "Ishita Menon",
    role: "General Secretary",
    description:
      "Coordinates chapter operations, documentation, and inter-team communication while maintaining execution quality across events, project milestones, and external collaborations.",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=800&auto=format&fit=crop",
    linkedin: "https://www.linkedin.com/",
    email: "ishita.menon@istenitk.in",
  },
  {
    name: "Ritvik Rao",
    role: "Technical Head",
    description:
      "Mentors technical teams on architecture decisions, development standards, and deployment workflows while enabling members to ship reliable products at scale.",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop",
    linkedin: "https://www.linkedin.com/",
    email: "ritvik.rao@istenitk.in",
  },
  {
    name: "Naina Deshpande",
    role: "Design and Media Lead",
    description:
      "Shapes chapter identity through design systems, communication kits, and storytelling assets that keep event branding, outreach, and social media presence cohesive.",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=800&auto=format&fit=crop",
    linkedin: "https://www.linkedin.com/",
    email: "naina.deshpande@istenitk.in",
  },
];

const auxiliaryMembers: TeamMemberDetail[] = [
  {
    name: "Pranav Shetty",
    role: "Events Coordinator",
    description:
      "Plans and executes workshops, hackathons, and signature chapter experiences by coordinating logistics, partnerships, and high-quality participant engagement.",
    image:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=800&auto=format&fit=crop",
    linkedin: "https://www.linkedin.com/",
    email: "pranav.shetty@istenitk.in",
  },
  {
    name: "Harini Bhat",
    role: "Outreach Lead",
    description:
      "Builds strategic industry and campus partnerships, manages sponsorship communications, and expands chapter opportunities through targeted outreach campaigns.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop",
    linkedin: "https://www.linkedin.com/",
    email: "harini.bhat@istenitk.in",
  },
  {
    name: "Aditya Pai",
    role: "Operations Manager",
    description:
      "Keeps chapter execution smooth by managing timelines, resource planning, and on-ground support for internal workflows and large-scale public events.",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=800&auto=format&fit=crop",
    linkedin: "https://www.linkedin.com/",
    email: "aditya.pai@istenitk.in",
  },
  {
    name: "Saanvi Kapoor",
    role: "Community Lead",
    description:
      "Strengthens member experience through onboarding, peer support systems, and community initiatives that help students learn, contribute, and grow consistently.",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=800&auto=format&fit=crop",
    linkedin: "https://www.linkedin.com/",
    email: "saanvi.kapoor@istenitk.in",
  },
];

const membersOnly = [
  "Akshay B",
  "Ananya S",
  "Arjun K",
  "Bhuvan M",
  "Charith P",
  "Devika R",
  "Gokul N",
  "Hrishikesh A",
  "Ira J",
  "Jeevan T",
  "Keerthi V",
  "Lakshya G",
  "Megha P",
  "Nikhil S",
  "Prithvi R",
  "Raghav H",
  "Sakshi D",
  "Tanmay N",
  "Vaishnavi U",
  "Yash M",
];

export default function TeamPage() {
  return (
    <div className="w-full bg-transparent text-white">
      <section id="team" className="relative z-20 border-b border-white/5 bg-transparent px-4 pb-14 pt-28 text-center sm:px-6 sm:pb-18 sm:pt-34">
        <div className="mx-auto max-w-5xl space-y-6">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-7xl">
            The <span className="text-teal-400">Team</span>
          </h1>
          <div className="mx-auto h-1 w-24 rounded-full bg-linear-to-r from-teal-400 to-transparent" />
          <p className="mx-auto max-w-3xl text-base leading-relaxed text-slate-300 sm:text-lg">
            Meet the people who build, lead, and scale ISTE NITK. From strategy to execution,
            this team powers every initiative across events, projects, and community impact.
          </p>
          <div className="pt-2">
            <HomeSectionLink
              href="/#home"
              className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm font-bold uppercase tracking-wide text-teal-300 transition-all duration-300 hover:border-teal-400/60 hover:bg-teal-400/10 hover:text-teal-200"
            >
              Return Back to Home
              <span aria-hidden="true">↗</span>
            </HomeSectionLink>
          </div>
        </div>
      </section>

      <section className="relative z-20 border-t border-white/5 bg-transparent py-16 sm:py-24" id="core">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="text-center text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            The <span className="text-teal-400">Core</span>
          </h2>
          <div className="mx-auto mb-12 mt-4 h-1 w-24 rounded-full bg-linear-to-r from-teal-400 to-transparent sm:mb-16" />
          <div className="space-y-8">
            {coreMembers.map((member, index) => (
              <TeamMemberDetailCard key={member.name} member={member} reverse={index % 2 === 1} />
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-20 border-t border-white/5 bg-transparent py-16 sm:py-24" id="events">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="text-center text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            Auxiliary <span className="text-teal-400">Core</span>
          </h2>
          <div className="mx-auto mb-12 mt-4 h-1 w-24 rounded-full bg-linear-to-r from-teal-400 to-transparent sm:mb-16" />
          <div className="space-y-8">
            {auxiliaryMembers.map((member, index) => (
              <TeamMemberDetailCard key={member.name} member={member} reverse={index % 2 === 1} />
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-20 border-t border-white/5 bg-transparent py-16 sm:py-24" id="members">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="text-center text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            Executive <span className="text-teal-400">Members</span>
          </h2>
          <div className="mx-auto mb-10 mt-4 h-1 w-24 rounded-full bg-linear-to-r from-teal-400 to-transparent sm:mb-14" />
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {membersOnly.map((member) => (
              <div
                key={member}
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-center text-sm font-semibold tracking-wide text-slate-200"
              >
                {member}
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="relative z-20 border-t border-white/14 bg-black/28 pb-10 pt-14 text-slate-400 shadow-[inset_0_1px_0_rgba(45,212,191,0.15)] sm:border-white/12 sm:bg-black/25 sm:pt-20" id="contact">
        <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-[1.5px] bg-linear-to-r from-transparent via-teal-300/65 to-transparent" />
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 sm:px-6 md:grid-cols-3 md:gap-16">
          <div className="space-y-6">
            <div className="text-4xl font-extrabold tracking-wider text-white">
              ISTE <span className="text-teal-400 drop-shadow-[0_0_10px_rgba(79,209,197,0.3)]">NITK</span>
            </div>
            <p className="text-base leading-relaxed text-slate-500">
              Pioneering Tech, Igniting Minds. Exploring the outer frontiers of technology, design,
              and innovation.
            </p>
            <div className="pt-2">
              <h4 className="border-l-2 border-teal-400 pl-4 text-sm font-bold uppercase tracking-widest text-white">Socials</h4>
              <div className="mt-4 flex flex-wrap items-center gap-4">
                <a href="#" aria-label="X" className="rounded-full bg-white/5 p-3 text-slate-400 transition-all duration-300 hover:bg-teal-400/20 hover:text-teal-400">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                </a>
                <a href="#" aria-label="Instagram" className="rounded-full bg-white/5 p-3 text-slate-400 transition-all duration-300 hover:bg-teal-400/20 hover:text-teal-400">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.29.96.953 1.242 2.235 1.306 3.593.058 1.284.07 1.65.07 4.884 0 3.235-.012 3.603-.07 4.883-.064 1.358-.346 2.64-1.306 3.593-.975.958-2.242 1.228-3.608 1.29-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.332-3.608-1.29-.96-.953-1.242-2.235-1.306-3.593-.058-1.284-.07-1.65-.07-4.884 0-3.235.012-3.603.07-4.883.064-1.359.346-2.64 1.306-3.593.975-.958 2.242-1.228 3.608-1.29 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-1.28.058-2.152.261-2.917.558-.79.307-1.46.717-2.128 1.385s-1.078 1.338-1.385 2.128c-.297.765-.5 1.637-.558 2.917-.058 1.28-.072 1.688-.072 4.947s.014 3.667.072 4.947c.058 1.28.261 2.152.558 2.917.307.79.717 1.46 1.385 2.128s1.338 1.078 2.128 1.385c.765.297 1.637.5 2.917.558 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.28-.058 2.152-.261 2.917-.558.79-.307 1.46-.717 2.128-1.385s1.078-1.338 1.385-2.128c.297-.765.5-1.637.558-2.917.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.058-1.28-.261-2.152-.558-2.917a4.91 4.91 0 00-1.385-2.128c-.668-.668-1.338-1.078-2.128-1.385-.765-.297-1.637-.5-2.917-.558-1.28-.058-1.688-.072-4.947-.072zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" /></svg>
                </a>
                <a href="#" aria-label="LinkedIn" className="rounded-full bg-white/5 p-3 text-slate-400 transition-all duration-300 hover:bg-teal-400/20 hover:text-teal-400">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" /></svg>
                </a>
                <a href="#" aria-label="Facebook" className="rounded-full bg-white/5 p-3 text-slate-400 transition-all duration-300 hover:bg-teal-400/20 hover:text-teal-400">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12.073C22 6.503 17.523 2 12 2S2 6.503 2 12.073c0 5.03 3.657 9.2 8.438 9.957v-7.042H7.898v-2.915h2.54V9.845c0-2.52 1.492-3.914 3.777-3.914 1.094 0 2.238.196 2.238.196v2.476h-1.26c-1.243 0-1.63.773-1.63 1.566v1.88h2.773l-.443 2.915h-2.33v7.042C18.343 21.273 22 17.103 22 12.073z" /></svg>
                </a>
                <a href="#" aria-label="GitHub" className="rounded-full bg-white/5 p-3 text-slate-400 transition-all duration-300 hover:bg-teal-400/20 hover:text-teal-400">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .5C5.649.5.5 5.649.5 12a11.5 11.5 0 008 10.93c.586.108.8-.255.8-.567v-2.02c-3.252.707-3.938-1.566-3.938-1.566-.533-1.356-1.302-1.718-1.302-1.718-1.065-.729.081-.714.081-.714 1.178.083 1.798 1.209 1.798 1.209 1.046 1.792 2.744 1.275 3.413.975.106-.758.41-1.275.746-1.568-2.596-.295-5.326-1.298-5.326-5.778 0-1.276.456-2.319 1.205-3.137-.12-.296-.523-1.487.114-3.1 0 0 .984-.315 3.225 1.198A11.22 11.22 0 0112 6.175c.994.005 1.995.134 2.93.393 2.24-1.513 3.223-1.198 3.223-1.198.638 1.613.235 2.804.116 3.1.75.818 1.203 1.86 1.203 3.137 0 4.492-2.735 5.48-5.34 5.77.422.364.798 1.08.798 2.177v3.227c0 .315.212.68.806.565A11.5 11.5 0 0023.5 12C23.5 5.649 18.351.5 12 .5z" /></svg>
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <h4 className="border-l-2 border-teal-400 pl-4 text-sm font-bold uppercase tracking-widest text-white">Quick Links</h4>
            <nav className="flex flex-col gap-3 text-base font-medium">
              <HomeSectionLink href="/#home" className="transition-colors hover:text-teal-400">Home</HomeSectionLink>
              <HomeSectionLink href="/#sigs" className="transition-colors hover:text-teal-400">SIGs</HomeSectionLink>
              <Link href="/team#team" className="transition-colors hover:text-teal-400">Team</Link>
              <a href="#" className="transition-colors hover:text-teal-400">Projects</a>
              <a href="#" className="transition-colors hover:text-teal-400">Events</a>
            </nav>
          </div>

          <div className="space-y-6">
            <h4 className="border-l-2 border-teal-400 pl-4 text-sm font-bold uppercase tracking-widest text-white">Contact</h4>
            <div className="space-y-4">
              <a
                href="mailto:iste@nitk.edu.in"
                aria-label="Email ISTE NITK"
                className="group flex items-center gap-3 rounded-xl bg-white/5 p-3 text-slate-300 transition-all duration-300 hover:bg-teal-400/20 hover:text-teal-300"
              >
                <span className="rounded-full bg-white/10 p-2 text-slate-300 transition-colors group-hover:text-teal-200">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 6.75A2.25 2.25 0 015.25 4.5h13.5A2.25 2.25 0 0121 6.75v10.5A2.25 2.25 0 0118.75 19.5H5.25A2.25 2.25 0 013 17.25V6.75z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3.75 7.5l8.25 6 8.25-6" />
                  </svg>
                </span>
                <span className="text-sm font-medium tracking-wide">iste@nitk.edu.in</span>
              </a>
              <a
                href="tel:+910000000000"
                aria-label="Call ISTE NITK"
                className="group flex items-center gap-3 rounded-xl bg-white/5 p-3 text-slate-300 transition-all duration-300 hover:bg-teal-400/20 hover:text-teal-300"
              >
                <span className="rounded-full bg-white/10 p-2 text-slate-300 transition-colors group-hover:text-teal-200">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M2.25 5.625c0-1.035.84-1.875 1.875-1.875h2.194c.89 0 1.658.627 1.837 1.499l.592 2.9a1.875 1.875 0 01-.532 1.76L6.79 11.337a15.66 15.66 0 005.873 5.873l1.428-1.427a1.875 1.875 0 011.76-.532l2.9.592c.872.178 1.499.947 1.499 1.837v2.194c0 1.035-.84 1.875-1.875 1.875H18C9.025 21.75 2.25 14.975 2.25 6V5.625z" />
                  </svg>
                </span>
                <span className="text-sm leading-tight">
                  <span className="block font-semibold text-slate-200">Placeholder Name · Role</span>
                  <span className="block text-slate-400 transition-colors group-hover:text-teal-200">+91 00000 00000</span>
                </span>
              </a>
            </div>
            <a
              href="https://www.google.com/maps/search/?api=1&query=NITK+Surathkal,+Srinivasnagar,+Mangaluru,+Karnataka+575025"
              target="_blank"
              rel="noreferrer"
              className="group block rounded-xl bg-white/5 p-4 text-sm leading-relaxed text-slate-400 transition-all duration-300 hover:bg-teal-400/20 hover:text-teal-400"
            >
              <div className="flex items-start gap-3">
                <svg className="mt-0.5 h-5 w-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 21s6-5.686 6-11a6 6 0 10-12 0c0 5.314 6 11 6 11z" />
                  <circle cx="12" cy="10" r="2.25" fill="currentColor" />
                </svg>
                <div>
                  <p className="font-semibold text-slate-300 transition-colors group-hover:text-teal-300">NITK Surathkal</p>
                  <p>Srinivasnagar Post, Surathkal</p>
                  <p>Mangaluru, Karnataka 575025</p>
                </div>
              </div>
            </a>
          </div>
        </div>

        <div className="mt-14 border-t border-white/5 pt-8 text-center text-sm font-medium tracking-wider sm:mt-20 sm:pt-10">
          <p className="flex items-center justify-center gap-2 text-slate-500">
            Made with <span className="animate-pulse text-xl text-teal-400 drop-shadow-[0_0_8px_rgba(79,209,197,0.8)]">♥</span> by the ISTE Web Team
          </p>
        </div>
      </footer>
      
    </div>
  );
}
