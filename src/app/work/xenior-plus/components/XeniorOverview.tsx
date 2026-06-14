"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

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

export default function XeniorOverview() {
  return (
    <div 
      className="bg-[#FFFFFF] text-[#081F5C] selection:bg-[#D0E3FF] w-full px-16 pt-8 pb-24 flex flex-col gap-32"
      style={{ fontFamily: "'Montserrat', sans-serif" }}
    >
      {/* Sub-section: Hero */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
        className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center"
      >
        {/* Left Panel */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-[#081F5C] leading-none">
            Xenior+ <br/>
            <span className="font-pinyon text-[#7096D1] text-6xl md:text-7xl lg:text-8xl mt-2 block">Showcase</span>
          </h1>

          <p className="text-lg text-[#081F5C]/90 font-medium leading-relaxed mt-4">
            Redesigning Academic Project Management for Computer Engineering Faculties.
          </p>
          <p className="text-base text-[#081F5C]/70 leading-relaxed font-medium">
            From fragmented Excel-based grading to a centralized, role-aware platform — eliminating manual workflows and increasing academic search speed by 8.04x.
          </p>

          {/* Metadata Grid */}
          <div className="grid grid-cols-3 gap-6 mt-8 pt-8 border-t border-[#BAD6EB]/40">
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#334EAC] block mb-2">My Role</span>
              <span className="text-sm text-[#081F5C] font-bold block">UXR · UI · Code</span>
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#334EAC] block mb-2">Timeline</span>
              <span className="text-sm text-[#081F5C] font-bold block">2 Semesters</span>
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#334EAC] block mb-2">Core Tech</span>
              <span className="text-sm text-[#081F5C] font-bold block">Next.js · Tailwind</span>
            </div>
          </div>
        </div>

        {/* Right Panel */}
        <div className="lg:col-span-7">
          <div className="aspect-[16/11] w-full overflow-hidden rounded-none border border-[#BAD6EB]/30 bg-[#F7F2EB]  relative group">
            <Image
              src="/images/xenior_plus.png"
              alt="Xenior+ Academic Project Management Platform"
              fill
              sizes="(max-width: 1024px) 100vw, 750px"
              className="w-full h-full object-cover "
              priority
            />
          </div>
        </div>
      </motion.section>

      {/* Sub-section: Metrics */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
        className="flex flex-col gap-12"
      >
        <div className="flex flex-col gap-2">
          <span className="text-[10px] font-bold tracking-widest uppercase text-[#334EAC]">00 / Impact</span>
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-[#081F5C] flex flex-wrap items-baseline gap-x-3">
            Measurable 
            <span className="font-serif italic text-[#7096D1] text-4xl md:text-5xl">& Outcomes</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-[#BAD6EB]/40">
          
          {/* Metric 1 */}
          <div className="py-10 md:pr-10 md:border-r border-[#BAD6EB]/40 flex flex-col gap-4 group">
            <div className="text-[#334EAC] text-[10px] font-bold uppercase tracking-widest">Search Latency Optimization</div>
            <div className="flex items-baseline gap-3 my-2">
              <span className="text-sm line-through text-[#081F5C]/40">10.16s</span>
              <span className="text-5xl md:text-6xl font-serif italic text-[#334EAC] group-hover:text-[#7096D1] transition-colors duration-500">1.26s</span>
            </div>
            <p className="text-base font-medium text-[#081F5C]/80 leading-relaxed">
              <strong className="font-bold text-[#081F5C]">8.04x Faster</strong> full-catalog data rendering via Meilisearch backend integration.
            </p>
          </div>

          {/* Metric 2 */}
          <div className="py-10 md:px-10 md:border-r border-t md:border-t-0 border-[#BAD6EB]/40 flex flex-col gap-4 group">
            <div className="text-[#334EAC] text-[10px] font-bold uppercase tracking-widest">Spreadsheet Dependency</div>
            <div className="flex items-baseline gap-3 my-2">
              <span className="text-sm line-through text-[#081F5C]/40">Manual</span>
              <span className="text-5xl md:text-6xl font-serif italic text-[#334EAC] group-hover:text-[#7096D1] transition-colors duration-500">0%</span>
            </div>
            <p className="text-base font-medium text-[#081F5C]/80 leading-relaxed">
              Removed <strong className="font-bold text-[#081F5C]">100% of external grading workflows</strong> by digitizing calculation rubrics.
            </p>
          </div>

          {/* Metric 3 */}
          <div className="py-10 md:pl-10 border-t md:border-t-0 border-[#BAD6EB]/40 flex flex-col gap-4 group">
            <div className="text-[#334EAC] text-[10px] font-bold uppercase tracking-widest">Validation Satisfaction</div>
            <div className="flex items-baseline gap-3 my-2">
              <span className="text-sm text-[#081F5C]/40">UAT Scale</span>
              <span className="text-5xl md:text-6xl font-serif italic text-[#334EAC] group-hover:text-[#7096D1] transition-colors duration-500">High</span>
            </div>
            <p className="text-base font-medium text-[#081F5C]/80 leading-relaxed">
              Confirmed by <strong className="font-bold text-[#081F5C]">Expert Evaluators</strong> across Instructors, TAs, and Students.
            </p>
          </div>
          
        </div>
      </motion.section>
    </div>
  );
}