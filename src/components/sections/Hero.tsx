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
        <img
          src="https://lh3.googleusercontent.com/d/12iiRMTAe1eQOql8v-R7c37dV9OkGaUkr=w2000"
          alt="Concert Background"
          className="w-full h-full object-cover opacity-20 filter grayscale mix-blend-overlay"
        />
      </motion.div>

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto mt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-xs font-medium tracking-widest text-zinc-300 mb-8"
        >
          PROJECT PROPOSAL
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 mb-8"
        >
          <img src="https://lh3.googleusercontent.com/d/1IcHmYa-e-ZHifVPjO1WCOWE3c1Tz3Edv=w1000" alt="Yugaant" className="h-16 md:h-24 lg:h-28 object-contain drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]" />
          <span className="text-3xl md:text-5xl text-white/30 font-light tracking-widest hidden md:block">
            ×
          </span>
          <img src="https://lh3.googleusercontent.com/d/1b0b5UAeT5_geSMFUh3EKV_Q1xCAa59bZ=w1000" alt="Logically Loud" className="h-16 md:h-24 lg:h-28 object-contain drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-xl md:text-2xl text-zinc-400 font-light max-w-2xl mx-auto mb-12"
        >
          A Documentary. A Conversation. A Musical Journey.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <a
            href="#overview"
            className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium bg-white text-black rounded-full hover:scale-105 transition-transform duration-300"
          >
            Explore Proposal
          </a>
        </motion.div>
      </div>
    </div>
  );
};
