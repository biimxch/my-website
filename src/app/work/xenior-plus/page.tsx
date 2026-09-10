"use client";

import React from "react";
import Link from "next/link";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";

const gallery = {
  hero: "/images/xenior+/hero.jpg",
  full: "/images/xenior+/full-screen.svg",
  half1: "/images/xenior+/detail-1.jpg",
  half2: "/images/xenior+/detail-2.jpg",
};

const moreProjects = [
  { name: "Runverr", image: "/images/projects/runverr-thumb.jpg", href: "/work/runverr" },
  { name: "Graphic Design", image: "/images/projects/graphic-thumb.jpg", href: "/work/graphic-design" },
  { name: "Portfolio Site", image: "/images/projects/portfolio-thumb.jpg", href: "/work/portfolio-site" },
];

const meta = [
  { label: "Role", value: "UX/UI Designer & Frontend Developer" },
  { label: "Duration", value: "2 semesters (~8 months)" },
  { label: "Team", value: "3 members — primary executor for UX/UI and frontend" },
  { label: "Stack", value: "Next.js, React, Tailwind CSS, Flask API, MySQL, Meilisearch" },
];

const problems = [
  {
    title: "Fragmented evaluation",
    detail:
      "Instructors couldn't complete assessments inside Xenior itself. Scoring happened in a separate Excel file shared across many project groups, so evaluators had to manually scroll and search for the right group before scoring — a slow, error-prone process disconnected from the platform.",
  },
  {
    title: "Rigid search",
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
    stage: "Mid-fidelity wireframes (Canva)",
    detail:
      "Closer-to-real proportions and grouping for the key screens: landing page, search, role-based home dashboards, and the evaluation flow (both the form-builder and form-filling views).",
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

const searchResults = [
  { keyword: "project", sql: "2.67", meili: "1.24", speedup: "2.14×" },
  { keyword: "database", sql: "1.40", meili: "0.41", speedup: "3.41×" },
  { keyword: "web application", sql: "2.82", meili: "1.25", speedup: "2.25×" },
  { keyword: "ai", sql: "5.29", meili: "1.23", speedup: "4.30×" },
  { keyword: "(empty string)", sql: "10.17", meili: "1.26", speedup: "8.04×" },
];

const loadTesting = [
  "1–20 concurrent users: 100% success rate, response time scaling from ~1.0s to ~4.2s",
  "50 concurrent users: success rate dropped to 24.7% as the system hit a resource bottleneck",
  "100 concurrent users: complete failure (0% success), consistent with connection-pool exhaustion",
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

export default function XeniorPlusCaseStudy() {
  return (
    <main className="bg-white min-h-screen text-black antialiased selection:bg-[#081F5C]/10 selection:text-[#081F5C]">
      <Navbar />

      <div className="section-container pt-[clamp(6rem,10vw,9rem)] pb-24">
        {/* ================= HERO BANNER =================
        <div className="w-full aspect-[1120/549] bg-zinc-600 overflow-hidden mb-20">
          <img src={gallery.hero} alt="Xenior+ hero" className="w-full h-full object-cover" />
        </div> */}

        {/* ================= TITLE + DESCRIPTION ================= */}
        <div className="grid grid-cols-1 md:grid-cols-[2fr_4fr] gap-10 md:gap-24 mb-12">
          <h1 className="text-8xl md:text-8xl font-medium font-['Montserrat'] text-black leading-tight">
            Xenior+
          </h1>
          <p className="text-lg md:text-base font-normal font-['Montserrat'] text-black leading-relaxed">
            A role-based web platform extending the Computer Engineering
            Department's original Xenior system, built to manage senior
            projects and work-integrated learning at KMUTT. It gives
            instructors, teaching assistants, and students one place to
            evaluate projects, search past project archives, and track
            progress — through three integrated modules: Xenior Form,
            Xenior Search, and Xenior Interface.
          </p>
        </div>

        {/* ================= META INFO ================= */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-32 pb-12 border-b border-stone-200">
          {meta.map((m, i) => (
            <div key={i}>
              <p className="text-xs uppercase tracking-widest text-stone-400 font-['Montserrat'] mb-2">
                {m.label}
              </p>
              <p className="text-sm text-black font-['Montserrat'] leading-relaxed">
                {m.value}
              </p>
            </div>
          ))}
        </div>

        {/* ================= MEDIA GALLERY ================= */}
        <div className="flex flex-col gap-16 md:gap-20 mb-32">
          <div className="w-full aspect-[1124/629] bg-stone-200 overflow-hidden">
            <img src={gallery.full} alt="Xenior+ full screen" className="w-full h-full object-cover" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-[603fr_438fr] gap-8 md:gap-20">
            <div className="w-full aspect-[603/571] bg-stone-200 overflow-hidden">
              <img src={gallery.half1} alt="Xenior+ detail 1" className="w-full h-full object-cover" />
            </div>
            <div className="w-full aspect-[438/571] bg-stone-200 overflow-hidden">
              <img src={gallery.half2} alt="Xenior+ detail 2" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* ================= PROBLEM STATEMENT ================= */}
        <div className="mb-32">
          <SectionHeading>Problem Statement</SectionHeading>
          <div className="pl-8 md:pl-24 space-y-8">
            {problems.map((p, i) => (
              <div key={i} className="flex gap-4">
                <span className="text-xl font-semibold font-['Montserrat'] text-[#334EAC] shrink-0">
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
            ))}
          </div>
        </div>

        {/* ================= OBJECTIVES ================= */}
        <div className="mb-32">
          <SectionHeading>Objectives</SectionHeading>
          <ul className="pl-8 md:pl-24 space-y-3">
            {objectives.map((o, i) => (
              <li key={i} className="flex items-start gap-3 text-base font-normal font-['Montserrat'] text-black leading-relaxed">
                <span className="mt-2.5 w-1 h-1 rounded-full bg-black shrink-0" />
                {o}
              </li>
            ))}
          </ul>
        </div>

        {/* ================= USERS & ROLES ================= */}
        <div className="mb-32">
          <SectionHeading>Users &amp; Roles</SectionHeading>
          <div className="pl-8 md:pl-24 space-y-6">
            {roles.map((r, i) => (
              <div key={i} className="flex flex-col sm:flex-row gap-1 sm:gap-8 pb-6 border-b border-stone-200 last:border-0">
                <p className="w-full sm:w-64 shrink-0 text-lg font-semibold font-['Montserrat'] text-black">
                  {r.role}
                </p>
                <p className="text-base font-normal font-['Montserrat'] text-stone-600 leading-relaxed">
                  {r.responsibilities}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ================= DESIGN PROCESS ================= */}
        <div className="mb-32">
          <SectionHeading>Design Process</SectionHeading>
          <div className="pl-8 md:pl-24 space-y-8 mb-10">
            {designStages.map((s, i) => (
              <div key={i}>
                <p className="text-lg font-semibold font-['Montserrat'] text-black mb-1">
                  {s.stage}
                </p>
                <p className="text-base font-normal font-['Montserrat'] text-stone-600 leading-relaxed">
                  {s.detail}
                </p>
              </div>
            ))}
          </div>
          <p className="pl-8 md:pl-24 text-base font-normal font-['Montserrat'] text-stone-600 leading-relaxed ">
            Two design principles anchored the visual system:{" "}
            <strong className="font-semibold text-black">Gestalt principles</strong>{" "}
            (grouping related elements, using size/color contrast for
            figure-ground separation so users focus on what matters) and{" "}
            <strong className="font-semibold text-black">consistency</strong>{" "}
            across buttons, forms, menus, and color usage sitewide, to keep
            the experience predictable across every role's dashboard.
          </p>
        </div>

        {/* ================= KEY FEATURE: SEARCH ================= */}
        <div className="mb-32">
          <SectionHeading>Key Feature: Xenior Search</SectionHeading>
          <div className="pl-8 md:pl-24">
            <p className="text-base font-normal font-['Montserrat'] text-black leading-relaxed  mb-6">
              The most technically significant UX win in the project was
              replacing direct SQL queries with{" "}
              <strong className="font-semibold">Meilisearch</strong> as the
              search layer:
            </p>
            <ul className="space-y-3 mb-6">
              {searchFeatures.map((f, i) => (
                <li key={i} className="flex items-start gap-3 text-base font-normal font-['Montserrat'] text-stone-600 leading-relaxed">
                  <span className="mt-2.5 w-1 h-1 rounded-full bg-black shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
            <p className="text-base font-normal font-['Montserrat'] text-stone-600 leading-relaxed ">
              Architecturally, writes go to MySQL for data integrity, then
              sync immediately to Meilisearch, which acts as a denormalized
              "search catalog" optimized purely for fast retrieval — keeping
              the source of truth safe while keeping search fast.
            </p>
          </div>
        </div>

        {/* ================= KEY FEATURE: FORM ================= */}
        <div className="mb-32">
          <SectionHeading>Key Feature: Xenior Form</SectionHeading>
          <div className="pl-8 md:pl-24">
            <p className="text-base font-normal font-['Montserrat'] text-black leading-relaxed  mb-6">
              Xenior Form digitizes the evaluation process end-to-end:
            </p>
            <ul className="space-y-3">
              {formFeatures.map((f, i) => (
                <li key={i} className="flex items-start gap-3 text-base font-normal font-['Montserrat'] text-stone-600 leading-relaxed">
                  <span className="mt-2.5 w-1 h-1 rounded-full bg-black shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ================= RESULTS ================= */}
        <div className="mb-32">
          <SectionHeading>Results</SectionHeading>
          <div className="pl-8 md:pl-24">
            <p className="text-lg font-semibold font-['Montserrat'] text-black mb-4">
              Search performance (SQL vs. Meilisearch)
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-stone-300">
                    <th className="py-2 pr-4 text-xs uppercase tracking-widest text-stone-400 font-['Montserrat'] font-normal">Keyword</th>
                    <th className="py-2 pr-4 text-xs uppercase tracking-widest text-stone-400 font-['Montserrat'] font-normal">SQL (s)</th>
                    <th className="py-2 pr-4 text-xs uppercase tracking-widest text-stone-400 font-['Montserrat'] font-normal">Meilisearch (s)</th>
                    <th className="py-2 text-xs uppercase tracking-widest text-stone-400 font-['Montserrat'] font-normal">Speedup</th>
                  </tr>
                </thead>
                <tbody>
                  {searchResults.map((row, i) => (
                    <tr key={i} className="border-b border-stone-100">
                      <td className="py-3 pr-4 text-base font-['Montserrat'] text-black">{row.keyword}</td>
                      <td className="py-3 pr-4 text-base font-['Montserrat'] text-stone-600">{row.sql}</td>
                      <td className="py-3 pr-4 text-base font-['Montserrat'] text-stone-600">{row.meili}</td>
                      <td className="py-3 text-base font-['Montserrat'] text-[#334EAC] font-semibold">{row.speedup}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-base font-normal font-['Montserrat'] text-stone-600 leading-relaxed mb-10">
              <strong className="font-semibold text-black">Average speedup: 4.14×</strong>{" "}
              — most pronounced on broad, unfiltered queries, where
              Meilisearch returned results in 1.26s versus 10.17s for direct SQL.
            </p>

            <p className="text-lg font-semibold font-['Montserrat'] text-black mb-4">
              Load testing
            </p>
            <ul className="space-y-3">
              {loadTesting.map((l, i) => (
                <li key={i} className="flex items-start gap-3 text-base font-normal font-['Montserrat'] text-stone-600 leading-relaxed">
                  <span className="mt-2.5 w-1 h-1 rounded-full bg-black shrink-0" />
                  {l}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ================= USABILITY FINDINGS ================= */}
        <div className="mb-32">
          <SectionHeading>Usability Findings (UAT)</SectionHeading>
          <div className="pl-8 md:pl-24">
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

            <p className="text-lg font-semibold font-['Montserrat'] text-black mb-4">
              Issues identified and resolved within project scope
            </p>
            <div className="space-y-4 mb-10">
              {uatIssues.map((row, i) => (
                <div key={i} className="flex flex-col sm:flex-row gap-1 sm:gap-8 pb-4 border-b border-stone-100 last:border-0">
                  <p className="w-full sm:w-96 shrink-0 text-base font-['Montserrat'] text-black">
                    {row.issue}
                  </p>
                  <p className="text-base font-['Montserrat'] text-[#334EAC] font-medium">
                    {row.resolution}
                  </p>
                </div>
              ))}
            </div>

            <p className="text-lg font-semibold font-['Montserrat'] text-black mb-3">
              Deferred to future development
            </p>
            <p className="text-base font-normal font-['Montserrat'] text-stone-600 leading-relaxed">
              Semantic search (to handle queries that don't exactly match
              project titles), a carousel-style project showcase on the
              landing page, merging Announcements with the Senior Project
              Manual section, and deadline notifications.
            </p>
          </div>
        </div>

        {/* ================= OUTCOME ================= */}
        <div className="mb-32">
          <SectionHeading>Outcome</SectionHeading>
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
        </div>

        {/* ================= MORE PROJECTS ================= */}
        <div>
          <SectionHeading>More Projects</SectionHeading>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10">
            {moreProjects.map((project, i) => (
              <Link key={i} href={project.href} className="group block">
                <div className="w-full aspect-[341/246] bg-stone-200 overflow-hidden mb-3">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <p className="text-base font-normal font-['Montserrat'] text-black">
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