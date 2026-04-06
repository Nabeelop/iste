"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import ParticlesBackground from "@/components/ParticlesBackground";
import { Events } from "@/components/data";

export default function EventsPage() {
  return (
    <main className="relative min-h-screen pt-32 pb-24 overflow-hidden w-full">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <ParticlesBackground />
        <div className="absolute inset-0 bg-gradient-to-b from-[#020812] via-transparent to-[#020812] opacity-80 pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center justify-center text-center space-y-6 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="inline-flex rounded-full border border-teal-400/40 bg-teal-400/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-widest text-teal-300 backdrop-blur-md">
              Flagship Engagements
            </p>

            <h1 className="mt-8 text-5xl md:text-7xl font-bold font-display text-white tracking-tight drop-shadow-[0_0_30px_rgba(20,241,217,0.3)]">
              Discover Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-indigo-500">Events</span>
            </h1>

            <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-zinc-400 font-light leading-relaxed">
              Step into the heart of ISTE NITK. Engage in high-stakes problem solving, decode complex mysteries, and push past the boundaries of traditional thinking.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 relative z-20">
          {Events.map((event, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.2, ease: "easeOut" }}
            >
              <Link href={event.link || `/#events`} className="group block relative w-full h-full perspective-1000">
                <div className="relative w-full h-[500px] rounded-[2rem] p-px overflow-hidden bg-gradient-to-b from-white/10 to-transparent transition-all duration-500 group-hover:from-teal-400/50 group-hover:to-indigo-500/30">
                  {/* Inside Card Wrapper */}
                  <div className="absolute inset-0 bg-[#060C1B] rounded-[2rem] overflow-hidden">
                    {/* Glowing effect inside */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#020812] via-transparent to-transparent z-10 pointer-events-none" />
                    
                    <div className="relative w-full h-1/2 overflow-hidden">
                      <div className="absolute inset-0 bg-teal-400/20 mix-blend-overlay z-10 transition-opacity duration-500 group-hover:opacity-0" />
                      <Image
                        src={event.image || "/scotland_yard.jpeg"}
                        alt={event.title}
                        layout="fill"
                        objectFit="cover"
                        className="transition-transform duration-700 group-hover:scale-110 ease-[cubic-bezier(0.2,1,0.2,1)]"
                        priority={idx === 0}
                      />
                    </div>

                    <div className="relative z-20 p-8 h-1/2 flex flex-col justify-between custom-glass">
                      <div>
                        <h2 className="text-3xl font-bold font-display text-white group-hover:text-teal-300 transition-colors duration-300 drop-shadow-lg">
                          {event.title}
                        </h2>
                        
                        <p className="mt-4 text-sm text-zinc-400 line-clamp-4 leading-relaxed group-hover:text-zinc-300 transition-colors duration-300">
                          {event.description}
                        </p>
                      </div>

                      <div className="mt-6 flex items-center justify-between">
                        <span className="text-xs font-semibold uppercase tracking-wider text-teal-400/80 group-hover:text-teal-400 transition-colors">
                          Explore
                        </span>
                        
                        <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-teal-400 group-hover:border-teal-400 group-hover:shadow-[0_0_20px_rgba(20,241,217,0.5)] transition-all duration-300 backdrop-blur-md">
                          <svg className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Bottom fade out */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#020812] to-transparent pointer-events-none z-10" />
    </main>
  );
}
