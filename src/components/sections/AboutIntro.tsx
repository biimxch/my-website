"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function AboutIntro() {
  return (
    <section className="relative z-10 min-h-screen bg-white py-32">
      <div className="mx-auto flex min-h-[70vh] w-full max-w-[1200px] px-8 flex-col justify-between">
        
        {/* Big HELLO */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease }}
        >
          <h2 className="font-['Montserrat'] text-[clamp(4rem,10vw,8rem)] font-medium leading-[0.8] tracking-[-0.06em] text-black">
            Hello.
          </h2>
        </motion.div>

        {/* Intro */}
        <div className="mt-8 grid grid-cols-1 gap-12 md:grid-cols-[1fr_1.5fr] md:items-end">
          
          {/* More about me button */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.15, ease }}
          >
            <Link
              href="/about"
              className="group inline-flex items-center gap-3  border-2 border-black px-6 py-3 transition-colors duration-300 hover:bg-black"
            >
              <span className="font-['Montserrat'] text-sm font-medium uppercase tracking-[0.15em] text-black transition-colors duration-300 group-hover:text-white">
                More about me
              </span>
              <span className="flex h-7 w-7 items-center justify-center text-black transition-colors duration-300 group-hover: group-hover:text-white">
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </span>
            </Link>
          </motion.div>

          {/* Bio */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.25, ease }}
          >
            <p className="max-w-3xl font-['Montserrat'] text-xl font-normal leading-relaxed text-neutral-800 md:text-2xl">
              I&apos;m a Computer Engineering graduate who enjoys turning
              complex ideas into clear, intuitive digital experiences.
            </p>

            <p className="mt-6 max-w-2xl font-['Montserrat'] text-base leading-relaxed text-neutral-500 md:text-lg">
              I work across UX/UI design and frontend development, with an
              interest in creating digital products that are both thoughtful
              and functional.
            </p>
          </motion.div>
        </div>

        {/* Bottom metadata */}
        {/* <motion.div
          className="mt-20 flex flex-col gap-4 border-t border-black/10 pt-6 font-['Montserrat'] text-xs uppercase tracking-[0.18em] text-neutral-400 md:flex-row md:items-center md:justify-between"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4, ease }}
        >
          <span>UX/UI · Frontend · Product Thinking</span>
          <span>Thailand · 2026</span>
        </motion.div> */}
      </div>
    </section>
  );
}