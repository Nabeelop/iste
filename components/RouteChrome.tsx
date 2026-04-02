"use client";

import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { Navbar as SpaceNavbar } from "@/components/shared/Navbar";
import { SparklesCore } from "@/components/ui/sparkles";
import NavBar from "@/components/NavBar";
import ParticlesBackground from "@/components/ParticlesBackground";
import Footer from "@/components/Footer";

type RouteChromeProps = {
  children: ReactNode;
};

export default function RouteChrome({ children }: RouteChromeProps) {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const isTeamPage = pathname === "/team";
  const useSpaceThemeChrome = isHomePage || isTeamPage;
  const particleDensity = isTeamPage ? 60 : 100;

  if (useSpaceThemeChrome) {
    return (
      <div className="relative isolate min-h-screen bg-black text-white flex flex-col">
        <div
          aria-hidden="true"
          className="fixed inset-0 z-0 pointer-events-none bg-linear-to-b from-teal-400/12 via-[#020812]/70 to-black/92"
        />

        <div className="fixed inset-0 z-10 pointer-events-none">
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={particleDensity}
            className="w-full h-full"
            particleColor="#4fd1c5"
          />
        </div>

        <div className="relative z-50">
          <SpaceNavbar />
        </div>

        <main className="relative z-20 grow pointer-events-auto">{children}</main>
      </div>
    );
  }

  return (
    <>
      <ParticlesBackground />
      <NavBar />
      {children}
      <Footer />
    </>
  );
}