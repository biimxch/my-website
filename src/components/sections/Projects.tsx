"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { projects } from "@/lib/data"; 
import Carousel from "../ui/Carousel"; 

const categoryMapping = [
  { displayCategory: "Web Design & Development", projectIndex: 0 },
  { displayCategory: "Game Development", projectIndex: 1 },
  { displayCategory: "UI/UX Design", projectIndex: 2 },
  { displayCategory: "Branding & Visual Design", projectIndex: 3 },
];

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  
  const activeProject = activeIndex !== null ? projects[categoryMapping[activeIndex].projectIndex] : null;

  const carouselItems = useMemo(() => {
    return categoryMapping.map((item) => {
      const proj = projects[item.projectIndex];
      return {
        id: proj.slug,
        title: proj.title,
        image: proj.coverImage,
      };
    });
  }, []);

  return (
    <section id="projects" className="pt-20 max-w-6xl mx-auto px-6 py-24 border-t border-[#CCCCCC]">
      
      {/* Section Title */}
      <div className="mb-14">
        <h2 className="text-6xl font-medium tracking-tight text-[#334FAE] leading-none">
          PROJECTS
        </h2>
      </div>

      {/* 📦 Grid โครงสร้างหลัก */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 items-start w-full">
        
        {/* ---------------- ฝั่งซ้าย: รายการหมวดหมู่หลัก (1/3) ---------------- */}
        <div className="flex flex-col py-2 lg:min-h-[380px] lg:pr-12 w-full min-w-0">
          <div className="space-y-2">
            {categoryMapping.map((item, index) => {
              const project = projects[item.projectIndex];
              const isSelected = activeIndex === index;

              return (
                <div key={project.slug} className="border-b border-[#CCCCCC]/30 lg:border-none pb-2 lg:pb-0">
                  
                  {/* ปุ่มกดเลือกเมนู */}
                  <button
                    onClick={() => {
                      setActiveIndex(isSelected ? null : index);
                    }}
                    onMouseEnter={() => {
                      if (window.innerWidth >= 1024) setActiveIndex(index);
                    }}
                    className="relative w-full text-left px-5 py-4 rounded-xl flex items-start gap-3.5 transition-colors duration-300 group z-10"
                  >
                    {isSelected && (
                      <motion.div
                        layoutId="active-project-pill"
                        className="absolute inset-0 bg-[#334FAE] rounded-xl -z-10"
                        transition={{ type: "spring", stiffness: 260, damping: 28 }}
                      />
                    )}
                    
                    <span className={`text-sm font-semibold font-mono pt-0.5 transition-colors duration-300 ${
                      isSelected ? "text-blue-200" : "text-stone-400 group-hover:text-[#334FAE]"
                    }`}>
                      0{index + 1}.
                    </span>
                    
                    <div className="flex flex-col gap-0.5">
                      <span className={`text-[1.05rem] font-medium tracking-tight transition-colors duration-300 ${
                        isSelected ? "text-white" : "text-stone-700 group-hover:text-[#334FAE]"
                      }`}>
                        {item.displayCategory}
                      </span>
                      <span className={`text-xs font-medium tracking-wide uppercase transition-colors duration-300 ${
                        isSelected ? "text-blue-200/90" : "text-stone-400 group-hover:text-stone-500"
                      }`}>
                        {project.title}
                      </span>
                    </div>
                  </button>

                  {/* 📱 Mobile Accordion Content */}
                  <div className="lg:hidden overflow-hidden">
                    <AnimatePresence initial={false}>
                      {isSelected && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                          <div className="px-5 pt-4 pb-6 flex flex-col gap-4">
                            <div className="relative overflow-hidden aspect-[16/9] w-full bg-stone-50 rounded-xl border border-[#CCCCCC]/40">
                              <img src={project.coverImage} alt={project.title} className="w-full h-full object-cover" />
                            </div>
                            
                            <div className="flex items-center justify-between gap-4 w-full mt-1">
                              <h3 className="text-xl font-bold tracking-tight text-[#334FAE]">
                                {project.title}
                              </h3>
                              <Link
                                href={`/work/${project.slug}`}
                                className="inline-flex items-center gap-1.5 bg-[#334FAE] text-white px-4 py-2 rounded-lg font-semibold text-xs shadow-xs shrink-0"
                              >
                                View Case Study
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                  <line x1="7" y1="7" x2="17" y2="17"></line>
                                  <polyline points="17 7 17 17 7 17"></polyline>
                                </svg>
                              </Link>
                            </div>
                            
                            <p className="text-sm text-stone-600 leading-relaxed font-light">
                              {project.description}
                            </p>

                            <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-stone-100">
                              <span className="text-[11px] font-bold text-stone-400 uppercase tracking-wider">Duration:</span>
                              <span className="font-mono text-[#334FAE] font-bold text-xs mr-2">{project.duration}</span>
                              <div className="flex flex-wrap gap-1">
                                {project.tags.map((tag) => (
                                  <span key={tag} className="px-2.5 py-0.5 border border-[#CCCCCC] rounded-full text-[10px] font-medium text-stone-500 bg-white">
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 hidden lg:block">
            <a
              href="#contact"
              className="inline-flex w-full items-center justify-between bg-[#334FAE] text-white font-semibold px-6 py-4 rounded-xl group hover:bg-[#253b8c] transition-colors duration-300 shadow-sm"
            >
              <span className="text-sm tracking-tight">Let&apos;s collaborate</span>
              <svg className="transform group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="7" y1="7" x2="17" y2="17"></line>
                <polyline points="17 7 17 17 7 17"></polyline>
              </svg>
            </a>
          </div>
        </div>

        {/* ---------------- 🖥️ ฝั่งขวา: คอนเทนต์ขนาดใหญ่ (2/3) ---------------- */}
        <div className="hidden lg:flex lg:col-span-2 flex-col lg:pl-12 w-full min-w-0">
          
          {/* 🎯 เอาคลาสจัดกึ่งกลางออก เพื่อให้ตัว Carousel ยืดขนาดแนบสนิทไปกับกล่องสี่เหลี่ยมรอบนอกสมบูรณ์แบบ */}
          <div className="w-full bg-stone-50 rounded-2xl border border-[#CCCCCC]/40 shadow-sm overflow-hidden relative" style={{ height: '380px' }}>
            <Carousel
              items={carouselItems} 
              baseWidth={700} // ส่งค่าตั้งต้นขนาดใหญ่ขึ้นให้สัมพันธ์กับขนาดจอคอมพิวเตอร์เดสก์ท็อป
              autoplay={false}
              autoplayDelay={3000}
              pauseOnHover={false}
              loop={false}
              round={false}
              activeIndex={activeIndex ?? 0} 
              onChange={(index) => setActiveIndex(index)} 
            />
          </div>

          <div className="mt-6 w-full">
            <AnimatePresence mode="wait">
              {activeProject && (
                <motion.div
                  key={activeProject.slug}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className="flex flex-col w-full gap-4"
                >
                  <div className="flex items-center justify-between gap-4 w-full">
                    <h3 className="text-2xl font-bold tracking-tight text-[#334FAE]">
                      {activeProject.title}
                    </h3>
                    <Link
                      href={`/work/${activeProject.slug}`}
                      className="inline-flex items-center gap-2 bg-[#334FAE] text-white px-5 py-2.5 rounded-xl font-semibold text-sm shadow-2xs hover:bg-[#253b8c] transition-colors duration-200 shrink-0"
                    >
                      View Case Study
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <line x1="7" y1="7" x2="17" y2="17"></line>
                        <polyline points="17 7 17 17 7 17"></polyline>
                      </svg>
                    </Link>
                  </div>

                  <p className="text-[1.02rem] text-stone-600 leading-relaxed font-light max-w-2xl">
                    {activeProject.description}
                  </p>

                  <div className="flex flex-wrap items-center gap-y-3 pt-4 border-t border-stone-100 w-full mt-2">
                    <div className="flex items-center gap-x-6">
                      <div className="flex items-center gap-2 shrink-0">
                        <span className="text-xs font-medium text-stone-400 uppercase tracking-wider">Duration:</span>
                        <span className="text-[#334FAE] font-bold font-mono text-sm">{activeProject.duration}</span>
                      </div>

                      <div className="w-px h-4 bg-[#CCCCCC]" />

                      <div className="flex flex-wrap gap-1.5 items-center">
                        {activeProject.tags.map((tag) => (
                          <span key={tag} className="px-3 py-1 border border-[#CCCCCC] rounded-full text-xs font-medium text-stone-500 bg-white">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}