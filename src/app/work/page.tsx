import Navbar from "@/components/sections/Navbar";
import Projects from "@/components/sections/Projects";
import Footer from "@/components/sections/Footer";

export default function WorkPage() {
	return (
		<>
			<Navbar />
			<main className="work-case-study min-h-screen bg-white text-[#111111] antialiased">
				<Projects showSeeAll={false} caseStudyStyle />
			</main>
			<Footer />
		</>
	);
}
