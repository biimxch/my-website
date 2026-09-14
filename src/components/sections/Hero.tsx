import { VideoScrollHero } from "@/components/ui/video-scroll-hero";

export default function Hero() {
  return (
    <VideoScrollHero
      imageSrc="/images/profile.jpg"
      label="Portfolio"
      title="Chompunuch Auttnam"
      subtitle="UX/UI Designer"
      startScale={0.25}
      enableAnimations={true}
    />
  );
}