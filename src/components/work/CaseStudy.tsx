import Link from "next/link";
import React from "react";
import { motion, useReducedMotion } from "framer-motion";

const contentWidth = "mx-auto max-w-[1200px] px-5 md:px-12";

export function CaseStudyIntro({
  title,
  description,
}: {
  title: string;
  description: React.ReactNode;
}) {
  return (
    <section className="bg-white">
      <div className={`${contentWidth} pb-16 pt-[clamp(6rem,10vw,9rem)] md:pb-24`}>
        <div className="grid gap-8 md:grid-cols-[1fr_400px] md:gap-16">
          <h1 className="text-[clamp(3.75rem,10vw,6.5rem)] font-semibold leading-[0.95] tracking-[-0.04em] text-[#111111]">
            {title}
          </h1>
          <p className="self-end text-base leading-[1.5] tracking-[-0.01em] text-[#414141]">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}

export function CaseStudyMeta({
  items,
}: {
  items: { label: string; value: string }[];
}) {
  return (
    <dl className={`${contentWidth} grid grid-cols-2 gap-x-8 gap-y-8 pb-16 md:grid-cols-4 md:pb-24`}>
      {items.map((item) => (
        <div key={item.label}>
          <dt className="mb-2 text-xs leading-[1.4] tracking-[0.1em] text-[#585858]">
            {item.label}
          </dt>
          <dd className="text-sm leading-[1.4] text-[#111111]">{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}

export function CaseStudySection({
  label,
  title,
  children,
  wideContent,
  className = "",
}: {
  label: string;
  title: string;
  children: React.ReactNode;
  wideContent?: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`bg-white ${className}`}>
      <div className={`${contentWidth} grid gap-8 py-16 md:grid-cols-[1fr_2fr] md:gap-16 md:py-24`}>
        <div>
          <p className="text-xs leading-[1.4] tracking-[0.1em] text-[#585858]">{label}</p>
          <h2 className="mt-3 text-[clamp(2.25rem,5vw,3.25rem)] font-semibold leading-[1.15] tracking-[-0.035em] text-[#111111]">
            {title}
          </h2>
        </div>
        <div className="min-w-0">{children}</div>
      </div>
      {wideContent && (
        <div className={`${contentWidth} pb-16 md:pb-24`}>
          {wideContent}
        </div>
      )}
    </section>
  );
}

export function CaseStudySubheading({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h3 className={`text-2xl font-semibold leading-tight tracking-[-0.02em] text-[#111111] ${className}`}>
      {children}
    </h3>
  );
}

export function CaseStudyShot({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div className={`overflow-hidden bg-white p-4 md:p-8 ${className}`}>
      <img src={src} alt={alt} className="block h-auto w-full" />
    </div>
  );
}

export function CaseStudyMoreProjects({
  projects,
}: {
  projects: { name: string; image: string; href: string }[];
}) {
  const reduceMotion = useReducedMotion();

  return (
    <section className="bg-white">
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto max-w-[1200px] px-5 py-16 md:px-12 md:py-24"
      >
        <p className="text-xs leading-[1.4] tracking-[0.1em] text-[#585858]">Next</p>
        <h2 className="mb-10 mt-3 text-[clamp(2.25rem,5vw,3.25rem)] font-semibold leading-[1.15] tracking-[-0.035em] text-[#111111]">
          More Projects
        </h2>
        <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
          {projects.map((project) => (
            <li key={project.name}>
              <Link
                href={project.href}
                className="group block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#111111]"
              >
                <div className="aspect-[341/246] w-full overflow-hidden bg-white">
                  <img
                    src={project.image}
                    alt=""
                    className="h-full w-full object-cover motion-safe:transition-transform motion-safe:duration-500 motion-safe:group-hover:scale-105"
                  />
                </div>
                <p className="mt-4 text-base tracking-[-0.01em] text-[#111111] underline-offset-4 group-hover:underline">
                  {project.name}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}
