"use client";

import React, { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";


type FlowType = "user" | "supplier";

const gallery = {
  hero: "/images/skinmatch/hero.jpg",
  full: "/images/skinmatch/skinm1.png",
  half1: "/images/skinmatch/flow-user.jpg",
  half2: "/images/skinmatch/flow-supplier.jpg",
};

const moreProjects = [
  { name: "Xenior+", image: "/images/xenior+/xenior_thump.png", href: "/work/xenior-plus" },
  { name: "Runverr", image: "/images/runverr/runrun.png", href: "/work/runverr" },
  { name: "Graphic Design", image: "/images/interest/thumbnail.jpg", href: "/work/otherwork" },
];

const meta = [
  { label: "Role", value: "Business Analyst & UX/UI" },
  { label: "Timeline", value: "3 Months" },
  { label: "Category", value: "Web App / E-Commerce" },
  { label: "Tech Stack", value: "React, Node.js, MongoDB" },
];

const painPoints = [
  {
    title: "Chemical Conflict Blindspots",
    detail:
      "Modern consumers stack multiple skincare products without realizing certain active ingredients counteract or trigger hazardous skin inflammation.",
  },
  {
    title: "Illegible Scientific Labels",
    detail:
      "Ingredient lists on product packaging are heavily gated by dense chemical nomenclature, making manual safety verification impossible for average users.",
  },
  {
    title: "Unoptimized Monetization",
    detail:
      "Skincare brands lacked a localized, contextual platform to advertise products directly to consumers at the exact moment of high purchasing intent.",
  },
];

const technicalCompromises = [
  {
    title: "UI Simplification Loop",
    detail:
      "The initial high-fidelity prototype carried intricate multi-layered state interactions that challenged the front-end timeline. Resolution: collaborated directly with developers to simplify interface parameters, converting complex overlapping sheets into clean, performant layouts.",
  },
  {
    title: "Requirement De-scoping",
    detail:
      "Early functional specifications broadsided the project core value with excessive marketplace features. Resolution: steered the business roadmap backward to sharpen focus exclusively on the 'Ingredient Compatibility Resolution Engine'.",
  },
  {
    title: "Git Conflict Resolution",
    detail:
      "Version control sync overlaps threatened production timeline consistency during parallel feature deployments. Resolution: established strict module branch boundaries and centralized pull request reviews to safeguard system integrity.",
  },
];

const flowViews = {
  user: (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
      <div>
        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#666666] block mb-4 border-b border-[#bdbdbd]/30 pb-2">
          Search &amp; Match Core
        </span>
        <div className="flex justify-between py-2 gap-4">
          <span className="text-[#111111] font-medium">Incompatible Detection</span>
          <span className="text-gray-700 font-serif italic text-sm shrink-0">Auto-Alert</span>
        </div>
        <div className="flex justify-between py-2 gap-4">
          <span className="text-[#111111] font-medium">Safe Alternative System</span>
          <span className="text-[#333333] font-serif italic text-sm shrink-0">Recommended</span>
        </div>
      </div>
      <div>
        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#666666] block mb-4 border-b border-[#bdbdbd]/30 pb-2">
          User Features
        </span>
        <div className="flex justify-between py-2 gap-4">
          <span className="text-[#111111] font-medium">Ingredient Glossary Explorer</span>
          <span className="text-[#111111]/70 font-mono text-xs shrink-0">MongoDB Node</span>
        </div>
        <div className="flex justify-between py-2 gap-4">
          <span className="text-[#111111] font-medium">Personal Skin Identity Profile</span>
          <span className="text-[#111111]/70 font-mono text-xs shrink-0">Active</span>
        </div>
      </div>
    </div>
  ),
  supplier: (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
      <div>
        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#666666] block mb-4 border-b border-[#bdbdbd]/30 pb-2">
          B2B Ad Architecture
        </span>
        <div className="flex justify-between py-2 gap-4">
          <span className="text-[#111111] font-medium">Banner Ad Slot Bidding</span>
          <span className="text-[#333333] font-serif italic text-sm shrink-0">Weekly/Monthly</span>
        </div>
        <div className="flex justify-between py-2 gap-4">
          <span className="text-[#111111] font-medium">Targeted Product Placement</span>
          <span className="text-[#111111]/70 font-mono text-xs shrink-0">Dynamic</span>
        </div>
      </div>
      <div>
        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#666666] block mb-4 border-b border-[#bdbdbd]/30 pb-2">
          Payment Gateway Loop
        </span>
        <div className="flex justify-between py-2 gap-4">
          <span className="text-[#111111] font-medium">Credit / Debit Processing</span>
          <span className="text-[#111111]/70 font-mono text-xs shrink-0">Secure REST</span>
        </div>
        <div className="flex justify-between py-2 gap-4">
          <span className="text-[#111111] font-medium">Automated Receipt Emission</span>
          <span className="text-gray-700 font-serif italic text-sm shrink-0">Instant</span>
        </div>
      </div>
    </div>
  ),
};

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-3xl md:text-4xl font-semibold font-['Montserrat'] text-[#111111] mb-10">
      {children}
    </h2>
  );
}

// ---------------------------------------------------------
// Component สำหรับทำ Fade-in ตอน Scroll
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

export default function SkinMatchProject() {
  const [activeFlow, setActiveFlow] = useState<FlowType>("user");

  return (
    <main className="bg-white min-h-screen text-[#111111] antialiased selection:bg-[#e5e5e5] selection:text-[#111111]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Pinyon+Script&display=swap');
        .font-pinyon { font-family: 'Pinyon Script', cursive; }
      `}</style>

      <Navbar />

      <div className="section-container pt-[clamp(6rem,10vw,9rem)] pb-24">
        
        {/* ================= TITLE + DESCRIPTION ================= */}
        <FadeIn className="grid grid-cols-1 md:grid-cols-[2fr_4fr] gap-10 md:gap-24 mb-12">
          <h1 className="font-['Montserrat'] text-[clamp(4rem,10vw,8rem)] font-medium leading-[0.8] tracking-[-0.06em] text-black">
            SkinMatch
          </h1>
          <p className="text-lg md:text-base font-normal font-['Montserrat'] text-[#111111] leading-relaxed">
            An intelligent skincare platform designed to simplify complex ingredient compatibility, transforming dense ingredient data into clear, actionable insights.
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
          <div className="grid grid-cols-1 md:grid-cols-[603fr_438fr] gap-8 md:gap-20">
            <div className="md:col-span-2 w-full">
              <img
                src={gallery.full}
                alt="SkinMatch full screen"
                className="block w-full h-auto"
              />
            </div>
          </div>
        </FadeIn>

        {/* ================= MARKET INSIGHT & DISCOVERY ================= */}
        <div className="mb-32">
          <FadeIn>
            <SectionHeading>Market Insight &amp; Discovery</SectionHeading>
          </FadeIn>
          <FadeIn>
            <p className="pl-8 md:pl-24 text-base font-normal font-['Montserrat'] text-[#111111]/70 leading-relaxed">
              The primary objective of this project was to design a structured
              and highly legible data model for complex skincare products. I
              dedicated the majority of my time to Requirement Elicitation as a
              Business Analyst, while simultaneously functioning as the UX/UI
              Designer to establish a clear visual hierarchy. This culminated
              in a high-fidelity Figma prototype tailored for real-world
              e-commerce usability.
            </p>
          </FadeIn>
        </div>

        {/* ================= STRATEGIC PRIORITIZATION (PAIN POINTS) ================= */}
        <div className="mb-32">
          <FadeIn>
            <SectionHeading>Strategic Prioritization</SectionHeading>
          </FadeIn>
          <div className="pl-8 md:pl-24 space-y-8">
            {painPoints.map((p, i) => (
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

        {/* ================= CORE USER FLOWS ================= */}
        <div className="mb-32">
          <FadeIn>
            <SectionHeading>Core User Flows</SectionHeading>
          </FadeIn>
          <div className="pl-8 md:pl-24">
            <FadeIn>
              <div className="flex gap-6 border-b border-[#bdbdbd]/40 pb-4 mb-6">
                {(["user", "supplier"] as FlowType[]).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveFlow(tab)}
                    className={`text-xs uppercase tracking-[0.2em] transition-colors duration-300 pb-1 border-b-2 ${
                      activeFlow === tab
                        ? "text-[#111111] font-bold border-[#333333]"
                        : "text-[#666666] hover:text-[#333333] border-transparent"
                    }`}
                  >
                    {tab === "user" ? "User Perspective" : "Supplier Portal"}
                  </button>
                ))}
              </div>
            </FadeIn>
            <FadeIn>
              <div className="min-h-[140px] bg-[#f5f5f5]/40 p-6 rounded-2xl border border-[#bdbdbd]/30">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeFlow}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    {flowViews[activeFlow]}
                  </motion.div>
                </AnimatePresence>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* ================= TRADE-OFFS & DELIVERY ================= */}
        <div className="mb-32">
          <FadeIn>
            <SectionHeading>Trade-offs &amp; Delivery</SectionHeading>
          </FadeIn>
          <div className="pl-8 md:pl-24">
            <div className="space-y-8 mb-10">
              {technicalCompromises.map((t, i) => (
                <FadeIn key={i} delay={0.1}>
                  <div className="flex gap-4">
                    <span className="text-xl font-semibold font-['Montserrat'] text-[#333333] shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <p className="text-lg font-semibold font-['Montserrat'] text-[#111111] mb-1">
                        {t.title}
                      </p>
                      <p className="text-base font-normal font-['Montserrat'] text-[#111111]/70 leading-relaxed">
                        {t.detail}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
            <FadeIn>
              <div className="pl-6 md:pl-8 border-l-2 border-[#bdbdbd] py-2">
                <p className="text-lg md:text-xl text-[#111111]/90 font-light leading-relaxed italic">
                  Simplifying the UI design to align with the development
                  team's time constraints demonstrated strong adaptability and
                  effective cross-functional collaboration between Design and
                  Engineering.
                  <span className="block font-['Montserrat'] font-bold text-[10px] text-[#666666] uppercase tracking-[0.3em] mt-4 not-italic">
                    — Reflection Takeaway
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