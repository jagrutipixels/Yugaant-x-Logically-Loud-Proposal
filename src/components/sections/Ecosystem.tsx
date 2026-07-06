import React from "react";
import { Section, SectionTitle } from "../ui/Layout";
import { motion } from "motion/react";
import { ArrowDown } from "lucide-react";

const flowNodes = [
  { label: "Deep Research & Pre-Production", type: "primary" },
  { label: "Master Shoot (Podcast & Documentary Elements)", type: "primary" },
  { label: "Long-Form Podcast Episode", type: "secondary" },
  { label: "Mini-Documentary Cut", type: "secondary" },
  { label: "Micro-Content Extraction (Shorts & Reels)", type: "tertiary" },
  { label: "Multi-Platform Distribution (IG, YT, Spotify, LinkedIn)", type: "tertiary" },
  { label: "PR Case Study & Portfolio Updates", type: "final" },
];

export const Ecosystem = () => {
  return (
    <Section id="ecosystem" className="bg-white/[0.02]">
      <SectionTitle
        title="Content Ecosystem"
        subtitle="How one master recording fuels a comprehensive digital presence."
      />

      <div className="max-w-3xl mx-auto flex flex-col items-center">
        {flowNodes.map((node, index) => (
          <React.Fragment key={index}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`w-full md:w-2/3 p-6 rounded-2xl border text-center font-medium transition-all duration-300 hover:scale-[1.02] ${
                node.type === "primary"
                  ? "bg-white/10 border-white/20 text-white shadow-[0_0_30px_rgba(255,255,255,0.05)]"
                  : node.type === "secondary"
                  ? "bg-yugaant-red/10 border-yugaant-red/30 text-yugaant-red"
                  : node.type === "tertiary"
                  ? "bg-yugaant-orange/10 border-yugaant-orange/30 text-yugaant-orange"
                  : "bg-white border-white text-black font-bold"
              }`}
            >
              {node.label}
            </motion.div>
            
            {index < flowNodes.length - 1 && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                whileInView={{ opacity: 1, height: "auto" }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 + 0.1 }}
                className="py-4"
              >
                <ArrowDown className="w-6 h-6 text-zinc-500 animate-bounce" />
              </motion.div>
            )}
          </React.Fragment>
        ))}
      </div>
    </Section>
  );
};
