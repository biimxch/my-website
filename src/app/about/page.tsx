"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Eye, Mail } from "lucide-react";
import { personal } from "@/lib/data";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";

const tokens = {
  "--ink": "#111111",
  "--canvas": "#ffffff",
  "--warm": "#ffffff",
  "--hair": "#dedede",
} as React.CSSProperties;

const ease = [0.22, 1, 0.36, 1] as const;

const experiences = [
  {
    title: "Teaching Assistant (Software Engineering)",
    period: "Aug 2025 – Dec 2025",
    org: "Department of Computer Engineering, KMUTT",
    bullets: [
      "Mentored 60+ students and standardized UML/SRS documentation",
      "Evaluated deliverables based on Software Architecture and UI/UX principles",
    ],
  },
  {
    title: "Game Development Intern",
    period: "Jun 2025 – Aug 2025",
    org: "Media Technology and Applied Arts, KMUTT",
    bullets: [
      "Developed core mechanics for a 3D Endless Runner using Unreal Engine 5 Blueprints",
      "Engineered a persistent high-score system and progressive difficulty scaling",
      "Optimized UX within a 3D environment using visual hierarchy and character movement tuning",
    ],
  },
];

const education = [
  {
    school: "King Mongkut's University of Technology Thonburi",
    period: "Jun 2022 – Jul 2025",
    degree: "B.Eng. in Computer Engineering · GPA 3.01",
    description:
      "Completed coursework in Computer Engineering, Software Engineering, and Humanities Computing. Led the development of Xenior+, a role-based web platform for managing academic projects at KMUTT, with a focus on user navigation, project evaluation, and search. Also completed a game development internship and served as a Teaching Assistant, building experience in front-end development, wireframing, and user research. Passionate about creating seamless and enjoyable user experiences.",
  },
];

const skills = [
  {
    label: "UX/UI Design & Research",
    items: ["Design System", "Prototyping", "Figma", "Framer"],
  },
  {
    label: "Front-End Development",
    items: ["Next.js", "React", "Tailwind CSS", "TypeScript", "JavaScript"],
  },
  {
    label: "Tools",
    items: ["Adobe Photoshop", "Adobe Illustrator", "Procreate", "CapCut"],
  },
  {
    label: "Languages",
    items: ["Thai (Native)", "English (Intermediate)"],
  },
];

const info = [
  { label: "Looking for", value: "UX/UI Designer roles" },
  { label: "Education", value: "B.Eng. Computer Engineering, KMUTT, class of 2026" },
  { label: "Based in", value: "Bangkok, Thailand" },
];

/* ---------- building blocks ---------- */

// Same container width as the case studies so left edges align
const wrap = "mx-auto max-w-[1120px] px-5";
const body = "text-base leading-[1.5] tracking-[-0.01em] text-[#414141]";
const btn =
  "group inline-flex min-h-12 items-center gap-2 rounded-full border-2 border-black px-4 py-3 text-xs font-medium uppercase tracking-[0.1em] transition-colors sm:px-5 sm:text-sm";

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
  label,
  title,
  children,
}: {
  label: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <FadeIn className={`${wrap} grid gap-8 py-12 sm:py-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:gap-16 lg:py-24`}>
        <div>
          <Label>{label}</Label>
          <h2 className="mt-3 text-[clamp(2.25rem,5vw,3.25rem)] font-semibold leading-[1.15] tracking-[-0.035em] text-[var(--ink)]">
            {title}
          </h2>
        </div>
        <div>{children}</div>
      </FadeIn>
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

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className={`flex gap-3 ${body}`}>
          <span aria-hidden className="mt-[0.6em] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--ink)]" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

const linkClass = `${body} text-[var(--ink)] transition-opacity hover:opacity-60`;

/* ---------- page ---------- */

export default function About() {
  return (
    <main
      style={tokens}
      className="work-case-study min-h-screen bg-white font-['Montserrat'] text-[var(--ink)] antialiased selection:bg-black selection:text-white"
    >
      <Navbar />

      <section className="relative z-10 bg-white px-5 pt-[clamp(6rem,10vw,9rem)]">
        <div className="mx-auto flex w-full max-w-[1120px] flex-col gap-2 pb-16 md:pb-24">
          <div className="mb-12 flex items-end justify-between md:mb-16">
            <h1 className="text-left font-['Montserrat'] text-[clamp(4rem,10vw,8rem)] font-medium leading-[0.8] tracking-[-0.06em] text-black">
              About.
            </h1>
          </div>

          <div className="grid grid-cols-1 items-start gap-10 sm:gap-12 lg:grid-cols-2 lg:items-center lg:gap-x-20">
            <div className="lg:self-center">
              <FadeIn delay={0.1}>
                <h2 className="font-['Montserrat'] text-[clamp(1.875rem,3.5vw,2.75rem)] font-medium leading-[1] tracking-[-0.05em] text-black">
                  <span className="mb-2 block">Hello, I&apos;m</span>
                  <span className="block">{personal.name}</span>
                </h2>

                <p className="mt-4 max-w-xl font-['Montserrat'] text-lg leading-relaxed tracking-tight text-neutral-800 md:text-xl">
                  UX/UI designer who turns complex, role-based systems into clear interfaces, then builds them in Next.js.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <Link
                    href="/work"
                    className="inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-full border-2 border-black bg-black px-5 font-['Montserrat'] text-sm font-medium uppercase tracking-[0.1em] text-white transition-colors hover:bg-white hover:text-black"
                  >
                    See all work
                    <ArrowUpRight size={16} aria-hidden="true" />
                  </Link>

                  <a
                    href="/Resume_Chompunuch_UXUI.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-full border-2 border-black px-5 font-['Montserrat'] text-sm font-medium uppercase tracking-[0.1em] text-black transition-colors hover:bg-black hover:text-white"
                  >
                    View resume
                    <Eye size={16} aria-hidden="true" />
                  </a>
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <ul className="mt-8 space-y-2 border-t border-black/15 pt-5 font-['Montserrat'] text-sm leading-relaxed text-neutral-700 md:text-base">
                  <li><span className="font-medium text-black">Looking for:</span> UX/UI Designer roles</li>
                  <li><span className="font-medium text-black">Education:</span> B.Eng. Computer Engineering, KMUTT, class of 2026</li>
                  <li><span className="font-medium text-black">Based in:</span> {personal.location}</li>
                </ul>
              </FadeIn>
            </div>

            <FadeIn delay={0.3}>
              <div className="relative order-2 w-full max-w-[460px] justify-self-center lg:justify-self-end">
                <Image
                  src="/images/profile.jpg"
                  alt={personal.name}
                  width={974}
                  height={1230}
                  priority
                  sizes="(max-width: 1024px) 100vw, 460px"
                  className="block h-auto w-full object-contain"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <Section label="Experience" title="Work History">
        <div className="border-t border-[var(--hair)]">
          {experiences.map((exp) => (
            <article key={exp.title} className="border-b border-[var(--hair)] py-8 first:pt-6">
              <Label>{exp.period}</Label>
              <H3 className="mt-2">{exp.title}</H3>
              <p className={`${body} mb-5 mt-2`}>{exp.org}</p>
              <Bullets items={exp.bullets} />
            </article>
          ))}
        </div>
      </Section>

      <Section label="Academic Background" title="Education">
        {education.map((edu) => (
          <article key={edu.school}>
            <Label>{edu.period}</Label>
            <H3 className="mt-2">{edu.school}</H3>
            <p className="mt-2 text-base font-medium leading-[1.5] text-[var(--ink)]">{edu.degree}</p>
            <p className={`${body} mt-5`}>{edu.description}</p>
          </article>
        ))}
      </Section>

      <Section label="Expertise" title="Skills">
        <div className="border-t border-[var(--hair)]">
          {skills.map((group) => (
            <div key={group.label} className="border-b border-[var(--hair)] py-6 first:pt-6">
              <H3 className="mb-4">{group.label}</H3>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-[var(--hair)] bg-white px-3 py-1 text-sm text-[var(--ink)]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <div id="contact" className="scroll-mt-24">
        <Section label="Get in touch" title="Contact">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div className="flex flex-col gap-2">
              <dt className="text-xs font-semibold leading-[1.4] tracking-[0.1em] text-[var(--ink)]">Email</dt>
              <dd>
                <a href={`mailto:${personal.email}`} className={linkClass}>
                  {personal.email}
                </a>
              </dd>
            </div>
            <div className="flex flex-col gap-2">
              <dt className="text-xs font-semibold leading-[1.4] tracking-[0.1em] text-[var(--ink)]">Phone</dt>
              <dd>
                <a href={`tel:${personal.phone.replace(/\s/g, "")}`} className={linkClass}>
                  {personal.phone}
                </a>
              </dd>
            </div>
            <div className="flex flex-col gap-2">
              <dt className="text-xs font-semibold leading-[1.4] tracking-[0.1em] text-[var(--ink)]">LinkedIn</dt>
              <dd>
                <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className={linkClass}>
                  linkedin.com/in/chompunuch-auttnam
                </a>
              </dd>
            </div>
            <div className="flex flex-col gap-2">
              <dt className="text-xs font-semibold leading-[1.4] tracking-[0.1em] text-[var(--ink)]">GitHub</dt>
              <dd>
                <a href={personal.github} target="_blank" rel="noopener noreferrer" className={linkClass}>
                  github.com/biimxch
                </a>
              </dd>
            </div>
            <div className="flex flex-col gap-2">
              <dt className="text-xs font-semibold leading-[1.4] tracking-[0.1em] text-[var(--ink)]">Address</dt>
              <dd className={body}>{personal.location}</dd>
            </div>
          </dl>
        </Section>
      </div>

      <Footer />
    </main>
  );
}