"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SubProject } from "@/types/portfolio";
import Lightbox from "@/components/ui/Lightbox";

interface ProjectSliderProps {
  items: SubProject[];
}

export default function ProjectSlider({ items }: ProjectSliderProps) {
  const [activeSection, setActiveSection] = useState<number>(0);
  const [lightboxData, setLightboxData] = useState<{ src: string; alt: string } | null>(null);

  const getImageUrl = (imgStr: string) => {
    return imgStr.startsWith("/") ? imgStr : `/images/${imgStr}`;
  };

  return (
    <div className="relative flex flex-col lg:flex-row items-start w-full">
      
      {/* 🟢 LEFT SIDE: Sticky Sidebar (Desktop Only) - เท่ากันกับหน้าอื่น 100% */}
      <div className="hidden lg:flex lg:w-5/12 sticky top-0 h-screen flex-col justify-start pt-20 pr-12 border-r border-[#e2e0da]/60">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="flex flex-col gap-4"
          >
            <div className="text-[10px] font-bold tracking-[0.3em] uppercase text-gray-400">
              COLLECTION /{" "}
              <span className="text-[#2b5a9e]">
                {String(activeSection + 1).padStart(2, "0")}
              </span>{" "}
              – {String(items.length).padStart(2, "0")}
            </div>

            <h2 className="text-5xl lg:text-6xl font-light tracking-tight text-[#2b5a9e] leading-none">
              {items[activeSection]?.title}
            </h2>

            <div className="space-y-4 text-sm xl:text-base font-light leading-relaxed text-gray-700 mt-2">
              {items[activeSection]?.concept && (
                <p>
                  <strong className="block font-medium text-black mb-1">Concept:</strong>{" "}
                  {items[activeSection].concept}
                </p>
              )}
              {items[activeSection]?.front && (
                <p>
                  <strong className="block font-medium text-black mb-1">Front:</strong>{" "}
                  {items[activeSection].front}
                </p>
              )}
              {items[activeSection]?.back && (
                <p>
                  <strong className="block font-medium text-black mb-1">Back:</strong>{" "}
                  {items[activeSection].back}
                </p>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* 🔵 RIGHT SIDE: Scrollable Content - ขยับเป็น 8/12 พร้อม pl-16 เท่าหน้าอื่น */}
      <div className="w-full lg:w-7/12 flex flex-col lg:pl-16 pb-16 gap-16 lg:gap-28">
        {items.map((item, idx) => {
          const imgSrc = getImageUrl(item.image);

          return (
            <motion.section
              key={idx}
              onViewportEnter={() => setActiveSection(idx)}
              viewport={{ margin: "-50% 0px -50% 0px" }}
              className="flex flex-col gap-6 min-h-[50vh] lg:min-h-[80vh] justify-center py-10 border-b border-[#e2e0da]/40 lg:border-none last:border-none"
            >
              {/* Mobile Header */}
              <div className="lg:hidden flex flex-col gap-4 border-b border-[#e2e0da]/40 pb-6">
                <div className="text-[10px] font-bold tracking-[0.3em] uppercase text-gray-400">
                  COLLECTION /{" "}
                  <span className="text-[#2b5a9e]">
                    {String(idx + 1).padStart(2, "0")}
                  </span>{" "}
                  – {String(items.length).padStart(2, "0")}
                </div>
                <h2 className="text-4xl font-light tracking-tight text-[#2b5a9e]">
                  {item.title}
                </h2>
                <div className="space-y-3 text-sm font-light leading-relaxed text-gray-700 mt-2">
                  {item.concept && (
                    <p><strong className="font-medium text-black">Concept:</strong> {item.concept}</p>
                  )}
                  {item.front && (
                    <p><strong className="font-medium text-black">Front:</strong> {item.front}</p>
                  )}
                  {item.back && (
                    <p><strong className="font-medium text-black">Back:</strong> {item.back}</p>
                  )}
                </div>
              </div>

              {/* Showcase Image Container */}
              <div className="ww-full max-w-[600px] mx-auto aspect-square bg-[#f4f3ef] relative shadow-sm border border-black/5 rounded-none overflow-hidden group">
                <img
                  src={imgSrc}
                  alt={item.title}
                  className="w-full h-full object-cover object-center cursor-zoom-in transition-transform duration-500 group-hover:scale-[1.015]"
                  onClick={() => setLightboxData({ src: imgSrc, alt: item.title })}
                />
              </div>
            </motion.section>
          );
        })}
      </div>

      {/* Lightbox Module */}
      <Lightbox
        src={lightboxData?.src || ""}
        alt={lightboxData?.alt || ""}
        isOpen={!!lightboxData}
        onClose={() => setLightboxData(null)}
      />
    </div>
  );
}