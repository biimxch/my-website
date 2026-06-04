"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

// 1. นำเข้าคอมโพเนนต์โครงสร้างยืดหดจาก shadcn
import {
  Navbar as ResizableNavbar,
  NavBody,
  MobileNav,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";

const navItems = [
  { name: "About", link: "/#about" },
  { name: "Skills", link: "/#skills" },
  { name: "Projects", link: "/#projects" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // โลจิกคำนวณ Smooth Scroll เดิมของคุณ
  const scrollToSection = (hash: string) => {
    const targetId = hash.split("#")[1];
    const elem = document.getElementById(targetId);

    if (elem) {
      const offset = 80;
      const elementPosition = elem.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (pathname === "/" && href.includes("#")) {
      e.preventDefault();
      scrollToSection(href);
    }
  };

  return (
    // 2. เปลี่ยน header เดิมมาใช้ตัว ResizableNavbar ควบคุมตำแหน่ง z-index
    <ResizableNavbar className="fixed top-0 left-0 right-0 z-50">
      
      {/* 🖥️ Desktop Layout: ตัว NavBody จะทำหน้าที่หดตัวอัตโนมัติเมื่อ scroll เกิน 100px */}
      <NavBody className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* เลย์เอาต์ฝั่งซ้าย: โลโก้ของคุณ */}
        <Link
          href="/"
          className="font-bold text-[1.15rem] tracking-wide text-[#334FAE] hover:opacity-80 transition-opacity z-20"
        >
          CHPNCH A.
        </Link>

        {/* เลย์เอาต์ตรงกลาง: แคปซูลเมนูพร้อม Framer Motion ที่ปรับสมูทแล้ว */}
        <div 
          className="flex items-center bg-[#f0f0f2] rounded-full px-2 py-1.5 gap-1 relative"
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {navItems.map((item, index) => (
            <Link
              key={item.name}
              href={item.link}
              onClick={(e) => handleNavClick(e, item.link)}
              onMouseEnter={() => setHoveredIndex(index)}
              className={`relative px-6 py-2 text-[0.9rem] font-medium transition-colors duration-300 z-10 rounded-full ${
                hoveredIndex === index ? "text-white" : "text-[#334FAE]"
              }`}
            >
              {hoveredIndex === index && (
                <motion.div
                  layoutId="nav-hover-pill"
                  className="absolute inset-0 bg-[#334FAE] rounded-full -z-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 250,
                    damping: 30
                  }}
                />
              )}
              {item.name}
            </Link>
          ))}
        </div>

        {/* เลย์เอาต์ฝั่งขวา: ปุ่ม Resume */}
        <div className="flex items-center z-20">
          <a
            href="/resume.pdf"
            download
            className="flex items-center gap-2 text-[0.95rem] font-medium text-[#334FAE] hover:opacity-80 transition-opacity"
          >
            Resume
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" x2="12" y1="15" y2="3" />
            </svg>
          </a>
        </div>
      </NavBody>

      {/* 📱 Mobile Layout: รองรับการหดและเปิดแฮมเบอร์เกอร์เมนูบนมือถือ */}
      <MobileNav>
        <MobileNavHeader>
          <Link href="/" className="font-bold text-[1.15rem] tracking-wide text-[#334FAE]">
            CHPNCH A.
          </Link>
          <MobileNavToggle
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </MobileNavHeader>

        <MobileNavMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)}>
          {navItems.map((item, idx) => (
            <Link
              key={`mobile-link-${idx}`}
              href={item.link}
              onClick={(e) => {
                handleNavClick(e, item.link);
                setIsMobileMenuOpen(false);
              }}
              className="w-full py-2.5 text-base font-medium text-[#334FAE] border-b border-neutral-100"
            >
              {item.name}
            </Link>
          ))}
          <div className="w-full pt-2">
            <a
              href="/resume.pdf"
              download
              className="flex w-full items-center justify-center gap-2 py-3 rounded-xl bg-[#334FAE] text-white text-sm font-bold transition-transform active:scale-95"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Resume
            </a>
          </div>
        </MobileNavMenu>
      </MobileNav>

    </ResizableNavbar>
  );
}