import React from "react";
import { Section, SectionTitle } from "../ui/Layout";
import { motion } from "motion/react";

const timelineEvents = [
  {
    year: "Early Life",
    title: "Classical Foundations",
    description: "Deeply rooted in Indian classical training, developing a profound understanding of raagas and vocal control."
  },
  {
    year: "The Hustle",
    title: "Scratch Vocal Journey",
    description: "Years spent behind the mic as a scratch vocalist, learning the rigorous discipline of studio recording and commercial production."
  },
  {
    year: "Genesis",
    title: "Formation of Yugaant",
    description: "Merging classical sensibilities with modern rock aesthetics, creating a unique vocal signature that would define the band's sound."
  },
  {
    year: "Breakthrough",
    title: "Mainstream Recognition",
    description: "Captivating audiences across major festivals and digital platforms, establishing himself as a premier frontman in the fusion space."
  },
  {
    year: "Present",
    title: "The Current Vision",
    description: "Pushing the boundaries of the genre, mentoring upcoming talent, and preparing for the next evolution of Yugaant's musical journey."
  }
];

export const Ashish = () => {
  return (
    <Section id="ashish" className="bg-white/[0.02]">
      <SectionTitle
        title="About Ashish Naskar"
        subtitle="The voice that bridges generations. A journey from classical discipline to rock stardom."
      />

      <div className="flex flex-col lg:flex-row gap-16 items-start">
        <div className="lg:w-1/3 sticky top-32">
          <div className="relative rounded-2xl overflow-hidden aspect-[3/4]">
             <img 
              src="https://lh3.googleusercontent.com/d/1CLu2Sn1nw-UljxVt4RHvAikd5YHqH7ZO=w1000" 
              alt="Ashish Naskar"
              className="w-full h-full object-cover filter grayscale contrast-125"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6">
              <h3 className="text-2xl font-bold text-white">Ashish Naskar</h3>
              <p className="text-yugaant-orange">Lead Vocalist</p>
            </div>
          </div>
        </div>

        <div className="lg:w-2/3">
          <div className="relative border-l border-white/10 pl-8 md:pl-12 py-4 space-y-16">
            {timelineEvents.map((event, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="absolute -left-[41px] md:-left-[57px] top-1 w-4 h-4 rounded-full bg-yugaant-red ring-4 ring-black" />
                <span className="text-sm font-bold tracking-widest text-zinc-500 uppercase mb-2 block">
                  {event.year}
                </span>
                <h4 className="text-2xl font-semibold text-white mb-3">{event.title}</h4>
                <p className="text-zinc-400 leading-relaxed max-w-xl">{event.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto mt-24 space-y-12">
        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="p-8 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 relative"
        >
          <div className="text-6xl text-white/10 absolute top-4 left-4 font-serif">"</div>
          <p className="text-xl md:text-2xl font-light text-zinc-200 leading-relaxed relative z-10 italic pl-6">
            The goal has never been just to sing songs. It has always been about creating an experience that resonates with the soul while shaking the ground beneath your feet.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 rounded-2xl bg-yugaant-red/10 border border-yugaant-red/20"
        >
          <h3 className="text-2xl font-bold text-white mb-4">Proposed Format: Intimate Interview Video</h3>
          <p className="text-zinc-300 leading-relaxed">
            To truly capture Ashish's personal evolution from rigorous classical training to commanding rock stages, we recommend a dedicated, 1-on-1 interview style video. This stripped-down, highly focused format provides the emotional breathing room needed to discuss vocal techniques, personal hurdles, and deep artistic philosophies without the beautiful chaos of the full band dynamic.
          </p>
        </motion.div>
      </div>
    </Section>
  );
};
