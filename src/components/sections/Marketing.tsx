import React from "react";
import { Section, SectionTitle } from "../ui/Layout";
import { motion } from "motion/react";
import { Filter } from "lucide-react";

const funnelSteps = [
  { label: "Master Content (Podcast / Doc)", desc: "The core foundational asset.", width: "100%", color: "bg-white/20" },
  { label: "Micro-Content (15+ Shorts/Reels)", desc: "Wide distribution across algorithms.", width: "80%", color: "bg-yugaant-orange/40" },
  { label: "Traffic Routing (IG/YT to Spotify)", desc: "Converting passive viewers to active listeners.", width: "60%", color: "bg-yugaant-red/60" },
  { label: "PR & Industry Authority", desc: "Leveraging the content for festival pitches.", width: "40%", color: "bg-yugaant-red/80" },
  { label: "Brand Growth & Bookings", desc: "Higher tier gigs, better negotiation power.", width: "25%", color: "bg-yugaant-red" },
];

export const Marketing = () => {
  return (
    <Section id="marketing">
      <SectionTitle
        title="Marketing Strategy"
        subtitle="The conversion funnel: Turning content into real-world momentum."
      />

      <div className="max-w-4xl mx-auto flex flex-col items-center space-y-4">
        <Filter className="w-12 h-12 text-zinc-500 mb-8" />
        
        {funnelSteps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
            style={{ width: step.width }}
            className={`relative p-6 text-center rounded-xl flex flex-col items-center justify-center overflow-hidden group`}
          >
            <div className={`absolute inset-0 ${step.color} backdrop-blur-md opacity-80 group-hover:opacity-100 transition-opacity`} />
            <h4 className="relative z-10 text-xl font-bold text-white tracking-tight mb-1">{step.label}</h4>
            <p className="relative z-10 text-sm text-white/80 font-medium">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};
