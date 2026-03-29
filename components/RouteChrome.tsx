"use client";

import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import NavBar from "@/components/NavBar";
import ParticlesBackground from "@/components/ParticlesBackground";
import Footer from "@/components/Footer";

type RouteChromeProps = {
  children: ReactNode;
};

export default function RouteChrome({ children }: RouteChromeProps) {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  if (isHomePage) {
    return <>{children}</>;
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