import Link from "next/link";
import { projects } from "@/lib/data";
import FadeIn from "@/components/ui/FadeIn";

export default function XeniorPlusProject() {

  const project = projects.find(p => p.slug === 'xenior-plus');

  return (
    <FadeIn delay={0}>
      <div className="font-montserrat max-w-5xl mx-auto px-6 pt-40 pb-24 animate-fade-in">
        
        {/* ปุ่ม Back */}
        <Link 
          href="/#work" 
        className="inline-flex items-center text-xs uppercase tracking-widest text-gray-400 hover:text-gray-900 mb-12 transition-colors duration-300"
      >
        ← Back to Work
      </Link>

      {/* Header */}
      <h1 className="text-6xl font-light tracking-tight text-gray-900 mb-6">
        {project?.title || "XENIOR+"}
      </h1>
      
      {/* Meta Info Bar (เส้นคั่นและข้อมูลสรุปโปรเจกต์) */}
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

      {/* Cover Image Area */}
      <div className="w-full aspect-[21/9] bg-[#e2e0da] mb-16 relative overflow-hidden flex items-center justify-center">
         <span className="text-xs tracking-widest uppercase text-gray-500">Cover Image Placeholder</span>
      </div>

      {/* Content Section */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 text-gray-900">
        <div className="md:col-span-4">
          <h2 className="text-xs uppercase tracking-widest text-gray-400 mb-4 sticky top-24">
            Overview
          </h2>
        </div>
        <div className="md:col-span-8 space-y-8 text-lg font-light leading-relaxed">
          <p>
            {project?.description}
          </p>
          <p className="font-prompt text-gray-500">
            โปรเจกต์นี้เน้นการทำ Requirement Elicitation เพื่อสร้าง Visual Hierarchy ที่ชัดเจน 
            และออกแบบ User Flow ให้ใช้งานง่ายที่สุดสำหรับแพลตฟอร์ม E-commerce ด้านสกินแคร์...
            (คุณสามารถแก้ข้อความตรงนี้เพื่อเล่าดีเทลงานของคุณต่อได้เลยครับ)
          </p>
        </div>
      </div>
      
    </div>
    </FadeIn>
  );
}