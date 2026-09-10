import Hero from "@/components/sections/Hero";
import AboutIntro from "@/components/sections/AboutIntro";
import Projects from "@/components/sections/Projects";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutIntro />
      <Projects />
      <Footer />

    </div>
  );
}