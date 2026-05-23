import Link from "next/link";
import { projects } from "@/lib/data";
import FadeIn from "@/components/ui/FadeIn";

export default function SkinMatchProject() {
  const project = projects.find(p => p.slug === 'skinmatch');

  return (
    <FadeIn delay={0}>
      <div className="max-w-5xl mx-auto px-6 pt-40 pb-24 animate-fade-in">
        
        <Link 
          href="/#work" 
          className="inline-flex items-center text-xs uppercase tracking-widest text-gray-400 hover:text-gray-900 mb-12 transition-colors duration-300"
        >
          ← Back to Work
        </Link>

        <h1 className="text-6xl font-light tracking-tight text-gray-900 mb-6">
          {project?.title || "SKINMATCH"}
        </h1>
        
        <div className="flex flex-wrap gap-x-12 gap-y-6 border-t border-b border-[#e2e0da] py-6 mb-16 text-sm text-gray-900">
          <div>
            <p className="text-[10px] font-mono uppercase tracking-wider text-stone-400 mb-1">Role</p>
            <p>UX/UI Designer</p>
          </div>
          <div>
            <p className="text-[10px] font-mono uppercase tracking-wider text-stone-400 mb-1">Timeline</p>
            <p>{project?.duration}</p>
          </div>
          <div>
            <p className="text-[10px] font-mono uppercase tracking-wider text-stone-400 mb-1">Year</p>
            <p>{project?.year}</p>
          </div>
          <div>
            <p className="text-[10px] font-mono uppercase tracking-wider text-stone-400 mb-1">Category</p>
            <p>{project?.category}</p>
          </div>
        </div>

        <div className="w-full aspect-[21/9] bg-[#e2e0da] mb-16 relative overflow-hidden flex items-center justify-center rounded-xl">
           <span className="text-xs tracking-widest uppercase text-gray-500">SkinMatch Prototype Image</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 text-gray-900">
          <div className="md:col-span-4">
            <h2 className="text-xs uppercase tracking-widest text-gray-400 mb-4 sticky top-24">
              Overview
            </h2>
          </div>
          <div className="md:col-span-8 space-y-8 text-lg font-light leading-relaxed">
            <p>{project?.description}</p>
            <p className="text-gray-500">
              เป้าหมายหลักของโปรเจกต์นี้คือการออกแบบโครงสร้างข้อมูลที่มีความซับซ้อนของสินค้าประเภทสกินแคร์ 
              ให้แสดงผลได้อย่างเป็นระเบียบและเข้าใจง่ายที่สุด ผมใช้เวลาส่วนใหญ่ไปกับการทำ Requirement Elicitation 
              เพื่อวาง Visual Hierarchy ที่ชัดเจน และสร้าง High-fidelity Prototype บน Figma ที่มี User Flow ลื่นไหล 
              ตอบโจทย์การใช้งานจริงของแพลตฟอร์ม E-commerce
            </p>
          </div>
        </div>
        
      </div>
    </FadeIn>
  );
}