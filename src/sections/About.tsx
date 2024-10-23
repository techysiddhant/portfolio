"use client";
import Card from "@/components/Card";
import SectionHeader from "@/components/SectionHeader";
import bookImage from "@/assets/images/book-cover.png";
import Image from "next/image";
import mapImage from "@/assets/images/map.png";
import smileMemoji from "@/assets/images/memoji-smile.png";
import CardHeader from "@/components/CardHeader";
import ToolboxItems from "@/components/ToolboxItems";
import { motion } from 'framer-motion'
import { useRef } from "react";
import { hobbies, toolboxItems } from "@/constants";


export const AboutSection = () => {
  const constraintRef = useRef(null)
  return <section className="py-20 lg:py-28" id="about">
    <div className="container mx-auto">
      <SectionHeader eyebrow="About Me" title="A Glimpse Into My World" description="Learn more about who I am, what I do, and what inspires me." />
      <div className="mt-20 flex flex-col gap-6">
        <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-8">
          <Card className="h-[320px] md:col-span-2 lg:col-span-1">
            <CardHeader title="My Reads" description="Expore the books shaping my perspectives." />
            <div className="w-40 mx-auto mt-2 md:mt-0">
              <Image src={bookImage} alt="book cover" />
            </div>
          </Card>
          <Card className="h-[320px]  md:col-span-3 lg:col-span-2">
            <CardHeader title="My Toolbox" className="" description="Discover the tools I use to create exceptional digital experiences." />
            <ToolboxItems items={toolboxItems} className="" itemsWrapperClassName="animate-move-left [animation-duration:30s]" />
            <ToolboxItems items={toolboxItems} className="mt-6 " itemsWrapperClassName=" animate-move-right [animation-duration:20s]" />
          </Card>
        </div>
        <div className="grid gird-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-8">
          <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
            <CardHeader className="px-6 py-6" title="Beyond the code" description="Discover my passions and hobbies outside the digital realm." />
            <div className="relative flex-1" ref={constraintRef}>
              {
                hobbies?.map((hobby) => (
                  <motion.div drag dragConstraints={constraintRef} key={hobby.title} style={{ left: hobby.left, top: hobby.top }} className="absolute inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 "   >
                    <span className="text-gray-950 font-medium">{hobby.title}</span>
                    <span>{hobby.emoji}</span>
                  </motion.div>
                ))
              }
            </div>
          </Card>
          <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
            <Image src={mapImage} alt="map" className="h-full w-full object-cover object-left-top" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full  after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30 ">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]"></div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10"></div>
              <Image src={smileMemoji} alt="smiling memoji" className="size-20" />
            </div>
          </Card>
        </div>

      </div>
    </div>
  </section>;
};
