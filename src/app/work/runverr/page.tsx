"use client";

import RunverrOverview from "./components/RunverrOverview";
import RunverrProcess from "./components/RunverrProcess";
import Link from "next/link";

export default function RunverrProject() {
  return (
    <main 
      className="bg-[#FFFFFF] min-h-screen text-[#081F5C] antialiased selection:bg-[#D0E3FF]"
      style={{ fontFamily: "'Montserrat', sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400&family=Pinyon+Script&display=swap');
        .font-pinyon { font-family: 'Pinyon Script', cursive; }
      `}</style>

      <div className="w-full px-6 md:px-16 pt-6 md:pt-8 pb-24 flex flex-col">
        {/* Top Nav */}
        <div className="flex justify-between items-center mb-8 md:mb-12">
          <Link
            href="/#work"
            className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-[#7096D1] hover:text-[#334EAC] transition-colors duration-300"
          >
            ← Back to Work
          </Link>
          <span className="text-xs font-bold uppercase tracking-widest text-[#334EAC]">
            Game Development · Internship
          </span>
        </div>

        <div className="flex flex-col gap-20 md:gap-32">
          <RunverrOverview />
          <RunverrProcess />

          {/* Closing */}
          <div className="pt-16 md:pt-20 border-t border-[#BAD6EB]/40 text-center flex flex-col items-center max-w-3xl mx-auto gap-6 md:gap-8">
            <span className="font-pinyon text-6xl md:text-7xl text-[#BAD6EB] hover:text-[#334EAC] transition-colors duration-500 leading-none block">
              Fin.
            </span>
            <p className="text-base md:text-lg text-[#081F5C]/80 leading-relaxed font-medium -mt-4">
              Runverr was my first experience developing a complete game from start to finish — from the initial concept and core game loop, all the way to a fully functional PC build.
            </p>
            <Link
              href="/#work"
              className="inline-flex items-center gap-3 bg-[#081F5C] text-[#FFF9F0] px-8 py-4 mt-4 rounded-xl font-bold text-sm uppercase tracking-widest hover:bg-[#334EAC] hover:shadow-lg transition-all duration-300"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
              Back to Work
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}