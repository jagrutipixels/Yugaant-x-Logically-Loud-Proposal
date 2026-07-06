import React from "react";
import { Section, SectionTitle } from "../ui/Layout";
import { motion } from "motion/react";

const Node = ({ children, className, delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-10%" }}
    transition={{ duration: 0.5, delay }}
    className={`p-6 rounded-2xl border text-center font-medium shadow-[0_0_30px_rgba(0,0,0,0.5)] backdrop-blur-md relative z-10 ${className}`}
  >
    {children}
  </motion.div>
);

const VLine = ({ className = "" }: { className?: string }) => (
  <div className={`w-px bg-white/20 ${className}`}></div>
);

const HLine = ({ className = "" }: { className?: string }) => (
  <div className={`h-px bg-white/20 ${className}`}></div>
);

export const Ecosystem = () => {
  return (
    <Section id="ecosystem" className="bg-white/[0.02]">
      <SectionTitle
        title="Content Ecosystem"
        subtitle="How one master recording fuels a comprehensive digital presence."
      />

      <div className="max-w-5xl mx-auto flex flex-col items-center mt-12 px-4 relative">
        {/* Level 1 */}
        <Node delay={0.1} className="w-full max-w-sm bg-white/10 border-white/20 text-white">
          Deep Research & Pre-Production
        </Node>

        <VLine className="h-8 md:h-12" />

        {/* Level 2 */}
        <Node delay={0.2} className="w-full max-w-sm bg-white/10 border-white/20 text-white">
          Master Shoot (Podcast & Documentary Elements)
        </Node>

        {/* Trunk down from Master Shoot */}
        <VLine className="h-8 md:h-12" />

        {/* Tree Branching section */}
        <div className="w-full relative">
          {/* Desktop Horizontal Line top */}
          <HLine className="hidden md:block absolute top-0 left-[16.66%] right-[16.66%]" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-8 md:gap-y-0 relative">
            
            {/* Branch 1 */}
            <div className="flex flex-col items-center">
              <VLine className="hidden md:block h-8" />
              <Node delay={0.3} className="w-full max-w-[260px] h-full flex items-center justify-center bg-yugaant-red/10 border-yugaant-red/30 text-yugaant-red">
                Long-Form Podcast Episode
              </Node>
              {/* Mobile connecting line */}
              <VLine className="md:hidden h-8 -mb-8 mt-auto z-0" />
            </div>

            {/* Branch 2 */}
            <div className="flex flex-col items-center">
              <VLine className="hidden md:block h-8" />
              <Node delay={0.4} className="w-full max-w-[260px] h-full flex items-center justify-center bg-yugaant-red/10 border-yugaant-red/30 text-yugaant-red">
                Mini-Documentary Cut
              </Node>
              {/* Mobile connecting line */}
              <VLine className="md:hidden h-8 -mb-8 mt-auto z-0" />
            </div>

            {/* Branch 3 */}
            <div className="flex flex-col items-center">
              <VLine className="hidden md:block h-8" />
              <Node delay={0.5} className="w-full max-w-[260px] h-full flex items-center justify-center bg-yugaant-red/10 border-yugaant-red/30 text-yugaant-red">
                Micro-Content Extraction<br/>(Shorts & Reels)
              </Node>
            </div>
            
          </div>

          {/* Desktop Horizontal Line bottom */}
          <div className="hidden md:flex flex-col items-center">
            {/* The vertical drops from each node */}
            <div className="relative w-full h-8">
              <VLine className="absolute left-[16.66%] top-0 h-8" />
              <VLine className="absolute left-1/2 top-0 h-8 -translate-x-1/2" />
              <VLine className="absolute right-[16.66%] top-0 h-8" />
            </div>
            {/* The horizontal connector at the bottom */}
            <HLine className="w-[66.66%] relative" />
          </div>
        </div>

        {/* Trunk down to Distribution */}
        <VLine className="h-8 md:h-12 hidden md:block" />
        <VLine className="h-8 md:hidden" />

        {/* Level 4 */}
        <Node delay={0.6} className="w-full max-w-xl bg-yugaant-orange/10 border-yugaant-orange/30 text-yugaant-orange">
          Multi-Platform Distribution (IG, YT, Spotify, LinkedIn)
        </Node>

        <VLine className="h-8 md:h-12" />

        {/* Level 5 */}
        <Node delay={0.7} className="w-full max-w-sm bg-white text-black font-bold border-white">
          PR Case Study & Portfolio Updates
        </Node>
      </div>
    </Section>
  );
};
