import Link from "next/link";
import { personal } from "@/lib/data";
import FadeIn from "@/components/ui/FadeIn";

export default function AboutIntro() {
  return (
    <section className="section-container pb-24">
      {/* Header */}
      <div className="flex items-center justify-between mb-12">
        <h2 className="text-4xl sm:text-5xl font-medium font-['Montserrat'] text-black">
          about.
        </h2>

        <button
          type="button"
          className="bg-[#f1f1f1] px-8 py-5 text-base font-medium font-['Montserrat'] text-black transition-opacity hover:opacity-70"
        >
          Show More
        </button>
      </div>

      {/* Original layout */}
      <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-16 items-start">
        <FadeIn className="lg:self-center">
          <div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium font-['Montserrat'] text-black leading-tight mb-6">
              Hello,I&apos;m
              <br />
              {personal.name}.
            </h2>

            <p className="text-sm sm:text-base font-normal font-['Montserrat'] text-black leading-relaxed max-w-xl">
              I bridge design and technology to create intuitive, engaging digital experiences. With a background in computer engineering, I combine UX/UI design with frontend development using React and Next.js.
            </p>
          </div>
        </FadeIn>

        {/* รูปใช้โค้ดเดิมทุกอย่าง */}
        <FadeIn delay={0.1}>
          <div className="relative w-full max-w-xs sm:max-w-sm lg:max-w-md mx-auto lg:ml-auto lg:mr-0 aspect-[428/581] overflow-hidden">
            <img
              src="/images/profile.jpg"
              alt={personal.name}
              className="w-full h-full object-cover"
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}