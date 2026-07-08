import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

export const CinematicEnding = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [50, 0]);

  return (
    <div ref={ref} className="relative h-screen flex flex-col items-center justify-center bg-black overflow-hidden">
      <motion.div 
        style={{ opacity, y }}
        className="text-center px-6 max-w-4xl mx-auto z-10"
      >
        <h2 className="text-3xl md:text-5xl lg:text-7xl font-light text-white leading-tight mb-16 font-serif italic tracking-wide">
          "A podcast captures a conversation. <br/>
          <span className="text-zinc-500">A documentary preserves a legacy.</span> <br/>
          <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-500 not-italic">This project aims to do both.</span>"
        </h2>
        
        <div className="flex flex-wrap justify-center items-center gap-4 text-xs md:text-sm tracking-[0.2em] md:tracking-[0.3em] uppercase text-zinc-600 font-bold">
          <span>Yugaant</span>
          <span className="text-yugaant-red">×</span>
          <span>Logically Loud</span>
        </div>
      </motion.div>
      
      {/* Subtle background glow to fade to black */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-transparent pointer-events-none z-0" />
    </div>
  );
};
