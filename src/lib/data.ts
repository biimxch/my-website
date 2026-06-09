export const personal = {
  name: "Chompunuch Auttnam",
  nickname: "Bim",
  tagline: "UX/UI Designer & Frontend Developer",
  sub: "Computer Engineering · KMUTT · Class of 2026",
  email: "chompunuch.autt@gmail.com",
  phone: "+66 967760894",
  location: "Bangkok, Thailand",
  resumeUrl: "/resume.pdf",
  github: "https://github.com/biimxch",
  linkedin: "https://www.linkedin.com/in/chompunuch-auttnam/",
  facebook: "https://www.facebook.com/chompunuch.auttnam",
}

export interface Project {
  slug: string;
  title: string;
  year: string;
  duration: string;
  category: string;
  description: string;
  coverImage: string;
  figmaUrl?: string;
  liveUrl?: string;
  tags: string[];
}

export interface Experience {
  role: string;
  org: string;
  period: string;
  bullets: string[];
}

export const projects: Project[] = [
  {
    slug: "xenior-plus",
    title: "XENIOR+",
    year: "2025–2026",
    duration: "9 months",
    category: "UX/UI + Frontend",
    tags: ["Website", "UX/UI Design", "Next.js"],
    description:
      "Web platform for managing and showcasing CPE senior projects. Designed the Xenior Form replacing manual paper-based evaluation, built responsive frontend, and validated usability through UAT with faculty.",
    coverImage: "/images/xenior.png",
    liveUrl: "",
    figmaUrl: "",
  },
  {
    slug: "runverr",
    title: "RUNVERR",
    year: "2025",
    duration: "2 months",
    category: "3D UX + System Design",
    tags: ["Game Dev", "3D UX", "System Design"],
    description:
      "A 3D endless runner game developed during an internship at KMUTT Media Arts. Engineered core game loops, procedural level generation, and a persistent high-score system using Unreal Engine 5 Blueprints. Emphasized spatial UX by applying visual hierarchy to interactive power-ups and fine-tuning character movement amidst progressive difficulty scaling.",
    coverImage: "/images/runverr/cover.jpg",
    figmaUrl: "", 
    liveUrl: "", 
  },
  {
    slug: "skinmatch",
    title: "SKINMATCH",
    year: "2024",
    duration: "4 weeks",
    category: "UX/UI Design",
    tags: ["Prototyping", "UI Design"],
    description:
      "High-fidelity interactive prototype for a skincare e-commerce platform. Focused on requirement elicitation, visual hierarchy, and intuitive user flows.",
    coverImage: "/images/skinmatch.png",
    figmaUrl: "",
  },
  {
    slug: "graphic-design",
    title: "GRAPHIC DESIGN",
    year: "2023–2025",
    duration: "Ongoing",
    category: "Graphic Design",
    tags: ["Jersey Design", "Poster", "Vinyl", "Branding"],
    description:
      "A collection of graphic design work including sports jersey patterns, event posters, vinyl wraps, and branding materials created for various organizations and personal projects.",
    coverImage: "/images/graphic/cover.jpg",
    figmaUrl: "",
  },
];

export const experiences: Experience[] = [
  {
    role: "Teaching Assistant (Software Engineering)",
    org: "KMUTT",
    period: "Aug 2025 – Dec 2025",
    bullets: [
      "Mentored 60+ students and standardized UML/SRS documentation",
      "Evaluated deliverables based on Software Architecture and UI/UX principles",
    ],
  },
  {
    role: "Game Development Intern",
    org: "Faculty of Media Arts, KMUTT",
    period: "Jun 2025 – Jul 2025",
    bullets: [
      "Developed core mechanics for a 3D Endless Runner using Unreal Engine 5 Blueprints",
      "Engineered a persistent high-score system and progressive difficulty scaling",
      "Optimized UX within a 3D environment using visual hierarchy and character movement tuning",
    ],
  },
];

export const skills = {
  design: ["Figma", "Adobe Illustrator", "Adobe Photoshop"],
  frontend: ["React", "Next.js", "HTML", "CSS", "JavaScript"],
  tools: ["Git/GitHub", "Jira", "Unreal Engine 5", "SRS/UML"],
  methodology: ["UX Research", "Wireframing", "Prototyping", "UAT", "Agile/Scrum"],
  
};