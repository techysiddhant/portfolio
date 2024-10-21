import { ProjectsSection } from "@/sections/Projects";
import { Header } from "../sections/Header";
import { HeroSection } from "../sections/Hero";
import { TapeSection } from "@/sections/Tape";
import { AboutSection } from "@/sections/About";
import { ContactSection } from "@/sections/Contact";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <ProjectsSection />
      <TapeSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
}
