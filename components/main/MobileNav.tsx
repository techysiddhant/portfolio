"use client"
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Dancing_Script } from "next/font/google";

const DancingScript = Dancing_Script({ subsets: ["latin"] });

const navLinks = [
 { title: "Skills", href: "/skills" },
 { title: "About", href: "/#about" },
 { title: "Projects", href: "/#projects" },
 { title: "Contact", href: "/contact" },
];
const MobileNav = () => {
 const [open, setOpen] = useState(false);
 const toggleMenu = () => {
  setOpen((prevOpen) => !prevOpen);
 };
 const menuVars = {
  initial: {
   scaleY: 0,
  },
  animate: {
   scaleY: 1,
   transition: {
    duration: 0.5,
    ease: [0.12, 0, 0.39, 0],
   },
  },
  exit: {
   scaleY: 0,
   transition: {
    delay: 0.5,
    duration: 0.5,
    ease: [0.22, 1, 0.36, 1],
   },
  },
 };
 const containerVars = {
  initial: {
   transition: {
    staggerChildren: 0.09,
    staggerDirection: -1,
   },
  },
  open: {
   transition: {
    delayChildren: 0.3,
    staggerChildren: 0.09,
    staggerDirection: 1,
   },
  },
 };
 return (
  <div className="lg:hidden">
   <div className="flex justify-between items-center py-8 lg:py-4 px-2 w-full">
    <div className="flex  items-center gap-[1ch]">
     <div className="w-5 h-5 bg-[#6ee7b7] rounded-full" />
     <span className={`text-xl font-semibold tracking-widest text-[#6ee7b7] ${DancingScript.className}`}>
      Siddhant Jain
     </span>
    </div>
    <div
     className={`cursor-pointer lg:hidden  text-lg text-[#6ee7b7] tracking-widest `}
     onClick={toggleMenu}
    >
     Menu
    </div>
   </div>
   <AnimatePresence>
    {open && (
     <motion.div
      variants={menuVars}
      initial="initial"
      animate="animate"
      exit="exit"
      className="fixed left-0 top-0 w-full h-screen origin-top bg-[#11071F] text-black p-10"
     >
      <div className="flex h-full flex-col">
       <div className="flex justify-between">
        <h1 className={`text-xl text-[#6ee7b7] tracking-widest ${DancingScript.className}`}>Siddhant Jain</h1>
        <p
         className={`cursor-pointer text-md text-[#6ee7b7] tracking-widest ${DancingScript.className}`}
         onClick={toggleMenu}
        >
         Close
        </p>
       </div>
       <motion.div
        variants={containerVars}
        initial="initial"
        animate="open"
        exit="initial"
        className="flex flex-col h-full justify-center font-lora items-center gap-4 "
       >
        {navLinks.map((link, index) => {
         return (
          <div key={index} className="overflow-hidden">
           <MobileNavLink
            // key={index}
            title={link.title}
            href={link.href}
           />
          </div>
         );
        })}
       </motion.div>
      </div>
     </motion.div>
    )}
   </AnimatePresence>
  </div>
 )
}

export default MobileNav
const mobileLinkVars = {
 initial: {
  y: "30vh",
  transition: {
   duration: 0.5,
   ease: [0.37, 0, 0.63, 1],
  },
 },
 open: {
  y: 0,
  transition: {
   ease: [0, 0.55, 0.45, 1],
   duration: 0.7,
  },
 },
};
const MobileNavLink = ({ title, href }: any) => {
 return (
  <motion.div
   variants={mobileLinkVars}
   className="text-3xl sm:text-5xl uppercase text-[#6ee7b7] font-medium"
  >
   <Link href={href}>{title}</Link>
  </motion.div>
 );
};
