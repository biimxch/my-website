"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const navItems = [
  { name: "Home", link: "/" },
  { name: "Project", link: "/work" },
  { name: "About", link: "/about" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full font-['Montserrat'] transition-colors duration-300 ${
        isScrolled ? "bg-white" : "bg-transparent"
      }`}
    >
      {/* 🖥️ Desktop */}
      <div className="hidden lg:flex w-full items-center justify-between px-10 py-5">
        <Link
          href="/"
          className="font-semibold text-2xl tracking-wide text-black hover:opacity-80 transition-opacity"
        >
          ChA.
        </Link>

        <nav
          className="flex items-center gap-10 relative"
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {navItems.map((item, index) => (
            <Link
              key={item.name}
              href={item.link}
              onClick={(e) => handleNavClick(e, item.link)}
              onMouseEnter={() => setHoveredIndex(index)}
              className="relative text-base font-medium text-black transition-colors duration-300 z-10"
            >
              {hoveredIndex === index && (
                <motion.div
                  layoutId="nav-hover-underline"
                  className="absolute -bottom-1 left-0 right-0 h-[2px] bg-black -z-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ type: "spring", stiffness: 250, damping: 30 }}
                />
              )}
              {item.name}
            </Link>
          ))}
        </nav>

        <a
          href="/resume.pdf"
          download
          className="flex items-center gap-2 text-[0.95rem] font-medium text-[#333333] hover:opacity-80 transition-opacity"
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

      {/* 📱 Mobile */}
      <div className="lg:hidden w-full">
        <div className="flex items-center justify-between px-5 py-4">
          <Link href="/" className="font-semibold text-2xl tracking-wide text-black">
            ChA.
          </Link>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            className="flex flex-col gap-1.5 p-2"
          >
            <span
              className={`block h-0.5 w-6 bg-black transition-transform ${
                isMobileMenuOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-black transition-opacity ${
                isMobileMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-black transition-transform ${
                isMobileMenuOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="flex flex-col items-start gap-1 bg-white px-5 pb-5">
            {navItems.map((item, idx) => (
              <Link
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={(e) => {
                  handleNavClick(e, item.link);
                  setIsMobileMenuOpen(false);
                }}
                className="w-full py-2.5 text-base font-medium text-[#333333] border-b border-neutral-100"
              >
                {item.name}
              </Link>
            ))}
            <div className="w-full pt-2">
              <a
                href="/resume.pdf"
                download
                className="flex w-full items-center justify-center gap-2 py-3 rounded-xl bg-[#333333] text-white text-sm font-bold transition-transform active:scale-95"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Resume
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}