"use client";
import React from "react";
import { motion } from "motion/react";

interface Member {
  name: string;
  role: string;
  image: string;
}

interface TeamStripProps {
  members: Member[];
  title: string;
  borderClassName?: string;
}

export function TeamStrip({ members, title, borderClassName = "border-white/5" }: TeamStripProps) {
  // Automatically split members into rows of exactly 5
  const chunks = [];
  for (let i = 0; i < members.length; i += 5) {
    chunks.push(members.slice(i, i + 5));
  }

  return (
    <section
      className={`relative overflow-hidden border-t bg-transparent py-20 sm:py-32 ${borderClassName}`}
      style={{ contentVisibility: "auto", containIntrinsicSize: "1000px" }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, margin: "-100px" }} 
          transition={{ duration: 0.8 }}
          className="text-center text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl"
        >
          {title.split(" ")[0]} <span className="text-teal-400">{title.split(" ").slice(1).join(" ")}</span>
        </motion.h2>
        <div className="mx-auto mb-14 mt-4 h-1 w-24 rounded-full bg-linear-to-r from-teal-400 to-transparent sm:mb-20" />

        <div className="flex flex-col gap-10 items-center w-full">
          {chunks.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="flex w-full max-w-300 flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap sm:gap-6 lg:flex-nowrap lg:gap-8"
              style={{ contain: "layout paint" }}
            >
              {row.map((member, idx) => (
                <MemberCard key={idx} member={member} delay={idx * 0.1} patchVariant={rowIndex * 5 + idx} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MemberCard({ member, delay, patchVariant }: { member: Member; delay: number; patchVariant: number }) {
  const patchClasses = [
    "top-0 right-0 -mt-8 -mr-8 w-24 h-24 bg-teal-500/10",
    "bottom-0 left-0 -mb-8 -ml-8 w-20 h-20 bg-cyan-400/10",
    "top-1/2 right-0 -mr-8 -translate-y-1/2 w-20 h-20 bg-emerald-300/10",
    "top-0 left-1/2 -mt-8 -translate-x-1/2 w-24 h-24 bg-teal-400/10",
  ] as const;
  const primaryPatch = patchClasses[patchVariant % patchClasses.length];
  const secondaryPatch = patchClasses[(patchVariant + 2) % patchClasses.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ opacity: { duration: 0.6, delay } }}
      style={{ contain: "layout paint" }}
      className="transform-gpu w-full max-w-90 md:w-auto"
    >
      <div
        className="relative h-25 w-full max-w-90 md:w-25 md:hover:w-82.5 rounded-3xl flex items-center cursor-pointer overflow-hidden group transition-[width] duration-420 ease-[cubic-bezier(0.23,1,0.32,1)] will-change-[width]"
      >
        {/* 1. Default static border (hides when hovered) */}
        <div className="absolute inset-0 rounded-3xl border border-white/10 group-hover:opacity-0 transition-opacity duration-300 z-0" />

        {/* 2. THE NEON BEAM: A spinning conic gradient that appears on hover */}
        <div className="absolute top-1/2 left-1/2 w-90 h-90 -translate-x-1/2 -translate-y-1/2 bg-[conic-gradient(from_0deg,transparent_65%,#14f1d9_100%)] opacity-0 group-hover:opacity-100 group-hover:animate-[spin_3s_linear_infinite] transition-opacity duration-400 z-0" />

        {/* 3. INNER MASK: Creates the 2px border wall by covering the middle of the neon beam */}
        <div className="absolute inset-0.5 rounded-[22px] bg-[linear-gradient(135deg,rgba(3,14,14,0.92),rgba(2,8,18,0.9))] border border-white/10 group-hover:border-teal-400/35 flex items-center overflow-hidden z-10 transition-colors duration-500">
          <div className={`absolute rounded-full blur-xl transition-all duration-500 group-hover:bg-teal-400/20 ${primaryPatch}`} />
          <div className={`absolute rounded-full blur-lg transition-all duration-500 group-hover:bg-cyan-300/20 ${secondaryPatch}`} />
          
          {/* Square Photo */}
          <div 
            className="w-24 h-25 shrink-0 bg-cover bg-center border-r border-white/5 relative z-20"
            style={{ backgroundImage: `url(${member.image})` }}
          />
          
          {/* Expanded Text Info */}
          <div className="whitespace-nowrap pl-6 pr-8 flex flex-col justify-center relative z-20 opacity-100 translate-x-0 md:opacity-0 md:-translate-x-2 md:group-hover:opacity-100 md:group-hover:translate-x-0 transition-all duration-300 delay-100">
            <h4 className="text-white font-bold text-[1.35rem] tracking-tight">{member.name}</h4>
            <p className="text-teal-400 text-sm font-bold tracking-widest uppercase mt-1">{member.role}</p>
          </div>
          
        </div>
      </div>
    </motion.div>
  );
}
