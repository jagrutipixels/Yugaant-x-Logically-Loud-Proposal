import React, { useState } from "react";
import { Section, SectionTitle, GlassCard } from "../ui/Layout";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";

const questions = [
  {
    category: "Origins & The Hustle",
    items: [
      "Take us back to the scratch vocal days. What was the most brutal session you ever had?",
      "When did you realize that Indian Classical and Rock weren't enemies, but siblings?",
      "Who was the first person to believe in Yugaant before the world did?"
    ]
  },
  {
    category: "Music & Process",
    items: [
      "When writing a track, does the raaga dictate the riff, or does the riff demand the raaga?",
      "What happens in the rehearsal room when two virtuosos fundamentally disagree on a solo?",
      "Describe the feeling of 10,000 people singing a hook you wrote in your bedroom."
    ]
  },
  {
    category: "The Industry",
    items: [
      "Is fusion music becoming a gimmick in the mainstream, and how do you protect its integrity?",
      "What is the biggest lie independent artists are told today?",
      "How do you balance the 'art' of music with the 'business' of survival?"
    ]
  },
  {
    category: "Rapid Fire",
    items: [
      "Best live gig venue in India?",
      "One instrument you wish you could play?",
      "If Yugaant was a movie, who would direct it?"
    ]
  }
];

export const QuestionBank = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section id="questions">
      <SectionTitle
        title="Question Bank"
        subtitle="Conversations designed to extract raw, unfiltered stories."
      />

      <div className="max-w-4xl mx-auto space-y-4">
        {questions.map((q, index) => {
          const isOpen = openIndex === index;
          return (
            <GlassCard 
              key={index} 
              className="p-0 overflow-hidden"
            >
              <button
                className="w-full px-8 py-6 flex justify-between items-center bg-transparent focus:outline-none"
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <h3 className={`text-xl font-semibold transition-colors ${isOpen ? 'text-yugaant-orange' : 'text-white'}`}>
                  {q.category}
                </h3>
                <div className={`p-2 rounded-full bg-white/5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                  {isOpen ? <Minus className="w-5 h-5 text-white" /> : <Plus className="w-5 h-5 text-white" />}
                </div>
              </button>
              
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-8 pb-8 space-y-4">
                      {q.items.map((item, i) => (
                        <div key={i} className="flex items-start space-x-4 pl-4 border-l-2 border-white/10">
                          <span className="text-yugaant-red mt-1 text-lg">✦</span>
                          <p className="text-zinc-300 text-lg">{item}</p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </GlassCard>
          );
        })}
      </div>
    </Section>
  );
};
