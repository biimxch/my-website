"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function AboutIntro() {
  return (
    <section className="min-h-screen bg-white py-32">
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
        <div className="mt-24 grid grid-cols-1 gap-12 md:grid-cols-[1fr_1.5fr] md:items-end">
          
          {/* Small label */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.15, ease }}
            className="border-l border-neutral-300 pl-4"
          >
            <p className="font-['Montserrat'] text-xs uppercase tracking-[0.25em] text-neutral-400">
              A little about me
            </p>
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