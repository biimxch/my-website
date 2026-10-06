import { personal } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Download, Mail } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";

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

export default function About() {
  return (
    <>
      <Navbar />

      <section
        id="about"
        className="section-container pt-[clamp(6rem,10vw,9rem)] pb-24"
      >
        <div className="mb-32 grid grid-cols-1 items-center gap-12 md:grid-cols-[1.2fr_0.8fr] md:gap-16">
          <FadeIn className="md:self-center">
            <div>
              <h1 className="mb-6 font-['Montserrat'] text-[clamp(3.5rem,7vw,6rem)] font-medium leading-[0.95] tracking-[-0.06em] text-black">
                {personal.name}
              </h1>
              <p className="max-w-2xl font-['Montserrat'] text-lg leading-relaxed text-neutral-800 md:text-xl">
                UX/UI designer who turns complex, role-based systems into clear interfaces, then builds them in Next.js.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/work"
                  className="group inline-flex min-h-12 items-center gap-3 rounded-full border-2 border-black bg-black px-5 py-3 font-['Montserrat'] text-sm font-medium uppercase tracking-[0.12em] text-white transition-colors hover:bg-white hover:text-black"
                >
                  View projects
                  <ArrowUpRight size={16} aria-hidden="true" />
                </Link>
                <a
                  href={personal.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex min-h-12 items-center gap-3 rounded-full border-2 border-black px-5 py-3 font-['Montserrat'] text-sm font-medium uppercase tracking-[0.12em] text-black transition-colors hover:bg-black hover:text-white"
                >
                  Download resume
                  <Download size={16} aria-hidden="true" />
                </a>
                <a
                  href={`mailto:${personal.email}`}
                  className="group inline-flex min-h-12 items-center gap-3 rounded-full border-2 border-black px-5 py-3 font-['Montserrat'] text-sm font-medium uppercase tracking-[0.12em] text-black transition-colors hover:bg-black hover:text-white"
                >
                  Email me
                  <Mail size={16} aria-hidden="true" />
                </a>
              </div>

              <ul className="mt-10 space-y-3 border-t border-black/15 pt-6 font-['Montserrat'] text-sm leading-relaxed text-neutral-700 md:text-base">
                <li><span className="font-medium text-black">Looking for:</span> UX/UI Designer roles</li>
                <li><span className="font-medium text-black">Education:</span> B.Eng. Computer Engineering, KMUTT, class of 2026</li>
                <li><span className="font-medium text-black">Based in:</span> Bangkok, Thailand</li>
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="relative mx-auto w-full max-w-sm md:ml-auto">
              <Image
                src="/images/profile.jpg"
                alt={personal.name}
                width={974}
                height={1230}
                sizes="(max-width: 768px) 100vw, 384px"
                className="h-auto w-full object-contain"
              />
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.2}>
          <section aria-labelledby="work-history-heading" className="mb-32">
            <div className="mb-2 flex items-end justify-between border-b border-black pb-6">
              <div>
                <p className="mb-3 font-['Montserrat'] text-xs uppercase tracking-[0.24em] text-neutral-500">
                  Experience
                </p>
                <h2
                  id="work-history-heading"
                  className="font-['Montserrat'] text-[clamp(3rem,8vw,6rem)] font-medium leading-[0.9] tracking-[-0.06em] text-black"
                >
                  Work History
                </h2>
              </div>
              <span className="hidden pb-2 font-['Montserrat'] text-sm text-neutral-500 sm:block">
                01 / 02
              </span>
            </div>

            <div>
              {experiences.map((exp, i) => (
                <article
                  key={exp.title}
                  className="grid grid-cols-1 gap-4 border-b border-black/15 py-8 md:grid-cols-[220px_minmax(0,1fr)] md:gap-12 md:py-10"
                >
                  <p className="font-['Montserrat'] text-sm font-medium tabular-nums text-neutral-500">
                    <span className="mr-3 text-neutral-300">0{i + 1}</span>
                    {exp.period}
                  </p>
                  <div>
                    <h3 className="font-['Montserrat'] text-2xl font-medium leading-snug tracking-tight text-black md:text-3xl">
                      {exp.title}
                    </h3>
                    <p className="mt-2 font-['Montserrat'] text-sm leading-relaxed text-neutral-500 md:text-base">
                      {exp.org}
                    </p>
                    <ul className="mt-5 space-y-2">
                      {exp.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="flex items-start gap-3 font-['Montserrat'] text-sm leading-relaxed text-neutral-700 md:text-base"
                        >
                          <span
                            aria-hidden="true"
                            className="mt-[0.65em] h-1.5 w-1.5 shrink-0 rounded-full bg-black"
                          />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </FadeIn>

        <FadeIn delay={0.3}>
          <section aria-labelledby="education-heading" className="mb-32">
            <div className="mb-2 flex items-end justify-between border-b border-black pb-6">
              <div>
                <p className="mb-3 font-['Montserrat'] text-xs uppercase tracking-[0.24em] text-neutral-500">
                  Academic Background
                </p>
                <h2
                  id="education-heading"
                  className="font-['Montserrat'] text-[clamp(3rem,8vw,6rem)] font-medium leading-[0.9] tracking-[-0.06em] text-black"
                >
                  Education
                </h2>
              </div>
              <span className="hidden pb-2 font-['Montserrat'] text-sm text-neutral-500 sm:block">
                02 / 02
              </span>
            </div>

            {education.map((edu) => (
              <article
                key={edu.school}
                className="grid grid-cols-1 gap-4 border-b border-black/15 py-8 md:grid-cols-[220px_minmax(0,1fr)] md:gap-12 md:py-10"
              >
                <p className="font-['Montserrat'] text-sm font-medium tabular-nums text-neutral-500">
                  {edu.period}
                </p>
                <div>
                  <h3 className="font-['Montserrat'] text-2xl font-medium leading-snug tracking-tight text-black md:text-3xl">
                    {edu.school}
                  </h3>
                  <p className="mt-3 font-['Montserrat'] text-base font-medium leading-relaxed text-neutral-800 md:text-lg">
                    {edu.degree}
                  </p>
                  <p className="mt-5 max-w-3xl font-['Montserrat'] text-sm leading-7 text-neutral-600 md:text-base">
                    {edu.description}
                  </p>
                </div>
              </article>
            ))}
          </section>
        </FadeIn>

        {/* ================= SKILLS ================= */}
        <FadeIn delay={0.4}>
          <div className="mb-24">
            <h2 className="text-3xl md:text-4xl font-semibold font-['Montserrat'] text-black mb-10">
              Skills
            </h2>
            <div className="pl-8 md:pl-24 space-y-7">
              {skills.map((group, i) => (
                <div
                  key={i}
                  className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-20"
                >
                  <p className="w-full sm:w-48 shrink-0 text-xl md:text-2xl font-semibold font-['Montserrat'] text-neutral-900">
                    {group.label}
                  </p>
                  <div className="flex flex-wrap gap-x-10 gap-y-2">
                    {group.items.map((item, j) => (
                      <span
                        key={j}
                        className="text-base font-normal font-['Montserrat'] text-neutral-900"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* ================= CONTACT ================= */}
        <FadeIn delay={0.5}>
          <div id="contact" className="scroll-mt-24">
            <h2 className="text-3xl md:text-4xl font-semibold font-['Montserrat'] text-black mb-10">
              Contact
            </h2>
            <div className="pl-8 md:pl-24 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-7">
              <div>
                <p className="text-xs uppercase tracking-widest text-neutral-400 font-['Montserrat'] mb-2">
                  Email
                </p>
                <a
                  href={`mailto:${personal.email}`}
                  className="text-base font-normal font-['Montserrat'] text-black transition-opacity hover:opacity-60"
                >
                  {personal.email}
                </a>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-neutral-400 font-['Montserrat'] mb-2">
                  Phone
                </p>
                <a
                  href={`tel:${personal.phone.replace(/\s/g, "")}`}
                  className="text-base font-normal font-['Montserrat'] text-black transition-opacity hover:opacity-60"
                >
                  {personal.phone}
                </a>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-neutral-400 font-['Montserrat'] mb-2">
                  LinkedIn
                </p>
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-normal font-['Montserrat'] text-black transition-opacity hover:opacity-60"
                >
                  linkedin.com/in/chompunuch-auttnam
                </a>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-neutral-400 font-['Montserrat'] mb-2">
                  GitHub
                </p>
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-normal font-['Montserrat'] text-black transition-opacity hover:opacity-60"
                >
                  github.com/biimxch
                </a>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-neutral-400 font-['Montserrat'] mb-2">
                  Address
                </p>
                <p className="text-base font-normal font-['Montserrat'] text-black">
                  {personal.location}
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      <Footer />
    </>
  );
}