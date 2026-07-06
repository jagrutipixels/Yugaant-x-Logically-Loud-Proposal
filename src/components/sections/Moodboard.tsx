import React from "react";
import { Section, SectionTitle } from "../ui/Layout";
import { motion } from "motion/react";

const fullPodcastRefs = [
  { id: "dkq9d_-PoMo", title: "Full Podcast Reference 1" },
  { id: "Ap1mM2fMBgI", title: "Full Podcast Reference 2" },
  { id: "iwCTDbvvctU", title: "Full Podcast Reference 3" },
  { id: "y9U0yUnlr9w", title: "Full Podcast Reference 4" },
];

const singleInterviewRefs = [
  { id: "Pbw5rONnIzM", title: "Single Interview Reference 1" },
  { id: "mPQ2RvB7G8U", title: "Single Interview Reference 2" },
];

export const Moodboard = () => {
  return (
    <Section id="moodboard" className="bg-black/20 backdrop-blur-sm">
      <SectionTitle
        title="Visual References & Moodboard"
        subtitle="Analyzing the visual style, lighting, and composition of successful formats in the same space."
      />

      <div className="space-y-12">
        <div>
          <h3 className="text-2xl font-bold text-white mb-6 border-b border-white/10 pb-4">Band Full Podcast Style</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {fullPodcastRefs.map((ref, index) => (
              <motion.div
                key={ref.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative rounded-2xl overflow-hidden aspect-video border border-white/5 bg-black/50"
              >
                <div className="absolute inset-0 bg-black/40 z-10 group-hover:bg-transparent transition-colors duration-500" />
                <img 
                  src={`https://img.youtube.com/vi/${ref.id}/maxresdefault.jpg`}
                  alt={ref.title}
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105"
                />
                <a 
                  href={`https://youtube.com/watch?v=${ref.id}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="absolute bottom-4 left-4 z-20 px-4 py-2 bg-black/60 backdrop-blur-md rounded-full text-xs text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity flex items-center space-x-2"
                >
                  <svg className="w-4 h-4 text-yugaant-red" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
                  <span>View Source</span>
                </a>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-white mb-6 border-b border-white/10 pb-4">Solo Intimate Interview Style</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {singleInterviewRefs.map((ref, index) => (
              <motion.div
                key={ref.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative rounded-2xl overflow-hidden aspect-video border border-white/5 bg-black/50"
              >
                <div className="absolute inset-0 bg-black/40 z-10 group-hover:bg-transparent transition-colors duration-500" />
                <img 
                  src={`https://img.youtube.com/vi/${ref.id}/maxresdefault.jpg`}
                  alt={ref.title}
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105"
                />
                <a 
                  href={`https://youtube.com/watch?v=${ref.id}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="absolute bottom-4 left-4 z-20 px-4 py-2 bg-black/60 backdrop-blur-md rounded-full text-xs text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity flex items-center space-x-2"
                >
                  <svg className="w-4 h-4 text-yugaant-red" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
                  <span>View Source</span>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};
