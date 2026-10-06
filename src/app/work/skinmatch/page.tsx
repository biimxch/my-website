"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import {
  CaseStudyIntro,
  CaseStudyMeta,
  CaseStudyMoreProjects,
  CaseStudySection,
  CaseStudyShot,
  CaseStudySubheading,
} from "@/components/work/CaseStudy";


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
          <span className="text-gray-700 text-sm shrink-0">Auto-Alert</span>
        </div>
        <div className="flex justify-between py-2 gap-4">
          <span className="text-[#111111] font-medium">Safe Alternative System</span>
          <span className="text-[#333333] text-sm shrink-0">Recommended</span>
        </div>
      </div>
      <div>
        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#666666] block mb-4 border-b border-[#bdbdbd]/30 pb-2">
          User Features
        </span>
        <div className="flex justify-between py-2 gap-4">
          <span className="text-[#111111] font-medium">Ingredient Glossary Explorer</span>
          <span className="text-[#111111]/70 text-xs shrink-0">MongoDB Node</span>
        </div>
        <div className="flex justify-between py-2 gap-4">
          <span className="text-[#111111] font-medium">Personal Skin Identity Profile</span>
          <span className="text-[#111111]/70 text-xs shrink-0">Active</span>
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
          <span className="text-[#333333] text-sm shrink-0">Weekly/Monthly</span>
        </div>
        <div className="flex justify-between py-2 gap-4">
          <span className="text-[#111111] font-medium">Targeted Product Placement</span>
          <span className="text-[#111111]/70 text-xs shrink-0">Dynamic</span>
        </div>
      </div>
      <div>
        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#666666] block mb-4 border-b border-[#bdbdbd]/30 pb-2">
          Payment Gateway Loop
        </span>
        <div className="flex justify-between py-2 gap-4">
          <span className="text-[#111111] font-medium">Credit / Debit Processing</span>
          <span className="text-[#111111]/70 text-xs shrink-0">Secure REST</span>
        </div>
        <div className="flex justify-between py-2 gap-4">
          <span className="text-[#111111] font-medium">Automated Receipt Emission</span>
          <span className="text-gray-700 text-sm shrink-0">Instant</span>
        </div>
      </div>
    </div>
  ),
};

export default function SkinMatchProject() {
  const [activeFlow, setActiveFlow] = useState<FlowType>("user");

  return (
    <main className="work-case-study min-h-screen bg-white text-[#111111] antialiased selection:bg-[#e5e5e5] selection:text-[#111111]">
      <Navbar />
      <CaseStudyIntro
        title="SkinMatch"
        description="An intelligent skincare platform designed to simplify complex ingredient compatibility, transforming dense ingredient data into clear, actionable insights."
      />
      <CaseStudyShot src={gallery.full} alt="SkinMatch full screen" />
      <CaseStudyMeta items={meta} />

      <CaseStudySection label="Research" title="Market Insight &amp; Discovery">
        <p className="text-base leading-[1.5] tracking-[-0.01em] text-[#414141]">
          The primary objective of this project was to design a structured and highly legible data model for complex skincare products. I dedicated the majority of my time to Requirement Elicitation as a Business Analyst, while simultaneously functioning as the UX/UI Designer to establish a clear visual hierarchy. This culminated in a high-fidelity Figma prototype tailored for real-world e-commerce usability.
        </p>
      </CaseStudySection>

      <CaseStudySection label="Context" title="Strategic Prioritization">
        <div className="space-y-6">
          {painPoints.map((point, index) => (
            <div key={point.title} className="flex gap-4">
              <span className="text-sm font-semibold tabular-nums text-[#585858]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <CaseStudySubheading className="mb-2 text-xl">{point.title}</CaseStudySubheading>
                <p className="text-base leading-[1.5] text-[#414141]">{point.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </CaseStudySection>

      <CaseStudySection label="Feature" title="Core User Flows">
        <div className="mb-6 flex gap-6 border-b border-[#dedede]">
          {(["user", "supplier"] as FlowType[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveFlow(tab)}
              aria-pressed={activeFlow === tab}
              className={`border-b-2 pb-3 text-xs font-medium uppercase tracking-[0.15em] transition-colors ${
                activeFlow === tab
                  ? "border-[#111111] text-[#111111]"
                  : "border-transparent text-[#585858] hover:text-[#111111]"
              }`}
            >
              {tab === "user" ? "User Perspective" : "Supplier Portal"}
            </button>
          ))}
        </div>
        <div className="border border-[#dedede] bg-white p-4 md:p-6">
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
      </CaseStudySection>

      <CaseStudySection label="Reflection" title="Trade-offs &amp; Delivery">
        <div className="mb-10 space-y-6">
          {technicalCompromises.map((tradeoff, index) => (
            <div key={tradeoff.title} className="flex gap-4">
              <span className="text-sm font-semibold tabular-nums text-[#585858]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <CaseStudySubheading className="mb-2 text-xl">{tradeoff.title}</CaseStudySubheading>
                <p className="text-base leading-[1.5] text-[#414141]">{tradeoff.detail}</p>
              </div>
            </div>
          ))}
        </div>
        <blockquote className="border-l-2 border-[#dedede] pl-6 text-base leading-[1.5] text-[#414141]">
          Simplifying the UI design to align with the development team&apos;s time constraints demonstrated strong adaptability and effective cross-functional collaboration between Design and Engineering.
          <cite className="mt-4 block text-xs not-italic tracking-[0.1em] text-[#585858]">
            — Reflection Takeaway
          </cite>
        </blockquote>
      </CaseStudySection>

      <CaseStudyMoreProjects projects={moreProjects} />
      <Footer />
    </main>
  );
}