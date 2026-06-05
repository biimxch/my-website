"use client";

import React from "react";

export default function ReflectionSection() {
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
      body: "Building heavy React states for resizable split-panels taught me how to bridge layout goals with optimal frame-rate rendering. Resolving scroll leaks in code is as vital as drafting beautiful wireframes in Figma."
    }
  ];

  return (
    <div className="py-4">
      <div className="mb-12">
        <span className="text-xs font-mono font-bold text-stone-400 uppercase tracking-widest">Phase 5 · Post-Launch Retrospective</span>
        <h2 className="text-3xl font-bold tracking-tight text-[#334FAE] mt-1">Executive Takeaways & Reflection</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-stone-200 rounded-2xl overflow-hidden shadow-2xs divide-y md:divide-y-0 md:divide-x divide-stone-200 bg-white">
        {retrospectives.map((retro, idx) => (
          <div key={idx} className="p-6 flex flex-col gap-2.5">
            <span className="text-4xl font-bold font-mono text-[#334FAE]/15 leading-none block mb-1">{retro.num}</span>
            <h3 className="text-xs font-bold text-stone-800 uppercase tracking-wider">{retro.title}</h3>
            <p className="text-xs text-stone-500 leading-relaxed font-light">{retro.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}