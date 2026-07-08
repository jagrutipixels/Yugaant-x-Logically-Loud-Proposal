import { motion, useScroll, useTransform } from "motion/react";
import React, { useRef } from "react";

export const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <div ref={ref} className="relative h-screen flex items-center justify-center overflow-hidden">
      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050000]/60 to-[#050000]/90 z-10" />
        <motion.img
          initial={{ scale: 1.05 }}
          animate={{ scale: 1.15 }}
          transition={{ duration: 30, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
          src="https://lh3.googleusercontent.com/d/12iiRMTAe1eQOql8v-R7c37dV9OkGaUkr=w2000"
          alt="Concert Background"
          className="w-full h-full object-cover opacity-20 filter grayscale mix-blend-overlay"
        />
      </motion.div>

      <div className="relative z-20 text-center px-6 max-w-5xl mx-auto mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
          className="inline-block px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-xs font-medium tracking-widest text-zinc-300 mb-10 shadow-[0_0_15px_rgba(255,255,255,0.05)]"
        >
          PROJECT PROPOSAL
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
          className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 mb-10"
        >
          <img src="https://lh3.googleusercontent.com/d/1IcHmYa-e-ZHifVPjO1WCOWE3c1Tz3Edv=w1000" alt="Yugaant" className="h-16 md:h-24 lg:h-32 object-contain drop-shadow-[0_0_30px_rgba(255,255,255,0.15)]" />
          <motion.span 
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="text-3xl md:text-5xl text-white/30 font-light tracking-widest hidden md:block"
          >
            ×
          </motion.span>
          <img src="https://lh3.googleusercontent.com/d/1b0b5UAeT5_geSMFUh3EKV_Q1xCAa59bZ=w1000" alt="Logically Loud" className="h-16 md:h-24 lg:h-32 object-contain drop-shadow-[0_0_30px_rgba(255,255,255,0.15)]" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.2, ease: "easeOut" }}
          className="text-xl md:text-3xl text-zinc-400 font-light max-w-3xl mx-auto mb-14 tracking-wide"
        >
          A Documentary. A Conversation. A Musical Journey.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <a
            href="#overview"
            className="group relative inline-flex items-center justify-center px-10 py-5 text-sm font-semibold tracking-widest uppercase bg-white text-black rounded-full overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]"
          >
            <span className="relative z-10 transition-transform duration-500 group-hover:scale-110">Explore Proposal</span>
            <div className="absolute inset-0 bg-zinc-200 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </a>
        </motion.div>
      </div>
    </div>
  );
};
