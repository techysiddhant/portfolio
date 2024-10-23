"use client";
import { useHash } from "@/hooks/useHash";
import { scrollToSection } from "@/utils";
import Link from "next/link";
import { useEffect } from "react";
import { usePathname } from 'next/navigation'
export const Header = () => {
  const hash = useHash();
  const pathname = usePathname();
  useEffect(() => {
    const section = hash.replace("#", "");
    if (section) scrollToSection(section);
  }, [hash]);
  return <div className="flex justify-center items-center fixed w-full top-3 z-10">
    <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
      <Link href="/" className="nav-item">Home</Link>
      {
        !pathname.startsWith("/contact") && <>
          <button onClick={() => scrollToSection('projects')} className="nav-item">Projects</button>
          <button onClick={() => scrollToSection('about')} className="nav-item">About</button>

        </>
      }
      <Link href="/contact" className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900">Contact</Link>
    </nav>
  </div>;
};
