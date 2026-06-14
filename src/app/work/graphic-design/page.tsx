import React from "react";
import FadeIn from "@/components/ui/FadeIn";
import ProjectHeader from "./components/ProjectHeader";
import ProjectSlider from "./components/ProjectSlider";
import { MetaItem, SubProject } from "@/types/portfolio";

const subProjects: SubProject[] = [
  {
    id: 1,
    title: "Bangmod Begins",
    image: "/images/jerseys/VIDVA.png",
    concept: '"Opening the Gate to Bangmod Engineering" — A visual story about new beginnings, collaboration, and personal growth.',
    front: "Minimalist, clean typography showcasing the 66th batch identity, designed for casual everyday wear.",
    back: "A fine line-art illustration featuring an iconic archway (the transition into university life), rotating gears (teamwork and analytical problem-solving), and a long road symbolizing the journey into the future."
  },
  {
    id: 2,
    title: "I wonder if you know",
    image: "/images/jerseys/E-game2025.png",
    concept: '"Tokyo Drift Energy" — Inspired by the high-octane, fast-paced rhythm of the iconic track from The Fast and the Furious, capturing the pure thrill and adrenaline of Formula 1 racing.',
    front: "A clean, compact left-chest emblem featuring the 'E1 Grand Prix 18th' racing logo and a checkered flag for a sharp, sporty everyday look.",
    back: "A dynamic, comic-style line-art illustration capturing a Formula 1 car in full motion, paired with racing elements like the checkered flag, a driver's helmet, and repeating 'DRIFT' typography to emphasize kinetic speed and movement."
  },
  {
    id: 3, 
    title: "Celestial Unity",
    image: "/images/jerseys/3K.png",
    concept: '"Celestial Unity" — Designed for a student leader seminar by the sea, uniting three campuses under their shared heritage of King Rama IV. The concept honors his historic calculation of the total solar eclipse, blending scientific legacy with a coastal ocean gradient.',
    front: "A clean white-to-blue gradient polo accented with a minimalist 3K alliance monogram and telescope emblem on the left chest.",
    back: "A sophisticated layout featuring a vintage telescope enclosed within overlapping celestial rings that symbolize the eclipse, grounded by subtle traditional Thai motifs and elegant typography."
  },
  {
    id: 4, 
    title: "Into the Wild",
    image: "/images/jerseys/E-game2026.png",
    concept: '"The Primal Spirits" — Embracing a "Minimal & Mysterious" aesthetic that uses the wilderness as a visual metaphor for raw instinct, unity, and hidden inner strength. The deep blue palette captures a quiet, tranquil forest masking a powerful energy ready to be unleashed.',
    front: "A clean, modern layout featuring the central 'WILD GEARS' logotype, balanced by a small batch crest on the left chest and custom-patterned side panels inspired by organic natural shapes.",
    back: "An elegant vertical typography layout tracking down the spine, framed by sleek minimalist stripes and layered over a soft, mysterious gradient sublimation of deep jungle wildlife and foliage."
  },
  {
    id: 6, 
    title: "Apollo's Ascent",
    image: "/images/jerseys/RC_Egame2025.png",
    concept: '"Apollo\'s Ascent" — A neoclassical, divine-themed jersey honoring the Greek god Apollo. It features an ethereal, stone-gray atmospheric landscape layered with premium metallic gold accents, creating an elegant visual hierarchy that balances mythology with modern sports apparel.',
    front: "A soft, misty cloud sublimation paired with classical Greek pillars and an ascending staircase, accented by a metallic gold sun-and-lyre emblem on the left chest and timeless serif typography.",
    back: "Features a classical marble statue of Apollo framed symmetrically between bold squad numbers, topped with a golden winged lyre crest for a clean, museum-curated layout."
  },
  {
    id: 6, 
    title: "Dark Eagle",
    image: "/images/jerseys/RC_Egame2026.png",
    concept: '"Dark Eagle" — An authoritative, military-inspired athletic jersey reflecting tactical Air Force grit. It utilizes a high-contrast layout and sharp geometric blocking to evoke a structured, powerful presence.',
    front: "A clean white base with subtle shadow pinstripes, featuring an authoritative eagle shield crest and structured, arched varsity typography across the center.",
    back: "Showcases a stark dark polo collar, minimalist wing details, and sharp, high-contrast block numbering designed for instant visual readability."
  },
  {
    id: 7, 
    title: "Shadow Crow",
    image: "/images/jerseys/CPE_Egame.png",
    concept: '"Shadow Crow" — A gothic, Resident Evil Village-inspired jersey for the Computer Engineering team. It features a versatile, unisex black-and-gray palette designed for depth and everyday wearability.',
    front: "Features subtle vertical shadow stripes, a custom 'CPE' house crest integrated with a crow symbol, and a prominent gothic Blackletter logotype across the chest.",
    back: "Showcases a contrasting white polo collar, bold Blackletter squad numbering, and 'Computer Engineering' typography anchored by a lower tribal ornament."
  },
  {
    id: 8,
    title: "Stellar Vanguard",
    image: "/images/jerseys/RC_game.png",
    concept: '"Stellar Vanguard" — A sci-fi themed jersey representing cosmic warriors across 5 galaxy factions. This purple edition uses a deep-space aesthetic to define its team identity.',
    front: "A sharp black-to-purple cosmic gradient with diagonal cyber grids, featuring a sleek 'RC GAME' logotype and a minimalist 'KMUTT' tech emblem.",
    back: "Features curved sci-fi typography for the player name and tournament details, anchored by a bold, high-contrast center number."
  },
];

export default function CreativeProject() {
  const metadata: MetaItem[] = [
    { label: "My Role", value: "Graphic Designer" },
    { label: "Timeline", value: "2024 — Present" },
    { label: "Core Tools", value: "Illustrator · Photoshop" },
  ];

  return (
    <FadeIn delay={0}>
      <div className="w-full px-16 pt-8 pb-24 text-[#1a1a1a]">
        
        <ProjectHeader 
          title="GRAPHIC"
          italicTitle="Design"
          subtitle="Designing Custom Jerseys and Visual Assets for Campus Organizations"
          description="From initial sketches to production-ready vector files—creating clean, wearable apparel and promotional materials that bring student group identities to life."
          meta={metadata}
        />

        <ProjectSlider items={subProjects} />

        {/* Footer Note */}
        <div className="mt-24 pt-8 border-t border-[#e2e0da]/60 text-xs text-gray-400 font-light flex flex-col sm:flex-row justify-between gap-4">
          <p>Curated Apparel & Brand Identity Collection</p>
          <p>© 2026 Crafted with Passion</p>
        </div>

      </div>
    </FadeIn>
  );
}