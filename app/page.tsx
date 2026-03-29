"use client";
import About from "@/components/About";
import EventCard, { Normalevent } from "@/components/EventCard";
import { SigCard } from "@/components/SigCard";
import {Events, sigs} from "@/components/data";
import OrbitalEvents from "@/components/OrbitalEvents";

export default function Home() {
  return (
    <main className="min-h-screen">
    
      <section id="home" className="h-screen flex items-center justify-center flex-col gap-10">
        <h1 className="relative z-10 text-8xl font-display font-bold text-white">
          Welcome to <span className="image-text">ISTE NITK</span>
        </h1>
        <h1 className="text-xl">Where <span className="text-[#d32c02]">creativity</span> meets <span className="text-[#d32c02]">technology</span></h1>
      </section>

      <About />

      <section id="sigs" className="py-24 px-6 relative">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-display text-white mb-4">
            Our <span className="text-primary">SIGs</span>
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full" />
          <p className="text-muted mt-4 max-w-2xl mx-auto">
            Explore our Special Interest Groups designed to foster technical growth.
          </p>
        </div>

        <div className="grid grid-cols-4 gap-8 max-w-7xl mx-auto">
          {sigs.map((sig) => (
            <SigCard
              key={sig.title}
              title={sig.title}
              image={sig.image}
              description={sig.description}
              link={sig.link}
            />
          ))}
        </div>
      </section>

      <section id="events" className="py-24 px-6">
        <OrbitalEvents />
      </section>
    </main>
  );
}