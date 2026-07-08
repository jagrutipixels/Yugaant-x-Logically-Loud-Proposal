import React from "react";
import { Section, SectionTitle, GlassCard } from "../ui/Layout";
import { motion } from "motion/react";
import { Film, Music, Newspaper, Image as ImageIcon, Briefcase, Scale, Camera } from "lucide-react";

const requirements = [
  {
    icon: <Film className="w-6 h-6 text-yugaant-orange" />,
    title: "Archival Footage",
    items: ["Original concert footage", "Behind-the-scenes footage", "Phone recordings", "Practice sessions", "Studio recordings", "Travel footage", "Tour footage", "Festival footage", "College fest footage", "Soundcheck footage", "Band rehearsals", "Crowd reactions", "Award moments", "Backstage moments", "Recording sessions", "Drone footage"]
  },
  {
    icon: <Music className="w-6 h-6 text-yugaant-red" />,
    title: "Music Assets",
    items: ["Original songs", "Instrumentals", "Acoustic versions", "Stems if available", "Master files", "Lyrics", "Release dates", "Credits"]
  },
  {
    icon: <Newspaper className="w-6 h-6 text-white" />,
    title: "Media",
    items: ["Articles", "Press releases", "Magazine coverage", "Interviews", "TV appearances", "Awards", "Certificates", "Festival posters", "News coverage"]
  },
  {
    icon: <ImageIcon className="w-6 h-6 text-zinc-400" />,
    title: "Personal Assets",
    items: ["Childhood photographs", "Family photographs", "Early performance videos", "Classical training footage", "College memories", "Old notebooks", "Songwriting journals", "Any emotional memories they would like to share"]
  },
  {
    icon: <Briefcase className="w-6 h-6 text-yugaant-orange" />,
    title: "Branding",
    items: ["Current logo", "Logo variations", "Brand colours", "Fonts", "Brand guidelines", "Social handles", "Website", "Booking information"]
  },
  {
    icon: <Scale className="w-6 h-6 text-yugaant-red" />,
    title: "Legal",
    items: ["Music usage approval", "Footage permissions", "Photography permissions", "Re-upload permissions", "Credit preferences"]
  },
  {
    icon: <Camera className="w-6 h-6 text-white" />,
    title: "Shoot Day",
    items: ["Wardrobe references", "Instrument list", "Props", "Merchandise", "Special requests", "Technical requirements"]
  }
];

export const Requirements = () => {
  return (
    <Section id="requirements" className="bg-white/[0.02]">
      <SectionTitle
        title="Requirements From Yugaant"
        subtitle="Everything required before production begins."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {requirements.map((req, index) => (
          <GlassCard 
            key={index} 
            className="flex flex-col h-full border-white/5 hover:border-yugaant-red/30 transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
              <div className="p-2 rounded-lg bg-white/5">
                {req.icon}
              </div>
              <h3 className="text-xl font-bold text-white">{req.title}</h3>
            </div>
            <ul className="space-y-3 flex-1">
              {req.items.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-yugaant-red/50 mt-2 flex-shrink-0" />
                  <span className="text-sm text-zinc-400">{item}</span>
                </li>
              ))}
            </ul>
          </GlassCard>
        ))}
      </div>
    </Section>
  );
};
