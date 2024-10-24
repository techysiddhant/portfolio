"use client";
import Image from 'next/image';
import memojiImage from '../assets/images/memoji-computer.png';
import ArrowDown from '@/assets/icons/arrow-down.svg'
import grainImage from '@/assets/images/grain.jpg';
import StarIcon from '@/assets/icons/star.svg'
import SparkleIcon from '@/assets/icons/sparkle.svg'
import HeroOrbit from '@/components/HeroOrbit';
import Link from 'next/link';
import { scrollToSection } from '@/utils';
export const HeroSection = () => {
  return <div className='py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip'>
    <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
      <div className='absolute inset-0 -z-30 opacity-5' style={{ backgroundImage: `url(${grainImage})` }}></div>
      <div className='size-[620px] hero-ring'></div>
      <div className='size-[820px] hero-ring'></div>
      <div className='size-[1020px] hero-ring'></div>
      <div className='size-[1220px] hero-ring'></div>
      <div className='size-[1420px] hero-ring'></div>
      <HeroOrbit rotation={25} size={600} shouldOrbit orbitDuration='30s' shouldSpin spinDuration='3s'>
        <SparkleIcon className="size-8 text-emerald-300/20" />
      </HeroOrbit>
      <HeroOrbit rotation={120} size={620} shouldOrbit orbitDuration='32s' shouldSpin spinDuration='3s'>
        <SparkleIcon className="size-5 text-emerald-300/20" />
      </HeroOrbit>
      <HeroOrbit rotation={227} size={720} shouldOrbit orbitDuration='34s' shouldSpin spinDuration='3s'>
        <SparkleIcon className="size-10 text-emerald-300/20" />
      </HeroOrbit>
      <HeroOrbit size={720} rotation={5} shouldOrbit orbitDuration='36s'>
        <div className="size-3 rounded-full bg-emerald-300/20" />
      </HeroOrbit>
      <HeroOrbit rotation={70} size={800} shouldOrbit orbitDuration='38s' shouldSpin spinDuration='6s'>
        <StarIcon className="size-12 text-emerald-300" />
      </HeroOrbit>
      <HeroOrbit rotation={145} size={820} shouldOrbit orbitDuration='40s' shouldSpin spinDuration='6s'>
        <StarIcon className="size-8 text-emerald-300" />
      </HeroOrbit>
      <HeroOrbit size={940} rotation={40} shouldOrbit orbitDuration='42s'>
        <div className="size-3 rounded-full bg-emerald-300/20" />
      </HeroOrbit>
      <HeroOrbit size={1020} rotation={130} shouldOrbit orbitDuration='44s'>
        <div className="size-3 rounded-full bg-emerald-300/20" />
      </HeroOrbit>
      <HeroOrbit size={1020} rotation={188} shouldOrbit orbitDuration='46s' shouldSpin spinDuration='3s'>
        <SparkleIcon className="size-14 text-emerald-300/20" />
      </HeroOrbit>
      <HeroOrbit size={1080} rotation={-28} shouldOrbit orbitDuration='48s' shouldSpin spinDuration='6s'>
        <StarIcon className="size-28 text-emerald-300" />
      </HeroOrbit>
    </div>
    <div className="container ">
      <div className='flex flex-col items-center'>
        <Image src={memojiImage} className='size-[100px]' alt='Person peeking form behind laptop' />
        <div className='bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg'>
          <div className='bg-green-500 size-2.5 rounded-full relative'>
            <div className="bg-green-500 absolute inset-0 animate-ping-large rounded-full"></div>
          </div>
          <div className='text-sm font-semibold'>Available for new projects</div>
        </div>
      </div>
      <div className='max-w-lg mx-auto'>
        <h1 className='font-serif text-3xl text-center mt-8 tracking-wide md:text-5xl'>Designing Seamless User Journeys</h1>
        <p className='mt-4 text-center text-white/60 md:text-lg'>
          From concept to code, I build fast, functional, and visually stunning web applications. Ready to bring your vision to life?
        </p>
      </div>
      <div className='flex flex-col md:flex-row md:justify-center items-center mt-8 gap-4 z-30 relative'>
        <button onClick={() => scrollToSection('projects')} className='inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl'>
          <span className='font-semibold'>Expore My Work</span>
          <ArrowDown className="size-4" />
        </button>

        <Link href="/contact" className='inline-flex gap-2 items-center border border-white bg-white text-gray-900 h-12 px-6 rounded-xl cursor-pointer'>
          <span>👋</span>
          <span className='font-semibold'>Let&rsquo;s Connect</span>
        </Link>
      </div>
    </div>
  </div>;
};
