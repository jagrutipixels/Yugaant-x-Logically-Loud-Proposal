import React from "react";
import { Section, SectionTitle, GlassCard } from "../ui/Layout";
import { motion } from "motion/react";
import { Target, Clock, Film, LayoutList } from "lucide-react";

const overviewData = [
  {
    icon: <Target className="w-6 h-6 text-yugaant-red" />,
    title: "Project Goal",
    description: "To create the definitive visual and conversational story of Yugaant, capturing your journey, unique sound, and future vision in a way that deeply connects with fans and industry professionals.",
  },
  {
    icon: <LayoutList className="w-6 h-6 text-yugaant-orange" />,
    title: "Key Formats",
    description: "Long-form Podcast, Intimate Solo Interviews, Mini Documentary, and bite-sized Social Shorts.",
  },
  {
    icon: <Clock className="w-6 h-6 text-zinc-300" />,
    title: "Duration",
    description: "A 90-120 minute master feature, strategically sliced into multiple high-retention formats.",
  },
  {
    icon: <Film className="w-6 h-6 text-zinc-300" />,
    title: "Execution",
    description: "An 8-week end-to-end roadmap from pre-production planning to a multi-platform launch.",
  },
];

export const Overview = () => {
  return (
    <Section id="overview">
      <SectionTitle
        title="Project Overview"
        subtitle="A strategic blueprint for immortalizing the sound and story of India's premier fusion rock band."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {overviewData.map((item, index) => (
          <GlassCard
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-6">
              {item.icon}
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
            <p className="text-zinc-400 leading-relaxed text-sm">{item.description}</p>
          </GlassCard>
        ))}
      </div>
      <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <GlassCard className="flex items-center space-x-6">
          <div className="text-sm text-zinc-500 uppercase tracking-widest font-medium">Client</div>
          <div className="text-2xl font-bold text-white tracking-tight">Yugaant</div>
        </GlassCard>
        <GlassCard className="flex items-center space-x-6">
          <div className="text-sm text-zinc-500 uppercase tracking-widest font-medium">Production</div>
          <div className="text-2xl font-bold text-white tracking-tight">Logically Loud</div>
        </GlassCard>
      </div>
    </Section>
  );
};
