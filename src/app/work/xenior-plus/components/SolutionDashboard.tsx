"use client";

import { useState } from "react";
import { motion } from "framer-motion";

type Role = "instructor" | "student" | "admin";

export default function SolutionDashboard() {
  const [activeTab, setActiveTab] = useState<Role>("instructor");

  const views = {
    instructor: (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full text-xs">
        <div className="bg-stone-50 border border-stone-200/60 p-4 rounded-xl flex flex-col gap-2 shadow-2xs">
          <span className="text-[9px] font-bold uppercase tracking-wider text-stone-400 block mb-1">Pending Evaluation Tasks</span>
          <div className="flex justify-between py-1 border-b border-stone-100"><span>Group 04 · AI Diagnosis</span><span className="text-[#334EAC] font-medium">Due Today</span></div>
          <div className="flex justify-between py-1 border-b border-stone-100"><span>Group 07 · Logistics System</span><span className="text-red-500 font-bold bg-red-50 px-1.5 py-0.25 rounded">Overdue</span></div>
        </div>
        <div className="bg-stone-50 border border-stone-200/60 p-4 rounded-xl flex flex-col gap-2 shadow-2xs">
          <span className="text-[9px] font-bold uppercase tracking-wider text-stone-400 block mb-1">Cohort Meta Summaries</span>
          <div className="flex justify-between py-1 border-b border-stone-100"><span>Monitored Group Nodes</span><span className="text-[#081F5C] font-mono font-bold">24</span></div>
          <div className="flex justify-between py-1 border-b border-stone-100"><span>Remaining Pending Form</span><span className="text-amber-600 font-mono font-bold">12</span></div>
        </div>
      </div>
    ),
    student: (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full text-xs">
        <div className="bg-stone-50 border border-stone-200/60 p-4 rounded-xl flex flex-col gap-2 shadow-2xs">
          <span className="text-[9px] font-bold uppercase tracking-wider text-stone-400 block mb-1">Milestone Deadlines</span>
          <div className="flex justify-between py-1 border-b border-stone-100"><span>Proposal Document Draft</span><span className="text-amber-600">3 days</span></div>
        </div>
        <div className="bg-stone-50 border border-stone-200/60 p-4 rounded-xl flex flex-col gap-2 shadow-2xs">
          <span className="text-[9px] font-bold uppercase tracking-wider text-stone-400 block mb-1">Active Team Status</span>
          <div className="flex justify-between py-1 border-b border-stone-100"><span>Advisor Nodes</span><span className="text-stone-600">Dr. Prapong</span></div>
        </div>
      </div>
    ),
    admin: (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full text-xs">
        <div className="bg-stone-50 border border-stone-200/60 p-4 rounded-xl flex flex-col gap-2 shadow-2xs">
          <span className="text-[9px] font-bold uppercase tracking-wider text-stone-400 block mb-1">Central Notice Board</span>
          <div className="flex justify-between py-1 border-b border-stone-100"><span>Semester Term Schemas</span><span className="text-emerald-600">Active</span></div>
        </div>
        <div className="bg-stone-50 border border-stone-200/60 p-4 rounded-xl flex flex-col gap-2 shadow-2xs">
          <span className="text-[9px] font-bold uppercase tracking-wider text-stone-400 block mb-1">System Core Parameters</span>
          <div className="flex justify-between py-1 border-b border-stone-100"><span>Connected Base Users</span><span className="text-stone-600 font-mono">156</span></div>
        </div>
      </div>
    )
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-10 gap-12 items-center w-full">
      
      {/* 40% Text Description */}
      <div className="flex flex-col lg:col-span-4 w-full min-w-0">
        <span className="text-xs font-mono font-bold text-[#334EAC] uppercase">Module 03 · Xenior Interface</span>
        <h3 className="mt-1 text-2xl lg:text-3xl font-bold tracking-tight text-stone-800">Role-Aware Portal States</h3>
        <p className="text-sm text-stone-400 uppercase font-mono font-semibold tracking-wider mt-0.5">Centralizing daily insights</p>
        <p className="mt-4 text-sm text-stone-500 leading-relaxed font-light">
          Instead of uniform generic notice boards, I structured modular component templates. Access tokens automatically dispatch relevant parameters—instructors handle tasks, students see timelines, and admins maintain schemas.
        </p>
      </div>

      {/* 60% Interactive Sliding Tabbed Shell */}
      <div className="relative lg:col-span-6 w-full min-w-0 flex flex-col gap-4">
        <div className="bg-white rounded-2xl border border-stone-200 p-5 shadow-2xs w-full flex flex-col gap-4">
          
          {/* Framer Motion Layout Animation Row */}
          <div className="flex border-b border-stone-100 relative">
            {(["instructor", "student", "admin"] as Role[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2.5 text-xs font-bold uppercase tracking-wider relative transition-colors ${
                  activeTab === tab ? "text-[#081F5C]" : "text-stone-400"
                }`}
              >
                {activeTab === tab && (
                  <motion.div
                    layoutId="active-case-study-tab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#081F5C]"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                {tab}
              </button>
            ))}
          </div>

          <div className="min-h-[140px] flex items-center w-full pt-1">
            {views[activeTab]}
          </div>

        </div>
      </div>

    </div>
  );
}