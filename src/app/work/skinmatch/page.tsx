"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import FadeIn from "@/components/ui/FadeIn";

type FlowType = "user" | "supplier";

export default function SkinMatchProject() {
  const [activeSection, setActiveSection] = useState(0);
  const [activeFlow, setActiveFlow] = useState<FlowType>("user");

  const projectMeta = [
    { label: "Role", value: "Business Analyst & UX/UI" },
    { label: "Timeline", value: "3 Months" },
    { label: "Category", value: "Web App / E-Commerce" },
    { label: "Tech Stack", value: "React, Node.js, MongoDB" }
  ];

  const sidebarData = [
    { step: "01 / Project Discovery", title: "Market Insight", highlight: "& Discovery", desc: "Applying Software Engineering life-cycles to solve chemical incompatibility in daily skincare routines through strategic product analysis." },
    { step: "02 / Requirement Scoping", title: "Strategic", highlight: "Prioritization", desc: "Mitigating scope creep in the early stages by taming requirements to focus strictly on the Core Value Proposition: ingredient safety." },
    { step: "03 / UI Design System", title: "Aesthetic", highlight: "Affordance", desc: "Crafting an approachable, minimalist design vocabulary (Pink-White palette) engineered to make dry chemical formulas look fresh and friendly." },
    { step: "04 / Core User Flows", title: "Simulating", highlight: "The Experience", desc: "Mapping diverse requirements into frictionless interface nodes, serving both health-conscious consumers and commercial suppliers." },
    { step: "05 / Trade-offs & Delivery", title: "Feasibility", highlight: "Compromises", desc: "Reflecting on real-world engineering constraints: bridging complex high-fidelity layout concepts with development deadlines." }
  ];

  const painPoints = [
    { label: "Chemical Conflict Blindspots", desc: "Modern consumers stack multiple skincare products without realizing certain active ingredients counteract or trigger hazardous skin inflammation.", impact: "High User Health Risks" },
    { label: "Illegible Scientific Labels", desc: "Ingredient lists on product packaging are heavily gated by dense chemical nomenclature, making manual safety verification impossible for average users.", impact: "Severe Cognitive Load" },
    { label: "Unoptimized Monetization", desc: "Skincare brands lacked a localized, contextual platform to advertise products directly to consumers at the exact moment of high purchasing intent.", impact: "Missed Business Opportunities" }
  ];

  const designSystem = [
    { token: "Color Psychology", title: "Soft Pink & Clean White", body: "Evokes a sense of cleanliness, dermatological safety, and warmth, reducing interface intimidation." },
    { token: "Typography", title: "Inter & Font Readability", body: "Enforced structural sans-serif font weights to isolate dense chemical terms with pristine legibility." },
    { token: "Component Reuse", title: "Figma UI Kit Automation", body: "Designed localized, repeatable cards, status badges, and slider variants to fast-track front-end handoff." }
  ];

  const technicalCompromises = [
    { title: "UI Simplification Loop", issue: "The initial high-fidelity prototype carried intricate multi-layered state interactions that challenged the front-end timeline.", resolution: "Collaborated directly with developers to simplify interface parameters, converting complex overlapping sheets into clean, performant layouts." },
    { title: "Requirement De-scoping", issue: "Early functional specifications broadsided the project core value with excessive marketplace features.", resolution: "Steered the business roadmap backward to sharpen focus exclusively on the 'Ingredient Compatibility Resolution Engine'." },
    { title: "Git Conflict Resolution", issue: "Version control sync overlaps threatened production timeline consistency during parallel feature deployments.", resolution: "Established strict module branch boundaries and centralized pull request reviews to safeguard system integrity." }
  ];

  const flowViews = {
    user: (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#7096D1] block mb-4 border-b border-[#BAD6EB]/30 pb-2">Search & Match Core</span>
          <div className="flex justify-between py-2 gap-4"><span className="text-[#081F5C] font-medium">Incompatible Detection</span><span className="text-red-500 font-serif italic text-sm shrink-0">Auto-Alert</span></div>
          <div className="flex justify-between py-2 gap-4"><span className="text-[#081F5C] font-medium">Safe Alternative System</span><span className="text-[#334EAC] font-serif italic text-sm shrink-0">Recommended</span></div>
        </div>
        <div>
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#7096D1] block mb-4 border-b border-[#BAD6EB]/30 pb-2">User Features</span>
          <div className="flex justify-between py-2 gap-4"><span className="text-[#081F5C] font-medium">Ingredient Glossary Explorer</span><span className="text-[#081F5C]/70 font-mono text-xs shrink-0">MongoDB Node</span></div>
          <div className="flex justify-between py-2 gap-4"><span className="text-[#081F5C] font-medium">Personal Skin Identity Profile</span><span className="text-[#081F5C]/70 font-mono text-xs shrink-0">Active</span></div>
        </div>
      </div>
    ),
    supplier: (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#7096D1] block mb-4 border-b border-[#BAD6EB]/30 pb-2">B2B Ad Architecture</span>
          <div className="flex justify-between py-2 gap-4"><span className="text-[#081F5C] font-medium">Banner Ad Slot Bidding</span><span className="text-[#334EAC] font-serif italic text-sm shrink-0">Weekly/Monthly</span></div>
          <div className="flex justify-between py-2 gap-4"><span className="text-[#081F5C] font-medium">Targeted Product Placement</span><span className="text-[#081F5C]/70 font-mono text-xs shrink-0">Dynamic</span></div>
        </div>
        <div>
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#7096D1] block mb-4 border-b border-[#BAD6EB]/30 pb-2">Payment Gateway Loop</span>
          <div className="flex justify-between py-2 gap-4"><span className="text-[#081F5C] font-medium">Credit / Debit Processing</span><span className="text-[#081F5C]/70 font-mono text-xs shrink-0">Secure REST</span></div>
          <div className="flex justify-between py-2 gap-4"><span className="text-[#081F5C] font-medium">Automated Receipt Emission</span><span className="text-green-600 font-serif italic text-sm shrink-0">Instant</span></div>
        </div>
      </div>
    )
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } }
  };

  return (
    <main className="bg-[#FFFFFF] min-h-screen text-stone-800 antialiased selection:bg-[#081F5C]/10 selection:text-[#081F5C] pb-16">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Pinyon+Script&display=swap');
        .font-pinyon { font-family: 'Pinyon Script', cursive; }
      `}</style>

      <FadeIn delay={0}>
        <div className="w-full px-6 lg:px-16 pt-8 pb-24 flex flex-col">
          
          {/* =========================================
              COMPONENT 1: HEADER & OVERVIEW (ไร้ช่องว่างกวนใจ) 
          ========================================= */}
          <div className="flex justify-between items-center mb-8">
            <Link 
              href="/#work" 
              className="inline-flex items-center text-xs uppercase tracking-widest text-gray-400 hover:text-gray-900 transition-colors duration-300"
            >
              ← Back to Work
            </Link>
            <span className="text-xs uppercase tracking-widest font-medium text-gray-500 font-sans">
              Case Study · Software Engineering & UX/UI
            </span>
          </div>

          <div className="flex flex-col gap-8 md:gap-8">
            {/* Hero Title */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="relative pt-4 md:pt-8">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium tracking-tight text-[#334EAC] leading-none">
                SKINMATCH{" "}
                <span className="font-pinyon text-[clamp(2.5rem,8vw,6.5rem)] text-[#334EAC] leading-none">
                  Platform
                </span>
              </h1>
            </motion.div>

            {/* Subtitle + Meta (ตัด mb ทิ้งให้แนบสนิทกับเนื้อหาด้านล่าง) */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-end border-b border-[#BAD6EB] pb-8 md:pb-10">
              <div className="lg:col-span-7 space-y-3 md:space-y-4">
                <h2 className="text-lg md:text-xl lg:text-2xl font-normal text-[#081F5C] leading-snug">
                  An intelligent web platform resolving chemical cross-reactions in skincare management.
                </h2>
                <p className="text-sm md:text-base text-stone-500 font-light leading-relaxed">
                  Designing a highly readable visual hierarchy to transform dense, complex skincare ingredient matrices into an elegant, user-friendly, and actionable compatibility resolution engine.
                </p>
              </div>

              <div className="lg:col-span-5 flex flex-wrap gap-x-6 gap-y-4 lg:justify-end">
                {projectMeta.map((item, idx) => (
                  <div key={idx}>
                    <p className="text-[10px] uppercase tracking-widest text-[#7096D1] font-bold mb-1">
                      {item.label}
                    </p>
                    <p className="text-sm font-medium text-[#081F5C]">{item.value}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* =========================================
              COMPONENT 2: DETAIL, DISCOVERY & EXECUTION 
          ========================================= */}
          <div className="relative flex flex-col lg:flex-row items-start w-full pt-8">
            
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
                      {["Figma", "BA Scope", "UX/UI", "MERN Stack", "Tailwind", "Agile"].map((tag) => (
                        <span key={tag} className="text-[9px] uppercase tracking-widest font-bold text-[#7096D1] bg-[#F7F2EB] border border-[#BAD6EB]/40 px-3 py-1.5 rounded-full">{tag}</span>
                      ))}
                    </motion.div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* 🔵 RIGHT SIDE: Scrollable Content */}
            <div className="w-full lg:w-8/12 flex flex-col lg:pl-16 pb-16">

              {/* Section 01: Project Discovery */}
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
                    <img src="/images/skinmatch-hero.png" alt="SkinMatch UI Solution" className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display='none' }} />
                    <span className="text-[10px] tracking-widest uppercase text-[#7096D1] font-bold bg-white px-3 py-1.5 rounded-lg absolute bottom-4 right-4 shadow-xs">High-Fidelity Solution</span>
                  </div>
                  
                  <div className="flex flex-col gap-5">
                    <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#334EAC]">Strategic Objective</span>
                    <p className="text-base md:text-lg text-[#081F5C]/80 leading-relaxed font-light">
                      The primary objective of this project was to design a structured and highly legible data model for complex skincare products. I dedicated the majority of my time to Requirement Elicitation as a Business Analyst, while simultaneously functioning as the UX/UI Designer to establish a clear visual hierarchy. This culminated in a high-fidelity Figma prototype tailored for real-world e-commerce usability.
                    </p>
                  </div>
                </div>
              </motion.section>

              {/* Section 02: Requirement Scoping */}
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
                          <span className="text-[10px] uppercase tracking-[0.3em] text-[#7096D1] font-bold bg-[#D0E3FF]/30 px-2 py-1 rounded">BA Scoping</span>
                          <span className="text-sm font-serif italic text-[#334EAC]">{pain.impact}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.section>

              {/* Section 03: UI Design System */}
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
                    <img src="/images/skinmatch-design-system.png" alt="SkinMatch Figma Design System" className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display='none' }} />
                    <span className="text-[10px] tracking-widest uppercase text-[#7096D1] font-bold bg-white px-3 py-1.5 rounded-lg absolute bottom-4 right-4 shadow-xs">Figma Variables</span>
                  </div>

                  <div className="flex flex-col border-t border-[#BAD6EB]/40 mt-4">
                    {designSystem.map((item, idx) => (
                      <div key={idx} className="grid grid-cols-1 md:grid-cols-12 gap-4 py-5 border-b border-[#BAD6EB]/40 group hover:translate-x-1 transition-transform duration-300">
                        <span className="md:col-span-3 text-[10px] font-bold tracking-widest uppercase text-[#7096D1] pt-1">{item.token}</span>
                        <div className="md:col-span-9 flex flex-col gap-1">
                          <h4 className="text-sm font-bold text-[#081F5C]">{item.title}</h4>
                          <p className="text-sm text-[#081F5C]/70 font-medium leading-relaxed">{item.body}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.section>

              {/* Section 04: Core User Flows */}
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
                    <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#7096D1]">Target Segment Simulation</span>
                    <div className="flex gap-4">
                      {(["user", "supplier"] as FlowType[]).map((tab) => (
                        <button
                          key={tab}
                          onClick={() => setActiveFlow(tab)}
                          className={`text-[10px] md:text-xs uppercase tracking-[0.2em] transition-colors duration-300 pb-1 border-b-2 ${
                            activeFlow === tab ? "text-[#081F5C] font-bold border-[#334EAC]" : "text-[#7096D1] hover:text-[#334EAC] border-transparent"
                          }`}
                        >
                          {tab === "user" ? "User Perspective" : "Supplier Portal"}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <div className="min-h-[140px] bg-[#F7F2EB]/40 p-6 rounded-2xl border border-[#BAD6EB]/30 shadow-xs">
                    <AnimatePresence mode="wait">
                      <motion.div key={activeFlow} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }}>
                        {flowViews[activeFlow]}
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  <div className="aspect-[16/10] bg-[#F7F2EB] w-full overflow-hidden border border-[#BAD6EB]/30 rounded-2xl shadow-sm relative mt-2">
                    <img src={`/images/skinmatch-flow-${activeFlow}.png`} alt={`${activeFlow} interaction wireframe`} className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display='none' }} />
                  </div>
                </div>
              </motion.section>

              {/* Section 05: Trade-offs & Delivery */}
              <motion.section
                onViewportEnter={() => setActiveSection(4)}
                viewport={{ margin: "-50% 0px -50% 0px" }}
                className="flex flex-col gap-8 min-h-[80vh] justify-center pt-20"
              >
                <div className="lg:hidden flex flex-col gap-3 border-b border-[#BAD6EB]/40 pb-6">
                  <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#334EAC]">{sidebarData[4].step}</span>
                  <h2 className="text-4xl font-light tracking-tight text-[#081F5C]">
                    {sidebarData[4].title} <br/> <span className="font-serif italic text-[#7096D1] text-5xl">{sidebarData[4].highlight}</span>
                  </h2>
                </div>

                <div className="flex flex-col gap-10 w-full">
                  <div className="flex flex-col gap-5">
                    <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#334EAC]">Engineering Constraints</span>
                    <div className="flex flex-col gap-4">
                      {technicalCompromises.map((item, idx) => (
                        <div key={idx} className="bg-white p-5 rounded-2xl border border-[#BAD6EB]/40 flex flex-col md:flex-row md:items-center justify-between gap-4">
                          <span className="font-bold text-[#081F5C] text-sm md:w-1/3">{item.title}</span>
                          <div className="flex flex-col gap-1 md:w-2/3">
                            <p className="text-sm text-[#081F5C]/80 font-medium">Issue: {item.issue}</p>
                            <p className="text-xs font-medium text-[#334EAC] mt-1">Resolution: {item.resolution}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pl-6 md:pl-8 border-l-2 border-[#BAD6EB] relative py-2 mt-2">
                    <span className="text-5xl md:text-6xl text-[#BAD6EB]/40 font-pinyon absolute -top-4 -left-4 select-none pointer-events-none leading-none">"</span>
                    <p className="text-base md:text-lg text-[#081F5C]/90 font-light leading-relaxed italic relative z-10">
                      Simplifying the UI design to align with the development team's time constraints demonstrated strong adaptability and effective cross-functional collaboration between Design and Engineering.
                      <span className="block font-sans font-bold text-[10px] text-[#7096D1] uppercase tracking-[0.3em] mt-4 not-italic">— Reflection Takeaway</span>
                    </p>
                  </div>
                </div>
              </motion.section>

            </div>
          </div>

          {/* =========================================
              COMPONENT 3: CLOSING SIGNATURE SECTION 
          ========================================= */}
          <div className="mt-8 pt-20 border-t border-[#BAD6EB]/40 text-center flex flex-col items-center max-w-3xl mx-auto gap-8">
            <span className="font-pinyon text-6xl text-[#334EAC] leading-none block mb-2">Fin.</span>
            <p className="text-xl text-[#081F5C]/80 leading-relaxed font-light -mt-8">
              SkinMatch successfully transformed a complex matrix of chemical interactions into an <strong className="font-semibold text-[#081F5C]">accessible, intelligent skincare compatibility engine</strong> that reduced cognitive load and empowered consumers to make safe, informed purchasing decisions.
            </p>
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 bg-[#081F5C] text-white px-6 py-4 rounded-xl font-semibold text-sm hover:bg-[#334EAC] transition-all active:scale-98 shadow-sm mt-4"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
              Back to Project Grid
            </Link>
          </div>

        </div>
      </FadeIn>
    </main>
  );
}