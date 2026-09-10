"use client";

import React from "react";
import Link from "next/link";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";

const gallery = {
  hero: "/images/runverr/hero.jpg",
  full: "/images/runverr/runrun.png",
  half1: "/images/runverr/demo-day.jpg",
  half2: "/images/runverr/ui-detail.jpg",
};

const moreProjects = [
  { name: "Xenior+", image: "/images/projects/xenior-thumb.jpg", href: "/work/xenior-plus" },
  { name: "Graphic Design", image: "/images/projects/graphic-thumb.jpg", href: "/work/graphic-design" },
  { name: "Portfolio Site", image: "/images/projects/portfolio-thumb.jpg", href: "/work/portfolio-site" },
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

export default function RunverrProject() {
  return (
    <main className="bg-white min-h-screen text-[#111111] antialiased selection:bg-[#e5e5e5]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Pinyon+Script&display=swap');
        .font-pinyon { font-family: 'Pinyon Script', cursive; }
      `}</style>

      <Navbar />

      <div className="section-container pt-[clamp(6rem,10vw,9rem)] pb-24">
        {/* ================= HERO BANNER =================
        <div className="w-full aspect-[1120/549] bg-[#F7F2EB] overflow-hidden mb-20">
          <img src={gallery.hero} alt="Runverr hero" className="w-full h-full object-cover" />
        </div> */}

        {/* ================= TITLE + DESCRIPTION ================= */}
        <div className="grid grid-cols-1 md:grid-cols-[2fr_4fr] gap-10 md:gap-24 mb-12">
          <h1 className="text-8xl md:text-8xl font-medium font-['Montserrat'] text-black leading-tight">
            Runverr{" "}
          </h1>
          <p className="text-lg md:text-base font-normal font-['Montserrat'] text-[#111111] leading-relaxed">
            Endless Runner Mini-Game developed with Unreal Engine 5 for the
            Mediatier Project at KMUTT. A coin-collecting endless runner
            featuring a complete Core Game Loop — including Score System,
            Energy, Items, Day/Night Cycle, and High Score functionality,
            built for PC.
          </p>
        </div>

        {/* ================= META INFO ================= */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-32 pb-12 border-b border-[#bdbdbd]/40">
          {meta.map((m, i) => (
            <div key={i}>
              <p className="text-xs uppercase tracking-widest text-[#666666] font-['Montserrat'] mb-2">
                {m.label}
              </p>
              <p className="text-sm text-[#111111] font-['Montserrat'] leading-relaxed">
                {m.value}
              </p>
            </div>
          ))}
        </div>

        {/* ================= MEDIA GALLERY ================= */}
        <div className="flex flex-col gap-16 md:gap-20 mb-32">
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
        </div>

        {/* ================= THE STORY BEHIND THE RUN ================= */}
        <div className="mb-32">
          <SectionHeading>The Story Behind the Run</SectionHeading>
          <div className="pl-8 md:pl-24">
            <p className="text-base font-normal font-['Montserrat'] text-[#111111]/70 leading-relaxed mb-10">
              The character is a university freshman — experiencing growth
              while facing obstacles like difficult lessons and life
              challenges, which can be overcome with perseverance.
            </p>
            <div className="space-y-8">
              {storyPoints.map((p, i) => (
                <div key={i} className="flex gap-4">
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
              ))}
            </div>
          </div>
        </div>

        {/* ================= WHAT I BUILT ================= */}
        <div className="mb-32">
          <SectionHeading>What I Built</SectionHeading>
          <ul className="pl-8 md:pl-24 space-y-3">
            {features.map((f, i) => (
              <li key={i} className="flex items-start gap-3 text-base font-normal font-['Montserrat'] text-[#111111] leading-relaxed">
                <span className="mt-2.5 w-1 h-1 rounded-full bg-[#111111] shrink-0" />
                {f}
              </li>
            ))}
          </ul>
        </div>

        {/* ================= METRICS ================= */}
        <div className="mb-32">
          <SectionHeading>Development Metrics</SectionHeading>
          <div className="pl-8 md:pl-24 grid grid-cols-1 md:grid-cols-3 gap-8">
            {metrics.map((m, i) => (
              <div key={i} className="pt-6 border-t border-[#bdbdbd]/40">
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#333333] mb-3">
                  {m.keyword}
                </p>
                <div className="flex items-baseline gap-3">
                  <span className="text-sm line-through text-[#111111]/30">{m.before}</span>
                  <span className="text-4xl font-serif italic text-[#333333]">{m.value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= DEMO DAY & DELIVERY ================= */}
        <div className="mb-32">
          <SectionHeading>Demo Day &amp; Delivery</SectionHeading>
          <div className="pl-8 md:pl-24">
            <p className="text-base font-normal font-['Montserrat'] text-[#111111]/90 leading-relaxed mb-6">
              On July 25, 2025, the completed Runverr mini-game was presented
              to professors from both the Media Arts and Computer Engineering
              faculties — the game was successfully built and playable as a
              PC Package.
            </p>
            <div className="space-y-3">
              {demoChecklist.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="font-serif italic text-[#666666] text-lg leading-none shrink-0">✓</span>
                  <p className="text-base font-normal font-['Montserrat'] text-[#111111]/80 leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ================= WHAT WAS HARD ================= */}
        <div className="mb-32">
          <SectionHeading>What Was Hard</SectionHeading>
          <div className="pl-8 md:pl-24 space-y-8">
            {challenges.map((c, i) => (
              <div key={i} className="flex gap-4">
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
            ))}
          </div>
        </div>

        {/* ================= WHAT I LEARNED ================= */}
        <div className="mb-32">
          <SectionHeading>What I Learned</SectionHeading>
          <div className="pl-8 md:pl-24">
            <p className="text-lg font-semibold font-['Montserrat'] text-[#111111] mb-4">
              Skills Gained
            </p>
            <div className="space-y-3 mb-10">
              {skillsGained.map((s, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="font-serif italic text-[#666666] text-lg leading-none shrink-0">✓</span>
                  <p className="text-base font-normal font-['Montserrat'] text-[#111111]/80 leading-relaxed">
                    {s}
                  </p>
                </div>
              ))}
            </div>

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
          </div>
        </div>

        {/* ================= MORE PROJECTS ================= */}
        <div>
          <SectionHeading>More Projects</SectionHeading>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10">
            {moreProjects.map((project, i) => (
              <Link key={i} href={project.href} className="group block">
                <div className="w-full aspect-[341/246] bg-[#F7F2EB] overflow-hidden mb-3">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <p className="text-base font-normal font-['Montserrat'] text-[#111111]">
                  {project.name}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}