"use client";

import Hero from "./components/Hero";
import ProblemSection from "./components/ProblemSection";
import ProcessSection from "./components/ProcessSection";
import SolutionForm from "./components/SolutionForm";
import SolutionSearch from "./components/SolutionSearch";
import SolutionDashboard from "./components/SolutionDashboard";
import MetricsSection from "./components/MetricsSection";
import FeedbackSection from "./components/FeedbackSection";
import ReflectionSection from "./components/ReflectionSection";
import Link from "next/link";

export default function XeniorPlusCaseStudy() {
  return (
    <main className="bg-[#FFFFFF] min-h-screen text-stone-800 antialiased selection:bg-[#081F5C]/10 selection:text-[#081F5C] pt-24 pb-32">
      {/* โหลดฟอนต์ลายมือ Pinyon Script ให้สอดคล้องกับหน้าหลัก */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Pinyon+Script&display=swap');
        .font-pinyon { font-family: 'Pinyon Script', cursive; }
      `}</style>

      <div className="max-w-6xl mx-auto px-6 flex flex-col gap-24">
        
        {/* Phase 1: Context & Core Statistics */}
        <Hero />
        <MetricsSection />

        {/* Phase 2: System Challenges */}
        <ProblemSection />

        {/* Phase 3: UX Architecture Breakdown */}
        <div className="flex flex-col gap-6">
          <ProcessSection />
          
          <div className="mt-20 border-t border-stone-300/60 pt-16 flex flex-col gap-3 relative">
            <span className="font-pinyon text-5xl text-[#334EAC] absolute -top-4 left-0 select-none opacity-40">
              Deep Dive
            </span>
            <span className="text-[10px] font-mono font-bold text-[#081F5C] uppercase tracking-widest pt-4">
              Phase 3 · Operational Execution
            </span>
            <h2 className="text-4xl font-black tracking-tight text-[#081F5C]">
              The Redesigned Core Modules
            </h2>
          </div>
          
          <div className="flex flex-col gap-24 mt-12">
            <SolutionForm />
            <SolutionSearch />
            <SolutionDashboard />
          </div>
        </div>

        {/* Phase 4 & 5: Validation & Retrospective */}
        <FeedbackSection />
        <ReflectionSection />

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