"use client";

import React from "react";

export default function ProblemSection() {
  const painPoints = [
    {
      label: "Fragmented Grading Loop",
      desc: "Instructors were forced to cross-reference multiple windows—downloading student PDF records while tracking formulas inside external standalone Excel sheets.",
      impact: "High cognitive load and elevated risks of data registry mismatch."
    },
    {
      label: "Rigid SQL Data Latency",
      desc: "The legacy project database architectural design completely lacked multi-condition facet filtering engines. Queries under heavy load triggered immense latency parameters.",
      impact: "10.16s waiting thresholds hindered student knowledge reuse cycles."
    },
    {
      label: "Flat Announcement Portal",
      desc: "The root user interface operated as a generic static dashboard. Action items and critical daily submission milestones were hidden layers deep inside multi-menu paths.",
      impact: "Wasted operations navigation time tracking basic project data."
    }
  ];

  return (
    <div className="py-4 border-b border-stone-300/40 relative">
      <div className="mb-12 relative">
        <span className="font-pinyon text-5xl text-[#334EAC] absolute -top-5 left-0 select-none opacity-40">
          The Friction
        </span>
        <span className="text-[10px] font-mono font-bold text-[#081F5C] uppercase tracking-widest block pt-5">
          Phase 2 · Problem Mapping
        </span>
        <h2 className="text-3xl font-bold tracking-tight text-[#081F5C] mt-1">
          Discovery & System Bottlenecks
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {painPoints.map((pain, idx) => (
          <div key={idx} className="bg-white border border-stone-200 rounded-2xl p-6 flex flex-col justify-between shadow-2xs">
            <div>
              <span className="text-[10px] font-mono font-bold text-[#334EAC] bg-[#334EAC]/5 px-2 py-0.5 rounded">Friction 0{idx + 1}</span>
              <h3 className="text-base font-bold text-stone-800 mt-3 mb-2 tracking-tight">{pain.label}</h3>
              <p className="text-xs text-stone-500 leading-relaxed font-light">{pain.desc}</p>
            </div>
            <div className="mt-4 pt-4 border-t border-stone-100 text-[11px] font-mono font-medium text-[#334EAC]">
              ✦ Impact: <span className="text-stone-600 font-sans font-light">{pain.impact}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Artist-Style Callout Box using Dark Galaxy Background */}
      <div className="mt-12 bg-[#081F5C] border border-[#081F5C] rounded-2xl p-8 text-center max-w-3xl mx-auto shadow-sm text-white relative overflow-hidden">
        <span className="font-pinyon text-7xl text-[#FFF9F0] absolute -bottom-5 right-4 select-none opacity-10 pointer-events-none">
          Design Concept
        </span>
        <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#BAD6EB]">
          💡 The &ldquo;How Might We&rdquo; Framework
        </span>
        <p className="mt-4 text-lg lg:text-xl text-[#FFF9F0]/90 font-light leading-relaxed italic px-4">
          &ldquo;How might we unify the grading process, modernize search architecture, and deliver a role-aware experience — so that every stakeholder sees exactly what they need the moment they log in?&rdquo;
        </p>
      </div>
    </div>
  );
}