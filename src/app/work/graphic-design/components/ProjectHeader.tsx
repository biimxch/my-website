import React from "react";
import Link from "next/link";
import { MetaItem } from "@/types/portfolio";

interface ProjectHeaderProps {
  title: string;
  italicTitle: string;
  subtitle: string;
  description: string;
  meta: MetaItem[];
}

export default function ProjectHeader({ 
  title, 
  italicTitle, 
  subtitle, 
  description, 
  meta 
}: ProjectHeaderProps) {
  return (
    <div className="w-full">
      {/* Top Mini-Header */}
      <div className="flex justify-between items-center mb-12">
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

      {/* Hero Title Section */}
      <div className="relative mb-8">
        <h1 className="text-7xl md:text-8xl font-medium tracking-tight text-[#334FAE] select-none">
          {title} 
          <span className="font-pinyon text-[clamp(3.5rem,8vw,6.5rem)] text-[#334FAE] leading-none ml-2">
            {italicTitle}
          </span>
        </h1>
      </div>

      {/* Main Intro & Meta Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end border-b border-[#e2e0da] pb-10 mb-16">
        <div className="lg:col-span-7 space-y-4">
          <h2 className="text-xl md:text-2xl font-normal text-[#2b5a9e] leading-snug">
            {subtitle}
          </h2>
          <p className="text-sm md:text-base text-gray-600 font-light leading-relaxed">
            {description}
          </p>
        </div>
        
        <div className="lg:col-span-5 flex flex-wrap gap-x-8 gap-y-4 text-xs font-sans lg:justify-end w-full">
          {meta.map((item, idx) => (
            <div key={idx}>
              <p className="text-[10px] font-mono uppercase tracking-wider text-stone-400 mb-1">
                {item.label}
              </p>
              <p className="font-medium text-gray-800">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}