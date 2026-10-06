"use client";

import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import ImageCarousel from "@/components/work/ImageCarousel";
import {
  CaseStudyIntro,
  CaseStudyMeta,
  CaseStudyMoreProjects,
  CaseStudySection,
  CaseStudyShot,
  CaseStudySubheading,
} from "@/components/work/CaseStudy";


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

export default function RunverrProject() {
  return (
    <main className="work-case-study min-h-screen bg-white text-[#111111] antialiased selection:bg-[#e5e5e5] selection:text-[#111111]">
      <Navbar />
      <CaseStudyIntro
        title="Runverr"
        description="An Unreal Engine 5 Endless Runner developed for KMUTT’s Mediatier Project, featuring scoring, energy, items, a day/night cycle, and high score system."
      />
      <CaseStudyShot src={gallery.full} alt="Runverr gameplay" />
      <CaseStudyMeta items={meta} />

      <CaseStudySection label="Context" title="The Story Behind the Run">
        <p className="mb-8 text-base leading-[1.5] tracking-[-0.01em] text-[#414141]">
          The character is a university freshman — experiencing growth while facing obstacles like difficult lessons and life challenges, which can be overcome with perseverance.
        </p>
        <div className="space-y-6">
          {storyPoints.map((point, index) => (
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

      <CaseStudySection
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
        <p className="text-base leading-[1.5] text-[#414141]">
          Runverr came together through a hands-on workflow in Unreal Engine 5, from building gameplay logic and FiveCore systems to connecting each part into a playable PC game.
        </p>
      </CaseStudySection>

      <CaseStudySection label="Feature" title="What I Built">
        <ul className="space-y-3 text-base leading-[1.5] text-[#414141]">
          {features.map((feature) => (
            <li key={feature} className="flex gap-3">
              <span aria-hidden="true" className="mt-[0.65em] h-1 w-1 shrink-0 bg-[#111111]" />
              {feature}
            </li>
          ))}
        </ul>
      </CaseStudySection>

      <CaseStudySection label="Delivery" title="Demo Day &amp; Delivery">
        <p className="mb-6 text-base leading-[1.5] text-[#414141]">
          On July 25, 2025, the completed Runverr mini-game was presented to professors from both the Media Arts and Computer Engineering faculties — the game was successfully built and playable as a PC Package.
        </p>
        <ul className="space-y-3 text-base leading-[1.5] text-[#414141]">
          {demoChecklist.map((item) => (
            <li key={item} className="flex gap-3">
              <span aria-hidden="true" className="text-[#111111]">✓</span>
              {item}
            </li>
          ))}
        </ul>
      </CaseStudySection>

      <CaseStudySection label="Demo" title="Gameplay">
        <video
          src="/images/runverr/runverr-demo.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="block aspect-video w-full object-cover"
        />
      </CaseStudySection>

      <CaseStudySection label="Reflection" title="What Was Hard">
        <div className="space-y-6">
          {challenges.map((challenge, index) => (
            <div key={challenge.title} className="flex gap-4">
              <span className="text-sm font-semibold tabular-nums text-[#585858]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <CaseStudySubheading className="mb-2 text-xl">{challenge.title}</CaseStudySubheading>
                <p className="text-base leading-[1.5] text-[#414141]">{challenge.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </CaseStudySection>

      <CaseStudySection label="Learning" title="What I Learned">
        <CaseStudySubheading className="mb-4 text-xl">Skills Gained</CaseStudySubheading>
        <ul className="mb-10 space-y-3 text-base leading-[1.5] text-[#414141]">
          {skillsGained.map((skill) => (
            <li key={skill} className="flex gap-3">
              <span aria-hidden="true" className="text-[#111111]">✓</span>
              {skill}
            </li>
          ))}
        </ul>
        <CaseStudySubheading className="mb-4 text-xl">Key Insight</CaseStudySubheading>
        <blockquote className="border-l-2 border-[#dedede] pl-6 text-base leading-[1.5] text-[#414141]">
          Overcoming complex system challenges required proactive research and guidance. This experience was instrumental in developing vital self-learning skills and the resilience to manage work pressure effectively.
          <cite className="mt-4 block text-xs not-italic tracking-[0.1em] text-[#585858]">
            — Bim, Game Development Intern
          </cite>
        </blockquote>
      </CaseStudySection>

      <CaseStudyMoreProjects projects={moreProjects} />
      <Footer />
    </main>
  );
}