"use client";

import { useEffect, useState, type MouseEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { markSkipNextHomeLoader, peekSkipNextHomeLoader } from "@/lib/home-loader-skip";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const shouldAnimateHomeNavbar = isHomePage && !peekSkipNextHomeLoader();

  const navLinks = [
    { name: "Home", href: "#home", homeSection: true },
    { name: "SIGs", href: "#sigs", homeSection: true },
    { name: "Team", href: "team", homeSection: false },
    { name: "Projects", href: "projects", homeSection: false },
    { name: "Events", href: "#events", homeSection: true },
    { name: "Contact", href: "#contact" },
  ];

  const getHref = (link: { href: string; homeSection?: boolean }) => {
    if (link.homeSection && !isHomePage) {
      return `/${link.href}`;
    }

    return link.href;
  };

  const handleLinkClick = (
    event: MouseEvent<HTMLAnchorElement>,
    link: { name: string; href: string; homeSection?: boolean }
  ) => {
    if (!isHomePage) {
      if (link.homeSection) {
        markSkipNextHomeLoader();
      }
      setIsMenuOpen(false);
      return;
    }

    if (!link.href.startsWith("#")) {
      setIsMenuOpen(false);
      return;
    }

    event.preventDefault();
    setIsMenuOpen(false);

    const target = document.querySelector(link.href);
    if (!target) {
      return;
    }

    const top = Math.max(target.getBoundingClientRect().top + window.scrollY - 96, 0);
    window.scrollTo({ top, behavior: "smooth" });
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    const handleChange = (event: MediaQueryListEvent) => {
      if (event.matches) {
        setIsMenuOpen(false);
      }
    };

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", handleChange);
    } else {
      mediaQuery.addListener(handleChange);
    }

    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener("change", handleChange);
      } else {
        mediaQuery.removeListener(handleChange);
      }
    };
  }, []);

  return (
    <motion.nav 
      initial={shouldAnimateHomeNavbar ? { y: -100, opacity: 0 } : false}
      animate={{ y: 0, opacity: 1 }}
      transition={shouldAnimateHomeNavbar ? { delay: 1.6, duration: 0.6, ease: [0.22, 1, 0.36, 1] } : { duration: 0 }}
      className="group fixed top-4 md:top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl z-50 rounded-3xl md:rounded-full border border-white/20 bg-white/10 backdrop-blur-md backdrop-saturate-150 shadow-[0_10px_24px_rgba(2,12,30,0.34),inset_12px_0_16px_-12px_rgba(255,255,255,0.4),inset_0_-12px_16px_-12px_rgba(255,255,255,0.32)] md:shadow-[0_12px_28px_rgba(2,12,30,0.34),inset_10px_0_14px_-12px_rgba(255,255,255,0.35),inset_0_-10px_14px_-12px_rgba(255,255,255,0.28)] pointer-events-auto"
    >
      <div className="px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          <div className="flex items-center gap-2 sm:gap-4">
            <Image
              src="/images/iste_transparent.png"
              alt="ISTE Logo"
              width={48}
              height={48}
              style={{ width: "auto" }}
              className="h-10 sm:h-12 w-auto object-contain hover:scale-105 transition-transform duration-300"
            />
            <Image
              src="/images/nitk_transparent.png"
              alt="NITK Logo"
              width={48}
              height={48}
              style={{ width: "auto" }}
              className="h-10 sm:h-12 w-auto object-contain hover:scale-105 transition-transform duration-300"
            />
          </div>

          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={getHref(link)}
                onClick={(event) => handleLinkClick(event, link)}
                className="text-sm font-medium text-white/80 hover:text-teal-400 hover:drop-shadow-[0_0_8px_rgba(20,241,217,0.5)] transition-all duration-300 tracking-wide"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="md:hidden flex items-center">
            <button
              aria-label="Toggle navigation menu"
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="text-white hover:text-teal-400 transition-colors"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="md:hidden px-4 pb-4"
          >
            <div className="rounded-2xl bg-black/70 border border-white/10 p-3 flex flex-col">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={getHref(link)}
                  onClick={(event) => handleLinkClick(event, link)}
                  className="px-4 py-3 text-sm font-medium text-white/85 hover:text-teal-400 hover:bg-white/5 rounded-xl transition-all duration-200 tracking-wide"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
