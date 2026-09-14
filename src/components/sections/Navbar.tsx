"use client";

import StaggeredMenu from "@/components/ui/StaggeredMenu";

const menuItems = [
  { label: "Home", ariaLabel: "Go to home page", link: "/" },
  { label: "Project", ariaLabel: "View projects", link: "/work" },
  { label: "About", ariaLabel: "Learn about me", link: "/about" },
];

const socialItems = [
  { label: "GitHub", link: "https://github.com" },
  { label: "LinkedIn", link: "https://linkedin.com" },
  { label: "Resume", link: "/resume.pdf" },
];

export default function Navbar() {
  return (
    <>
      {/* Logo */}
      <header className="pointer-events-none fixed left-0 top-0 z-50 px-6 py-5 md:px-10">
        <a
          href="/"
          className="pointer-events-auto inline-block font-['Montserrat'] text-2xl font-semibold tracking-wide text-black transition-opacity hover:opacity-80"
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
          menuButtonColor="#000000"
          openMenuButtonColor="#000000"
          changeMenuColorOnOpen={true}
          colors={["#334EAC", "#081F5C"]}
          accentColor="#334EAC"
          onMenuOpen={() => console.log("Menu opened")}
          onMenuClose={() => console.log("Menu closed")}
        />
      </div>
    </>
  );
}