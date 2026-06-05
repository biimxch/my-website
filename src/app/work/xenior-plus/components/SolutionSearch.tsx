"use client";

import React from "react";

export default function SolutionSearch() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-10 gap-12 items-center w-full">
      
      {/* 60% Left Side: Faceted Filters Engine Display */}
      <div className="relative lg:col-span-6 w-full min-w-0 order-2 lg:order-1">
        <div className="bg-white rounded-2xl border border-stone-200 p-5 shadow-2xs w-full flex flex-col">
          <div className="text-xs font-mono font-semibold text-stone-400 border-b border-stone-100 pb-2.5 mb-4">
            Meilisearch Real-Time Index UI Wrapper
          </div>

          <div className="grid grid-cols-3 gap-4 border border-stone-200 rounded-xl overflow-hidden bg-white text-xs">
            {/* Faceted Sidebar Checkboxes */}
            <div className="p-3 bg-stone-50/60 border-r border-stone-100 flex flex-col gap-3">
              <div>
                <span className="text-[9px] font-bold text-stone-400 uppercase tracking-tight block mb-1.5">Academic Year</span>
                <div className="flex items-center gap-1.5 text-[10px] text-stone-600"><input type="checkbox" defaultChecked readOnly className="accent-[#334FAE]" /> 2025-2026</div>
                <div className="flex items-center gap-1.5 text-[10px] text-stone-400"><input type="checkbox" disabled readOnly /> 2024-2025</div>
              </div>
              <div>
                <span className="text-[9px] font-bold text-stone-400 uppercase tracking-tight block mb-1.5">Category</span>
                <div className="flex items-center gap-1.5 text-[10px] text-stone-600"><input type="checkbox" defaultChecked readOnly className="accent-[#334FAE]" /> AI / ML</div>
                <div className="flex items-center gap-1.5 text-[10px] text-stone-400"><input type="checkbox" disabled readOnly /> IoT / Embedded</div>
              </div>
            </div>

            {/* Render Instant Search Project Cards */}
            <div className="col-span-2 p-3 flex flex-col gap-2">
              <span className="text-[9px] font-bold text-stone-400 uppercase block mb-1">Instant Cards Render</span>
              <div className="border border-stone-100 p-2.5 rounded-xl bg-stone-50/20 text-[11px] font-medium text-stone-700">
                AI-Powered Diagnosis Architecture
                <div className="text-[9px] text-stone-400 font-mono font-normal mt-0.5">Group 04 · Advisor: Dr. Prapong</div>
              </div>
              <div className="border border-stone-100 p-2.5 rounded-xl bg-stone-50/20 text-[11px] font-medium text-stone-700">
                Smart Logistics Optimization Hub
                <div className="text-[9px] text-stone-400 font-mono font-normal mt-0.5">Group 07 · Advisor: Dr. Prapong</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 40% Right Side: Rationale and Ownership Text */}
      <div className="flex flex-col lg:col-span-4 w-full min-w-0 order-1 lg:order-2">
        <span className="text-xs font-mono font-bold text-[#334FAE] uppercase">Module 02 · Xenior Search</span>
        <h3 className="mt-2 text-2xl lg:text-3xl font-bold tracking-tight text-stone-800">Faceted Search Engine</h3>
        <p className="text-sm text-stone-400 uppercase font-mono tracking-wider font-semibold mt-0.5">High-speed project discovery</p>
        <p className="mt-4 text-sm lg:text-base text-stone-500 leading-relaxed font-light">
          While the backend engineers hooked up Meilisearch to indexing pipelines, I took complete ownership of the Search UI redesign. I built a multi-condition sidebar and scannable project cards optimized for high readability.
        </p>

        <div className="mt-5 flex flex-col gap-2 border-t border-stone-100 pt-4">
          <div className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-1">Key Frontend Ownership:</div>
          {["Faceted filtering updates system index immediately.", "Auto-suggestions reduce overall page-reload data query load.", "Component-based architecture ensures layout scannability."].map((text, i) => (
            <div key={i} className="flex items-start gap-2 text-xs text-stone-600 font-light">
              <span className="text-[#334FAE] font-bold">✓</span>
              <span>{text}</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}