import React, { useState } from "react";
import { Section, SectionTitle } from "../ui/Layout";
import { motion, AnimatePresence } from "motion/react";

const formats = [
  {
    id: "tab1",
    title: "Hosted by Karishma Ma'am",
    purpose: "Formal introduction of the entire band. Guided narrative.",
    audience: "New listeners, industry professionals.",
    pros: "Structured, professional, covers all bases systematically.",
    duration: "60-90 mins",
    why: "Perfect if the goal is a clean, PR-friendly piece that introduces everyone equally."
  },
  {
    id: "tab2",
    title: "Band Roundtable",
    purpose: "Unfiltered, conversational dynamic between band members.",
    audience: "Core fans, music enthusiasts.",
    pros: "Highly engaging, showcases chemistry and inside jokes.",
    duration: "90-120 mins",
    why: "Captures the true essence and brotherhood of Yugaant."
  },
  {
    id: "tab3",
    title: "Ashish Solo Doc",
    purpose: "Deep dive into the frontman's mind and journey.",
    audience: "Vocalists, hardcore fans, artistic community.",
    pros: "Intense, focused storytelling. High emotional resonance.",
    duration: "45-60 mins",
    why: "Builds a strong singular personality that draws people into the band."
  },
  {
    id: "tab4",
    title: "Hybrid (Talk + Play)",
    purpose: "Breaking down tracks live in the studio.",
    audience: "Musicians, producers, general audience.",
    pros: "Audio-visual treat. Shows technical prowess alongside personality.",
    duration: "90 mins",
    why: "Proves that they are not just talkers, but world-class musicians."
  }
];

export const PodcastFormats = () => {
  const [activeTab, setActiveTab] = useState(formats[0].id);

  return (
    <Section id="formats">
      <SectionTitle
        title="Podcast Formats"
        subtitle="Exploring the best architectural approach for the master recording."
      />

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Tabs Navigation */}
        <div className="flex flex-row lg:flex-col gap-2 overflow-x-auto pb-4 lg:pb-0 lg:w-1/3 hide-scrollbar">
          {formats.map((format) => (
            <button
              key={format.id}
              onClick={() => setActiveTab(format.id)}
              className={`text-left px-6 py-4 rounded-xl transition-all duration-300 flex-shrink-0 lg:flex-shrink-auto ${
                activeTab === format.id 
                  ? "bg-white text-black font-semibold shadow-lg" 
                  : "bg-white/5 text-zinc-400 hover:bg-white/10"
              }`}
            >
              {format.title}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="lg:w-2/3 min-h-[400px]">
          <AnimatePresence mode="wait">
            {formats.map((format) => (
              activeTab === format.id && (
                <motion.div
                  key={format.id}
                  initial={{ opacity: 0, x: 20, filter: "blur(5px)" }}
                  animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, x: -20, filter: "blur(5px)" }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 h-full flex flex-col justify-center relative overflow-hidden"
                >
                  {/* Subtle background glow */}
                  <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-yugaant-red/10 rounded-full blur-[80px] pointer-events-none" />
                  
                  <h3 className="text-3xl font-bold text-white mb-8 relative z-10">{format.title}</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                    <div>
                      <h4 className="text-sm font-bold tracking-widest text-zinc-500 uppercase mb-2">Purpose</h4>
                      <p className="text-zinc-200">{format.purpose}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold tracking-widest text-zinc-500 uppercase mb-2">Audience</h4>
                      <p className="text-zinc-200">{format.audience}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold tracking-widest text-zinc-500 uppercase mb-2">Pros</h4>
                      <p className="text-zinc-200">{format.pros}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold tracking-widest text-zinc-500 uppercase mb-2">Duration</h4>
                      <p className="text-zinc-200">{format.duration}</p>
                    </div>
                    <div className="md:col-span-2 mt-4 p-6 rounded-xl bg-black/50 border border-white/5">
                      <h4 className="text-sm font-bold tracking-widest text-yugaant-orange uppercase mb-2">Why Choose This</h4>
                      <p className="text-white italic">"{format.why}"</p>
                    </div>
                  </div>
                </motion.div>
              )
            ))}
          </AnimatePresence>
        </div>
      </div>
    </Section>
  );
};
