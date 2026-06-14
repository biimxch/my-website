"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } }
};

export default function RunverrOverview() {
  return (
    <div className="flex flex-col gap-8 md:gap-12">

      {/* Title */}
      <motion.div
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
        className="relative pt-4 md:pt-6"
      >
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium tracking-tight text-[#334EAC] leading-none">
          Runverr{" "}
          <span className="font-pinyon text-[clamp(2.5rem,8vw,6.5rem)] text-[#334EAC] leading-none">
            the game
          </span>
        </h1>
      </motion.div>

      {/* Subtitle + Meta */}
      <motion.div
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
        className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-end border-b border-[#BAD6EB] pb-8 md:pb-10"
      >
        <div className="lg:col-span-7 space-y-3">
          <h2 className="text-lg md:text-xl lg:text-2xl font-normal text-[#081F5C] leading-snug">
            Endless Runner Mini-Game developed with Unreal Engine 5 for the Mediatier Project at KMUTT. 
          </h2>
          <p className="text-sm md:text-base text-stone-500 font-light leading-relaxed">
            A coin-collecting endless runner featuring a complete Core Game Loop — including Score System, Energy, Items, Day/Night Cycle, and High Score functionality, built for PC. 
          </p>
        </div>
        <div className="lg:col-span-5 flex flex-wrap gap-x-6 gap-y-4 lg:justify-end">
          {[
            { label: "My Role", value: "Game Dev Intern" },
            { label: "Engine", value: "Unreal Engine 5" },
            { label: "Timeline", value: "Jun – Aug 2025" },
            { label: "Platform", value: "PC Build" },
          ].map((item, idx) => (
            <div key={idx}>
              <p className="text-[10px] uppercase tracking-widest text-[#7096D1] font-bold mb-1">{item.label}</p>
              <p className="text-sm font-medium text-[#081F5C]">{item.value}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Cover Image */}
      <motion.div
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
        className="w-full aspect-[4/3] sm:aspect-[16/9] overflow-hidden border border-[#BAD6EB]/30 bg-[#F7F2EB] relative flex items-center justify-center"
      >
        <img
          src="/images/runverr.png"
          alt="Runverr Game Screenshot"
          className="w-full h-full object-cover"
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = 'none';
          }}
        />
        <span className="text-xs tracking-widest uppercase text-[#7096D1] absolute">Runverr · Gameplay Screenshot</span>
      </motion.div>

      {/* Metrics */}
      <motion.div
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
        className="grid grid-cols-1 md:grid-cols-3 border-t border-b border-[#BAD6EB]/40"
      >
        {[
          { label: "Development Duration", before: "0", value: "10w", desc: <><strong className="font-bold text-[#081F5C]">10 Weeks</strong> from Concept Design to a fully functional PC Build. </> },
          { label: "Game Systems Built", before: "—", value: "8+", desc: <>Score, Energy, Coin, Item, High Score, Day/Night, UI, <strong className="font-bold text-[#081F5C]">Packaging</strong></> },
          { label: "Demo Day", before: "Prototype", value: "Done", desc: <>Successfully presented to professors from both <strong className="font-bold text-[#081F5C]">Media Arts and CPE</strong> on July 25, 2025. </> },
        ].map((metric, idx) => (
          <div
            key={idx}
            className={`py-8 md:py-10 flex flex-col gap-3 group border-b md:border-b-0 border-[#BAD6EB]/40
              ${idx === 0 ? "md:pr-10 md:border-r border-[#BAD6EB]/40" : ""}
              ${idx === 1 ? "md:px-10 md:border-r border-[#BAD6EB]/40" : ""}
              ${idx === 2 ? "md:pl-10 border-b-0" : ""}
            `}
          >
            <div className="text-[#334EAC] text-[10px] font-bold uppercase tracking-widest">{metric.label}</div>
            <div className="flex items-baseline gap-3 my-1">
              <span className="text-sm line-through text-[#081F5C]/40">{metric.before}</span>
              <span className="text-4xl sm:text-5xl md:text-6xl font-serif italic text-[#334EAC] group-hover:text-[#7096D1] transition-colors duration-500">{metric.value}</span>
            </div>
            <p className="text-sm md:text-base font-medium text-[#081F5C]/80 leading-relaxed">{metric.desc}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
}