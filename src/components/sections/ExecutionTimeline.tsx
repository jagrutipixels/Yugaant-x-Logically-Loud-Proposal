import React from "react";
import { Section, SectionTitle, GlassCard } from "../ui/Layout";
import { motion } from "motion/react";
import { Calendar, CheckCircle2, Film, Smartphone, Tv } from "lucide-react";

const timelineEvents = [
  { date: "03 August 2026", title: "Shoot Day 01", desc: "Individual Interview Shoot (3 Band Members) (Approx. 3 Hours)" },
  { date: "04 August 2026", title: "Shoot Day 02", desc: "Individual Interviews (Remaining 2 Band Members) + Full Band Round Table Podcast Shoot" },
  { date: "10 August 2026", title: "Rough Cut Delivery", desc: "Full Podcast + All 5 Individual Interview Videos shared for review via private links." },
  { date: "13 August 2026", title: "Final Review Delivery", desc: "Edited Full Podcast, Final Edited Interview Videos (5), Cinematic Trailer (Rough Cut), and Teaser for approval before publishing." },
  { date: "14 August 2026", title: "Release 01", desc: "Promotional Reel published on YouTube & Instagram." },
  { date: "16 August 2026", title: "Teaser Release", desc: "Official Teaser Release" },
  { date: "17 August 2026", title: "Vertical Teaser", desc: "Vertical Version of Teaser released on Instagram." },
  { date: "18 August 2026", title: "Interview Episode 01", desc: "Interview Episode 01 (Ashish) released on YouTube." },
  { date: "19 August 2026", title: "Vertical Episode 01", desc: "Vertical Version of Interview Episode 01 released on Instagram Reels." },
  { date: "20 August 2026", title: "Cinematic Trailer", desc: "Cinematic Trailer released on YouTube." },
  { date: "21 August 2026", title: "Vertical Trailer", desc: "Vertical Version of Cinematic Trailer released on Instagram Reels." },
  { date: "24 August 2026", title: "Promo Reel 02", desc: "Podcast Promotional Reel 02 (Trending Topic / High Engagement Clip)." },
  { date: "26 August 2026", title: "Interview Episode 02", desc: "Interview Episode 02 released on YouTube." },
  { date: "27 August 2026", title: "Vertical Episode 02", desc: "Vertical Version of Interview Episode 02 released on Instagram Reels." },
  { date: "30 August 2026", title: "Podcast Premiere", desc: "Full Podcast Premiere on YouTube." },
  { date: "Post 30 August", title: "Ongoing Releases", desc: "Remaining Interview Episodes (03–05), their Vertical Versions, and remaining Podcast Reels released with ~1-day intervals." },
];

const deliverableGroups = [
  {
    icon: <Tv className="w-5 h-5 text-yugaant-orange" />,
    title: "Long-form Content",
    items: [
      { name: "Full Podcast", qty: "1" },
      { name: "Individual Interview Videos", qty: "5" },
      { name: "Cinematic Trailer", qty: "1" },
      { name: "Official Teaser", qty: "1" },
    ]
  },
  {
    icon: <Smartphone className="w-5 h-5 text-yugaant-orange" />,
    title: "Vertical Content",
    items: [
      { name: "Vertical Interview Videos", qty: "5" },
      { name: "Vertical Trailer", qty: "1" },
      { name: "Vertical Teaser", qty: "1" },
    ]
  },
  {
    icon: <Film className="w-5 h-5 text-yugaant-orange" />,
    title: "Social Media Content",
    items: [
      { name: "High-Impact Podcast Reels", qty: "10+" },
    ]
  }
];

export const ExecutionTimeline = () => {
  return (
    <Section id="execution-timeline">
      <SectionTitle
        title="Project Execution"
        subtitle="The project will follow a structured production, post-production, review, and content distribution schedule to ensure high-quality execution while maintaining a consistent release cadence."
        className="text-center mx-auto max-w-3xl"
      />

      <div className="max-w-4xl mx-auto mt-16 px-4">
        <h3 className="text-2xl font-bold text-white mb-10 flex items-center gap-3 justify-center md:justify-start">
          <Calendar className="w-6 h-6 text-yugaant-red" />
          Execution Timeline
        </h3>
        
        <div className="relative border-l border-white/10 ml-4 md:ml-0 space-y-8">
          {timelineEvents.map((event, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="relative pl-8 md:pl-10"
            >
              <div className="absolute -left-[5px] top-1.5 w-[9px] h-[9px] rounded-full bg-yugaant-red shadow-[0_0_10px_rgba(255,0,0,0.8)]" />
              <div className="flex flex-col md:flex-row md:items-baseline gap-1 md:gap-4 mb-2">
                <span className="text-sm font-bold text-yugaant-orange min-w-[140px] tracking-wider uppercase">{event.date}</span>
                <span className="text-lg font-bold text-white">{event.title}</span>
              </div>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed">{event.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-24">
          <h3 className="text-2xl font-bold text-white mb-10 flex items-center gap-3 justify-center md:justify-start">
            <CheckCircle2 className="w-6 h-6 text-yugaant-red" />
            Deliverables Covered
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {deliverableGroups.map((group, idx) => (
              <GlassCard key={idx} className="p-6 bg-black/60 border-white/5 flex flex-col">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                  {group.icon}
                  <h4 className="font-bold text-white uppercase tracking-wider text-sm">{group.title}</h4>
                </div>
                <ul className="space-y-4 flex-grow">
                  {group.items.map((item, i) => (
                    <li key={i} className="flex items-start justify-between gap-4 text-sm">
                      <span className="text-zinc-300">{item.name}</span>
                      <span className="font-bold text-white bg-white/10 px-2 py-0.5 rounded text-xs whitespace-nowrap">{item.qty}</span>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            ))}
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8"
          >
            <GlassCard className="p-6 md:p-8 bg-gradient-to-r from-yugaant-red/10 to-yugaant-orange/5 border-yugaant-red/30 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
              <div>
                <h4 className="text-xl font-bold text-white mb-2">Estimated Total Deliverables</h4>
                <p className="text-sm text-zinc-400">This ensures every promised asset is explicitly represented while keeping the release schedule realistic and professional.</p>
              </div>
              <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-zinc-500">
                25+ <span className="text-lg font-bold text-yugaant-orange tracking-widest uppercase block mt-1">Assets</span>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </Section>
  );
};
