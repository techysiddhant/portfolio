"use client"
import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
const ExpItem = ({ duration, institution, role, side }: any) => {
 const controls = useAnimation();
 const [ref, inView] = useInView();

 const variants = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: side === 'left' ? -50 : 50 },
 };

 useEffect(() => {
  if (inView) {
   controls.start('visible');
  } else {
   controls.start('hidden');
  }
 }, [controls, inView]);
 return (
  <motion.div ref={ref} initial="hidden"
   animate={controls}
   variants={variants}
   transition={{ duration: 0.5 }} className="mb-[40px] w-full relative last-child:mb-0 odd:pr-0 odd:text-left odd:pl-[37px] even:pl-[37px]  md:odd:pr-[calc(50%+30px)] md:odd:text-right md:even:pl-[calc(50%+30px)] ">
   <div className="h-[16px] w-[16px] bg-[#6ee7b7] absolute left-0 md:left-[calc(50%-8px)] rounded-full top-[10px]"></div>
   <div className="text-xl text-[#10b981] mt-[6px] mx-0 mb-[15px]">{duration}</div>
   <div
    className="bg-[#1f2937] p-[30px] rounded">
    <h3 className="text-xl text-[#d1d5db] mt-0 mx-0 mb-[10px]">{institution}</h3>
    <p className="text-lg text-[#6ee7b7] font-semibold">{role} </p>
   </div>
  </motion.div>
 )
}

export default ExpItem