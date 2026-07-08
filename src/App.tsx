/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Suspense, lazy } from 'react';
import { Nav } from './components/Nav';
import { Hero } from './components/sections/Hero';
import { Overview } from './components/sections/Overview';
import { Yugaant } from './components/sections/Yugaant';
import { ScrollToTop } from './components/ScrollToTop';

// Lazy-load below-the-fold components to optimize initial bundle size
const Ashish = lazy(() => import('./components/sections/Ashish').then(m => ({ default: m.Ashish })));
const WhyPodcast = lazy(() => import('./components/sections/WhyPodcast').then(m => ({ default: m.WhyPodcast })));
const Ecosystem = lazy(() => import('./components/sections/Ecosystem').then(m => ({ default: m.Ecosystem })));
const Workflow = lazy(() => import('./components/sections/Workflow').then(m => ({ default: m.Workflow })));
const Deliverables = lazy(() => import('./components/sections/Deliverables').then(m => ({ default: m.Deliverables })));
const PodcastFormats = lazy(() => import('./components/sections/PodcastFormats').then(m => ({ default: m.PodcastFormats })));
const Moodboard = lazy(() => import('./components/sections/Moodboard').then(m => ({ default: m.Moodboard })));
const QuestionBank = lazy(() => import('./components/sections/QuestionBank').then(m => ({ default: m.QuestionBank })));
const Requirements = lazy(() => import('./components/sections/Requirements').then(m => ({ default: m.Requirements })));
const ExecutionTimeline = lazy(() => import('./components/sections/ExecutionTimeline').then(m => ({ default: m.ExecutionTimeline })));
const CinematicEnding = lazy(() => import('./components/sections/CinematicEnding').then(m => ({ default: m.CinematicEnding })));

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
          <Suspense fallback={<div className="min-h-[200px] flex items-center justify-center text-white/50 animate-pulse">Loading...</div>}>
            <Ashish />
            <WhyPodcast />
            <Ecosystem />
            <Workflow />
            <Deliverables />
            <PodcastFormats />
            <Moodboard />
            <QuestionBank />
            <Requirements />
            <ExecutionTimeline />
            <CinematicEnding />
          </Suspense>
        </main>
        <footer className="py-8 text-center text-white/40 text-sm border-t border-white/10 mt-20 backdrop-blur-md bg-black/20 relative z-20">
          &copy; {new Date().getFullYear()} Logically Loud. Confidential Internal Document.
        </footer>
        <ScrollToTop />
      </div>
    </div>
  );
}
