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

const dir = "/images/xenior+/";
const gallery = {
  full: `${dir}xenior_thump.png`,
  LowWF: `${dir}LowWF-figure-15.jpg`,
  HighWF: `${dir}HighWF-figure-15.png`,
  form: [
    `${dir}fullpage_snapshot_xenior-dev_cpe_kmutt_ac_th_2026-09-09-06-18-17.png`,
    `${dir}fullpage_snapshot_xenior-dev_cpe_kmutt_ac_th_2026-09-09-06-16-30.png`,
    `${dir}fullpage_snapshot_xenior-dev_cpe_kmutt_ac_th_2026-09-09-06-17-14.png`,
  ],
  interface: `${dir}fullpage_snapshot_xenior-dev_cpe_kmutt_ac_th_2026-09-09-06-15-49.png`,
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
    responsibilities: "Searches and accesses prior years' projects as reference material for their own work",
  },
  {
    role: "Admin",
    responsibilities: "Manages users, evaluation forms, and all project data across the system",
  },
];

const round1 = [
  "Show project names instead of student IDs so groups are easier to recognize",
  "Make pending-task cards clickable to filter the table below",
  "Use consistent status wording across screens",
  "Support decimal scores and display a score range for each rubric level",
];

const scores = [
  ["Dashboard", "4.00"],
  ["Feedback system", "3.67"],
  ["Landing page", "3.67"],
  ["Search & filter", "3.67"],
  ["Assessment workflow", "3.33"],
  ["Overall satisfaction", "3.33"],
  ["Overall UI design", "2.67"],
];

const round2 = [
  { lead: "Visual consistency:", text: "The color palette was inconsistent, and colors did not consistently communicate status meaning." },
  { lead: "Navigation:", text: "Instructors had to press Back after reviewing each group, causing them to lose their scroll position." },
  { lead: "Assessment workflow:", text: "Instructors had to switch between screens to read reports and assign scores." },
];

const designStages = [
  {
    stage: "Low-fidelity wireframes (Procreate)",
    detail:
      "Rough layout and information hierarchy, prioritizing speed of iteration and shared understanding within the team before investing in detail.",
    image: gallery.LowWF,
    alt: "Low-fidelity wireframe",
  },
  {
    stage: "High-fidelity wireframes & interactive prototype (Figma)",
    detail:
      "Final color scheme, typography, and UI principles applied, then linked together into a clickable prototype that simulated real navigation and interaction before development began.",
    image: gallery.HighWF,
    alt: "High-fidelity wireframe",
  },
];

const formFeatures = [
  "Dynamic, rubric-based criteria that instructors can configure per assessment",
  "Group and member identification built into the form, so evaluators always know who they're scoring",
  "Report viewing side-by-side with the evaluation form — no more switching screens — with version history to compare current submissions against earlier drafts",
  "Inline comments per criterion, draft-saving, submission locking after deadlines, form duplication across subjects/years, and CSV import",
];

const interfaceFeatures = [
  "Role-based dashboards with different information priorities for Subject Owners, Advisors, Committee members, Students, and Admins",
  "Clearer navigation and information hierarchy to make key actions easier to find",
  "Upcoming Deadlines and progress information to help users see what needs attention at a glance",
  "A public landing page that introduces the system and guides users toward project discovery",
];

const uatWorked = [
  "Instructors responded well to having evaluation centralized in one place, eliminating the download-file / listen-to-presentation / switch-to-Google-Sheets routine",
  "The scoring slider (supporting drag, direct numeric input, and decimals) was well received",
  "Search filtering and autocomplete were rated clearly better than the legacy search across all three user groups",
  'Students specifically valued the "Upcoming Deadlines" view for showing urgency at a glance',
];

const uatIssues = [
  { issue: 'Terminology errors ("Criterion" vs "Criteria" used incorrectly)', resolution: "Fixed" },
  { issue: "Feedback input field wasn't visually prominent enough, risking skipped steps", resolution: "Repositioned" },
  { issue: "Evaluation forms couldn't open in a new tab, making score comparison across groups hard", resolution: "Added new-tab support" },
  { issue: "Form header took up too much space", resolution: "Condensed, with detail moved to a popup" },
  { issue: "No way to resize the report/evaluation panes", resolution: "Added resizable layout" },
  { issue: "Landing page lacked department contact info", resolution: "Added" },
  { issue: "Projects without a cover image left blank space", resolution: "Added category color-coding" },
  { issue: "Instructor dashboard didn't clearly show outstanding vs. total workload", resolution: "Added progress ratio + color coding" },
];

/* ---------- building blocks ---------- */

const wrap = "mx-auto max-w-[1200px] px-5 md:px-12";
const body = "text-base leading-[1.5] tracking-[-0.01em] text-[#414141]";
const tones = { canvas: "bg-[var(--canvas)]", warm: "bg-[var(--warm)]", stone: "bg-[var(--stone)]" };

function FadeIn({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
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
      <FadeIn className={`${wrap} grid gap-8 py-16 md:gap-16 md:py-24 ${hasSideContent ? "md:grid-cols-[1fr_2fr]" : "md:grid-cols-1"}`}>
        <div>
          <Label>{label}</Label>
          <h2 className="mt-3 text-[clamp(2.25rem,5vw,3.25rem)] font-semibold leading-[1.15] tracking-[-0.035em] text-[var(--ink)]">
            {title}
          </h2>
        </div>
        {hasSideContent && <div>{children}</div>}
      </FadeIn>
      {wideContent && <FadeIn className="pb-16 md:pb-24">{wideContent}</FadeIn>}
    </section>
  );
}

function H3({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <h3 className={`text-2xl font-semibold leading-tight tracking-[-0.02em] text-[var(--ink)] ${className}`}>{children}</h3>;
}

type Item = string | { lead: string; text: string };

function Bullets({ items }: { items: Item[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => {
        const text = typeof item === "string";
        return (
          <li key={text ? item : item.lead} className={`flex gap-3 ${body}`}>
            <span aria-hidden className="mt-[0.65em] h-1 w-1 shrink-0 bg-[var(--ink)]" />
            <span>
              {text ? item : (<><strong className="font-semibold text-[var(--ink)]">{item.lead}</strong> {item.text}</>)}
            </span>
          </li>
        );
      })}
    </ul>
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
    <div className={`overflow-hidden bg-white p-4 md:p-8 ${className}`}>
      <img src={src} alt={alt} className={`block h-auto w-full ${imageClassName}`} />
    </div>
  );
}

/* ---------- page ---------- */

export default function XeniorPlusCaseStudy() {
  return (
    <main
      style={tokens}
      className="work-case-study min-h-screen bg-white text-[var(--ink)] antialiased selection:bg-black selection:text-white"
    >
      <Navbar />

      {/* Hero */}
      <section className="bg-[var(--canvas)]">
        <div className={`${wrap} pb-16 pt-[clamp(6rem,10vw,9rem)] md:pb-24`}>
          <FadeIn className="mb-16 grid gap-8 md:grid-cols-[1fr_400px] md:gap-16">
            <h1 className="text-[clamp(3.75rem,10vw,6.5rem)] font-semibold leading-[0.95] tracking-[-0.04em]">Xenior+</h1>
            <p className={`${body} self-end`}>
              An enhanced redesign of KMUTT’s Xenior system, with new features for project evaluation, search, and progress tracking across three integrated modules.
            </p>
          </FadeIn>

          <Shot src={gallery.full} alt="Xenior+ full screen" />

          <dl className="mt-16 grid grid-cols-2 gap-x-8 gap-y-8 md:grid-cols-4">
            {meta.map((m) => (
              <div key={m.label}>
                <dt><Label className="mb-2">{m.label}</Label></dt>
                <dd className="text-sm leading-[1.4] text-[var(--ink)]">{m.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <Section label="Context" title="Problem Statement" tone="warm">
        <div className="grid gap-4 sm:grid-cols-2">
          {problems.map((p) => (
            <div key={p.title} className="border border-[var(--hair)] bg-white p-6 md:p-8">
              <H3 className="mb-3">{p.title}</H3>
              <p className="text-sm leading-[1.5] text-[#414141]">{p.detail}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section label="Context" title="Objectives">
        <Bullets items={objectives} />
      </Section>

      <Section label="Context" title="Users & Roles" tone="warm">
        <div className="grid gap-4 sm:grid-cols-2">
          {roles.map((r) => (
            <div key={r.role} className="border border-[var(--hair)] bg-white p-6 md:p-8">
              <H3 className="mb-3">{r.role}</H3>
              <p className="text-sm leading-[1.5] text-[#414141]">{r.responsibilities}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section label="Research" title="User Research & Evaluation">
        <p className={`${body} mb-12`}>
          Before moving into final UI design and UAT, I conducted two rounds of evaluation with instructors to understand usability issues and validate design decisions.
        </p>

        <H3 className="mb-3">Round 1 — Instructor Feedback</H3>
        <p className={`${body} mb-6`}>
          After the Phase 1 presentation, I collected feedback from <strong className="font-semibold text-[var(--ink)]">5 instructors</strong> on the home page, assessment flow, and rubric. Recurring findings included:
        </p>
        <Bullets items={round1} />

        <H3 className="mb-3 mt-14">Round 2 — In-depth Interviews & Satisfaction Ratings</H3>
        <p className={`${body} mb-6`}>
          I conducted in-depth interviews with instructors and asked them to rate <strong className="font-semibold text-[var(--ink)]">7 areas on a 1–5 scale</strong>. I grouped the identified pain points by priority.
        </p>
        <table className="mb-10 w-full border-collapse text-base">
          <caption className="sr-only">Average satisfaction score by area, 1 to 5</caption>
          <thead>
            <tr className="border-b border-[var(--ink)] text-left">
              <th scope="col" className="py-3 font-semibold">Area</th>
              <th scope="col" className="py-3 text-right font-semibold">Avg. Score</th>
            </tr>
          </thead>
          <tbody>
            {scores.map(([area, score]) => (
              <tr key={area} className="border-b border-[var(--hair)]">
                <td className="py-3 text-[#414141]">{area}</td>
                <td className="py-3 text-right text-sm text-[var(--ink)]">{score}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className={`${body} mb-4 text-[var(--ink)]`}>The highest-priority findings were:</p>
        <Bullets items={round2} />
        <p className={`${body} mt-8`}>
          These findings were used to refine the interface and assessment workflow before the final UAT.
        </p>
      </Section>

      <Section
        label="Design"
        title="Design Process"
        tone="warm"
        wideContent={
          <div className={`${wrap} grid grid-cols-1 items-stretch gap-10 md:grid-cols-2 md:gap-12`}>
            {designStages.map((s) => (
              <figure key={s.stage}>
                <Shot
                  src={s.image}
                  alt={s.alt}
                  className="aspect-[4/3]"
                  imageClassName="h-full object-contain"
                />
                <figcaption className="mt-5">
                  <H3 className="md:min-h-[2.5em]">{s.stage}</H3>
                  <p className={`${body} mt-2`}>{s.detail}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        }
      />

      <Section
        label="Feature"
        title="Key Feature: Xenior Form"
        wideContent={
          <ImageCarousel
          label="Xenior Form screens"
          images={gallery.form.map((src, index) => ({
            src,
            alt: `Xenior Form screen ${index + 1}`,
          }))}
          />
        }
      >
        <p className={`${body} mb-6 text-[var(--ink)]`}>Xenior Form digitizes the evaluation process end-to-end:</p>
        <Bullets items={formFeatures} />
      </Section>

      <Section label="Feature" title="Key Feature: Xenior Interface" tone="warm">
        <p className={`${body} mb-6`}>
          The interface redesign focused on making the system easier to navigate across different roles. Instead of giving every user the same generic dashboard, I structured the interface around the information and actions most relevant to each workflow.
        </p>
        <Bullets items={interfaceFeatures} />
        <div className="mt-10">
          <Shot src={gallery.interface} alt="Xenior Interface screen" />
        </div>
      </Section>

      <Section label="Testing" title="Usability Testing & Iteration">
        <H3 className="mb-4">What worked</H3>
        <Bullets items={uatWorked} />

        <H3 className="mb-2 mt-12">Issues identified and resolved within project scope</H3>
        <ul>
          {uatIssues.map((row) => (
            <li
              key={row.issue}
              className="flex flex-col gap-2 border-b border-[var(--hair)] py-4 sm:flex-row sm:items-start sm:justify-between sm:gap-8"
            >
              <p className="text-base leading-snug text-[var(--ink)]">{row.issue}</p>
              <span className="w-fit shrink-0 border border-[var(--hair)] bg-white px-3 py-1 text-xs tracking-[0.1em]">
                {row.resolution}
              </span>
            </li>
          ))}
        </ul>

        <H3 className="mb-2 mt-12">Deferred to future development</H3>
        <p className={body}>
          Semantic search (to handle queries that don't exactly match project titles), a carousel-style project showcase on the landing page, merging Announcements with the Senior Project Manual section, and deadline notifications.
        </p>
      </Section>

      <Section label="Result" title="Outcome" tone="stone">
        <p className={`${body} max-w-3xl text-[var(--ink)]`}>
          Xenior+ shipped as a fully implemented, deployed system covering all three planned modules (Form, Search, Interface), validated through system verification testing and UAT with instructors, teaching assistants, and students. The evidence-based approach — benchmarking search performance, load-testing for capacity limits, and structuring UAT feedback into a tracked action table — meant the team could point to concrete, measured improvements rather than subjective claims, while also leaving a clear, prioritized roadmap for what comes next.
        </p>
      </Section>

      <CaseStudyMoreProjects projects={moreProjects} />

      <Footer />
    </main>
  );
}