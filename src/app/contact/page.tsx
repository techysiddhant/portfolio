import Card from '@/components/Card'
import React from 'react'
import StarIcon from "@/assets/icons/star.svg";

const page = () => {
    return (
        <section className='py-20 relative overflow-x-clip h-screen'>
            <div className='absolute h-full w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/20 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10'></div>
            <div className='container mx-auto'>
                <h1 className=" text-5xl font-serif tracking-widest bg-gradient-to-r from-emerald-300 to-sky-300 bg-clip-text text-transparent text-center ">Contact Us</h1>
                <Card className=' flex flex-col mt-10'>
                    <div className={"flex flex-col gap-4 p-6 md:py-8 md:px-10"}>
                        <div className="inline-flex items-center gap-2">
                            <StarIcon className="size-9 text-emerald-300" />
                            <h3 className="font-serif text-2xl md:text-3xl">Let&apos;s Build Something Great Together</h3>
                        </div>
                        <p className="text-sm lg:text-base max-w-xs lg:max-w-md text-white/60">Whether you&apos;re looking for a developer to bring your vision to life or simply want to chat about tech, I&apos;m always excited to collaborate</p>
                    </div>
                    <div className='px-6 py-6 md:py-8 md:px-10 flex flex-col gap-4 '>
                        <input type='text' placeholder='Your Name' className='bg-transparent  border-2 border-white/20 rounded-md px-4 py-2 outline-none focus:border-emerald-300' />
                        <input type='email' placeholder='Your Email' className='bg-transparent  border-2 border-white/20 rounded-md px-4 py-2 outline-none focus:border-emerald-300' />
                        <textarea placeholder='Your Message' className='bg-transparent  border-2 border-white/20 rounded-md px-4 py-2 outline-none focus:border-emerald-300' />
                        <button className='mx-auto  w-fit  text-gray-950 font-semibold items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5'>
                            Let&apos;s Chat
                        </button>
                    </div>
                </Card>

            </div>
        </section>
    )
}

export default page