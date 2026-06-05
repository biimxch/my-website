"use client";

import React from "react";

export default function SolutionForm() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-10 gap-12 items-center w-full">
      
      {/* 40% Description Node */}
      <div className="flex flex-col lg:col-span-4 w-full min-w-0 order-2 lg:order-1">
        <span className="text-xs font-mono font-bold text-[#334EAC] uppercase">Module 01 · Xenior Form</span>
        <h3 className="mt-1 text-2xl lg:text-3xl font-bold tracking-tight text-stone-800">Split-View Grading Workspaces</h3>
        <p className="text-xs text-stone-400 font-mono font-semibold uppercase tracking-wider mt-0.5">Solving the context loop</p>
        <p className="mt-4 text-sm text-stone-500 leading-relaxed font-light">
          Professors need concurrent visibility over student documents and evaluation rubrics. By engineering a side-by-side interactive dashboard container, I removed the constant window-switching friction loop entirely.
        </p>

        <div className="mt-5 flex flex-col gap-2 border-t border-stone-200/60 pt-4">
          {["Simultaneous layout view layout models ensure constant visibility.", "Interactive data sliders eliminate manual computation.", "Mandatory critique inputs assure quality grading responses."].map((text, idx) => (
            <div key={idx} className="flex items-start gap-2 text-xs text-stone-600 font-light">
              <span className="text-[#334EAC] font-bold">✦</span>
              <span>{text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 60% App Mockup Shell */}
      <div className="relative lg:col-span-6 w-full min-w-0 order-1 lg:order-2">
        <div className="bg-white rounded-xl border border-stone-200 p-5 shadow-2xs w-full flex flex-col">
          <div className="text-xs font-mono font-semibold text-stone-400 border-b border-stone-100 pb-2.5 mb-4">
            Workspace Shell · Cohort Evaluation Form
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border border-stone-200 rounded-xl overflow-hidden bg-stone-50/50">
            <div className="p-4 bg-white border-r border-stone-100 flex flex-col gap-2">
              <span className="text-[9px] font-bold text-stone-400 uppercase tracking-widest block mb-1">Inspected PDF Report</span>
              <div className="h-2 w-full bg-stone-100 rounded" />
              <div className="h-2 w-[90%] bg-stone-100 rounded" />
              <div className="h-2 w-[40%] bg-stone-100 rounded" />
              <div className="h-2 w-[75%] bg-stone-100 rounded mt-2" />
              <div className="h-2 w-full bg-stone-100 rounded" />
            </div>

            <div className="p-4 flex flex-col gap-3.5">
              <span className="text-[9px] font-bold text-[#081F5C] uppercase tracking-widest block mb-1">Central Calculation Rubric</span>
              {[
                { label: "Engineering Model", val: 8, fill: "80%" },
                { label: "Data Validation", val: 9, fill: "90%" }
              ].map((item, i) => (
                <div key={i} className="flex flex-col gap-1">
                  <div className="flex justify-between text-[10px] text-stone-600 font-mono font-semibold">
                    <span>{item.label}</span>
                    <span className="text-[#334EAC]">{item.val}/10</span>
                  </div>
                  <div className="w-full h-1.5 bg-stone-200 rounded-full overflow-hidden relative">
                    <div className="h-full bg-[#081F5C] rounded-full" style={{ width: item.fill }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}