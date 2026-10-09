"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import { CaseStudyMoreProjects } from "@/components/work/CaseStudy";

const tokens = {
  "--ink": "#111111",
  "--canvas": "#ffffff",
  "--warm": "#ffffff",
  "--stone": "#ffffff",
  "--hair": "#dedede",
} as React.CSSProperties;

const ease = [0.22, 1, 0.36, 1] as const;

const gallery = {
  full: "/images/skinmatch/skinm1.png",
  // ใส่ path รูปที่นี่ ถ้าเว้นว่างไว้ ("") จะแสดงกรอบ placeholder
  showcase: [
    { src: "/images/skinmatch/figma1.png", alt: "SkinMatch screen 1" },
    { src: "/images/skinmatch/figma2.png", alt: "SkinMatch screen 2" },
  ],
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
  { label: "Tools", value: "React, Node.js, MongoDB" },
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

/* ---------- building blocks ---------- */

// Same container width as the Work / About sections so left edges align
const wrap = "mx-auto max-w-[1120px] px-5";
// Single body style used everywhere (16px / 1.5 / #414141)
const body = "text-base leading-[1.5] tracking-[-0.01em] text-[#414141]";
const tones = { canvas: "bg-[var(--canvas)]", warm: "bg-[var(--warm)]", stone: "bg-[var(--stone)]" };

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

function Label({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <p className={`text-xs leading-[1.4] tracking-[0.1em] text-[#585858] ${className}`}>{children}</p>;
}

function Section({
  label, title, tone = "canvas", children, wideContent,
}: {
  label: string;
  title: string;
  tone?: keyof typeof tones;
  children?: React.ReactNode;
  wideContent?: React.ReactNode;
}) {
  const hasSideContent = children != null;

  return (
    <section className={tones[tone]}>
      <FadeIn
        className={`${wrap} grid gap-8 py-12 sm:py-16 lg:gap-16 lg:py-24 ${
          hasSideContent ? "lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]" : "lg:grid-cols-1"
        }`}
      >
        <div>
          <Label>{label}</Label>
          <h2 className="mt-3 text-[clamp(2.25rem,5vw,3.25rem)] font-semibold leading-[1.15] tracking-[-0.035em] text-[var(--ink)]">
            {title}
          </h2>
        </div>
        {hasSideContent && <div>{children}</div>}
      </FadeIn>
      {wideContent && <FadeIn className="pb-16 lg:pb-24">{wideContent}</FadeIn>}
    </section>
  );
}

function H3({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <h3 className={`text-xl font-semibold leading-tight tracking-[-0.02em] text-[var(--ink)] ${className}`}>
      {children}
    </h3>
  );
}

function Numbered({ items }: { items: { title: string; detail: string }[] }) {
  return (
    <div className="space-y-6">
      {items.map((p, index) => (
        <div key={p.title} className="flex gap-4">
          <span className="text-sm font-semibold tabular-nums text-[#585858]">
            {String(index + 1).padStart(2, "0")}
          </span>
          <div>
            <H3 className="mb-2">{p.title}</H3>
            <p className={body}>{p.detail}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

// กรอบรูปเต็มความกว้าง ถ้าไม่มี src จะแสดง placeholder เว้นที่ไว้
function Shot({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-[var(--hair)] bg-white p-4 md:p-8">
      {src ? (
        <img src={src} alt={alt} className="block h-auto w-full" />
      ) : (
        <div
          role="img"
          aria-label={`${alt} (placeholder)`}
          className="flex aspect-[16/10] w-full items-center justify-center rounded-xl bg-neutral-100 text-xs tracking-[0.1em] text-[#585858]"
        >
          IMAGE PLACEHOLDER
        </div>
      )}
    </div>
  );
}

/* ---------- page ---------- */

export default function SkinMatchProject() {
  return (
    <main
      style={tokens}
      className="work-case-study min-h-screen bg-white font-['Montserrat'] text-[var(--ink)] antialiased selection:bg-black selection:text-white"
    >
      <Navbar />

      {/* Hero: title → summary → meta → cover image */}
      <section className="bg-[var(--canvas)]">
        <div className={`${wrap} pb-16 pt-[clamp(7rem,12vw,10rem)] md:pb-24`}>
          {/* Title: identical style to "Work." and "About." */}
          <FadeIn>
            <h1 className="text-left font-['Montserrat'] text-[clamp(4rem,10vw,8rem)] font-medium leading-[0.8] tracking-[-0.06em] text-black">
              SkinMatch
            </h1>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className={`mt-10 max-w-full ${body}`}>
              An intelligent skincare platform designed to simplify complex ingredient compatibility, transforming dense ingredient data into clear, actionable insights.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <dl className="mt-10 grid grid-cols-1 gap-x-8 gap-y-6 pt-6 sm:grid-cols-2 md:mt-12 lg:grid-cols-4">
              {meta.map((m) => (
                <div key={m.label} className="flex flex-col gap-2">
                  <dt className="text-xs font-semibold leading-[1.4] tracking-[0.1em] text-[var(--ink)]">{m.label}</dt>
                  <dd className="text-sm leading-snug text-[var(--ink)]">{m.value}</dd>
                </div>
              ))}
            </dl>
          </FadeIn>

          <FadeIn delay={0.3} className="mt-12 md:mt-16">
            <Shot src={gallery.full} alt="SkinMatch full screen" />
          </FadeIn>
        </div>
      </section>

      <Section label="Research" title="Market Insight & Discovery" tone="warm">
        <p className={body}>
          The primary objective of this project was to design a structured and highly legible data model for complex skincare products. I dedicated the majority of my time to Requirement Elicitation as a Business Analyst, while simultaneously functioning as the UX/UI Designer to establish a clear visual hierarchy. This culminated in a high-fidelity Figma prototype tailored for real-world e-commerce usability.
        </p>
      </Section>

      <Section label="Context" title="Strategic Prioritization">
        <Numbered items={painPoints} />
      </Section>

      {/* พื้นที่สำหรับรูป 2 รูป เต็มความกว้างเหมือนรูปปก */}
      <section className="bg-[var(--canvas)]">
        <div className={`${wrap} space-y-8 pb-12 sm:pb-16 lg:space-y-12 lg:pb-24`}>
          {gallery.showcase.map((shot, index) => (
            <FadeIn key={index}>
              <Shot src={shot.src} alt={shot.alt} />
            </FadeIn>
          ))}
        </div>
      </section>

      <Section label="Reflection" title="Trade-offs & Delivery" tone="warm">
        <Numbered items={technicalCompromises} />
      </Section>

      <CaseStudyMoreProjects projects={moreProjects} />

      <Footer />
    </main>
  );
}