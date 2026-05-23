import { experiences } from "@/lib/data";
import type { Experience as ExperienceType } from "@/lib/data";
import FadeIn from "@/components/ui/FadeIn";

export default function Experience() {
  return (
    <section
      id="experience"
      className="pt-20 pb-24 max-w-5xl mx-auto px-6 border-t border-[#e5e5e0]"
    >
      <FadeIn>
        <div className="flex items-start justify-between mb-16">
          <h2 className="text-6xl font-medium tracking-tight text-gray-900 leading-none">
            EXPERIENCE
          </h2>
        </div>
      </FadeIn>

      <div className="border-t border-[#e5e5e0]">
        {experiences.map((item: ExperienceType, i: number) => (
          <FadeIn key={`${item.role}-${i}`} delay={i * 0.08}>
            <div className="py-8 border-b border-[#e5e5e0] grid sm:grid-cols-[1.2fr_2fr_auto] gap-4 sm:gap-8 transition-colors duration-200 hover:bg-stone-100/30">
              {/* Role & Org */}
              <div className="flex flex-col gap-3">
                <p className="text-sm font-mono text-stone-400 whitespace-nowrap">
                  {item.period}
                </p>

                <h3 className="text-base font-bold text-[#0a0a0a] uppercase tracking-tight">
                  {item.role}
                </h3>
                
                <p className="text-base font-mono text-stone-400">
                  {item.org}
                </p>
              </div>

              {/* Bullets */}
              <ul className="space-y-2 mt-3 sm:mt-8">
                {item.bullets.map((bullet: string, j: number) => (
                  <li key={j} className="text-base text-stone-600 leading-relaxed flex gap-2 font-light">
                    <span className="text-stone-300 shrink-0 select-none">–</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

