"use client";

import React from "react";
import XeniorOverview from "./components/XeniorOverview";
import XeniorCaseStudy from "./components/XeniorCaseStudy";
import Link from "next/link";

export default function XeniorPlusCaseStudy() {
  return (
    <main className="bg-[#FFFFFF] min-h-screen text-stone-800 antialiased selection:bg-[#081F5C]/10 selection:text-[#081F5C]  pb-16">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Pinyon+Script&display=swap');
        .font-pinyon { font-family: 'Pinyon Script', cursive; }
      `}</style>

      <div className="w-full px-16 pt-8 pb-24 flex flex-col">
        <div className="flex justify-between items-center">
        <Link 
          href="/#work" 
          className="inline-flex items-center text-xs uppercase tracking-widest text-gray-400 hover:text-gray-900 transition-colors duration-300"
        >
          ← Back to Work
        </Link>
          <span className="text-xs uppercase tracking-widest font-medium text-gray-500 font-sans">
            Case Study · Visual Identity & Apparel Design
          </span>
        </div>
        {/* COMPONENT 1: HEADER & OVERVIEW */}
        <XeniorOverview />

        {/* COMPONENT 2: DETAIL, DISCOVERY & EXECUTION */}
        <XeniorCaseStudy />

        {/* Closing Signature Section */}
        <div className="pt-20 border-t border-stone-300/60 text-center flex flex-col items-center max-w-3xl mx-auto gap-8">
          <span className="font-pinyon text-6xl text-[#334EAC] leading-none block mb-2">Fin.</span>
          <p className="text-xl text-stone-600 leading-relaxed font-light -mt-8">
            Xenior+ successfully transformed a fragmented, static repository into a <strong className="font-semibold text-[#081F5C]">role-aware academic management platform</strong> that improved discoverability, streamlined assessment workflows, and reduced operational complexity for instructors and students alike.
          </p>
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 bg-[#081F5C] text-white px-6 py-4 rounded-xl font-semibold text-sm hover:bg-[#334EAC] transition-all active:scale-98 shadow-sm"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            Back to Project Grid
          </Link>
        </div>

      </div>
    </main>
  );
}