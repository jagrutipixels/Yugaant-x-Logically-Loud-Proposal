import React from "react";
import { Section, SectionTitle, GlassCard } from "../ui/Layout";
import { motion } from "motion/react";
import { BrainCircuit, Clapperboard, Mic, Film, Smartphone, Globe } from "lucide-react";

const AnimatedLine = ({ className = "", delay = 0, horizontal = false }: { className?: string, delay?: number, horizontal?: boolean }) => (
  <div className={`bg-white/10 ${className} relative overflow-hidden flex-shrink-0`}>
    <motion.div
      initial={horizontal ? { x: "-100%" } : { y: "-100%" }}
      whileInView={horizontal ? { x: "100%" } : { y: "100%" }}
      viewport={{ once: true }}
      transition={{ duration: 1.5, delay, repeat: Infinity, ease: "linear" }}
      className={`absolute inset-0 ${horizontal ? 'bg-gradient-to-r' : 'bg-gradient-to-b'} from-transparent via-yugaant-orange to-transparent opacity-50`}
    />
  </div>
);

export const Ecosystem = () => {
  return (
    <Section id="ecosystem" className="bg-black/20">
      <SectionTitle
        title="Content Ecosystem"
        subtitle="How one master recording fuels a comprehensive digital presence."
        className="text-center mx-auto"
      />

      <div className="max-w-5xl mx-auto mt-16 px-4 flex flex-col items-center relative z-10">
        
        {/* Step 1: Pre-Production */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full max-w-md"
        >
          <GlassCard className="flex flex-col items-center gap-3 p-6 bg-black/80 border-white/10 hover:border-white/30 transition-colors">
            <BrainCircuit className="w-8 h-8 text-zinc-400" strokeWidth={1.5} />
            <h3 className="font-bold tracking-widest uppercase text-sm text-zinc-200">Deep Research & Pre-Production</h3>
          </GlassCard>
        </motion.div>

        <AnimatedLine className="w-px h-10 md:h-12" delay={0} />

        {/* Step 2: Core Master Shoot */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="w-full max-w-xl relative"
        >
          <div className="absolute inset-0 bg-yugaant-red/20 blur-3xl rounded-full" />
          <GlassCard className="relative flex flex-col items-center gap-4 p-8 bg-gradient-to-b from-yugaant-red/10 to-black/90 border-yugaant-red/50 shadow-[0_0_40px_rgba(255,84,0,0.15)]">
            <div className="p-4 bg-yugaant-red/20 rounded-full border border-yugaant-red/30">
              <Clapperboard className="w-10 h-10 text-yugaant-orange" strokeWidth={1.5} />
            </div>
            <div className="text-center">
              <h3 className="font-bold tracking-widest uppercase text-lg text-white mb-1">The Master Shoot</h3>
              <p className="text-sm text-zinc-400">High-Fidelity Podcast & Documentary Capture</p>
            </div>
          </GlassCard>
        </motion.div>

        <AnimatedLine className="w-px h-10 md:h-12" delay={0.4} />

        {/* Step 3: Branching Content */}
        <div className="w-full relative">
          {/* Desktop connecting lines */}
          <div className="hidden md:block absolute top-0 left-1/6 right-1/6">
            <AnimatedLine className="w-full h-px" delay={0.5} horizontal />
            <div className="absolute left-0 top-0 w-px h-6 bg-white/10" />
            <div className="absolute right-0 top-0 w-px h-6 bg-white/10" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 pt-0 md:pt-6">
            
            {/* Podcast */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-col items-center w-full"
            >
              <AnimatedLine className="w-px h-6 md:hidden mb-0" delay={0.4} />
              <GlassCard className="w-full h-full flex flex-col items-center gap-3 p-6 bg-black/60 border-white/10 hover:border-yugaant-orange/50 transition-colors group">
                <Mic className="w-8 h-8 text-zinc-500 group-hover:text-yugaant-orange transition-colors" strokeWidth={1.5} />
                <h4 className="font-bold uppercase text-sm text-center text-zinc-200">Long-Form Podcast</h4>
                <p className="text-xs text-zinc-500 text-center">45-60 Min Audio/Video</p>
              </GlassCard>
            </motion.div>

            {/* Doc Cut */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="flex flex-col items-center w-full"
            >
              <AnimatedLine className="w-px h-6 md:hidden mb-0" delay={0.5} />
              <GlassCard className="w-full h-full flex flex-col items-center gap-3 p-6 bg-black/60 border-white/10 hover:border-yugaant-orange/50 transition-colors group">
                <Film className="w-8 h-8 text-zinc-500 group-hover:text-yugaant-orange transition-colors" strokeWidth={1.5} />
                <h4 className="font-bold uppercase text-sm text-center text-zinc-200">Mini-Documentary</h4>
                <p className="text-xs text-zinc-500 text-center">10-15 Min Cinematic Cut</p>
              </GlassCard>
            </motion.div>

            {/* Shorts */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="flex flex-col items-center w-full"
            >
              <AnimatedLine className="w-px h-6 md:hidden mb-0" delay={0.6} />
              <GlassCard className="w-full h-full flex flex-col items-center gap-3 p-6 bg-black/60 border-white/10 hover:border-yugaant-orange/50 transition-colors group">
                <Smartphone className="w-8 h-8 text-zinc-500 group-hover:text-yugaant-orange transition-colors" strokeWidth={1.5} />
                <h4 className="font-bold uppercase text-sm text-center text-zinc-200">Micro-Content</h4>
                <p className="text-xs text-zinc-500 text-center">Shorts & Reels</p>
              </GlassCard>
            </motion.div>

          </div>

          {/* Desktop connecting lines back to center */}
          <div className="hidden md:block absolute bottom-[-24px] left-1/6 right-1/6">
            <div className="absolute left-0 bottom-0 w-px h-6 bg-white/10" />
            <div className="absolute right-0 bottom-0 w-px h-6 bg-white/10" />
            <AnimatedLine className="w-full h-px absolute bottom-0" delay={0.7} horizontal />
          </div>
        </div>

        <AnimatedLine className="w-px h-10 md:h-12 mt-0 md:mt-6" delay={0.8} />

        {/* Step 4: Distribution */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
          className="w-full max-w-2xl"
        >
          <GlassCard className="flex flex-col items-center gap-3 p-6 bg-black/80 border-yugaant-orange/30 shadow-[0_0_20px_rgba(255,84,0,0.05)]">
            <Globe className="w-8 h-8 text-yugaant-orange" strokeWidth={1.5} />
            <h3 className="font-bold tracking-widest uppercase text-sm text-white">Multi-Platform Distribution</h3>
            <p className="text-xs text-zinc-400">YouTube, Spotify, Instagram, TikTok, LinkedIn</p>
          </GlassCard>
        </motion.div>

      </div>
    </Section>
  );
};
