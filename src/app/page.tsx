import { ProjectsSection } from "@/sections/Projects";
import { Header } from "../sections/Header";
import { HeroSection } from "../sections/Hero";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <ProjectsSection />
    </div>
  );
}
