import { motion } from "motion/react";
import React, { useState, useEffect } from "react";

const navItems = [
  { label: "Overview", href: "#overview" },
  { label: "Yugaant", href: "#yugaant" },
  { label: "Ashish", href: "#ashish" },
  { label: "Strategy", href: "#strategy" },
  { label: "Formats", href: "#formats" },
];

export const Nav = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-4 bg-yugaant-dark/80 backdrop-blur-lg border-b border-white/5" : "py-6 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between">
        <div className="flex items-center">
          <img src="https://lh3.googleusercontent.com/d/1IcHmYa-e-ZHifVPjO1WCOWE3c1Tz3Edv=w1000" alt="Yugaant" className="h-6 md:h-8 object-contain" />
        </div>
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#proposal"
            className="px-5 py-2 text-sm font-medium bg-white text-black rounded-full hover:bg-zinc-200 transition-colors"
          >
            View Proposal
          </a>
        </div>
      </div>
    </motion.nav>
  );
};
