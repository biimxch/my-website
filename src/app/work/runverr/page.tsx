"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import { CaseStudyMoreProjects } from "@/components/work/CaseStudy";
import ImageCarousel from "@/components/work/ImageCarousel";

const tokens = {
  "--ink": "#111111",
  "--canvas": "#ffffff",
  "--warm": "#ffffff",
  "--stone": "#ffffff",
  "--hair": "#dedede",
} as React.CSSProperties;

const ease = [0.22, 1, 0.36, 1] as const;

const gallery = {
  full: "/images/runverr/runrun.png",
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
  { label: "Role", value: "Game Dev Intern" },
  { label: "Timeline", value: "Jun – Aug 2025" },
  { label: "Engine", value: "Unreal Engine 5" },
  { label: "Platform", value: "PC Build" },
];

const storyPoints = [
  {
    title: "Goal",
    detail: "Gradually overcome obstacles (collecting Score) to grow and achieve ultimate success (High Score).",
  },
  {
    title: "Conflict",
    detail: "Buildings and obstacles represent the challenges and hurdles in a student's life.",
  },
  {
    title: "Drive",
    detail:
      "The character runs to continuously gather knowledge and experience, growing into a better version of themselves.",
  },
];

const features = [
  {
    lead: "Score System —",
    text: "Collect scores based on running distance; exceeding the High Score immediately registers as the New High Score.",
  },
  {
    lead: "Energy System —",
    text: "Energy decreases continuously while running; players must collect Heart Items to restore it, or the game ends.",
  },
  {
    lead: "Item System —",
    text: "4 Items: Heart (restores energy), Piggy Bank (Coin x2), Robot Magnet (attracts coins), and Jump Boots (jump higher).",
  },
  {
    lead: "Day/Night Cycle —",
    text: "Environment shifts from day to night; visibility decreases at night, requiring players to use the light from coins to navigate.",
  },
  {
    lead: "Coin Collection —",
    text: "Collect and accumulate coins to purchase new characters in the Select Character screen.",
  },
  {
    lead: "PC Packaging —",
    text: "Build and package the game as a fully playable PC Build for Windows installations.",
  },
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

type Item = string | { lead: string; text: string };

function Bullets({ items }: { items: Item[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => {
        const text = typeof item === "string";
        return (
          <li key={text ? item : item.lead} className={`flex gap-3 ${body}`}>
            <span aria-hidden className="mt-[0.6em] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--ink)]" />
            <span>
              {text ? item : (<><strong className="font-semibold text-[var(--ink)]">{item.lead}</strong> {item.text}</>)}
            </span>
          </li>
        );
      })}
    </ul>
  );
}

function Checklist({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className={`flex gap-3 ${body}`}>
          <span aria-hidden className="text-[var(--ink)]">✓</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
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

function Shot({
  src,
  alt,
  className = "",
  imageClassName = "",
}: {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
}) {
  return (
    <div className={`overflow-hidden rounded-2xl border border-[var(--hair)] bg-white p-4 md:p-8 ${className}`}>
      <img src={src} alt={alt} className={`block h-auto w-full ${imageClassName}`} />
    </div>
  );
}

/* ---------- page ---------- */

export default function RunverrProject() {
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
              Runverr
            </h1>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className={`mt-10 max-w-full ${body}`}>
              An Unreal Engine 5 Endless Runner developed for KMUTT’s Mediatier Project, featuring scoring, energy, items, a day/night cycle, and high score system.
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
            <Shot src={gallery.full} alt="Runverr gameplay" />
          </FadeIn>
        </div>
      </section>

      <Section label="Context" title="The Story Behind the Run" tone="warm">
        <p className={`${body} mb-8`}>
          The character is a university freshman — experiencing growth while facing obstacles like difficult lessons and life challenges, which can be overcome with perseverance.
        </p>
        <Numbered items={storyPoints} />
      </Section>

      <Section
        label="Process"
        title="Development"
        wideContent={
          <ImageCarousel
            label="Runverr development images"
            className="mt-0"
            images={[
              { src: gallery.UE5, alt: "Runverr development in Unreal Engine 5" },
              { src: gallery.workflow, alt: "Runverr development workflow" },
              { src: gallery.fivecore, alt: "Runverr FiveCore system" },
            ]}
          />
        }
      >
        <p className={body}>
          Runverr came together through a hands-on workflow in Unreal Engine 5, from building gameplay logic and FiveCore systems to connecting each part into a playable PC game.
        </p>
      </Section>

      <Section label="Feature" title="What I Built" tone="warm">
        <Bullets items={features} />
      </Section>

      <Section label="Delivery" title="Demo Day & Delivery">
        <p className={`${body} mb-6`}>
          On July 25, 2025, the completed Runverr mini-game was presented to professors from both the Media Arts and Computer Engineering faculties — the game was successfully built and playable as a PC Package.
        </p>
        <Checklist items={demoChecklist} />
      </Section>

      <Section
        label="Demo"
        title="Gameplay"
        tone="warm"
        wideContent={
          <div className={wrap}>
            <div className="overflow-hidden rounded-2xl border border-[var(--hair)] bg-white">
              <video
                src="/images/runverr/runverr-demo.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="block aspect-video w-full object-cover"
              />
            </div>
          </div>
        }
      />

      <Section label="Reflection" title="What Was Hard">
        <Numbered items={challenges} />
      </Section>

      <Section label="Learning" title="What I Learned" tone="warm">
        <H3 className="mb-4">Skills Gained</H3>
        <div className="mb-12">
          <Checklist items={skillsGained} />
        </div>

        <H3 className="mb-4">Key Insight</H3>
        <blockquote className={`border-l-2 border-[var(--hair)] pl-6 ${body}`}>
          Overcoming complex system challenges required proactive research and guidance. This experience was instrumental in developing vital self-learning skills and the resilience to manage work pressure effectively.
          <cite className="mt-4 block text-xs not-italic tracking-[0.1em] text-[#585858]">
            — Bim, Game Development Intern
          </cite>
        </blockquote>
      </Section>

      <CaseStudyMoreProjects projects={moreProjects} />

      <Footer />
    </main>
  );
}