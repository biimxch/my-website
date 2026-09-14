"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/data";
import { CardsParallax, type iCardItem } from "@/components/ui/scroll-card";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Projects() {
  const cardItems: iCardItem[] = projects.map((project) => ({
    title: project.title,
    description:
      project.description ||
      "A focused collection of work and creative experiment.",
    tag: project.category,
    year: project.year,
    src:
      project.coverImage ||
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe",
    link: `/work/${project.slug}`,
    color: "#18181b",
    textColor: "white",
  }));

  return (
    <section id="projects" className="relative bg-white py-32">
      <div className="mx-auto w-full max-w-[1200px] px-8">
        {/* Big WORK */}
        <motion.h2
          className="font-['Montserrat'] text-[clamp(4rem,10vw,8rem)] font-medium leading-[0.8] tracking-[-0.06em] text-black"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease }}
        >
          work.
        </motion.h2>

        {/* Description */}
        <motion.div
          className="mt-24 flex justify-end"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.15, ease }}
        >
          <p className="max-w-2xl font-['Montserrat'] text-base leading-relaxed text-neutral-500 md:text-lg">
            A focused collection of work spanning brand identity, web design,
            and technical experiments. Each project starts with a question
            about people — and ends with something built to be understood.
          </p>
        </motion.div>
      </div>

      {/* Projects */}
      <div className="mt-10">
        <CardsParallax items={cardItems} />
      </div>
    </section>
  );
}