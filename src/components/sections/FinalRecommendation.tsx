import React from "react";
import { Section } from "../ui/Layout";
import { motion } from "motion/react";

export const FinalRecommendation = () => {
  return (
    <Section id="proposal" className="min-h-[80vh] flex items-center justify-center relative overflow-hidden bg-black/20 backdrop-blur-sm">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-yugaant-red/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-sm font-bold tracking-widest text-zinc-500 uppercase mb-8"
        >
          Final Recommendation
        </motion.p>
        
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter text-white mb-12 leading-tight"
        >
          "The objective is not simply to record a podcast.<br/>
          <span className="text-zinc-500">The objective is to create the definitive visual story of Yugaant.</span>"
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left mt-24 pt-12 border-t border-white/10"
        >
          <div>
            <h4 className="text-xl font-semibold text-white mb-4">Project Benefits</h4>
            <p className="text-zinc-400 leading-relaxed text-sm">Creates a high-value anchor asset that feeds all social channels for a quarter, establishing authority and deepening fan connection.</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-white mb-4">Long-Term Value</h4>
            <p className="text-zinc-400 leading-relaxed text-sm">Serves as the ultimate electronic press kit (EPK) element for securing tier-1 festival slots and premium brand collaborations.</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-white mb-4">Next Steps</h4>
            <ul className="space-y-2 text-zinc-400 text-sm">
              <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-yugaant-orange mr-2" /> Approve Format Strategy</li>
              <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-yugaant-orange mr-2" /> Lock Studio & Shoot Dates</li>
              <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-yugaant-orange mr-2" /> Finalize Question Bank</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};
