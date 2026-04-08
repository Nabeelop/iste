"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";

interface SigCardProps {
  title: string;
  description: string;
  iconPath: string; // --- NEW PROP ADDED ---
  delay?: number;
}

export function SigCard({ title, description, iconPath, delay = 0 }: SigCardProps) {
  const [canHover, setCanHover] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
    const apply = () => setCanHover(mediaQuery.matches);
    apply();

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", apply);
    } else {
      mediaQuery.addListener(apply);
    }

    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener("change", apply);
      } else {
        mediaQuery.removeListener(apply);
      }
    };
  }, []);

  useEffect(() => {
    const syncHeights = () => {
      const cards = Array.from(document.querySelectorAll<HTMLElement>("[data-sig-card='true']"));
      if (!cards.length) return;

      cards.forEach((card) => {
        card.style.minHeight = "";
      });

      let maxHeight = 0;
      cards.forEach((card) => {
        maxHeight = Math.max(maxHeight, card.offsetHeight);
      });

      cards.forEach((card) => {
        card.style.minHeight = `${maxHeight}px`;
      });
    };

    syncHeights();
    const timeoutId = window.setTimeout(syncHeights, 120);
    window.addEventListener("resize", syncHeights);

    return () => {
      window.clearTimeout(timeoutId);
      window.removeEventListener("resize", syncHeights);
    };
  }, [description]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay: delay, ease: "easeOut" }}
      whileHover={canHover ? { y: -5, scale: 1.02 } : undefined}
      style={{ contain: "layout paint" }}
      data-sig-card="true"
      className="relative group h-full w-full cursor-pointer transform-gpu rounded-2xl"
    >
      <div className="absolute inset-0 rounded-2xl border border-teal-400/40 shadow-[0_0_26px_rgba(20,241,217,0.22)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      
      <div className="relative h-full p-6 rounded-2xl bg-[linear-gradient(135deg,rgba(3,14,14,0.92),rgba(2,8,18,0.9))] border border-white/10 group-hover:border-teal-400/50 transition-colors duration-500 flex flex-col justify-between overflow-hidden">
        
        <div className="absolute top-0 right-0 -mt-8 -mr-8 w-28 h-28 bg-teal-500/10 rounded-full blur-xl group-hover:bg-teal-400/20 transition-all duration-500" />

        <div className="relative z-10 space-y-3">
          <div className="flex items-center">
            <Image
              src={iconPath}
              alt={`${title} logo`}
              width={64}
              height={64}
              className="h-16 w-16 object-contain transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          
          <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-teal-300 transition-colors">
            {title}
          </h3>
          
          <p className="text-sm leading-relaxed text-slate-400">
            {description}
          </p>
        </div>

        <div className="relative z-10 mt-3 pt-3 border-t border-white/5 h-8 flex items-center">
          <button
            type="button"
            className="inline-flex cursor-pointer items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-3 py-1 text-[0.7rem] font-bold text-teal-300 tracking-widest uppercase transition-colors hover:border-teal-400/70 hover:bg-teal-400/10"
          >
            Explore
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
}