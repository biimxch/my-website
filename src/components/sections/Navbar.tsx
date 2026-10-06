"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import StaggeredMenu from "@/components/ui/StaggeredMenu";
import { personal } from "@/lib/data";

const menuItems = [
  { label: "Home", ariaLabel: "Go to home page", link: "/" },
  { label: "Project", ariaLabel: "View projects", link: "/work" },
  { label: "About", ariaLabel: "Learn about me", link: "/about" },
  {
    label: "Resume",
    ariaLabel: "View resume",
    link: personal.resumeUrl,
    target: "_blank",
    rel: "noopener noreferrer",
  },
];

const socialItems = [
  { label: "GitHub", link: "https://github.com/biimxch" },
  { label: "LinkedIn", link: "https://www.linkedin.com/in/chompunuch-auttnam/" },
  { label: "Email", link: "mailto:chompunuch.autt@gmail.com" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [darkSurface, setDarkSurface] = useState(() => pathname === "/");

  useEffect(() => {
    const readSurface = () => {
      const elements = document.elementsFromPoint(32, 32);
      const background = elements
        .filter((element) => !element.closest(".sm-scope, header"))
        .map((element) => {
          const style = window.getComputedStyle(element);
          const channels = style.backgroundColor.match(/[\d.]+/g)?.map(Number);
          if (!channels || channels.length < 3) return null;

          const alpha = channels.length > 3 ? channels[3] : 1;
          const opacity = Number(style.opacity) * alpha;
          if (opacity < 0.5) return null;

          const [red, green, blue] = channels;
          const luminance = (0.2126 * red + 0.7152 * green + 0.0722 * blue) / 255;
          return luminance < 0.5;
        })
        .find((isDark) => isDark !== null);

      if (background !== undefined) setDarkSurface(background);
    };

    setDarkSurface(pathname === "/");
    const frame = window.requestAnimationFrame(readSurface);
    window.addEventListener("scroll", readSurface, { passive: true });
    window.addEventListener("resize", readSurface);
    document.addEventListener("visibilitychange", readSurface);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", readSurface);
      window.removeEventListener("resize", readSurface);
      document.removeEventListener("visibilitychange", readSurface);
    };
  }, [pathname]);

  return (
    <>
      {/* Logo */}
      <header className="pointer-events-none fixed left-0 top-0 z-50 w-full px-6 py-5 md:px-10">
        <a
          href="/"
          className="pointer-events-auto inline-block font-['Montserrat'] text-2xl font-semibold tracking-wide transition-opacity hover:opacity-80"
          style={{ color: darkSurface ? "#ffffff" : "#000000" }}
        >
          ChA.
        </a>
      </header>

      {/* Staggered Menu */}
      <div className="pointer-events-none fixed inset-0 z-50">
        <StaggeredMenu
          isFixed={true}
          position="right"
          items={menuItems}
          socialItems={socialItems}
          displaySocials
          displayItemNumbering={true}
          menuButtonColor={darkSurface ? "#ffffff" : "#000000"}
          openMenuButtonColor="#000000"
          changeMenuColorOnOpen={true}
          colors={["#999999", "#000000"]}
          accentColor="#999999"
          onMenuOpen={() => console.log("Menu opened")}
          onMenuClose={() => console.log("Menu closed")}
        />
      </div>
    </>
  );
}