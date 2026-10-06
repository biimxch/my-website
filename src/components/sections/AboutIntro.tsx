"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDownToLine, ArrowUpRight, Mail } from "lucide-react";
import { personal } from "@/lib/data";

const ease = [0.22, 1, 0.36, 1] as const;

export default function AboutIntro() {
  return (
    <section className="relative z-10 bg-white px-5 py-12">
      <div className="mx-auto flex w-full max-w-[1120px] flex-col gap-2">
        <div className="mb-12">
          <h2 className="text-left font-['Montserrat'] text-[clamp(4rem,10vw,8rem)] font-medium leading-[0.8] tracking-[-0.06em] text-black">
           About.
          </h2>
        </div>

        <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-2 md:items-center md:gap-x-20">
          <div className="md:self-center">
            <p className="max-w-xl font-['Montserrat'] text-lg leading-relaxed tracking-tight text-neutral-800 md:text-xl">
              UX/UI designer who turns complex, role-based systems into clear interfaces, then builds them in Next.js.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/about"
                className="group inline-flex min-h-12 items-center gap-2 rounded-full border-2 border-black bg-black px-4 py-3 font-['Montserrat'] text-xs font-medium uppercase tracking-[0.1em] text-white transition-colors hover:bg-white hover:text-black sm:px-5 sm:text-sm"
              >
                More about me
                <ArrowUpRight size={16} aria-hidden="true" />
              </Link>
              <a
                href={personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex min-h-12 items-center gap-2 rounded-full border-2 border-black px-4 py-3 font-['Montserrat'] text-xs font-medium uppercase tracking-[0.1em] text-black transition-colors hover:bg-black hover:text-white sm:px-5 sm:text-sm"
              >
                Download resume
                <ArrowDownToLine size={16} aria-hidden="true" />
              </a>
              <a
                href={`mailto:${personal.email}`}
                className="group inline-flex min-h-12 items-center gap-2 rounded-full border-2 border-black px-4 py-3 font-['Montserrat'] text-xs font-medium uppercase tracking-[0.1em] text-black transition-colors hover:bg-black hover:text-white sm:px-5 sm:text-sm"
              >
                Email me
                <Mail size={16} aria-hidden="true" />
              </a>
            </div>

            <ul className="mt-8 space-y-2 border-t border-black/15 pt-5 font-['Montserrat'] text-sm leading-relaxed text-neutral-700 md:text-base">
              <li><span className="font-medium text-black">Looking for:</span> UX/UI Designer roles</li>
              <li><span className="font-medium text-black">Education:</span> B.Eng. Computer Engineering, KMUTT, class of 2026</li>
              <li><span className="font-medium text-black">Based in:</span> {personal.location}</li>
            </ul>
          </div>

          <motion.div
            className="relative order-2 w-full max-w-[460px] justify-self-center md:justify-self-end"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.1, ease }}
          >
            <Image
              src="/images/profile.jpg"
              alt="Chompunuch Auttnam"
              width={974}
              height={1230}
              sizes="(max-width: 768px) 100vw, 552px"
              className="block h-auto w-full object-contain"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}