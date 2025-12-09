"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function NavBar() {
  const [isScrolled,setIsScrolled]=useState(false);

  useEffect(()=>{
    const handleScroll=()=>{
      if(window.scrollY>0){
        setIsScrolled(true);
      }else{
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll",handleScroll);

    return()=>{
      window.removeEventListener("scroll",handleScroll);
    };
  },[]);

  return (<>
    <div className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-300 ${isScrolled ? "pt-4" : "pt-0"}`}>
        <div 
          className={`
            flex items-center justify-between bg-surface text-foreground shadow-md transition-all duration-500 ease-in-out
            ${isScrolled 
              ? "w-[90%] md:w-[70%] h-16 rounded-full border border-white/50 px-8" 
              : "w-full h-24 rounded-none px-6"
            }
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
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <Link href="#about" className="hover:text-primary transition-colors">About</Link>
          <Link href="#sigs" className="hover:text-primary transition-colors">SIGs</Link>
          <Link href="#events" className="hover:text-primary transition-colors">Events</Link>
          <Link href="#contact" className="hover:text-primary transition-colors">Contact</Link>
        </div>
      </div>
    </div>
    <div className="h-24 bg-background"></div>
  </>


  );
}