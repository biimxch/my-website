"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Role = "student" | "instructor" | "admin";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

export default function XeniorCaseStudy() {
  const [activeSection, setActiveSection] = useState(0);
  const [activeTab, setActiveTab] = useState<Role>("instructor");

  // 📦 ย้าย Data Constants ทั้งหมดมาไว้ข้างในเพื่อความปลอดภัยจาก ReferenceError
    const sidebarData = [
    { step: "00 / Research", title: "Grounded in", highlight: "User Reality", desc: "Uncovering friction through contextual inquiry, stakeholder interviews, and heuristic evaluation before touching a single wireframe." },
    { step: "01 / Interface Overview", title: "Tailored", highlight: "UX/UI Design", desc: "Redesigning the Xenior+ interface to deliver a modern, intuitive, and role-specific user experience that optimizes academic workflows." },
    { step: "02 / Design Bottlenecks", title: "Navigational", highlight: "Friction", desc: "The legacy system suffered from complex multi-menu paths, hidden milestones, and unclear interface elements that elevated cognitive load." },
    { step: "03 / Landing Page", title: "The Discovery", highlight: "Hub", desc: "Transforming a flat announcement screen into a dynamic, 5-section landing page built for seamless user onboarding and project showcasing." },
    { step: "04 / Role-Aware Portals", title: "Contextual", highlight: "Dashboards", desc: "Engineering dedicated workspaces for Students, Instructors, and Admins to instantly surface critical tasks and eliminate visual noise." },
    { step: "05 / Validation & UAT", title: "Refining the", highlight: "Experience", desc: "Validating user interfaces through rigorous acceptance testing to solve scroll leaks, enforce strict color semantics, and polish interactions." },
    { step: "06 / Outcomes", title: "Measurable", highlight: "Impact", desc: "Quantified improvements across search performance, task completion, and user satisfaction following full UAT sign-off." },
  ];

  const designObjectives = [
    { title: "Clear Elements", desc: "Streamline navigation paths, micro-copy, and icons to minimize user path confusion." },
    { title: "Discovery Landing", desc: "Build an engaging entry point that translates dense project archives into inspiration." },
    { title: "Role-Based Layouts", desc: "Personalize workspaces so each user group intercepts their highest priority task immediately." }
  ];

  const painPoints = [
    { 
      label: "Ambiguous & Deep Navigation", 
      desc: "Legacy menus, icons, and elements lacked visual clarity, forcing users into deep multi-menu paths that caused confusion and delayed access to core functions.", 
      impact: "High Navigational Friction" 
    },
    { 
      label: "Flat & Unengaging Landing Page", 
      desc: "The original landing page operated merely as a static text announcement board, failing to showcase standout projects or provide intuitive onboarding for new users.", 
      impact: "Zero System Onboarding & Inspiration" 
    },
    { 
      label: "Generic Non-Contextual Dashboard", 
      desc: "The home screen displayed identical broadcast alerts to all stakeholders instead of dynamically isolating and prioritizing critical, role-specific tasks.", 
      impact: "Inefficient Task Tracking" 
    }
  ];

  const landingSections = [
    { tag: "01 / Hero Section", title: "Engaging Introduction", desc: "Displays system taglines with an immediate 'Explore Projects' CTA routing straight to the search engine." },
    { tag: "02 / Stats & Categories", title: "Data Visualization", desc: "Aggregates core metrics like total projects and departments into scannable cards with interest-based filters." },
    { tag: "03 / Featured Gallery", title: "Showcase Gallery", desc: "A curated layout displaying standout senior projects to inspire younger cohorts and drive engagement." },
    { tag: "04 / Archive Explorer", title: "Continuous Navigation", desc: "Strategic placement of full archive access buttons at the footer to capture users who scroll through the page." },
    { tag: "05 / Team & Footer", title: "System Credibility", desc: "Displays developer meta-data, official department contacts, and policy links to elevate platform authority." }
  ];

  const dashboardViews = {
    student: (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#7096D1] block mb-4 border-b border-[#BAD6EB]/30 pb-2">Upcoming Deadlines</span>
          <div className="flex justify-between py-2 gap-4"><span className="text-[#081F5C] font-medium">Most Urgent Submission</span><span className="text-[#334EAC] font-serif italic text-lg shrink-0">Due Today</span></div>
          <div className="flex justify-between py-2 gap-4"><span className="text-[#081F5C] font-medium">Chapter 1-3 Report</span><span className="text-red-500 font-serif italic text-lg shrink-0">Overdue</span></div>
        </div>
        <div>
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#7096D1] block mb-4 border-b border-[#BAD6EB]/30 pb-2">Student Resources</span>
          <div className="flex justify-between py-2 gap-4"><span className="text-[#081F5C] font-medium">Project Manual (PDF)</span><span className="text-[#334EAC] font-serif italic text-lg shrink-0">Download</span></div>
          <div className="flex justify-between py-2 gap-4"><span className="text-[#081F5C] font-medium">Faculty Announcements</span><span className="font-serif italic text-xl text-[#334EAC] shrink-0">3 New</span></div>
        </div>
      </motion.div>
    ),
    instructor: (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#7096D1] block mb-4 border-b border-[#BAD6EB]/30 pb-2">My Project Groups</span>
          <div className="flex justify-between py-2 gap-4"><span className="text-[#081F5C] font-medium">Pending Assessment Work</span><span className="font-serif italic text-xl text-[#334EAC] shrink-0">12</span></div>
          <div className="flex justify-between py-2 gap-4"><span className="text-[#081F5C] font-medium">Pending Approval Forms</span><span className="font-serif italic text-xl text-[#334EAC] shrink-0">4</span></div>
        </div>
        <div>
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#7096D1] block mb-4 border-b border-[#BAD6EB]/30 pb-2">Upcoming Events</span>
          <div className="flex justify-between py-2 gap-4"><span className="text-[#081F5C] font-medium">Group 04 AI Defense</span><span className="text-[#334EAC] font-serif italic text-lg shrink-0">2:00 PM</span></div>
          <div className="flex justify-between py-2 gap-4"><span className="text-[#081F5C] font-medium">Role Filter (Advisor/Committee)</span><span className="text-[#334EAC] font-serif italic text-sm shrink-0">Active</span></div>
        </div>
      </motion.div>
    ),
    admin: (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#7096D1] block mb-4 border-b border-[#BAD6EB]/30 pb-2">Central Management</span>
          <div className="flex justify-between py-2 gap-4"><span className="text-[#081F5C] font-medium">Manage Project Manuals</span><span className="text-[#334EAC] font-serif italic text-lg shrink-0">Edit PDF</span></div>
          <div className="flex justify-between py-2 gap-4"><span className="text-[#081F5C] font-medium">Broadcast Announcements</span><span className="text-[#334EAC] font-serif italic text-lg shrink-0">Add Media</span></div>
        </div>
        <div>
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#7096D1] block mb-4 border-b border-[#BAD6EB]/30 pb-2">System Controls</span>
          <div className="flex justify-between py-2 gap-4"><span className="text-[#081F5C] font-medium">Global DB Sync Status</span><span className="font-serif italic text-xl text-green-600 shrink-0">Synced</span></div>
        </div>
      </motion.div>
    )
  };

  return (
    <div className="relative flex flex-col lg:flex-row items-start w-full">
      
      {/* 🟢 LEFT SIDE: Sticky Sidebar (Desktop Only) */}
      <div className="hidden lg:flex lg:w-4/12 sticky top-0 h-screen flex-col justify-start pt-20 pr-12 border-r border-[#BAD6EB]/30">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="flex flex-col gap-4"
          >
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#334EAC]">
              {sidebarData[activeSection].step}
            </span>
            <h2 className="text-5xl lg:text-6xl font-light tracking-tight text-[#081F5C] leading-none">
              {sidebarData[activeSection].title} <br />
              <span className="font-serif italic text-[#7096D1] text-6xl lg:text-7xl block mt-2">
                {sidebarData[activeSection].highlight}
              </span>
            </h2>
            <p className="text-sm text-[#081F5C]/80 leading-relaxed font-medium mt-2">
              {sidebarData[activeSection].desc}
            </p>
            
            {activeSection === 0 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-wrap gap-2 pt-2">
                {["Figma", "User-Centered Design", "Role-Based UX", "Next.js", "Tailwind CSS", "Responsive Design"].map((tag) => (
                  <span key={tag} className="text-[9px] uppercase tracking-widest font-bold text-[#7096D1] bg-[#F7F2EB] border border-[#BAD6EB]/40 px-3 py-1.5 rounded-full">{tag}</span>
                ))}
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* 🔵 RIGHT SIDE: Scrollable Content */}
      <div className="w-full lg:w-8/12 flex flex-col lg:pl-16 pb-16">

        {/* Section 00: Research Approach */}
        <motion.section
        onViewportEnter={() => setActiveSection(0)}
        viewport={{ margin: "-50% 0px -50% 0px" }}
        className="flex flex-col gap-8 md:gap-12 min-h-[80vh] justify-center py-20 border-b border-[#BAD6EB]/30 lg:border-none"
        >
        <div className="lg:hidden flex flex-col gap-3 border-b border-[#BAD6EB]/40 pb-6">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#334EAC]">{sidebarData[0].step}</span>
            <h2 className="text-4xl font-light tracking-tight text-[#081F5C]">
            {sidebarData[0].title} <br/> <span className="font-serif italic text-[#7096D1] text-5xl">{sidebarData[0].highlight}</span>
            </h2>
            <p className="text-sm text-[#081F5C]/80 mt-2">{sidebarData[0].desc}</p>
        </div>

        <div className="flex flex-col gap-10">
            {/* Method grid */}
            <div className="flex flex-col gap-5">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#334EAC]">Research Methods</span>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                {
                    tag: "Contextual Inquiry",
                    title: "Observed Workflows",
                    desc: "Shadowed 3 instructors during end-of-semester grading to map their actual Excel-based scoring process and identify where friction occurred.",
                },
                {
                    tag: "User Interviews",
                    title: "5 Stakeholders",
                    desc: "Conducted semi-structured interviews with 3 instructors and 2 senior students, surfacing navigation confusion and search bottlenecks in the legacy system.",
                },
                {
                    tag: "Heuristic Evaluation",
                    title: "Nielsen's 10 Heuristics",
                    desc: "Audited the existing Xenior interface against usability heuristics, identifying 9 violations—primarily visibility of system status and match between system and real world.",
                },
                ].map((m, idx) => (
                <div key={idx} className="flex flex-col gap-2 pt-4 border-t border-[#BAD6EB]/50">
                    <span className="text-[9px] uppercase tracking-widest font-bold text-[#7096D1]">{m.tag}</span>
                    <h4 className="text-sm font-bold text-[#081F5C]">{m.title}</h4>
                    <p className="text-sm text-[#081F5C]/70 font-medium leading-relaxed">{m.desc}</p>
                </div>
                ))}
            </div>
            </div>

            {/* Key Findings */}
            <div className="flex flex-col gap-4">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#334EAC]">Key Findings</span>
            <div className="flex flex-col">
                {[
                {
                    signal: "100%",
                    finding: "of interviewed instructors had to open a separate Excel file mid-session to cross-reference scoring criteria — breaking focus during assessment.",
                },
                {
                    signal: "3 of 5",
                    finding: "users failed to locate the project archive on first attempt due to unlabeled navigation icons and non-standard menu depth.",
                },
                {
                    signal: "Primary ask",
                    finding: "students consistently requested a persistent deadline indicator on the home screen, rather than having to navigate into individual assignment pages.",
                },
                ].map((f, idx) => (
                <div key={idx} className="grid grid-cols-12 gap-4 py-5 border-b border-[#BAD6EB]/40 group">
                    <div className="col-span-3 md:col-span-2">
                    <span className="font-serif italic text-[#334EAC] text-lg">{f.signal}</span>
                    </div>
                    <p className="col-span-9 md:col-span-10 text-sm text-[#081F5C]/80 font-medium leading-relaxed self-center">
                    {f.finding}
                    </p>
                </div>
                ))}
            </div>
            </div>
        </div>
        </motion.section>

        {/* Section 01: Interface Overview */}
        <motion.section
          onViewportEnter={() => setActiveSection(0)}
          viewport={{ margin: "-50% 0px -50% 0px" }}
          className="flex flex-col gap-8 md:gap-12 min-h-[80vh] justify-center py-20 border-b border-[#BAD6EB]/30 lg:border-none"
        >
          <div className="lg:hidden flex flex-col gap-3 border-b border-[#BAD6EB]/40 pb-6">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#334EAC]">{sidebarData[0].step}</span>
            <h2 className="text-4xl font-light tracking-tight text-[#081F5C]">
              {sidebarData[0].title} <br/> <span className="font-serif italic text-[#7096D1] text-5xl">{sidebarData[0].highlight}</span>
            </h2>
            <p className="text-sm text-[#081F5C]/80 mt-2">{sidebarData[0].desc}</p>
          </div>

          <div className="flex flex-col gap-10">
            <div className="aspect-[16/10] bg-[#F7F2EB] w-full overflow-hidden border border-[#BAD6EB]/30 flex items-center justify-center relative rounded-2xl shadow-sm">
              <img src="/images/xenior-interface-main.png" alt="Xenior+ UI Transformation" className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display='none' }} />
              <span className="text-[10px] tracking-widest uppercase text-[#7096D1] font-bold bg-white px-3 py-1.5 rounded-lg absolute bottom-4 right-4 shadow-xs">UX/UI Architecture</span>
            </div>
            
            <div className="flex flex-col gap-5">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#334EAC]">Redesign Framework</span>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {designObjectives.map((obj, idx) => (
                  <div key={idx} className="flex flex-col gap-2 pt-4 border-t border-[#BAD6EB]/50">
                    <h4 className="text-sm font-bold text-[#081F5C]">{obj.title}</h4>
                    <p className="text-sm text-[#081F5C]/70 font-medium leading-relaxed">{obj.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Section 02: Problem Mapping */}
        <motion.section
          onViewportEnter={() => setActiveSection(1)}
          viewport={{ margin: "-50% 0px -50% 0px" }}
          className="flex flex-col gap-8 md:gap-12 min-h-[80vh] justify-center py-20 border-b border-[#BAD6EB]/30 lg:border-none"
        >
          <div className="lg:hidden flex flex-col gap-3 border-b border-[#BAD6EB]/40 pb-6">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#334EAC]">{sidebarData[1].step}</span>
            <h2 className="text-4xl font-light tracking-tight text-[#081F5C]">
              {sidebarData[1].title} <br/> <span className="font-serif italic text-[#7096D1] text-5xl">{sidebarData[1].highlight}</span>
            </h2>
          </div>

          <div className="flex flex-col">
            {painPoints.map((pain, idx) => (
              <div key={idx} className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 py-8 border-b border-[#BAD6EB]/40 group first:pt-0">
                <div className="md:col-span-2">
                  <span className="text-3xl md:text-4xl font-serif italic text-[#BAD6EB] group-hover:text-[#334EAC] transition-colors duration-500">0{idx + 1}</span>
                </div>
                <div className="md:col-span-10 flex flex-col gap-2">
                  <h3 className="text-base md:text-lg font-bold tracking-tight text-[#081F5C]">{pain.label}</h3>
                  <p className="text-sm md:text-base text-[#081F5C]/70 leading-relaxed font-medium">{pain.desc}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-[10px] uppercase tracking-[0.3em] text-[#7096D1] font-bold bg-[#D0E3FF]/30 px-2 py-1 rounded">UI Friction</span>
                    <span className="text-sm font-serif italic text-[#334EAC]">{pain.impact}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Section 03: Landing Page Redesign */}
        <motion.section
          onViewportEnter={() => setActiveSection(2)}
          viewport={{ margin: "-50% 0px -50% 0px" }}
          className="flex flex-col gap-12 min-h-[80vh] justify-center py-20 border-b border-[#BAD6EB]/30 lg:border-none"
        >
          <div className="lg:hidden flex flex-col gap-3 border-b border-[#BAD6EB]/40 pb-6">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#334EAC]">{sidebarData[2].step}</span>
            <h2 className="text-4xl font-light tracking-tight text-[#081F5C]">
              {sidebarData[2].title} <br/> <span className="font-serif italic text-[#7096D1] text-5xl">{sidebarData[2].highlight}</span>
            </h2>
          </div>

          <div className="flex flex-col gap-8">
            <div className="aspect-[16/10] bg-[#F7F2EB] w-full overflow-hidden border border-[#BAD6EB]/30 rounded-2xl shadow-sm relative">
              <img src="/images/xenior-landing.png" alt="Modernized Landing Page Design" className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display='none' }} />
              <span className="text-[10px] tracking-widest uppercase text-[#7096D1] font-bold bg-white px-3 py-1.5 rounded-lg absolute bottom-4 right-4 shadow-xs">Onboarding Interface</span>
            </div>

            <div className="flex flex-col border-t border-[#BAD6EB]/40 mt-4">
              {landingSections.map((sec, idx) => (
                <div key={idx} className="grid grid-cols-1 md:grid-cols-12 gap-4 py-5 border-b border-[#BAD6EB]/40 group hover:translate-x-1 transition-transform duration-300">
                  <span className="md:col-span-3 text-[10px] font-bold tracking-widest uppercase text-[#7096D1] pt-1">{sec.tag}</span>
                  <div className="md:col-span-9 flex flex-col gap-1">
                    <h4 className="text-sm font-bold text-[#081F5C]">{sec.title}</h4>
                    <p className="text-sm text-[#081F5C]/70 font-medium leading-relaxed">{sec.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pl-4 border-l-2 border-[#BAD6EB] py-1 mt-2">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#334EAC] block mb-1">UI Solution Result</span>
              <p className="text-sm text-[#081F5C]/70 leading-relaxed font-medium italic">
                Reconstructed the landing architecture to achieve intuitive onboarding, drastically decreasing system learning thresholds for new stakeholders.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Section 04: Role-Aware Dashboards */}
        <motion.section
          onViewportEnter={() => setActiveSection(3)}
          viewport={{ margin: "-50% 0px -50% 0px" }}
          className="flex flex-col gap-8 min-h-[80vh] justify-center py-20 border-b border-[#BAD6EB]/30 lg:border-none"
        >
          <div className="lg:hidden flex flex-col gap-3 border-b border-[#BAD6EB]/40 pb-6">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#334EAC]">{sidebarData[3].step}</span>
            <h2 className="text-4xl font-light tracking-tight text-[#081F5C]">
              {sidebarData[3].title} <br/> <span className="font-serif italic text-[#7096D1] text-5xl">{sidebarData[3].highlight}</span>
            </h2>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex flex-col md:flex-row justify-between md:items-end gap-4 border-b border-[#BAD6EB]/40 pb-4">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#7096D1]">Interactive Portal Simulator</span>
              <div className="flex gap-4">
                {(["student", "instructor", "admin"] as Role[]).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`text-[10px] md:text-xs uppercase tracking-[0.2em] transition-colors duration-300 pb-1 border-b-2 ${
                      activeTab === tab ? "text-[#081F5C] font-bold border-[#334EAC]" : "text-[#7096D1] hover:text-[#334EAC] border-transparent"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="min-h-[140px] bg-[#F7F2EB]/40 p-6 rounded-2xl border border-[#BAD6EB]/30 shadow-xs">
              <AnimatePresence mode="wait">
                <motion.div key={activeTab} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }}>
                  {dashboardViews[activeTab]}
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="aspect-[16/10] bg-[#F7F2EB] w-full overflow-hidden border border-[#BAD6EB]/30 rounded-2xl shadow-sm relative mt-2">
              <img src={`/images/xenior-dashboard-${activeTab}.png`} alt={`${activeTab} dashboard screen`} className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display='none' }} />
            </div>
          </div>
        </motion.section>

        {/* Section 05: Validation & UAT */}
        <motion.section
          onViewportEnter={() => setActiveSection(4)}
          viewport={{ margin: "-50% 0px -50% 0px" }}
          className="flex flex-col gap-8 min-h-[80vh] justify-center py-20"
        >
          <div className="lg:hidden flex flex-col gap-3 border-b border-[#BAD6EB]/40 pb-6">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#334EAC]">{sidebarData[4].step}</span>
            <h2 className="text-4xl font-light tracking-tight text-[#081F5C]">
              {sidebarData[4].title} <br/> <span className="font-serif italic text-[#7096D1] text-5xl">{sidebarData[4].highlight}</span>
            </h2>
          </div>

          <div className="flex flex-col gap-10 w-full">
            <div className="flex flex-col gap-5">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#334EAC]">UAT Iteration Logs</span>
              <div className="flex flex-col gap-4">
                <div className="bg-white p-5 rounded-2xl border border-[#BAD6EB]/40 flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <span className="font-bold text-[#081F5C] text-sm md:w-1/3">Targeted Route Buffering</span>
                  <p className="text-sm text-[#081F5C]/80 font-medium md:w-2/3">Configured form links to resolve as separate tab states, enabling professors to bounce back into index views without breaking active scroll thresholds.</p>
                </div>
                <div className="bg-white p-5 rounded-2xl border border-[#BAD6EB]/40 flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <span className="font-bold text-[#081F5C] text-sm md:w-1/3">Traffic-Light Semantics</span>
                  <p className="text-sm text-[#081F5C]/80 font-medium md:w-2/3">Refactored layout status token assignments into explicit colored parameters (Red strictly mapping to Overdue/Critical data sets).</p>
                </div>
              </div>
            </div>

            <div className="pl-6 md:pl-8 border-l-2 border-[#BAD6EB] relative py-2 mt-2">
              <span className="text-5xl md:text-6xl text-[#BAD6EB]/40 font-pinyon absolute -top-4 -left-4 select-none pointer-events-none leading-none">"</span>
              <p className="text-base md:text-lg text-[#081F5C]/90 font-light leading-relaxed italic relative z-10">
                The split-view system and centralized timeline completely eliminated our visual fatigue. We no longer spend grading cycles digging into layout depth parameters.
                <span className="block font-sans font-bold text-[10px] text-[#7096D1] uppercase tracking-[0.3em] mt-4 not-italic">— KMUTT Project Evaluator</span>
              </p>
            </div>
          </div>
        </motion.section>

        {/* Section 06: Outcomes */}
        <motion.section
        onViewportEnter={() => setActiveSection(6)}
        viewport={{ margin: "-50% 0px -50% 0px" }}
        className="flex flex-col gap-8 min-h-[80vh] justify-center py-20"
        >
        <div className="lg:hidden flex flex-col gap-3 border-b border-[#BAD6EB]/40 pb-6">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#334EAC]">{sidebarData[6].step}</span>
            <h2 className="text-4xl font-light tracking-tight text-[#081F5C]">
            {sidebarData[6].title} <br/> <span className="font-serif italic text-[#7096D1] text-5xl">{sidebarData[6].highlight}</span>
            </h2>
        </div>

        <div className="flex flex-col gap-10 w-full">
            {/* Metric Cards */}
            <div className="flex flex-col gap-5">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#334EAC]">Performance Metrics</span>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                { value: "4.14×", label: "Faster search", sub: "Meilisearch vs raw SQL" },
                { value: "8.04×", label: "Speedup on full archive", sub: "10.16s → 1.26s response" },
                { value: "100%", label: "UAT pass rate", sub: "All functional test cases" },
                { value: "20 → 1", label: "Screen to grade", sub: "Collapsed grading into split-view" },
                ].map((m, idx) => (
                <div key={idx} className="flex flex-col gap-1 bg-[#F7F2EB]/60 border border-[#BAD6EB]/30 rounded-2xl p-5">
                    <span className="font-serif italic text-[#334EAC] text-3xl md:text-4xl leading-none">{m.value}</span>
                    <span className="text-xs font-bold text-[#081F5C] mt-2">{m.label}</span>
                    <span className="text-[10px] text-[#7096D1] font-medium">{m.sub}</span>
                </div>
                ))}
            </div>
            </div>

            {/* User Quotes — two voices */}
            <div className="flex flex-col gap-4">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#334EAC]">User Feedback</span>

            <div className="pl-6 md:pl-8 border-l-2 border-[#BAD6EB] relative py-2">
                <span className="text-5xl md:text-6xl text-[#BAD6EB]/40 font-pinyon absolute -top-4 -left-4 select-none pointer-events-none leading-none">"</span>
                <p className="text-base md:text-lg text-[#081F5C]/90 font-light leading-relaxed italic relative z-10">
                The split-view system and centralized timeline completely eliminated our visual fatigue. We no longer spend grading cycles digging into layout depth parameters.
                <span className="block font-sans font-bold text-[10px] text-[#7096D1] uppercase tracking-[0.3em] mt-4 not-italic">— KMUTT Project Evaluator</span>
                </p>
            </div>

            <div className="pl-6 md:pl-8 border-l-2 border-[#BAD6EB]/50 relative py-2">
                <p className="text-sm md:text-base text-[#081F5C]/80 font-light leading-relaxed italic relative z-10">
                Before this, I had to click into each assignment separately just to check my deadline. Now I can see everything overdue the moment I log in.
                <span className="block font-sans font-bold text-[10px] text-[#7096D1] uppercase tracking-[0.3em] mt-4 not-italic">— Senior Student, CPE KMUTT</span>
                </p>
            </div>
            </div>

            {/* Reflection */}
            <div className="pl-4 border-l-2 border-[#BAD6EB] py-1 mt-2">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#334EAC] block mb-1">Designer's Reflection</span>
            <p className="text-sm text-[#081F5C]/70 leading-relaxed font-medium italic">
                This project taught me that the hardest UX problems aren't always visible — they live in the gap between what a system offers and what users actually need to do their work. Grounding every design decision in observed behavior, not assumption, was what made the outcome defensible.
            </p>
            </div>
        </div>
        </motion.section>

      </div>
    </div>
  );
}