import React from "react";
import { Section, SectionTitle, GlassCard } from "../ui/Layout";
import { Zap, Mic, Share2, Users, Search, BookOpen } from "lucide-react";
import { motion } from "motion/react";

const reasons = [
  {
    icon: <Zap className="w-8 h-8 text-yugaant-orange" />,
    title: "Brand Building",
    desc: "Elevate Yugaant from a performing band to a thought-leading musical entity. This positions you for premium festival slots and high-tier collaborations."
  },
  {
    icon: <BookOpen className="w-8 h-8 text-white" />,
    title: "Artist Storytelling",
    desc: "Humanize the musicians. By sharing the untold struggles, the creative process, and the long-term vision, audiences will emotionally invest in your success."
  },
  {
    icon: <Mic className="w-8 h-8 text-yugaant-red" />,
    title: "Long-form Authority",
    desc: "Establish true authority and deep fan connection through extended, unscripted conversations that showcase the intellect behind the music."
  },
  {
    icon: <Share2 className="w-8 h-8 text-zinc-400" />,
    title: "The Marketing Engine",
    desc: "A highly efficient strategy: we generate months worth of micro-content (shorts, reels, quotes) from a single, high-quality master recording day."
  },
  {
    icon: <Users className="w-8 h-8 text-white" />,
    title: "Community Cultivation",
    desc: "Transform casual listeners into a fiercely loyal fanbase that connects with your individual personalities, not just the finished tracks."
  },
  {
    icon: <Search className="w-8 h-8 text-yugaant-orange" />,
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
            <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
              {reason.icon}
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">{reason.title}</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">{reason.desc}</p>
          </GlassCard>
        ))}
      </div>
    </Section>
  );
};
