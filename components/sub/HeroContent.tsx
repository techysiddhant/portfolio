"use client";
import { motion } from "framer-motion";
import {
 slideInFromLeft,
 slideInFromRight,
 slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
const HeroContent = () => {
 return (
  <motion.div
   initial="hidden"
   animate="visible"
   className="flex flex-col md:flex-row items-center justify-center px-4 sm:px-10 md:px-20 gap-10 mt-40 w-full z-[20]"
  >
   <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
    <motion.div
     variants={slideInFromTop}
     className="Welcome-box py-[8px] px-[7px] border border-[#6ee7b7] opacity-[0.9] flex items-center rounded-full w-fit"
    >
     <SparklesIcon className="text-[#6ee7b7] mr-[10px] h-5 w-5 " />
     <h1 className="Welcome-text text-[13px] text-[#6ee7b7]">
      Hi, my name is
     </h1>
    </motion.div>

    <motion.div
     variants={slideInFromLeft(0.5)}
     className="flex flex-col gap-6 mt-1 text-4xl sm:text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
    >
     <span>
      Siddhant
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
       {" "}Jain
      </span>
     </span>
    </motion.div>

    <motion.p
     variants={slideInFromLeft(0.8)}
     className="text-lg text-gray-400 my-2 max-w-[600px]"
    >
     I&apos;m a full stack developer specializing in building exceptional digitial experiences. Currently, I&apos;m focused on building responsive full-stack web applications.
    </motion.p>
    <motion.a
     variants={slideInFromLeft(1)}
     href='/contact'
     className="py-2  text-center text-[#6ee7b7]  max-w-[200px]"
    >
     Let&apos;s Connect!
    </motion.a>
   </div>

   <motion.div
    variants={slideInFromRight(0.8)}
    className="w-full h-full flex justify-center items-center"
   >
    <Image
     src="/profile.jpg"
     alt="profile-picture"
     height={450}
     width={450}
     className="rounded-full object-cover"
    />
   </motion.div>
  </motion.div>
 )
}

export default HeroContent