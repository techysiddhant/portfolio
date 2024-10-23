import Link from "next/link";

export const Header = () => {
  return <div className="flex justify-center items-center fixed w-full top-3 z-10">
    <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
      <Link href="/" className="nav-item">Home</Link>
      <a href="#about" className="nav-item">Projects</a>
      <a href="#" className="nav-item">About</a>
      <Link href="/contact" className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900">Contact</Link>
    </nav>
  </div>;
};
