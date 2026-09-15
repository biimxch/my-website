"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion"; // เพิ่ม import framer-motion
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";

const gallery = {
  hero: "/images/xenior+/hero.png",
  full: "/images/xenior+/xenior_thump.png",
  half1: "/images/xenior+/xenior_thump.png",
  half2: "/images/xenior+/xenior.png",
  LowWF: "/images/xenior+/LowWF-figure-15.jpg",
  HighWF: "/images/xenior+/HighWF-figure-15.png",
};

const moreProjects = [
  { name: "Runverr", image: "/images/runverr/runrun.png", href: "/work/runverr" },
  { name: "Skinmatch", image: "/images/skinmatch/skinm1.png", href: "/work/skinmatch" },
  { name: "Graphic Design", image: "/images/interest/thumbnail.jpg", href: "/work/otherwork" },
];

const meta = [
  { label: "Role", value: "UX/UI Designer & Frontend Developer" },
  { label: "Duration", value: "2 semesters (~8 months)" },
  { label: "Team", value: "3 members — primary executor for UX/UI and frontend" },
  { label: "Stack", value: "Next.js, React, Tailwind CSS, Flask API, MySQL, Meilisearch" },
];

const problems = [
  {
    title: "Inefficient project search",
    detail:
      "The legacy search couldn't filter by specific conditions (advisor, year, keyword), so instructors and students often couldn't retrieve the project records they were actually looking for.",
  },
  {
    title: "An interface that underserved every role",
    detail:
      "The UI wasn't designed around what each user type actually needed day to day. The home page in particular sat mostly empty instead of surfacing relevant information, and navigation elements weren't clear enough for users to find key actions quickly.",
  },
];

const objectives = [
  "Let instructors evaluate student projects inside the platform, faster and in a more structured way.",
  "Make project search efficient, specific, and able to return what users actually need.",
  "Redesign the UX/UI so it's appropriate, usable, and comfortable for every user group.",
];

const roles = [
  {
    role: "Subject Owner (Senior Project instructor)",
    responsibilities:
      "Creates and configures evaluation forms, tracks project status, scores and comments, views real-time reports, searches past projects",
  },
  {
    role: "Advisor / Co-advisor / Committee",
    responsibilities:
      "Tracks assigned students' progress, scores and comments, views reports while evaluating, searches past projects for reference",
  },
  {
    role: "Student",
    responsibilities:
      "Searches and accesses prior years' projects as reference material for their own work",
  },
  {
    role: "Admin",
    responsibilities:
      "Manages users, evaluation forms, and all project data across the system",
  },
];

const designStages = [
  {
    stage: "Low-fidelity wireframes (Procreate)",
    detail:
      "Rough layout and information hierarchy, prioritizing speed of iteration and shared understanding within the team before investing in detail.",
  },
  {
    stage: "High-fidelity wireframes & interactive prototype (Figma)",
    detail:
      "Final color scheme, typography, and UI principles applied, then linked together into a clickable prototype that simulated real navigation and interaction before development began.",
  },
];

const searchFeatures = [
  "Multi-condition filtering (project name, advisor, academic year) with relevance-ranked results",
  "Real-time autocomplete to reduce typing and spelling errors",
  "Full Thai-language support, chosen over Elasticsearch specifically to reduce infrastructure complexity and resource cost while still meeting the department's language needs",
];

const formFeatures = [
  "Dynamic, rubric-based criteria that instructors can configure per assessment",
  "Group and member identification built into the form, so evaluators always know who they're scoring",
  "Report viewing side-by-side with the evaluation form — no more switching screens — with version history to compare current submissions against earlier drafts",
  "Inline comments per criterion, draft-saving, submission locking after deadlines, form duplication across subjects/years, and CSV import",
];

const uatWorked = [
  "Instructors responded well to having evaluation centralized in one place, eliminating the download-file / listen-to-presentation / switch-to-Google-Sheets routine",
  "The scoring slider (supporting drag, direct numeric input, and decimals) was well received",
  "Search filtering and autocomplete were rated clearly better than the legacy search across all three user groups",
  "Students specifically valued the \"Upcoming Deadlines\" view for showing urgency at a glance",
];

const uatIssues = [
  { issue: "Terminology errors (\"Criterion\" vs \"Criteria\" used incorrectly)", resolution: "Fixed" },
  { issue: "Feedback input field wasn't visually prominent enough, risking skipped steps", resolution: "Repositioned" },
  { issue: "Evaluation forms couldn't open in a new tab, making score comparison across groups hard", resolution: "Added new-tab support" },
  { issue: "Form header took up too much space", resolution: "Condensed, with detail moved to a popup" },
  { issue: "No way to resize the report/evaluation panes", resolution: "Added resizable layout" },
  { issue: "Landing page lacked department contact info", resolution: "Added" },
  { issue: "Projects without a cover image left blank space", resolution: "Added category color-coding" },
  { issue: "Instructor dashboard didn't clearly show outstanding vs. total workload", resolution: "Added progress ratio + color coding" },
];

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-3xl md:text-4xl font-semibold font-['Montserrat'] text-black mb-10">
      {children}
    </h2>
  );
}

// ---------------------------------------------------------
// เพิ่ม Component ช่วยทำ Fade-in แบบนุ่มนวล
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

export default function XeniorPlusCaseStudy() {
  return (
    <main className="bg-white min-h-screen text-black antialiased selection:bg-[#081F5C]/10 selection:text-[#081F5C]">
      <Navbar />

      <div className="section-container pt-[clamp(6rem,10vw,9rem)] pb-24">
        
        {/* ================= TITLE + DESCRIPTION ================= */}
        <FadeIn className="grid grid-cols-1 md:grid-cols-[2fr_4fr] gap-10 md:gap-24 mb-12">
          <h1 className="font-['Montserrat'] text-[clamp(4rem,10vw,8rem)] font-medium leading-[0.8] tracking-[-0.06em] text-black">
            Xenior+
          </h1>
          <p className="text-lg md:text-base font-normal font-['Montserrat'] text-black leading-relaxed">
            An enhanced redesign of KMUTT’s Xenior system, with new features for project evaluation, search, and progress tracking across three integrated modules.
          </p>
        </FadeIn>

        {/* ================= META INFO ================= */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-32 pb-12 border-b border-stone-200">
          {meta.map((m, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <p className="text-xs uppercase tracking-widest text-stone-400 font-['Montserrat'] mb-2">
                {m.label}
              </p>
              <p className="text-sm text-black font-['Montserrat'] leading-relaxed">
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
                alt="Xenior+ full screen"
                className="block w-full h-auto"
              />
            </div>
          </div>
        </FadeIn>

        {/* ================= PROBLEM STATEMENT ================= */}
        <div className="mb-32">
          <FadeIn>
            <SectionHeading>Problem Statement</SectionHeading>
          </FadeIn>
          <div className="pl-8 md:pl-24 space-y-8">
            {problems.map((p, i) => (
              <FadeIn key={i} delay={0.1}>
                <div className="flex gap-4">
                  <span className="text-xl font-semibold font-['Montserrat'] text-black shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="text-lg font-semibold font-['Montserrat'] text-black mb-1">
                      {p.title}
                    </p>
                    <p className="text-base font-normal font-['Montserrat'] text-stone-600 leading-relaxed">
                      {p.detail}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* ================= OBJECTIVES ================= */}
        <div className="mb-32">
          <FadeIn>
            <SectionHeading>Objectives</SectionHeading>
          </FadeIn>
          <ul className="pl-8 md:pl-24 space-y-3">
            {objectives.map((o, i) => (
              <FadeIn key={i} delay={0.1}>
                <li className="flex items-start gap-3 text-base font-normal font-['Montserrat'] text-black leading-relaxed">
                  <span className="mt-2.5 w-1 h-1 rounded-full bg-black shrink-0" />
                  {o}
                </li>
              </FadeIn>
            ))}
          </ul>
        </div>

        {/* ================= USERS & ROLES ================= */}
        <div className="mb-32">
          <FadeIn>
            <SectionHeading>Users &amp; Roles</SectionHeading>
          </FadeIn>
          <div className="pl-8 md:pl-24 space-y-6">
            {roles.map((r, i) => (
              <FadeIn key={i} delay={0.1}>
                <div className="flex flex-col sm:flex-row gap-1 sm:gap-8 pb-6 border-b border-stone-200 last:border-0">
                  <p className="w-full sm:w-64 shrink-0 text-lg font-semibold font-['Montserrat'] text-black">
                    {r.role}
                  </p>
                  <p className="text-base font-normal font-['Montserrat'] text-stone-600 leading-relaxed">
                    {r.responsibilities}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* ================= DESIGN PROCESS ================= */}
        <div className="mb-32">
          <FadeIn>
            <SectionHeading>Design Process</SectionHeading>
          </FadeIn>

          <div className="pl-8 md:pl-24 mb-10 flex flex-col gap-16 md:gap-20">
            {/* Stage 1 */}
            <FadeIn>
              <div className="mb-6">
                <p className="mb-3 text-lg font-semibold font-['Montserrat'] text-black">
                  {designStages[0].stage}
                </p>
                <p className="text-base font-normal font-['Montserrat'] leading-relaxed text-stone-600">
                  {designStages[0].detail}
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-[603fr_438fr] gap-8 md:gap-20">
                <div className="md:col-span-2 w-full">
                  <img
                    src={gallery.LowWF}
                    alt="Low-fidelity wireframe"
                    className="block h-auto w-full"
                  />
                </div>
              </div>
            </FadeIn>

            {/* Stage 2 */}
            <FadeIn delay={0.1}>
              <div className="mb-6">
                <p className="mb-3 text-lg font-semibold font-['Montserrat'] text-black">
                  {designStages[1].stage}
                </p>
                <p className="text-base font-normal font-['Montserrat'] leading-relaxed text-stone-600">
                  {designStages[1].detail}
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-[603fr_438fr] gap-8 md:gap-20">
                <div className="md:col-span-2 w-full">
                  <img
                    src={gallery.HighWF}
                    alt="High-fidelity wireframe"
                    className="block h-auto w-full"
                  />
                </div>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.2}>
            <p className="pl-8 md:pl-24 text-base font-normal font-['Montserrat'] text-stone-600 leading-relaxed">
              Two design principles anchored the visual system:{" "}
              <strong className="font-semibold text-black">Gestalt principles</strong>{" "}
              (grouping related elements, using size/color contrast for
              figure-ground separation so users focus on what matters) and{" "}
              <strong className="font-semibold text-black">consistency</strong>{" "}
              across buttons, forms, menus, and color usage sitewide, to keep
              the experience predictable across every role's dashboard.
            </p>
          </FadeIn>
        </div>

        

        {/* ================= KEY FEATURE: SEARCH ================= */}
        <div className="mb-32">
          <FadeIn>
            <SectionHeading>Key Feature: Xenior Search</SectionHeading>
          </FadeIn>
          <div className="pl-8 md:pl-24">
            <FadeIn>
              <p className="text-base font-normal font-['Montserrat'] text-black leading-relaxed mb-6">
                The most technically significant UX win in the project was
                replacing direct SQL queries with{" "}
                <strong className="font-semibold">Meilisearch</strong> as the
                search layer:
              </p>
            </FadeIn>
            <ul className="space-y-3 mb-6">
              {searchFeatures.map((f, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <li className="flex items-start gap-3 text-base font-normal font-['Montserrat'] text-stone-600 leading-relaxed">
                    <span className="mt-2.5 w-1 h-1 rounded-full bg-black shrink-0" />
                    {f}
                  </li>
                </FadeIn>
              ))}
            </ul>
            <FadeIn>
              <p className="text-base font-normal font-['Montserrat'] text-stone-600 leading-relaxed ">
                Architecturally, writes go to MySQL for data integrity, then
                sync immediately to Meilisearch, which acts as a denormalized
                "search catalog" optimized purely for fast retrieval — keeping
                the source of truth safe while keeping search fast.
              </p>
            </FadeIn>
          </div>
        </div>

        {/* ================= KEY FEATURE: FORM ================= */}
        <div className="mb-32">
          <FadeIn>
            <SectionHeading>Key Feature: Xenior Form</SectionHeading>
          </FadeIn>
          <div className="pl-8 md:pl-24">
            <FadeIn>
              <p className="text-base font-normal font-['Montserrat'] text-black leading-relaxed mb-6">
                Xenior Form digitizes the evaluation process end-to-end:
              </p>
            </FadeIn>
            <ul className="space-y-3">
              {formFeatures.map((f, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <li className="flex items-start gap-3 text-base font-normal font-['Montserrat'] text-stone-600 leading-relaxed">
                    <span className="mt-2.5 w-1 h-1 rounded-full bg-black shrink-0" />
                    {f}
                  </li>
                </FadeIn>
              ))}
            </ul>
          </div>
        </div>

        {/* ================= KEY FEATURE: INTERFACE ================= */}
        <div className="mb-32">
          <FadeIn>
            <SectionHeading>Key Feature: Xenior Interface</SectionHeading>
          </FadeIn>

          <div className="pl-8 md:pl-24">
            <FadeIn>
              <p className="text-base font-normal font-['Montserrat'] text-black leading-relaxed mb-6">
                The interface redesign focused on making the system easier to
                navigate across different roles. Instead of giving every user
                the same generic dashboard, I structured the interface around
                the information and actions most relevant to each workflow.
              </p>
            </FadeIn>

            <ul className="space-y-3">
              <FadeIn>
                <li className="flex items-start gap-3 text-base font-normal font-['Montserrat'] text-stone-600 leading-relaxed">
                  <span className="mt-2.5 w-1 h-1 rounded-full bg-black shrink-0" />
                  Role-based dashboards with different information priorities for
                  Subject Owners, Advisors, Committee members, Students, and Admins
                </li>
              </FadeIn>

              <FadeIn delay={0.1}>
                <li className="flex items-start gap-3 text-base font-normal font-['Montserrat'] text-stone-600 leading-relaxed">
                  <span className="mt-2.5 w-1 h-1 rounded-full bg-black shrink-0" />
                  Clearer navigation and information hierarchy to make key actions
                  easier to find
                </li>
              </FadeIn>

              <FadeIn delay={0.2}>
                <li className="flex items-start gap-3 text-base font-normal font-['Montserrat'] text-stone-600 leading-relaxed">
                  <span className="mt-2.5 w-1 h-1 rounded-full bg-black shrink-0" />
                  Upcoming Deadlines and progress information to help users see what
                  needs attention at a glance
                </li>
              </FadeIn>

              <FadeIn delay={0.3}>
                <li className="flex items-start gap-3 text-base font-normal font-['Montserrat'] text-stone-600 leading-relaxed">
                  <span className="mt-2.5 w-1 h-1 rounded-full bg-black shrink-0" />
                  A public landing page that introduces the system and guides users
                  toward project discovery
                </li>
              </FadeIn>
            </ul>
          </div>
        </div>

        {/* ================= USABILITY FINDINGS ================= */}
        <div className="mb-32">
          <FadeIn>
            <SectionHeading>Usability Findings (UAT)</SectionHeading>
          </FadeIn>
          <div className="pl-8 md:pl-24">
            <FadeIn>
              <p className="text-lg font-semibold font-['Montserrat'] text-black mb-4">
                What worked
              </p>
              <ul className="space-y-3 mb-10">
                {uatWorked.map((w, i) => (
                  <li key={i} className="flex items-start gap-3 text-base font-normal font-['Montserrat'] text-stone-600 leading-relaxed">
                    <span className="mt-2.5 w-1 h-1 rounded-full bg-black shrink-0" />
                    {w}
                  </li>
                ))}
              </ul>
            </FadeIn>

            <FadeIn>
              <p className="text-lg font-semibold font-['Montserrat'] text-black mb-4">
                Issues identified and resolved within project scope
              </p>
              <div className="space-y-4 mb-10">
                {uatIssues.map((row, i) => (
                  <div key={i} className="flex flex-col sm:flex-row gap-1 sm:gap-8 pb-4 border-b border-stone-100 last:border-0">
                    <p className="w-full sm:w-96 shrink-0 text-base font-['Montserrat'] text-black">
                      {row.issue}
                    </p>
                    <p className="text-base font-['Montserrat'] text-stone-600 font-medium">
                      {row.resolution}
                    </p>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn>
              <p className="text-lg font-semibold font-['Montserrat'] text-black mb-3">
                Deferred to future development
              </p>
              <p className="text-base font-normal font-['Montserrat'] text-stone-600 leading-relaxed">
                Semantic search (to handle queries that don't exactly match
                project titles), a carousel-style project showcase on the
                landing page, merging Announcements with the Senior Project
                Manual section, and deadline notifications.
              </p>
            </FadeIn>
          </div>
        </div>

        {/* ================= OUTCOME ================= */}
        <div className="mb-32">
          <FadeIn>
            <SectionHeading>Outcome</SectionHeading>
          </FadeIn>
          <FadeIn>
            <p className="pl-8 md:pl-24 text-base font-normal font-['Montserrat'] text-stone-600 leading-relaxed">
              Xenior+ shipped as a fully implemented, deployed system covering
              all three planned modules (Form, Search, Interface), validated
              through system verification testing and UAT with instructors,
              teaching assistants, and students. The evidence-based approach —
              benchmarking search performance, load-testing for capacity
              limits, and structuring UAT feedback into a tracked action
              table — meant the team could point to concrete, measured
              improvements rather than subjective claims, while also leaving a
              clear, prioritized roadmap for what comes next.
            </p>
          </FadeIn>
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