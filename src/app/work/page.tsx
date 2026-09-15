import Navbar from "@/components/sections/Navbar";
import Projects from "@/components/sections/Projects";
import Footer from "@/components/sections/Footer";

export default function WorkPage() {
	return (
		<>
			<Navbar />
			<main className="section-container pt-[clamp(6rem,10vw,9rem)]">
				<Projects showSeeAll={false} />
			</main>
			<Footer />
		</>
	);
}
