import React, { useState } from "react";
import { Section, SectionTitle, GlassCard } from "../ui/Layout";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, MessageCircle, ArrowRight, Heart, Sparkles } from "lucide-react";

type QuestionGroup = {
  id: string;
  category: string;
  questions: {
    q: string;
    followUps?: string[];
    emotion?: string[];
  }[];
};

const playbookData: QuestionGroup[] = [
  {
    id: "origins",
    category: "Origins, Family & Kolkata",
    questions: [
      {
        q: "Take us back to Kolkata. What was the exact moment you realized music wasn't just a hobby, but your entire life?",
        followUps: ["Who was the first person you told?", "Did they support you or doubt you?"],
        emotion: ["If you could go back and tell that younger version of yourself one thing, what would it be?"]
      },
      {
        q: "Your classical training is the foundation of Yugaant. Who was your strictest guru?",
        followUps: ["What was the hardest lesson they taught you?", "Is there a practice routine from then that you still do today?"],
        emotion: ["Do you feel you've lived up to their expectations?"]
      },
      {
        q: "Growing up in a traditional setting, was 'fusion rock' seen as a rebellion?",
        followUps: ["Did you ever feel like you were betraying your classical roots?"],
        emotion: ["What was the conversation like with your parents when you first picked up a distortion pedal instead of a harmonium?"]
      },
      {
        q: "Kolkata has a very distinct cultural and musical soul. How much of the city is embedded in your current sound?",
        followUps: ["Which street or venue in Kolkata still feels like home to your music?"],
      }
    ]
  },
  {
    id: "hustle",
    category: "The Hustle & Scratch Vocals",
    questions: [
      {
        q: "You spent years as a scratch vocalist. What is the most brutal reality of singing a song knowing someone else will get the final credit?",
        followUps: ["Was there ever a song you sang scratch for, that became a massive hit?", "Did you ever feel like giving up during those sessions?"],
        emotion: ["When you hear those hit songs now, what goes through your mind?"]
      },
      {
        q: "What did the studio discipline of those early days teach you that you still use in Yugaant?",
        followUps: ["Is there a specific vocal technique you developed just to survive those long sessions?"],
      },
      {
        q: "Describe the lowest point before Yugaant was formed. The moment you had zero money and zero certainty.",
        followUps: ["How did you physically and mentally survive that week?", "Who bought you dinner when you couldn't?"],
        emotion: ["What kept the fire alive when the reality was so bleak?"]
      }
    ]
  },
  {
    id: "genesis",
    category: "Formation of Yugaant & Band Dynamics",
    questions: [
      {
        q: "How did the band actually meet? Cut through the PR answer. What was the first jam session really like?",
        followUps: ["Who was the most stubborn?", "Who brought the most energy?"],
        emotion: ["Did you instantly know this was 'the' band, or was there doubt?"]
      },
      {
        q: "What happens in the rehearsal room when two virtuosos fundamentally disagree on a solo or a raaga?",
        followUps: ["Who wins the argument? The vocalist or the guitarist?", "Has an argument ever almost broken the band?"],
        emotion: ["How do you repair the relationship after a massive creative fight?"]
      },
      {
        q: "Every band has a silent leader and a chaotic energy source. Who is who in Yugaant?",
        followUps: ["How do your different personalities bleed into the music you write?"],
      },
      {
        q: "How did the name 'Yugaant' come to be?",
        followUps: ["Were there other terrible names before you settled on this one?"],
      }
    ]
  },
  {
    id: "music",
    category: "Music, Process & Creative Differences",
    questions: [
      {
        q: "When writing a track, does the raaga dictate the riff, or does the riff demand the raaga?",
        followUps: ["Can you give an example of a song where the two completely fought each other before resolving?"]
      },
      {
        q: "Independent music vs. Corporate shows. How do you balance playing what you love vs. playing what pays the bills?",
        followUps: ["Have you ever felt like a 'sellout' on stage?", "How do you inject Yugaant's soul into a corporate gig?"],
        emotion: ["Does the money ever make you question your artistic integrity?"]
      },
      {
        q: "Take us through the writing of your most difficult song. Why was it so hard to finish?",
        followUps: ["How many versions did you scrap?", "Who finally cracked the code?"],
        emotion: ["When you finally heard the master track, did you cry?"]
      },
      {
        q: "What is the biggest creative failure Yugaant has experienced?",
        followUps: ["A song that flopped? A gig that went wrong?", "What did you learn from it?"],
      }
    ]
  },
  {
    id: "live",
    category: "Live Shows, College Fests & The Crowd",
    questions: [
      {
        q: "Mood Indigo. NH7 Weekender. What goes through your mind 60 seconds before you step on a massive stage?",
        followUps: ["Do you have a pre-gig ritual?", "What happens if the soundcheck was terrible?"]
      },
      {
        q: "Describe the feeling of 10,000 people singing a hook you wrote in your bedroom.",
        followUps: ["Can you hear individual voices in the crowd, or is it just a roar?"],
        emotion: ["What does that roar feel like in your chest?"]
      },
      {
        q: "What was the absolute worst gig Yugaant ever played?",
        followUps: ["Did the gear break? Was the crowd dead?", "How did you recover?"],
        emotion: ["Did you want to quit that night?"]
      },
      {
        q: "Fan stories: What is the most insane thing a fan has ever done or said to you?",
        followUps: ["Has a fan ever told you a song saved their life?"]
      }
    ]
  },
  {
    id: "industry",
    category: "The Industry, Bollywood & Streaming",
    questions: [
      {
        q: "Working on Bandish Bandits and SoundChk. How different is the OTT/Bollywood machine compared to the indie scene?",
        followUps: ["Did you feel you had to compromise your sound for the screen?", "What did Shankar Mahadevan or Salim Merchant teach you?"],
      },
      {
        q: "Is 'Indian Fusion' becoming a gimmick in the mainstream?",
        followUps: ["How does Yugaant protect its integrity when everyone is mixing a sitar with a synth?"],
      },
      {
        q: "What is the biggest lie independent artists are told today by labels and management?",
        followUps: ["If you could change one thing about the Indian music industry, what would it be?"],
        emotion: ["Have you ever felt completely betrayed by the industry?"]
      },
      {
        q: "How has AI and the pressure of Social Media affected your songwriting?",
        followUps: ["Do you ever find yourself writing a '15-second hook' just for Instagram reels?"],
      }
    ]
  },
  {
    id: "personal",
    category: "Mental Health, Legacy & The Future",
    questions: [
      {
        q: "The touring lifestyle is exhausting. How do you protect your mental health and your voice?",
        followUps: ["Have you ever experienced severe burnout?", "How do you recover from vocal fatigue on a 10-city tour?"]
      },
      {
        q: "When Yugaant is no more, what do you want the legacy of the band to be?",
        followUps: ["What do you want people to say about Ashish Naskar in 50 years?"],
        emotion: ["Are you afraid of being forgotten?"]
      },
      {
        q: "If you lost your voice tomorrow, who would Ashish Naskar be?",
        followUps: ["Would you still be in music?", "What is your identity outside of being a singer?"],
      }
    ]
  },
  {
    id: "rapid",
    category: "Rapid Fire & Back-pocket Questions",
    questions: [
      { q: "Best live gig venue in India?" },
      { q: "One instrument you wish you could play?" },
      { q: "If Yugaant was a movie, who would direct it?" },
      { q: "Most overrated music trend right now?" },
      { q: "One artist, dead or alive, you want to collaborate with?" },
      { q: "Worst advice you've ever received?" },
      { q: "The song you wish you had written?" },
      { q: "Your go-to comfort food after a grueling show?" },
      { q: "If you could erase one song from your discography, which one would it be?" },
      { q: "[Conversation Recovery]: 'That’s fascinating. But let's pivot for a second. If we zoom out...'" },
      { q: "[Story Extraction]: 'Walk me through that exact day. What were you wearing, what did the room smell like?'" },
      { q: "[Emotional Pivot]: 'You're laughing now, but in that moment, how terrifying was it really?'" }
    ]
  }
];

export const QuestionBank = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section id="questions">
      <SectionTitle
        title="The Interview Playbook"
        subtitle="150+ meticulously crafted prompts. Designed to bypass PR answers and extract raw, unfiltered legacy stories."
      />

      <div className="max-w-5xl mx-auto space-y-6">
        {playbookData.map((group, index) => {
          const isOpen = openIndex === index;
          return (
            <GlassCard 
              key={group.id} 
              className="p-0 overflow-hidden border-white/10 hover:border-white/20 transition-all duration-300"
            >
              <button
                className="w-full px-6 md:px-10 py-6 md:py-8 flex justify-between items-center bg-transparent focus:outline-none group"
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-2 h-2 rounded-full transition-colors duration-300 ${isOpen ? 'bg-yugaant-red' : 'bg-white/20'}`} />
                  <h3 className={`text-xl md:text-2xl font-bold tracking-tight text-left transition-colors duration-300 ${isOpen ? 'text-white' : 'text-zinc-400 group-hover:text-zinc-200'}`}>
                    {group.category}
                  </h3>
                </div>
                <div className={`p-2 rounded-full transition-all duration-500 ${isOpen ? 'bg-yugaant-red/20 text-yugaant-red rotate-180' : 'bg-white/5 text-white/50 group-hover:bg-white/10'}`}>
                  <ChevronDown className="w-6 h-6" />
                </div>
              </button>
              
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div className="px-6 md:px-10 pb-10 space-y-8">
                      {group.questions.map((item, i) => (
                        <div key={i} className="relative pl-6 md:pl-8 border-l border-white/10">
                          <div className="absolute left-[-5px] top-2 w-2.5 h-2.5 rounded-full bg-yugaant-orange shadow-[0_0_10px_rgba(255,84,0,0.5)]" />
                          
                          <div className="space-y-4">
                            {/* Primary Question */}
                            <div>
                              <div className="flex items-center gap-2 mb-2">
                                <MessageCircle className="w-4 h-4 text-yugaant-orange" />
                                <span className="text-xs font-bold tracking-widest text-zinc-500 uppercase">Primary Question</span>
                              </div>
                              <p className="text-xl md:text-2xl font-semibold text-white leading-snug">{item.q}</p>
                            </div>

                            {/* Follow Ups */}
                            {item.followUps && item.followUps.length > 0 && (
                              <div className="pl-6 space-y-2">
                                <div className="flex items-center gap-2 mb-1">
                                  <ArrowRight className="w-3.5 h-3.5 text-zinc-400" />
                                  <span className="text-xs font-bold tracking-widest text-zinc-500 uppercase">Follow-up</span>
                                </div>
                                {item.followUps.map((fu, idx) => (
                                  <p key={idx} className="text-zinc-300 text-sm md:text-base leading-relaxed border-l border-white/10 pl-4">{fu}</p>
                                ))}
                              </div>
                            )}

                            {/* Emotion Pull */}
                            {item.emotion && item.emotion.length > 0 && (
                              <div className="pl-6 space-y-2 mt-3">
                                <div className="flex items-center gap-2 mb-1">
                                  <Heart className="w-3.5 h-3.5 text-yugaant-red" />
                                  <span className="text-xs font-bold tracking-widest text-yugaant-red uppercase">Emotion Pull</span>
                                </div>
                                {item.emotion.map((emo, idx) => (
                                  <p key={idx} className="text-yugaant-red/90 text-sm md:text-base italic leading-relaxed border-l border-yugaant-red/30 pl-4">"{emo}"</p>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                      
                      <div className="pt-4 flex items-center justify-center">
                        <div className="px-4 py-2 rounded-full bg-white/5 border border-white/10 flex items-center gap-2 text-xs text-zinc-400">
                          <Sparkles className="w-4 h-4" />
                          <span>+ 10-15 additional dynamic prompts generated live during conversation</span>
                        </div>
                      </div>
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
