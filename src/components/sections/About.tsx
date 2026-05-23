import { personal } from "@/lib/data";
import FadeIn from "@/components/ui/FadeIn";

export default function About() {
  return (
    <section
      id="about"
      className="pt-20 max-w-5xl mx-auto px-6 py-24 border-t border-[#e5e5e0]"
    >
      <FadeIn>
        <div className="flex items-start justify-between mb-16">
            <h2 className="text-6xl font-medium tracking-tight text-gray-900 leading-none">
            ABOUT
            </h2>
        </div>
      </FadeIn>

      <div className="grid sm:grid-cols-2 gap-12 sm:gap-16">
        <FadeIn delay={0.1}>
          <div className="space-y-6 text-sm text-stone-600 leading-relaxed font-light">
            <p>
              Hi, I&apos;m {personal.nickname} — a Computer Engineering student
              at KMUTT (Class of 2026) with a focus on UX/UI Design and
              Frontend Development.
            </p>
            <p>
              I care deeply about the intersection of design and engineering —
              building interfaces that are both visually thoughtful and
              technically sound.
            </p>
            <p>
              When I&apos;m not designing or coding, I&apos;m exploring game
              development, studying human-computer interaction, or working on
              side projects that challenge my perspective on what software can
              feel like.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="space-y-1">
            <div className="flex justify-between items-center py-4 border-b border-[#e5e5e0]">
              <span className="font-mono text-[10px] uppercase tracking-wider text-stone-400">Name</span>
              <span className="text-sm font-semibold text-[#0a0a0a] uppercase tracking-tight">{personal.name}</span>
            </div>
            <div className="flex justify-between items-center py-4 border-b border-[#e5e5e0]">
              <span className="font-mono text-[10px] uppercase tracking-wider text-stone-400">Based in</span>
              <span className="text-sm font-semibold text-[#0a0a0a] uppercase tracking-tight">{personal.location}</span>
            </div>
            <div className="flex justify-between items-start py-4 border-b border-[#e5e5e0]">
            <span className="font-mono text-[10px] uppercase tracking-wider text-stone-400 mt-1">
                Education
            </span>
            <span className="text-sm font-semibold text-[#0a0a0a] uppercase tracking-tight text-right leading-relaxed space-y-1">
                <span className="block">King Mongkut’s University of</span>
                <span className="block">Technology Thonburi</span>
                <span className="block font-light">B.Eng. Computer Engineering</span>
            </span>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

