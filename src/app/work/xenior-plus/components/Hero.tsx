"use client";

import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-10 gap-12 items-center py-6 w-full border-b border-stone-200">
      
      {/* Left Panel Context Info (40%) */}
      <div className="flex flex-col lg:col-span-4 w-full min-w-0 relative">
        <span className="text-xs uppercase tracking-[0.2em] text-[#334EAC] font-bold">
          Case Study · UX/UI + Frontend Implementation
        </span>
        
        <div className="relative mt-6 mb-4">
          <h1 className="text-5xl lg:text-6xl font-medium tracking-tight text-[#081F5C] leading-none z-10 relative">
            Xenior+
          </h1>
          <span className="font-pinyon text-6xl md:text-7xl text-[#334EAC] absolute -top-4 md:-top-5 left-12 md:left-24 select-none opacity-20 pointer-events-none">
            Showcase
          </span>
        </div>

        <p className="text-lg text-stone-600 font-light leading-relaxed mt-2">
          Redesigning Academic Project Management for Computer Engineering Faculties
        </p>
        <p className="mt-4 text-xs text-stone-500 leading-relaxed font-light">
          From fragmented Excel-based grading to a centralized, role-aware platform — eliminating manual workflows and increasing academic search speed by 8.04x.
        </p>

        {/* Designer Metadata Grid */}
        <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-stone-300/40">
          <div>
            <label className="text-[9px] uppercase font-bold tracking-wider text-stone-400 block mb-1">My Role</label>
            <span className="text-xs text-stone-600 font-medium block leading-snug">UXR · UI · Code</span>
          </div>
          <div>
            <label className="text-[9px] uppercase font-bold tracking-wider text-stone-400 block mb-1">Timeline</label>
            <span className="text-xs text-stone-600 font-medium block">2 Semesters</span>
          </div>
          <div>
            <label className="text-[9px] uppercase font-bold tracking-wider text-stone-400 block mb-1">Core Tech</label>
            <span className="text-xs text-stone-600 font-medium block">Next.js · Tailwind</span>
          </div>
        </div>
      </div>

      {/* 🖥️ Right Panel Layout (60%) */}
        <div className="relative lg:col-span-6 w-full min-w-0 aspect-[16/11]">
        {/* กล่องควบคุมกรอบและเงา (ลบ </div> ที่ปิดเกินออกแล้ว) */}
        <div className="overflow-hidden rounded-2xl lg:rounded-3xl w-full h-full shadow-xs relative">
            
            <Image
            src="/images/xenior_plus.png" 
            alt="Xenior+ Academic Project Management Platform"
            fill
            sizes="(max-w-1024px) 100vw, 750px"
            className="object-cover" 
            priority 
            />

        </div> {/* 🎯 แท็กปิดของตัวควบคุมกรอบต้องมาอยู่ตรงนี้แทน */}
        </div>

    </div>
  );
}