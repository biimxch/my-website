"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Role = "instructor" | "student" | "admin";

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

export default function XeniorDiscoveryExecution() {
  const [activeTab, setActiveTab] = useState<Role>("instructor");

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

  const dashboardViews = {
    instructor: (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#7096D1] block mb-4 border-b border-[#BAD6EB]/30 pb-2">Pending Evaluation</span>
          <div className="flex justify-between py-2 gap-4"><span className="text-[#081F5C] font-medium">Group 04 · AI Diagnosis</span><span className="text-[#334EAC] font-serif italic text-lg shrink-0">Due Today</span></div>
          <div className="flex justify-between py-2 gap-4"><span className="text-[#081F5C] font-medium">Group 07 · Logistics System</span><span className="text-red-500 font-serif italic text-lg shrink-0">Overdue</span></div>
        </div>
        <div>
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#7096D1] block mb-4 border-b border-[#BAD6EB]/30 pb-2">Cohort Meta Summaries</span>
          <div className="flex justify-between py-2 gap-4"><span className="text-[#081F5C] font-medium">Monitored Group Nodes</span><span className="font-serif italic text-xl text-[#334EAC] shrink-0">24</span></div>
          <div className="flex justify-between py-2 gap-4"><span className="text-[#081F5C] font-medium">Remaining Pending Form</span><span className="font-serif italic text-xl text-[#334EAC] shrink-0">12</span></div>
        </div>
      </motion.div>
    ),
    student: (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#7096D1] block mb-4 border-b border-[#BAD6EB]/30 pb-2">Milestone Deadlines</span>
          <div className="flex justify-between py-2 gap-4"><span className="text-[#081F5C] font-medium">Proposal Document Draft</span><span className="text-[#334EAC] font-serif italic text-lg shrink-0">3 days</span></div>
        </div>
        <div>
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#7096D1] block mb-4 border-b border-[#BAD6EB]/30 pb-2">Active Team Status</span>
          <div className="flex justify-between py-2 gap-4"><span className="text-[#081F5C] font-medium">Advisor Nodes</span><span className="font-serif italic text-xl text-[#334EAC] shrink-0">Dr. Prapong</span></div>
        </div>
      </motion.div>
    ),
    admin: (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#7096D1] block mb-4 border-b border-[#BAD6EB]/30 pb-2">Central Notice Board</span>
          <div className="flex justify-between py-2 gap-4"><span className="text-[#081F5C] font-medium">Semester Term Schemas</span><span className="text-[#334EAC] font-serif italic text-lg shrink-0">Active</span></div>
        </div>
        <div>
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#7096D1] block mb-4 border-b border-[#BAD6EB]/30 pb-2">System Core Parameters</span>
          <div className="flex justify-between py-2 gap-4"><span className="text-[#081F5C] font-medium">Connected Base Users</span><span className="font-serif italic text-xl text-[#334EAC] shrink-0">156</span></div>
        </div>
      </motion.div>
    )
  };

  return (
    <div className="flex flex-col gap-20 md:gap-32">

      {/* 1. User Research */}
      <motion.section
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
        className="flex flex-col gap-8 md:gap-12 pt-8 md:pt-16"
      >
        <div className="flex flex-col gap-3 border-b border-[#BAD6EB]/40 pb-6 md:pb-8">
          <span className="text-xs font-bold tracking-[0.3em] uppercase text-[#334EAC]">01 / User Research</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-[#081F5C]">
            Context Inquiry{" "}
            <span className="font-serif italic text-[#7096D1]">& Empathy</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-24 items-start">
          <div className="lg:col-span-5 flex flex-col gap-6">
            <p className="text-sm md:text-base text-[#081F5C]/80 leading-relaxed font-medium">
              To avoid relying on assumptions, I conducted contextual inquiry and in-depth interviews with 5 computer science professors and 3 teaching assistants during actual project evaluation sessions.
            </p>
            <div className="pl-4 border-l-2 border-[#BAD6EB]">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#334EAC] block mb-2">Core Insight</span>
              <p className="text-sm text-[#081F5C]/70 leading-relaxed italic">
                "Professors weren't just struggling with score calculations; they were battling tab overload, losing their working context due to too many open windows."
              </p>
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="aspect-[4/3] bg-[#F7F2EB] w-full overflow-hidden border border-[#BAD6EB]/30">
              <img src="/images/xenior.png" alt="Contextual Inquiry Research" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </motion.section>

      {/* 2. Problem Mapping */}
      <motion.section
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
        className="flex flex-col gap-8 md:gap-12"
      >
        <div className="flex flex-col gap-3 border-b border-[#BAD6EB]/40 pb-6 md:pb-8">
          <span className="text-xs font-bold tracking-[0.3em] uppercase text-[#334EAC]">02 / Problem Mapping</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-[#081F5C]">
            System{" "}
            <span className="font-serif italic text-[#7096D1]">Bottlenecks</span>
          </h2>
        </div>

        <div className="flex flex-col">
          {painPoints.map((pain, idx) => (
            <div key={idx} className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-8 md:py-10 border-b border-[#BAD6EB]/40 group">
              <div className="md:col-span-2">
                <span className="text-3xl md:text-6xl font-serif italic text-[#BAD6EB] group-hover:text-[#334EAC] transition-colors duration-500">0{idx + 1}</span>
              </div>
              <div className="md:col-span-4">
                <h3 className="text-base md:text-lg font-medium tracking-tight text-[#081F5C]">{pain.label}</h3>
              </div>
              <div className="md:col-span-6 flex flex-col gap-3">
                <p className="text-sm md:text-base text-[#081F5C]/70 leading-relaxed font-medium">{pain.desc}</p>
                <div className="flex gap-3 items-baseline flex-wrap">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-[#7096D1] font-bold">Impact</span>
                  <span className="text-base md:text-lg font-serif italic text-[#334EAC]">{pain.impact}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="py-12 md:py-20 flex justify-center ">
          <p className="text-xl md:text-2xl lg:text-4xl text-center font-medium leading-snug max-w-4xl text-[#081F5C]">
            "How might we unify the grading process, modernize search architecture, and deliver a role-aware experience{" "}
            <span className="font-serif italic text-[#7096D1]">— so that every stakeholder sees exactly what they need?</span>"
          </p>
        </div>
      </motion.section>

      {/* 3. Execution */}
      <motion.section
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
        className="flex flex-col gap-8 md:gap-12"
      >
        <div className="flex flex-col gap-3 border-b border-[#BAD6EB]/40 pb-6 md:pb-8">
          <span className="text-xs font-bold tracking-[0.3em] uppercase text-[#334EAC]">03 / Execution</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-[#081F5C]">
            Redesigned{" "}
            <span className="font-serif italic text-[#7096D1]">Core Modules</span>
          </h2>
        </div>

        <div className="flex flex-col gap-16 md:gap-24">

          {/* Module 01 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-24 items-center">
            <div className="lg:col-span-7 lg:order-1 order-2">
              <div className="aspect-[4/3] bg-[#F7F2EB] w-full overflow-hidden border border-[#BAD6EB]/30">
                <img src="/images/xenior.png" alt="Split-View Grading Workspace" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="lg:col-span-5 flex flex-col gap-5 lg:order-2 order-1">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#7096D1]">Module 01</span>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight text-[#081F5C]">
                Split-View{" "}
                <span className="font-serif italic text-[#334EAC]">Workspaces</span>
              </h3>
              <p className="text-sm md:text-base text-[#081F5C]/80 leading-relaxed font-medium">
                Professors need concurrent visibility over student documents and evaluation rubrics. By engineering a side-by-side interactive dashboard container, I removed the constant window-switching friction loop entirely.
              </p>
              <ul className="flex flex-col gap-3 pt-4 border-t border-[#BAD6EB]/40 text-sm font-medium text-[#081F5C]/70">
                <li>— Simultaneous layout view models</li>
                <li>— Interactive data sliders eliminate manual computation</li>
                <li>— Spatial context retained during grading</li>
              </ul>
            </div>
          </div>

          {/* Module 02 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-24 items-center">
            <div className="lg:col-span-5 flex flex-col gap-5">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#7096D1]">Module 02</span>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight text-[#081F5C]">
                Faceted{" "}
                <span className="font-serif italic text-[#334EAC]">Search Engine</span>
              </h3>
              <p className="text-sm md:text-base text-[#081F5C]/80 leading-relaxed font-medium">
                While the backend engineers hooked up Meilisearch to indexing pipelines, I took complete ownership of the Search UI redesign. I built a multi-condition sidebar and scannable project cards optimized for high readability.
              </p>
              <ul className="flex flex-col gap-3 pt-4 border-t border-[#BAD6EB]/40 text-sm font-medium text-[#081F5C]/70">
                <li>— Instant index updating</li>
                <li>— Auto-suggestions to reduce load</li>
                <li>— Highly scannable card architecture</li>
              </ul>
            </div>
            <div className="lg:col-span-7">
              <div className="aspect-[4/3] bg-[#F7F2EB] w-full overflow-hidden border border-[#BAD6EB]/30">
                <img src="/images/xenior.png" alt="Faceted Search Engine" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          {/* Module 03 */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 md:gap-6 border-b border-[#BAD6EB]/40 pb-6 md:pb-8">
              <div className="flex flex-col gap-3">
                <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#7096D1]">Module 03</span>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight text-[#081F5C]">
                  Role-Aware{" "}
                  <span className="font-serif italic text-[#334EAC]">Portals</span>
                </h3>
              </div>
              <div className="flex gap-4 md:gap-6">
                {(["instructor", "student", "admin"] as Role[]).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`text-[10px] md:text-xs uppercase tracking-[0.2em] transition-colors duration-300 pb-1 border-b-2 ${
                      activeTab === tab
                        ? "text-[#081F5C] font-bold border-[#334EAC]"
                        : "text-[#7096D1] hover:text-[#334EAC] border-transparent"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            <div className="min-h-[160px] md:min-h-[200px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                >
                  {dashboardViews[activeTab]}
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="aspect-[16/9] md:aspect-[16/9] aspect-[4/3] bg-[#F7F2EB] w-full overflow-hidden border border-[#BAD6EB]/30">
              <img src="/images/xenior.png" alt={`${activeTab} portal view`} className="w-full h-full object-cover" />
            </div>
          </div>

        </div>
      </motion.section>
    </div>
  );
}