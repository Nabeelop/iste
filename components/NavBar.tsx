"use client";

import Link from "next/link";
import Image from "next/image";

export default function NavBar() {


  return (<>
    <div className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-300 pt-4`}>
        <div 
          className={`
            flex items-center justify-between bg-surface/70 text-foreground shadow-md transition-all duration-500 ease-in-out
            w-[60%] h-16 rounded-full border border-white/50 px-8
          `}
        >
        <Link href="/" className="flex items-center gap-4 cursor-pointer hover:opacity-90 transition-opacity">
          <div className="h-16 w-16 relative">
            <Image 
              src="/download (1).png" 
              alt="ISTE NITK Logo" 
              className="object-contain brightness-0 invert" 
              fill
              priority 
            />
          </div>
          <div className="text-2xl font-bold font-display">
            ISTE NITK
          </div>
        </Link>

        <div className="font-sans text-sm font-semibold gap-6 flex">
          <a href="#home" className="hover:text-primary transition-colors">Home</a>
          <a href="#about" className="hover:text-primary transition-colors">About</a>
          <a href="#sigs" className="hover:text-primary transition-colors">SIGs</a>
          <a href="#events" className="hover:text-primary transition-colors">Events</a>
          <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
        </div>
      </div>
    </div>
  </>


  );
}