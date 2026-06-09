"use client";

import React from "react";
import {
  SiFigma,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
  SiGit,
  SiGithub,
  SiJira,
  SiVercel,
} from "react-icons/si";

import FadeIn from "@/components/ui/FadeIn";

const skillsDataMock: Record<string, string[]> = {
  Design: ["Figma", "Design System", "Prototyping", "User Flow"],
  Frontend: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS"],
  Tools: ["Git", "GitHub", "Jira", "Vercel"],
};

const methodologySkills = [
  "Discover",
  "Define",
  "Design",
  "Validate",
  "Deliver",
];

const softSkills = [
  "System Thinking",
  "Cross-functional Communication",
  "Problem Solving",
];

const ICONS: Record<string, React.ReactNode> = {
  Figma: <SiFigma className="w-5 h-5 text-[#F24E1E]" />,
  React: <SiReact className="w-5 h-5 text-[#61DAFB]" />,
  "Next.js": (
    <SiNextdotjs className="w-5 h-5 text-stone-900 dark:text-white" />
  ),
  TypeScript: <SiTypescript className="w-5 h-5 text-[#3178C6]" />,
  JavaScript: (
    <SiJavascript className="w-5 h-5 text-[#F7DF1E] bg-black rounded-sm" />
  ),
  "Tailwind CSS": <SiTailwindcss className="w-5 h-5 text-[#06B6D4]" />,
  Git: <SiGit className="w-5 h-5 text-[#F05032]" />,
  GitHub: <SiGithub className="w-5 h-5 text-[#181717]" />,
  Jira: <SiJira className="w-5 h-5 text-[#0052CC]" />,
  Vercel: <SiVercel className="w-5 h-5 text-black" />,
};

export default function Skills() {
  const topCategories = ["Design", "Frontend", "Tools"];
  const skills = skillsDataMock;

  return (
    <section
      id="skills"
      className="pt-32 max-w-6xl mx-auto px-6 py-24 border-t border-[#e2e0da]"
    >
      <FadeIn delay={0}>
        <div className="mb-14">
          <h2 className="text-6xl font-medium tracking-tight text-[#334FAE] leading-none mb-4">
            SKILLS
          </h2>
          <p className="text-base text-stone-600 leading-relaxed max-w-2xl">
            Design, development, and collaboration skills used across product design projects.
          </p>
        </div>
      </FadeIn>

      <FadeIn delay={0.15}>
        <div className="border border-[#e2e0da] bg-[#faf9f7] rounded-xl overflow-hidden">
          {/* Top Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 border-b border-[#e2e0da]">
            {topCategories.map((cat, i) => (
              <div
                key={cat}
                className={`
                  p-8 bg-white
                  hover:bg-[#fcfcfd]
                  transition-colors duration-200
                  ${
                    i < 2
                      ? "md:border-r border-b md:border-b-0 border-[#e2e0da]"
                      : ""
                  }
                `}
              >
                <h3 className="text-[10px] font-bold uppercase tracking-widest text-[#334FAE]/60 mb-6">
                  {cat}
                </h3>

                <div className="grid grid-cols-3 justify-items-center gap-y-8">
                  {skills[cat]?.map((skill) => (
                    <div
                      key={skill}
                      className="flex flex-col items-center gap-2 w-16"
                    >
                      <div
                        className="
                          w-12 h-12
                          border border-[#e2e0da]
                          rounded-xl
                          bg-[#faf9f7]
                          flex items-center justify-center
                          hover:border-[#334FAE]/25
                          transition-colors duration-200
                        "
                      >
                        {ICONS[skill] ?? (
                          <span className="text-[10px] font-semibold tracking-wider text-stone-400 uppercase">
                            {skill.slice(0, 2)}
                          </span>
                        )}
                      </div>

                      <span
                        className="
                          text-[10px]
                          text-stone-500
                          font-medium
                          text-center
                          leading-tight
                          min-h-[28px]
                          flex items-center
                        "
                      >
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Methodology */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 px-8 py-6 border-b border-[#e2e0da] bg-white">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#334FAE]/60 min-w-[100px]">
              Process
            </span>

            <div className="flex flex-wrap gap-2">
              {methodologySkills.map((s) => (
                <Pill key={s}>{s}</Pill>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 px-8 py-6 bg-white">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#334FAE]/60 min-w-[100px]">
              Strengths
            </span>

            <div className="flex flex-wrap gap-2">
              {softSkills.map((s) => (
                <Pill key={s}>{s}</Pill>
              ))}
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="
        px-3.5 py-1.5
        border border-[#e2e0da]
        rounded-full
        text-[11px]
        text-stone-600
        bg-[#faf9f7]
        font-medium
        transition-colors duration-200
        hover:border-[#334FAE]/25
        hover:bg-white
      "
    >
      {children}
    </span>
  );
}