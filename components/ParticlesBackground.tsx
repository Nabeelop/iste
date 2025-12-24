"use client";

import { Particles } from "@/components/ui/shadcn-io/particles";

export default function ParticlesBackground() {
  return (
    <div 
      className="fixed inset-0 -z-10 bg-background pointer-events-none"
    >
      <Particles
        className="absolute inset-0 w-full h-full"
        quantity={200}
        ease={80}
        color="#ffffff"
        size={1.0}
        staticity={50}
      />
    </div>
  );
}

