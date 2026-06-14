"use client";

import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.8, 
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number] 
    } 
  }
};

export default function XeniorValidationSummary() {
  const retrospectives = [
    {
      num: "01",
      title: "Context is Everything",
      body: "The success of the Split-View grading workspace reinforced that users do not just need a list of complex features; they require features arranged correctly within their mental model context. Switching tabs breaks workflow flow."
    },
    {
      num: "02",
      title: "Semantic Affordance Rules",
      body: "User interface testing proved a critical law: visual tags must strictly adhere to conventions. An elegantly styled component fails instantly if its color signals conflict with pre-established traffic-light paradigms."
    },
    {
      num: "03",
      title: "Design-Code Compromises",
      body: "Building heavy React states for resizable split-panels taught me how to bridge layout goals with optimal frame-rate rendering. Resolving scroll leaks in code is as vital as drafting beautiful wireframes."
    }
  ];

  return (
    <div 
      className="bg-[#FFFFFF] text-[#081F5C] selection:bg-[#D0E3FF] w-full px-16 pt-8 pb-24 flex flex-col gap-32"
      style={{ fontFamily: "'Montserrat', sans-serif" }}
    >
      
      {/* Sub-section: Feedback & Testing */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
        className="flex flex-col gap-16"
      >
        <div className="flex flex-col gap-2">
          <span className="text-[10px] font-bold tracking-widest uppercase text-[#334EAC]">04 / User Testing</span>
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight leading-snug text-[#081F5C] flex flex-wrap items-baseline gap-x-3">
            Acceptance Testing 
            <span className="font-serif italic text-[#7096D1] text-4xl md:text-5xl">& Iterations</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border-y border-[#BAD6EB]/40">
          
          {/* Left Column: Strengths */}
          <div className="lg:col-span-5 py-12 lg:pr-12 lg:border-r border-[#BAD6EB]/40 flex flex-col gap-10">
            <div>
              <span className="text-[10px] font-bold tracking-widest uppercase text-[#334EAC] block mb-6">What Worked Well</span>
              <ul className="flex flex-col gap-6 text-sm text-[#081F5C]/80 font-medium leading-relaxed">
                <li className="flex gap-4 items-start">
                  <span className="font-serif italic text-[#7096D1] text-3xl leading-none">—</span>
                  <p><strong className="font-bold text-[#081F5C]">Split-view panel:</strong> Instructors highly praised the complete elimination of external spreadsheets.</p>
                </li>
                <li className="flex gap-4 items-start">
                  <span className="font-serif italic text-[#7096D1] text-3xl leading-none">—</span>
                  <p><strong className="font-bold text-[#081F5C]">Interactive Sliders:</strong> Rubric controls made assessment loops significantly faster.</p>
                </li>
                <li className="flex gap-4 items-start">
                  <span className="font-serif italic text-[#7096D1] text-3xl leading-none">—</span>
                  <p><strong className="font-bold text-[#081F5C]">Deadline Clarity:</strong> Students noted clear milestone indicators lowered system navigation friction.</p>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Iterations Proof & Quote */}
          <div className="lg:col-span-7 py-12 lg:pl-12 flex flex-col justify-between gap-12">
            <div>
              <span className="text-[10px] font-bold tracking-widest uppercase text-[#334EAC] block mb-6">Feedback & Iterations</span>
              <div className="flex flex-col gap-8 text-sm text-[#081F5C]/80 font-medium leading-relaxed">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-6">
                  <span className="font-bold text-[#081F5C] md:col-span-1">Scroll Leak Friction</span>
                  <p className="md:col-span-2">
                    Instructors requested easier shifts between groups without losing scroll. <br/>
                    <span className="font-medium text-[#334EAC] mt-1.5 block px-3 py-2 bg-[#D0E3FF]/30 rounded-lg">
                      <strong className="font-bold text-[#081F5C]">Action:</strong> Configured open-in-new-tab states to fully anchor active list context.
                    </span>
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-6">
                  <span className="font-bold text-[#081F5C] md:col-span-1">Color Semantics</span>
                  <p className="md:col-span-2">
                    Dashboard color usage caused minor visual confusion. <br/>
                    <span className="font-medium text-[#334EAC] mt-1.5 block px-3 py-2 bg-[#D0E3FF]/30 rounded-lg">
                      <strong className="font-bold text-[#081F5C]">Action:</strong> Hard-coded strict traffic-light semantics (Red strictly for Overdue, Yellow for In Progress).
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* Real User Quote (Translated & Stylized) */}
            
          </div>
          
        </div>
        <div className="pl-6 border-l-2 border-[#BAD6EB] relative mt-4">
              <span className="text-7xl text-[#BAD6EB]/40 font-pinyon absolute -top-6 -left-4 select-none pointer-events-none leading-none">"</span>
              <p className="text-lg md:text-xl text-[#081F5C]/90 font-medium leading-relaxed italic relative z-10">
                The split-view system saved a tremendous amount of grading time. No more dizzying back-and-forth between external spreadsheets.
                <span className="block font-sans font-bold text-[10px] text-[#7096D1] uppercase tracking-widest mt-4 not-italic">— Project Evaluator</span>
              </p>
        </div>
      </motion.section>

      {/* Sub-section: Retrospective */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
        className="flex flex-col gap-12"
      >
        <div className="flex flex-col gap-2">
          <span className="text-[10px] font-bold tracking-widest uppercase text-[#334EAC]">05 / Retrospective</span>
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight leading-snug text-[#081F5C] flex flex-wrap items-baseline gap-x-3">
            Executive Takeaways 
            <span className="font-serif italic text-[#7096D1] text-4xl md:text-5xl">& Reflection</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-[#BAD6EB]/40">
          {retrospectives.map((retro, idx) => (
            <div key={idx} className={`py-10 flex flex-col gap-6 group ${idx !== 2 ? 'md:border-r border-[#BAD6EB]/40 md:pr-10' : ''} ${idx !== 0 ? 'md:pl-10 border-t md:border-t-0 border-[#BAD6EB]/40' : ''}`}>
              <span className="text-5xl md:text-6xl font-serif italic text-[#BAD6EB] group-hover:text-[#334EAC] transition-colors duration-500 block leading-none">{retro.num}</span>
              <div>
                <h3 className="text-sm font-bold text-[#081F5C] tracking-tight mb-3">{retro.title}</h3>
                <p className="text-sm text-[#081F5C]/70 leading-relaxed font-medium">{retro.body}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

    </div>
  );
}