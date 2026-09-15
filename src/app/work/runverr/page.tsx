"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion"; // เพิ่มการ import framer-motion
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";


const gallery = {
  hero: "/images/runverr/hero.jpg",
  full: "/images/runverr/runrun.png",
  half1: "/images/runverr/runver_ipad.png",
  half2: "/images/runverr/run_night.png",
  workflow: "/images/runverr/runverr_flow.jpg",
  fivecore: "/images/runverr/fivecore.png",
  UE5: "/images/runverr/UE5.jpg",
};

const moreProjects = [
  { name: "Xenior+", image: "/images/xenior+/xenior_thump.png", href: "/work/xenior-plus" },
  { name: "Skinmatch", image: "/images/skinmatch/skinm1.png", href: "/work/skinmatch" },
  { name: "Graphic Design", image: "/images/interest/thumbnail.jpg", href: "/work/otherwork" },
];

const meta = [
  { label: "My Role", value: "Game Dev Intern" },
  { label: "Engine", value: "Unreal Engine 5" },
  { label: "Timeline", value: "Jun – Aug 2025" },
  { label: "Platform", value: "PC Build" },
];

const storyPoints = [
  {
    title: "Goal",
    detail:
      "Gradually overcome obstacles (collecting Score) to grow and achieve ultimate success (High Score).",
  },
  {
    title: "Conflict",
    detail:
      "Buildings and obstacles represent the challenges and hurdles in a student's life.",
  },
  {
    title: "Drive",
    detail:
      "The character runs to continuously gather knowledge and experience, growing into a better version of themselves.",
  },
];

const features = [
  "Score System — Collect scores based on running distance; exceeding the High Score immediately registers as the New High Score.",
  "Energy System — Energy decreases continuously while running; players must collect Heart Items to restore it, or the game ends.",
  "Item System — 4 Items: Heart (restores energy), Piggy Bank (Coin x2), Robot Magnet (attracts coins), and Jump Boots (jump higher).",
  "Day/Night Cycle — Environment shifts from day to night; visibility decreases at night, requiring players to use the light from coins to navigate.",
  "Coin Collection — Collect and accumulate coins to purchase new characters in the Select Character screen.",
  "PC Packaging — Build and package the game as a fully playable PC Build for Windows installations.",
];

const metrics = [
  { keyword: "Development Duration", before: "0", value: "10w" },
  { keyword: "Game Systems Built", before: "—", value: "8+" },
  { keyword: "Demo Day", before: "Prototype", value: "Done" },
];

const demoChecklist = [
  "High Score system accurately records and displays results.",
  "All 4 items function completely as designed.",
  "Day/Night cycle shifts the game's atmosphere realistically.",
  "Packaged as a functional PC Build that can be installed and played on Windows.",
];

const challenges = [
  {
    title: "Blueprint Complexity",
    detail:
      "The High Score and Coin Collection systems possessed high complexity, leading to frequent errors. These issues were resolved by systematically referencing online documentation, tutorial clips, and consulting with experienced advisors.",
  },
  {
    title: "UE5 Performance Issues",
    detail:
      "The Unreal Engine 5 program frequently became unresponsive or froze due to heavy processing loads. This required occasional system restarts, which disrupted the overall continuity of the workflow.",
  },
  {
    title: "Knowledge & Experience Gap",
    detail:
      "An initial lack of experience required continuous learning to bridge the gap between concept and implementation. This involved persistent self-study through online resources to maintain project momentum.",
  },
];

const skillsGained = [
  "Gained direct experience in full-cycle game development using Unreal Engine 5.",
  "Understood systematic workflows spanning from concept design to gameplay mechanics and UI creation.",
  "Developed technical problem-solving skills to address issues that emerged during development.",
  "Recognized the critical importance of teamwork and communication through regular consultations with advisors.",
];

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-3xl md:text-4xl font-semibold font-['Montserrat'] text-[#111111] mb-10">
      {children}
    </h2>
  );
}

// ---------------------------------------------------------
// Component สำหรับทำ Fade-in ตอน Scroll (เหมือนหน้าก่อนๆ)
// ---------------------------------------------------------
function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.7, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
// ---------------------------------------------------------

export default function RunverrProject() {
  return (
    <main className="bg-white min-h-screen text-[#111111] antialiased selection:bg-[#e5e5e5]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Pinyon+Script&display=swap');
        .font-pinyon { font-family: 'Pinyon Script', cursive; }
      `}</style>

      <Navbar />

      <div className="section-container pt-[clamp(6rem,10vw,9rem)] pb-24">
        
        {/* ================= TITLE + DESCRIPTION ================= */}
        <FadeIn className="grid grid-cols-1 md:grid-cols-[2fr_4fr] gap-10 md:gap-24 mb-12">
          <h1 className="font-['Montserrat'] text-[clamp(4rem,10vw,8rem)] font-medium leading-[0.8] tracking-[-0.06em] text-black">
            Runverr
          </h1>
          <p className="text-lg md:text-base font-normal font-['Montserrat'] text-[#111111] leading-relaxed">
            An Unreal Engine 5 Endless Runner developed for KMUTT’s Mediatier Project, featuring scoring, energy, items, a day/night cycle, and high score system.
          </p>
        </FadeIn>

        {/* ================= META INFO ================= */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-32 pb-12 border-b border-[#bdbdbd]/40">
          {meta.map((m, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <p className="text-xs uppercase tracking-widest text-[#666666] font-['Montserrat'] mb-2">
                {m.label}
              </p>
              <p className="text-sm text-[#111111] font-['Montserrat'] leading-relaxed">
                {m.value}
              </p>
            </FadeIn>
          ))}
        </div>

        {/* ================= MEDIA GALLERY ================= */}
        <FadeIn className="flex flex-col gap-16 md:gap-20 mb-32">
          <div className="w-full aspect-[1124/629] bg-[#F7F2EB] overflow-hidden">
            <img src={gallery.full} alt="Runverr gameplay" className="w-full h-full object-cover" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-[603fr_438fr] gap-8 md:gap-20">
            <div className="w-full aspect-[603/571] bg-[#F7F2EB] overflow-hidden">
              <img src={gallery.half1} alt="Runverr demo day" className="w-full h-full object-cover" />
            </div>
            <div className="w-full aspect-[438/571] bg-[#F7F2EB] overflow-hidden">
              <img src={gallery.half2} alt="Runverr UI detail" className="w-full h-full object-cover" />
            </div>
          </div>
        </FadeIn>

        {/* ================= THE STORY BEHIND THE RUN ================= */}
        <div className="mb-32">
          <FadeIn>
            <SectionHeading>The Story Behind the Run</SectionHeading>
          </FadeIn>
          <div className="pl-8 md:pl-24">
            <FadeIn>
              <p className="text-base font-normal font-['Montserrat'] text-[#111111]/70 leading-relaxed mb-10">
                The character is a university freshman — experiencing growth
                while facing obstacles like difficult lessons and life
                challenges, which can be overcome with perseverance.
              </p>
            </FadeIn>
            <div className="space-y-8">
              {storyPoints.map((p, i) => (
                <FadeIn key={i} delay={0.1}>
                  <div className="flex gap-4">
                    <span className="text-xl font-semibold font-['Montserrat'] text-[#333333] shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <p className="text-lg font-semibold font-['Montserrat'] text-[#111111] mb-1">
                        {p.title}
                      </p>
                      <p className="text-base font-normal font-['Montserrat'] text-[#111111]/70 leading-relaxed">
                        {p.detail}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>

        {/* ================= UE5 ================= */}
        <FadeIn className="flex flex-col gap-16 md:gap-20 mb-32">
          <div className="w-full aspect-[1124/629] bg-[#F7F2EB] overflow-hidden">
            <img src={gallery.UE5} alt="RunverrUE5" className="w-full h-full object-cover" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-[0.9fr_1.1fr] items-stretch gap-8 md:gap-10">
            <div className="w-full aspect-[3/2] bg-[#f2f2f2] overflow-hidden ">
              <img src={gallery.workflow} alt="Runverr workflow" className="w-full h-full object-contain" />
            </div>
            <div className="flex w-full aspect-[3/2] md:aspect-auto items-center justify-center bg-[#ff4f10] overflow-hidden">
              <img src={gallery.fivecore} alt="Runverr FiveCore" className="w-full h-full object-contain" />
            </div>
          </div>
        </FadeIn>

        {/* ================= WHAT I BUILT ================= */}
        <div className="mb-32">
          <FadeIn>
            <SectionHeading>What I Built</SectionHeading>
          </FadeIn>
          <ul className="pl-8 md:pl-24 space-y-3">
            {features.map((f, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <li className="flex items-start gap-3 text-base font-normal font-['Montserrat'] text-[#111111] leading-relaxed">
                  <span className="mt-2.5 w-1 h-1 rounded-full bg-[#111111] shrink-0" />
                  {f}
                </li>
              </FadeIn>
            ))}
          </ul>
        </div>
        
        
        


        {/* ================= DEMO DAY & DELIVERY ================= */}
        <div className="mb-32">
          <FadeIn>
            <SectionHeading>Demo Day &amp; Delivery</SectionHeading>
          </FadeIn>
          <div className="pl-8 md:pl-24">
            <FadeIn>
              <p className="text-base font-normal font-['Montserrat'] text-[#111111]/90 leading-relaxed mb-6">
                On July 25, 2025, the completed Runverr mini-game was presented
                to professors from both the Media Arts and Computer Engineering
                faculties — the game was successfully built and playable as a
                PC Package.
              </p>
            </FadeIn>
            <div className="space-y-3">
              {demoChecklist.map((item, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <div className="flex items-start gap-3">
                    <span className="font-serif italic text-[#666666] text-lg leading-none shrink-0">✓</span>
                    <p className="text-base font-normal font-['Montserrat'] text-[#111111]/80 leading-relaxed">
                      {item}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>

        {/* ================= WORK VIDEO ================= */}
        <div className="mb-32">
          <FadeIn>
            <video
              src="/images/runverr/runverr-demo.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full aspect-video object-cover rounded-lg shadow-md"
            />
          </FadeIn>
        </div>
        
        {/* ================= WHAT WAS HARD ================= */}
        <div className="mb-32">
          <FadeIn>
            <SectionHeading>What Was Hard</SectionHeading>
          </FadeIn>
          <div className="pl-8 md:pl-24 space-y-8">
            {challenges.map((c, i) => (
              <FadeIn key={i} delay={0.1}>
                <div className="flex gap-4">
                  <span className="text-xl font-semibold font-['Montserrat'] text-[#333333] shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="text-lg font-semibold font-['Montserrat'] text-[#111111] mb-1">
                      {c.title}
                    </p>
                    <p className="text-base font-normal font-['Montserrat'] text-[#111111]/70 leading-relaxed">
                      {c.detail}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
        

        {/* ================= WHAT I LEARNED ================= */}
        <div className="mb-32">
          <FadeIn>
            <SectionHeading>What I Learned</SectionHeading>
          </FadeIn>
          <div className="pl-8 md:pl-24">
            <FadeIn>
              <p className="text-lg font-semibold font-['Montserrat'] text-[#111111] mb-4">
                Skills Gained
              </p>
            </FadeIn>
            <div className="space-y-3 mb-10">
              {skillsGained.map((s, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <div className="flex items-start gap-3">
                    <span className="font-serif italic text-[#666666] text-lg leading-none shrink-0">✓</span>
                    <p className="text-base font-normal font-['Montserrat'] text-[#111111]/80 leading-relaxed">
                      {s}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>

            <FadeIn>
              <p className="text-lg font-semibold font-['Montserrat'] text-[#111111] mb-4">
                Key Insight
              </p>
              <div className="pl-6 md:pl-8 border-l-2 border-[#bdbdbd] py-2">
                <p className="text-lg md:text-xl text-[#111111]/90 font-light leading-relaxed italic">
                  Overcoming complex system challenges required proactive
                  research and guidance. This experience was instrumental in
                  developing vital self-learning skills and the resilience to
                  manage work pressure effectively.
                  <span className="block font-['Montserrat'] font-bold text-[10px] text-[#7096D1] uppercase tracking-[0.3em] mt-4 not-italic">
                    — Bim, Game Development Intern
                  </span>
                </p>
              </div>
            </FadeIn>
          </div>
        </div>


        {/* ================= MORE PROJECTS ================= */}
        <div>
          <FadeIn>
            <SectionHeading>More Projects</SectionHeading>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10">
            {moreProjects.map((project, i) => (
              <FadeIn key={i} delay={i * 0.15}>
                <Link
                  href={project.href}
                  className="group relative block aspect-[341/246] w-full overflow-hidden bg-stone-200 shadow-lg"
                >
                  {/* รูปภาพ */}
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.08]"
                  />

                  {/* Gradient Overlay (ค่อยๆ ปรากฏตอน Hover) */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" />

                  {/* ชื่อโปรเจกต์ (ปรากฏพร้อม gradient ตอน Hover เปลี่ยนเป็นสีขาว) */}
                  <div className="absolute inset-x-0 bottom-0 flex w-full items-end justify-between gap-4 p-5 opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100 z-10">
                    <p className="font-['Montserrat'] text-base font-normal text-white">
                      {project.name}
                    </p>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}