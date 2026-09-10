import Link from "next/link";
import { personal } from "@/lib/data";
import FadeIn from "@/components/ui/FadeIn";

export default function AboutIntro() {
  return (
    <section className="section-container pb-24">
      <div className="grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-12 md:gap-16 items-start">
        <FadeIn className="md:self-center">
          <div>
            <h2 className="text-7xl md:text-7xl font-medium font-['Montserrat'] text-black leading-tight mb-6">
              Hello,I&apos;m<br />
              {personal.name}.
            </h2>
            <p className="text-base font-normal font-['Montserrat'] text-black leading-relaxed max-w-xl">
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
          <div className="relative w-full max-w-sm ml-auto mr-0 aspect-[428/581] overflow-hidden">
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
