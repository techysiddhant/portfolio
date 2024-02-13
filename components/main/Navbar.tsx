import MobileNav from "./MobileNav";
import { Dancing_Script } from "next/font/google";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

const DancingScript = Dancing_Script({ subsets: ["latin"] });
const Navbar = () => {
 return (
  <header className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#9857D3]/20  backdrop-blur-md z-50 px-10">
   <div className="hidden w-full h-full lg:flex flex-row items-center justify-between m-auto px-[10px]">
    <Link
     href="/"
     className="h-auto w-auto flex flex-row items-center"
    >
     <span className={`font-semibold ml-[10px] hidden md:block text-[#6ee7b7] text-2xl tracking-wider  ${DancingScript.className}`}>
      Siddhant Jain
     </span>
    </Link>

    <div className="hidden w-[500px] h-full lg:flex flex-row items-center justify-between md:mr-20">
     <div className="flex items-center justify-center gap-20 w-full h-auto   mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
      <a href="/#about" className="cursor-pointer">
       About
      </a>
      <a href="/#skills" className="cursor-pointer">
       Skills
      </a>
      <a href="/#projects" className="cursor-pointer">
       Projects
      </a>
      <a href="/contact" className="cursor-pointer">
       Contact
      </a>
     </div>
    </div>

    <div className="hidden lg:flex flex-row gap-5 text-white">
     <Link href='https://www.linkedin.com/in/techysiddhant/'>
      <FaLinkedinIn size={24} className=" hover:text-[#6ee7b7] hover:scale-110 transition-all ease-in-out duration-300" />
     </Link>
     <Link href='https://www.instagram.com/techysiddhant/'>
      <FaInstagram size={24} className=" hover:text-[#6ee7b7] hover:scale-110 transition-all ease-in-out duration-300" />
     </Link>
     <Link href='https://github.com/techysiddhant'>
      <FaGithub size={24} className=" hover:text-[#6ee7b7] hover:scale-110 transition-all ease-in-out duration-300" />
     </Link>
    </div>
   </div>
   <MobileNav />
  </header>
 )
}

export default Navbar