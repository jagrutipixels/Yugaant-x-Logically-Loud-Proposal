import React from "react";
import { Section, SectionTitle, GlassCard } from "../ui/Layout";
import { Target, BookOpen, Mic2, Layers, Users, TrendingUp } from "lucide-react";
import { motion } from "motion/react";

const reasons = [
  {
    icon: <Target className="w-8 h-8 text-yugaant-orange drop-shadow-[0_0_15px_rgba(255,84,0,0.5)]" />,
    title: "Brand Building",
    desc: "Elevate Yugaant from a performing band to a thought-leading musical entity. This positions you for premium festival slots and high-tier collaborations."
  },
  {
    icon: <BookOpen className="w-8 h-8 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]" />,
    title: "Artist Storytelling",
    desc: "Humanize the musicians. By sharing the untold struggles, the creative process, and the long-term vision, audiences will emotionally invest in your success."
  },
  {
    icon: <Mic2 className="w-8 h-8 text-yugaant-red drop-shadow-[0_0_15px_rgba(193,18,31,0.5)]" />,
    title: "Long-form Authority",
    desc: "Establish true authority and deep fan connection through extended, unscripted conversations that showcase the intellect behind the music."
  },
  {
    icon: <Layers className="w-8 h-8 text-zinc-400 drop-shadow-[0_0_15px_rgba(161,161,170,0.5)]" />,
    title: "The Marketing Engine",
    desc: "A highly efficient strategy: we generate months worth of micro-content (shorts, reels, quotes) from a single, high-quality master recording day."
  },
  {
    icon: <Users className="w-8 h-8 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]" />,
    title: "Community Cultivation",
    desc: "Transform casual listeners into a fiercely loyal fanbase that connects with your individual personalities, not just the finished tracks."
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-yugaant-orange drop-shadow-[0_0_15px_rgba(255,84,0,0.5)]" />,
    title: "Algorithmic Discovery",
    desc: "Podcasts and visual shorts are heavily favored by modern social algorithms, acting as a powerful top-of-funnel gateway for new listeners to discover your music."
  }
];

export const WhyPodcast = () => {
  return (
    <Section id="strategy">
      <SectionTitle
        title="Why This Podcast?"
        subtitle="Moving beyond the music to build a legacy. The strategic value of long-form visual storytelling."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reasons.map((reason, index) => (
          <GlassCard 
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group"
          >
            <div className="mb-6 transform group-hover:scale-110 group-hover:-translate-y-1 transition-transform duration-500">
              {reason.icon}
            </div>
            <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-zinc-200 transition-colors duration-300">{reason.title}</h3>
            <p className="text-zinc-400 text-sm leading-relaxed group-hover:text-zinc-300 transition-colors duration-300">{reason.desc}</p>
          </GlassCard>
        ))}
      </div>
    </Section>
  );
};
