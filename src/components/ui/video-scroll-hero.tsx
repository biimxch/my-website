"use client";

import React, { useRef, useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

interface VideoScrollHeroProps {
  imageSrc?: string;
  label?: string;
  title?: string;
  subtitle?: string;
  enableAnimations?: boolean;
  className?: string;
  startScale?: number;
}

export function VideoScrollHero({
  imageSrc = "/images/profile.jpg",
  label = "",
  title = "",
  subtitle = "",
  enableAnimations = true,
  className = "",
  startScale = 0.25,
}: VideoScrollHeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const [scrollScale, setScrollScale] = useState(startScale);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    if (!enableAnimations || shouldReduceMotion) return;

    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const containerHeight = containerRef.current.offsetHeight;
      const windowHeight = window.innerHeight;
      const scrolled = Math.max(0, -rect.top);
      const maxScroll = containerHeight - windowHeight;
      const progress = Math.min(scrolled / maxScroll, 1);
      setScrollProgress(progress);
      setScrollScale(startScale + progress * (1 - startScale));
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [enableAnimations, shouldReduceMotion, startScale]);

  const shouldAnimate = enableAnimations && !shouldReduceMotion;

  const firstWord = title.split(" ")[0];
  const restOfTitle = title.split(" ").slice(1).join(" ");

  // Text slides out fully, then fades only in the last 25% of scroll
  const textTranslateX = scrollProgress * (isMobile ? 18 : 13);
  const textOpacity = Math.max(0, 1 - Math.max(0, (scrollProgress - 0.75) / 0.25));

  return (
    <div className={`relative ${className}`}>
      <div ref={containerRef} className="relative h-[200vh]">
        {/*
          Sticky viewport — bg-white for mix-blend-difference to work correctly.
          Image is w-screen h-screen: at scale(startScale) it appears small,
          at scale(1) it fills the entire viewport seamlessly.
        */}
        <div className="sticky top-0 w-full h-screen bg-white flex items-center justify-center z-10 overflow-hidden">

          {/* ── Image layer (z-10) — portrait rectangle, scales from center ── */}
          <div
            className="absolute z-10 will-change-transform"
            style={{
              transform: shouldAnimate ? `scale(${scrollScale})` : "scale(1)",
              transformOrigin: "center center",
            }}
          >
            <img
              src={imageSrc}
              alt={title || "Profile"}
              className="h-[70vh] w-auto max-w-[28rem] object-cover shadow-2xl"
            />
          </div>

          {/*
            ── Text layer (z-20, mix-blend-difference) ──
            White text + mix-blend-difference:
              • Over white bg  → black (readable)
              • Over photo     → inverted (face still visible)
            All text fades out as image expands to full screen.
          */}
          {title && (
            <div
              className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-0 pointer-events-none select-none mix-blend-difference"
              style={{ opacity: shouldAnimate ? textOpacity : 1 }}
            >
              {/* Label — above first word */}
              {label && (
                <span className="block w-full text-center text-xs md:text-sm tracking-[0.35em] uppercase text-white font-['Montserrat'] mb-2">
                  {label}
                </span>
              )}

              {/* First word — slides LEFT */}
              <span
                className="block w-full text-center font-['Montserrat'] font-medium leading-none text-white"
                style={{
                  fontSize: "clamp(2.5rem, 11vw, 9rem)",
                  transform: shouldAnimate
                    ? `translateX(-${textTranslateX}vw)`
                    : "none",
                }}
              >
                {firstWord}
              </span>

              {/* Rest of title — slides RIGHT */}
              {restOfTitle && (
                <span
                  className="block w-full text-center font-['Montserrat'] font-medium leading-none text-white"
                  style={{
                    fontSize: "clamp(2.5rem, 11vw, 9rem)",
                    transform: shouldAnimate
                      ? `translateX(${textTranslateX}vw)`
                      : "none",
                  }}
                >
                  {restOfTitle}
                </span>
              )}

              {/* Subtitle */}
              {subtitle && (
                <span className="mt-4 text-xs md:text-sm tracking-[0.35em] uppercase text-white font-['Montserrat']">
                  {subtitle}
                </span>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
