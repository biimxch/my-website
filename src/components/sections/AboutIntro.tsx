import Link from "next/link";
import { personal } from "@/lib/data";
import FadeIn from "@/components/ui/FadeIn";

export default function AboutIntro() {
  return (
    <section className="section-container pb-24">
      <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-16 items-start">
        <FadeIn className="lg:self-center">
          <div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium font-['Montserrat'] text-black leading-tight mb-6">
              Hello,I&apos;m<br />
              {personal.name}.
            </h2>
            <p className="text-sm sm:text-base font-normal font-['Montserrat'] text-black leading-relaxed max-w-xl">
              I bridge the gap between aesthetics and functionality. With a
              background in computer engineering, I don&apos;t just design
              interfaces — I understand how they are built. From user-centered
              research to frontend implementation with React and Next.js, I
              craft digital experiences that are both visually engaging and
              technically feasible.
            </p>
            <Link
              href="/about"
              className="mt-8 inline-block text-base font-medium font-['Montserrat'] text-[#334FAE] underline underline-offset-4 hover:opacity-70 transition-opacity"
            >
              More about me
            </Link>
          </div>
        </FadeIn>

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