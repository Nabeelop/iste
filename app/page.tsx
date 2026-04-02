"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent, AnimatePresence } from "motion/react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { Position, GlobeConfig } from "@/components/ui/globe";
import { SigCard } from "@/components/ui/sig-card"; 
import { TeamStrip } from "@/components/ui/team-strip"; 
import { consumeSkipNextHomeLoader } from "@/lib/home-loader-skip";

const World = dynamic(() => import("@/components/ui/globe").then((m) => m.World), {
  ssr: false,
});

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  const [showLoader, setShowLoader] = useState(() => !consumeSkipNextHomeLoader());

  useEffect(() => {
    if (!showLoader) {
      return;
    }

    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 1500);

    return () => {
      clearTimeout(timer);
    };
  }, [showLoader]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    const apply = () => setIsMobile(mediaQuery.matches);
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

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (isMobile) {
      if (isScrolled) setIsScrolled(false);
      return;
    }

    if (latest > 0.1 && !isScrolled) setIsScrolled(true);
    if (latest <= 0.1 && isScrolled) setIsScrolled(false);
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.15, 1], [1, 1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.15, 1], ["0vh", "-120vh", "-120vh"]);
  const heroPointerEvents = useTransform(scrollYProgress, (v) => v > 0.1 ? "none" : "auto");

  const globeX = useTransform(scrollYProgress, [0, 0.1, 0.25, 0.75, 0.85, 1], ["20vw", "20vw", "-20vw", "-20vw", "0vw", "0vw"]);
  const globeY = useTransform(scrollYProgress, [0, 0.85, 1], ["0vh", "0vh", "-120vh"]);

  const aboutOpacity = useTransform(scrollYProgress, [0, 0.15, 0.25, 0.75, 0.85, 1], [0, 0, 1, 1, 0, 0]);
  const aboutY = useTransform(scrollYProgress, [0, 0.15, 0.25, 0.75, 0.85, 1], ["50px", "50px", "0px", "0px", "-100vh", "-100vh"]);
  const aboutPointerEvents = useTransform(scrollYProgress, (v) => (v > 0.25 && v < 0.75) ? "auto" : "none");

  const globeConfig: GlobeConfig = {
    pointSize: 4, globeColor: "#042f2e", showAtmosphere: true, atmosphereColor: "#2dd4bf", atmosphereAltitude: 0.15,
    emissive: "#042f2e", emissiveIntensity: 0.2, shininess: 0.9, polygonColor: "rgba(45, 212, 191, 0.8)",
    ambientLight: "#38bdf8", directionalLeftLight: "#ffffff", directionalTopLight: "#ffffff", pointLight: "#ffffff",
    arcTime: 1500, arcLength: 0.6, rings: 1, maxRings: 3, initialPosition: { lat: 13.0108, lng: 74.7943 }, autoRotate: false, 
  };

  const sampleArcs: Position[] = [
    { order: 1, startLat: 13.0108, startLng: 74.7943, endLat: 37.7749, endLng: -122.4194, arcAlt: 0.4, color: "#14f1d9" },
    { order: 2, startLat: 13.0108, startLng: 74.7943, endLat: 51.5072, endLng: -0.1276, arcAlt: 0.3, color: "#ffffff" },
    { order: 3, startLat: 13.0108, startLng: 74.7943, endLat: 1.3521, endLng: 103.8198, arcAlt: 0.2, color: "#14f1d9" },
    { order: 4, startLat: 13.0108, startLng: 74.7943, endLat: 35.6762, endLng: 139.6503, arcAlt: 0.3, color: "#4fd1c5" },
    { order: 5, startLat: 13.0108, startLng: 74.7943, endLat: -33.8688, endLng: 151.2093, arcAlt: 0.5, color: "#ffffff" },
  ];

  const coreTeam = Array(15).fill({ name: "Member Name", role: "Core Role", image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=200&auto=format&fit=crop" });
  const auxiliaryTeam = Array(10).fill({ name: "Member Name", role: "Aux Role", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop" });
  const mobilePanelClass = "bg-black/22";
  const mobilePanelBorderClass = "border-white/[0.04]";
  const mobileFilterOpacity = {
    center: 0.1,
    mid: 0.26,
    edge: 0.46,
  };

  return (
    <div className="w-full bg-transparent text-white">
      
      {/* RESTORED: PURE CSS GPU ACCELERATION FOR THE LOADER */}
      <style dangerouslySetInnerHTML={{__html: `
        .spin-clockwise { animation: custom-spin-cw 3s linear infinite; will-change: transform; transform: translateZ(0); }
        .spin-counter { animation: custom-spin-ccw 15s linear infinite; will-change: transform; transform: translateZ(0); }
        @keyframes custom-spin-cw { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes custom-spin-ccw { from { transform: rotate(0deg); } to { transform: rotate(-360deg); } }
      `}} />

      {/* --- THE SPLIT-SCREEN BINARY IGNITION LOADER --- */}
      <AnimatePresence>
        {showLoader && (
          <>
            <motion.div
              key="left-door"
              initial={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.1 }} 
              className="fixed top-0 left-0 w-1/2 h-screen bg-[#020505] border-r border-white/5 z-9998"
            />
            <motion.div
              key="right-door"
              initial={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              className="fixed top-0 right-0 w-1/2 h-screen bg-[#020505] border-l border-white/5 z-9998"
            />
            <motion.div
              key="core-loader"
              exit={{ scale: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed inset-0 z-9999 flex flex-col items-center justify-center pointer-events-none"
            >
              <div className="relative w-48 h-48 flex items-center justify-center">
                <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.5, 0.2] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} className="absolute inset-0 rounded-full bg-teal-500/30 blur-2xl" />
                
                {/* CSS GPU SPINNERS */}
                <div className="absolute w-44 h-44 opacity-80 spin-counter">
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    <path id="binaryPath" d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0" fill="none" />
                    <text className="text-[6.5px] fill-teal-400 font-mono tracking-[0.15em]"><textPath href="#binaryPath" startOffset="0%">01101001 01100111 01101110 01101001 01110100 01100101 01100011 01101111 01110010 01100101</textPath></text>
                  </svg>
                </div>
                <div className="w-28 h-28 rounded-full border-2 border-white/5 border-t-teal-400 border-b-teal-400 shadow-[0_0_15px_rgba(20,241,217,0.4)] spin-clockwise" />
                
                <div className="absolute inset-0 flex items-center justify-center"><div className="w-3 h-3 bg-teal-300 rounded-full animate-ping" /></div>
              </div>
              <motion.div animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }} className="mt-8 text-teal-400 text-sm font-bold tracking-[0.5em] uppercase drop-shadow-[0_0_5px_rgba(20,241,217,0.5)]">Igniting Core</motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {isMobile ? (
        <>
          <section className="relative min-h-svh w-full overflow-hidden" id="home">
            <div className="fixed inset-0 z-0 pointer-events-none flex items-center justify-center">
              <div className="relative w-[82vw] h-[82vw] max-w-125 max-h-125 opacity-100">
                <World data={sampleArcs} globeConfig={globeConfig} isScrolled={false} />
              </div>
            </div>

            <div
              className="fixed inset-0 z-10 pointer-events-none"
              style={{
                background: `radial-gradient(circle at center, rgba(0,0,0,${mobileFilterOpacity.center}) 0%, rgba(0,0,0,${mobileFilterOpacity.mid}) 58%, rgba(0,0,0,${mobileFilterOpacity.edge}) 100%)`,
              }}
            />

            <div className="relative z-20 min-h-svh px-4 bg-linear-to-b from-black/0 via-black/14 to-black/22 flex items-center justify-center">
              <div className="mx-auto w-full max-w-90 space-y-8 text-center">
                <motion.div
                  className="w-full space-y-3"
                  animate={{
                    x: [0, 0, 0, 0, -4, 4, -2, 2, 0, 0, 0, 0],
                    y: [0, 0, 0, 0, 2, -2, 1, -1, 0, 0, 0, 0],
                    opacity: [1, 1, 1, 1, 0.8, 0.9, 0.8, 0.9, 1, 1, 1, 1],
                    filter: [
                      "drop-shadow(0 0 15px rgba(20,241,217,0.4))",
                      "drop-shadow(0 0 15px rgba(20,241,217,0.4))",
                      "drop-shadow(0 0 15px rgba(20,241,217,0.4))",
                      "drop-shadow(0 0 15px rgba(20,241,217,0.4))",
                      "drop-shadow(4px 0 0 rgba(255,0,255,0.8)) drop-shadow(-4px 0 0 rgba(0,255,255,0.8))",
                      "drop-shadow(-4px 0 0 rgba(255,0,255,0.8)) drop-shadow(4px 0 0 rgba(0,255,255,0.8))",
                      "drop-shadow(4px 0 0 rgba(255,0,255,0.8)) drop-shadow(-4px 0 0 rgba(0,255,255,0.8))",
                      "drop-shadow(-4px 0 0 rgba(255,0,255,0.8)) drop-shadow(4px 0 0 rgba(0,255,255,0.8))",
                      "drop-shadow(0 0 15px rgba(20,241,217,0.4))",
                      "drop-shadow(0 0 15px rgba(20,241,217,0.4))",
                      "drop-shadow(0 0 15px rgba(20,241,217,0.4))",
                      "drop-shadow(0 0 15px rgba(20,241,217,0.4))",
                    ]
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear", times: [0, 0.1, 0.2, 0.3, 0.31, 0.33, 0.35, 0.37, 0.38, 0.6, 0.8, 1] }}
                >
                  <h1 className="text-[4.8rem] leading-none font-extrabold tracking-tighter text-transparent bg-clip-text bg-linear-to-br from-teal-200 via-white to-white drop-shadow-sm">
                    ISTE
                  </h1>
                  <div className="flex items-center gap-4 w-[90%] mx-auto">
                    <div className="h-px grow bg-linear-to-r from-transparent via-white/50 to-white/80" />
                    <svg className="w-6 h-6 text-teal-300 drop-shadow-[0_0_8px_rgba(20,241,217,0.8)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.674M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                    <div className="h-px grow bg-linear-to-l from-transparent via-white/50 to-white/80" />
                  </div>
                  <h2 className="text-5xl font-bold tracking-[0.26em] ml-[0.26em] uppercase text-white/90">
                    NITK
                  </h2>
                </motion.div>

                <p className="text-lg font-extrabold text-teal-400 tracking-[0.16em] leading-relaxed drop-shadow-[0_0_15px_rgba(20,241,217,0.6)]">
                  WHERE TECHNOLOGY <br /> MEETS CREATIVITY
                </p>
              </div>
            </div>
          </section>

          <section className={`relative z-20 py-20 ${mobilePanelClass}`} id="about">
            <div className="max-w-7xl mx-auto px-6 text-center">
              <h2 className="text-4xl font-bold text-white tracking-tight">About <span className="text-teal-400">Us</span></h2>
              <div className="w-24 h-1 bg-linear-to-r from-teal-400 to-transparent rounded-full mx-auto mt-4" />
              <p className="text-base text-slate-300 leading-relaxed max-w-xl mx-auto mt-6">
                The Indian Society for Technical Education (ISTE) Students&apos; Chapter at NITK Surathkal is a dynamic community of tech enthusiasts, innovators, and creators.
              </p>
              <div className="pt-6">
                <button className="text-teal-400 font-semibold hover:text-white transition-colors inline-flex items-center gap-2 group cursor-pointer">Read our full story <span className="group-hover:translate-x-1 transition-transform">→</span></button>
              </div>
            </div>
          </section>
        </>
      ) : (
        <div ref={containerRef} className="relative h-[400vh] w-full" id="home">
          <div className="sticky top-0 h-screen w-full overflow-hidden">
            
            <div className="absolute top-1/2 left-[2%] lg:left-[5%] -translate-y-1/2 w-[90%] lg:w-[45%] z-20 pointer-events-none">
              <motion.div style={{ opacity: heroOpacity, y: heroY, pointerEvents: heroPointerEvents as unknown as React.CSSProperties["pointerEvents"] }} className="space-y-12 flex flex-col items-center text-center">
              
              <motion.div 
                className="w-full max-w-[320px] lg:max-w-120 space-y-4"
                animate={{
                  x: [0, 0, 0, 0, -4, 4, -2, 2, 0, 0, 0, 0],
                  y: [0, 0, 0, 0, 2, -2, 1, -1, 0, 0, 0, 0],
                  opacity: [1, 1, 1, 1, 0.8, 0.9, 0.8, 0.9, 1, 1, 1, 1],
                  filter: [
                    "drop-shadow(0 0 15px rgba(20,241,217,0.4))",
                    "drop-shadow(0 0 15px rgba(20,241,217,0.4))",
                    "drop-shadow(0 0 15px rgba(20,241,217,0.4))",
                    "drop-shadow(0 0 15px rgba(20,241,217,0.4))",
                    "drop-shadow(4px 0 0 rgba(255,0,255,0.8)) drop-shadow(-4px 0 0 rgba(0,255,255,0.8))", // Magenta & Cyan split
                    "drop-shadow(-4px 0 0 rgba(255,0,255,0.8)) drop-shadow(4px 0 0 rgba(0,255,255,0.8))",
                    "drop-shadow(4px 0 0 rgba(255,0,255,0.8)) drop-shadow(-4px 0 0 rgba(0,255,255,0.8))",
                    "drop-shadow(-4px 0 0 rgba(255,0,255,0.8)) drop-shadow(4px 0 0 rgba(0,255,255,0.8))",
                    "drop-shadow(0 0 15px rgba(20,241,217,0.4))",
                    "drop-shadow(0 0 15px rgba(20,241,217,0.4))",
                    "drop-shadow(0 0 15px rgba(20,241,217,0.4))",
                    "drop-shadow(0 0 15px rgba(20,241,217,0.4))",
                  ]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "linear",
                  times: [0, 0.1, 0.2, 0.3, 0.31, 0.33, 0.35, 0.37, 0.38, 0.6, 0.8, 1] 
                }}
              >
                <h1 className="text-[7rem] lg:text-[10rem] leading-none font-extrabold tracking-tighter text-transparent bg-clip-text bg-linear-to-br from-teal-200 via-white to-white drop-shadow-sm">
                  ISTE
                </h1>
                
                <div className="flex items-center gap-4 w-[90%] mx-auto">
                    <div className="h-px grow bg-linear-to-r from-transparent via-white/50 to-white/80" />
                    <svg className="w-6 h-6 text-teal-300 drop-shadow-[0_0_8px_rgba(20,241,217,0.8)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.674M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                    <div className="h-px grow bg-linear-to-l from-transparent via-white/50 to-white/80" />
                </div>

                <h2 className="text-6xl lg:text-[6.5rem] font-bold tracking-[0.28em] ml-[0.28em] uppercase text-white/90">
                  NITK
                </h2>
              </motion.div>

              <p className="text-xl lg:text-2xl font-extrabold text-teal-400 tracking-[0.2em] leading-relaxed drop-shadow-[0_0_15px_rgba(20,241,217,0.6)] pt-6">
                WHERE TECHNOLOGY <br /> MEETS CREATIVITY
              </p>
              
              </motion.div>
            </div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-auto">
              <motion.div style={{ x: globeX, y: globeY }} className="relative w-175 h-175 flex items-center justify-center">
                <World data={sampleArcs} globeConfig={globeConfig} isScrolled={isScrolled} />
              </motion.div>
            </div>

            <div className="absolute top-1/2 right-[5%] lg:right-[10%] -translate-y-1/2 w-[90%] lg:w-[35%] z-20 pointer-events-none" id="about">
              <motion.div initial={{ opacity: 0 }} style={{ opacity: aboutOpacity, y: aboutY, pointerEvents: aboutPointerEvents as unknown as React.CSSProperties["pointerEvents"] }} className="space-y-6">
                <h2 className="text-4xl lg:text-6xl font-bold text-white tracking-tight">About <span className="text-teal-400">Us</span></h2>
                <div className="w-24 h-1 bg-linear-to-r from-teal-400 to-transparent rounded-full" />
                <p className="text-lg text-slate-300 leading-relaxed max-w-lg">
                  The Indian Society for Technical Education (ISTE) Students&apos; Chapter at NITK Surathkal is a dynamic community of tech enthusiasts, innovators, and creators.
                </p>
                <div className="pt-4 pointer-events-auto">
                   <button className="text-teal-400 font-semibold hover:text-white transition-colors flex items-center gap-2 group cursor-pointer">Read our full story <span className="group-hover:translate-x-1 transition-transform">→</span></button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      )}

      <section className={`relative z-20 ${isMobile ? `pt-8 pb-24 mt-0 ${mobilePanelClass} border-t ${mobilePanelBorderClass}` : "pt-8 pb-24 -mt-[45vh] bg-transparent"}`} id="projects">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-16">
            <h3 className="text-4xl lg:text-5xl font-bold text-white tracking-tight">Our <span className="text-teal-400 drop-shadow-[0_0_15px_rgba(79,209,197,0.3)]">Cosmic Footprint</span></h3>
            <div className="w-20 h-1 bg-linear-to-r from-teal-400 to-transparent rounded-full mx-auto mt-4" />
          </motion.div>

          <div className="flex flex-col md:flex-row justify-around items-center gap-12">
            <div><h2 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-teal-300 to-teal-500">25+</h2><p className="text-lg font-medium text-slate-400 mt-3 uppercase tracking-widest">Years of Legacy</p></div>
            <div><h2 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-teal-300 to-teal-500">8</h2><p className="text-lg font-medium text-slate-400 mt-3 uppercase tracking-widest">Core SIGs</p></div>
            <div><h2 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-teal-300 to-teal-500">100+</h2><p className="text-lg font-medium text-slate-400 mt-3 uppercase tracking-widest">Projects Built</p></div>
          </div>
        </div>
      </section>

      <section
        id="sigs"
        className={`relative z-20 py-24 border-t ${isMobile ? `${mobilePanelBorderClass} ${mobilePanelClass}` : "border-white/5 bg-transparent"}`}
        style={{ contentVisibility: "auto", containIntrinsicSize: "900px" }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl lg:text-6xl font-bold text-center text-white">Our Special Interest <span className="text-teal-400">Groups</span></h2>
          <div className="w-24 h-1 bg-linear-to-r from-teal-400 to-transparent rounded-full mx-auto mt-4 mb-20" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
             <SigCard title="Crypt" description="Train for ICPC-style contests, master dynamic programming patterns, and sharpen problem-solving speed through weekly challenges and mentoring sessions." delay={0.1} iconPath="/sig-logos/crypt.png" />
             <SigCard title="Credit" description="Build real fintech products, explore quantitative strategies, and learn risk-aware decision models with market simulations and portfolio case studies." delay={0.2} iconPath="/sig-logos/credit.png" />
             <SigCard title="Chronicle" description="Craft visual stories through design systems, filmmaking pipelines, and content strategy that amplifies campus projects with high-impact media." delay={0.3} iconPath="/sig-logos/chronicle.png" />
             <SigCard title="Clutch" description="Prototype robotics and mechanical systems, validate designs with simulation, and iterate quickly from CAD concepts to functional engineering builds." delay={0.4} iconPath="/sig-logos/clutch.png" />
             <SigCard title="Concrete" description="Design resilient infrastructure solutions, study sustainable urban planning, and solve civil engineering challenges with practical, data-driven methods." delay={0.5} iconPath="/sig-logos/concrete.png" />
             <SigCard title="Create" description="Ship full-stack apps from idea to deployment, collaborate in product squads, and practice modern engineering workflows across web and mobile platforms." delay={0.6} iconPath="/sig-logos/create.png" />
             <SigCard title="Charge" description="Experiment with embedded systems, power electronics, and IoT architectures while building reliable hardware prototypes for real-world use cases." delay={0.7} iconPath="/sig-logos/charge.png" />
             <SigCard title="Catalyst" description="Investigate green processes, smart materials, and chemical innovations that transform lab insights into scalable, sustainability-focused solutions." delay={0.8} iconPath="/sig-logos/catalyst.png" />
          </div>
        </div>
      </section>

      <div id="core" className={`relative z-20 ${isMobile ? mobilePanelClass : ""}`}>
        <TeamStrip title="The Core" members={coreTeam} />
      </div>

      <div id="events" className={`relative z-20 ${isMobile ? mobilePanelClass : ""}`}>
        <TeamStrip title="Auxiliary Core" members={auxiliaryTeam} />
      </div>

      <footer className="relative z-20 border-t border-white/14 bg-black/28 pb-10 pt-14 text-slate-400 shadow-[inset_0_1px_0_rgba(45,212,191,0.15)] sm:border-white/12 sm:bg-black/25 sm:pt-20" id="contact">
        <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-[1.5px] bg-linear-to-r from-transparent via-teal-300/65 to-transparent" />
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 sm:px-6 md:grid-cols-3 md:gap-16">
          <div className="space-y-6">
            <div className="text-4xl font-extrabold text-white tracking-wider">ISTE <span className="text-teal-400 drop-shadow-[0_0_10px_rgba(79,209,197,0.3)]">NITK</span></div>
            <p className="text-base text-slate-500 leading-relaxed">Pioneering Tech, Igniting Minds. Exploring the outer frontiers of technology, design, and innovation.</p>
            <div className="pt-2">
              <h4 className="text-white font-bold uppercase tracking-widest text-sm border-l-2 border-teal-400 pl-4">Socials</h4>
              <div className="mt-4 flex flex-wrap items-center gap-4">
                <a href="#" aria-label="X" className="p-3 rounded-full bg-white/5 hover:bg-teal-400/20 text-slate-400 hover:text-teal-400 transition-all duration-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </a>
                <a href="#" aria-label="Instagram" className="p-3 rounded-full bg-white/5 hover:bg-teal-400/20 text-slate-400 hover:text-teal-400 transition-all duration-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.29.96.953 1.242 2.235 1.306 3.593.058 1.284.07 1.65.07 4.884 0 3.235-.012 3.603-.07 4.883-.064 1.358-.346 2.64-1.306 3.593-.975.958-2.242 1.228-3.608 1.29-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.332-3.608-1.29-.96-.953-1.242-2.235-1.306-3.593-.058-1.284-.07-1.65-.07-4.884 0-3.235.012-3.603.07-4.883.064-1.359.346-2.64 1.306-3.593.975-.958 2.242-1.228 3.608-1.29 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-1.28.058-2.152.261-2.917.558-.79.307-1.46.717-2.128 1.385s-1.078 1.338-1.385 2.128c-.297.765-.5 1.637-.558 2.917-.058 1.28-.072 1.688-.072 4.947s.014 3.667.072 4.947c.058 1.28.261 2.152.558 2.917.307.79.717 1.46 1.385 2.128s1.338 1.078 2.128 1.385c.765.297 1.637.5 2.917.558 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.28-.058 2.152-.261 2.917-.558.79-.307 1.46-.717 2.128-1.385s1.078-1.338 1.385-2.128c.297-.765.5-1.637.558-2.917.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.058-1.28-.261-2.152-.558-2.917a4.91 4.91 0 00-1.385-2.128c-.668-.668-1.338-1.078-2.128-1.385-.765-.297-1.637-.5-2.917-.558-1.28-.058-1.688-.072-4.947-.072zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z"/></svg>
                </a>
                <a href="#" aria-label="LinkedIn" className="p-3 rounded-full bg-white/5 hover:bg-teal-400/20 text-slate-400 hover:text-teal-400 transition-all duration-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" /></svg>
                </a>
                <a href="#" aria-label="Facebook" className="p-3 rounded-full bg-white/5 hover:bg-teal-400/20 text-slate-400 hover:text-teal-400 transition-all duration-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12.073C22 6.503 17.523 2 12 2S2 6.503 2 12.073c0 5.03 3.657 9.2 8.438 9.957v-7.042H7.898v-2.915h2.54V9.845c0-2.52 1.492-3.914 3.777-3.914 1.094 0 2.238.196 2.238.196v2.476h-1.26c-1.243 0-1.63.773-1.63 1.566v1.88h2.773l-.443 2.915h-2.33v7.042C18.343 21.273 22 17.103 22 12.073z" /></svg>
                </a>
                <a href="#" aria-label="GitHub" className="p-3 rounded-full bg-white/5 hover:bg-teal-400/20 text-slate-400 hover:text-teal-400 transition-all duration-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .5C5.649.5.5 5.649.5 12a11.5 11.5 0 008 10.93c.586.108.8-.255.8-.567v-2.02c-3.252.707-3.938-1.566-3.938-1.566-.533-1.356-1.302-1.718-1.302-1.718-1.065-.729.081-.714.081-.714 1.178.083 1.798 1.209 1.798 1.209 1.046 1.792 2.744 1.275 3.413.975.106-.758.41-1.275.746-1.568-2.596-.295-5.326-1.298-5.326-5.778 0-1.276.456-2.319 1.205-3.137-.12-.296-.523-1.487.114-3.1 0 0 .984-.315 3.225 1.198A11.22 11.22 0 0112 6.175c.994.005 1.995.134 2.93.393 2.24-1.513 3.223-1.198 3.223-1.198.638 1.613.235 2.804.116 3.1.75.818 1.203 1.86 1.203 3.137 0 4.492-2.735 5.48-5.34 5.77.422.364.798 1.08.798 2.177v3.227c0 .315.212.68.806.565A11.5 11.5 0 0023.5 12C23.5 5.649 18.351.5 12 .5z" /></svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col gap-6">
            <h4 className="text-white font-bold uppercase tracking-widest text-sm border-l-2 border-teal-400 pl-4">Quick Links</h4>
            <nav className="flex flex-col gap-3 text-base font-medium">
              <a href="#home" className="hover:text-teal-400 transition-colors">Home</a>
              <a href="#sigs" className="hover:text-teal-400 transition-colors">SIGs</a>
              <Link href="/team#team" className="hover:text-teal-400 transition-colors">Team</Link>
              <a href="#" className="hover:text-teal-400 transition-colors">Projects</a>
              <a href="#" className="hover:text-teal-400 transition-colors">Events</a>
            </nav>
          </div>

          <div className="space-y-6">
            <h4 className="text-white font-bold uppercase tracking-widest text-sm border-l-2 border-teal-400 pl-4">Contact</h4>
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
            Made with <span className="text-teal-400 text-xl animate-pulse drop-shadow-[0_0_8px_rgba(79,209,197,0.8)]">♥</span> by the ISTE Web Team
          </p>
        </div>
      </footer>
    </div>
  );
}