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
    <div className="flex flex-col gap-8 md:gap-8">

      {/* Hero Title */}
      <motion.div
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
        className="relative pt-4 md:pt-8"
      >
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium tracking-tight text-[#334EAC] leading-none">
          Xenior+{" "}
          <span className="font-pinyon text-[clamp(2.5rem,8vw,6.5rem)] text-[#334EAC] leading-none">
            Showcase
          </span>
        </h1>
      </motion.div>

      {/* Subtitle + Meta */}
      <motion.div
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
        className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-end border-b border-[#BAD6EB] pb-8 md:pb-10"
      >
        <div className="lg:col-span-7 space-y-3 md:space-y-4">
          <h2 className="text-lg md:text-xl lg:text-2xl font-normal text-[#081F5C] leading-snug">
            Redesigning Academic Project Management for Computer Engineering Faculties
          </h2>
          <p className="text-sm md:text-base text-stone-500 font-light leading-relaxed">
            From fragmented Excel-based grading to a centralized, role-aware platform — eliminating manual workflows and increasing academic search speed by 8.04x.
          </p>
        </div>

        <div className="lg:col-span-5 flex flex-wrap gap-x-6 gap-y-4 lg:justify-end">
          {[
            { label: "My Role", value: "UXR · UI · Code" },
            { label: "Timeline", value: "2 Semesters" },
            { label: "Core Tech", value: "Next.js · Tailwind" },
          ].map((item, idx) => (
            <div key={idx}>
              <p className="text-[10px] uppercase tracking-widest text-[#7096D1] font-bold mb-1">
                {item.label}
              </p>
              <p className="text-sm font-medium text-[#081F5C]">{item.value}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Hero Image */}
      <motion.div
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
        className="w-full aspect-[4/3] sm:aspect-[16/9] overflow-hidden border border-[#BAD6EB]/30 bg-[#F7F2EB] relative"
      >
        <Image
          src="/images/xenior_plus.png"
          alt="Xenior+ Academic Project Management Platform"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
      </motion.div>

      {/* Metrics */}
      <motion.div
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
        className="grid grid-cols-1 md:grid-cols-3 border-t border-b border-[#BAD6EB]/40"
      >
        {[
          {
            label: "Search Latency Optimization",
            before: "10.16s",
            value: "1.26s",
            desc: <><strong className="font-bold text-[#081F5C]">8.04x Faster</strong> full-catalog data rendering via Meilisearch backend integration.</>
          },
          {
            label: "Spreadsheet Dependency",
            before: "Manual",
            value: "0%",
            desc: <>Removed <strong className="font-bold text-[#081F5C]">100% of external grading workflows</strong> by digitizing calculation rubrics.</>
          },
          {
            label: "Validation Satisfaction",
            before: "UAT Scale",
            value: "High",
            desc: <>Confirmed by <strong className="font-bold text-[#081F5C]">Expert Evaluators</strong> across Instructors, TAs, and Students.</>
          },
        ].map((metric, idx) => (
          <div
            key={idx}
            className={`py-8 md:py-10 flex flex-col gap-3 md:gap-4 group border-b md:border-b-0 border-[#BAD6EB]/40
              ${idx === 0 ? "md:pr-10 md:border-r border-[#BAD6EB]/40" : ""}
              ${idx === 1 ? "md:px-10 md:border-r border-[#BAD6EB]/40" : ""}
              ${idx === 2 ? "md:pl-10 border-b-0" : ""}
            `}
          >
            <div className="text-[#334EAC] text-[10px] font-bold uppercase tracking-widest">{metric.label}</div>
            <div className="flex items-baseline gap-3 my-1">
              <span className="text-sm line-through text-[#081F5C]/40">{metric.before}</span>
              <span className="text-4xl sm:text-5xl md:text-6xl font-serif italic text-[#334EAC] group-hover:text-[#7096D1] transition-colors duration-500">
                {metric.value}
              </span>
            </div>
            <p className="text-sm md:text-base font-medium text-[#081F5C]/80 leading-relaxed">{metric.desc}</p>
          </div>
        ))}
      </motion.div>

    </div>
  );
}