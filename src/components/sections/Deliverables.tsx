import React from "react";
import { Section, SectionTitle, GlassCard } from "../ui/Layout";
import { motion } from "motion/react";
import { AnimatedNumber } from "../ui/AnimatedNumber";
import { Film, Smartphone, Headphones, PlaySquare, Image as ImageIcon, MessageSquareQuote } from "lucide-react";

const deliverables = [
  { icon: <Film className="w-5 h-5" />, category: "Main Feature", title: "Full Podcast", end: 1, suffix: "", type: "Master File (4K)" },
  { icon: <PlaySquare className="w-5 h-5" />, category: "Promo", title: "Teaser", end: 1, suffix: "", type: "Social Optimized" },
  { icon: <PlaySquare className="w-5 h-5" />, category: "Promo", title: "Cinematic Trailer", end: 1, suffix: "", type: "60 seconds" },
  { icon: <ImageIcon className="w-5 h-5" />, category: "Visuals", title: "Thumbnail Covers", end: 3, suffix: "", type: "For Podcast" },
  { icon: <Smartphone className="w-5 h-5" />, category: "Micro Content", title: "Reels", end: 10, suffix: "+", type: "Depends on content" },
  { icon: <Film className="w-5 h-5" />, category: "Featurette", title: "Interview Style Videos", end: 5, suffix: "", type: "1 for each band member" },
];

export const Deliverables = () => {
  return (
    <Section id="deliverables">
      <SectionTitle
        title="Content Deliverables"
        subtitle="A massive asset library generated from a single production effort."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {deliverables.map((item, index) => (
          <GlassCard 
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="flex flex-col items-center justify-center text-center py-10 relative overflow-hidden group"
          >
            {/* Background glow effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/0 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-zinc-500 font-medium mb-4 relative z-10">
              <span className="text-yugaant-red">{item.icon}</span>
              {item.category}
            </div>
            <div className="text-5xl md:text-6xl font-bold text-white mb-2 relative z-10 group-hover:text-yugaant-red transition-colors duration-500">
              <AnimatedNumber value={item.end} suffix={item.suffix} duration={2} />
            </div>
            <h4 className="text-lg font-semibold text-zinc-200 mb-1 relative z-10">{item.title}</h4>
            <p className="text-xs text-zinc-500 relative z-10">{item.type}</p>
          </GlassCard>
        ))}
      </div>
    </Section>
  );
};
