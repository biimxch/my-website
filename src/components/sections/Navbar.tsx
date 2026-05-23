"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation"; // 👈 เพิ่มสิ่งนี้เข้ามา

// 💡 เปลี่ยน href ให้มี / นำหน้า เพื่อให้กดจากหน้า Project ย่อยแล้วกลับมาหน้าแรกได้ด้วย
const links = [
  { label: "About", href: "/#about" },
  { label: "Projects", href: "/#work" },
  { label: "Experience", href: "/#experience" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname(); // 👈 เช็คว่าตอนนี้อยู่หน้าไหน

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 💡 ฟังก์ชันจัดการ Smooth Scroll
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // เช็คว่าถ้าตอนนี้เราอยู่หน้าแรก (/) และกดลิงก์ที่มีเครื่องหมาย #
    if (pathname === "/" && href.includes("#")) {
      e.preventDefault(); // ปิดการกระโดดวาร์ปแบบปกติ
      
      const targetId = href.split("#")[1];
      const elem = document.getElementById(targetId);
      
      if (elem) {
        // คำนวณระยะทางและหักลบ 80px (เผื่อพื้นที่ให้ Navbar จะได้ไม่บังหัวข้อ)
        const top = elem.getBoundingClientRect().top + window.scrollY - 80;
        
        window.scrollTo({
          top,
          behavior: "smooth",
        });
      }
    }
    // ถ้าไม่ได้อยู่หน้าแรก ปล่อยให้ Next.js พาเปลี่ยนหน้าไปตามปกติ
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#fafaf8]/90 backdrop-blur-sm border-b border-[#e2e0da]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link
          href="/"
          className="font-medium text-sm tracking-tight text-gray-900 hover:text-gray-500 transition-colors"
        >
          Chompunuch A.
        </Link>

        <ul className="flex items-center gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href)} // 👈 เรียกใช้งานฟังก์ชันตรงนี้
                className="text-xs uppercase tracking-widest text-gray-400 hover:text-gray-900 transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}