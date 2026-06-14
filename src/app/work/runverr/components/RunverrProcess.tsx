"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } }
};

const features = [
  { label: "Score System", desc: "Collect scores based on running distance — exceeding the High Score immediately registers as the New High Score." },
  { label: "Energy System", desc: "Energy decreases continuously while running — players must collect Heart Items to restore it, or the game ends." },
  { label: "Item System", desc: "4 Items: Heart (restores energy), Piggy Bank (Coin x2), Robot Magnet (attracts coins), and Jump Boots (jump higher)." },
  { label: "Day/Night Cycle", desc: "Environment shifts from day to night — visibility decreases at night, requiring players to use the light from coins to navigate." },
  { label: "Coin Collection", desc: "Collect and accumulate coins to purchase new characters in the Select Character screen." },
  { label: "PC Packaging", desc: "Build and package the game as a fully playable PC Build for Windows installations." },
];

const challenges = [
  {
    num: "01",
    title: "Blueprint Complexity",
    body: "The High Score and Coin Collection systems possessed high complexity, leading to frequent errors. These issues were resolved by systematically referencing online documentation, tutorial clips, and consulting with experienced advisors."
  },
  {
    num: "02",
    title: "UE5 Performance Issues",
    body: "The Unreal Engine 5 program frequently became unresponsive or froze due to heavy processing loads. This required occasional system restarts, which disrupted the overall continuity of the workflow."
  },
  {
    num: "03",
    title: "Knowledge & Experience Gap",
    body: "An initial lack of experience required continuous learning to bridge the gap between concept and implementation. This involved persistent self-study through online resources to maintain project momentum."
  },
];

const sidebarData = [
  { step: "01 / Concept & Storytelling", title: "The Story", highlight: "Behind the Run" },
  { step: "02 / Features & Systems", title: "What I", highlight: "Built" },
  { step: "03 / Final Result", title: "Demo Day", highlight: "& Delivery" },
  { step: "04 / Challenges", title: "What Was", highlight: "Hard" },
  { step: "05 / Reflection", title: "What I", highlight: "Learned" }
];

export default function RunverrProcess() {
  const [activeSection, setActiveSection] = useState(0);

  return (
    <div className="relative flex flex-col lg:flex-row items-start w-full">
      
      {/* 🟢 LEFT SIDE: Sticky Sidebar (Desktop Only) */}
      <div className="hidden lg:flex lg:w-4/12 sticky top-0 h-screen flex-col justify-start pt-20 pr-12 border-r border-[#BAD6EB]/30">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex flex-col gap-4"
          >
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#334EAC]">
              {sidebarData[activeSection].step}
            </span>
            <h2 className="text-5xl lg:text-6xl font-light tracking-tight text-[#081F5C] leading-none">
              {sidebarData[activeSection].title} <br />
              <span className="font-serif italic text-[#7096D1] text-6xl lg:text-7xl block mt-2">
                {sidebarData[activeSection].highlight}
              </span>
            </h2>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* 🔵 RIGHT SIDE: Scrollable Content */}
      <div className="w-full lg:w-8/12 flex flex-col lg:pl-16 pb-16">
        
        {/* Section 01 */}
        <motion.section
          onViewportEnter={() => setActiveSection(0)}
          viewport={{ margin: "-50% 0px -50% 0px" }}
          className="flex flex-col gap-8 md:gap-12 min-h-[80vh] justify-center py-20 border-b border-[#BAD6EB]/30 lg:border-none"
        >
          {/* Mobile Header */}
          <div className="lg:hidden flex flex-col gap-3 border-b border-[#BAD6EB]/40 pb-6">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#334EAC]">{sidebarData[0].step}</span>
            <h2 className="text-4xl font-light tracking-tight text-[#081F5C]">
              {sidebarData[0].title} <br/> <span className="font-serif italic text-[#7096D1] text-5xl">{sidebarData[0].highlight}</span>
            </h2>
          </div>

          <div className="flex flex-col gap-8">
            <p className="text-lg md:text-xl text-[#081F5C]/80 leading-relaxed font-light">
              The character is a university freshman — experiencing growth while facing obstacles like difficult lessons and life challenges, which can be overcome with perseverance. 
            </p>
            <div className="aspect-[16/10] bg-[#F7F2EB] w-full overflow-hidden border border-[#BAD6EB]/30 flex items-center justify-center relative rounded-2xl shadow-sm">
              <img src="/images/runverr-gameplay.png" alt="Runverr Gameplay" className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display='none' }} />
              <span className="text-[10px] tracking-widest uppercase text-[#7096D1] font-bold bg-white px-3 py-1.5 rounded-lg absolute bottom-4 right-4 shadow-xs">Gameplay Screenshot</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
              {[
                { key: "Goal", val: "Gradually overcome obstacles (collecting Score) to grow and achieve ultimate success (High Score)." },
                { key: "Conflict", val: "Buildings and obstacles represent the challenges and hurdles in a student's life. " },
                { key: "Drive", val: "The character runs to continuously gather knowledge and experience, growing into a better version of themselves. " },
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col gap-2 pt-4 border-t border-[#BAD6EB]/50">
                  <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#334EAC]">{item.key}</span>
                  <p className="text-sm text-[#081F5C]/70 leading-relaxed font-medium">{item.val}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Section 02 */}
        <motion.section
          onViewportEnter={() => setActiveSection(1)}
          viewport={{ margin: "-50% 0px -50% 0px" }}
          className="flex flex-col gap-8 md:gap-12 min-h-[80vh] justify-center py-20 border-b border-[#BAD6EB]/30 lg:border-none"
        >
          {/* Mobile Header */}
          <div className="lg:hidden flex flex-col gap-3 border-b border-[#BAD6EB]/40 pb-6">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#334EAC]">{sidebarData[1].step}</span>
            <h2 className="text-4xl font-light tracking-tight text-[#081F5C]">
              {sidebarData[1].title} <br/> <span className="font-serif italic text-[#7096D1] text-5xl">{sidebarData[1].highlight}</span>
            </h2>
          </div>

          <div className="flex flex-col">
            {features.map((f, idx) => (
              <div key={idx} className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 py-8 border-b border-[#BAD6EB]/40 group first:pt-0">
                <div className="md:col-span-2">
                  <span className="text-3xl md:text-4xl font-serif italic text-[#BAD6EB] group-hover:text-[#334EAC] transition-colors duration-500">0{idx + 1}</span>
                </div>
                <div className="md:col-span-10 flex flex-col gap-2">
                  <h3 className="text-base md:text-lg font-bold tracking-tight text-[#081F5C]">{f.label}</h3>
                  <p className="text-sm md:text-base text-[#081F5C]/70 leading-relaxed font-medium">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Section 03 */}
        <motion.section
          onViewportEnter={() => setActiveSection(2)}
          viewport={{ margin: "-50% 0px -50% 0px" }}
          className="flex flex-col gap-8 md:gap-12 min-h-[80vh] justify-center py-20 border-b border-[#BAD6EB]/30 lg:border-none"
        >
          {/* Mobile Header */}
          <div className="lg:hidden flex flex-col gap-3 border-b border-[#BAD6EB]/40 pb-6">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#334EAC]">{sidebarData[2].step}</span>
            <h2 className="text-4xl font-light tracking-tight text-[#081F5C]">
              {sidebarData[2].title} <br/> <span className="font-serif italic text-[#7096D1] text-5xl">{sidebarData[2].highlight}</span>
            </h2>
          </div>

          <div className="flex flex-col gap-10">
            <div className="aspect-[4/3] sm:aspect-[16/9] bg-[#F7F2EB] w-full overflow-hidden border border-[#BAD6EB]/30 flex items-center justify-center relative rounded-2xl shadow-sm">
              <img src="/images/runverr-demo.png" alt="Runverr Demo Day" className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display='none' }} />
              <span className="text-[10px] tracking-widest uppercase text-[#7096D1] font-bold bg-white px-3 py-1.5 rounded-lg absolute bottom-4 right-4 shadow-xs">Demo Day · 25 July 2025</span>
            </div>

            <div className="flex flex-col gap-6">
              <p className="text-base md:text-lg text-[#081F5C]/90 leading-relaxed font-light">
                On July 25, 2025, the completed Runverr mini-game was presented to professors from both the Media Arts and Computer Engineering faculties — the game was successfully built and playable as a PC Package.
              </p>
              
              <div className="flex flex-col border-t border-[#BAD6EB]/40 mt-2">
                {[
                  "High Score system accurately records and displays results.",
                  "All 4 items function completely as designed.",
                  "Day/Night cycle shifts the game's atmosphere realistically.",
                  "Packaged as a functional PC Build that can be installed and played on Windows.",
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 items-center py-4 border-b border-[#BAD6EB]/40 group hover:translate-x-1 transition-transform duration-300">
                    <span className="font-serif italic text-[#7096D1] text-xl leading-none shrink-0">✓</span>
                    <p className="text-sm md:text-base text-[#081F5C]/80 font-medium leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Section 04: Challenges */}
        <motion.section
          onViewportEnter={() => setActiveSection(3)}
          viewport={{ margin: "-50% 0px -50% 0px" }}
          className="flex flex-col gap-8 md:gap-12 min-h-[80vh] justify-center py-20 border-b border-[#BAD6EB]/30 lg:border-none"
        >
          {/* Mobile Header */}
          <div className="lg:hidden flex flex-col gap-3 border-b border-[#BAD6EB]/40 pb-6">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#334EAC]">{sidebarData[3].step}</span>
            <h2 className="text-4xl font-light tracking-tight text-[#081F5C]">
              {sidebarData[3].title} <br/> <span className="font-pinyon text-[#7096D1] text-5xl">{sidebarData[3].highlight}</span>
            </h2>
          </div>

          <div className="flex flex-col">
            {challenges.map((c, idx) => (
              <div key={idx} className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 py-8 border-b border-[#BAD6EB]/40 group first:pt-0">
                <div className="md:col-span-2">
                  <span className="text-4xl md:text-5xl font-serif italic text-[#BAD6EB] group-hover:text-[#334EAC] transition-colors duration-500 block leading-none">{c.num}</span>
                </div>
                <div className="md:col-span-10 flex flex-col gap-2">
                  <h3 className="text-base md:text-lg font-bold tracking-tight text-[#081F5C]">{c.title}</h3>
                  <p className="text-sm md:text-base text-[#081F5C]/70 leading-relaxed font-medium">{c.body}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Section 05: Reflection */}
        <motion.section
          onViewportEnter={() => setActiveSection(4)}
          viewport={{ margin: "-50% 0px -50% 0px" }}
          className="flex flex-col gap-8 md:gap-12 min-h-[80vh] justify-center py-20"
        >
          {/* Mobile Header */}
          <div className="lg:hidden flex flex-col gap-3 border-b border-[#BAD6EB]/40 pb-6">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#334EAC]">{sidebarData[4].step}</span>
            <h2 className="text-4xl font-light tracking-tight text-[#081F5C]">
              {sidebarData[4].title} <br/> <span className="font-pinyon text-[#7096D1] text-5xl">{sidebarData[4].highlight}</span>
            </h2>
          </div>

          <div className="flex flex-col gap-12">
            
            {/* Skills Gained */}
            <div className="flex flex-col gap-5">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#334EAC]">Skills Gained</span>
              <div className="flex flex-col border-t border-[#BAD6EB]/40">
                {[
                  "Gained direct experience in full-cycle game development using Unreal Engine 5.",
                  "Understood systematic workflows spanning from concept design to gameplay mechanics and UI creation.",
                  "Developed technical problem-solving skills to address issues that emerged during development.",
                  "Recognized the critical importance of teamwork and communication through regular consultations with advisors.",
                ].map((s, idx) => (
                  <div key={idx} className="flex gap-4 items-center py-5 border-b border-[#BAD6EB]/40 group hover:translate-x-1 transition-transform duration-300">
                    <span className="font-serif italic text-[#7096D1] text-xl leading-none shrink-0">✓</span>
                    <p className="text-sm md:text-base text-[#081F5C]/80 font-medium leading-relaxed">{s}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Insight */}
            <div className="flex flex-col gap-5">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#334EAC]">Key Insight</span>
              <div className="pl-6 md:pl-8 border-l-2 border-[#BAD6EB] relative py-2">
                <span className="text-5xl md:text-6xl text-[#BAD6EB]/40 font-pinyon absolute -top-4 -left-4 select-none pointer-events-none leading-none">"</span>
                <p className="text-lg md:text-xl text-[#081F5C]/90 font-light leading-relaxed italic relative z-10">
                  Overcoming complex system challenges required proactive research and guidance. This experience was instrumental in developing vital self-learning skills and the resilience to manage work pressure effectively.
                  <span className="block font-sans font-bold text-[10px] text-[#7096D1] uppercase tracking-[0.3em] mt-4 not-italic">— Bim, Game Development Intern</span>
                </p>
              </div>
            </div>

          </div>
        </motion.section>

      </div>
    </div>
  );
}