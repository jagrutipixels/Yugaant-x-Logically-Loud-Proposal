import React from "react";
import { Section, SectionTitle, GlassCard } from "../ui/Layout";
import { motion } from "motion/react";
import { ArrowDown } from "lucide-react";

const steps = [
  { title: "Research", tasks: ["Deep Dive into Band History", "Audience Demographic Analysis", "Competitor Content Review"] },
  { title: "Creative Treatment", tasks: ["Visual Moodboarding", "Set Design & Lighting Strategy", "Narrative Arc Development"] },
  { title: "Question Bank", tasks: ["Drafting Primary Prompts", "Developing Emotional Hooks", "Rapid Fire Setup"] },
  { title: "Asset Collection", tasks: ["Gathering Archival Footage", "Sourcing High-Res Photographs", "Organizing Master Audios"] },
  { title: "Shoot Planning", tasks: ["Location Scouting & Booking", "Equipment Rental & Logistics", "Call Sheet Preparation"] },
  { title: "Production", tasks: ["Multi-Cam Setup", "High-Fidelity Audio Syncing", "Live Interview Recording", "BTS Content Capture"] },
  { title: "Editing", tasks: ["Rough Cut Assembly", "Color Grading & Correction", "Audio Mixing & Mastering", "Motion Graphics Integration"] },
  { title: "Review", tasks: ["Internal Quality Assurance", "Client Feedback Rounds", "Final Polish & Export"] },
  { title: "Marketing", tasks: ["Teaser & Trailer Strategy", "Social Media Hook Generation", "Release Schedule Planning"] },
  { title: "Distribution", tasks: ["YouTube Premiere Setup", "Spotify Video Podcast Upload", "Cross-Platform Syndication"] },
  { title: "Long-term Content", tasks: ["Shorts & Reels Batching", "Quote Card Design", "Evergreen Asset Archiving"] }
];

export const Workflow = () => {
  return (
    <Section id="workflow">
      <SectionTitle
        title="Production Workflow"
        subtitle="The systematic pipeline from concept to distribution. Hover to view sub-tasks."
        className="text-center mx-auto"
      />

      <div className="max-w-5xl mx-auto mt-12 relative">
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-white/0 via-yugaant-red/50 to-white/0 -translate-x-1/2" />
        
        <div className="space-y-4 md:space-y-8 relative z-10 flex flex-col items-center">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex justify-center w-full relative"
            >
              <div className="flex flex-col items-center relative group w-full">
                {/* Central Card */}
                <GlassCard className="relative z-20 py-4 px-6 md:py-5 md:px-8 w-full max-w-[280px] text-center bg-black/80 backdrop-blur-xl border-white/10 group-hover:border-yugaant-orange group-hover:shadow-[0_0_20px_rgba(255,84,0,0.2)] transition-all duration-500 cursor-pointer">
                  <span className="text-sm font-bold tracking-widest text-zinc-300 uppercase transition-colors duration-300 group-hover:text-yugaant-orange block">{step.title}</span>
                </GlassCard>

                {/* Desktop Branch (Side Panel) */}
                <div className={`absolute top-1/2 -translate-y-1/2 w-[320px] opacity-0 pointer-events-none transition-all duration-500 group-hover:opacity-100 group-hover:pointer-events-auto hidden md:block z-10
                  ${index % 2 === 0 
                    ? 'right-[calc(50%+140px)] pr-8 translate-x-8 group-hover:translate-x-0' 
                    : 'left-[calc(50%+140px)] pl-8 -translate-x-8 group-hover:translate-x-0'}`}
                >
                  {/* Connecting Line */}
                  <div className={`absolute top-1/2 -translate-y-1/2 h-px bg-gradient-to-r ${index % 2 === 0 ? 'from-transparent to-yugaant-orange/50 right-0' : 'from-yugaant-orange/50 to-transparent left-0'} w-8`} />
                  
                  <GlassCard className="p-5 bg-black/95 backdrop-blur-xl border-yugaant-orange/30 shadow-[0_0_15px_rgba(255,84,0,0.1)]">
                    <ul className="space-y-3 text-left">
                      {step.tasks.map((task, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-zinc-300">
                          <span className="text-yugaant-red mt-0.5 leading-none">✦</span>
                          <span className="leading-snug">{task}</span>
                        </li>
                      ))}
                    </ul>
                  </GlassCard>
                </div>

                {/* Mobile Dropdown */}
                <div className="md:hidden grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-in-out w-full max-w-[280px]">
                  <div className="overflow-hidden">
                    <ul className="mt-2 p-4 border border-yugaant-orange/20 rounded-xl bg-black/90 backdrop-blur-xl space-y-2 text-left opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 shadow-[0_0_15px_rgba(255,84,0,0.1)]">
                      {step.tasks.map((task, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-zinc-300">
                          <span className="text-yugaant-red mt-0.5 leading-none">✦</span>
                          <span className="leading-snug">{task}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};
