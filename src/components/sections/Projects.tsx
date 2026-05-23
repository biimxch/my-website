"use client";

import Link from "next/link";
import { useState } from "react";
import { projects } from "@/lib/data";
import { motion, AnimatePresence } from "framer-motion";

export default function Projects() {
  const [view, setView] = useState<"list" | "grid">("list");

  return (
    <section id="work" className=" pt-20 max-w-5xl mx-auto px-6 py-24 border-t border-[#e2e0da]">

      {/* Section Header */}
      <div className="flex items-start justify-between mb-12">
        <h2 className="flex items-start text-6xl font-medium tracking-tight text-gray-900 leading-none">
          PROJECTS
          {/* เปลี่ยนจาก sup เป็น span และใช้ mt-1 หรือ mt-2 ดันลงมานิดนึงให้พอดีกับหัวตัว P */}
          <span className="text-xl text-gray-400 ml-4 font-light mt-6.5">
            ({projects.length})
          </span>
        </h2>

        {/* Toggle buttons แบบ Sliding Pill */}
        <div className="flex items-center gap-1 mt-2 p-1 bg-white rounded-xl">
          <button
            onClick={() => setView("list")}
            className={`relative p-2 rounded-lg transition-colors duration-300 z-10 ${
              view === "list" ? "text-white" : "text-gray-400 hover:text-gray-900"
            }`}
            aria-label="List view"
          >
            {view === "list" && (
              <motion.div
                layoutId="active-toggle"
                className="absolute inset-0 bg-gray-900 rounded-lg"
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                style={{ zIndex: -1 }}
              />
            )}
            <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
              <rect x="1" y="2" width="14" height="2.5" rx="1" fill="currentColor"/>
              <rect x="1" y="7" width="14" height="2.5" rx="1" fill="currentColor"/>
              <rect x="1" y="12" width="14" height="2.5" rx="1" fill="currentColor"/>
            </svg>
          </button>

          <button
            onClick={() => setView("grid")}
            className={`relative p-2 rounded-lg transition-colors duration-300 z-10 ${
              view === "grid" ? "text-white" : "text-gray-400 hover:text-gray-900"
            }`}
            aria-label="Grid view"
          >
            {view === "grid" && (
              <motion.div
                layoutId="active-toggle"
                className="absolute inset-0 bg-gray-900 rounded-lg"
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                style={{ zIndex: -1 }}
              />
            )}
            <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
              <rect x="1" y="1" width="6" height="6" rx="1.5" fill="currentColor"/>
              <rect x="9" y="1" width="6" height="6" rx="1.5" fill="currentColor"/>
              <rect x="1" y="9" width="6" height="6" rx="1.5" fill="currentColor"/>
              <rect x="9" y="9" width="6" height="6" rx="1.5" fill="currentColor"/>
            </svg>
          </button>
        </div>
      </div>

      {/* List/Grid Content (AnimatePresence) */}
      <AnimatePresence mode="wait">
        {view === "list" ? (
          <motion.div
            key="list"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="flex flex-col gap-6"
          >
            {projects.map((project) => (
              <Link
                key={project.slug}
                href={`/work/${project.slug}`}
                className="group bg-white border border-[#e2e0da] rounded-2xl overflow-hidden flex flex-row transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
              >
                {/* Left: Text */}
                <div className="flex flex-col flex-1 px-8 py-8">
                  <p className="text-xs text-gray-400 mb-2">{project.year}</p>
                  <h3 className="text-2xl font-medium tracking-tight text-gray-900 mb-3 group-hover:text-gray-500 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-6 max-w-sm">
                    {project.description}
                  </p>
                  {/* Tags สำหรับโหมด List (ใหญ่กว่าปกติ) */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags?.map((tag) => (
                      <span 
                        key={tag} 
                        className="px-3.5 py-1.5 border border-[#e2e0da] rounded-full text-[13px] font-medium text-gray-600 bg-white"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  {/* CTA */}
                  <div className="mt-auto">
                    <div className="inline-flex items-center gap-2 text-sm text-gray-900 bg-white rounded-full px-5 py-2.5 border border-[#e2e0da] group-hover:bg-[#f3f2ee] transition-colors duration-300">
                      View Case Study ↗
                    </div>
                  </div>
                </div>

                {/* Right: Image */}
                <div className="w-[45%] shrink-0 relative m-3 rounded-xl overflow-hidden bg-[#e8e7e3]">
                  <div className="w-full h-full min-h-[280px] bg-gradient-to-br from-gray-200 to-gray-300" />
                </div>
              </Link>
            ))}
          </motion.div>
        ) : (
          <motion.div
            key="grid"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {projects.map((project) => (
              <Link
                key={project.slug}
                href={`/work/${project.slug}`}
                className="group bg-white border border-[#e2e0da] rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden bg-[#e8e7e3] rounded-xl m-2 mb-0 border border-[#e2e0da]/50">
                  <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300" />
                </div>

                {/* Info */}
                <div className="p-4 flex flex-col flex-1">
                  <h3 className="text-lg font-medium tracking-tight text-gray-900 mb-3 group-hover:text-gray-500 transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  {/* ส่วนล่างของการ์ด Grid (Tags + วงกลมลูกศร) */}
                  <div className="mt-auto flex items-end justify-between pt-2">
                    {/* Tags สำหรับโหมด Grid (ย่อให้เล็กลง) */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags?.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 border border-[#e2e0da] rounded-full text-[10px] font-medium text-gray-500 bg-white"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    {/* ไอคอน ↗ ในวงกลม */}
                    <div className="w-8 h-8 rounded-full border border-[#e2e0da] bg-gray-50 group-hover:bg-gray-900 group-hover:text-white group-hover:border-gray-900 transition-colors duration-300 flex items-center justify-center shrink-0 ml-2">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M7 17L17 7" />
                        <path d="M7 7h10v10" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer row */}
      <div className="flex items-center justify-between mt-10">
        <p className="text-xs text-gray-400 max-w-[220px] leading-relaxed">
          These are just a few highlights. More work available on request.
        </p>
        <a
          href="mailto:chompunuch.autt@gmail.com"
          className="flex items-center gap-2 text-xs uppercase tracking-widest bg-gray-900 text-white px-5 py-3 hover:bg-gray-700 transition-colors duration-300"
        >
          Get in touch ↗
        </a>
      </div>

    </section>
  );
}