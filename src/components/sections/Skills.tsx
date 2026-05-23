"use client";

import { skills } from "@/lib/data";

// 💡 สร้างข้อมูล Soft Skills แยกไว้ตรงนี้ หรือจะเอาไปใส่ในไฟล์ data.ts ก็ได้ครับ
const softSkills = [
  "Fast Learner",
  "Adaptability",
  "System Thinking",
  "Cross-functional Communication",
  "Problem Solving",
  "Empathy"
];

export default function Skills() {
  const categories = Object.entries(skills);

  return (
    <section
      id="skills"
      className="pt-20 max-w-5xl mx-auto px-6 py-24 border-t border-[#e2e0da]"
    >
      <div className="flex items-start justify-between mb-16">
        <h2 className="text-6xl font-medium tracking-tight text-gray-900 leading-none">
          SKILLS
        </h2>
        <p className="text-xs text-gray-400 max-w-[160px] text-right leading-relaxed mt-2 hidden sm:block">
          Tools and technologies I use to bring ideas to life.
        </p>
      </div>

      {/* Grid แบบมีเส้นขอบเชื่อมกัน */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-[#e2e0da]">
        
        {/* 4 ช่องด้านบน (Hard Skills) */}
        {categories.map(([category, items]) => (
          <div
            key={category}
            className="border-r border-b border-[#e2e0da] p-8 hover:bg-[#f3f2ee] transition-colors duration-300"
          >
            <h3 className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-6">
              {category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {items.map((skill) => (
                <span 
                  key={skill} 
                  className="px-3.5 py-1.5 border border-[#e2e0da] rounded-full text-[13px] font-medium text-gray-600 bg-white"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}

        <div className="col-span-1 md:col-span-2 lg:col-span-4 border-r border-b border-[#e2e0da] px-8 py-6 hover:bg-[#f3f2ee] transition-colors duration-300 flex flex-col md:flex-row md:items-center gap-6 md:gap-12">
          
          <h3 className="text-xs font-medium text-gray-400 uppercase tracking-widest shrink-0 mt-1 md:mt-0">
            Soft Skills
          </h3>
          
          <div className="flex flex-wrap gap-2">
            {softSkills.map((skill) => (
              <span 
                key={skill} 
                className="px-3.5 py-1.5 border border-[#e2e0da] rounded-full text-[13px] font-medium text-gray-600 bg-white"
              >
                {skill}
              </span>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}