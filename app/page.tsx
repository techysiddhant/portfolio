import Experience from "@/components/main/Experience";
import Hero from "@/components/main/Hero";
import MobileNav from "@/components/main/MobileNav";
import Portfolio from "@/components/main/Portfolio";
import Skills from "@/components/main/Skills";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex-flex-col gap-20">

        <Hero />
        <Skills />
        <Experience />
        <Portfolio />
      </div>
    </main>
  );
}
