import Link from "next/link";
import { projects } from "@/lib/data";
import FadeIn from "@/components/ui/FadeIn";

export default function CreativeProject() {
  const project = projects.find(p => p.slug === 'graphic-design');

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
          {project?.title || "CREATIVE & BRANDING"}
        </h1>
        
        <div className="flex flex-wrap gap-x-12 gap-y-6 border-t border-b border-[#e2e0da] py-6 mb-16 text-sm text-gray-900">
          <div>
            <p className="text-[10px] font-mono uppercase tracking-wider text-stone-400 mb-1">Role</p>
            <p>Graphic Designer</p>
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
           <span className="text-xs tracking-widest uppercase text-gray-500">Apparel & Logo Showcase</span>
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
              นอกเหนือจากงานด้าน Frontend และ UI แล้ว ผมยังมีความสนใจในงานออกแบบเชิง Visual Identity 
              คอลเลกชันนี้เป็นการรวบรวมผลงานออกแบบลวดลายเสื้อกีฬา (Apparel Design) และการทำ Logo Rebranding 
              โดยใช้เครื่องมืออย่าง Adobe Photoshop และ Illustrator ในการเปลี่ยนจากคอนเซปต์และศิลปะแนว Impressionism 
              ให้ออกมาเป็นกราฟิกที่พร้อมสำหรับการผลิตจริงและมีเอกลักษณ์เฉพาะตัว
            </p>
          </div>
        </div>
        
      </div>
    </FadeIn>
  );
}