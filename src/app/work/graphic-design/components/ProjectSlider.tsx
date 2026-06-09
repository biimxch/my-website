"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SubProject } from "@/types/portfolio";

interface ProjectSliderProps {
  items: SubProject[];
}

export default function ProjectSlider({ items }: ProjectSliderProps) {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [direction, setDirection] = useState<number>(1); // 1 = Next, -1 = Prev

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  // แอนิเมชันตอนเปลี่ยนรูปและข้อความแบบคลีน ๆ
  const cubicEase = [0.25, 1, 0.5, 1] as const;
  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 30 : -30,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: cubicEase },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -30 : 30,
      opacity: 0,
      transition: { duration: 0.3, ease: cubicEase },
    }),
  };

  return (
    <div className="relative">
      {/* Slider Controls */}
      <div className="flex justify-between items-center mb-8">
        <div className="text-xs font-mono tracking-widest text-gray-400">
          COLLECTION /{" "}
          <span className="text-[#2b5a9e] font-bold">
            {String(currentIndex + 1).padStart(2, "0")}
          </span>{" "}
          – {String(items.length).padStart(2, "0")}
        </div>
        <div className="flex gap-4">
          <button
            onClick={prevSlide}
            className="w-10 h-10 border border-[#e2e0da] rounded-full flex items-center justify-center text-gray-400 hover:text-black hover:border-black transition-all duration-300 active:scale-95"
            aria-label="Previous project"
          >
            ←
          </button>
          <button
            onClick={nextSlide}
            className="w-10 h-10 border border-[#e2e0da] rounded-full flex items-center justify-center text-gray-400 hover:text-black hover:border-black transition-all duration-300 active:scale-95"
            aria-label="Next project"
          >
            →
          </button>
        </div>
      </div>

      {/* Active Project Card Layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start min-h-[480px]">
        
        {/* Left Column: Dynamic Text Details */}
        <div className="md:col-span-6 overflow-hidden">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="space-y-6"
            >
              <h3 className="text-4xl md:text-5xl font-medium tracking-tight text-[#2b5a9e] leading-none">
                {items[currentIndex].title}
              </h3>
              <div className="space-y-4 text-sm md:text-base font-light leading-relaxed text-gray-700">
                <p>
                  <strong className="block font-medium text-black mb-1">Concept:</strong>{" "}
                  {items[currentIndex].concept}
                </p>
                <p>
                  <strong className="block font-medium text-black mb-1">Front:</strong>{" "}
                  {items[currentIndex].front}
                </p>
                <p>
                  <strong className="block font-medium text-black mb-1">Back:</strong>{" "}
                  {items[currentIndex].back}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Column: Image Container */}
        <div className="md:col-span-6 w-full aspect-square bg-[#f4f3ef]  relative shadow-sm border border-black/5">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.img
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              src={
                items[currentIndex].image.startsWith("/")
                  ? items[currentIndex].image
                  : `/images/${items[currentIndex].image}`
              }
              alt={items[currentIndex].title}
              className="w-full h-full object-cover object-center"
            />
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}