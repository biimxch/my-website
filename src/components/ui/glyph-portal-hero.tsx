"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

export function GlyphPortalHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 1, 0]);
  const titleScale = useTransform(scrollYProgress, [0, 0.66, 0.9, 1], [1, 1.05, 4, 5.5]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.68, 0.9, 1], [1, 1, 0, 0]);
  const detailOpacity = useTransform(scrollYProgress, [0, 0.35, 0.58], [1, 1, 0]);
  const detailY = useTransform(scrollYProgress, [0, 0.58], [0, -20]);

  return (
    <section
      ref={sectionRef}
      aria-label="Portfolio introduction"
      className={reducedMotion ? "relative h-svh" : "relative h-[200svh]"}
    >
      <div className="sticky top-0 isolate h-svh overflow-hidden bg-white">
        <motion.div
          aria-hidden="true"
          className="absolute inset-0 bg-black"
          style={{ opacity: reducedMotion ? 1 : backgroundOpacity }}
        />

        <motion.div
          className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center overflow-hidden"
          style={{
            opacity: reducedMotion ? 1 : titleOpacity,
            scale: reducedMotion ? 1 : titleScale,
            transformOrigin: "center 44%",
          }}
        >
          <h1 className="select-none text-center font-['Montserrat'] text-[clamp(2.5rem,11vw,10rem)] font-semibold leading-[0.88] tracking-[-0.075em] text-white">
            <span className="block whitespace-nowrap">Chompunuch</span>
            <span className="block">Auttnam</span>
          </h1>
        </motion.div>

        <motion.div
          className="pointer-events-none absolute inset-x-6 top-[12%] z-20 mx-auto max-w-6xl text-center text-white md:inset-x-12"
          style={{
            opacity: reducedMotion ? 1 : detailOpacity,
            y: reducedMotion ? 0 : detailY,
          }}
        >
          <p className="font-['Montserrat'] text-xs font-medium uppercase tracking-[0.35em] md:text-sm">
            Portfolio · 2026
          </p>
        </motion.div>

        <motion.p
          className="pointer-events-none absolute inset-x-6 bottom-[13%] z-20 text-center font-['Montserrat'] text-xs uppercase tracking-[0.3em] text-white md:text-sm"
          style={{
            opacity: reducedMotion ? 1 : detailOpacity,
            y: reducedMotion ? 0 : detailY,
          }}
        >
          UX/UI Designer
        </motion.p>

        {!reducedMotion && (
          <motion.p
            aria-hidden="true"
            className="absolute bottom-7 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap font-['Montserrat'] text-[10px] font-medium uppercase tracking-[0.28em] text-white"
            style={{ opacity: detailOpacity }}
          >
            Scroll to explore <span className="ml-2" aria-hidden="true">↓</span>
          </motion.p>
        )}
      </div>
    </section>
  );
}