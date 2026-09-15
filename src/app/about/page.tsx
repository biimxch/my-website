import { personal } from "@/lib/data";
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
    period: "Jun 2025 – Jul 2025",
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
    period: "2022–2026",
    degree: "Bachelor's degree in Engineering, Computer Engineering | GPA : 3.01",
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
        {/* ================= HERO: ชื่อ + รูป ================= */}
        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-12 md:gap-16 items-start mb-32">
          <FadeIn className="md:self-center">
            <div>
              <h1 className="text-7xl md:text-7xl font-medium font-['Montserrat'] text-black leading-tight mb-6">
                Hello,I&apos;m<br />
                {personal.name}.
              </h1>
              <p className="text-base font-normal font-['Montserrat'] text-black leading-relaxed max-w-xl">
                I bridge the gap between aesthetics and functionality. With a
                background in computer engineering, I don&apos;t just design
                interfaces — I understand how they are built. From
                user-centered research to frontend implementation with React
                and Next.js, I craft digital experiences that are both
                visually engaging and technically feasible.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="relative w-full max-w-sm mx-auto md:ml-auto aspect-[428/581] overflow-hidden">
              <img
                src="/images/profile.jpg"
                alt={personal.name}
                className="w-full h-full object-cover"
              />
            </div>
          </FadeIn>
        </div>

        {/* ================= EDUCATION ================= */}
        <FadeIn delay={0.2}>
          <div className="mb-24">
            <h2 className="text-3xl md:text-4xl font-semibold font-['Montserrat'] text-black mb-10">
              Education
            </h2>
            <div className="pl-8 md:pl-24 space-y-8">
              {education.map((edu, i) => (
                <div key={i}>
                  <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-1">
                    <p className="text-xl md:text-2xl font-semibold font-['Montserrat'] text-black">
                      {edu.school}
                    </p>
                    <span className="text-base text-neutral-400 font-['Montserrat'] whitespace-nowrap shrink-0">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-base text-black font-['Montserrat'] mt-1">
                    {edu.degree}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* ================= WORK EXPERIENCE ================= */}
        <FadeIn delay={0.3}>
          <div className="mb-24">
            <h2 className="text-3xl md:text-4xl font-semibold font-['Montserrat'] text-black mb-10">
              Work Experience
            </h2>
            <div className="pl-8 md:pl-24 space-y-12">
              {experiences.map((exp, i) => (
                <div key={i}>
                  <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-1">
                    <p className="text-xl md:text-2xl font-semibold font-['Montserrat'] text-black">
                      {exp.title}
                    </p>
                    <span className="text-base text-neutral-400 font-['Montserrat'] whitespace-nowrap shrink-0">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-base text-black font-['Montserrat'] mb-3">
                    {exp.org}
                  </p>
                  <ul className="space-y-1.5">
                    {exp.bullets.map((b, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-2 text-base text-black font-['Montserrat'] leading-relaxed"
                      >
                        <span className="mt-2.5 w-1 h-1 rounded-full bg-black shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
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
          <div>
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