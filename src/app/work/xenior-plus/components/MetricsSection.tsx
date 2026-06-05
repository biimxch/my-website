"use client";

import React from "react";

export default function MetricsSection() {
  return (
    <div className="py-2 border-b border-stone-200/60 -mt-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Metric 1 */}
        <div className="bg-white border border-stone-200 rounded-2xl p-6 shadow-2xs flex flex-col justify-between min-h-[150px]">
          <div className="text-stone-400 text-xs font-mono uppercase tracking-wider">Search Latency Optimization</div>
          <div className="flex items-baseline gap-3 my-1">
            <span className="text-sm line-through text-stone-400">10.16s</span>
            <span className="text-4xl font-black font-mono text-[#334FAE]">1.26s</span>
          </div>
          <p className="text-xs font-medium text-stone-500">
            🚀 <strong className="text-[#334FAE] font-bold">8.04x Faster</strong> full-catalog data rendering via Meilisearch backend integration.
          </p>
        </div>

        {/* Metric 2 */}
        <div className="bg-white border border-stone-200 rounded-2xl p-6 shadow-2xs flex flex-col justify-between min-h-[150px]">
          <div className="text-stone-400 text-xs font-mono uppercase tracking-wider">Spreadsheet Dependency</div>
          <div className="flex items-baseline gap-3 my-1">
            <span className="text-sm line-through text-stone-400">Manual Excel</span>
            <span className="text-4xl font-black font-mono text-[#334FAE]">0%</span>
          </div>
          <p className="text-xs font-medium text-stone-500">
            📋 Removed <strong className="text-[#334FAE] font-bold">100% of external grading workflows</strong> by digitizing calculation rubrics.
          </p>
        </div>

        {/* Metric 3 */}
        <div className="bg-white border border-stone-200 rounded-2xl p-6 shadow-2xs flex flex-col justify-between min-h-[150px]">
          <div className="text-stone-400 text-xs font-mono uppercase tracking-wider">Validation Satisfaction</div>
          <div className="flex items-baseline gap-3 my-1">
            <span className="text-sm text-stone-400">UAT Scale</span>
            <span className="text-4xl font-black font-mono text-[#334FAE]">High</span>
          </div>
          <p className="text-xs font-medium text-stone-500">
            ⭐ Confirmed by <strong className="text-[#334FAE] font-bold">Expert Evaluators</strong> across Instructors, TAs, and Students.
          </p>
        </div>

      </div>
    </div>
  );
}