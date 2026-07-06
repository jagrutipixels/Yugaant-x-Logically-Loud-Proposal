import React from "react";
import { Section, SectionTitle, GlassCard } from "../ui/Layout";
import { motion } from "motion/react";

const deliverables = [
  { category: "Main Feature", title: "Full Podcast / Doc", count: "1", type: "Master File (4K)" },
  { category: "Micro Content", title: "Vertical Shorts & Reels", count: "15+", type: "Social Optimized" },
  { category: "Audio", title: "Podcast Audio", count: "1", type: "Spotify Ready" },
  { category: "Promo", title: "Cinematic Trailer", count: "1", type: "60 seconds" },
  { category: "Visuals", title: "Thumbnails & Cover Art", count: "3", type: "High CTR Designs" },
  { category: "Social", title: "Quote Cards", count: "5", type: "Instagram Carousel" },
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
            
            <div className="text-xs uppercase tracking-widest text-zinc-500 font-medium mb-4 relative z-10">{item.category}</div>
            <div className="text-5xl md:text-6xl font-bold text-white mb-2 relative z-10">{item.count}</div>
            <h4 className="text-lg font-semibold text-zinc-200 mb-1 relative z-10">{item.title}</h4>
            <p className="text-xs text-zinc-500 relative z-10">{item.type}</p>
          </GlassCard>
        ))}
      </div>
    </Section>
  );
};
