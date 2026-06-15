"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { MetaItem } from "@/types/portfolio";

interface ProjectHeaderProps {
  title: string;
  italicTitle: string;
  subtitle: string;
  description: string;
  meta: MetaItem[];
  category?: string; // เพิ่มให้แก้ไขหมวดหมู่ได้ง่ายๆ
}

// แอนิเมชันเลื่อนขึ้นนุ่มๆ แบบ Xenior
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

export default function ProjectHeader({ 
  title, 
  italicTitle, 
  subtitle, 
  description, 
  meta,
  category = "Case Study · Software Engineering & UX/UI" 
}: ProjectHeaderProps) {
  return (
    <div className="flex flex-col gap-8 md:gap-8 w-full">
      
      {/* Top Mini-Header */}
      <motion.div 
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
        className="flex justify-between items-center pt-4 md:pt-8"
      >
        <Link 
          href="/#work" 
          className="inline-flex items-center text-xs uppercase tracking-widest text-gray-400 hover:text-[#081F5C] transition-colors duration-300"
        >
          ← Back to Work
        </Link>
        <span className="text-xs uppercase tracking-widest font-medium text-gray-500 font-sans">
          {category}
        </span>
      </motion.div>

      {/* Hero Title Section */}
      <motion.div
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
        className="relative"
      >
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium tracking-tight text-[#334EAC] leading-none">
          {title}{" "}
          <span className="font-pinyon text-[clamp(2.5rem,8vw,6.5rem)] text-[#334EAC] leading-none">
            {italicTitle}
          </span>
        </h1>
      </motion.div>

      {/* Subtitle + Meta Grid */}
      <motion.div
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
        className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-end border-b border-[#BAD6EB]/60 pb-8 md:pb-10"
      >
        <div className="lg:col-span-7 space-y-3 md:space-y-4">
          <h2 className="text-lg md:text-xl lg:text-2xl font-normal text-[#081F5C] leading-snug">
            {subtitle}
          </h2>
          <p className="text-sm md:text-base text-stone-500 font-light leading-relaxed">
            {description}
          </p>
        </div>
        
        <div className="lg:col-span-5 flex flex-wrap gap-x-6 gap-y-4 lg:justify-end w-full">
          {meta.map((item, idx) => (
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
  );
}