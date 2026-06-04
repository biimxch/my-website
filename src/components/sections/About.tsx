import { personal } from "@/lib/data";
import FadeIn from "@/components/ui/FadeIn";

const experiences = [
  {
    title: "Teaching Assistant (Software Engineering)",
    period: "Aug 2025 – Dec 2025",
    org: "CPE - KMUTT",
    bullets: [
      "Mentored 60+ students and standardized UML/SRS documentation",
      "Evaluated deliverables based on Software Architecture and UI/UX principles",
    ],
  },
  {
    title: "Game Development Intern",
    period: "Jun 2025 – Jul 2025",
    org: "Faculty of Media Arts, KMUTT",
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
    degree: "Bachelor's degree in Engineering, Computer Engineering",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="pt-20 max-w-6xl mx-auto px-6 py-24 border-t border-[#e5e5e0]"
    >
      {/* 📦 เริ่มต้น 2-Column Grid ตั้งแต่ด้านบน */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
        
        {/* ================= ฝั่งซ้าย: ABOUT + EDUCATION ================= */}
        <div className="space-y-16"> 
          
          {/* ส่วนเนื้อหาหลักของ About */}
          <div>
            <FadeIn>
              <h2 className="text-6xl font-medium tracking-tight text-[#334FAE] leading-none mb-6">
                ABOUT
              </h2>
            </FadeIn>

            <FadeIn delay={0.1}>
              <p className="text-base text-stone-600 leading-relaxed font-light max-w-xl">
                Hi, I&apos;m {personal.name}—a computer engineering student at KMUTT (Class of 2026)
                with a focus on UX/UI Design and frontend development.{" "}
                I care deeply about the intersection of design and engineering — building interfaces
                that are both visually thoughtful and technically sound.
              </p>
            </FadeIn>
          </div>

          {/* ส่วนของ Education (ย้ายมาต่อท้ายประวัติฝั่งซ้าย) */}
          <FadeIn delay={0.3}>
            <h3 className="text-2xl font-bold text-[#334FAE] mb-8">Education</h3>
            <div className="space-y-8">
              {education.map((edu, i) => (
                <div key={i}>
                  <div className="flex justify-between items-start gap-4">
                    <p className="text-base font-semibold text-[#334FAE] leading-snug">
                      {edu.school}
                    </p>
                    <span className="text-sm text-stone-400 whitespace-nowrap shrink-0">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-sm text-stone-500 mt-1">{edu.degree}</p>
                </div>
              ))}
            </div>
          </FadeIn>

        </div>

        {/* ================= ฝั่งขวา: EXPERIENCE ================= */}
        <FadeIn delay={0.2}>
          <h3 className="text-2xl font-bold text-[#334FAE] mb-8">Experience</h3>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[7px] top-2 bottom-2 w-px bg-[#CCCCCC]" />

            <div className="space-y-10">
              {experiences.map((exp, i) => (
                <div key={i} className="relative pl-8">
                  {/* Dot */}
                  <div className="absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full border-2 border-[#CCCCCC] bg-white" />

                  <p className="text-lg font-semibold text-[#334FAE] leading-snug">
                    {exp.title}
                  </p>
                  <p className="text-sm text-stone-400 mt-0.5 mb-3">
                    {exp.period} / {exp.org}
                  </p>
                  <ul className="space-y-1.5">
                    {exp.bullets.map((b, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-stone-600 leading-relaxed">
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-stone-400 shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}