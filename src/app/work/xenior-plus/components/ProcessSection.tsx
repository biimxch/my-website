"use client";

import React from "react";

export default function ProcessSection() {
  const steps = ["Research", "Analysis", "Wireframes", "Prototypes", "Testing", "Production"];
  
  return (
    <div className="py-4">
      <div className="mb-12 relative">
        <span className="font-pinyon text-5xl text-[#334EAC] absolute -top-5 left-0 select-none opacity-40">
          Methodology
        </span>
        <span className="text-[10px] font-mono font-bold text-[#081F5C] uppercase tracking-widest block pt-5">
          Phase 3 · Operational Steps
        </span>
        <h2 className="text-3xl font-bold tracking-tight text-[#081F5C] mt-1">
          The Design Validation Pipeline
        </h2>
      </div>

      {/* Editorial Horizontal Track */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 border border-stone-200 rounded-xl overflow-hidden bg-white shadow-2xs mb-10 text-center">
        {steps.map((step, idx) => {
          const isTarget = step === "Wireframes" || step === "Prototypes";
          return (
            <div key={idx} className={`p-4 border-b md:border-b-0 md:border-r border-stone-100 last:border-r-0 ${isTarget ? "bg-[#334EAC]/5" : ""}`}>
              <div className={`text-[10px] font-mono font-bold ${isTarget ? "text-[#334EAC]" : "text-stone-400"}`}>0{idx + 1}</div>
              <div className={`text-xs font-semibold mt-0.5 ${isTarget ? "text-[#334EAC]" : "text-stone-600"}`}>{step}</div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="border border-stone-200 bg-white p-5 rounded-xl text-center flex flex-col justify-between min-h-[140px] shadow-2xs">
          <div className="text-xs font-mono font-bold text-stone-400 uppercase tracking-wide">01 · Concept Design</div>
          <p className="text-xs text-stone-500 font-light my-2 leading-relaxed">Rough skeletal ideation mockups used to solidify data schemas and system registry layouts.</p>
          <span className="text-[10px] font-semibold text-stone-400 bg-stone-50 rounded py-1 font-mono">Low Fidelity Architecture</span>
        </div>

        <div className="border border-stone-200 bg-white p-5 rounded-xl text-center flex flex-col justify-between min-h-[140px] shadow-2xs">
          <div className="text-xs font-mono font-bold text-stone-400 uppercase tracking-wide">02 · Hierarchy Sizing</div>
          <p className="text-xs text-stone-500 font-light my-2 leading-relaxed">Canva grids layout structures designed to lock down absolute component spacing rules.</p>
          <span className="text-[10px] font-semibold text-stone-400 bg-stone-50 rounded py-1 font-mono">Mid Fidelity Scale</span>
        </div>

        {/* Artistic Highlight Box utilizing Universe Color (#7096D1) */}
        <div className="border border-[#7096D1]/30 bg-[#7096D1]/5 p-5 rounded-xl text-center flex flex-col justify-between min-h-[140px] shadow-2xs">
          <div className="text-xs font-mono font-bold text-[#334EAC] uppercase tracking-wide">03 · Design System Tokens</div>
          <p className="text-xs text-stone-600 font-medium my-2 leading-relaxed">Polished component patterns designed inside Figma prior to exporting absolute code parameters.</p>
          <span className="text-[10px] font-semibold text-[#334EAC] bg-[#334EAC]/10 rounded py-1 font-mono">High Fidelity Tokens</span>
        </div>
      </div>
    </div>
  );
}