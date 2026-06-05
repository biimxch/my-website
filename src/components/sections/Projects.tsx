"use client";

import { useState, useMemo, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/lib/data";

// ── สร้างชุดข้อมูล Impact Stats ผูกไว้กับตำแหน่ง slug ของแต่ละโปรเจกต์ ────────────────
const projectStatsMap: Record<string, { value: string; label: string }[]> = {
  "xenior-plus": [
    { value: "8.04×", label: "Faster Search" },
    { value: "100%", label: "Excel Removed" },
    { value: "High", label: "UAT Satisfaction" },
  ],
  "runverr": [
    { value: "UE5", label: "Engine Blueprint" },
    { value: "Persistent", label: "High-Score System" },
    { value: "Spatial", label: "3D UX Tuning" },
  ],
  "skinmatch": [
    { value: "Hi-Fi", label: "Interactive Prototype" },
    { value: "User", label: "Flow Optimization" },
    { value: "E-Com", label: "Skincare Platform" },
  ],
  "graphic-design": [
    { value: "Bespoke", label: "Apparel Patterns" },
    { value: "Vector", label: "Branding Assets" },
    { value: "Multi", label: "Organizations" },
  ],
};

export default function Projects() {
  const [selectedSlug, setSelectedSlug] = useState<string>("xenior-plus");
  
  // 🎯 1. สร้าง Ref เพื่อมาร์กจุดบนสุดของส่วนแสดงรายละเอียดผลงาน (Hero Preview)
  const previewTopRef = useRef<HTMLDivElement>(null);

  const featuredProject = useMemo(() => {
    return projects.find((p) => p.slug === selectedSlug) || projects[0];
  }, [selectedSlug]);

  const currentStats = projectStatsMap[featuredProject.slug] || [];

  // 🎯 2. ฟังก์ชันอัปเดตเมื่อคลิกเลือกโปรเจกต์ + ดีดหน้าจอกลับขึ้นไปโฟกัสอัตโนมัติบนโมบายล์
  const handleSelectProject = (slug: string) => {
    setSelectedSlug(slug);
    
    // ตรวจสอบว่าอยู่บนหน้าจอเล็ก และมี ref อยู่จริง จึงจะสั่งให้เลื่อนหน้าจอขึ้น
    if (window.innerWidth < 1024 && previewTopRef.current) {
      previewTopRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section
      id="projects"
      className="pt-20 max-w-6xl mx-auto px-6 py-24 border-t border-[#CCCCCC]"
    >
      {/* ── Section Title ── */}
      {/* 🎯 ปักหมุด Ref ไว้ตรงหัวข้อนี้ เพื่อให้หน้าจอเลื่อนกลับมาตรงจุดนี้เวลาคลิกบนมือถือ */}
      <div className="mb-12 lg:mb-16" ref={previewTopRef}>
        <h2 className="text-5xl lg:text-6xl font-medium tracking-tight text-[#334FAE] leading-none">
          PROJECTS
        </h2>
      </div>

      {/* ════════════════════════════════════════
          HERO PROJECT PREVIEW (สัดส่วน 40% : 60%)
         ════════════════════════════════════════ */}
      <AnimatePresence mode="wait">
        <motion.div
          key={featuredProject.slug}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          className="grid grid-cols-1 lg:grid-cols-10 gap-8 lg:gap-12 items-center w-full"
        >
          {/* ── ฝั่งข้อมูลเนื้อหา (40%) ── */}
          <div className="flex flex-col lg:col-span-4 w-full min-w-0 order-2 lg:order-1">
            <span className="text-xs uppercase tracking-[0.2em] text-[#334FAE] font-bold">
              Now Viewing
            </span>

            <h3 className="mt-4 text-3xl lg:text-5xl font-bold tracking-tight text-[#334FAE] leading-[1.1]">
              {featuredProject.title}
            </h3>

            <p className="mt-4 lg:mt-6 text-sm lg:text-[1.02rem] text-stone-600 leading-relaxed font-light">
              {featuredProject.description}
            </p>

            {/* Impact stats */}
            <div className="grid grid-cols-3 gap-2.5 mt-6 lg:mt-8">
              {currentStats.map((stat) => (
                <div
                  key={stat.label}
                  className="border border-[#CCCCCC] rounded-xl p-3 flex flex-col gap-0.5 bg-stone-50/50 min-w-0"
                >
                  <span className="text-lg lg:text-xl font-bold text-[#334FAE] leading-none truncate">
                    {stat.value}
                  </span>
                  <span className="text-[9px] lg:text-[10px] text-stone-500 leading-tight mt-1">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 mt-5 lg:mt-6">
              {featuredProject.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 border border-[#CCCCCC] rounded-full text-[10px] lg:text-xs font-medium text-stone-500 bg-white"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* CTA Button */}
            <Link
              href={`/work/${featuredProject.slug}`}
              className="inline-flex items-center gap-2 mt-6 lg:mt-8 bg-[#334FAE] text-white px-5 py-3.5 rounded-xl font-semibold text-sm hover:bg-[#253b8c] transition-colors duration-200 self-start shadow-xs w-full lg:w-auto justify-center lg:justify-start"
            >
              View Case Study
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="7" y1="7" x2="17" y2="17" />
                <polyline points="17 7 17 17 7 17" />
              </svg>
            </Link>
          </div>

          {/* ── ฝั่งรูปภาพผลงานหลัก (60%) ── */}
          {/* บน Mobile จะสลับขึ้นมาอยู่ด้านบน (order-1) เพื่อให้เห็นเด่นชัดเวลากดสลับภาพ */}
          <div className="relative aspect-[16/11] lg:col-span-6 w-full min-w-0 order-1 lg:order-2">
            <div className="overflow-hidden rounded-2xl lg:rounded-3xl w-full h-full shadow-xs relative">
              <Image
                src={featuredProject.coverImage}
                alt={featuredProject.title}
                fill
                sizes="(max-w-1024px) 100vw, 750px"
                className="object-cover"
                priority
              />
            </div>

            {/* Duration Badge */}
            <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm border border-[#CCCCCC]/60 rounded-md px-2.5 py-1.5 flex items-center gap-1.5 shadow-2xs">
              <span className="text-[9px] font-medium text-stone-400 uppercase tracking-wider">
                Duration
              </span>
              <span className="w-px h-2.5 bg-stone-200" />
              <span className="font-mono text-[#334FAE] font-bold text-[11px]">
                {featuredProject.duration}
              </span>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* ════════════════════════════════════════
          PROJECT SELECTOR TRACK
         ════════════════════════════════════════ */}
      <div className="mt-16 lg:mt-24">
        {/* Header row */}
        <div className="flex items-center justify-between mb-6 lg:mb-10">
          <h3 className="text-2xl lg:text-3xl font-bold tracking-tight text-stone-800">
            All Projects
          </h3>
          <span className="text-xs font-mono text-stone-400">
            {/* ปรับข้อความแนะแนวทางให้ตรงตามสไตล์การเปิดใช้งานอุปกรณ์ */}
            <span className="hidden lg:inline">Click any card to preview</span>
            <span className="lg:hidden">Swipe & tap to preview</span>
          </span>
        </div>

        {/* 🎯 3. ตัวถังเลย์เอาต์อัจฉริยะ: บน Mobile สไลด์ซ้ายขวาแนวนอน (flex overflow-x-auto) / บน Desktop เรียงแบบกริต 4 คอลลัมน์สวยๆตามเดิม */}
        <div className="flex lg:grid lg:grid-cols-4 gap-4 lg:gap-6 overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0 pt-1 w-full scrollbar-none snap-x snap-mandatory">
          {projects.map((project) => {
            const isSelected = selectedSlug === project.slug;

            return (
              <button
                key={project.slug}
                onClick={() => handleSelectProject(project.slug)}
                // w-[260px] lg:w-full -> บนโมบายล์ล็อกความกว้างไว้ไม่ให้เบียดกัน แล้วให้ปัดนิ้วดูได้เพลินๆ
                className={`group text-left flex flex-col rounded-xl lg:rounded-2xl overflow-hidden bg-white transition-all duration-300 relative border shrink-0 w-[260px] lg:w-full snap-start ${
                  isSelected 
                    ? "border-[#334FAE] ring-2 ring-[#334FAE]/20 shadow-md" 
                    : "border-[#CCCCCC]/60 lg:hover:shadow-lg lg:hover:-translate-y-1"
                }`}
              >
                {/* ติ่งเช็คถูกขนาดจิ๋ว */}
                {isSelected && (
                  <div className="absolute top-2.5 right-2.5 bg-[#334FAE] text-white rounded-full p-0.5 z-10 shadow-xs">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                )}

                {/* Thumbnail สัดส่วน 4/3 */}
                <div className="aspect-[4/3] overflow-hidden bg-stone-50 w-full relative">
                  <Image
                    src={project.coverImage}
                    alt={project.title}
                    fill
                    sizes="(max-w-768px) 260px, 400px"
                    className={`object-cover transition-transform duration-500 ${
                      isSelected ? "scale-101" : "lg:group-hover:scale-105"
                    }`}
                  />
                  {!isSelected && <div className="absolute inset-0 bg-stone-900/5 lg:group-hover:opacity-0 transition-opacity" />}
                </div>

                {/* Card Body */}
                <div className="p-4 flex flex-col gap-2 w-full flex-1 justify-between">
                  <div className="flex flex-col gap-1 w-full">
                    <div className="flex items-start justify-between gap-2 w-full">
                      <h4 className={`font-bold text-base tracking-tight leading-snug transition-colors line-clamp-1 ${
                        isSelected ? "text-[#334FAE]" : "text-stone-800"
                      }`}>
                        {project.title}
                      </h4>
                      <span className="font-mono text-[#334FAE] font-bold text-[10px] shrink-0 mt-0.5">
                        {project.duration}
                      </span>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 pt-2 border-t border-stone-100 w-full">
                    {project.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-[9px] font-medium rounded-full border border-[#CCCCCC] text-stone-500 bg-white"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

              </button>
            );
          })}
        </div>
      </div>

      {/* ── Mobile: Let's collaborate CTA ── */}
      <div className="mt-12 lg:hidden">
        <a
          href="#contact"
          className="inline-flex w-full items-center justify-between bg-[#334FAE] text-white font-semibold px-6 py-4 rounded-xl group hover:bg-[#253b8c] transition-colors duration-200"
        >
          <span className="text-sm tracking-tight">Let&apos;s collaborate</span>
          <svg
            className="transform group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform"
            width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
          >
            <line x1="7" y1="7" x2="17" y2="17" />
            <polyline points="17 7 17 17 7 17" />
          </svg>
        </a>
      </div>
    </section>
  );
}