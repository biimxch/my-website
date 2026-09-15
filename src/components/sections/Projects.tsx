"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/data";

type Project = (typeof projects)[number];

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function Projects({ showSeeAll = true }: { showSeeAll?: boolean }) {
  return (
    <section id="projects" className="relative z-10 bg-white px-5 py-12">
      <div className="mx-auto flex w-full max-w-[1120px] flex-col gap-2">
        {/* Section header */}
        <div className="mb-12 flex items-end justify-between">
          <motion.h2
            className="text-left font-['Montserrat'] text-[clamp(4rem,10vw,8rem)] font-medium leading-[0.8] tracking-[-0.06em] text-black"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease }}
          >
            Work.
          </motion.h2>

          {showSeeAll && (
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.15, ease }}
            >
              <Link
                href="/work"
                className="group inline-flex items-center gap-3 border-2 border-black px-6 py-3 transition-colors duration-300 hover:bg-black"
              >
                <span className="font-['Montserrat'] text-sm font-medium uppercase tracking-[0.15em] text-black transition-colors duration-300 group-hover:text-white">
                  See all work
                </span>
                <span className="flex h-7 w-7 items-center justify-center text-black transition-colors duration-300 group-hover:group-hover:text-white">
                  <ArrowUpRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </span>
              </Link>
            </motion.div>
          )}
        </div>

        {/* Project cards — staggered fade-in */}
        <motion.div
          className="grid grid-cols-1 gap-8 sm:grid-cols-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } },
          }}
        >
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.a
      href={`/work/${project.slug}`}
      className="group relative flex aspect-[4/3] w-full overflow-hidden bg-zinc-100 shadow-lg"
      variants={{
        hidden: { opacity: 0, y: 48 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
        },
      }}
    >
      {/* Cover image */}
      {project.coverImage && (
        <Image
          src={project.coverImage}
          alt={project.title}
          fill
          sizes="(max-width: 640px) 100vw, 522px"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.08]"
        />
      )}

      {/* Keep project details visible on touch devices; reveal them on desktop hover. */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-100 transition-opacity duration-500 ease-out [@media(hover:hover)]:opacity-0 [@media(hover:hover)]:group-hover:opacity-100" />

      <div className="absolute inset-x-0 bottom-0 z-10 flex w-full items-end justify-between gap-4 p-6 opacity-100 transition-opacity duration-500 ease-out [@media(hover:hover)]:opacity-0 [@media(hover:hover)]:group-hover:opacity-100">
        <div className="flex flex-col gap-1">
          <h3 className="font-['Montserrat'] text-2xl font-medium text-white">
            {project.title}
          </h3>
          <span className="font-['Montserrat'] text-sm font-base text-gray-200">
            {project.year}
          </span>
        </div>
        <p className="font-['Montserrat'] text-right text-base font-normal text-gray-200">
          {project.category}
        </p>
      </div>
    </motion.a>
  );
}