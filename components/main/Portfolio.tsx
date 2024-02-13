"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { RefObject, useRef } from "react";
const items = [
  {
    id: 1,
    title: "Codify (LMS Platform)",
    desc: "Codify is your subscription-based portal to coding mastery, built with the powerful MERN stack. Explore our diverse library of courses, pay a monthly fee, and gain access to interactive lessons, coding challenges, and expert-led guidance. Unleash your potential, one line at a time!",
    img: "/codify.png",
    link: "https://codifyio.vercel.app/",
  },
  {
    id: 2,
    title: "Unfold Page",
    desc: "The web app is built using Node.js, Express.js, and MongoDB, and includes JWT authentication to ensure secure access for users. Unfold Page is a web app that allows users to publish short stories anonymously, without revealing their identity.",
    img: "/unfold.png",
    link: "",
  },
  {
    id: 3,
    title: "Notes App",
    color: "from-indigo-300 to-blue-300",
    desc: "This notes taking web app is built using React JS and Firebase, making it a reliable and efficient tool for managing notes. The app features a Google sign-in feature that allows for easy access to notes from any device, ensuring seamless workflow.",
    img: "/notes.png",
    link: "https://siddhant-typescript-todo.netlify.app/",
  },

  // {
  //  id: 3,
  //  color: "from-violet-300 to-purple-300",
  //  title: "Vanilla Book App",
  //  desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
  //  img: "https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
  //  link: "https://lama.dev",
  // },
  // {
  //  id: 4,
  //  color: "from-purple-300 to-red-300",
  //  title: "Spotify Music App",
  //  desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
  //  img: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  //  link: "https://lama.dev",
  // },
];
const Portfolio = () => {
  const ref = useRef<HTMLInputElement>(null)
  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <motion.div
      className="h-full py-10 md:py-20"
      id="projects"
    // initial={{ y: "-200vh" }}
    // animate={{ y: "0%" }}
    // transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative z-40" ref={ref}>
        {/* <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">
     My Works
    </div> */}
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            {/* <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" /> */}
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center z-50  ${item.color}`}
                key={item.id}
              >
                <div className="flex flex-col gap-8 text-white">
                  <h1 className="text-xl font-bold md:text-4xl lg:text-6xl xl:text-6xl ">
                    {item.title}
                  </h1>
                  <div className="relative  w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px]">
                    <Image src={item.img} alt="project-poster"
                      fill
                      sizes="(max-width: 768px) 50vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-contain" />
                  </div>
                  <p className="w-80 md:w96 lg:w-[500px] lg:text-lg xl:w-[600px] my-2">
                    {item.desc}
                  </p>
                  <Link href={item.link} className="flex justify-end ">
                    <button className="p-2 text-sm md:p-4 md:text-md lg:p-2 lg:text-lg bg-[#6ee7b7] text-slate-900 font-semibold m-4 rounded">See Demo</button>
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="w-screen text-white h-screen flex flex-col gap-16 items-center justify-center text-center">
        <h1 className="text-6xl sm:text-5xl md:text-8xl">Do you have a project?</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px] "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#fff">
              <textPath xlinkHref="#circlePath" className="text-xl">
                Front-end and Back-end Developer
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="w-16 z-50 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-[#6ee7b7] rounded-full flex items-center justify-center"
          >
            Hire Me

          </Link>
        </div>
      </div>
    </motion.div>
  )
}

export default Portfolio