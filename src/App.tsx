/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Nav } from './components/Nav';
import { Hero } from './components/sections/Hero';
import { Overview } from './components/sections/Overview';
import { Yugaant } from './components/sections/Yugaant';
import { Ashish } from './components/sections/Ashish';
import { WhyPodcast } from './components/sections/WhyPodcast';
import { Ecosystem } from './components/sections/Ecosystem';
import { Deliverables } from './components/sections/Deliverables';
import { PodcastFormats } from './components/sections/PodcastFormats';
import { Moodboard } from './components/sections/Moodboard';
import { QuestionBank } from './components/sections/QuestionBank';
import { Marketing } from './components/sections/Marketing';
import { ScrollToTop } from './components/ScrollToTop';
import { FinalRecommendation } from './components/sections/FinalRecommendation';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#050000] text-white font-sans selection:bg-white selection:text-black">
      {/* Global Background */}
      <div className="bg-grain" />

      <div className="relative z-10">
        <Nav />
        <main>
          <Hero />
          <Overview />
          <Yugaant />
          <Ashish />
          <WhyPodcast />
          <Ecosystem />
          <Deliverables />
          <PodcastFormats />
          <Moodboard />
          <QuestionBank />
          <Marketing />
          <FinalRecommendation />
        </main>
        <footer className="py-8 text-center text-white/40 text-sm border-t border-white/10 mt-20 backdrop-blur-md bg-black/20 relative z-20">
          &copy; {new Date().getFullYear()} Logically Loud. Confidential Internal Document.
        </footer>
        <ScrollToTop />
      </div>
    </div>
  );
}
