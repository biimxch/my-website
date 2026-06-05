"use client";

import React from "react";

export default function FeedbackSection() {
  return (
    <div className="py-4 border-b border-stone-200/60">
      <div className="mb-12">
        <span className="text-xs font-mono font-bold text-stone-400 uppercase tracking-widest">Phase 4 · User Testing</span>
        <h2 className="text-3xl font-bold tracking-tight text-[#334FAE] mt-1">User Acceptance Testing & Iterations</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-stone-200 rounded-2xl overflow-hidden bg-white shadow-2xs divide-y md:divide-y-0 md:divide-x divide-stone-200">
        
        {/* Left Column: Strengths */}
        <div className="p-6 flex flex-col gap-4">
          <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded w-fit">What Worked Well</h3>
          <div className="flex flex-col gap-3 text-xs text-stone-600 font-light leading-relaxed">
            <div><span className="text-emerald-500 font-bold mr-2">✓</span> <strong className="font-semibold text-stone-700">Split-view panel:</strong> Instructors highly praised the complete elimination of external spreadsheets.</div>
            <div><span className="text-emerald-500 font-bold mr-2">✓</span> <strong className="font-semibold text-stone-700">Interactive Sliders:</strong> Rubric controls made assessment loops significantly faster.</div>
            <div><span className="text-emerald-500 font-bold mr-2">✓</span> <strong className="font-semibold text-stone-700">Deadline Clarity:</strong> Students noted clear milestone indicators lowered system navigation friction.</div>
          </div>
        </div>

        {/* Right Column: Iterations Proof */}
        <div className="p-6 flex flex-col gap-4">
          <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-amber-600 bg-amber-50 px-2.5 py-1 rounded w-fit">Feedback Received → Action Taken</h3>
          <div className="flex flex-col gap-4 text-xs text-stone-600 font-light leading-relaxed">
            <div>
              <div className="font-semibold text-stone-800 mb-0.5">⚠️ Form Navigation Scroll Leak:</div>
              <p className="text-stone-500">Instructors requested easier shifts between groups without losing scroll. <strong className="text-[#334FAE] font-medium">Action:</strong> Configured open-in-new-tab states to fully anchor active list context.</p>
            </div>
            <div>
              <div className="font-semibold text-stone-800 mb-0.5">⚠️ Color Semantic Mismatch:</div>
              <p className="text-stone-500">Dashboard color usage caused minor visual confusion. <strong className="text-[#334FAE] font-medium">Action:</strong> Hard-coded strict traffic-light semantics (Red strictly for Overdue, Yellow for In Progress).</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}