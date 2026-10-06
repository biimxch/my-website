"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import Lightbox from "@/components/ui/Lightbox";
import { CaseStudyMoreProjects } from "@/components/work/CaseStudy";


type Sector = "graphic-design" | "art" | "commission";

interface GalleryItem {
  id: number;
  title: string;
  image: string;
  sector: Sector;
  featured?: boolean; // 🎯 ติดธงไว้ล่วงหน้าว่าอันไหนโชว์ตอนหน้าแรก (แทนการสุ่มจริง กัน hydration error)
}

const galleryItems: GalleryItem[] = [
  { id: 1, title: "Bangmod Begins", image: "/images/interest/jerseys/VIDVA.png", sector: "graphic-design", featured: true },
  { id: 2, title: "I wonder if you know", image: "/images/interest/jerseys/E-game2025.png", sector: "graphic-design", featured: true },
  { id: 3, title: "Celestial Unity", image: "/images/interest/jerseys/3K.png", sector: "graphic-design"},
  { id: 4, title: "Into the Wild", image: "/images/interest/jerseys/E-game2026.png", sector: "graphic-design", featured: true },
  { id: 5, title: "Apollo's Ascent", image: "/images/interest/jerseys/RC_Egame2025.png", sector: "graphic-design" },
  { id: 6, title: "Dark Eagle", image: "/images/interest/jerseys/RC_Egame2026.png", sector: "graphic-design", featured: true },
  { id: 7, title: "Shadow Crow", image: "/images/interest/jerseys/CPE_Egame.png", sector: "graphic-design", featured: true },
  { id: 8, title: "Stellar Vanguard", image: "/images/interest/jerseys/RC_game.png", sector: "graphic-design" },
  // ตัวอย่างงานวาด — เพิ่มจริงแล้วติด featured: true ให้ 2 อันโชว์หน้าแรก
  { id: 9, title: "", image: "/images/interest/art/1.jpg", sector: "art", featured: true },
  { id: 10, title: "", image: "/images/interest/art/2.jpg", sector: "art", featured: true },
  { id: 11, title: "", image: "/images/interest/art/3.jpg", sector: "art",featured: true  },

  { id: 12, title: "", image: "/images/interest/commission/1.jpg", sector: "commission", featured: true },
  { id: 13, title: "", image: "/images/interest/commission/2.jpg", sector: "commission", featured: true },
];

const sectors: { id: Sector; number: string; label: string }[] = [
  { id: "graphic-design", number: "01", label: "Graphic Design" },
  { id: "art", number: "02", label: "Art" },
  { id: "commission", number: "03", label: "Commission" },
];

const moreProjects = [
  { name: "Xenior+", image: "/images/xenior+/xenior_thump.png", href: "/work/xenior-plus" },
  { name: "Runverr", image: "/images/runverr/runrun.png", href: "/work/runverr" },
  { name: "Skinmatch", image: "/images/skinmatch/skinm1.png", href: "/work/skinmatch" },
];

function getImageUrl(imgStr: string) {
  return imgStr.startsWith("/") ? imgStr : `/images/${imgStr}`;
}

export default function CreativeProject() {
  const [selectedSector, setSelectedSector] = useState<Sector | "all">("all");
  const [lightboxData, setLightboxData] = useState<{ src: string; alt: string } | null>(null);

  const displayedItems =
    selectedSector === "all"
      ? galleryItems.filter((item) => item.featured)
      : galleryItems.filter((item) => item.sector === selectedSector);

  return (
    <main className="work-case-study min-h-screen bg-white text-[#111111] antialiased selection:bg-[#e5e5e5] selection:text-[#111111]">
      <Navbar />

      <div className="section-container pt-[clamp(6rem,10vw,9rem)] pb-8">
        {/* ================= TITLE + MENU BAR ================= */}
        <div className="grid grid-cols-1 items-end gap-8 md:grid-cols-[1fr_2fr] md:gap-16">
          <div>
            <p className="font-['Montserrat'] text-xs tracking-[0.1em] text-[#585858]">Gallery</p>
            <h1 className="mt-3 font-['Montserrat'] text-[clamp(2.25rem,5vw,3.25rem)] font-semibold leading-[1.15] tracking-[-0.035em] text-[#111111]">
              Other Works
            </h1>
          </div>

          <nav aria-label="Filter work by category" className="border-t border-[#dedede]">
            <button
              onClick={() => setSelectedSector("all")}
              aria-pressed={selectedSector === "all"}
              className={`w-full flex items-center gap-8 px-2 py-4 md:py-5 border-b border-black/10 transition-colors duration-200 text-left ${
                selectedSector === "all" ? "border-b-2 border-black" : "hover:border-black/40"
              }`}
            >
              <span className="text-sm font-normal font-['Montserrat'] text-[#666666] w-6 shrink-0">
                00
              </span>
              <span className="text-base md:text-lg font-normal font-['Montserrat'] text-[#111111]">
                All
              </span>
            </button>
            {sectors.map((s) => (
              <button
                key={s.id}
                onClick={() => setSelectedSector(s.id)}
                aria-pressed={selectedSector === s.id}
                className={`w-full flex items-center gap-8 px-2 py-4 md:py-5 border-b border-black/10 transition-colors duration-200 text-left ${
                  selectedSector === s.id ? "border-b-2 border-black" : "hover:border-black/40"
                }`}
              >
                <span className="text-sm font-normal font-['Montserrat'] text-[#666666] w-6 shrink-0">
                  {s.number}
                </span>
                <span className="text-base md:text-lg font-normal font-['Montserrat'] text-[#111111]">
                  {s.label}
                </span>
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* ================= GALLERY (fade ตอนเปลี่ยน sector) ================= */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedSector}
          // ถอด initial/animate ของ parent ออก ให้มันจัดการแค่จังหวะ exit พอ
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="columns-2 md:columns-3 gap-4 md:gap-6 pt-4 pb-16 md:pb-24 px-4 md:px-8"
        >
          {displayedItems.map((item) => {
            const imgSrc = getImageUrl(item.image);
            
            // 🎲 สร้าง Delay แบบสุ่มเทียมด้วยสมการ Modulo
            // (เลข 6 คือค่าช่วง delay สูงสุด ยิ่งเยอะ ยิ่งมีความห่างเวลาสุ่ม)
            const randomDelay = (item.id % 6) * 0.1;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: randomDelay, // ใส่ค่า delay ที่สุ่มได้
                  ease: "easeOut" 
                }}
                className="break-inside-avoid relative group cursor-zoom-in mb-4 overflow-hidden rounded-2xl md:mb-6"
                onClick={() => setLightboxData({ src: imgSrc, alt: item.title })}
              >
                <img
                  src={imgSrc}
                  alt={item.title}
                  className="w-full h-auto object-cover block"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-end p-3 md:p-4">
                  <p className="text-xs md:text-sm font-normal font-['Montserrat'] text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-[0_1px_3px_rgba(0,0,0,0.6)]">
                    {item.title}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </AnimatePresence>

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