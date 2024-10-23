import Card from '@/components/Card'
import React from 'react'
import StarIcon from "@/assets/icons/star.svg";
import ContactForm from '@/components/ContactForm';
import { Header } from '@/sections/Header';

const page = () => {
    return (
        <>
            <Header />
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
                        <ContactForm />
                    </Card>

                </div>
            </section>
        </>
    )
}

export default page