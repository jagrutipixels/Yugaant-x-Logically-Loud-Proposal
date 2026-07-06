import React from "react";
import { Section, SectionTitle, GlassCard } from "../ui/Layout";
import { motion } from "motion/react";
import { Disc3, Music, Award, Mic2 } from "lucide-react";

export const Yugaant = () => {
  return (
    <Section id="yugaant">
      <SectionTitle
        title="Who is Yugaant?"
        subtitle="Redefining Indian Fusion Rock with soulful melodies and electrifying energy."
      />
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12">
        <div className="lg:col-span-8">
          <div className="relative h-[400px] rounded-3xl overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />
            <img 
              src="https://lh3.googleusercontent.com/d/1d3N4KwiCwQ2sw0XynMqknw5HbIWnOglU=w1000" 
              alt="Band Performance"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale"
            />
            <div className="absolute bottom-8 left-8 z-20">
              <h3 className="text-4xl font-bold text-white mb-2">The Band</h3>
              <p className="text-zinc-300 max-w-md">A collective of virtuosos blending classical Indian roots with contemporary rock stadium energy.</p>
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-4 flex flex-col gap-6">
          <GlassCard className="flex-1 flex flex-col justify-center">
            <Music className="w-8 h-8 text-yugaant-orange mb-4" />
            <h4 className="text-lg font-semibold text-white mb-2">Genre</h4>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-white/10 rounded-full text-xs text-zinc-300">Indian Fusion</span>
              <span className="px-3 py-1 bg-white/10 rounded-full text-xs text-zinc-300">Alternative Rock</span>
              <span className="px-3 py-1 bg-white/10 rounded-full text-xs text-zinc-300">Sufi</span>
            </div>
          </GlassCard>
          
          <GlassCard className="flex-1 flex flex-col justify-center">
            <Disc3 className="w-8 h-8 text-yugaant-red mb-4" />
            <h4 className="text-lg font-semibold text-white mb-2">Sound</h4>
            <p className="text-sm text-zinc-400">High-octane performances driven by soaring vocals, distorted guitars, and intricate rhythm sections.</p>
          </GlassCard>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
        {[
          { label: "Formed", value: "2018" },
          { label: "Live Shows", value: "150+" },
          { label: "Originals", value: "12" },
          { label: "Monthly Listeners", value: "500K+" }
        ].map((stat, i) => (
          <GlassCard key={i} className="text-center py-8">
            <div className="text-3xl md:text-5xl font-bold text-white mb-2">{stat.value}</div>
            <div className="text-xs uppercase tracking-widest text-zinc-500 font-medium">{stat.label}</div>
          </GlassCard>
        ))}
      </div>


    </Section>
  );
};
