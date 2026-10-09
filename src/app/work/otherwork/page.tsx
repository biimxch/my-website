"use client";

import React, { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import Lightbox from "@/components/ui/Lightbox";
import { CaseStudyMoreProjects } from "@/components/work/CaseStudy";

const tokens = {
  "--ink": "#111111",
  "--canvas": "#ffffff",
  "--hair": "#dedede",
} as React.CSSProperties;

const ease = [0.22, 1, 0.36, 1] as const;

type Sector = "graphic-design" | "art" | "commission";

interface GalleryItem {
  id: number;
  title: string;
  image: string;
  sector: Sector;
  featured?: boolean; // ติดธงไว้ล่วงหน้าว่าอันไหนโชว์ตอนหน้าแรก (แทนการสุ่มจริง กัน hydration error)
}

const galleryItems: GalleryItem[] = [
  { id: 1, title: "Bangmod Begins", image: "/images/interest/jerseys/VIDVA.png", sector: "graphic-design", featured: true },
  { id: 2, title: "I wonder if you know", image: "/images/interest/jerseys/E-game2025.png", sector: "graphic-design", featured: true },
  { id: 3, title: "Celestial Unity", image: "/images/interest/jerseys/3K.png", sector: "graphic-design" },
  { id: 4, title: "Into the Wild", image: "/images/interest/jerseys/E-game2026.png", sector: "graphic-design", featured: true },
  { id: 5, title: "Apollo's Ascent", image: "/images/interest/jerseys/RC_Egame2025.png", sector: "graphic-design" },
  { id: 6, title: "Dark Eagle", image: "/images/interest/jerseys/RC_Egame2026.png", sector: "graphic-design", featured: true },
  { id: 7, title: "Shadow Crow", image: "/images/interest/jerseys/CPE_Egame.png", sector: "graphic-design", featured: true },
  { id: 8, title: "Stellar Vanguard", image: "/images/interest/jerseys/RC_game.png", sector: "graphic-design" },
  { id: 9, title: "", image: "/images/interest/art/1.jpg", sector: "art", featured: true },
  { id: 10, title: "", image: "/images/interest/art/2.jpg", sector: "art", featured: true },
  { id: 11, title: "", image: "/images/interest/art/3.jpg", sector: "art", featured: true },
  { id: 12, title: "", image: "/images/interest/commission/1.jpg", sector: "commission", featured: true },
  { id: 13, title: "", image: "/images/interest/commission/2.jpg", sector: "commission", featured: true },
];

const filters: { id: Sector | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "graphic-design", label: "Graphic Design" },
  { id: "art", label: "Art" },
  { id: "commission", label: "Commission" },
];

const meta = [
  { label: "Role", value: "Graphic Design, Drawing & Painting" },
  { label: "Timeline", value: "May 2022 – Aug 2026" },
  { label: "Tools", value: "Procreate, Photoshop, Illustrator" },
];

const moreProjects = [
  { name: "Xenior+", image: "/images/xenior+/xenior_thump.png", href: "/work/xenior-plus" },
  { name: "Runverr", image: "/images/runverr/runrun.png", href: "/work/runverr" },
  { name: "Skinmatch", image: "/images/skinmatch/skinm1.png", href: "/work/skinmatch" },
];

function getImageUrl(imgStr: string) {
  return imgStr.startsWith("/") ? imgStr : `/images/${imgStr}`;
}

/* ---------- building blocks ---------- */

// Same container width as the other case studies so left edges align
const wrap = "mx-auto max-w-[1120px] px-5";
const body = "text-base leading-[1.5] tracking-[-0.01em] text-[#414141]";

function FadeIn({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay, ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ---------- page ---------- */

export default function CreativeProject() {
  const [selectedSector, setSelectedSector] = useState<Sector | "all">("all");
  const [lightboxData, setLightboxData] = useState<{ src: string; alt: string } | null>(null);

  const displayedItems =
    selectedSector === "all"
      ? galleryItems.filter((item) => item.featured)
      : galleryItems.filter((item) => item.sector === selectedSector);

  return (
    <main
      style={tokens}
      className="work-case-study min-h-screen bg-white font-['Montserrat'] text-[var(--ink)] antialiased selection:bg-black selection:text-white"
    >
      <Navbar />

      {/* Hero: title → summary → meta → filter */}
      <section className="bg-[var(--canvas)]">
        <div className={`${wrap} pb-10 pt-[clamp(7rem,12vw,10rem)] md:pb-12`}>
          {/* Title: identical style to "Work." and "About." */}
          <FadeIn>
            <h1 className="text-left font-['Montserrat'] text-[clamp(4rem,10vw,8rem)] font-medium leading-[0.8] tracking-[-0.06em] text-black">
              Other Works
            </h1>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className={`mt-10 max-w-3xl ${body}`}>
              A collection of graphic design, digital illustration, and painting projects, including portraits, character art, and poster/merchandise mockups. Created to practice composition, color, and visual storytelling.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <dl className="mt-10 grid grid-cols-1 gap-x-8 gap-y-6 pt-6 sm:grid-cols-2 md:mt-12 lg:grid-cols-3">
              {meta.map((m) => (
                <div key={m.label} className="flex flex-col gap-2">
                  <dt className="text-xs font-semibold leading-[1.4] tracking-[0.1em] text-[var(--ink)]">{m.label}</dt>
                  <dd className="text-sm leading-snug text-[var(--ink)]">{m.value}</dd>
                </div>
              ))}
            </dl>
          </FadeIn>

          <FadeIn delay={0.3} className="mt-12 md:mt-16">
            <div role="group" aria-label="Filter work by category" className="flex flex-wrap gap-3">
              {filters.map((f) => (
                <button
                  key={f.id}
                  type="button"
                  onClick={() => setSelectedSector(f.id)}
                  aria-pressed={selectedSector === f.id}
                  className={`inline-flex min-h-12 items-center rounded-full border-2 border-black px-4 py-3 text-xs font-medium uppercase tracking-[0.1em] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black sm:px-5 ${
                    selectedSector === f.id
                      ? "bg-black text-white"
                      : "bg-white text-black hover:bg-black hover:text-white"
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ================= GALLERY (fade ตอนเปลี่ยน sector) ================= */}
      <div className={`${wrap} pb-16 md:pb-24`}>
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedSector}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="columns-2 gap-3 sm:gap-4 lg:columns-3 lg:gap-6"
          >
            {displayedItems.map((item) => {
              const imgSrc = getImageUrl(item.image);
              // สร้าง delay แบบสุ่มเทียมด้วย modulo (กัน hydration error)
              const randomDelay = (item.id % 6) * 0.1;
              const alt = item.title || "Artwork";

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: randomDelay, ease: "easeOut" }}
                  className="group relative mb-4 cursor-zoom-in break-inside-avoid overflow-hidden rounded-2xl md:mb-6"
                  onClick={() => setLightboxData({ src: imgSrc, alt })}
                >
                  <img src={imgSrc} alt={alt} className="block h-auto w-full object-cover" />
                  <div className="absolute inset-0 flex items-end bg-black/0 p-3 transition-colors duration-300 group-hover:bg-black/10 md:p-4">
                    <p className="text-xs font-normal text-white opacity-0 drop-shadow-[0_1px_3px_rgba(0,0,0,0.6)] transition-opacity duration-300 group-hover:opacity-100 md:text-sm">
                      {item.title}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>

      <CaseStudyMoreProjects projects={moreProjects} />

      <Footer />

      <Lightbox
        src={lightboxData?.src || ""}
        alt={lightboxData?.alt || ""}
        isOpen={!!lightboxData}
        onClose={() => setLightboxData(null)}
      />
    </main>
  );
}